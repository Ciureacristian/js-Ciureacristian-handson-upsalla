var limitA = 32;
var limitB = 15;
var limitC = 20;
var limitD = 8;
var denominator = 5;
var denominatorA = 3;

console.warn(
  'Modifica exemplul astfel incat bucla sa numere de la 1 la 32, afisand in consola propozitii de forma “Numar pana la 32 inclusiv: i.”.',
);
for (var i = 0; i <= limitA; i++) {
  console.log('Numar pana la ' + limitA + ' inclusiv: ' + i + '.');
}

console.warn(
  'Modifica exemplul astfel incat bucla sa numere de la 1 la 31 (dar nu schimba numarul 32), afisand in consola propozitii de forma “Numar pana la 32 exclusiv: i.”.',
);
for (var i = 0; i <= limitA; i++) {
  console.log('Numar pana la ' + limitA + ' exclusiv: ' + i + '.');
}

console.warn(
  'Folosind keywordul break, opreste bucla atunci cand numarul este egal cu 15 (dar afiseaza-l), afisand propozitii de forma “Ma voi opri la 15: i.”.',
);
for (var i = 0; i <= limitA; i++) {
  console.log('Ma voi opri la ' + limitB + ': ' + i + '.');

  if (i === limitB) {
    console.log('M-am oprit la ' + limitB + '.');

    break;
  }
}

console.warn(
  'Folosind keywordul continue, afiseaza doar numerele pare intre 1 si 32 (inclusiv 32 ) cu propozitii de forma “Toate numerele pare intre 1 si 32 inclusiv: i.”.',
);
for (var i = 0; i <= limitA; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(
    'Toate numerele pare intre 1 si ' + limitA + ' inclusiv: ' + i + '.',
  );
}

console.warn(
  'In mod similar, afiseaza doar numerele care sunt divizibile cu 5 cu propozitii de forma “Toate numerele divizibile cu 5 pana la 32 inclusiv: i.”. ',
);
for (var i = 1; i <= limitA; i++) {
  if (i % denominator === 0)
    console.log(
      'Toate numerele divizibile cu ' +
        denominator +
        ' pana la ' +
        limitA +
        ' inclusiv: ' +
        i +
        '.',
    );
}

console.warn(
  'Modifica exemplul astfel incat bucla sa numere de la 1 la 20, folosind propozitii de forma “Numerele pana la 20 inclusiv: i.”.',
);
for (var i = 1; i <= limitA; i++) {
  console.log('Numerele pana la ' + limitC + ' inclusiv: ' + i + '.');

  if (i === limitC) {
    break;
  }
}

console.warn(
  'Modifica exemplul astfel incat bucla sa numere de la 1 la 19, folosind propozitii de forma “Numerele pana la 19 exclusiv: i.”.',
);
for (var i = 1; i <= limitA; i++) {
  console.log('Numerele pana la ' + limitC + ' exclusiv: ' + i + '.');
  if (i === limitC) {
    break;
  }
}

console.warn(
  'Folosind keywordul break opreste bucla atunci cand numarul este egal cu 8, cu propozitii de forma “Numerele se vor opri la 8: i.”.',
);
for (var i = 1; i <= limitA; i++) {
  console.log('Numerele se vor opri la ' + limitD + ': ' + i + '.');

  if (i === limitD) {
    console.log('Numerele s-au oprit la ' + limitD + '.');
    break;
  }
}

console.warn(
  'Folosind keywordul continue, afiseaza doar numele impare intre 1 si 20, cu propozitii de forma “Numerele impare pana la 20 inclusiv: i.”. ',
);
for (var i = 1; i <= limitC; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log('Numerele impare pana la ' + limitC + ' inclusiv: ' + i + '.');
}

console.warn(
  'In mod similar, afiseaza doar numerele care sunt divizibile cu 3, cu propozitii de forma “Numerele divizibile cu 3 pana la 20 inclusiv: i.”.',
);
for (var i = 1; i <= limitA; i++) {
  if (i % denominatorA === 0) {
    console.log(
      'Numerele divizibile cu ' +
        denominatorA +
        ' pana la ' +
        limitC +
        ' inclusiv: ' +
        i +
        '.',
    );
  }
}
