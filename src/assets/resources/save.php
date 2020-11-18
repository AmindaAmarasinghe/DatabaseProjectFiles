<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");
$servername = "localhost:3307";
$username = "root";
$password = "";
$dbname = "angdb";

$conn = new mysqli($servername,$username,$password,$dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 


$sql = "INSERT INTO USER (username,email) VALUES ('".$_POST['myusername']."', '".$_POST['myemail']."')";
if (mysqli_query($conn,$sql)) {
$data = array("data" => "You Data added successfully");
    echo json_encode($data);
} else {
    $data = array("data" => "Error: " . $sql . "<br>" . $conn->error);
    echo json_encode($data);
    

}

?>