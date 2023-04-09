import React, { useEffect } from "react";
import { store } from "../../app/store";
import { noteApiSlice } from "../notes/noteApiSlice";
import { Outlet } from "react-router-dom";
import { userApiSlice } from "../users/userApiSlice";
import { authApiSlice } from "./authApiSlice";

const Prefetch = () => {
  useEffect(() => {
    noteApiSlice.util.prefetch("getNotes", "listNotes", { force: true });
    userApiSlice.util.prefetch("getUsers", "listUsers", { force: true });
  }, []);

  return <Outlet />;
};

export default Prefetch;
