import { configureStore } from "@reduxjs/toolkit";
import studentListReducer from "./studentListSlice";

export default configureStore({
  reducer: {
    studentList: studentListReducer,
  },
});
