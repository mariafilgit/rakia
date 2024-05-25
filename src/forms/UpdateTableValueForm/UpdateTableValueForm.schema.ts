import * as Yup from 'yup';

export const updateTableValueSchema = Yup.object().shape({
  name: Yup.string().min(10).required(),
  category: Yup.array().of(Yup.string()),
});
