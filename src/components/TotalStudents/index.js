import { useSelector } from "react-redux";

function TotalStudents() {
  // const [totalStudents, setTotalStudents]
  const total = useSelector((state) => state.totalStudents.total);
  console.log("TOTAL: ", total);
  return (
    <div id="total-result">
      <span>{total} Students</span>
    </div>
  );
}

export default TotalStudents;
