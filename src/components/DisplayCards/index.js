import StudentCard from "../StudentCard";
// import { useSelector } from 'react-redux';

const DisplayCards = ({ list, setChangingId, setTag }) => {
  // const list = useSelector((state) => state.studentList);

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
