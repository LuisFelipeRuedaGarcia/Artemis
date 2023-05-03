import {newCamper} from "../apiConnection/API.js"
let form = document.querySelector("#formulario");
form.addEventListener("submit", validateCamper);

function validateCamper(e) {

    e.preventDefault();
    let nombre = document.querySelector("#nombre").value;
    let promedio = document.querySelector("#promedio").value;
    let edad = document.querySelector("#edad").value;
    let nivelIngles = document.querySelector("#nivelIngles").value;
    let especialidad = document.querySelector("#especialidad").value
    let nivelCampus = document.querySelector("#nivelCampus").value;
    let expertoTecnologia = document.querySelector("#expertoTecnologia").value;

//literal objects enhancement
const camper = {
    imagen:"../img/camper-anonimo1.jpg",
    nombre,
    promedio,
    edad,
    nivelIngles,
    especialidad,
    nivelCampus,
    expertoTecnologia
}

console.log("funcionado");
if (validate(camper)){
    alert("todos los campos son obligatorios");
    console.log("funcionado2");
    return;

}
newCamper(camper);
}

function validate(obj){
    return !Object.values(obj).every(element => element!="")
}