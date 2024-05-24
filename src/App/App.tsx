import { FC } from 'react';
import { Table } from '../components';
import { cols } from './App.columns';

const data = [
  {
    id: 1,
    name: 'Alan Wake',
    category: ['TPS', 'Adventure', 'Horror'],
  },
  {
    id: 2,
    name: 'Jason	Bourne',
    category: ['Movie', 'Thriller', 'Spy'],
  },
  {
    id: 3,
    name: 'Bruce	Wayne',
    category: ['Batman', 'Philanthropist', 'Orphan'],
  },
];

export const App: FC = () => {
  return (
    <>
      Welcome
      <Table
        values={data}
        cols={cols}
      />
    </>
  );
};
