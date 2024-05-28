import { DataDto } from '../../types';

export type UpdateTableValueFormProps = {
  init: Init;
  id: number | string;
  name: string;
  closeModal: () => void;
  data: DataDto[];
};

export type Init = {
  n: string;
  c: string[];
};
