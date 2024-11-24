import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_FIREBASE_AUTH_URL}),
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: ({...auth}) => ({
        url: `accounts:signInWithPassword?key=${process.env.EXPO_PUBLIC_FIREBASE_API_KEY}`,
        method: 'POST',
        body: auth,
      }),
    }), 
  }),
});

export const { useUserLoginMutation } = authApi;