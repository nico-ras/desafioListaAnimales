import Animal from "./animal.js";

export default class Pet extends Animal {

    _petName: string;
    _disease: string;
    
    constructor(name: string, address: string, phone: string, type: string, petName: string, disease: string) {
        super (name, address, phone, type);
        this._petName = petName;
        this._disease = disease;
    }

    get nombre() {
        return this._petName;
    }

    set nombre(newPetName: string) {
        this._petName = newPetName;
    }

    get enfermedad () {
        return this._disease;
    }

    set enfermedad (newDisease: string) {
        this._disease = newDisease
    }

}    