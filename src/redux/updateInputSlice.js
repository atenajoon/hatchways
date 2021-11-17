import { createSlice } from "@reduxjs/toolkit";

export const updateInputSlice = createSlice({
  name: "filteredList",
  initialState: [],
  reducer: {
    filtereList: (state, action) => {
      //add the filter logic here
    },
  },
});

export const { filtereList } = updateInputSlice.actions;
export default updateInputSlice.reducer;
