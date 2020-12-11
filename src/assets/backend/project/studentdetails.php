<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$servername = "localhost:3307";
$username = "root";
$password = "";
$dbname = "group13";

$conn = new mysqli($servername,$username,$password,$dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$sql1 = " create view teacherview as select teacher.* from teacher left join course.Coursename on teacher.TeacherId = course.TeacherId";
$sql =" SELECT * FROM student";
$result1 = $conn->query($sql1);
$result = $conn->query($sql);
$myArr = array();
if($result->num_rows>0){
    while ($row = $result->fetch_assoc()) {
        $myArr[]= $row;
    }
}
echo json_encode($myArr);
?>