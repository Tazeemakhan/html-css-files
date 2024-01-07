<?php
include("db_connection.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $address = $_POST["address"];

    $sql = "INSERT INTO customer_info (name, phone, email, password, address) VALUES ('$name', '$phone', '$email', '$password', '$address')";

    if ($conn->query($sql) === TRUE) {
        echo "Information submitted successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
