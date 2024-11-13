import { createApi } from "@reduxjs/toolkit/query/react";
import { revalidate } from "../services/revalidate";
import { baseQuery } from "./baseQuery";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: Object.values(revalidate),
  endpoints: () => ({}),
});
