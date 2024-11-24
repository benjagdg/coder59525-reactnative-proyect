import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shopApi = createApi({
  reducerPath: "shopApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_FIREBASE_DATABASE_URL}),
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
    getOrdersByCustomer: builder.query({
      query: (userMail) => `orders.json?orderBy="userMail"&equalTo="${userMail}"`,
      transformResponse: (response) => (
        response ? Object.values(response) : []
      ),
    }),
  }),
});

export const { useGetCategoriesQuery, useGetProductsByCategoryQuery, useGetProductByIdQuery, useGetOrdersByCustomerQuery } = shopApi;