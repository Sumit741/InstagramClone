import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  status: false,
};

const AddFileSlice = createSlice({
  name: "modal",
  initialState: initialValue,
  reducers: {
    setStatus(state, action) {
      state.status = !state.status;
    },
  },
});
export const AddFileActions = AddFileSlice.actions;
export default AddFileSlice;
