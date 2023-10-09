// syntactic sugar
// js nu are clase

class Car {
  // notatia 1
  topSpeed = 160;
  topReverseSpeed = -50;
  isTrunkOpen = false;
  areLightsOn = false;
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  accelerate() {
    this.speed++;
  }

  decelerate() {
    this.speed--;
  }

  stop() {
    this.speed = 0;
    console.log(`Viteza noua este: ${this.speed}.`);
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;
    }

    if (speed < this.topReverseSpeed) {
      speed = this.topReverseSpeed;
    }

    this.speed = speed;
  }

  openTrunk() {
    this.isTrunkOpen = true;
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }

  turnLightsOn() {
    this.areLightsOn = true;
  }

  turnLightsOff() {
    this.areLightsOn = false;
  }

  flashLights() {
    self.turnLightsOn();

    window.setTimeout(function () {
      self.turnLightsOff();
    }, 1000 * 2);
  }

  setSpeed(newSpeed) {
    if (newSpeed >= this.topReverseSpeed && newSpeed <= this.topSpeed) {
      this.speed = newSpeed;
    } else if (newSpeed > this.topSpeed) {
      this.speed = this.topSpeed;
    } else if (newSpeed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
    }
  }
}

const audi = new Car('Audi', 'black', 4, 50);
const opel = new Car('Opel', 'red', 4, 3);

const cars = [audi, opel];

console.log(`Viteza noua este ${audi.speed} km/h.`);
console.log(`Viteza noua este ${opel.speed} km/h.`);
