<?php
header('Access-Control-Allow-Origin:*');
header('Access-Control-Allow-Headers:*');
include("../connection.php");
$json_data = file_get_contents("php://input");


$data = json_decode($json_data, true);

if (isset($data["first_name"], $data["last_name"], $data["email"], $data["password"],$data["gender"])) {
    $first_name = $data["first_name"];
    $last_name = $data["last_name"];
    $email = $data["email"];
    $password = $data["password"];
    $gender = $data["gender"];


$hashed_password = password_hash($password, PASSWORD_DEFAULT);
$query=$mysqli->prepare('insert into patients(first_name,last_name,email,password,gender)  values (?,?,?,?,?)');
$query->bind_param('sssss', $first_name, $last_name, $email, $hashed_password,$gender);
$query->execute();


$response = [];
$response["status"] = "true";

echo json_encode($response);
}
else {
    $response = ["success" => false, "error" => "Invalid data format"];
    echo json_encode($response);
}

?>