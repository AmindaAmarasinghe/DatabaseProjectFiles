<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$servername = "localhost:3307";
$username = "root";
$password = "";
$dbname = "project";

$conn = new mysqli($servername,$username,$password,$dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$sql =" SELECT * FROM COURSE ";

$result = $conn->query($sql);
$myArr = array();
if($result->num_rows>0){
    while ($row = $result->fetch_assoc()) {
        $myArr[]= $row;
    }
}
echo json_encode($myArr);
?>