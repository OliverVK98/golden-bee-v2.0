import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_SERVER_URL,
});

export const rtkApi = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: () => ({}),
});
