export class Pet {
    constructor(name, furColor) {
        this.name = name;
        this.furColor = furColor;
        this.legsCount = 4;
        this.eyesCount = 2;
        this.sound = 'BARK MEOW';
    }

    hi() {
        return `Sveiki, mano vardas yra ${this.name}!`;
    }

    intro() {
        return `Sveiki, mano vardas yra ${this.name}. Mano kailio spalva yra ${this.furColor}. Turiu ${this.legsCount} kojas ir ${this.eyesCount} akis. Jei reikia, moku pasakyti ${this.sound}!`;
    }
}
