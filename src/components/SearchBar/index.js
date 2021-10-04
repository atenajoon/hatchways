const SearchBar = ({ id, placeholder, onChange, dataSource }) => {
  const myHandleChange = (e) => {
    const { value } = e.target;
    let filteredList = [];

    if (id === "name-input") {
      filteredList = dataSource.filter(
        (student) =>
          student.firstName
            .toLowerCase()
            .includes(value.trim().toLowerCase()) ||
          student.lastName.toLowerCase().includes(value.trim().toLowerCase())
      );
    } else if (id === "tag-input") {
      filteredList = dataSource.filter((student) => {
        if (!value.length) return true;

        let hasTag = false;
        if (student.tags) {
          student.tags.forEach((tag) => {
            if (tag.toLowerCase().includes(value.trim().toLowerCase()))
              hasTag = true;
          });
        }
        return hasTag;
      });
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
