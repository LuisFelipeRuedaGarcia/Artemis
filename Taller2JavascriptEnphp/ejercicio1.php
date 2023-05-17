<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 1</title>
</head>
<body>
<!--  1. Construir el algoritmo para un programa que ingrese tres
notas de un alumno, si el promedio es menor o igual a 3.9
mostrar un mensaje "Estudie“, de lo contrario un mensaje que
diga "becado"  -->
<form action="ejercicio1.php" method="POST">
<label>Nota 1</label>
<input type="number" name="Nota1">
<label>Nota 2</label>
<input type="number" name="Nota2">
<label>Nota 3</label>
<input type="number" name="Nota3">
<input type="submit" value="Enviar">
</form>
</body>
</html>

<?php
if ($_POST){

    $promedio = ($_POST["Nota1"] + $_POST["Nota2"] + $_POST["Nota3"])/3;
     if ($promedio > 3.9){
        echo "promedio = {$promedio}, pa' Sputnik! <br>";
     }
     else{
        echo "promedio = {$promedio}, ¡Estudie Vago!<br>";
     }


}

?>