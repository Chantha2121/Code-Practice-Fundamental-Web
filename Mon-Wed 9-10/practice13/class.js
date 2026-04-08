class Car{
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    console.log(`Car: ${this.make} ${this.model} (${this.year})`);
  }
}

let myCar = new Car('Toyota', 'Camry', 2020);
myCar.displayInfo();