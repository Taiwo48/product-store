import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
  endpoints: (builder) => ({
    getProducts: builder.query<any[], void>({
      query: () => "/products",
      transformResponse: (response: any[]) =>
        response.map((p) => ({
          Id: p.id,
          Title: p.title,
          Description: p.description,
          Price: p.price,
          Image: p.image,
          Category: p.category,
        })),
    }),
  }),
});

export const { useGetProductsQuery } = apiSlice;