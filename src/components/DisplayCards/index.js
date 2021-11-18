import StudentCard from "../StudentCard";
import { useSelector } from "react-redux";

const DisplayCards = () => {
  const studentListState = useSelector((state) => state.studentList);
  const { searchedName, searchedTag } = useSelector(
    (state) => state.updateInput
  );

  let filteredList;
  console.log("1", filteredList);

  if (searchedName === "" && searchedTag === "") {
    filteredList = studentListState;
  } else {
    filteredList = studentListState.filter((student) => {
      const studentName = `${student.firstName} ${student.lastName}`;
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
  // console.log("2", filteredList);
  return (
    <div>
      <ul>
        {filteredList?.map((student) => (
          <li key={student.id}>
            <StudentCard student={student} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayCards;
