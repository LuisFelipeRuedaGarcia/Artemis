<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 9</title>
</head>
<body>
    <h2>Ejercicio 9</h2>
<!-- N atletas han pasado a finales en salto triple en los juegos
olímpicos femenino de 2022. Diseñe un programa que pida por
teclado los nombres de cada atleta finalista y a su vez, sus
marcas del salto en metros. Informar el nombre de la atleta
campeona que se quede con la medalla de oro y si rompió
récord, reportar el pago que será de 500 millones. El récord
esta en 15,50 metros. -->
<form action="ejercicio9.php" method="post">
    <label>Nombre</label>
    <input type="text" name="nombre">
    <label>Marca de Salto en metros</label>
    <input type="number" name="marca">
    <input type="submit">
</form>
<h2>Resultados</h2>
<?php
session_start();
$record = 15.5;

if (!isset($_SESSION['atletas']))
{
    $_SESSION['cantidadAtletas']= null;
    $_SESSION['atletas'] = [];
    $_SESSION['campeona'] = null;
    $_SESSION['AtletasRompieronElRecord']= [];
}
function agregarAtleta($nombre, $marca, $record){
    $atleta = [
        'nombre' => $nombre,
        'marca' => $marca,
    ];
    $_SESSION['atletas'][]= $atleta;

    if ($atleta['marca']> $record){
        echo $record;
        echo "!!".$record . $atleta['marca'];
        $_SESSION['AtletasRompieronElRecord'][]= $atleta;
    };
    if($_SESSION['campeona'] == null || $marca> $_SESSION['campeona']['marca']){
        $_SESSION['campeona'] = $atleta;
    }
    $_SESSION['cantidadAtletas']++;
}

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $nombre = $_POST['nombre'];
    $marca = $_POST['marca'];
    agregarAtleta($nombre,$marca, $record);
}

if($_SESSION['campeona'] !== null){
    echo "<p>ha(n) participado ". $_SESSION['cantidadAtletas']. " atleta(s), La atleta campeona que se lleva la medalla de oro es " . $_SESSION['campeona']['nombre']. " con una marca de " . $_SESSION['campeona']['marca'] . "</p>";
    if(count($_SESSION['AtletasRompieronElRecord']) >0){
        echo "<p> el record fue roto por la(s) atleta(s)";
        for ($i=0; $i < count($_SESSION['AtletasRompieronElRecord']); $i++) { 
            echo $_SESSION['AtletasRompieronElRecord'][$i]['nombre']. " , ";
        }
        echo "</p>";
    }

}

?>
</body>
</html>