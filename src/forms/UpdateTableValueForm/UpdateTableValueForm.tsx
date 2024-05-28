import { FC } from 'react';
import { Form, Formik, FormikProps } from 'formik';
import { Button } from 'primereact/button';
import { Init, UpdateTableValueFormProps } from './UpdateTableValueForm.types';
import { InputText } from 'primereact/inputtext';
import { MultiSelect } from 'primereact/multiselect';
import { options } from './UpdateTableValueForm.options';
import { updateTableValueSchema } from './UpdateTableValueForm.schema';
import { FormError } from '../../components';
import { dataApi } from '../../store/data.api';

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
      if (item.n !== name) {
        return item;
      }
      return {
        ...values,
        id,
      };
    });

    try {
      await updateData({ values: JSON.stringify(newData) });
    } catch (e) {
      console.error(e);
    }
    closeModal();
  };

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
          <div>
            <InputText
              id="n"
              className="w-full md:w-full mb-4"
              value={values['n']}
              onChange={handleChange}
              type={'text'}
              required
              placeholder="Name"
            />
            <FormError text={errors.n} />

            <MultiSelect
              id="c"
              value={values['c']}
              onChange={handleChange}
              options={options}
              optionLabel="name"
              placeholder="Select Categories"
              maxSelectedLabels={5}
              className="w-full md:w-full mb-4"
            />
            <FormError text={errors.c?.toString()} />

            <footer className="flex float-end pt-3">
              <Button
                className="px-20"
                type="submit"
              >
                Submit
              </Button>
            </footer>
          </div>
        </Form>
      )}
    </Formik>
  );
};
