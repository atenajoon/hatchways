import { calcAverage } from "./utils";

const StudentInfo = ({ student }) => {
  return (
    <div className="student-details">
      <div>{`Email: ${student.email}`}</div>
      <div>{`Company: ${student.company}`}</div>
      <div>{`Skill: ${student.skill}`}</div>
      <div>{`Average: ${calcAverage(student.grades)}%`}</div>
    </div>
  );
};

export default StudentInfo;
