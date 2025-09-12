import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/themeSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer, // register theme slice
  },
});

export default store;
