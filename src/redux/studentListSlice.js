import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../myU/api-utils";

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
    addExpandGrade: (state, action) => {
      const studentIdx = action.payload.studentId - 1;

      state[studentIdx].expandGrade
        ? (state[studentIdx].expandGrade = !state[studentIdx].expandGrade)
        : (state[studentIdx].expandGrade = true);
    },
    addATag: (state, action) => {
      const studentIdx = action.payload.studentId - 1;
      if (state[studentIdx].tags === undefined) {
        state[studentIdx].tags = [];
      }
      state[studentIdx].tags.push(action.payload.tag);
    },
  },
  extraReducers: {
    [getStudentsAsync.fulfilled]: (state, action) => {
      return action.payload.students;
    },
  },
});

export const { addExpandGrade, addATag } = studentListSlice.actions;
export default studentListSlice.reducer;
