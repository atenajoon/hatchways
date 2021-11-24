import { useSelector } from "react-redux";

function TotalStudents() {
  const total = useSelector((state) => state.totalStudents.total);
  return (
    <div id="total-result">
      <span>{total} Students</span>
    </div>
  );
}

export default TotalStudents;
