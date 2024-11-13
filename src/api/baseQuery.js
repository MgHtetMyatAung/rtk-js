import { fetchBaseQuery, retry } from "@reduxjs/toolkit/query";

export const baseQuery = retry(
  fetchBaseQuery({ baseUrl: import.meta.env.VITE_APP_URL }),
  { maxRetries: 3 }
);
