import { createSlice } from '@reduxjs/toolkit';
import { appApi } from './api';
import { toast } from 'react-toastify';

const initialState = {
  isLoggedIn: false,
  user: null
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.user = null;
    },
    userUpdated(state, action) {
      state.isLoggedIn = true;
      state.user = action.payload;
    }
  }
});

const extendedApi = appApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: 'authenticate',
        method: 'POST',
        body: { email, password }
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          localStorage.setItem("user", JSON.stringify(data));
          dispatch(login(data));
          toast.success("Success Login!");
        } catch (err) {
          toast.error("Fail Login!");
        }
      },
    }),
    authentication: builder.query({
      query: () => 'authenticate',
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch (err) {
          toast.error("Fail Authenticate!");
        }
      },
    })
  })
})

export const { login, logout, userUpdated } = appSlice.actions;
export const { useLoginMutation, useLazyAuthenticationQuery } = extendedApi;

export default appSlice.reducer;