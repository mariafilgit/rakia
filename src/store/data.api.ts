import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const dataApi = createApi({
  reducerPath: 'addressApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/data',
  }),
  endpoints: (build) => {
    return {
      getData: build.query<{ values: string }, null>({
        query: () => ({
          url: '/',
          method: 'get',
        }),
      }),
    };
  },
});
