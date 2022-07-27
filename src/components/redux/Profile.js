import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  showCard: false,
};
const ProfileSlice = createSlice({
  name: "profile",
  initialState: initialValue,
  reducers: {
    showCard(state, action) {
      state.showCard = true;
    },
    hideCard(state, action) {
      state.showCard = false;
    },
    toggleCard(state, action) {
      state.showCard = !state.showCard;
    },
  },
});

export const ProfileActions = ProfileSlice.actions;
export default ProfileSlice;
