export const getData = async () => {
  const res = await fetch("https://api.hatchways.io/assessment/students");
  return res.json();
};
