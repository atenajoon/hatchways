import { createSlice } from "@reduxjs/toolkit";

export const studentListSlice = createSlice({
  name: "studentList",
  initialState: [
    // mainArray
  ],
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
});

export const { filterStudents } = studentListSlice.actions;
export default studentListSlice.reducer;
