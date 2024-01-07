<?php
include("db_connection.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $start_date = $_POST["start_date"];
    $end_date = $_POST["end_date"];
    $catering = $_POST["catering"];
    $decoration = $_POST["decoration"];
    $venue = $_POST["venue"];

    $sql = "INSERT INTO event_details (start_date, end_date, catering, decoration, venue) 
            VALUES ('$start_date', '$end_date', '$catering', '$decoration', '$venue')";

    if ($conn->query($sql) === TRUE) {
        header("Location: second_page.html");  // Redirect to the next page
        exit();
     
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
