import { FC } from 'react';
import { Form, Formik, FormikProps } from 'formik';
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from 'react-redux';
import { Init, UpdateTableValueFormProps } from './UpdateTableValueForm.types';
import { InputText } from 'primereact/inputtext';
import { MultiSelect } from 'primereact/multiselect';
import { options } from './UpdateTableValueForm.options';
import { RootState } from '../../store';
import { updateData } from '../../store/commonSlice';
import { updateTableValueSchema } from './UpdateTableValueForm.schema';
import { FormError } from '../../components';

export const UpdateTableValueForm: FC<UpdateTableValueFormProps> = ({ init, id, closeModal }) => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.common.data);

  const onFormSubmit = (values: Init) => {
    const newData = data.map((item) => {
      if (item.id !== id) {
        return item;
      }
      return {
        ...values,
        id,
      };
    });

    dispatch(updateData(newData));

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
              id="name"
              className="w-full md:w-full mb-4"
              value={values['n']}
              onChange={handleChange}
              type={'text'}
              required
              placeholder="Name"
            />
            <FormError text={errors.n} />

            <MultiSelect
              id="category"
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
