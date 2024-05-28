import * as Yup from 'yup';

export const updateTableValueSchema = Yup.object().shape({
  n: Yup.string().min(10).required(),
  c: Yup.array().of(Yup.string()),
});
