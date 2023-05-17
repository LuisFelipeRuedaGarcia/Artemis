<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="facturas.php" method="post">
        <label >selecciona cripto</label>
        <select name="cripto" id="selecetCripto">
            <option value="Bitcoin">Bitcoin</option>
            <option value="Etherium">Etherium</option>
        </select>
        <label>cantidad</label>
        <input type="number" name="Cantidad">
        <label>precio Actual</label>
        <input type="number" name="Precio">
        <input type="submit">
    </form>
</body>
</html>
<?php
if ($_POST){
    $total = ($_POST["Cantidad"]*$_POST["Precio"]);
    echo "compraste {$total} en {$_POST["cripto"]} <br>";
}
?>