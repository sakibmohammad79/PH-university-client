import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

type TUserState = {
  user: null | object;
  token: null | object;
};

const initialState: TUserState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logOut: (state) => {
      (state.user = null), (state.token = null);
    },
  },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;

export const userCurrentToken = (state: RootState) => state.auth.token;
export const useCurrentUser = (state: RootState) => state.auth.user;
