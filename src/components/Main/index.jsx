import { useState, useEffect } from "react";
import { getData } from "../api-utils";

const Main = () => {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    setList();
  }, []);

  const setList = async () => {
    const data = await getData();
    setStudentList(data);
  };
  console.log("list: ", studentList.students[0].city);
  return (
    <div>
      <ul>
        {studentList.students?.map((student) => (
          <li key={student.id}>{student.firstName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
