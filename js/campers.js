let tbody = document.querySelector("#tbody");
async function fetchCampers(){
    let campers
    try{
    const url = "../DB/db.json"
    const response = await fetch(url);
    let result = await response.json();
    campers = result.campers;
    console.log(campers)}

 catch(err){
    console.log(err);
}
llenartabla(campers);
}
fetchCampers();

function llenartabla(campers){ 

console.log(campers);
    for (let i = 0; i < campers.length; i++) {
        tbody.insertAdjacentHTML("beforeend", `
<tr>
    <td>
        ${campers[i].id}
    </td>
    <td>
        <img class="cuenta" src ="${campers[i].imagen}">
    </td>
    <td>
        ${campers[i].nombre}
    </td>
    <td>
        ${campers[i].promedio}
    </td>
    <td>
        ${campers[i].especialidad}
    </td>
    <td>
        ${campers[i].expertoTecnologia}
    </td>
    <td>
        ${campers[i].detalle}
    </td>
</tr>`)
}
    };
