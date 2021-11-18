import { useSelector } from "react-redux";
import StudentCard from "../StudentCard";
import { getStudentList } from "./utils";

const DisplayCards = () => {
  const studentListState = useSelector((state) => state.studentList);
  const { searchedName, searchedTag } = useSelector(
    (state) => state.updateInput
  );

  const filteredList = getStudentList(
    studentListState,
    searchedName,
    searchedTag
  );

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
