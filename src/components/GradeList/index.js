import { getGrades } from "./utils";

const GradeList = ({ student }) => {
  let myClass = student.expandGrade ? "" : "none-class";

  return (
    <div>
      <div id={student.id} className={myClass}>
        <ul>
          {getGrades(student.grades).map((grade, index) => (
            <li key={index}>
              <span className="grades-container">Test{index + 1}</span>
              {grade}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GradeList;
