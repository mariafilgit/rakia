import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { transformString } from '../helpers/transformString';

export const dataApi = createApi({
  reducerPath: 'addressApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3000/data',
  }),
  tagTypes: ['Data'],
  endpoints: (build) => {
    return {
      getData: build.query({
        query: () => ({
          url: '/',
          method: 'get',
        }),
        transformResponse: (data: { values: string; id: number }[]) => {
          return transformString(data?.[0].values);
        },
        // providesTags: ['Data'],
      }),
      updateData: build.mutation<{ values: string }, { values: string }>({
        query: (values) => ({
          url: '/1',
          method: 'put',
          body: values,
        }),
        // invalidatesTags: ['Data'],
      }),
    };
  },
});
