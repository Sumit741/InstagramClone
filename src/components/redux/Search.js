import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
  showCard: false,
  showSearchLabel: true,
  searchResult: [],
  showNotFound: false,
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
    showSearch(state, action) {
      state.showSearchLabel = true;
    },
    hideSearch(state, action) {
      state.showSearchLabel = false;
    },
    setSearchResult(state, action) {
      state.searchResult = action.payload.results;
    },
    showFound(state, action) {
      state.showNotFound = true;
    },
    hideFound(state, action) {
      state.showNotFound = false;
    },
  },
});

export const SearchActions = SearchSlice.actions;
export default SearchSlice;
