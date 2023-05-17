<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 10</title>
</head>
<body>
<!-- 10. Desarrolle un programa cíclico que capture un dato
numérico cada vez, y los vaya acumulando. El programa se
detiene cuando el usuario digita un cero. El programa debe
mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL
PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR
VALOR Y MENOR VALOR -->
<h2>Ejercicio 10</h2>

<?php
session_start();
if(!isset($_SESSION['numeros'])){
$_SESSION['numeros'] = [];
$_SESSION['sumatoria'] = 0;
$_SESSION['cantidadNumeros'] = 0;
$_SESSION['mayor'] = null;
$_SESSION['menor'] = null;
$_SESSION['ceroIngresado'] = false;
}

if($_SERVER['REQUEST_METHOD'] == 'POST'){

    $numero = $_POST['numero'];
    if($numero == 0 ){
        $_SESSION['ceroIngresado'] = true;
    }
    else{
        $_SESSION['numeros'][]=$numero;
        $_SESSION['sumatoria'] += $numero;
        $_SESSION['cantidadNumeros']++;
        if($_SESSION['mayor'] == null || $numero >$_SESSION['mayor']){
            $_SESSION['mayor'] = $numero;
        }
        if($_SESSION['menor'] == null || $numero <$_SESSION['menor']){
            $_SESSION['menor'] = $numero;
        }
    }
}
?>

<?php if (!$_SESSION['ceroIngresado']): ?>
    <form action="ejercicio10.php" method="post">
    <label>ingresa un valor, para añadir a la sumatoria y el promedio, o cero para ver el resultado</label>
    <input type="number" name="numero">
    <input type="submit" value="agregar">
</form>
<?php else: ?>
    <?php echo $_SESSION['cantidadNumeros'];?>
    <p>No se permite ingresar más números después del cero </p>
<?php endif; ?>

<h2>Resultados</h2>
<?php if ($_SESSION['ceroIngresado']): ?>
    <p>Se digitó un total de 
        <?= $_SESSION['cantidadNumeros']?> 
    </p>
    <p>La sumatoria de los valores es: 
        <?= $_SESSION['sumatoria']?> 
    </p>
    <p>El valor promedio es:  
        <?= ($_SESSION['sumatoria'] / $_SESSION['cantidadNumeros']) ?> 
    </p>
    <p>El mayor valor ingresado es:   
        <?= $_SESSION['mayor'] ?>
    </p>
    <p>El menor valor ingresado es:   
        <?= $_SESSION['menor'] ?> 
    </p>
    <?php
            $_SESSION['numeros'] = [];
            $_SESSION['sumatoria'] = 0;
            $_SESSION['cantidadNumeros'] = 0;
            $_SESSION['mayor'] = null;
            $_SESSION['menor'] = null;
            $_SESSION['ceroIngresado'] = false;
    ?>

<?php endif; ?>
</body>
</html>