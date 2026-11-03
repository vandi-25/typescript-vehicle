"use strict";
// 2. The class: promises to follow the Vehicle interface
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
// 3. Create a Car
const myCar = new Car("Toyota", "Corolla", 2022);
console.log(`My car: ${myCar.year} ${myCar.make} ${myCar.model}`);
// 4. Call the start method
myCar.start();
