// const fs = required ('fs');
//const writeFileSync = fs.writeFileSync;
const { writeFileSync } = require('fs');
const sep = require('path').sep;
writeFileSync('./my-file.txt', 'Invat node.js', 'utf8');
console.log(sep);
