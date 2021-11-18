import { useSelector, useDispatch } from "react-redux";
import { updateName, updateTag } from "../../redux/updateInputSlice";

const SearchBar = ({ id, placeholder }) => {
  const dispatch = useDispatch();

  const searchedTerm = useSelector((state) => state.updateInput);

  const handleInputChange = (e) => {
    const { value } = e.target;
    const lowerCaseValue = value.trim().toLowerCase();

    id === "name-input"
      ? dispatch(updateName({ tag: lowerCaseValue }))
      : dispatch(updateTag({ tag: lowerCaseValue }));
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
