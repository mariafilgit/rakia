export type UpdateTableValueFormProps = {
  init: Init;
  id: number;
  closeModal: () => void;
};

export type Init = {
  name: string;
  category: string[];
};
