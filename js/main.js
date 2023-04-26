let count = 0
const tbody =document.querySelector("tbody")
const url = "https://vermenmasterchief.tk/estudiantes.php"
const url2 = `https://vermenmasterchief.tk/detalleEstudiante.php?api_key=Metallica&id_usuario=`
async function asincronica(){
/*     fetch(url) */
/*     .then(response => response.json()) */
const response = await fetch(url)
/*     .then(result => insertTable(result.datos)) */
const result = await response.json()
    .catch(error => console.log(error))
    insertTable(result.datos)
}

function insertTable(estudiantes){
    count = -1
    for(let i = 0; i < estudiantes.length; i++) {
        count++;

        
        tbody.insertAdjacentHTML("beforeend", `
    <tr>
        <th>${estudiantes[i].cedula}</th>
        <th>${estudiantes[i].nombre}</th>
        <th>${estudiantes[i].programa}</th>
        <th>${estudiantes[i].sexo}</th>
        <th>${estudiantes[i].jornada}</th>
        <th><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#miModal">Details</button></th>
    </tr>
        <div class="modal fade" id="miModal" tabindex="-1" aria-hidden="true" aria-labelledby="modalTitle">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-tittle" id="modalTitle">Information </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary"data-bs-dismiss="modal"> Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                `)
    };
}

asincronica();