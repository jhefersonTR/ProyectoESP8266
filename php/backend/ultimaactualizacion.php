
<?php

header('Access-Control-Allow-Origin: *');

$mysqli = include_once "conexion.php";
$resultado = $mysqli->query("SELECT * 
FROM data
ORDER BY id DESC
LIMIT 1");
$videojuegos = $resultado->fetch_all(MYSQLI_ASSOC);


foreach ($videojuegos as $videojuego) {
    $item= array(
    'id'=>$videojuego["id"],
    "temperatura"=>$videojuego["temperatura"],
    "humedad" => $videojuego["humedad"],
    "hora" => $videojuego["hora"]
    );
    echo json_encode($item);
 }




