import React, { useEffect, useState } from "react";
import { useAddNoteMutation } from "./noteApiSlice";
import { useGetUsersQuery } from "../users/userApiSlice";
import { useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const AddNote = () => {
  useTitle("Add Work Note");
  const navigate = useNavigate();
  const [addNote, { isSuccess }] = useAddNoteMutation();
  const [userObjId, setUserObjId] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

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
    if (isSuccess) {
      navigate("/dash/notes");
    }
  }, [isSuccess, navigate]);

  const handleAdd = async () => {
    try {
      await addNote({ user: userObjId, title, text });
    } catch (error) {
      console.log(error);
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
            Create Note
          </button>
        </section>
      </form>
    </main>
  );
};

export default AddNote;
