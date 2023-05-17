<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 6</title>
</head>
<body>
<!-- 6. Construir el algoritmo en Javascript para un programa
para cualquier cantidad de estudiantes que lea el nombre,
el sexo y la nota definitiva y halle al estudiante con la Mayor
nota y al estudiante con la menor nota y cuantos eran
hombres y cuantos mujeres. -->
 <h2>Ejercicio 6</h2>
 <form action="ejercicio6.php" method="POST">
    <label>Nombre</label>
    <input type="text" name="nombre">

    <label >Género</label>
    <select name="genero">
        <option value="elegir">elegir</option>
        <option value="masculino">masculino</option>
        <option value="femeinino">femeinino</option>
        <option value="otro">otro</option>
    </select>

    <label>Nota</label>
    <input type="text" name="nota">

    <input type="submit" value="agregar">

 </form>
 <h2>Resultados</h2>
 <?php
 session_start();
 if (!isset($_SESSION['estudiantes']))
 {
    $_SESSION['estudiantes'] = [];
    $_SESSION['estudianteMayorNota'] = null;
    $_SESSION['estudianteMenorNota'] = null;
    $_SESSION['cantidadHombres'] = 0;
    $_SESSION['cantidadMujeres'] = 0;
 }
 function agregarEstudiante($nombre, $genero, $nota)
 {
    $estudiante = [
        'nombre' => $nombre,
        'genero' => $genero,
        'nota' => $nota
    ];
    $_SESSION['estudiantes'][]=$estudiante;

    if ($_SESSION['estudianteMayorNota'] == null || $nota > $_SESSION['estudianteMayorNota']['nota']){
        $_SESSION['estudianteMayorNota'] = $estudiante;
    }
    if ($_SESSION['estudianteMenorNota'] == null || $nota < $_SESSION['estudianteMenorNota']['nota']){
        $_SESSION['estudianteMenorNota'] = $estudiante;
    }

    if ($genero === 'masculino'){
        $_SESSION['cantidadHombres']++;
    }
    else if ($genero === 'femenino'){
        $_SESSION['cantidadMujeres']++;
    }
 }

 if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    $nombre = $_POST['nombre'];
    $genero = $_POST['genero'];
    $nota = $_POST['nota'];
    agregarEstudiante($nombre, $genero, $nota);
 }
 if ($_SESSION['estudianteMayorNota'] !== null){
    echo "<p>Estudiante con mayor nota: ". $_SESSION['estudianteMayorNota']['nombre']. " con una nota de ". $_SESSION['estudianteMayorNota']['nota'] . " </p>";
    echo "<p>Estudiante con Menor nota: ". $_SESSION['estudianteMenorNota']['nombre']. " con una nota de ". $_SESSION['estudianteMenorNota']['nota'] . " </p>";

    echo "<p> Cantidad de hombres: ". $_SESSION['cantidadHombres']. " </p>";
    echo "<p> Cantidad de mujeres: ". $_SESSION['cantidadMujeres']. " </p>";
 }
 ?> 
</body>
</html>