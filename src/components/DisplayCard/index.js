const DisplayCard = ({ list }) => {
  const calcAverage = (grades) => {
    let convertedGrades = [];

    for (let grade in grades) {
      convertedGrades.push(Number(grades[grade]));
    }

    let sum = 0;
    for (let i of convertedGrades) {
      sum += i;
    }

    const average = sum / convertedGrades.length;
    return average;
  };

  const getFullName = ({ firstName, lastName }) => {
    return `${firstName.toUpperCase()} ${lastName.toUpperCase()}`;
  };

  return (
    <div>
      {" "}
      <ul>
        {list?.map((student) => (
          <li key={student.id}>
            <ul>
              <div className="card-content">
                <div>
                  <li>
                    <img
                      className="avatar"
                      alt="avatar icon"
                      src={`${student.pic}`}
                    />{" "}
                  </li>
                </div>
                <div>
                  <li className="name">{getFullName(student)}</li>
                  <li>{`Email: ${student.email}`}</li>
                  <li>{`Company: ${student.company}`}</li>
                  <li>{`Skill: ${student.skill}`}</li>
                  <li>{`Average: ${calcAverage(student.grades)}%`}</li>
                </div>
              </div>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayCard;
