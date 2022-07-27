import { configureStore } from "@reduxjs/toolkit";
import AddFileSlice from "./AddFileModal";
import PictureSlice from "./Pictures";
import ProfileSlice from "./Profile";
import SearchSlice from "./Search";

const store = configureStore({
  reducer: {
    addfile: AddFileSlice.reducer,
    picture: PictureSlice.reducer,
    search: SearchSlice.reducer,
    profile: ProfileSlice.reducer,
  },
});

export default store;
