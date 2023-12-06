<?php
include("../connection.php");

$response = [];

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {

    $data = json_decode(file_get_contents("php://input"));
    $patientId = isset($data->id) ? intval($data->id) : 0;

    if ($patientId > 0) {
        $queryAppointments = $mysqli->prepare('DELETE FROM appointments WHERE patients_id = ?');
        $queryAppointments->bind_param('i', $patientId);
        $queryAppointments->execute();

        if ($queryAppointments->affected_rows >= 0) {
            $query = $mysqli->prepare('DELETE FROM patients WHERE patients_id = ?');
            $query->bind_param('i', $patientId);
            $query->execute();
            
            if ($query->affected_rows > 0) {
                $response['status'] = 'success';
                $response['message'] = 'Patient deleted successfully';
            } else {
                $response['status'] = 'error';
                $response['message'] = 'Failed to delete patient';
            }

            $query->close();
        } else {
            $response['status'] = 'error';
            $response['message'] = 'Failed to delete patient. No related appointments found.';
        }

        $queryAppointments->close();
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Invalid or missing Patient ID';
    }
} else {
    $response['status'] = 'error';
    $response['message'] = 'Invalid request method';
}

header('Content-Type: application/json');

error_log("Response: " . json_encode($response));

echo json_encode($response);
?>
