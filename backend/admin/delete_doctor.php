<?php
include("../connection.php");

$response = [];

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $doctorId = isset($_GET['id']) ? intval($_GET['id']) : 0;

    if ($doctorId > 0) {
        $queryAppointments = $mysqli->prepare('DELETE FROM appointments WHERE doctor_id = ?');
        $queryAppointments->bind_param('i', $doctorId);
        $queryAppointments->execute();

        if ($queryAppointments->affected_rows > 0) {
            $query = $mysqli->prepare('DELETE FROM doctors WHERE doctor_id = ?');
            $query->bind_param('i', $doctorId);
            $query->execute();
            if ($query->affected_rows > 0) {
                $response['status'] = 'success';
                $response['message'] = 'Doctor deleted successfully';
            } else {
                $response['status'] = 'error';
                $response['message'] = 'Failed to delete doctor';
            }

            $query->close();
        } else {
            
            $response['status'] = 'error';
            $response['message'] = 'Failed to delete doctor. No related appointments found.';
        }

        $queryAppointments->close();
    } else {
        $response['status'] = 'error';
        $response['message'] = 'Invalid or missing Doctor ID';
    }
} else {
    $response['status'] = 'error';
    $response['message'] = 'Invalid request method';
}

header('Content-Type: application/json');

error_log("Response: " . json_encode($response));

echo json_encode($response);
?>
