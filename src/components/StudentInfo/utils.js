export const calcAverage = (grades) => {
  let sum = 0;
  let gradesCount = 0;

  for (let grade of grades) {
    sum += Number(grade);
    gradesCount++;
  }

  const average = sum / gradesCount;
  return average;
};
