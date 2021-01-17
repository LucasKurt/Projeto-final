<?php
    $conn = mysqli_connect("localhost", "root", "", "comercio_amigavel");
 
    if (!$conn){
        die ("Falha na conexão com o BD " . mysqli_connect_errno());
    }