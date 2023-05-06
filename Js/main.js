let tbodyClientes = document.querySelector("#tbodyClientes");
let tbodyJuguetes = document.querySelector("#tbodyJuguetes");
let tbodyVeterinarios = document.querySelector("#tbodyVeterinarios");
let tbodyServicios = document.querySelector("#tbodyServicios");
let tbodyfacturas = document.querySelector("#tbodyfacturas");

let selectServicios = document.querySelector("#ServiciosSelect")
let checkServicios = document.querySelector("#ServiciosCheck")

let formClientes = document.querySelector("#NuevoCliente");
let formJuguetes =document.querySelector("#NuevoJuguete");
let formVeterinarios =document.querySelector("#NuevoVeterinario");
let formServicios =document.querySelector("#NuevoServicio");
let formFacturas =document.querySelector("#NuevaFactura");
console.log(formFacturas);

let url= `http://localhost:4000`
let urlClientes = `${url}/clientes`;
let urlJuguetes=`${url}/juguetes`;
let urlVeterinarios=`${url}/veterinarios`;
let urlServicios =`${url}/servicios`;
let urlFacturas =`${url}/facturas`;

let servicios;
async function get(url, insert){
  try {
    let response = await fetch(url);
  let  result= await response.json();
  insert(result,url, );
  } catch (error) {
    console.log(error);
  }
}

get(urlClientes,  insertClientes);
get(urlServicios, insertServicios);
get(urlJuguetes, insertJuguetes);
get(urlVeterinarios, insertVeterinarios);
/* function componentCliente(){ 
  return`<tr>
<td>${cliente.nombre} ${cliente.apellido}</td>
<td>
teléfono: ${cliente.telefono}
<br>
correo: ${cliente.correo}
</td>
<td>${cliente.mascotas[0].nombre}</td>
<td><button type="button" id="btnCliente${cliente.id}" data-cliente="${cliente.id}">Eliminar</button></td>
</tr>`
} */
function insertClientes(clientes, url, ){
  clientes.forEach(cliente => {
    tbodyClientes.insertAdjacentHTML("beforeend", `<tr>
    <td>${cliente.nombre} ${cliente.apellido}</td>
    <td>
    teléfono: ${cliente.telefono}
    <br>
    correo: ${cliente.correo}
    </td>
    <td>${cliente.mascotas[0].nombre}</td>
    <td><button type="button" id="btnCliente${cliente.id}" data-cliente="${cliente.id}">Eliminar</button></td>
    </tr>`);
  eventlistners(cliente.id, "Cliente", url);
});
}

function insertServicios(Servicios, url){
  servicios=Servicios
  Servicios.forEach(Servicio => {
  tbodyServicios.insertAdjacentHTML("beforeend", `<tr>
  <td>${Servicio.nombre}</td>
  <td>
  ${Servicio.precio}
  </td>
  <td><img src="x"></td>
  <td><button type="button" id=btnServicio${Servicio.id} data-Servicio="${Servicio.id}">Eliminar</button></td>
  </tr>`);
eventlistners(Servicio.id, "Servicio", url);
selectServicios.insertAdjacentHTML("beforeend", `<option>
  ${Servicio.nombre} :$${Servicio.precio}
  </option>`);
checkServicios.insertAdjacentHTML("beforeend", `<input type="checkbox" name="${Servicio.nombre}" id="${Servicio.nombre}"><label for="${Servicio.nombre}">${Servicio.nombre} :$${Servicio.precio}</label>
`);
});
}

function insertJuguetes(Juguetes, url){
  Juguetes.forEach(Juguete => {
    tbodyJuguetes.insertAdjacentHTML("beforeend", `<tr>
    <td>${Juguete.nombre}</td>
    <td><img src="x"></td>
    <td>
    ${Juguete.tipo}
    </td>
    <td>
    ${Juguete.descripcion}
    </td>
    <td><button type="button" id=btnJuguete${Juguete.id} data-Juguete="${Juguete.id}">Eliminar</button></td>
    <td>
    ${Juguete.precio}
    </td>
    </tr>`);
  eventlistners(Juguete.id, "Juguete", url);
  });
}

function insertVeterinarios(Veterinarios, url){
  Veterinarios.forEach(Veterinario => {
    tbodyVeterinarios.insertAdjacentHTML("beforeend", `<tr>
    <td>${Veterinario.nombre}</td>

    <td>
    ${Veterinario.especialidad}
    </td>
    <td>
    ${Veterinario.telefono}
    </td>
    <td>
    ${Veterinario.correo}
    </td>
    <td><button type="button" id=btnVeterinario${Veterinario.id} data-Veterinario="${Veterinario.id}">Eliminar</button></td>
    </tr>`);
  eventlistners(Veterinario.id, "Veterinario", url);
  });
}

formClientes.addEventListener("submit", (e)=>{
  console.log(formClientes);
  formDataCliente(e);
})
formServicios.addEventListener("submit", (e)=>{
  formDataServicio(e);
})
formJuguetes.addEventListener("submit", (e)=>{
  formdataJuguete(e)
})
formVeterinarios.addEventListener("submit", (e)=>{
  formDataVeterinario(e)
})

formFacturas.addEventListener("submit", (e)=>{
  formDataFacturas(e)
})
function formDataCliente(e){
  e.preventDefault();
  let  dataform = Object.fromEntries(new FormData(e.target));
  let newModeloCliente = {
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
  post(newModeloCliente, urlClientes);
}

function formDataServicio(e){
  e.preventDefault();
  let  dataform = Object.fromEntries(new FormData(e.target));
  let newModeloServicio = {
  
    nombre: dataform.nombre,
    precio: dataform.precio,
    img:dataform.img
  }

  post(newModeloServicio, urlServicios);
}

function formdataJuguete(e){
  e.preventDefault();
  let  dataform = Object.fromEntries(new FormData(e.target));
  let newModelJuguete = {
  
    nombre: dataform.nombre,
    img:dataform.img,
    tipo:dataform.tipo,
    descripcion:dataform.descripcion,
    precio: dataform.precio
  }

  post(newModelJuguete, urlJuguetes);
}

function formDataVeterinario(e){
  e.preventDefault();
  let  dataform = Object.fromEntries(new FormData(e.target));
  let newModelVeterinario = {
    nombre: dataform.nombre,
    especialidad:dataform.especialidad,
    telefono:dataform.telefono,
    correo:dataform.correo,
  }

  post(newModelVeterinario, urlVeterinarios);
}
function formDataFacturas(e){
  e.preventDefault();
  let  dataform = Object.fromEntries(new FormData(e.target));
  console.log(dataform);
  let selectedServicios = Object.entries(dataform).filter(([key, value])=> key !== "serviciosSelect" && value === "on").map(([key])=>key)
  console.log(selectedServicios)

}

async function post(object, url){
  try {
    console.log(url);
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

function eventlistners(id, tipo, url){
  let button = document.querySelector(`#btn${tipo}${id}`);
 button.addEventListener("click", function(/* e */){
  deleteF(/* e, */ id, url)
 })
}

async function deleteF(/* e, */ id, url){
  /* let dataset = Number(e.target.dataset.cliente);
  console.log(dataset); */
  try {
    await fetch(`${url}/${id}`,{
      method:"DELETE"
    })
  } catch (error) {
    console.log(error);
  }}