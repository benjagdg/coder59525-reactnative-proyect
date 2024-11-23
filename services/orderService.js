import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { firebase_base_url } from "./firebase";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl: firebase_base_url}),
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