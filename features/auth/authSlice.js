import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    value: {
      user: null,
      token: null,
      localId: null,
      profilePicture: ''
    }
  },
  reducers: {
    setUser: (state, action) => {
      state.value.user = action.payload.email;
      state.value.token = action.payload.idToken;
      state.value.localId = action.payload.localId;
    },
    clearUser: (state) => {
      state.value.user = null;
      state.value.token = null;
      state.value.localId = null;
      state.value.profilePicture = '';
    },
    setProfilePicture: (state, action) => {
      state.value.profilePicture = action.payload;
    }
  },
});

export const { setUser, clearUser, setProfilePicture } = authSlice.actions;
export default authSlice.reducer;