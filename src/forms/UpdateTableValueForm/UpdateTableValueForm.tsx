import { FC, useMemo } from 'react';
import { Form, Formik, FormikProps } from 'formik';
import { Button } from 'primereact/button';
import { Init, UpdateTableValueFormProps } from './UpdateTableValueForm.types';
import { InputText } from 'primereact/inputtext';
import { MultiSelect } from 'primereact/multiselect';
import { updateTableValueSchema } from './UpdateTableValueForm.schema';
import { FormError } from '../../components';
import { dataApi } from '../../store/data.api';
import { transformDataToString } from '../../helpers/transformDataToString';

export const UpdateTableValueForm: FC<UpdateTableValueFormProps> = ({
  init,
  name,
  id,
  data,
  closeModal,
}) => {
  const [updateData] = dataApi.useUpdateDataMutation();

  const onFormSubmit = async (values: Init) => {
    const newData = data.map((item) => {
      return item.n !== name
        ? item
        : {
            ...values,
            id,
          };
    });

    try {
      const transformResult = transformDataToString(newData);
      await updateData({ values: `{${transformResult}}` });
    } catch (e) {
      console.error(e);
    }
    closeModal();
  };

  const options = useMemo(() => {
    if (!data) {
      return [];
    }
    const res = data.reduce(
      (acc, cur) => {
        return Array.from(
          new Set([
            ...acc,
            ...cur.c.map((item) => ({
              name: item,
              value: item,
            })),
          ])
        );
      },
      [] as { name: string; value: string }[]
    );

    return res;
  }, [data]);

  return (
    <Formik
      validationSchema={updateTableValueSchema}
      initialValues={init}
      onSubmit={onFormSubmit}
    >
      {({ handleSubmit, handleChange, values, errors }: FormikProps<Init>) => (
        <Form
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="space-y-1.5">
            <InputText
              id="n"
              className="w-full md:w-full mb-4"
              value={values.n}
              onChange={handleChange}
              type={'text'}
              required
              placeholder="Name"
            />
            <FormError text={errors.n} />

            <MultiSelect
              id="c"
              value={values.c}
              onChange={handleChange}
              options={options}
              optionLabel="name"
              placeholder="Select Categories"
              maxSelectedLabels={5}
              className="w-full md:w-full mb-4"
            />
            <FormError text={errors.c?.toString()} />

            <div className="flex float-end pt-3">
              <Button
                className="px-20"
                type="submit"
              >
                Submit
              </Button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};
