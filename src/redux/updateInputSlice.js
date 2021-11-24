import { createSlice } from "@reduxjs/toolkit";

export const updateInputSlice = createSlice({
  name: "updateInput",
  initialState: { searchedName: "", searchedTag: "" },
  reducers: {
    updateName: (state, action) => {
      state.searchedName = action.payload.val;
    },
    updateTag: (state, action) => {
      state.searchedTag = action.payload.val;
    },
  },
});

export const { updateName, updateTag } = updateInputSlice.actions;
export default updateInputSlice.reducer;
