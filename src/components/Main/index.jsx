import { useState, useEffect } from "react";
import { getData } from "../api-utils";
import DisplayCard from "../DisplayCard";

const Main = () => {
  const [mainArray, setMainArray] = useState([]);
  const [studentList, setStudentList] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    setList();
  }, []);

  const setList = async () => {
    const data = await getData();
    setMainArray(data.students);
    setStudentList(data.students);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setValue(value);

    let filteredList = mainArray.filter(
      (student) =>
        student.firstName.toLowerCase().includes(value.toLowerCase()) ||
        student.lastName.toLowerCase().includes(value.toLowerCase())
    );
    setStudentList(filteredList);
    console.log(value.toLowerCase(), "filtered: ", filteredList);
  };

  return (
    <div className="main-container">
      <p>{value}</p>
      <input
        id="name-input"
        placeholder="Search by name"
        onChange={handleChange}
        // value={value}
        autoComplete="off"
      />
      <DisplayCard list={studentList} />
    </div>
  );
};

export default Main;
