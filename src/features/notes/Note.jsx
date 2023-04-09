import React from "react";
import { useGetNotesQuery } from "./noteApiSlice";
import { Link } from "react-router-dom";

const Note = ({ noteId }) => {
  const { note } = useGetNotesQuery("listNotes", {
    selectFromResult: ({ data }) => ({
      note: data?.entities[noteId],
    }),
  });

  const status = note?.isComplete ? "complete" : "pending";
  return (
    <tr key={note.id}>
      <td className="border border-blue-500 p-1">
        {note?.createdAt?.split("T")[0]}
      </td>
      <td className="border border-blue-500 p-1">{note?.username}</td>
      <td className="border border-blue-500 p-1">{note?.title}</td>
      <td className="border border-blue-500 p-1">{note?.text}</td>
      <td className="border border-blue-500 p-1">{status}</td>
      <td className="border border-blue-500 p-1">
        <Link to={`/dash/notes/${note?.id}`}>Edit</Link>
      </td>
    </tr>
  );
};

export default React.memo(Note);
