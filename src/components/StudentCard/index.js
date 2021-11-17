import { useDispatch } from "react-redux";
import Avatar from "../Avatar";
import CardBody from "../CardBody";
import CardHeader from "../CardHeader";
import { addExpandGrade } from "../../redux/studentListSlice";

const StudentCard = ({ student }) => {
  const dispatch = useDispatch();
  const handleExpandClick = (studentId) => {
    dispatch(addExpandGrade({ studentId }));
  };

  return (
    <div className="card-content">
      <div className="items">
        <Avatar student={student} />
      </div>
      <div className="items">
        <CardHeader student={student} handleExpandClick={handleExpandClick} />
        <CardBody student={student} />
      </div>
    </div>
  );
};
export default StudentCard;
