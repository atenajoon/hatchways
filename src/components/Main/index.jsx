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

  return (
    <div className="main-container">
      <input id="name-input" placeholder="Search by name" />
      <DisplayCard list={studentList.students} />
    </div>
  );
};

export default Main;
