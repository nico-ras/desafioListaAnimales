import Owner from './owner.js'

export default class Animal extends Owner {
    
    _type: string;

    constructor(name: string, address: string, phone: string, type: string){
        super(name, address, phone);
        this._type = type;
    }

    get tipoAnimal() {
        return `El tipo de animal es un: ${this._type}`;
    }
}