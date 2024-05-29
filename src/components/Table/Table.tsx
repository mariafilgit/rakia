import { FC } from 'react';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { TableProps } from './Table.types';

export const Table: FC<TableProps> = ({ values, cols }) => {
  return (
    <DataTable value={values}>
      {cols.map((col) => (
        <Column
          key={col.header}
          field={col.field}
          header={col.header}
          body={col?.body}
          sortable={col?.sortable}
        ></Column>
      ))}
    </DataTable>
  );
};
