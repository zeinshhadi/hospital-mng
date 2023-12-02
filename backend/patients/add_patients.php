<?php
header('Access-Control-Allow-Origin:*');
include("../connection.php");
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];
$password = $_POST['password'];
$gender = $_POST['gender'];

$hashed_password = password_hash($password, PASSWORD_DEFAULT);
$query=$mysqli->prepare('insert into patients(first_name,last_name,email,password,gender)  values (?,?,?,?,?)');
$query->bind_param('sssss', $first_name, $last_name, $email, $hashed_password, $gender);
$query->execute();


$response = [];
$response["status"] = "true";

echo json_encode($response);