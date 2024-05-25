import { FC, useEffect, useMemo } from 'react';
import { Table } from '../components';
import { cols } from './App.columns';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { getInitialData } from '../store/commonSlice';
import '../index.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';

export const App: FC = () => {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.common.data);

  useEffect(() => {
    dispatch(getInitialData());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const values = useMemo(() => {
    return [...data].map((value) => ({
      ...value,
      category: value?.category?.join(', '),
    }));
  }, [data]);

  return (
    <>
      <Table
        values={values}
        cols={cols}
      />
    </>
  );
};
