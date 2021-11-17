import AddTags from "../AddTags";
import GradeList from "../GradeList";
import StudentInfo from "../StudentInfo";

const CardBody = ({ student }) => {
  return (
    <div>
      <StudentInfo student={student} />
      <GradeList student={student} />
      <AddTags student={student} />
    </div>
  );
};

export default CardBody;
