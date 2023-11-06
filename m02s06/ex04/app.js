const fs = require('fs');
const data = fs.readFileSync('./another.txt', 'utf8');
const other = fs.readFileSync('./my-file.txt', 'utf8');
const file = fs.readFileSync('./dir/this-other-file.txt', 'utf8');

console.log(data + ' ' + other + ' ' + file + '!');
