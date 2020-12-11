<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");
$servername = "localhost:3307";
$username = "root";
$password = "";
$dbname = "group13";

$conn = new mysqli($servername,$username,$password,$dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

if(isset($_POST['firstname'])){
    

    
    
    $sql = "INSERT INTO Teacher (TeacherId, Contact, Tpassword, Sex, BirthDate ,Registerdate, descriptionV) values ('".$_POST['myemail']."','".$_POST['myemail']."','".$_POST['pwd']."','".$_POST['gender']."','".$_POST['birthdate']."','".$_POST['regdate']."','".$_POST['descript']."')";
    $data_array = array(); 
    
    if (mysqli_query($conn,$sql)) {
        $data = array("data" => "Your Data added successfully");

        
        $sql2 = "UPDATE Teacher set TeacherName=concat('".$_POST['firstname']."',' ','".$_POST['lastname']."') where Contact ='".$_POST['myemail']."' ";
        $sql3 = "UPDATE Teacher set AddressV=concat('".$_POST['address1']."',',','".$_POST['address2']."') where Contact ='".$_POST['myemail']."' ";
        
           
        if (mysqli_query($conn,$sql2)){
           
            if (mysqli_query($conn,$sql3)){
                echo json_encode($data);
           
        
           
            }
           
        }


    }
  
}


?>