import { configureStore } from "@reduxjs/toolkit";
import filteredListReducer from "./filteredListSlice";
import studentListReducer from "./studentListSlice";

export default configureStore({
  reducer: {
    studentList: studentListReducer,
    filteredList: filteredListReducer,
  },
});
