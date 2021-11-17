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
      const { dataSource, inputId, updatedSearchedTerm, value } =
        action.payload;

      const filteredList = dataSource.filter((student) => {
        const studentName = `${student.firstName} ${student.lastName}`;
        const studentTags = student.tags;

        let isNameValid;
        let isTagValid;
        const isNameInput = inputId === "name-input";

        isNameValid =
          updatedSearchedTerm.searchedName.length === 0 // name input field is empty
            ? true // all names will be valid
            : studentName // only names that include the term will be valid
                .toLowerCase()
                .includes(
                  isNameInput ? value : updatedSearchedTerm.searchedName
                );

        isTagValid =
          updatedSearchedTerm.searchedTag.length === 0 // tag input field is empty
            ? true // all tags will be valid
            : studentTags?.some(
                (
                  tag // if tag exist, check if some of them...
                ) =>
                  tag // only those ones that include the term will be valid
                    .toLowerCase()
                    .includes(
                      !isNameInput ? value : updatedSearchedTerm.searchedTag
                    )
              );

        return isNameValid && isTagValid; // return those that have true && true
      });
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
