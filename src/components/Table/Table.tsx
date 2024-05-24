import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { FC } from 'react';
import { TableProps } from './Table.types';

export const Table: FC<TableProps> = ({ values, cols }) => {
  return (
    <DataTable
      value={values}
      tableStyle={{ minWidth: '50rem' }}
    >
      {cols.map((col) => (
        <Column
          key={col.header}
          field={col.field}
          header={col.header}
          body={col?.body}
        ></Column>
      ))}
    </DataTable>
  );
};
