import { createSlice } from "@reduxjs/toolkit";

export const filteredListSlice = createSlice({
  name: "filteredList",
  initialState: [], //studentList
  reducer: {
    filtereList: (state, action) => {
      //add the filter logic here
    },
  },
});

export const { filtereList } = filteredListSlice.actions;
export default filteredListSlice.reducer;
