import { createSlice } from "@reduxjs/toolkit";

const initialValue = { pictures: [], users: [] };
const PictureSlice = createSlice({
  name: "picture",
  initialState: initialValue,
  reducers: {
    setPictures(state, action) {
      state.pictures = action.payload.pictures;
    },
    setUsers(state, action) {
      state.users = action.payload.users;
    },
  },
});

export const PictureActions = PictureSlice.actions;
export default PictureSlice;
