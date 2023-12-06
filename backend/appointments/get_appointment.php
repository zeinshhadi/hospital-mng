<?php

include('../connection.php');

$json_data = file_get_contents("php://input");
$data = json_decode($json_data, true);

if (isset($data["patients_id"])) {
    $patient_id = $data["patients_id"];

    $query = $mysqli->prepare("
        SELECT p.first_name AS patient_name, d.first_name AS doctor_name, a.appointment_date
        FROM appointments a
        LEFT JOIN patients p ON a.patients_id = p.patients_id
        LEFT JOIN doctors d ON a.doctor_id = d.doctor_id
        WHERE a.patients_id = ?
    ");

    $query->bind_param("i", $patient_id);

    $query->execute();

    $result = $query->get_result();
    
    $appointments = [];
    while ($row = $result->fetch_assoc()) {
        $appointments[] = $row;
    }

    echo json_encode($appointments);
} else {
    $response = ["error" => "Invalid data format"];
    echo json_encode($response);
}



?>

