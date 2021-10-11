const SearchBar = ({
  id,
  placeholder,
  onChange,
  dataSource,
  searchedTerm,
  setSearchedTerm,
}) => {
  const myHandleChange = (e) => {
    const { value } = e.target;
    const lowerCaseValue = value.trim().toLowerCase();

    let updatedSearchedTerm = searchedTerm;
    const isUpdatingName = id === "name-input";

    updatedSearchedTerm = {
      searchedName: isUpdatingName ? lowerCaseValue : searchedTerm.searchedName,
      searchedTag: !isUpdatingName ? lowerCaseValue : searchedTerm.searchedTag,
    };

    setSearchedTerm(updatedSearchedTerm);
    handleFilter(
      isUpdatingName ? "name-input" : "tag-input",
      updatedSearchedTerm,
      value
    );
  };

  const handleFilter = (inputId, updatedSearchedTerm, value) => {
    const filteredList = dataSource.filter((std) => {
      const stdName = `${std.firstName} ${std.lastName}`;
      const stdTags = std.tags;

      let isNameValid;
      let isTagValid;
      const isNameInput = inputId === "name-input";

      isNameValid =
        updatedSearchedTerm.searchedName.length === 0
          ? true
          : stdName
              .toLowerCase()
              .includes(isNameInput ? value : updatedSearchedTerm.searchedName);

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

      return isNameValid && isTagValid;
    });

    console.log(filteredList.length);
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
