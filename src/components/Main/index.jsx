import { useState, useEffect } from "react";
import { getData } from "../api-utils";

const Main = () => {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  return <div>hi</div>;
};

export default Main;
