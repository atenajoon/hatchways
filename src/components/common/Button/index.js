import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Button = ({ onClick, className, showGrades }) => {
  return (
    <button className={className} onClick={onClick}>
      {showGrades ? (
        <FontAwesomeIcon icon={faMinus} />
      ) : (
        <FontAwesomeIcon icon={faPlus} />
      )}
    </button>
  );
};

export default Button;
