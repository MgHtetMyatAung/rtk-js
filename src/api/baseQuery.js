import { fetchBaseQuery, retry } from "@reduxjs/toolkit/query";
import { decryptToken } from "../libs/crypto";

const status_codes = [200, 201, 204, 400, 401, 403, 500];

const customBaseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.accessToken;
    if (token) {
      headers.set("authorization", `Bearer ${decryptToken(token)}`);
    }
    return headers;
  },
});

export const baseQuery = retry(
  async (args, api, extraOptions) => {
    const result = await customBaseQuery(args, api, extraOptions);
    // Prevent retry
    const isStopRetry =
      result?.error &&
      typeof result.error.status === "number" &&
      status_codes.includes(result.error.status);
    if (isStopRetry) {
      return retry.fail(result);
    }
    return result;
  },
  { maxRetries: 3 }
);
