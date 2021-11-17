import { useState } from "react";

const SearchBar = ({ id, placeholder, onChange, dataSource }) => {
  const [searchedTerm, setSearchedTerm] = useState({
    searchedName: "",
    searchedTag: "",
  });

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
    // dispatch(filteredList({ }))
    handleFilter(id, updatedSearchedTerm, value);
  };

  const handleFilter = (inputId, updatedSearchedTerm, value) => {
    const filteredList = dataSource.filter((student) => {
      const studentName = `${student.firstName} ${student.lastName}`;
      const studentTags = student.tags;

      let isNameValid;
      let isTagValid;
      const isNameInput = inputId === "name-input";

      isNameValid =
        updatedSearchedTerm.searchedName.length === 0 // name input field is empty
          ? true // all names will be valid
          : studentName // only names that include the term will be valid
              .toLowerCase()
              .includes(isNameInput ? value : updatedSearchedTerm.searchedName);

      isTagValid =
        updatedSearchedTerm.searchedTag.length === 0 // tag input field is empty
          ? true // all tags will be valid
          : studentTags?.some(
              (
                tag // if tag exist, check if some of them...
              ) =>
                tag // only those ones that include the term will be valid
                  .toLowerCase()
                  .includes(
                    !isNameInput ? value : updatedSearchedTerm.searchedTag
                  )
            );

      return isNameValid && isTagValid; // return those that have true && true
    });

    console.log("pass this to the App.js!", filteredList.length);
    onChange(filteredList);
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
