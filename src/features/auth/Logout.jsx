// import React, { useEffect } from "react";
// import { useLogoutMutation } from "./authApiSlice";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { setLogout } from "./authSlice";

// const Logout = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [logoutMutation, { isSuccess }] = useLogoutMutation();

//   useEffect(() => {
//     if (isSuccess) {
//       navigate("/login");
//     }
//   }, [isSuccess, navigate]);

//   const handleLogout = async () => {
//     try {
//       await logoutMutation(null);
//       dispatch(setLogout(null));
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div>
//       <button
//         onClick={handleLogout}
//         className="bg-pink-400 p-1 min-w-[6rem] rounded-md"
//       >
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Logout;
