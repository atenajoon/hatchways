import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Button from "../common/Button";

const CardHeader = ({ student, handleExpandClick }) => {
  const getFullName = ({ firstName, lastName }) => {
    return `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
  };

  return (
    <div className="student-name-flex-row">
      <div className="student-name">{getFullName(student)}</div>
      {student.expandGrade ? (
        <Button
          className="expand-btn"
          onClick={() => handleExpandClick(student.id)}
          btnTag={<FontAwesomeIcon icon={faMinus} />}
        />
      ) : (
        <Button
          className="expand-btn"
          onClick={() => handleExpandClick(student.id)}
          btnTag={<FontAwesomeIcon icon={faPlus} />}
        />
      )}
    </div>
  );
};
export default CardHeader;
