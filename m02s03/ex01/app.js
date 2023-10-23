class car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  accelerate(deltaSpeed = 1) {
    this.speed = this.speed + 1 + deltaSpeed;

    return this;
  }

  decelerate(deltaSpeed = 1) {
    this.speed = this.speed - 1 - deltaSpeed;

    return this;
  }

  setSpeed(speed = 0) {
    if (speed !== undefined) {
      this.speed = speed;
    }

    return this;
  }

  displaySpeedinDom() {
    let instanceMessage = document.querySelector('.' + this.make);

    if (instanceMessage === null) {
      instanceMessage = document.createElement('p');
      instanceMessage.classList.add(this.make);
      document.body.append(instanceMessage);

      instanceMessage.innerText = this.speed;
    }

    return this;
  }
}

const audi = new car('Audi', 'black', 4, 50);

console.warn(`Optimizeaza codul din exercitiu astfel incat sa folosesti chaining pentru a accelera
Converteste si metoda decelerate la metoda chainable.
Adu instanta masinii la viteza 55 apoi redu la 52, folosind chaining.
Afiseaza in DOM (prin orice metoda) viteza instantei dupa lantul de metode.`);

audi
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .decelerate()
  .decelerate()
  .decelerate()
  .displaySpeedinDom();
