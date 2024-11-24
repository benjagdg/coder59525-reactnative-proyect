import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_FIREBASE_DATABASE_URL }),
  endpoints: (builder) => ({
    getUserPicture: builder.query({
      query: (localId) => `usersPictures/${localId}.json`,
    }),
    putUserPicture: builder.mutation({
      query: ({ image, localId }) => ({
        url: `usersPictures/${localId}.json`,
        method: "PUT",
        body: {
          image: image
        },
      }),
    }),
  }),
});

export const { useGetUserPictureQuery, usePutUserPictureMutation } = userApi;