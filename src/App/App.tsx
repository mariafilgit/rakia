import { FC, useEffect, useMemo } from 'react';
import { Table } from '../components';
import { cols } from './App.columns';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import { dataApi } from '../store/data.api';
import { transformString } from '../helpers/transformString';
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
    if (!data?.values || !data?.values?.length) {
      return [];
    }
    return transformString(data.values);
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
