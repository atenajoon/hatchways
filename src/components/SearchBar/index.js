const SearchBar = ({ id, placeholder, onChange, dataSource }) => {
  const myHandleChange = (e) => {
    const { value } = e.target;
    let filteredList = [];

    if (id === "name-input") {
      filteredList = dataSource.filter(
        (student) =>
          student.firstName.toLowerCase().includes(value.toLowerCase()) ||
          student.lastName.toLowerCase().includes(value.toLowerCase())
      );
    } else if (id === "tag-input") {
      filteredList = dataSource.filter(
        (student) =>
          student.firstName.toLowerCase().includes(value.toLowerCase())
        // student.tag.toLowerCase().includes(value.toLowerCase())
      );
    }

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
