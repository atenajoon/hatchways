const SearchBar = ({ id, placeholder, onChange, dataSource, studentList }) => {
  const myHandleChange = (e) => {
    const { value } = e.target;
    let filteredList = [];

    if (id === "name-input") {
      filteredList = dataSource.filter(
        (student) =>
          student.firstName
            .trim()
            .toLowerCase()
            .includes(value.trim().toLowerCase()) ||
          student.lastName
            .trim()
            .toLowerCase()
            .includes(value.trim().toLowerCase())
      );
    } else if (id === "tag-input") {
      filteredList = dataSource.filter(
        (student) =>
          student.firstName
            .trim()
            .toLowerCase()
            .includes(value.trim().toLowerCase())
        // .trim().toLowerCase().includes(value.trim().toLowerCase())
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
