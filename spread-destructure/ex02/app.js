let array1 = [60, 70, 80];
let array2 = [50, ...array1, 90];

let array4 = [40, 50];
let array3 = [10, 20, 30, ...array4, 60, 70, 80];

let array5 = [101, 102, 103, 104];
let array6 = [106, 107, 108];

let array8 = [5, 4, 3, 2, 1];
let array9 = [];
array9 = array8.slice();

array8.reverse();

array8.forEach(function (element) {
  console.log(element);
});

const array7 = [...array5, 105, ...array6];
