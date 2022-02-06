import Animal from "./animal.js";
export default class Pet extends Animal {
    constructor(name, address, phone, type, petName, disease) {
        super(name, address, phone, type);
        this._petName = petName;
        this._disease = disease;
    }
    get nombre() {
        return this._petName;
    }
    set nombre(newPetName) {
        this._petName = newPetName;
    }
    get enfermedad() {
        return this._disease;
    }
    set enfermedad(newDisease) {
        this._disease = newDisease;
    }
}
