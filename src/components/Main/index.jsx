import { useState, useEffect } from "react";
import { getData } from "../api-utils";
import DisplayCard from "../DisplayCard";

const Main = () => {
  const [studentList, setStudentList] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    setList();
  }, []);

  const setList = async () => {
    const data = await getData();
    setStudentList(data);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };
  return (
    <div className="main-container">
      <input
        id="name-input"
        placeholder="Search by name"
        onChange={handleChange}
        // value={value}
        autoComplete="off"
      />
      <DisplayCard list={studentList.students} />
    </div>
  );
};

export default Main;
