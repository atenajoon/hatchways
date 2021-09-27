const DisplayCard = ({ list }) => {
  return (
    <div>
      {" "}
      <ul>
        {list?.map((student) => (
          <li key={student.id}>
            <ul>
              <li>
                <img src={`${student.pic}`} />{" "}
              </li>
              <li>{`${student.firstName} ${student.lastName}`}</li>
              <li>{`Email: ${student.email}`}</li>
              <li>{`Company: ${student.company}`}</li>
              <li>{`Skill: ${student.skill}`}</li>
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
