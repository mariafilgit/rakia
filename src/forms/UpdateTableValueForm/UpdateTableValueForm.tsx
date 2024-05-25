import { FC } from 'react';
import { Form, Formik, FormikProps } from 'formik';
import { UpdateTableValueFormProps } from './UpdateTableValueForm.types';
import { InputText } from 'primereact/inputtext';
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import { options } from './UpdateTableValueForm.options';

export const UpdateTableValueForm: FC<UpdateTableValueFormProps> = ({ init }) => {
  const handleChangeCategories =
    (
      handleChange: (field: string, value: unknown, shouldValidate?: boolean | undefined) => void,
      field: string
    ) =>
    (e: MultiSelectChangeEvent) => {
      console.log(e?.target);
      handleChange(field, e.target.value);
    };
  return (
    <Formik
      initialValues={init}
      onSubmit={console.log}
    >
      {({
        handleSubmit,
        handleChange,
        setFieldValue,
        values,
      }: FormikProps<{ name: string; category: string[] }>) => (
        <Form
          onSubmit={handleSubmit}
          noValidate
        >
          <div>
            <InputText
              className="w-full mb-2"
              value={values['name']}
              onChange={handleChange}
              type={'text'}
              required
              placeholder="Location Name"
            />

            <MultiSelect
              value={values['category']}
              onChange={handleChangeCategories(setFieldValue, 'category')}
              options={options}
              optionLabel="name"
              placeholder="Select Cities"
              maxSelectedLabels={3}
              className="w-full"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};
