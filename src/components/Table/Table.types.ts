import { FC, ReactNode } from 'react';
import { ActionsProps } from '../Actions/Actions.types';

export type TableProps = {
  values: Value[];
  cols: Col[];
};

export type Col = {
  field: string;
  header: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: FC<ActionsProps>;
  sortable?: boolean;
};

export type Value = Record<string, string | ReactNode>;
