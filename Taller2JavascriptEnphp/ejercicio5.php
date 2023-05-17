<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 5</title>
</head>
<body>
<!--  5. Construir el algoritmo que lea por teclado dos números,
si el primero es mayor al segundo informar su suma y
diferencia, en caso contrario, informar el producto y la
división del primero respecto al segundo  -->
<form action="ejercicio5.php" method="POST">
<label>Numero1</label>
<input type="text" name="numero1">

<label>Numero2</label>
<input type="text" name="numero2">

<input type="submit" value="Enviar">
</form>
</body>
</html>

<?php
if ($_POST){

    $numero1 = $_POST["numero1"];
    
    $numero2 = $_POST["numero2"];

    if ($numero1 > $numero2)
    {
        $suma = ($numero1 + $numero2);
        $resta = ($numero1 - $numero2);
        echo "{$numero1} es mayor que {$numero2}, su suma es {$suma} y su diferencia {$resta}";
    }
    else if ($numero2 >= $numero1)
    {
        $multiplicacion = ($numero1 * $numero2);
        $division = ($numero1 / $numero2);
        echo "{$numero1} no es mayor que {$numero2}, su multiplicación es {$multiplicacion} y su división {$division}";
    }
    else {
        echo "no hay un mayor";
    }
}

?>