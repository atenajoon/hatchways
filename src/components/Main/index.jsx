import { useState, useEffect } from "react";
import { getData } from "../../Utils/api-utils";
import DisplayCards from "../DisplayCards";
import SearchBar from "../SearchBar";

const Main = ({ getTotalResult }) => {
  const [mainArray, setMainArray] = useState([]);
  const [studentList, setStudentList] = useState([]);
  const [tag, setTag] = useState(null);
  const [changingId, setChangingId] = useState(null);
  const [searchedTerm, setSearchedTerm] = useState({
    searchedName: "",
    searchedTag: "",
  });

  const setList = async () => {
    const data = await getData();
    setMainArray(data.students);
    setStudentList(data.students);
    getTotalResult(data.students.length);
  };

  setList();

  useEffect(() => {
    if (changingId) {
      const taggedStdIdx = studentList.findIndex(
        (std) => std.id === changingId
      );
      const _studentList = [...studentList];
      _studentList[taggedStdIdx].tags = studentList[taggedStdIdx].tags
        ? [...studentList[taggedStdIdx].tags, tag]
        : [tag];
      setStudentList(_studentList);
    }
    setChangingId(null);
  }, [changingId, studentList, tag]);

  const handleChange = (filteredList) => {
    setStudentList(filteredList);
    getTotalResult(filteredList.length);
  };

  return (
    <div className="main-container">
      <div id="id" className="searchBars-container">
        <SearchBar
          className="input-box"
          id="name-input"
          placeholder="Search by name"
          onChange={handleChange}
          dataSource={mainArray}
          searchedTerm={searchedTerm}
          setSearchedTerm={setSearchedTerm}
        />
        <SearchBar
          className="input-box"
          id="tag-input"
          placeholder="Search by tags"
          onChange={handleChange}
          dataSource={mainArray}
          searchedTerm={searchedTerm}
          setSearchedTerm={setSearchedTerm}
        />
      </div>
      <div className="cards-container">
        <DisplayCards
          list={studentList}
          setChangingId={setChangingId}
          setStudentList={setStudentList}
          setTag={setTag}
          className="cards-container"
        />
      </div>
    </div>
  );
};

export default Main;
