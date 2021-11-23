import { configureStore } from "@reduxjs/toolkit";
import updateInputReducer from "./updateInputSlice";
import studentListReducer from "./studentListSlice";
import totalStudentsReducer from "./totalStudentsSlice";

export default configureStore({
  reducer: {
    studentList: studentListReducer,
    updateInput: updateInputReducer,
    totalStudents: totalStudentsReducer,
  },
});
