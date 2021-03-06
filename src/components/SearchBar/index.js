import { useDispatch } from "react-redux";
import { updateName, updateTag } from "../../redux/updateInputSlice";

const SearchBar = ({ id, placeholder }) => {
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { value } = e.target;
    const lowerCaseValue = value.trim().toLowerCase();

    id === "name-input"
      ? dispatch(updateName({ val: lowerCaseValue }))
      : dispatch(updateTag({ val: lowerCaseValue }));
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
