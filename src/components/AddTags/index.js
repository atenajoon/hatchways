import React, { useState, useEffect } from "react";

// should be changed!
const AddTags = ({ student, onTagChange }) => {
  const [value, setValue] = useState("");
  //   how to set the tags with the studentId?
  const [tags, setTags] = useState([]);
  const [studentList, setStudentList] = useState([{ id: student.id, tags }]);

  useEffect(() => {
    console.log("tags: ", tags);
    console.log("studentList: ", studentList);
    setStudentList([{ id: student.id, tags }]);
    onTagChange(studentList);
  }, [tags]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  const handlePressEnter = (e) => {
    if (e.key === "Enter") {
      let tagList = [...tags, value];
      setTags(tagList);
      setValue("");
    }
    // setStudentList([{ id: student.id, tags }]);
    // passing the tags up to the Main component to set the new list of students
    // onTagChange(tags);
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
