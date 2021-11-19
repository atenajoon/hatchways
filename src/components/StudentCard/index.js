import Avatar from "../Avatar";
import CardBody from "../CardBody";
import CardHeader from "../CardHeader";

const StudentCard = ({ student }) => {
  return (
    <div className="card-content">
      <div className="items">
        <Avatar student={student} />
      </div>
      <div className="items">
        <CardHeader student={student} />
        <CardBody student={student} />
      </div>
    </div>
  );
};
export default StudentCard;
