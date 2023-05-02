document.addEventListener("DOMContentLoaded", ()=> {
    //1. FETCH API para consumir un JSON con un objeto "student.json"
    //getStudent();
    //2. FETCH API para consumir un JSON con un array de objetos
    //getStudents();
    //3. FETCH API para consumir un JSON desde un WEB API publica internet
    getStudentFromPublicAPI();

});
function getStudent(){
    fetch("../API/student.json")
        .then(res=>{ 
            return res.json()
        })
            .then(data=>{
                /* console.log(data) */
            showOneStudent(data)
        })
}

function showOneStudent({idUsuario, nombre, carrera, sexo, jornada}){
    const tbody = document.querySelector("tbody");
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${idUsuario}</td>
            <td>${nombre}</td>
            <td>${carrera}</td>
            <td>${sexo}</td>
            <td>${jornada}</td>
            `;
            tbody.appendChild(row);

}

function getStudents(){
    const url = "../API/students.json";
    fetch(url)
        .then(response=>response.json())
        .then(data=>{
            showAllStudents(data)
        });
}

function showAllStudents(students){
    const tbody = document.querySelector("tbody");
    students.forEach((student)=>{
        const {id_usuario, nombre, programa, sexo, jornada} = student
        const rows = document.createElement("tr");
        rows.innerHTML = `
            <td>${id_usuario}</td>
            <td>${nombre}</td>
            <td>${programa}</td>
            <td>${sexo}</td>
            <td>${jornada}</td>
            `;
            tbody.appendChild(rows);

    })
}

async function getStudentFromPublicAPI(){
    const url = "https://vermenmasterchief.tk/estudiantes.php";
/*  fetch(url)
        .then(response=>response.json())
        .then(data=>{
            showAllStudents(data.datos)
        }); */
    try {
        const response = await fetch(url);
    const data = await response.json();
    showAllStudents(data.datos)
    } catch (error) {
       console.log(error); 
    }

}

console.log(1);
try {
    callingNothing();
} catch (error) {
    console.log(error);
}
console.log(2);