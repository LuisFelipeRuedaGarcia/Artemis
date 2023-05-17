
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 2</title>
</head>
<body>
<!--  2. Dado un número indicar si es par o impar y si es mayor de 10.  -->
<form action="ejercicio2.php" method="POST">
    <label>Ingresa el Numero</label>
    <input type="number" name="Numero">
    <input type="submit" value="Enviar">
</form>
</body>
</html>

<?php
if ($_POST){

    $numero = $_POST["Numero"];
     if ($numero <= 10 && $numero%2 == 0){
        echo "es par y menor o igual a 10 <br>";
     }
     else if ($numero > 10 && $numero%2 == 0){
        echo "es par y mayor que 10 <br>";
     }
     else if ($numero <= 10 && $numero%2 !== 0){
        echo "es impar y menor o igual a 10 <br>";
    }
    else if ($numero > 10 && $numero%2 !== 0){
        echo "es impar y mayor que 10 <br>";
    }
    else {
        echo "error";
    }
}
?>