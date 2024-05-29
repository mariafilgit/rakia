import { CatalogDTO } from '../../types';

export type UpdateTableValueFormProps = {
  init: Init;
  id: string;
  name: string;
  closeModal: () => void;
  data: CatalogDTO[];
};

export type Init = {
  n: string;
  c: string[];
};
