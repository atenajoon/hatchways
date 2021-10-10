import { useState } from "react";

const SearchBar = ({ id, placeholder, onChange, dataSource }) => {
  const [searchedTerm, setSeachedTerm] = useState({
    searchedName: "",
    searchedTag: "",
  });

  const myHandleChange = (e) => {
    const { value } = e.target;

    let filteredList = [];

    // what's wrong in this logic?

    let both;
    let justName;
    let justTag;

    // set the state to the searched term
    // but it is not keeping the previous state after rerendering
    if (id === "name-input")
      setSeachedTerm({
        ...searchedTerm,
        searchedName: value.trim().toLowerCase(),
      });
    console.log("SN: ", searchedTerm.searchedName);

    if (id === "tag-input")
      setSeachedTerm({
        ...searchedTerm,
        searchedTag: value.trim().toLowerCase(),
      });
    console.log("ST: ", searchedTerm.searchedTag);

    // if both searching inputs are active
    // this condition never happend since every rerender empties the other one
    if (searchedTerm.searchedTag !== "" && searchedTerm.searchedName !== "") {
      console.log(
        "searched: ",
        searchedTerm.searchedName,
        searchedTerm.searchedTag
      );
      both = dataSource.filter(
        (student) =>
          student.firstName
            .concat(" ", student.lastName)
            .trim()
            .toLowerCase()
            .includes(searchedTerm.searchedName) &&
          student.tags?.filter((tag) => tag.includes(searchedTerm.searchedTag)) //doesn't filter by the seachedTag
      );
      console.log("both: ", both);
    }
    // if only searching by tag:
    else if (searchedTerm.searchedTag !== "") {
      justTag = dataSource.filter((student) =>
        student.tags?.filter((tag) => tag.includes(searchedTerm.searchedTag))
      );
      console.log("justTag: ", justTag);
    }
    // if only searching by name:
    else if (searchedTerm.searchedName !== "") {
      justName = dataSource.filter((student) =>
        student.firstName
          .concat(" ", student.lastName)
          .trim()
          .toLowerCase()
          .includes(searchedTerm.searchedName)
      );
      console.log("justName: ", justName);
    }

    // previous loginc, filtered only by one of the inputs!
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

    console.log("filtered: ", filteredList);
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
