const Button = ({ student }) => {
  const handleClick = (student) => {
    const gradesList = document.getElementById(student.id);
    gradesList.classList.toggle("toggleView");

    console.log("clicked", student.id);
  };

  return <button onClick={() => handleClick(student)}>+</button>;
};

export default Button;
