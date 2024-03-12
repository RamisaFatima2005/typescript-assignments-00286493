interface Car{
    manufacturer:string;
    modelName:string;
    [key:string]:string | number | boolean;
}
function createCar(manufacturer:string,
    modelName:string, ...options: Array <[string,string | number | boolean]>):Car {
        const car : Car= {manufacturer,modelName};
    
    for(const[key,value] of options){
        car[key] = value;
    }
    return car
};
const myCar = createCar("Toyota", "Camry");
console.log(myCar);