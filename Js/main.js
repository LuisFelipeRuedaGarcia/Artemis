let tbodyClientes = document.querySelector("#tbodyClientes");
let form = document.querySelector("#NuevoCliente");
console.log(tbodyClientes);
(async function getClientes(){
    let url = "http://localhost:4002/clientes";
    let response = await fetch(url);
    let  result= await response.json();
    insertClientes(result);
})();

/* {
    "nombre": "Juan",
    "apellido": "Pérez",
    "telefono": "555-1234",
    "correo": "juan@example.com",
    "PropietarioId": 1,
    "mascotas": [
      {
        "id": 1,
        "nombre": "Luna",
        "tipo": "Perro",
        "raza": "Labrador",
        "edad": 3,
        "notas": "Luna es una perra muy juguetona y le encanta correr en el parque."
      }
    ]
  }, */

function insertClientes(clientes){
    clientes.forEach(cliente => {
    tbodyClientes.insertAdjacentHTML("beforeend", `<tr>
    <td>${cliente.nombre, cliente.apellido}</td>
    <td>
    teléfono: ${cliente.telefono}
    <br>
    correo: ${cliente.correo}
    </td>
    <td>${cliente.mascotas[0].nombre}</td>
    <td><button type="button" id=${cliente.PropietarioId} database-cliente="${cliente.PropietarioId}>Eliminar</button></td>
    </tr>`);
});
}

form.addEventListener("submit", (e)=>{
    validateCliente(e);
})
function validateCliente(e){
    e.preventDefault();

}