"use strict";
function createCar(manufacturer, modelName, ...options) {
    const car = { manufacturer, modelName };
    for (const [key, value] of options) {
        car[key] = value;
    }
    return car;
}
;
const myCar = createCar("Toyota", "Camry");
console.log(myCar);
