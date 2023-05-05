let tbodyClientes = document.querySelector("#tbodyClientes");
let form = document.querySelector("#NuevoCliente");
let url = "http://localhost:4000/clientes";

(async function getClientes(){
    let response = await fetch(url);
    let  result= await response.json();
    insertClientes(result);
})();

function insertClientes(clientes){
    clientes.forEach(cliente => {
    tbodyClientes.insertAdjacentHTML("beforeend", `<tr>
    <td>${cliente.nombre} ${cliente.apellido}</td>
    <td>
    teléfono: ${cliente.telefono}
    <br>
    correo: ${cliente.correo}
    </td>
    <td>${cliente.mascotas[0].nombre}</td>
    <td><button type="button" id=btn${cliente.id} data-cliente="${cliente.id}">Eliminar</button></td>
    </tr>`);
eventlistners(cliente.id);
});
console.log("cuando");
}

form.addEventListener("submit", (e)=>{
  formDataCliente(e);
})
function formDataCliente(e){
  e.preventDefault();
  let  dataform = Object.fromEntries(new FormData(e.target));
  let newCliente = {
    nombre: dataform.nombre,
    apellido: dataform.apellido,
    telefono: dataform.telefono,
    correo: dataform.correo,
    PropietarioId: dataform.PropietarioId,
    mascotas: [
      {
        id: dataform.id,
        nombre: dataform.nombreM,
        tipo: dataform.tipo,
        raza: dataform.raza,
        edad: dataform.edad,
        notas: dataform.notas
      }]
  }
  postCliente(newCliente);
}

async function postCliente(object){

  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(object),
      headers: {
        "Content-Type": "application/json"
      }
    })
  } catch (error) {
    console.log(error);
  } 
}


async function deleteCliente(id){
  try{
    await fetch(`${url}/${id}`,{
      method: "DELETE",
    })
  }
  catch(error){
    console.log(error);
  }
}

function eventlistners(id) {
  let button = document.querySelector(`#btn${id}`);
  console.log(button);
 button.addEventListener("click", idParaBorrar)

}

function idParaBorrar(e){
  let dataset = Number(e.target.dataset.cliente);
/*   let id  */
  console.log(dataset);
}

