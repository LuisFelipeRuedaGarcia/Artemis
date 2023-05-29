<?php 
class Jugador {
    private static $goles =  5;
    public static function info()
    {
        return self :: $goles;
    }
}

/* $jugador = new Jugador();
echo $jugador->info(); */

echo Jugador::info();