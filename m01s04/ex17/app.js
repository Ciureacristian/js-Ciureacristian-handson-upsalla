var services = [
  {
    name: 'Mailchimp',
    adoption: 2010,
  },
  {
    name: 'Google Analytics',
    adoption: 2009,
  },
  {
    name: 'Stripe',
    adoption: 2020,
  },
  {
    name: 'Hotjar',
    adoption: 2021,
  },
  {
    name: 'Sendgrid',
    adoption: 2022,
  },
];

console.warn(
  `Afiseaza in consola propozitia “Siteul foloseste urmatoarele servicii: a, b, c, d si e.”`,
);
var serviceList = '';

for (var i = 0; i < services.length; i++) {
  if (i === services.length - 1) {
    serviceList += services[i].name;
  } else {
    serviceList += `${services[i].name}, `;
  }
}

serviceList = serviceList.replace(/,([^,]*)$/, ' si$1');

console.log(`Siteul foloseste urmatoarele servicii: ${serviceList}.`);

console.warn(`Afiseaza doar numele serviciilor integrate dupa 2020 intr-o propozitie de forma “Serviciile a, b, c au fost adoptate dupa 2020 inclusiv.”
`);

var adoptAfter2000 = [];
for (var i = 0; i < services.length; i++) {
  if (services[i].adoption >= 2020) {
    adoptAfter2000.push(services[i].name);
  }
}
var serviceList = adoptAfter2000.join(', ');
console.log(`Serviciile ${serviceList} au fost adoptate dupa 2020 inclusiv.`);

console.warn(`Afiseaza doar pentru serviciile de pe pozitii pare, cate una pe linie,
 propozitii de forma “Serviciul se numeste xxx si a fost integrat in yyyy.”
`);
for (var i = 0; i < services.length; i++) {
  if (i % 2 === 0) {
    console.log(
      `Serviciul se numeste ${services[i].name} si a fost integrat in ${services[i].adoption}.`,
    );
  }
}

console.warn(`Folosind anul curent afiseaza propozitii de forma
 “Siteul foloseste serviciul xxx de yyy ani.”
`);
var currentYear = new Date().getFullYear();
services.forEach(function (service) {
  var yearInUse = currentYear - service.adoption;
  console.log(
    `Siteul foloseste serviciul ${service.name} de ${yearInUse} ani.`,
  );
});

console.warn(`Gaseste cel mai vechi serviciu si afiseaza o propozitie de forma “Folosim xxx de yyy ani.”
`);
var oldestService = services[0];

for (var i = 1; i < services.length; i++) {
  if (services[i].adoption < oldestService.adoption) {
    oldestService = services[i];
  }
}

var currentYear = new Date().getFullYear();
var yearsInUse = currentYear - oldestService.adoption;

console.log(`Folosim ${oldestService.name} de ${yearsInUse} ani.`);
