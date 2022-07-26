import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  showCard: false,
};

const SearchSlice = createSlice({
  name: "search",
  initialState: initialValue,
  reducers: {
    showCard(state, action) {
      state.showCard = true;
    },
    hideCard(state, action) {
      state.showCard = false;
    },
  },
});

export const SearchActions = SearchSlice.actions;
export default SearchSlice;
