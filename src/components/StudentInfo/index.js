const StudentInfo = ({ student }) => {
  const calcAverage = (grades) => {
    let sum = 0;
    let gradesCount = 0;

    for (let grade of grades) {
      sum += Number(grade);
      gradesCount++;
    }

    const average = sum / gradesCount;
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
