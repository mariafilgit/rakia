import { Actions } from '../components';

export const cols = [
  {
    field: 'n',
    header: 'Name',
    sortable: true,
  },
  {
    field: 'c',
    header: 'Category',
    sortable: true,
  },
  {
    field: 'actions',
    header: 'Actions',
    body: Actions,
    sortable: false,
  },
];
