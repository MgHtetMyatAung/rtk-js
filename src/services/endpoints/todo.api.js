import { baseApi } from "../../api/baseApi";
import { revalidate } from "../revalidate";

export const todoApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTodo: build.query({
      query: () => ({
        url: "/todo",
        method: "GET",
      }),
      providesTags: [revalidate.todo, revalidate.note],
    }),
    addTodo: build.mutation({
      query: (data) => ({
        url: "/todo",
        method: "POST",
        data,
      }),
      invalidatesTags: [revalidate.todo],
    }),
  }),
});
