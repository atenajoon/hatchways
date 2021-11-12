import StudentCard from "../StudentCard";
// import { useSelector } from 'react-redux';

const DisplayCards = ({ list, setChangingId, setTag }) => {
  // const list = useSelector((state) => state.studentList);
  // useSelector() returns the entire state tree that is in the store,
  // so you can do all the filtering and cool stuff in this function!

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
