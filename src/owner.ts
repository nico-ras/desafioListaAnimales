
export default class Owner {

    _name: string;
    _address: string;
    _phone: string;

    constructor (name: string, address: string, phone: string) {
        this._name = name;
        this._address = address;
        this._phone = phone;

    }

    datosPropietario() {
            return `El nombre del dueno es: ${this._name}. El domicilio es: ${this._address},
            y el numero telefonico de contacto: ${this._phone} `
    }
}