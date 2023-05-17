<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 4</title>
</head>
<body>
<!--  4. Construir el algoritmo que solicite el nombre y edad de 3
personas y determine el nombre de la persona con mayor edad.  -->
<form action="ejercicio4.php" method="POST">
<label>Nombre1</label>
<input type="text" name="Nombre1">
<label>Edad1</label>
<input type="number" name="Edad1">
<label>Nombre2</label>
<input type="text" name="Nombre2">
<label>Edad2</label>
<input type="number" name="Edad2">
<label>Nombre3</label>
<input type="text" name="Nombre3">
<label>Edad3</label>
<input type="number" name="Edad3">
<input type="submit" value="Enviar">
</form>
</body>
</html>

<?php
if ($_POST){

    $Nombre1 = $_POST["Nombre1"];
    $Edad1 = $_POST["Edad1"] ;
    $Nombre2 = $_POST["Nombre2"];
    $Edad2 = $_POST["Edad2"] ;
    $Nombre3 = $_POST["Nombre3"];
    $Edad3 = $_POST["Edad3"] ;
    if ($Edad1 > $Edad2 && $Edad1 > $Edad3)
    {
        echo "{$Nombre1} es el mayor";
    }
    else if ($Edad2 > $Edad1 && $Edad2 > $Edad3)
    {
        echo "{$Nombre2} es el mayor";
    }
    else if ($Edad3 > $Edad1 && $Edad3 > $Edad2)
    {
        echo "{$Nombre3} es el mayor";
    }
    else {
        echo "no hay un mayor";
    }
}

?>