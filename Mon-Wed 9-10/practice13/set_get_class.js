class Car{
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this._year = year;
  }
  get year() {
    return this._year;
  }

  set year(value) {
    this._year = value;
  }
}

class Car2 extends Car {
  constructor(make, model, year, color) {
    super(make, model, year);
    this.color = color;
  }
}

let myCar = new Car('Toyota', 'Camry', 2020);
console.log(myCar.year); // 2020

myCar.year = 2021;
console.log(myCar.year); // 2021

let myCar2 = new Car2('Honda', 'Civic', 2022, 'blue');
console.log(myCar2.year); 