const fs = require('fs');

const args = process.argv.slice(2);

if (args.length === 3 && args[0] === 'cerc') {
  const raza = parseFloat(args[1]);
  if (!isNaN(raza) && raza > 0) {
    const suprafata = Math.PI * Math.pow(raza, 2);
    console.log(`Suprafața cercului cu rază ${raza} este: ${suprafata}`);
    logToFile(`(node app cerc ${raza}) -> Suprafața: ${suprafata}`);
  } else {
    console.log('Eroare: Raza trebuie să fie un număr pozitiv.');
  }
} else if (args.length === 4 && args[0] === 'patrat') {
  const latura = parseFloat(args[1]);
  if (!isNaN(latura) && latura > 0) {
    const suprafata = Math.pow(latura, 2);
    console.log(`Suprafața pătratului cu latura ${latura} este: ${suprafata}`);
    logToFile(`(node app patrat ${latura}) -> Suprafața: ${suprafata}`);
  } else {
    console.log('Eroare: Latura trebuie să fie un număr pozitiv.');
  }
} else if (args.length === 4 && args[0] === 'dreptunghi') {
  const lungime = parseFloat(args[1]);
  const latime = parseFloat(args[2]);
  if (!isNaN(lungime) && !isNaN(latime) && lungime > 0 && latime > 0) {
    const suprafata = lungime * latime;
    console.log(
      `Suprafața dreptunghiului cu lungimea ${lungime} și lățimea ${latime} este: ${suprafata}`,
    );
    logToFile(
      `(node app dreptunghi ${lungime} ${latime}) -> Suprafața: ${suprafata}`,
    );
  } else {
    console.log('Eroare: Lungimea și lățimea trebuie să fie numere pozitive.');
  }
} else if (args.length === 1 && args[0] === '-clear') {
  clearLogFile();
  console.log('Fișierul .log a fost golit.');
} else if (args.length === 2 && args[0] === '-h') {
  console.log('Mod de utilizare: suprafete <tip_suprafata> [parametri]');
  console.log('Tipuri de suprafete disponibile:');
  console.log('  - cerc <raza>');
  console.log('  - patrat <latura>');
  console.log('  - dreptunghi <lungime> <latime>');
  console.log('\nExemple:');
  console.log('  suprafete cerc 5');
  console.log('  suprafete patrat 6');
  console.log('  suprafete dreptunghi 6 8');
  console.log('Pentru a șterge conținutul fișierului .log: suprafete -clear');
} else {
  console.log(
    "Eroare: Comandă incorectă. Folosiți 'suprafete -h' pentru ajutor.",
  );
}

function logToFile(data) {
  fs.appendFileSync('.log', data + '\n', (err) => {
    if (err) throw err;
  });
}

function clearLogFile() {
  fs.writeFileSync('.log', '', (err) => {
    if (err) throw err;
  });
}
