const testTriangle: number[][] = [
  [3, 0, 0, 0],
  [7, 4, 0, 0],
  [2, 4, 6, 0],
  [8, 5, 9, 3],
];

function maximumPathSumI(triangle: number[][]) {
  console.clear();
  for (let rowIndex: number = 1; rowIndex < triangle.length; rowIndex++) {
    console.log(rowIndex);
    triangle[rowIndex].forEach((el, index) => {
      if (index === 0) {
        triangle[rowIndex][index] =
          triangle[rowIndex][index] + triangle[rowIndex - 1][index];
      } else {
        triangle[rowIndex][index] =
          triangle[rowIndex][index] +
          Math.max(
            triangle[rowIndex - 1][index],
            triangle[rowIndex - 1][index - 1]
          );
      }
      console.log(`new value is ${triangle[rowIndex][index]}`);
    });
  }
  return Math.max(...triangle[triangle.length - 1]);
}
console.log(maximumPathSumI(testTriangle));
