import { useState } from "react";
import CardBody from "../CardBody";
import Button from "../common/Button";

const DisplayCard = ({ list, setStudentList, setChangingId, setTag }) => {
  const [expandGrade, setExpandGrade] = useState(false);

  const calcAverage = (grades) => {
    let convertedGrades = [];

    for (let grade in grades) convertedGrades.push(Number(grades[grade]));

    let sum = 0;
    for (let i of convertedGrades) sum += i;

    const average = sum / convertedGrades.length;
    return average;
  };

  const getFullName = ({ firstName, lastName }) => {
    return `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
  };

  const getGrades = (grades) => {
    let displayGrages = [];
    for (let i = 0; i < grades.length; i++) {
      displayGrages.push(`${grades[i]}%`);
    }
    return displayGrages;
  };

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
    <div>
      <ul>
        {list?.map((student) => (
          <li key={student.id}>
            <div className="card-content">
              <div className="items">
                <img
                  className="avatar"
                  alt="avatar icon"
                  src={`${student.pic}`}
                />
              </div>
              <div className="items">
                <div className="student-name-flex-row">
                  <div className="student-name">{getFullName(student)}</div>

                  <Button
                    studentId={student.id}
                    className="expand-btn"
                    onClick={handleExpandClick}
                    expandGrade={student.expandGrade}
                  />
                </div>

                <CardBody
                  student={student}
                  setChangingId={setChangingId}
                  setTag={setTag}
                  getGrades={getGrades}
                  calcAverage={calcAverage}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayCard;
