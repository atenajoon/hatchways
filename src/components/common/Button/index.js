import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Button = ({ studentId, onClick, className, expandGrade }) => {
  console.log("studentId", studentId, expandGrade);
  return (
    <button className={className} onClick={() => onClick(studentId)}>
      {expandGrade ? (
        <FontAwesomeIcon icon={faMinus} />
      ) : (
        <FontAwesomeIcon icon={faPlus} />
      )}
    </button>
  );
};

export default Button;
