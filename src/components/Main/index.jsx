import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DisplayCards from "../DisplayCards";
import SearchBar from "../SearchBar";
import { getStudentsAsync } from "../../redux/studentListSlice";

const Main = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.studentList);

  useEffect(() => {
    dispatch(getStudentsAsync());
  }, [dispatch]);

  return (
    <div className="main-container">
      <div id="id" className="searchBars-container">
        <SearchBar id="name-input" placeholder="Search by name" />
        <SearchBar id="tag-input" placeholder="Search by tags" />
      </div>
      <div className="cards-container">
        <DisplayCards />
      </div>
    </div>
  );
};

export default Main;
