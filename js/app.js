//3. importamos la función Método HTTP -GET
import {getCampers, deleteCamper} from "../apiConnection/API.js";
//1. function IIFE
(function(){
let lista = document.querySelector(".lista");
    document.addEventListener("DOMContentLoaded", showcampers);
lista.addEventListener("click", confirmDelete)

    async function showcampers(){
        /* console.log("hi"); */
        let campers = await getCampers();
        console.log(campers);
        let tbody = document.querySelector("#tbody");
        campers.forEach((camper)=>{
            let {imagen,
                nombre,
                edad,
                promedio,
                nivelCAmpus,
                nivelIngles,
                especialidad,
                expertoTecnologia,
                detalle,
                direccion,
                celular,
                id} = camper
            let rows = document.createElement("tr")
            rows.innerHTML= `
            <th scope="row">${id}</th>
            <td><img class="cuenta" src="${imagen}"></td>
            <td>
                ${nombre}
            </td>
            <td>
                ${promedio}
            </td>
            <td>
                ${especialidad}
            </td>
            <td>
                ${expertoTecnologia}
            </td>
            <td><button type="button" class="btn btn-warning">Details</button></td>
            <td><button type="button" data-camper="${id}" class="btn btn-danger delete">Delete</button></td>
            `;
            tbody.appendChild(rows);
        })
    }
function confirmDelete(e){
    if(e.target.classList.contains("delete")){
        let camperID = Number(e.target.dataset.camper);
        let confirmar = confirm("¿Deseas Eliminar al caper pata que se quede en casa?");
        if (confirmar){
            deleteCamper(camperID);
        }
    }

}

})();