const url = "http://localhost:4000/campers"

// Obtener todos los Campers de la API (GET) Método HTTP

export const getCampers = async () => {
    try {
        const result = await fetch(url)
        const campers = await result.json();
        return campers
    }
    catch (error) {
        console.log(error)
    }
}

//insertar nuevo camper en REST API (HTTP methods: GET, POST)
export let newCamper = async (camper) => {
    console.log(camper);
    try{
    let result = await fetch(url,{method: "POST",
    body: JSON.stringify(camper),
    headers:{
        "Content-Type": "application/json"
    }
})
window.location.href ="index.html"
    }catch (error) {
        console.log(error)
    }
}