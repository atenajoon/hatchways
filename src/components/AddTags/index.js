import React, { useState } from "react";

const AddTags = ({ student }) => {
  const [value, setValue] = useState("");
  const [tag, setTag] = useState([]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setValue(value);
    console.log(value);
  };

  const handlePressEnter = (e) => {
    if (e.key === "Enter") {
      console.log("do validate");
    }
  };
  return (
    <div className="tags-container">
      <div>{tag}</div>
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
