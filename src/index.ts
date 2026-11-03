// 1. The interface: describes what every Vehicle must have
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// 2. The class: promises to follow the Vehicle interface
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}

// 3. Create a Car
const myCar = new Car("Toyota", "Corolla", 2022);
console.log(`My car: ${myCar.year} ${myCar.make} ${myCar.model}`);

// 4. Call the start method
myCar.start();
