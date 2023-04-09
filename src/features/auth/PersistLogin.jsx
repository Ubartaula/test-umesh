// import React, { useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { currentToken, setLoginToken } from "./authSlice";
// import { useRefreshMutation } from "./authApiSlice";
// import { Outlet, Link } from "react-router-dom";

// const PersistLogin = () => {
//   const token = useSelector((state) => currentToken(state));
//   const [refresh, { isUninitialized, isSuccess, isError, error, isLoading }] =
//     useRefreshMutation();

//   const effectRan = useRef(true);
//   const [persist, setPersist] = useState(false);
//   const [trueSuccess, setTrueSuccess] = useState(false);

//   useEffect(() => {
//     if (effectRan.current === true) {
//       // React 18 Strict Mode

//       const verifyRefreshToken = async () => {
//         console.log("verifying refresh token");
//         try {
//           await refresh();
//           setTrueSuccess(true);
//         } catch (err) {
//           console.error(err);
//         }
//       };

//       if (!token && persist) verifyRefreshToken();
//     }

//     return () => (effectRan.current = true);

//     // eslint-disable-next-line
//   }, []);

//   let content;
//   if (!persist) {
//     content = <Outlet />;
//   } else if (isLoading) {
//     content = <p>page persist is loading.... </p>;
//   } else if (isError) {
//     content = (
//       <p className="errmsg">
//         {`${error?.data?.message} - `}
//         <Link to="/login">Please login again</Link>.
//       </p>
//     );
//   } else if (isSuccess && trueSuccess) {
//     content = <Outlet />;
//   } else if (token && isUninitialized) {
//     content = <Outlet />;
//   }

//   return content;
// };

// export default PersistLogin;
