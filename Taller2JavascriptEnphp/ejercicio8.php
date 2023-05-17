<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 8</title>
</head>
<body>
<!-- 8. Programa que Ingrese por teclado:
a. el valor del lado de un cuadrado para mostrar por pantalla el
perímetro del mismo
b. la base y la altura de un rectángulo para mostrar el área del
mismo -->
<h2></h2>
    <form action="ejercicio8.php" method="post">
        <label>Logitud lado del cuadrado en cm</label>
        <input type="number" name="ladoCuadrado">
        <label>Base Rectángulo en cm</label>
        <input type="number" name="baseRectangulo">
        <label>Altura Rectángulo en cm</label>
        <input type="number" name="alturaRectangulo">
        <input type="submit" value="enviar">
    </form>
    <?php
$ladoCuadrado = $_POST['ladoCuadrado'];
$baseRectangulo = $_POST['baseRectangulo'];
$alturaRectangulo = $_POST['alturaRectangulo'];
$perimeroCuadrado = ($ladoCuadrado * 4);
$areaRectangulo = ($baseRectangulo * $alturaRectangulo);
echo "el perímetro del cuadrado es {$perimeroCuadrado} cm y el area del  rectángulo es {$areaRectangulo} cm2"
    ?>
</body>
</html>