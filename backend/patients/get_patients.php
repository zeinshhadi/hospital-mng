<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Methods:GET,POST,OPTIONS');
header('Access-Control-Allow-Headers:*');
include("../connection.php");
$query=$mysqli->prepare('select * from patients');
$query->execute();
$array=$query->get_result();
$response=[];

while($patient=$array->fetch_assoc()){
    $response[]=$patient;
}
echo json_encode($response);