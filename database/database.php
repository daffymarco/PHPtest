<?php

require_once "../config/connect.php";

//----------------------------------------------------------------------------
//-*** Arquivo responsável por inserir um novo registro no Banco de Dados ***-
//----------------------------------------------------------------------------

$cep = filter_input(INPUT_POST, "cep"); //Get cep

//----------------------------------------------------------------------------

$sql_consult = "SELECT id FROM tab_cep WHERE cep = $cep";
    
// Execute Consult SQL
$sql_consult = $mysqli->query($sql_consult);

if (mysqli_num_rows($sql_consult) == 0) {
    $sql_consult = "INSERT INTO tab_cep(cep, date_consult) VALUES($cep, NOW())";
        
    // Execute Consult SQL
    $mysqli->query($sql_consult);
}else{
    echo "erro";
}
