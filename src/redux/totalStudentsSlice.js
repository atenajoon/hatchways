import { createSlice } from "@reduxjs/toolkit";

export const totalStudentsSlice = createSlice({
  name: "totalStudents",
  initialState: { total: 0 },
  reducers: {
    displayTotalStudents: (state, action) => {
      state.total = action.payload.total;
    },
  },
});

export const { displayTotalStudents } = totalStudentsSlice.actions;
export default totalStudentsSlice.reducer;
