import { useState, useEffect } from "react";
import { getData } from "../api-utils";
import DisplayCard from "../DisplayCard";

const Main = () => {
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    setList();
  }, []);

  const setList = async () => {
    const data = await getData();
    setStudentList(data);
  };
  console.log("list: ", studentList.students);
  return (
    <div>
      <DisplayCard list={studentList.students} />
    </div>
  );
};

export default Main;
