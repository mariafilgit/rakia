import { FC, useEffect, useMemo } from 'react';
import { Table } from '../components';
import { cols } from './App.columns';
import { dataApi } from '../store/data.api';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import '../index.css';

export const App: FC = () => {
  const [getVals, { data }] = dataApi.useLazyGetDataQuery();

  const handleGetData = async () => {
    try {
      await getVals(null);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    handleGetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const values = useMemo(() => {
    return data
      ? data.map((item) => ({
          ...item,
          c: item.c.join(', '),
        }))
      : [];
  }, [data]);

  return (
    <>
      {values && (
        <Table
          values={values}
          cols={cols}
        />
      )}
    </>
  );
};
