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

  return (
    <div>
      {" "}
      <ul>
        {list?.map((student) => (
          <li key={student.id}>
            <ul>
              <li>
                <img alt="avatar icon" src={`${student.pic}`} />{" "}
              </li>
              <li>{`${student.firstName} ${student.lastName}`}</li>
              <li>{`Email: ${student.email}`}</li>
              <li>{`Company: ${student.company}`}</li>
              <li>{`Skill: ${student.skill}`}</li>
              <li>{`Average: ${calcAverage(student.grades)}%`}</li>
              <hr></hr>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayCard;
