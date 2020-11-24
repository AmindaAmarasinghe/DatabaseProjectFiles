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

if(isset($_POST['firstname'])){
    

    //Read more: http://mrbool.com/how-to-insert-retrieve-json-data-to-from-database-using-php/36810#ixzz6eXiakSBh
    $fp = fopen('studRecords.json', 'w');
    
    $sql = "INSERT INTO test (studentId, name1, name2, contact, address1, address2, pwd, gender, birthdate) values ('".$_POST['index']."','".$_POST['firstname']."','".$_POST['lastname']."','".$_POST['myemail']."','".$_POST['address1']."','".$_POST['address2']."','".$_POST['pwd']."','".$_POST['gender']."','".$_POST['birthdate']."')";
    $data_array = array(); 
    //while($rows =mysqli_fetch_assoc(mysqli_query($conn,$sql))) { $data_array[] = $rows; }
    if (mysqli_query($conn,$sql)) {
        $data = array("data" => "Your Data added successfully");
        echo json_encode($data);
        fwrite($fp, json_encode($data));
        echo "Data Retrieved Successully!!!";
    }
    fclose($fp);
}
/*
if(isset($_POST['firstname'])){
    


$sql = "INSERT INTO test (name1, name2, contact, address1, address2, pwd, gender) VALUES ('".$_POST['firstname']."', '".$_POST['lastname']."','".$_POST['myemail']."','".$_POST['address1']."','".$_POST['address2']."','".$_POST['pwd']."','".$_POST['gender']."')";

    
if (mysqli_query($conn,$sql)) {
    $data = array("data" => "Your Data added successfully");
    echo json_encode($data);
} else {
    $data = array("data" => "Error: " . $sql . "<br>" . $conn->error);
    echo json_encode($data);
    

}
}*/

?>