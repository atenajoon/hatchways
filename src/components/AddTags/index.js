import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addATag } from "../../redux/studentListSlice";

const AddTags = ({ student }) => {
  const [value, setValue] = useState("");
  const { id, tags } = student;

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { value } = e.target;
    setValue(value.trim());
  };

  const handlePressEnter = (e) => {
    if (e.key === "Enter") {
      if (!value.trim().length) return;
      dispatch(addATag({ studentId: id, tag: value }));
      setValue("");
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

export default React.memo(AddTags);
