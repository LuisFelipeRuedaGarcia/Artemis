divCards = document.querySelector("#Cards")
const url = "https://api.spacexdata.com/v3/launches"
function principal(){
fetch(url)
    .then(response => response.json())
    .then(result => insertCards(result))
    .catch(error => console.log(error))
}

function insertCards(launches){
    let count = -1
    for (let i = 0; i < 12; i++) {
        count++;
        divCards.insertAdjacentHTML("beforeend",`
        <div class="card">
            <img class="card-img-top" src="${launches[i].links.mission_patch}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-text"><span>${launches[i].mission_name}</span></h5>
                <p class="card-text"><span>${launches[i].launch_year}</span></p>
                <div class="card-footer">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#miModal${count}">Details</button>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#miModal${count}v">video</button>
                </div>
                
            </div>
        </div>
        <div class="modal fade" id="miModal${count}" tabindex="-1" aria-hidden="true" aria-labelledby="modalTitle">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-tittle" id="modalTitle">Information ${launches[i].mission_name}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item">mission Name: <span>${launches[i].mission_name}</span></li>
                    <li class="list-group-item">Rocket Name: <span>${launches[i].rocket.rocket_name}</span></li>
                    <li class="list-group-item">Rocket Type: <span>${launches[i].rocket.rocket_type}</span></li>
                    <li class="list-group-item">launch Success:  <span>${launches[i].launch_success}</span></li>
                  </ul>
                  <div class="modal-footer">
                  <button type="button" class="btn btn-secondary"data-bs-dismiss="modal"> Cerrar</button>
                  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#miModal${count}v">video</button>
              </div>
                    </div>

                </div>
            </div>
        </div>
        
        <div class="modal fade" id="miModal${count}v" tabindex="-1" aria-hidden="true" aria-labelledby="modalTitle">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-tittle" id="modalTitle">Video ${launches[i].mission_name}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <iframe width="100%" height="270" src="https://www.youtube.com/embed/${launches[i].links.youtube_id}" allowfullscreen></iframe>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary"data-bs-dismiss="modal"> Cerrar</button>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#miModal${count}">Details</button>
                    </div>
                </div>
            </div>
        </div>
        `)

    };
}
principal();