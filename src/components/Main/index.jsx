import { useState, useEffect } from "react";
import { getData } from "../api-utils";
import DisplayCard from "../DisplayCard";
import SearchBar from "../SearchBar";

const Main = () => {
  const [mainArray, setMainArray] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [studentList, setStudentList] = useState([]); //use it!
  // const [tags, setTags] = useState("tag1");

  useEffect(() => {
    setList();
  }, []);

  const setList = async () => {
    const data = await getData();
    setMainArray(data.students);
    // setStudentList(data.students);
    setFilteredList(data.students);
  };

  // setting the new list of student by every tags status change
  // useEffect(() => {
  //   setTagList();
  // }, [tags]);

  const handleTags = (newStudentList) => {
    setStudentList(newStudentList);
  };

  // const setTagList = (tags) => {
  //   const studentWTags = [...mainArray, tags];
  //   setStudentList(studentWTags);
  // };

  // //////////////////////////////////////////////////////////
  const handleChange = (filteredList) => {
    // setStudentList(filteredList);
    setFilteredList(filteredList);
  };

  return (
    <div className="main-container">
      <SearchBar
        id="name-input"
        placeholder="Search by name"
        onChange={handleChange}
        dataSource={mainArray}
      />
      <SearchBar
        id="tag-input"
        placeholder="Search by tags"
        onChange={handleChange}
        dataSource={mainArray}
        studentList={studentList}
      />
      {/* <DisplayCard list={studentList} /> */}
      {/*
          studentList
          ? <DisplayCard list={studentList} ... /> 
          :  <DisplayCard list={filteredList}  ... />
      */}
      <DisplayCard list={filteredList} onTagChange={handleTags} />
    </div>
  );
};

export default Main;
