<?php 
/*1 IF CONDICIONAL */
$salario = 900000;
$No_subsidio_Msg = "Usted (NO) tiene derecho a subsidio";
$Si_subsidio_Msg = "Usted (SI) tiene derecho a subsidio";
if ($salario> 3000000){
    echo $Si_subsidio_Msg;
}else{
    echo $No_subsidio_Msg;
}
?>

<?php 
$temperature = 15;
if ($temperature<0 || $temperatura >30){
    echo "el clima es favorable";
}
else{
    echo "El clima es bueno";
}
?>
<?php
//2. Switch
$hora = "08:00 A.M.";
switch ($hora){
    case "6:00 AM":
        echo "Camper, Tienes Sofware Skill";
        break;
    case "8:00 AM":
        echo "Camper, Tienes Break, Pausa Activa";
        break;
    case "9:30 AM":
        echo "Camper tienes Break de verdad";
        break;
    case "10:00 AM":
        echo "Camper tienes Clase de inglés";
        break;
    case "11:00 AM":
        echo "Camper tienes Clase del SER";
        break;
    case "12:00 PM":
        echo "MiniBreak";
        break;
    case "12:15 PM":
        echo "Camper Tienes Sofware-Review";
        break;
    default:
        echo "Camper no Tienes más clase asignadas por hoy";
        break;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="if_case_loop_arrays.php" method="post">
        <label>Digita el limite del contador<label>
            <input type="number" name="counter">
            <input type="submit" value="Generar">
    </form>
</body>
</html>
<?php 
//FOR CICLO REPETITITVO (repite codigo un número determinado de veces)
if($_POST){
    $Counter = $_POST["counter"];
    for ($i =1; $i <= $Counter; $i++){
        echo $i . "<br>";
    }

}
?>

<?php 
//4. WHILE _ CICLO REPETITIVO (repite código mientras se esté cumpliendo una condición)
while($contador <10){
    $contador++;
    echo $contador . "<br>";
}

?>
<?php 
//5. ARRAY - Variable que guarda más de un dato simultaneamente
$comida = ["Panzerotti", "Sushi", "Sopa", "Pescado"];
echo $comida[0] . "<br>";
echo $comida[1] . "<br>";
echo $comida[2] . "<br>";
echo $comida[3] . "<br>";

echo "<br>";
array_push($comida, "Camarones");//añade al final
array_pop($comida, "camarones");//eliminar el final
array_shift($comida);
foreach ($comida as $bocado){
    echo $bocado . "<br>";
}
?>


