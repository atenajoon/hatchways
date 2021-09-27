export const getData = async () => {
  const res = await fetch("https://api.hatchways.io/assessment/students");
  console.log("res: ", res);
};
