import { useState } from "react";
import "./App.css";
import Main from "./components/Main";

function App() {
  const [totalResult, setTotalResult] = useState();

  const getTotalResult = (totalResult) => {
    setTotalResult(totalResult);
  };

  return (
    <div className="App">
      <div id="total-result">
        <span>{totalResult} Students</span>
      </div>
      <Main getTotalResult={getTotalResult} />
    </div>
  );
}

export default App;
