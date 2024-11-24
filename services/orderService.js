import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_FIREBASE_DATABASE_URL}),
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: `orders.json`,
        method: 'POST',
        body: order
      }),
    }),
  }),
});

export const { useCreateOrderMutation } = orderApi;