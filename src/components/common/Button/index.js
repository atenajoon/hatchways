import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Button = ({ student }) => {
  const [myIcon, setMyIcon] = useState(faPlus);

  console.log(myIcon);
  const handleClick = (student) => {
    const gradesList = document.getElementById(student.id);
    gradesList.classList.toggle("toggleView");

    myIcon === faPlus ? setMyIcon(faMinus) : setMyIcon(faPlus);
  };

  return (
    <button onClick={() => handleClick(student)}>
      <FontAwesomeIcon icon={myIcon} />
    </button>
  );
};

export default Button;
