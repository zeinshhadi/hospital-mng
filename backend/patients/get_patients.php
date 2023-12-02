<?php
header('Access-Control-Allow-Origin:*');
include("../connection.php");
$query=$mysqli->prepare('select password from patients');
$query->execute();
$array=$query->get_result();
$response=[];

while($restaurant=$array->fetch_assoc()){
    $response[]=$restaurant;
}
echo json_encode($response);