<?php
header('Access-Control-Allow-Origin:*');
include("../connection.php");
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];
$password = $_POST['password'];
$specialization = $_POST['specialization'];

$hashed_password = password_hash($password, PASSWORD_DEFAULT);
$query=$mysqli->prepare('insert into doctors(first_name,last_name,email,password,specialization)  values (?,?,?,?,?)');
$query->bind_param('sssss', $first_name, $last_name, $email, $hashed_password, $specialization);
$query->execute();


$response = [];
$response["status"] = "true";

echo json_encode($response);