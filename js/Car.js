export class Car {
    constructor(brand, model, fuelTankCapacity, fuelConsumption) {
        this.brand = brand;
        this.model = model;
        this.fuelTankCapacity = fuelTankCapacity;
        this.fuelConsumption = fuelConsumption;
        this.fuelInTank = 0;
        this.engineOn = false;
    }

    turnOnEngine() {
        if (!this.engineOn) {
            this.engineOn = true;
            return `${this.brand} ${this.model} variklis įjungtas.`; 
        } else {
            return `${this.brand} ${this.model} variklis jau įjungtas.`;
        }
    }

    turnOffEngine() {
        if (this.engineOn) {
            this.engineOn = false;
            return `${this.brand} ${this.model} variklis išjungtas.`;
        } else {
            return `${this.brand} ${this.model} variklis jau išjungtas.`;
        }
    }

    drive(distance) {
        if (!this.engineOn) {
            return `Negalima važiuoti, nes ${this.brand} ${this.model} variklis išjungtas.`;
        }

        const neededFuel = (distance / 100) * this.fuelConsumption;
        if (this.fuelInTank >= neededFuel) {
            this.fuelInTank -= neededFuel;
            return `${this.brand} ${this.model} nuvažiavo ${distance} km.`;
        } else {
            return `${this.brand} ${this.model} neturi pakankamai kuro nuvažiuoti ${distance} km.`;
        }
    }

    refuel(fuelAmount) {
        if (typeof fuelAmount !== 'number' || fuelAmount <= 0 || !isFinite(fuelAmount)) {
            return 'Degalų kiekis turi būti teisingas skaičius.';
        }

        if (this.fuelInTank + fuelAmount > this.fuelTankCapacity) {
            return `Per daug kuro. Kuro bako talpa ${this.fuelTankCapacity} litrų.`;
        }

        this.fuelInTank += fuelAmount; 
        return `Užpilta ${fuelAmount} litrų kuro. Dabar bake yra ${this.fuelInTank} litrų.`;
    }

    checkFuelInTank() {
        return `${this.brand} ${this.model} bake liko ${this.fuelInTank} litrų kuro.`;
    }

    calculateDistanceLeft() {
        const possibleDistance = (this.fuelInTank / this.fuelConsumption) * 100;
        return `${this.brand} ${this.model} gali nuvažiuoti dar ${possibleDistance.toFixed(2)} km.`;
    }

    canReachGasStation(distanceToStation) {
        const possibleDistance = (this.fuelInTank / this.fuelConsumption) * 100;
        if (possibleDistance >= distanceToStation) {
            return `${this.brand} ${this.model} gali nuvažiuoti iki degalinės, kuri yra ${distanceToStation} km atstumu.`;
        } else {
            return `${this.brand} ${this.model} negali pasiekti degalinės, kuri yra ${distanceToStation} km atstumu.`;
        }
    }
}
