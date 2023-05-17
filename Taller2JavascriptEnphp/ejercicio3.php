
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 3</title>
</head>
<body>
<!--  3. Construir el algoritmo para determinar el voltaje de un
circuito a partir de la resistencia y la intensidad de corriente.  -->
<form action="ejercicio3.php" method="POST">
<label>Resistencia</label>
<input type="number" name="Resistencia">
<label>Intensidad de la corriente</label>
<input type="number" name="IntensidadCorriente">

<input type="submit" value="Enviar">
</form>
</body>
</html>

<?php
if ($_POST){

    $Voltaje = ($_POST["Resistencia"]*$_POST["IntensidadCorriente"]);
echo "El voltage es igual a {$Voltaje} voltios";
}

?>