const fs = require('fs');
const { sep } = require('path');

fs.writeFileSync(`.${sep}my-file.txt`, 'Invat node.js', 'utf8');

const other = fs.readFileSync(`.${sep}my-file.txt`, 'utf8').trim();

const currentDate = new Date().toLocaleDateString('ro-RO');

const formattedText = `${other}, azi, ${currentDate}!`;

console.log(formattedText);
