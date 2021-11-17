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
    addExpandGrade: (state, action) => {
      const studentId = action.payload.studentId - 1;

      state[studentId].expandGrade
        ? (state[studentId].expandGrade = !state[studentId].expandGrade)
        : (state[studentId].expandGrade = true);
    },
    addATag: (state, action) => {
      const studentId = action.payload.studentId - 1;
      if (state[studentId].tags === undefined) {
        state[studentId].tags = [];
      }
      state[studentId].tags.push(action.payload.tag);
    },
    filterStudents: (state, action) => {
      // bring the filtering logic here?
      const filteredList = action.payload.filteredList;
      // set the state to the filteredList
      state.push(filteredList);
    },
  },
  extraReducers: {
    [getStudentsAsync.fulfilled]: (state, action) => {
      return action.payload.students;
    },
  },
});

export const { filterStudents, addExpandGrade, addATag } =
  studentListSlice.actions;
export default studentListSlice.reducer;
