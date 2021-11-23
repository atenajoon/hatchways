import "./App.css";
import Main from "./components/Main";
import TotalStudents from "./components/TotalStudents";
// import { useSelector } from "react-redux";

function App() {
  // const students = useSelector((state) => state.studentList);

  return (
    <div className="App">
      {/* <div id="total-result">
        <span>{students.length} Students</span>
      </div> */}
      <TotalStudents />
      <Main />
    </div>
  );
}

export default App;
