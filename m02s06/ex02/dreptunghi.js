console.log(process.argv);
//destructurare
// let length = process.argv[2]
//let width = process.argv[3]
let [, , length = 1, width = 1] = process.argv;
length = Number(length);
width = Number(width);

console.log(length * width);
