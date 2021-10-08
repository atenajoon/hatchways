import AddTags from "../AddTags";
import GradeList from "../GradeList";
import StudentInfo from "../StudentInfo";

const CardBody = ({ student, setChangingId, setTag }) => {
  return (
    <div>
      <StudentInfo student={student} />
      <GradeList student={student} />
      <AddTags
        studentId={student.id}
        setChangingId={setChangingId}
        tags={student.tags}
        setTag={setTag}
      />
    </div>
  );
};

export default CardBody;
