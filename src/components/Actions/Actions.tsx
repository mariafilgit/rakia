import { FC, useEffect, useState } from 'react';
import { ActionsProps } from './Actions.types';
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { updateData } from '../../store/commonSlice';
import { Modal } from './Modal/Modal';
import { UpdateTableValueForm } from '../../forms';
import { DataDto } from '../../types';

export const Actions: FC<ActionsProps> = ({ id }) => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.common.data);

  const [showModal, setShowModal] = useState(false);
  const [init, setInit] = useState<DataDto>();

  useEffect(() => {
    setInit(data.find((item) => item.id === id));
  }, [data, id]);

  const handleShowModal = (status: boolean) => () => {
    setShowModal(status);
  };

  const onDelete = () => {
    const result = data?.filter((item) => item.id !== id);
    dispatch(updateData(result));
  };

  return (
    <div className="flex">
      <Modal
        visible={showModal}
        onClose={handleShowModal(false)}
      >
        {init && (
          <UpdateTableValueForm
            init={init}
            id={id}
            closeModal={handleShowModal(false)}
          />
        )}
      </Modal>
      <Button
        onClick={handleShowModal(true)}
        icon="pi pi-user-edit"
        rounded
        text
        severity="success"
        aria-label="Update"
      />
      <Button
        onClick={onDelete}
        icon="pi pi-trash"
        key={id}
        rounded
        text
        severity="danger"
        aria-label="Delete"
      />
    </div>
  );
};
