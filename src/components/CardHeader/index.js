import Button from "../common/Button";

const CardHeader = ({ student, handleExpandClick }) => {
  const getFullName = ({ firstName, lastName }) => {
    return `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
  };

  return (
    <div className="student-name-flex-row">
      <div className="student-name">{getFullName(student)}</div>
      <Button
        studentId={student.id}
        className="expand-btn"
        onClick={handleExpandClick}
        expandGrade={student.expandGrade}
      />
    </div>
  );
};
export default CardHeader;
