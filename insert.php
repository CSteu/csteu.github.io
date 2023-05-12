<?php
// Connect to the MySQL database
$servername = "sql9.freesqldatabase.com";
$username = "sql9616884";
$password = "B1gICdR3Xv";
$dbname = "sql9616884";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Retrieve the data from the AJAX request
$data = $_POST['data'];

// Insert the data into the database
$sql = "INSERT INTO activatedTable (id, serialKey, activated, time) VALUES ('$data[0]', '$data[1]', '$data[2]', '$data[3]')";

if ($conn->query($sql) === TRUE) {
  echo "Data inserted successfully";
} else {
  echo "Error inserting data: " . $conn->error;
}

$conn->close();
?>