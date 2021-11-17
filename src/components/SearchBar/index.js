import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterStudents } from "../../redux/studentListSlice";

const SearchBar = ({ id, placeholder, onChange, dataSource }) => {
  const [searchedTerm, setSearchedTerm] = useState({
    searchedName: "",
    searchedTag: "",
  });

  const dispatch = useDispatch();

  const myHandleChange = (e) => {
    const { value } = e.target;
    const lowerCaseValue = value.trim().toLowerCase();

    let updatedSearchedTerm = {
      searchedName:
        id === "name-input" ? lowerCaseValue : searchedTerm.searchedName,
      searchedTag:
        id === "tag-input" ? lowerCaseValue : searchedTerm.searchedTag,
    };

    setSearchedTerm(updatedSearchedTerm);

    handleFilter(id, updatedSearchedTerm, lowerCaseValue);
  };

  const handleFilter = (inputId, updatedSearchedTerm, value) => {
    console.log("passed: ", inputId, updatedSearchedTerm, value);
    dispatch(filterStudents({ inputId, updatedSearchedTerm, value }));

    // onChange(filteredList);
  };

  return (
    <input
      id={id}
      className="input-box"
      placeholder={placeholder}
      onChange={myHandleChange}
      autoComplete="off"
    />
  );
};

export default SearchBar;
