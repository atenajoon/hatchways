import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DisplayCards from "../DisplayCards";
import SearchBar from "../SearchBar";
import { getStudentsAsync } from "../../redux/studentListSlice";

const Main = () => {
  const dispatch = useDispatch();
  // set the students based on filter state
  const students = useSelector((state) => state.studentList);

  useEffect(() => {
    dispatch(getStudentsAsync());
  }, [dispatch]);

  const handleChange = (filteredList) => {
    // setStudentList(filteredList);
  };

  return (
    <div className="main-container">
      <div id="id" className="searchBars-container">
        <SearchBar
          className="input-box"
          id="name-input"
          placeholder="Search by name"
          onChange={handleChange}
          // dataSource={mainArray}
          dataSource={students} // for now!
        />
        <SearchBar
          className="input-box"
          id="tag-input"
          placeholder="Search by tags"
          onChange={handleChange}
          // dataSource={mainArray}
          dataSource={students} // for now!
        />
      </div>
      <div className="cards-container">
        <DisplayCards />
      </div>
    </div>
  );
};

export default Main;
