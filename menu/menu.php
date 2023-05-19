<?php         session_start(); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>menu</title>
</head>
<body>

    <form action="menu.php" method="POST">
        <label>Inserte un numero de la lista</label>
            <input type="number" name="numeroPrincipal">
            <input type="submit" value="enviar">

        <p>
        0. para borrar Datos (cockies)<br>
        1. Lectura de datos<br>
        2. Crear Array Asosiativo<br>
        3. Mostrar Array Asosiativo<br>
        4. Crear Array<br>
        5. Mostrar Array<br>
        6. Elimine el primer elemento del Array<br>
        7. Elimine el ultimo elemento del Array<br>
        8. Eliminar cualquier elemento del Array<br>
        9. Agregar elemento al comienzo del Array<br>
        10. Agregar elemento al final del Array<br>
        11. Crera Array con Array Asosiativo <br>
        12. Iterar Array con Array Asosiativo (FOR)<br>
        13. Iterar Array con Array Asosiativo (ForEach)<br>
        14. Iterar Array con Array Asosiativo (MAP) y crear copia<br>
        15. Proceso personal</p><br>
        <br><br><br><br><br><br><br>
        
    </form>
    <?php 

        if (isset($_POST["numeroPrincipal"]) || isset($_SESSION["numeroPrincipal"])) {

            if (isset($_POST["numeroPrincipal"])){
            $numeroPrincipal = $_POST["numeroPrincipal"];
            $_SESSION["numeroPrincipal"] = $_POST["numeroPrincipal"];
            }
            else {
              $numeroPrincipal = $_SESSION["numeroPrincipal"];
            };

            switch ($numeroPrincipal) {
                case 0:
                    session_destroy(); 
                    break;
                case 1:

                    if ($_POST["input"]) {

/*                         if (isset($_POST["input"])){ */
                            $input = $_POST["input"];
/*                             $_SESSION["input"] = $_POST["input"]; */
                            /* } */
/*                             if (isset($_SESSION["input"])) {
                              $input = $_SESSION["input"];
                            }; */
                        echo $input;
                        }

                    else{
                    echo '
                    <form action="menu.php" method="POST">
                        <label>Inserte input</label>
                        <input type="text" name="input">
                        <input type="submit" name="enviar">
                    </form>
                    ';}
                    break;
                case 2:
                    if ($_POST["cantidadElemetosArrayAsosiativo"] || $_SESSION["cantidadElemetosArrayAsosiativo"]){



                        if (isset($_POST["cantidadElemetosArrayAsosiativo"])){
                            $cantidad1= (int) $_POST["cantidadElemetosArrayAsosiativo"];
                            $_SESSION["cantidadElemetosArrayAsosiativo"] = $cantidad1;
                        }
                        else{
                            $cantidad1= (int) $_SESSION["cantidadElemetosArrayAsosiativo"];
                        }


                        if ($_POST['form3']){
                            for ($i=0; $i < $cantidad1; $i++){
                                $keys[] = $_POST["key$i"];
                                $values[] = $_POST["value$i"];
                                /* $$keys = $_POST["key$i"]; */
                            }
                                echo $keys;
                                echo "el post funciona";
                                echo $cantidad1;  
                                $object= array_fill_keys($keys, $values);
                                foreach($keys as $key => $value) {
                                    $object[$value] = $values[$key];
                                };
                                $_SESSION["object"] = $object;                         
                        };

                        echo "<form method='post' action='menu.php'>

                        ";

                        for ($i=0 ; $i<$cantidad1; $i++){
                            echo "
                            <label>ingresa la key del objeto $i</label>
                            <input type='text' name='key$i'><br>
                            <label>ingresa el value del objeto $i</label>
                            <input type='text' name='value$i'><br>
                            ";
                        }
                        echo "<input type='submit' value='enviar' name='form3'></form>";
                    }
                    else{
                    echo "<form action='menu.php' method='POST'>
                    <label> cantidad de elementos del Array asosiativo</label>
                    <input type='text' name='cantidadElemetosArrayAsosiativo'/><br>
                    <label> nombre del objeto</label>
                    <input type='text' name='nombreArrayAsosiativo'><br>
                    <input type='submit' value='enviar'/>
                    </form>
                    ";}
                    echo "array asociativo creado";
                    break;
                case 3:
                    $object = $_SESSION["object"];
                    echo $object;  
                    var_dump($object);

                    break;
                case 4:
                    $array = ["a1", "a2", "a3", "a4", "a5"];
                    $_SESSION["array"] = $array;
                    echo "array creado";
                    break;
                case 5:
                    $array = $_SESSION["array"];
                    var_dump($array);
                    break;
                case 6:
                    $array = $_SESSION["array"];
                    array_shift($array);
                    $_SESSION["array"] = $array;
                    break;
                case 7:
                    $array = $_SESSION["array"];
                    print_r($array);
                    array_pop($array);
                    print_r($array);
                    $_SESSION["array"] = $array;
                    break;
                case 8:
                    $array = $_SESSION["array"];
                    array_splice($array, 3,1);
                    var_dump($array);
                    $_SESSION["array"] = $array;
                    break;
                case 9:
                    $array = $_SESSION["array"];
                    array_unshift($array, "new element");
                    break;
                case 10:
                    $array = $_SESSION["array"];
                    array_push($array, "new element");
                    break;
                case 11:
                    $ObjetoInterior1 = [
                        'nombre' => "luis",
                        'genero' => "masculino",
                        'nota' => 70
                    ];
                    $ObjetoInterior2 = [
                        'nombre' => "Felix",
                        'genero' => "masculino",
                        'nota' => 90
                    ];
                    $ObjetoInterior3 = [
                        'nombre' => "ludwing",
                        'genero' => "masculino",
                        'nota' => 20
                    ];
                    $arraycontenedor[]=$ObjetoInterior1;
                    $arraycontenedor[]=$ObjetoInterior2;
                    $arraycontenedor[]=$ObjetoInterior3;
                    var_dump($arraycontenedor);
                    $_SESSION['arraycontenedor']=$arraycontenedor;
                    break;
                case 12:
                    $arraycontenedor = $_SESSION['arraycontenedor'];
                    for ($i = 0; $i<count($arraycontenedor); $i++){
                        var_dump($arraycontenedor[$i]);
                    }
                    break;
                case 13:
                    $arraycontenedor = $_SESSION['arraycontenedor'];
                    foreach ($arraycontenedor as $key => $value) {
                        var_dump($arraycontenedor[$key]);}
                    break;
                case 14:
                    $arraycontenedor = $_SESSION['arraycontenedor'];
                    function plusPlus($parametro) {
                        $key = $parametro['nombre'];
                        return "$key++";}
                        $copia = array_map("plusPlus",$arraycontenedor);
                        var_dump($copia);
                        $_SESSION['copia'] = $copia;
                    
                    break;
                case 15:
                    $arraycontenedor = $_SESSION['arraycontenedor'];
                    $copia = $_SESSION['copia'];
                    var_dump($copia);
                    break;
                default:
                    echo "Numero no encontrado";
                    break;
            }
        }

        
    
    ?>
</body>
</html>