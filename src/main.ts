import Owner from "./owner.js";  
import Animal from "./animal.js";
import Pet from "./pet.js";

let formulario: HTMLElement = document.querySelector('form');

let addPet = (event: MouseEvent) => {

    event.preventDefault();
    
    let owner = (document.getElementById('propietario')as HTMLInputElement).value; 
    let phoneNum = (document.getElementById('telefono')as HTMLInputElement).value;
    let ownerAddress = (document.getElementById('direccion')as HTMLInputElement).value;
    let petName = (document.getElementById('nombreMascota')as HTMLInputElement).value;
    let petType = (document.getElementById('tipo')as HTMLInputElement).value;
    let petDisease = (document.getElementById('enfermedad')as HTMLInputElement).value;
    
    let clean = () => {
        (document.getElementById('propietario')as HTMLInputElement).value = '';
    (document.getElementById('telefono')as HTMLInputElement).value = '';
    (document.getElementById('direccion')as HTMLInputElement).value = '';
    (document.getElementById('nombreMascota')as HTMLInputElement).value = '';
    (document.getElementById('tipo')as HTMLInputElement).value = '';
    (document.getElementById('enfermedad')as HTMLInputElement).value = '';
    } 
    
    

    let listaDiv: HTMLElement = document.getElementById('resultado');

    let lista = listaDiv.firstElementChild;

    

    let dataArr: Array<string> = [owner, phoneNum, ownerAddress, petName, petType, petDisease]
    let nameArr: Array<string> = ['el nombre del dueno', ' el numero de telefono', 'la direccion', 'el nombre de la mascota',
                                  'el tipo de mascota', 'el motivo de la consulta'];

    let allData: boolean = true;

    for (let i = 0; i < dataArr.length; i++) {
        if (dataArr[i] === "") {
            alert(`Debes ingresar ${nameArr[i]}`)
            allData = false;
        }
    }

    


    if (allData == true) {

        let patientData: Pet 

        switch (petType) {

          case "perro":

          let perro: Pet = new Pet(owner, ownerAddress, phoneNum, petType, petName, petDisease); 
     
          patientData = perro;

          break;

          case "gato":

            let gato: Pet = new Pet(owner, ownerAddress, phoneNum, petType, petName, petDisease); 
     
            patientData = gato;

            break;

          case "conejo":
              
            let conejo: Pet = new Pet(owner, ownerAddress, phoneNum, petType, petName, petDisease); 
     
            patientData = conejo;

            break;

        }    

        lista.innerHTML = `<li>${patientData.datosPropietario()}</li>
                       <li>${patientData.tipoAnimal}, mientras que el nombre de la mascota es: ${patientData.nombre}
                       y la enfermedad es: ${patientData.enfermedad}</li>`;

        clean();               


    }

};

formulario.addEventListener('submit', addPet)