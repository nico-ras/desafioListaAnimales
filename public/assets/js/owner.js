export default class Owner {
    constructor(name, address, phone) {
        this._name = name;
        this._address = address;
        this._phone = phone;
    }
    datosPropietario() {
        return `El nombre del dueno es: ${this._name}. El domicilio es: ${this._address},
            y el numero telefonico de contacto: ${this._phone} `;
    }
}
