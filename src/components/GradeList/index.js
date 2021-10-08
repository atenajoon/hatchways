const GradeList = ({ student, getGrades }) => {
  return (
    <div>
      {student.expandGrade ? (
        <div id={student.id}>
          <ul>
            {getGrades(student.grades).map((grade, index) => (
              <li key={index}>
                <span style={{ width: "40px", display: "inline-block" }}>
                  Test{index + 1}
                </span>
                {grade}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default GradeList;
