import { FC, useEffect, useState } from 'react';
import { ActionsProps } from './Actions.types';
import { Button } from 'primereact/button';
import { Modal } from './Modal/Modal';
import { UpdateTableValueForm } from '../../forms';
import { DataDto } from '../../types';
import { dataApi } from '../../store/data.api';

export const Actions: FC<ActionsProps> = ({ n, id }) => {
  const [getVals, { data }] = dataApi.useLazyGetDataQuery();
  const [deleteData] = dataApi.useDeleteDataMutation();

  const [showModal, setShowModal] = useState(false);
  const [init, setInit] = useState<DataDto>();

  const handleGetData = async () => {
    try {
      await getVals(null);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    handleGetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setInit(data?.find((item) => item.n === n));
  }, [data, n]);

  const handleShowModal = (status: boolean) => () => {
    setShowModal(status);
  };

  const onDelete = async () => {
    const newData = data?.filter((item) => item.n !== n);

    try {
      let transformResult = JSON.stringify(newData).replace(/[}{]/g, '');
      transformResult = transformResult.substring(1, transformResult.length - 1);
      await deleteData({ values: `{${transformResult}}` });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex">
      <Modal
        visible={showModal}
        onClose={handleShowModal(false)}
      >
        {init && data && (
          <UpdateTableValueForm
            init={init}
            id={id}
            name={n}
            data={data}
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
