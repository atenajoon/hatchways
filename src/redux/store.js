import { configureStore } from "@reduxjs/toolkit";
import updateInputReducer from "./updateInputSlice";
import studentListReducer from "./studentListSlice";

export default configureStore({
  reducer: {
    studentList: studentListReducer,
    updateInput: updateInputReducer,
  },
});
