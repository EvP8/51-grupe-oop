/*
OOP - object oriented programming
- turi savybes
- turi funkcionaluma, kuris manipuliuoja savo savybemis
*/

import { Cat } from "./js/Cat.js";
import { Dog } from "./js/Dog.js";
import { Car } from "./js/Car.js";

const reksas = new Dog('Rex', 'black');
console.log(reksas.takeBones(1.5));

console.log(reksas.eatBone());
console.log(reksas.bonesLeft());

console.log(reksas.eatBone());
console.log(reksas.bonesLeft());

console.log(reksas.eatBone());
console.log(reksas.bonesLeft());



const rainis = new Cat('Rainis', 'grey');
console.log(rainis);
console.log(rainis.hi());
console.log(rainis.intro());

console.log(rainis.catchFish());
console.log(rainis.catchFish(4));
console.log(rainis.catchFish(true));
console.log(rainis.catchFish(undefined));




// ----------------------------------------------

/*
CAR
- brandas
- modelis
- kuro bako talpa
- kuro sanaudos 100km

- ijungtiVarykli()
- isjungtiVarykli()
- vaziuoti(atstumas)
- uzpiltiKuro(litrai)
- kiekLikoKuroBake()
- kokiAtstumaGaliDarNuvaziuoti()
- arGaliPrivaziuotiDegaline(atstumas km)
*/

// ----------------------------------------------

const  bmw  = new Car('BMW', 'X5', 80, 10);
const  audi = new Car('Audi', 'Q7', 75, 12);
const  fiat = new Car('Fiat', '500', 40, 5);


console.log(bmw.turnOnEngine());
console.log(audi.turnOnEngine());
console.log(fiat.turnOnEngine());
console.log('----------------------------');
console.log(bmw.turnOffEngine());
console.log(audi.turnOffEngine());
console.log(fiat.turnOffEngine());
console.log('----------------------------');
console.log(bmw.turnOnEngine());
console.log(audi.turnOffEngine());
console.log(fiat.turnOnEngine());
console.log('----------------------------');
console.log(bmw.drive(50)); 
console.log(audi.drive(25));
console.log(fiat.drive(45));
console.log('----------------------------'); 
console.log(bmw.refuel(20));
console.log(audi.refuel(40));
console.log(fiat.refuel(20));
console.log('----------------------------'); 
console.log(bmw.checkFuelInTank());
console.log(audi.checkFuelInTank());
console.log(fiat.checkFuelInTank());
console.log('----------------------------'); 
console.log(bmw.calculateDistanceLeft());
console.log(audi.calculateDistanceLeft());
console.log(fiat.calculateDistanceLeft());
console.log('----------------------------'); 
console.log(bmw.canReachGasStation(250));
console.log(audi.canReachGasStation(100));
console.log(fiat.canReachGasStation(150));







