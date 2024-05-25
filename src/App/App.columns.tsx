import { Actions } from '../components';

export const cols = [
  {
    field: 'name',
    header: 'Name',
    sortable: true,
  },
  {
    field: 'category',
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
