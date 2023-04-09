import React from "react";
import { useGetNotesQuery } from "./noteApiSlice";
import Note from "./Note";
const ListNote = () => {
  const {
    data: notes,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetNotesQuery("listNotes", {
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  });

  let content;
  if (isLoading) {
    content = <p>page is loading...</p>;
  }

  if (isError) {
    content = <p>notes page has error {error?.error}</p>;
  }

  let tableContent;
  if (isSuccess) {
    const { ids } = notes;
    tableContent = ids?.map((noteId) => <Note key={noteId} noteId={noteId} />);
  }

  content = (
    <main className="min-h-[100vh] bg-slate-300 mx-auto p-2">
      <h1 className="text-center text-blue-500 p-2 font-bold">list of Notes</h1>
      <table className="table mx-auto">
        <thead>
          <tr>
            <th className="min-w-[5rem] border border-blue-500 p-1">
              Created Date
            </th>
            <th className="min-w-[5rem] border border-blue-500 p-1">
              Note Created By
            </th>
            <th className="min-w-[5rem] border border-blue-500 p-1">Title</th>
            <th className="min-w-[5rem] border border-blue-500 p-1">Text</th>
            <th className="min-w-[5rem] border border-blue-500 p-1">Status</th>
          </tr>
        </thead>
        <tbody>{tableContent}</tbody>
      </table>
    </main>
  );

  return content;
};

export default ListNote;
