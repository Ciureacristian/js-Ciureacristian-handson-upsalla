const car = {
  make: 'Audi',
  color: 'black',
  wheels: 4,
  speed: 50,
  topSpeed: 160,
  topReverseSpeed: -50,
  isTrunkOpen: false,
  areLightsOn: false,

  accelerate: function () {
    this.speed++;
  },
  decelerate: function () {
    this.speed--;
  },

  openTrunk: function () {
    this.isTrunkOpen = true;
  },
  closeTrunk: function () {
    this.isTrunkOpen = false;
  },

  turnLightsOn: function () {
    this.areLightsOn = true;
  },
  turnLightsOff: function () {
    this.areLightsOn = false;
  },
  stop: function () {
    this.speed = 0;
  },
  setSpeed: function (newSpeed) {
    if (newSpeed >= this.topReverseSpeed && newSpeed <= this.topSpeed) {
      this.speed = newSpeed;
    } else if (newSpeed > this.topSpeed) {
      this.speed = this.topSpeed;
    } else if (newSpeed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
    }
  },

  flashLights: function () {
    // pastrarea keywordului this
    // metoda 1 pre -2016
    const self = this;
    self.turnLightsOn();

    window.setTimeout(function () {
      self.turnLightsOff();
    }, 1000 * 2);
  },
};

console.warn(`Afiseaza propozitia: "Masina era marca make si se deplasa cu speed km/h.".
`);
console.log(
  `Masina este marca ${car.make} si se deplaseaza cu ${car.speed} km/h.`,
);

console.warn(`Decelereaza masina cu 5 unitati apoi afisaza propozitia: "Viteza noua este speed km/h".
`);
for (let i = 0; i < 5; i++) {
  car.decelerate();
}
console.log(`Viteza noua este ${car.speed} km/h`);
