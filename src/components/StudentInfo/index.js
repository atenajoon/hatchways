const StudentInfo = ({ student }) => {
  const calcAverage = (grades) => {
    let convertedGrades = [];

    let sum = 0;
    for (let grade of grades) {
      sum += Number(grade);
    }

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
