const Car = {
  make: '',
  color: '',
  wheels: 0,
  speed: 0,
  topSpeed: 160,
  topReverseSpeed: -50,
  areLightsOn: false,
  displaySpeed: function () {
    console.log(`Viteza curenta este: ${this.speed}.`);
  },

  accelerate: function () {
    this.speed++;

    this.displaySpeed();
  },

  decelerate: function () {
    this.speed--;

    this.displaySpeed();
  },
  setSpeed: function (speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;
    } else if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
    } else {
      this.speed = speed;
    }
    this.displaySpeed();
  },

  turnLightsOn: function () {
    this.areLightsOn = true;
  },

  turnLightsOff: function () {
    this.turnLightsOn = false;
  },

  flashLights: function () {
    const self = this;
    self.TurnLightsOn();

    window.setTimeout(function () {
      self.TurnLightsoff();
    }, 1000 * 2);
  },
};

const audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.wheels = 4;
audi.speed = 0;
audi.topSpeed = 140;
audi.topReverseSpeed = 10;

console.log(audi);
