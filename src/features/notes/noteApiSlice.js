import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../../app/api/apiSlice";

const noteAdapter = createEntityAdapter({});
const initialState = noteAdapter.getInitialState();

export const noteApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: () => ({
        url: "/notes",
        method: "GET",
      }),
      transformErrorResponse: (response) => response.error,
      transformResponse: (response) => {
        const results = response?.map((note) => {
          note.id = note._id;
          return note;
        });
        return noteAdapter.setAll(initialState, results);
      },

      providesTags: (result, error, id) => {
        if (result?.ids) {
          return [
            { type: "Note", id },
            ...result.ids.map((id) => ({ type: "Note", id })),
          ];
        } else {
          return [{ type: "Note", id }];
        }
      },
    }),

    addNote: builder.mutation({
      query: (addData) => ({
        url: "/notes",
        method: "POST",
        body: { ...addData },
      }),
      invalidatesTags: [{ type: "Notes", id: "LIST" }],
    }),

    editNote: builder.mutation({
      query: (editNoteData) => ({
        url: "/notes",
        method: "PUT",
        body: { ...editNoteData },
      }),
      invalidatesTags: (result, error, arg) => {
        return [{ type: "Note", id: arg.id }];
      },
    }),
    deleteNote: builder.mutation({
      query: ({ id }) => ({
        url: "/notes",
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: (result, error, arg) => {
        return [{ type: "Note", id: arg.id }];
      },
    }),

    //end
  }),
});

export const {
  useGetNotesQuery,
  useAddNoteMutation,
  useEditNoteMutation,
  useDeleteNoteMutation,
} = noteApiSlice;
