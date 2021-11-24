import { useSelector, useDispatch } from "react-redux";
import StudentCard from "../StudentCard";
import { getStudentList } from "./utils";
import { displayTotalStudents } from "../../redux/totalStudentsSlice";
import { useEffect } from "react";

const DisplayCards = () => {
  const studentListState = useSelector((state) => state.studentList);
  const { searchedName, searchedTag } = useSelector(
    (state) => state.updateInput
  );
  const dispatch = useDispatch();
  const filteredList = getStudentList(
    studentListState,
    searchedName,
    searchedTag
  );
  // test commit
  useEffect(() => {
    dispatch(displayTotalStudents({ total: filteredList.length }));
  }, [dispatch, filteredList]);

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
