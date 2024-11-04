import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IProduct, IProductCategory} from '../interfaces';

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
    getProductsByCategory: builder.query<IProduct[], string>({
      query: (category: string) => `categories/${category}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsCategoriesQuery,
  useGetProductsByCategoryQuery,
} = apiSlice;
