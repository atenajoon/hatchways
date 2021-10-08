import AddTags from "../AddTags";
import GradeList from "../GradeList";
import StudentInfo from "../StudentInfo";

const CardBody = ({
  student,
  setChangingId,
  setTag,
  getGrades,
  calcAverage,
}) => {
  return (
    <div>
      <StudentInfo student={student} calcAverage={calcAverage} />
      <GradeList student={student} getGrades={getGrades} />
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
