import "./App.css";
import Main from "./components/Main";
import { useSelector, useDispatch } from "react-redux";

function App() {
  // const dispatch = useDispatch();
  const students = useSelector((state) => state.studentList);

  return (
    <div className="App">
      <div id="total-result">
        <span>{students.length} Students</span>
      </div>
      <Main />
    </div>
  );
}

export default App;
