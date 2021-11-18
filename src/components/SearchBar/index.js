// import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateName, updateTag } from "../../redux/updateInputSlice";

const SearchBar = ({ id, placeholder, onChange, dataSource }) => {
  const dispatch = useDispatch();

  const searchedTerm = useSelector((state) => state.updateInput);

  const handleInputChange = (e) => {
    const { value } = e.target;
    const lowerCaseValue = value.trim().toLowerCase();

    id === "name-input"
      ? dispatch(updateName({ tag: lowerCaseValue }))
      : dispatch(updateTag({ tag: lowerCaseValue }));

    //   // dispatch(filteredList({ }))
    // handleFilter(id, lowerCaseValue);
  };

  const handleFilter = (inputId, updatedSearchedTerm, value) => {
    const filteredList = dataSource.filter((student) => {
      const studentName = `${student.firstName} ${student.lastName}`;
      const studentTags = student.tags;

      let isNameValid;
      let isTagValid;
      const isNameInput = inputId === "name-input";

      isNameValid =
        updatedSearchedTerm.searchedName.length === 0
          ? true
          : studentName
              .toLowerCase()
              .includes(isNameInput ? value : updatedSearchedTerm.searchedName);

      isTagValid =
        updatedSearchedTerm.searchedTag.length === 0
          ? true
          : studentTags?.some((tag) =>
              tag
                .toLowerCase()
                .includes(
                  !isNameInput ? value : updatedSearchedTerm.searchedTag
                )
            );

      return isNameValid && isTagValid;
    });

    console.log("pass this to the App.js!", filteredList.length);
    onChange(filteredList);
  };

  return (
    <input
      id={id}
      className="input-box"
      placeholder={placeholder}
      onChange={handleInputChange}
      autoComplete="off"
    />
  );
};

export default SearchBar;
