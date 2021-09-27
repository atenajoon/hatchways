const DisplayCard = ({ list }) => {
  const calcAverage = (id, grades) => {
    let convertedGrades = [];

    for (let grade in grades) {
      convertedGrades.push(Number(grades[grade]));
    }

    let sum = 0;
    for (let i of convertedGrades) {
      sum += i;
      console.log("i: ", i);
    }

    console.log("con", convertedGrades, sum);
  };

  calcAverage();
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
              {calcAverage(student.id, student.grades)}
              {/* <li>{`Average: ${student.email}`}</li> */}
              <hr></hr>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayCard;
