let count = 0
const tbody =document.querySelector("tbody")
const url = "https://vermenmasterchief.tk/estudiantes.php"

async function asincronica(){
/*     fetch(url) */
/*     .then(response => response.json()) */
const response = await fetch(url)
/*     .then(result => insertTable(result.datos)) */
const result = await response.json()
    .catch(error => console.log(error))
    insertTable(result.datos)
}

async function insertTable(estudiantes){
    count = -1
    for(let i = 0; i < estudiantes.length; i++) {
        let id= estudiantes[i].id_usuario;
        let datosModal=[]
        count++;
        let url2 = `https://vermenmasterchief.tk/detalleEstudiante.php?api_key=Metallica&id_usuario=${id}`
        const response = await fetch(url2)
        const result = await response.json()
        datosModal=result.datos;
        let aprobado
        let clase
        if(Number(datosModal[0].promedio)<3)
        {
            aprobado="Reprobado"
            clase="badge bg-danger";
        }
        else{

            aprobado="Aprobado"
            clase="badge bg-success"
        }
        tbody.insertAdjacentHTML("beforeend", `
    <tr>
        <th>${estudiantes[i].cedula}</th>
        <th>${estudiantes[i].nombre}</th>
        <th>${estudiantes[i].programa}</th>
        <th>${estudiantes[i].sexo}</th>
        <th>${estudiantes[i].jornada}</th>
        <th><button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#miModal${i}">Details</button></th>
    </tr>
        <div class="modal fade " id="miModal${i}" tabindex="-1" aria-hidden="true" aria-labelledby="modalTitle">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-tittle" id="modalTitle">Information </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img src="${datosModal[0].foto}">
                        <div class="modal-body-text">
                            <h4>${estudiantes[i].nombre}</h4>
                            <h5>promedio: ${datosModal[0].promedio}</h5>
                            sisben: ${datosModal[0].sisben}
                            <h3><span class="${clase}">${aprobado}</span></h3>
                            
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary"data-bs-dismiss="modal"> Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
                `)
    };
}

asincronica();