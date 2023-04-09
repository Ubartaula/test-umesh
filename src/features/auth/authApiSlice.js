// import { apiSlice } from "../../app/api/apiSlice";

// import { setLoginToken, setLogout } from "./authSlice";

// export const authApiSlice = apiSlice.injectEndpoints({
//   endpoints: (builder) => ({
//     login: builder.mutation({
//       query: (logInCred) => ({
//         url: "/auth",
//         method: "POST",
//         body: { ...logInCred },
//       }),
//     }),

//     refresh: builder.mutation({
//       query: () => ({
//         url: "/auth//refresh",
//         method: "GET",
//       }),
//       async onQueryStarted(arg, { dispatch, queryFulfilled }) {
//         try {
//           const { data } = await queryFulfilled;
//           const { accessToken } = data;
//           dispatch(setLoginToken({ accessToken }));
//         } catch (error) {
//           console.log(error);
//         }
//       },
//     }),

//     logout: builder.mutation({
//       query: () => ({
//         url: "/auth/logout",
//         method: "POST",
//       }),
//       async onQueryStarted(arg, { dispatch, queryFulfilled }) {
//         try {
//           await queryFulfilled;
//           dispatch(setLogout());
//           dispatch(apiSlice.util.resetApiState());
//         } catch (error) {
//           console.log(error);
//         }
//       },
//     }),

//     // end of line
//   }),
// });

// export const { useLoginMutation, useLogoutMutation, useRefreshMutation } =
//   authApiSlice;
