const SearchBar = ({ id, placeholder, onChange, dataSource }) => {
  const myHandleChange = (e) => {
    const { value } = e.target;

    let filteredList = dataSource.filter(
      (student) =>
        student.firstName.toLowerCase().includes(value.toLowerCase()) ||
        student.lastName.toLowerCase().includes(value.toLowerCase())
    );
    onChange(filteredList);
  };

  return (
    <input
      id={id}
      placeholder={placeholder}
      onChange={myHandleChange}
      autoComplete="off"
    />
  );
};

export default SearchBar;
