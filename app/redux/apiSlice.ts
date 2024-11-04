import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IProductCategory} from '../interfaces';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/products'}),
  endpoints: builder => ({
    getProducts: builder.query<
      IProductCategory[],
      {limit: number; skip: number}
    >({
      query: ({limit, skip}) => '?limit=' + limit + '&skip=' + skip,
    }),
    getProductsCategories: builder.query<IProductCategory[], void>({
      query: () => 'categories',
    }),
  }),
});

export const {useGetProductsQuery, useGetProductsCategoriesQuery} = apiSlice;