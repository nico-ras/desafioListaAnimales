import Owner from './owner.js';
export default class Animal extends Owner {
    constructor(name, address, phone, type) {
        super(name, address, phone);
        this._type = type;
    }
    get tipoAnimal() {
        return `El tipo de animal es un: ${this._type}`;
    }
}
