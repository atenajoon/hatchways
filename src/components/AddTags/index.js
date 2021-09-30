import React, { useState } from "react";

// should be changed!
const AddTags = ({ student, onTagChange }) => {
  const [value, setValue] = useState("");
  //   how to set the tags with the studentId?
  const [tags, setTags] = useState([]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setValue(value);
    console.log(value);
  };

  const handlePressEnter = (e) => {
    if (e.key === "Enter") {
      let tagList = [...tags, value];
      setTags(tagList);
      setValue("");
    }
    // passing the tags up to the Main component to set the new list of students
    onTagChange(tags);
  };

  return (
    <div className="tags-container">
      <ul className>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>

      <input
        placeholder="Add a tag"
        value={value}
        onChange={handleInputChange}
        onKeyDown={handlePressEnter}
        className="​add-tag-input add-input"
      />
    </div>
  );
};

export default AddTags;
