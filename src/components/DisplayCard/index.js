const DisplayCard = ({ list }) => {
  return (
    <div>
      {" "}
      <ul>
        {list?.map((student) => (
          <li key={student.id}>{student.firstName}</li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayCard;
