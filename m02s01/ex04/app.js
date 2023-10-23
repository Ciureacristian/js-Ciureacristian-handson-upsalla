// avem nevoie de o clasa car
// care atunci cand este instantiata
// si se ruleaza metoda .render()
//sa afiseze in DOM masinuta cu prop specifice
// pozitiile (top left) color pentru culoare

// new Car(100, 200, purple)
// left: 100, top:200; background:purple;

class Car {
  //clases are sintantic sugar
  isLightOn = false;
  intervalId = -1;

  constructor(left = 10, top = 10, color = 'black') {
    this.positionX = left;
    this.positionY = top;
    this.color = color;

    this.frame = this.e('div');
    this.frame.classList.add('frame');
    this.frame.style.left = this.positionX + 'px';
    this.frame.style.top = this.positionY + 'px';

    this.car = this.e('div');
    this.car.classList.add('car');
    this.frame.append(this.car);

    this.carTop = this.e('div');
    this.carTop.classList.add('car__top');
    this.carTop.style.backgroundColor = this.color;
    this.car.append(this.carTop);

    this.carBody = this.e('div');
    this.carBody.classList.add('car__body');
    this.carBody.style.backgroundColor = this.color;
    this.car.append(this.carBody);

    this.lightFront = this.e('div');
    this.lightFront.classList.add('light', 'light--front');
    this.carBody.append(this.lightFront);

    this.lightBack = this.e('div');
    this.lightBack.classList.add('light', 'light--back');
    this.carBody.append(this.lightBack);
    this.wheelFront = this.e('div');
    this.wheelFront.classList.add('wheel', 'car__wheel', 'car__wheel--front');
    this.carBody.append(this.wheelFront);

    this.hubCapFront = this.e('div');
    this.hubCapFront.classList.add('wheel__cap');
    this.wheelFront.append(this.hubCapFront);

    this.wheelBack = this.e('div');
    this.wheelBack.classList.add('wheel', 'car__wheel', 'car__wheel--back');
    this.carBody.append(this.wheelBack);
    this.hubCapBack = this.e('div');
    this.hubCapBack.classList.add('wheel__cap');
    this.wheelBack.append(this.hubCapBack);

    this.areHazardsOn = false;
    this.hazardsInterval = null;

    //this.wheels = this.e('div');
    //this.wheels.classList.add('wheel', 'car__wheel');
    //this.carBody.append(this.wheels);
    this.wheels = document.querySelectorAll('.car__wheel');
    //this.wheelCaps = this.e('div');
    //this.wheelCaps.classList.add('wheel_cap');
    //this.carBody.append(this.wheelCaps);
    this.wheelCaps = document.querySelectorAll('.wheel__cap');

    this.rearLight = document.querySelector('.light--back');
  }

  e(elementType = 'div') {
    // wrapper pentru document.createElement
    return document.createElement(elementType);
  }

  turnLightOn() {
    this.lightFront.classList.add('light--on');
    this.isLightOn = true;

    return this;
  }

  turnLightOff() {
    this.lightFront.classList.remove('light--on');
    this.isLightOn = false;

    return this;
  }

  toggleHazards() {
    if (this.intervalId > 0) {
      //stop interval
      clearInterval(this.intervalId);
      this.intervalId = -1;

      return;
    }
    // metida de prezervare a this
    // post 2016
    this.intervalId = setInterval(() => {
      if (this.isLightOn === true) {
        this.turnLightOff();
      } else {
        this.turnLightOn();
      }
    }, 800);
  }

  move(top, left) {
    const positionX = Number(left);
    const positionY = Number(top);

    if (!isNaN(positionX)) {
      this.frame.style.left = positionX + 'px';
    }

    if (!isNaN(positionY)) {
      this.frame.style.top = positionY + 'px';
    }
  }
  render() {
    // only touch the DOM at the last moment
    document.body.append(this.frame);

    return this;
  }

  changeWheelsColor(color) {
    this.wheels.forEach((wheel) => {
      wheel.style.backgroundColor = color;
    });
  }

  changeWheelCapColor(color) {
    this.wheelCaps.forEach((cap) => {
      cap.style.backgroundColor = color;
    });
  }

  engageBrake() {
    this.rearLight.style.backgroundColor = 'red';
  }

  disengageBrake() {
    this.rearLight.style.backgroundColor = '';
  }
}
const purpleCar = new Car(200, 300, 'purple').render();
const car = new Car();
// new Date ().getFullYear();
car.changeWheelsColor('black');
car.changeWheelCapColor('green');
car.engageBrake();
car.disengageBrake();
