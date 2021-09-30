import AddTags from "../AddTags";
import Button from "../common/Button";

const DisplayCard = ({ list }) => {
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

  return (
    <div>
      {" "}
      <ul>
        {list?.map((student) => (
          <li key={student.id}>
            <div className="card-content">
              <div className="items">
                <img
                  className="avatar"
                  alt="avatar icon"
                  src={`${student.pic}`}
                />{" "}
              </div>
              <div className="items" style={{ width: "100%" }}>
                <div className="flexRow">
                  <div className="name">{getFullName(student)}</div>
                  <Button className="toggleBtn" student={student} />
                </div>
                <div className="student-details">
                  <div>{`Email: ${student.email}`}</div>
                  <div>{`Company: ${student.company}`}</div>
                  <div>{`Skill: ${student.skill}`}</div>
                  <div>{`Average: ${calcAverage(student.grades)}%`}</div>
                </div>

                <div id={student.id}>
                  <ul>
                    {getGrades(student.grades).map((grade, index) => (
                      <li key={index}>
                        {/* `Test${i + 1}: ${grades[i]}%` */}
                        <span
                          style={{ width: "40px", display: "inline-block" }}
                        >
                          Test{index + 1}
                        </span>
                        {grade}
                      </li>
                    ))}
                  </ul>
                </div>
                <AddTags student={student} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayCard;
