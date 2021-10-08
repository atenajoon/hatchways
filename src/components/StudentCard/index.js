import { useState } from "react";
import Avatar from "../Avatar";
import CardBody from "../CardBody";
import CardHeader from "../CardHeader";

const StudentCard = ({ student, list, setChangingId, setTag }) => {
  const [expandGrade, setExpandGrade] = useState(false);

  const handleExpandClick = (studentId) => {
    studentId -= 1;

    if (list[studentId].expandGrade) {
      list[studentId].expandGrade = !list[studentId].expandGrade;
    } else {
      list[studentId].expandGrade = true;
    }

    setExpandGrade(!expandGrade);
  };

  return (
    <div className="card-content">
      <div className="items">
        <Avatar student={student} />
      </div>
      <div className="items">
        <CardHeader student={student} handleExpandClick={handleExpandClick} />
        <CardBody
          student={student}
          setChangingId={setChangingId}
          setTag={setTag}
        />
      </div>
    </div>
  );
};
export default StudentCard;
