import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logout from "../features/auth/Logout";
import { createSlice, current } from "@reduxjs/toolkit";
import useAuth from "../hooks/useAuth";
import { useSelector } from "react-redux";
import { currentToken } from "../features/auth/authSlice";
import jwtDecode from "jwt-decode";

const DashHome = () => {
  // const token = useSelector(currentToken);
  // if (token) {
  //   const decoded = jwtDecode(token);
  //   const { username, role } = decoded.UserInfo;
  //   console.log(username, role);
  // }

  return (
    <main className="mx-auto min-h-[100vh] bg-slate-300">
      <div className="p-2 flex flex-col items-center">
        <Link to="/dash/notes" className="hover:text-blue-500">
          Note List
        </Link>
        <Link to="/dash/notes/new" className="hover:text-blue-500">
          Note Create
        </Link>
      </div>
      <div className="min-h-[4rem] bg-blue-400 absolute bottom-0 right-0 left-0">
        {/* <p className="p-1 mb-0 gap-0">
          Employee Name : {username}, Position : {role}
        </p> */}
      </div>
    </main>
  );
};

export default DashHome;
