<?php
class Camper{
    //1. Delcaración de propiedades con modificadores de acceso
    private $nombre;
    private $email;
    private $celular;
    //2. Metodo Constructor (método mágico)
    //alternativamente puedo inicializar con valaores prametrizados al constructor
public function __construct($nombre, $email, $celular)
{
$this->nombre = $nombre;
$this->email = $email;
$this->celular = $celular;
}
    //3. Métodos (getters and setters)
    //get -> Se obtinen valores de propiedades
    //set -> se modifica . setean valores de atributos - propiedades
    public function getnombre(){
        return $this->nombre;
    }
    public function getemail(){
        return $this->email;
    }
    public function getcelular(){
        return $this->celular;
    }
// methodos con parametros
public function getsaludo($p){
return $p . "Camper";
}
//methodos Setter
public function setNombre($Nombre){
$this->nombre = $Nombre;

}
public function setcelular($celular){
    $this->celular = $celular;
}
public function setemail($email){
    $this->email = $email;
}
}
//instaciar clases --> variables de instancia.
$camper = new Camper("Luis", "lfxrg0724@gmail.com", 3145768618);
$camper->setNombre("Ludwing");
$camper->setemail("emaiil@gmail.com");
$camper->setCelular(555777);
echo $camper->getnombre() ."<br>".
 $camper->getemail()."<br>".
  $camper->getcelular()." <br>";
  echo $camper->getSaludo("Hello"); 