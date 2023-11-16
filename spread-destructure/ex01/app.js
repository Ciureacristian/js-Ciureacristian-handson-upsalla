let array1 = [10, 20, 30];
let array2 = [...array1, 40, 50];

let array4 = [104, 105];
let array3 = [101, 102, 103, ...array4, 106, 107, 108];

let array5 = [1, 2, 3, 4];
let array6 = [6, 7, 8];

let array8 = [1, 2, 3, 4, 5];
let array9 = [];
array9 = array8.slice();

array8.reverse();

array8.forEach(function (element) {
  console.log(element);
});

const array7 = [...array5, 5, ...array6];
