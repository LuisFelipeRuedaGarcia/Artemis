import db from "./db.js"
console.log(db);
//9. creamos el tamplate
const template = document.createElement('template');
//14. agregamos nuevo div y clase camper-carf al div
//agreagamos slots en los parrafos
template.innerHTML = `
<style>
.camper-card {
      font-family: 'Arial', sans-serif;
      background: #f4f4f4;
      width: 500px;
      display: grid;
      grid-template-columns: 1fr 2fr;
      grid-gap: 10px;
      margin-bottom: 15px;
      border-bottom: darkorchid 5px solid;
  }

  .camper-card img {
      width: 100%;
  }

  .camper-card button {
      cursor: pointer;
      background: darkorchid;
      color: #fff;
      border: 0;
      border-radius: 5px;
      padding: 5px 10px;
  }
</style>
<div class="camper-card">
  <img />
  <div>
    <h3></h3>
    <div class="info">

      <p><slot/ name="especialidad"></p>
      <p><slot/ name="promedio"></p>
      <p><slot/ name="edad"></p>
      <p><slot/ name="nivelCampus"></p>
      <p><slot/ name="nivelIngles"></p>
      <p><slot/ name="especialidad"></p>
      <p><slot/ name="expertoTecnologia"></p>
      <p><slot/ name="detalle"></p>
      <p><slot/ name="direccion"></p>
      <p><slot/ name="phone"></p>
    </div>
    <button id="camper-info">Info</button>
  </div>
</div>
`;
//2. Creamos la clase equivalente CamperCard
class CamperCard extends HTMLElement{
    constructor(){
        //2.1 heredar la clase padre
        super();
        //7. creamos el Shadow DOM dentro del constructor
        this.attachShadow({mode: 'open'});
        //8. referenciar un template
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        
        //10. seleccionamos en nuestro Shadow DOM la etiqueta  h3 que acabamos de crear
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        //13. seleccionar la etiqueta img y asignamos valor al atributo foto
        this.shadowRoot.querySelector('img').src = this.getAttribute('photo')
        //2.2 agregamos el contenido 5. Actualizamos la referencia al atributo
        /* agregamos etiqueta y estilos*/ /* this.innerHTML = `
        <style>h3{color:orange}</style>
        <h3>${this.getAttribute('name')}</h3> 
        `;*/
    }
}

//3. Definimos el Custom Element
window.customElements.define('camper-card', CamperCard)


//my code

/*     

    */
for(let i = 0; i < db.campers.length; i++){
const allCards = document.querySelector('.campers-Cards')
allCards.insertAdjacentHTML("beforeend", `
<camper-card name="${db.campers[i].nombre}" photo="${db.campers[i].imagen}">
        <div slot="edad">
            edad: ${db.campers[i].edad}
        </div>
        <div slot="nivelCampus">
        nivelCampus: ${db.campers[i].nivelCampus}
        </div>
        <div slot="nivelIngles">
        nivelIngles: ${db.campers[i].nivelIngles}
        </div>
        <div slot="expertoTecnologia">
        expertoTecnologia: ${db.campers[i].expertoTecnologia}
        </div>
        <div slot="detalle">
        detalle: ${db.campers[i].detalle}
        </div>
        <div slot="direccion">
        direccion: ${db.campers[i].direccion}
        </div>
        <div slot="especialidad">
        especialidad: ${db.campers[i].especialidad}
        </div>
        <div slot="phone">
        phone: ${db.campers[i].celular}  
        </div>
    </camper-card>`)
}

