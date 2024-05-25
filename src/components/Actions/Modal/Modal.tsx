import { Dialog } from 'primereact/dialog';
import { FC, PropsWithChildren } from 'react';
import { ModatProps } from './Modal.types';

export const Modal: FC<PropsWithChildren<ModatProps>> = ({ visible, onClose, children }) => {
  return (
    <Dialog
      header="Update table value"
      visible={visible}
      style={{ width: '50vw' }}
      onHide={onClose}
    >
      {children}
    </Dialog>
  );
};
