import { useState, useEffect } from "react";
import { getData } from "../api-utils";
import DisplayCard from "../DisplayCard";
import SearchBar from "../SearchBar";

const Main = () => {
  const [mainArray, setMainArray] = useState([]);
  const [studentList, setStudentList] = useState([]);

  useEffect(() => {
    setList();
  }, []);

  const setList = async () => {
    const data = await getData();
    setMainArray(data.students);
    setStudentList(data.students);
  };

  const handleChange = (filteredList) => {
    setStudentList(filteredList);
  };

  return (
    <div className="main-container">
      <SearchBar
        id="name-input"
        placeholder="Search by name"
        onChange={handleChange}
        dataSource={mainArray}
      />
      <DisplayCard list={studentList} />
    </div>
  );
};

export default Main;
