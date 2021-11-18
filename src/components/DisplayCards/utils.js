import { getFullName } from "../../Utils/business-utils";

export const getStudentList = (studentListState, searchedName, searchedTag) => {
  if (searchedName === "" && searchedTag === "") {
    return studentListState;
  } else {
    return studentListState.filter((student) => {
      const studentName = getFullName(student);
      const studentTags = student.tags;

      let isNameValid =
        searchedName === ""
          ? true
          : studentName.trim().toLowerCase().includes(searchedName);

      let isTagValid =
        searchedTag === ""
          ? true
          : studentTags?.some((tag) =>
              tag.trim().toLowerCase().includes(searchedTag)
            );

      return isNameValid && isTagValid;
    });
  }
};
