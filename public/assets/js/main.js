import Pet from "./pet.js";
let formulario = document.querySelector('form');
let addPet = (event) => {
    event.preventDefault();
    let owner = document.getElementById('propietario').value;
    let phoneNum = document.getElementById('telefono').value;
    let ownerAddress = document.getElementById('direccion').value;
    let petName = document.getElementById('nombreMascota').value;
    let petType = document.getElementById('tipo').value;
    let petDisease = document.getElementById('enfermedad').value;
    let clean = () => {
        document.getElementById('propietario').value = '';
        document.getElementById('telefono').value = '';
        document.getElementById('direccion').value = '';
        document.getElementById('nombreMascota').value = '';
        document.getElementById('tipo').value = '';
        document.getElementById('enfermedad').value = '';
    };
    let listaDiv = document.getElementById('resultado');
    let lista = listaDiv.firstElementChild;
    let dataArr = [owner, phoneNum, ownerAddress, petName, petType, petDisease];
    let nameArr = ['el nombre del dueno', ' el numero de telefono', 'la direccion', 'el nombre de la mascota',
        'el tipo de mascota', 'el motivo de la consulta'];
    let allData = true;
    for (let i = 0; i < dataArr.length; i++) {
        if (dataArr[i] === "") {
            alert(`Debes ingresar ${nameArr[i]}`);
            allData = false;
        }
    }
    if (allData == true) {
        let patientData;
        switch (petType) {
            case "perro":
                let perro = new Pet(owner, ownerAddress, phoneNum, petType, petName, petDisease);
                patientData = perro;
                break;
            case "gato":
                let gato = new Pet(owner, ownerAddress, phoneNum, petType, petName, petDisease);
                patientData = gato;
                break;
            case "conejo":
                let conejo = new Pet(owner, ownerAddress, phoneNum, petType, petName, petDisease);
                patientData = conejo;
                break;
        }
        lista.innerHTML = `<li>${patientData.datosPropietario()}</li>
                       <li>${patientData.tipoAnimal}, mientras que el nombre de la mascota es: ${patientData.nombre}
                       y la enfermedad es: ${patientData.enfermedad}</li>`;
        clean();
    }
};
formulario.addEventListener('submit', addPet);
