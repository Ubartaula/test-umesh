import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const userAdapter = createEntityAdapter({});
const initialState = userAdapter.getInitialState();

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      transformErrorResponse: (response) => response.error,
      transformResponse: (response) => {
        const results = response?.map((user) => {
          user.id = user._id;
          return user;
        });
        return userAdapter.setAll(initialState, results);
      },

      providesTags: (result, error, id) => {
        if (result?.ids) {
          return [
            { type: "User", id },
            ...result.ids.map((id) => ({ type: "User", id })),
          ];
        } else {
          return [{ type: "User", id }];
        }
      },
    }),

    addUser: builder.mutation({
      query: (addData) => ({
        url: "/users",
        method: "POST",
        body: { ...addData },
      }),
      invalidatesTags: [{ type: "Users", id: "LIST" }],
    }),

    editUser: builder.mutation({
      query: (editUserData) => ({
        url: "/users",
        method: "PUT",
        body: { ...editUserData },
      }),
      invalidatesTags: (result, error, arg) => {
        return [{ type: "User", id: arg.id }];
      },
    }),
    deleteUser: builder.mutation({
      query: ({ id }) => ({
        url: "/users",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => {
        return [{ type: "User", id: arg.id }];
      },
    }),

    //end
  }),
});

export const {
  useGetUsersQuery,
  useAddUserMutation,
  useEditUserMutation,
  useDeleteUserMutation,
} = userApiSlice;
