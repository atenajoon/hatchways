import { createSlice } from "@reduxjs/toolkit";

export const updateInputSlice = createSlice({
  name: "updateInput",
  initialState: { searchedName: "", searchedTag: "" },
  reducers: {
    updateName: (state, action) => {
      state.searchedName = action.payload.tag;
    },
    updateTag: (state, action) => {
      state.searchedTag = action.payload.tag;
    },
  },
});

export const { updateName, updateTag } = updateInputSlice.actions;
export default updateInputSlice.reducer;
