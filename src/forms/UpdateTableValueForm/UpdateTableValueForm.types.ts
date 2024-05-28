export type UpdateTableValueFormProps = {
  init: Init;
  id: number | string;
  closeModal: () => void;
};

export type Init = {
  n: string;
  c: string[];
};
