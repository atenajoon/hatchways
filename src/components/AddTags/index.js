import React, { useState } from "react";

const AddTags = ({ student }) => {
  const [value, setValue] = useState("");
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
  };
  return (
    <div className="tags-container">
      <ul>
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
