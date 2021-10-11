const SearchBar = ({
  id,
  placeholder,
  onChange,
  dataSource,
  searchedTerm,
  setSearchedTerm,
}) => {
  const myHandleChange = (e) => {
    // retrieve the input value
    const { value } = e.target;
    const lowerCaseValue = value.trim().toLowerCase();
    // locally updated searchedTerm
    let updatedSearchedTerm = searchedTerm;

    // opt ver
    const isUpdatingName = id === "name-input"; //true false
    updatedSearchedTerm = {
      searchedName: isUpdatingName ? lowerCaseValue : searchedTerm.searchedName,
      searchedTag: !isUpdatingName ? lowerCaseValue : searchedTerm.searchedTag,
    };
    // console.log("updatedSearchedTerm: ", updatedSearchedTerm);
    setSearchedTerm(updatedSearchedTerm);
    handleFilter(
      isUpdatingName ? "name-input" : "tag-input",
      updatedSearchedTerm,
      value
    );
    // TODO: remove the console.log
    console.log("updatedSearchedTerm", updatedSearchedTerm);
  };

  const handleFilter = (inputId, updatedSearchedTerm, value) => {
    const filteredList = dataSource.filter((std) => {
      // names
      const stdName = `${std.firstName} ${std.lastName}`;
      // tags
      const stdTags = std.tags;
      // validations
      let isNameValid;
      let isTagValid;
      // check if the input is for name, if not then it's for tag
      const isNameInput = inputId === "name-input";

      // empty or the string is included to student's name
      isNameValid =
        updatedSearchedTerm.searchedName.length === 0
          ? true
          : stdName
              .toLowerCase()
              .includes(isNameInput ? value : updatedSearchedTerm.searchedName);
      // empty or the string is included to student's tag
      isTagValid =
        updatedSearchedTerm.searchedTag.length === 0
          ? true
          : stdTags?.some((tag) =>
              tag
                .toLowerCase()
                .includes(
                  !isNameInput ? value : updatedSearchedTerm.searchedTag
                )
            );

      // TODO: remove the console.log
      console.log(
        "isBothValid",
        isNameValid && isTagValid,
        isNameValid,
        isTagValid
      );
      // is name and tag is valid then return the student(keep it in the list)
      return isNameValid && isTagValid;
    });
    // TODO: remove the console.log
    console.log("filteredList", filteredList);
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
