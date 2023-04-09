import React, { useEffect, useState } from "react";
import {
  useDeleteNoteMutation,
  useEditNoteMutation,
  useGetNotesQuery,
} from "./noteApiSlice";
import { useGetUsersQuery } from "../users/userApiSlice";
import { useNavigate, useParams } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const EditNote = () => {
  useTitle("Edit Note");

  const [confirmToDel, setConfirmToDel] = useState(false);
  const cssToShowMessage = confirmToDel ? "" : "hidden";
  const clickEventOfDelete = () => {
    setConfirmToDel((prev) => !prev);
  };

  const navigate = useNavigate();
  const { id } = useParams();

  const { note } = useGetNotesQuery("listNotes", {
    selectFromResult: ({ data }) => ({
      note: data?.entities[id],
    }),
  });

  const [editNoteMutation, { isSuccess }] = useEditNoteMutation();
  const [deleteNoteMutation, { isSuccess: isSuccessDelete }] =
    useDeleteNoteMutation();

  const [userObjId, setUserObjId] = useState(note?.user);
  const [title, setTitle] = useState(note?.title);
  const [text, setText] = useState(note?.text);
  const [isComplete, setIsComplete] = useState(note?.isComplete);

  const { users } = useGetUsersQuery("listUsers", {
    selectFromResult: ({ data }) => ({
      users: data?.ids?.map((id) => data?.entities[id]),
    }),
  });

  const userOptions = users?.map((user) => {
    return (
      <option key={user.id} value={user.id}>
        {user?.username}
      </option>
    );
  });

  useEffect(() => {
    if (isSuccess || isSuccessDelete) {
      // setUserObjId("");
      // setText("");
      // setTitle("");
      navigate("/dash/notes");
    }
  }, [isSuccess, isSuccessDelete, navigate]);

  const handleAdd = async () => {
    try {
      await editNoteMutation({
        id: note?.id,
        user: userObjId,
        title,
        text,
        isComplete,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteNoteMutation({ id: note?.id });
    } catch (error) {
      console.log(error?.data?.message);
    }
  };

  return (
    <main className="mx-auto min-h-[100vh] bg-slate-300">
      <h2 className="font-bold text-center text-blue-500 p-2">
        Create Work Note
      </h2>
      <form onSubmit={(e) => e.preventDefault()} className="mx-auto">
        <div className="flex justify-center">
          <section className="p-1 border border-green-500 flex flex-col">
            <label htmlFor="" className="p-1 m-1 text-bold">
              User
            </label>
            <label htmlFor="" className="p-1 m-1 text-bold">
              Title
            </label>
            <label htmlFor="" className="p-1 m-1 text-bold">
              Text
            </label>
          </section>
          <section className="p-1 border border-green-500 flex flex-col">
            <select
              name=""
              id=""
              value={userObjId}
              onChange={(e) => setUserObjId(e.target.value)}
              className="p-1 m-1 border border-blue-500"
            >
              <option value="">select..</option>
              {userOptions}
            </select>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-1 m-1 border border-blue-500 "
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="p-1 m-1 border border-blue-500 "
            />
          </section>
        </div>

        <section className="text-center">
          <button
            onClick={handleAdd}
            className="p-1 px-2 bg-rose-300 m-2 rounded-xl hover:bg-yellow-500 border border-blue-500"
          >
            Save
          </button>
          <button
            onClick={clickEventOfDelete}
            className="p-1 px-2 bg-rose-300 m-2 rounded-xl hover:bg-yellow-500 border border-blue-500"
          >
            Delete
          </button>
        </section>
        <section
          className={`${cssToShowMessage} bg-yellow-200 mx-auto text-center w-fit p-4 rounded-2xl absolute top-[40vh] left-[40vw] `}
        >
          <p>Are You Sure to Delete ??</p>
          <button
            onClick={handleDelete}
            className="p-1 px-2 bg-rose-300 m-2 rounded-xl hover:bg-yellow-500 border border-blue-500"
          >
            Yes
          </button>
          <button
            onClick={() => navigate("/dash/notes")}
            className="p-1 px-2 bg-rose-300 m-2 rounded-xl hover:bg-yellow-500 border border-blue-500"
          >
            No
          </button>
        </section>
      </form>
    </main>
  );
};

export default EditNote;
