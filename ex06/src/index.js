const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirsTwo(list) {
  "use strict";
  // Only change code below this line

  //const array2 = (list); // Change this line
  const [a,b, ...array2] = [list[0],list[1],list[2],list[3],list[4],list[5],list[6],list[7],list[8],list[9]];

  // Only change code above this line
  return array2;
}

console.log(removeFirsTwo(array1));
module.exports = removeFirsTwo;
