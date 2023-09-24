const metricSpeeds = [10, 60, 100, 180, 850, 1000];

const centigradeTemperatures = [0, 100, -30, 16, -273, 1000];

const metricDistances = [1, 10, 100, 1000, 1500];

console.warn(`
  Afiseaza cate una pe linie propozitii de forma
  “10km/h inseamna xxxm/s sau yyymph.”.
  Stiind ca formula pentru a calcula metri pe secunda este:
  kmh * 5 / 18 si mile pe ora este: kmh * 1.609344
`);

function kmhtomps(kmh) {
  return (kmh * 5) / 18;
}

function kmhtomph(kmh) {
  return kmh * 1.609344;
}

for (let i = 0; i < metricSpeeds.length; i++) {
  const speed = metricSpeeds[i];

  console.log(
    `${speed}km/h inseamna ${kmhtomps(speed)}m/s sau ${kmhtomph(speed)}mph.`,
  );
}

console.warn(`
  Aduna toate valorile din array si afiseaza
  o propozitie de forma: “xxxkm/h inseamna yyymph.”.
`);
let totalSpeeds = 0;
for (let i = 0; i < metricSpeeds.length; i++) {
  const speed = metricSpeeds[i];

  totalSpeeds += speed;
}
console.log(`${totalSpeeds}km/h inseamna ${kmhtomph(totalSpeeds)}mph.`);

console.warn(`Aduna toate valorile din array si afiseaza o propozitie de forma:
 “xxx grade celsius inseamna yyy grade kelvin.”.
`);
function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}
function celsiusToFahrenheit(celsius) {
  return Math.round((celsius * 9) / 5 + 32);
}

centigradeTemperatures.forEach(function (temperature) {
  const kelvin = celsiusToKelvin(temperature);
  const fahrenheit = celsiusToFahrenheit(temperature);
  console.log(
    `${temperature} grade celsius inseamna ${kelvin} grade kelvin sau ${fahrenheit} grade Fahrenheit.`,
  );
});

console.warn(`Pentru distante afiseaza propozitii de forma
 “1m inseamna xxx inch sau yyy picioare.”. Stiind ca un metru este 39.3701 inch si 3.281 picioare.
`);
function meterToInchFoot(meter) {
  const inch = meter * 39.3701;
  const foot = meter * 3.281;
  return `${meter}m inseamna ${inch} inch sau ${foot} picioare.`;
}
metricDistances.forEach(function (distanta) {
  console.log(meterToInchFoot(distanta));
});

console.warn(`
Aduna toate valorile din array si afiseaza o propozitie de forma
 “xxxm inseamna yyy mile.”. Stiind ca formula este: m / 1609
`);
function metriToMile(metri) {
  const mile = (metri / 1609.344).toFixed(15);
  return `${metri}m inseamna ${mile} mile.`;
}

const totalDistances = metricDistances.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);

console.log(` ${metriToMile(totalDistances)}`);
