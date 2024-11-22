import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { firebase_base_url } from "./database";

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
  }),
});

export const { useGetCategoriesQuery, useGetProductsByCategoryQuery } = shopApi;