import { FC } from 'react';
import { ActionsProps } from './Actions.types';
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { updateData } from '../../store/commonSlice';

export const Actions: FC<ActionsProps> = ({ id }) => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.common.data);

  const onDelete = () => {
    const result = data?.filter((item) => item.id !== id);
    dispatch(updateData(result));
  };

  const onUpdate = () => {
    console.log('update');
  };

  return (
    <div className="flex bg-red">
      <Button
        onClick={onUpdate}
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
