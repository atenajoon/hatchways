import { useSelector, useDispatch } from "react-redux";
import StudentCard from "../StudentCard";
import { getStudentList } from "./utils";
import { displayTotalStudents } from "../../redux/totalStudentsSlice";

const DisplayCards = () => {
  const studentListState = useSelector((state) => state.studentList);
  const { searchedName, searchedTag } = useSelector(
    (state) => state.updateInput
  );
  const dispatch = useDispatch();
  // read about react.memo and use it to prevent rerendering for shallow changes!
  const filteredList = getStudentList(
    studentListState,
    searchedName,
    searchedTag
  );
  dispatch(displayTotalStudents({ total: filteredList.length }));

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
