import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import Button from "../common/Button";
import { useDispatch } from "react-redux";
import { addExpandGrade } from "../../redux/studentListSlice";
import { getFullName } from "../../myU/business-utils";

const CardHeader = ({ student }) => {
  const studentId = student.id;
  const dispatch = useDispatch();
  const handleExpandClick = () => {
    dispatch(addExpandGrade({ studentId }));
  };

  return (
    <div className="student-name-flex-row">
      <div className="student-name">{getFullName(student)}</div>
      {student.expandGrade ? (
        <Button
          className="expand-btn"
          onClick={() => handleExpandClick()}
          btnTag={<FontAwesomeIcon icon={faMinus} />}
        />
      ) : (
        <Button
          className="expand-btn"
          onClick={() => handleExpandClick()}
          btnTag={<FontAwesomeIcon icon={faPlus} />}
        />
      )}
    </div>
  );
};
export default CardHeader;
