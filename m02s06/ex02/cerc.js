console.log(process.argv);

let [, , radius = 1] = process.argv;
radius = parseFloat(radius);

const area = Math.Pi * radius * radius;
console.log(area);
