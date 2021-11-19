export const getGrades = (grades) => {
  let displayGrages = [];
  for (let i = 0; i < grades.length; i++) {
    displayGrages.push(`${grades[i]}%`);
  }
  return displayGrages;
};
