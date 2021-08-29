<?php

header('Access-Control-Allow-Origin: *');

$mysqli = include_once "conexion.php";
$resultado = $mysqli->query("SELECT * 
FROM data
where humedad>93 Limit 10");
$videojuegos = $resultado->fetch_all(MYSQLI_ASSOC);
$ra=array();

foreach ($videojuegos as $videojuego) {
    $item= array(
    'id'=>$videojuego["id"],
    "temperatura"=>$videojuego["temperatura"],
    "humedad" => $videojuego["humedad"],
    "hora" => $videojuego["hora"]
    );
    
    $raaux=$item;
 }
 $data=str_replace('}{','},{',$raaux); 
echo json_encode($raaux);







