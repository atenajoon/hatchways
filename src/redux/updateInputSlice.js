import { createSlice } from "@reduxjs/toolkit";

export const updateInputSlice = createSlice({
  name: "filteredList",
  initialState: { searchedName: "", searchedTag: "" },
  reducer: {
    updateName: (state, action) => {
      state.searchedName = action.payload;
    },
    updateTag: (state, action) => {
      state.searchedTag = action.payload;
    },
  },
});

export const { updateName, updateTag } = updateInputSlice.actions;
export default updateInputSlice.reducer;
