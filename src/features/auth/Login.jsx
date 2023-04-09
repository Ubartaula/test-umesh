// import React, { useEffect, useState } from "react";
// import { useLoginMutation } from "./authApiSlice";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setLoginToken } from "./authSlice";

// const Login = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errMsg, setErrMsg] = useState("");

//   const [login, { isSuccess }] = useLoginMutation();

//   useEffect(() => {
//     if (isSuccess) {
//       navigate("/dash");
//     }
//   }, [isSuccess, navigate]);

//   useEffect(() => {
//     setErrMsg("");
//   }, [username, password]);

//   const handleLogin = async () => {
//     try {
//       const accessToken = await login({ username, password }).unwrap();
//       dispatch(setLoginToken({ accessToken }));
//     } catch (err) {
//       if (!err.status) {
//         setErrMsg("No Server Response");
//       } else if (err.status === 400) {
//         setErrMsg("Missing Username or Password");
//       } else if (err.status === 401) {
//         setErrMsg("Unauthorized, username or password did not match");
//       } else {
//         setErrMsg(err.data?.message);
//       }
//     }
//   };

//   return (
//     <main className="min-h-[100vh] bg-slate-300 p-2">
//       <h1 className="text-center text-blue-500 p-2">Welcome to Login Page</h1>
//       <div
//         aria-live="assertive"
//         className="text-center mx-auto text-red-500 capitalize min-h-[2rem]"
//       >
//         {errMsg}
//       </div>
//       <form onSubmit={(e) => e.preventDefault()} className="mx-auto">
//         <section className="flex justify-center">
//           <section className="m-1 flex flex-col">
//             <label htmlFor="" className="p-2 m-1">
//               Username
//             </label>
//             <label htmlFor="" className="p-2 m-1">
//               Password
//             </label>
//           </section>

//           <section className="p-2 m-1 flex flex-col">
//             <input
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               className="border border-blue-500 p-1 m-1"
//             />
//             <input
//               type="text"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="border border-blue-500 p-1 m-1"
//             />
//           </section>
//         </section>
//         <section className="text-center">
//           <button
//             className="p-1 m-1 bg-pink-400 rounded-md min-w-[6rem]"
//             onClick={handleLogin}
//           >
//             Login
//           </button>
//         </section>
//       </form>
//     </main>
//   );
// };

// export default Login;
