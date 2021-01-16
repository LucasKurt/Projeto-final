<?php
    $conn = mysqli_connect("sql109.epizy.com", "epiz_27118579", "kjn5EiU6mIne5i", "epiz_27118579_comercio_amigavel");
 
    if (!$conn){
        die ("Falha na conexão com o BD " . mysqli_connect_errno());
    }