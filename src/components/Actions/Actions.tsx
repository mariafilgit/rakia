import { FC } from 'react';
import { ActionsProps } from './Actions.types';

export const Actions: FC<ActionsProps> = ({ id }) => {
  return <button>{id}</button>;
};
