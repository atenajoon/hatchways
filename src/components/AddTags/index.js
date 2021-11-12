import React, { useState } from "react";

const AddTags = ({ student, setChangingId, setTag }) => {
  const [value, setValue] = useState("");

  let tags = student.tags;

  const handleInputChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  const handlePressEnter = (e) => {
    if (e.key === "Enter") {
      if (!value.trim().length) return;
      setTag(value.trim());
      setValue("");
      setChangingId(student.id);
    }
  };

  return (
    <div className="tags-container">
      <ul>
        {tags?.map((tag, index) => (
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
