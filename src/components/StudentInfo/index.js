const StudentInfo = ({ student }) => {
  const calcAverage = (grades) => {
    let convertedGrades = [];

    for (let grade in grades) convertedGrades.push(Number(grades[grade]));

    let sum = 0;
    for (let i of convertedGrades) sum += i;

    const average = sum / convertedGrades.length;
    return average;
  };
  return (
    <div className="student-details">
      <div>{`Email: ${student.email}`}</div>
      <div>{`Company: ${student.company}`}</div>
      <div>{`Skill: ${student.skill}`}</div>
      <div>{`Average: ${calcAverage(student.grades)}%`}</div>
    </div>
  );
};

export default StudentInfo;
