import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { firebase_base_url } from "./firebase";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: firebase_base_url}),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => `categories.json`,
    }),
    getProductsByCategory: builder.query({
      query: (category) => `products.json?orderBy="categoria"&equalTo="${category}"`,
      transformResponse: (response) => (
        response ? Object.values(response) : []
      )
    }),
    getProductById : builder.query({
      query: (id) => `products.json?orderBy="id"&equalTo=${id}`,
      transformResponse: (response) => (
        response ? Object.values(response)[0] : null
      )
    }),
  }),
});

export const { useGetCategoriesQuery, useGetProductsByCategoryQuery, useGetProductByIdQuery } = shopApi;