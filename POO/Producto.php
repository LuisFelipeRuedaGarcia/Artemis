<?php
//7 productos y 4 objetos
class Producto{
    public $nombre;
    public $precio;
    public $categoria;
    public $marca;
    public $fecha_de_vencimiento;
    private $ventas;
    private $stock;
    public function __construct($nombre, $precio, $categoria, $marca, $fecha_de_vencimiento, $ventas, $stock){
        $this->nombre = $nombre;
        $this->precio = $precio;
        $this->categoria = $categoria;
        $this->marca = $marca;
        $this->fecha_de_vencimiento = $fecha_de_vencimiento;
        $this->ventas = $ventas;
        $this->stock = $stock;
    }

    public function getnombre(){
        return $this->nombre;
    }
    public function getprecio(){
        return $this->precio;
    }
    public function getcategoria(){
        return $this->categoria;
    }
    public function getmarca(){
        return $this->marca;
    }
    public function getfecha_de_vencimiento(){
        return $this->fecha_de_vencimiento;
    }
    public function getventas(){
        return $this->ventas;
    }
    public function getstock(){
        return $this->stock;
    }
    public function getAll(){
        return
        "nombre: $this->nombre <br>
        precio: $this->precio <br>
        categoria: $this->categoria <br>
        marca: $this->marca <br>
        fecha_de_vencimiento: $this->fecha_de_vencimiento <br>
        ventas: $this->ventas <br>
        stock: $this->stock <br>";
    }


    public function setnombre($nombre){
        $this->nombre = $nombre;
    }
    public function setprecio($precio){
        $this->precio = $precio;
    }
    public function setcategoria($categoria){
        return $this->categoria = $categoria;
    }
    public function setmarca($marca){
        return $this->marca = $marca;
    }
    public function setfecha_de_vencimiento($fecha_de_vencimiento){
        return $this->fecha_de_vencimiento = $fecha_de_vencimiento;
    }
    public function setventas($ventas){
        return $this->ventas = $ventas;
    }
    public function setstock($stock){
        return $this->stock = $stock;
    }
} 

$producto1 = new Producto("Poni-Malta", 1500, "bebidas", "Ponimalta", "24/Jul/2023", 150, 400);
echo  "producto1";/* $producto1->getnombre(); */
echo "<br>";
echo $producto1->getAll();
echo "<br>";
echo "producto2 <br>";
$producto2 = new Producto("", "", "", "", "", "", "",);
$producto2-> setnombre("crema-de-Dientes-Colgate-24h");
$producto2->setprecio(4000);

$producto2->setcategoria("AseoPersonal");
$producto2->setmarca("colgate");
$producto2->setfecha_de_vencimiento("26/Jul/2021");
$producto2->setventas(120);
$producto2->setstock("500");

echo $producto2-> getAll();
echo "producto3 <br>";
$producto3 = new Producto("", "", "", "", "", "", "",);
$producto3-> setnombre("Coca-cola-zero. 350 ml");
$producto3->setprecio(1500);
$producto3->setcategoria("Bebidas");
$producto3->setmarca("Coca-cola");
$producto3->setfecha_de_vencimiento("nunca");
$producto3->setventas(1200);
$producto3->setstock(5000);

echo $producto3-> getAll();

?>