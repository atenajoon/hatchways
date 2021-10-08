import StudentCard from "../StudentCard";

const DisplayCards = ({ list, setChangingId, setTag }) => {
  return (
    <div>
      <ul>
        {list?.map((student) => (
          <li key={student.id}>
            <StudentCard
              student={student}
              list={list}
              setChangingId={setChangingId}
              setTag={setTag}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayCards;
