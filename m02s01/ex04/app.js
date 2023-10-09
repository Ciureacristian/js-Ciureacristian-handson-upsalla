// avem nevoie de o clasa car
// care atunci cand este instantiata
// si se ruleaza metoda .render()
//sa afiseze in DOM masinuta cu prop specifice
// pozitiile (top left) color pentru culoare

// new Car(100, 200, purple)
// left: 100, top:200; background:purple;

class Car {
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
  }

  e(elementType = 'div') {
    // wrapper pentru document.createElement
    return document.createElement(elementType);
  }

  turnLightOn() {
    this.lightFront.classList.add('light--on');
  }

  turnLightOff() {
    this.lightFront.classList.remove('light--on');

    return this;
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
}
const purpleCar = new Car(200, 300, 'purple').render();
// new Date ().getFullYear();
