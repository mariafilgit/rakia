import { string, array, object } from 'yup';

export const updateTableValueSchema = object().shape({
  n: string().min(10).required(),
  c: array().of(string()),
});
