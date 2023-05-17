<?php
/*1 String Serie de Caracteres*/
$customer = "Falcao";
echo "the customer {$customer} bougth <br>";
$favourite_food = "Panzerotti y Pizza";
echo "a {$favourite_food} <br>";
/*2 Integer. Es un Numero Entero */
$price = 5000;
echo "taht coste {$price}";
/* 2.1 Floating Point Number - floats - doubles - real numbers*/
$goal_rate_per_game = 4.5;
echo "<br> and now he is celebrating his goal rate per futbol game of {$goal_rate_per_game}";

/*4. Boolean. Tiene 2 valores true o false */
$state=true;
echo "<br>Is Falcao a champion? that is {$state}";


/* Obtener Tipos de Datos */
$type_data = gettype($goal_rate_per_game);
echo "<br> tipo de dato es: {$type_data}";

?>