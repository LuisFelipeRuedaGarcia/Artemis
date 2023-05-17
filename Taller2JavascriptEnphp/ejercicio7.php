<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 7</title>
</head>
<body>
<!-- 7. Programa que pida el ingreso del nombre y precio de un artículo y la
cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador
en su factura. -->

<h2>Datos Del Artículo</h2>
<form action="ejercicio7.php" method="POST">

    <label>Nombre</label>
    <input type="text" name="nombre">
    <label>Precio</label>
    <input type="number" name="precio">
    <label>Cantidad</label>
    <input type="number" name="cantidad">
    <input type="submit" value="Enviar">
</form>
<h2>Factura</h2>
<?php 

$nombre = $_POST['nombre'];
$precio = $_POST['precio'];
$cantidad = $_POST['cantidad'];
$total = $precio * $cantidad;
echo "<p> artículo: {$nombre}, precio por unidad: {$precio}  cantidad comprada: {$cantidad} <br> Total a pagar: {$total} "
?>
</body>
</html>