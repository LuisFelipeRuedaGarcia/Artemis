//3. importamos la función Método HTTP -GET
import {getCampers} from "../apiConnection/API.js";
//1. function IIFE
(function(){

    document.addEventListener("DOMContentLoaded", showcampers);
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
            <td>
                <button class="btn btn-primary>x</button>
            </td>
            `;
            tbody.appendChild(rows);
        })
    }
})();