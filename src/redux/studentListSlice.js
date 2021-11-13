import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../Utils/api-utils";

export const getStudentsAsync = createAsyncThunk(
  "students/getStudentsAsync",
  async () => {
    return await getData();
  }
);

export const studentListSlice = createSlice({
  name: "studentList",
  initialState: [],
  reducers: {
    filterStudents: (state, action) => {
      const filteredList = {
        /* sample data */
        // id: new Date(),
        // title: action.payload.title,
        // completed: false,
      };
      state.push(filteredList);
    },
  },
  extraReducers: {
    [getStudentsAsync.fulfilled]: (state, action) => {
      return action.payload.students;
    },
  },
});

export const { filterStudents } = studentListSlice.actions;
export default studentListSlice.reducer;
