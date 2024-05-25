import { ColumnBodyOptions } from 'primereact/column';
import { ReactNode } from 'react';

export type TableProps = {
  values: Value[];
  cols: Col[];
};

export type Col = {
  field: string;
  header: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: ReactNode | ((data: any, options: ColumnBodyOptions) => ReactNode);
  sortable?: boolean;
};

export type Value = Record<string, string | ReactNode>;
