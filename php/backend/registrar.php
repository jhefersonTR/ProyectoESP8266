
<?php

$mysqli = include_once "conexion.php";


$hoy = date("F j, Y, g:i a"); 


$temperatura = $_POST["temperatura"] ;
$humedad = $_POST["humedad"];

$sentencia = $mysqli->prepare("INSERT INTO data
(temperatura,humedad,hora) VALUES (?, ?,'$hoy')");

$sentencia->bind_param("ss",$temperatura, $humedad);
$sentencia->execute();

return "PRPHBANDO ESTA BASURA";

