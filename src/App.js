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
        <h3>{totalResult} Students</h3>
      </div>
      <Main getTotalResult={getTotalResult} />
    </div>
  );
}

export default App;
