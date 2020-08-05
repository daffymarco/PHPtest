<?php
ini_set( "display_errors", 0); 

    $host="localhost";
    $database="phptest";
    $user="root";
    $pass="";

//Realiza a Conexão com o Banco de Dados
$mysqli = mysqli_connect($host, $user, $pass, $database);

// Check connection
if ($mysqli->connect_error) {
    die("Falha na Conexão: " . $mysqli->connect_error);
}
