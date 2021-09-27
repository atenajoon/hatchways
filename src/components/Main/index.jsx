import { useState, useEffect } from "react";
import { getData } from "../api-utils";

const Main = () => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    setList();
  }, []);

  const setList = async () => {
    const data = await getData();
    setArr(data);
  };
  console.log("list: ", arr);
  return <div>hi</div>;
};

export default Main;
