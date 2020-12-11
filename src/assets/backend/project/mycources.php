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
if(isset($_POST['userId'])){
    
    $sql = "SELECT Enrolledcourses from student where StudentId ='".$_POST['userId']."'";
    //$sql =" SELECT * FROM course where followers like '%'".$_POST['userId']."'%'  ";
    $test = array();
    $result = mysqli_query($conn, $sql);   
    while ($row = $result->fetch_assoc()) {
        
        $test[]= $row;
    }
    
    
  
    echo json_encode($test);
   
    
}



?>