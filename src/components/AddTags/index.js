import React, { useState } from "react";

const AddTags = ({ student }) => {
  const handleInputChange = (e) => {
    const { value } = e.target;
    console.log(value);
  };

  return (
    <div className="tags-container">
      <div>{`Tag ${student.id}`}</div>
      <input
        placeholder="Add a tag"
        // value={value}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default AddTags;
