

<?php
include "registration.php";
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");
$servername = "localhost:3307";
$username = "root";
$password = "";
$dbname = "angdb";
$success = '"success"';
$returnnResult ;

$conn= mysqli_connect($servername, $username, $password);
mysqli_select_db($conn, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
if(isset($_POST['myusername'])){
    $u_name = $_POST['myusername'];
    $pwd = $_POST['myemail'];

    $fp = fopen('loginResult.json', 'w');
    //$data = array("data" => "Your Data added successfully");
    //    echo json_encode($data);
     //   fwrite($fp, json_encode($data));
    $sql = "SELECT * FROM user WHERE username ='".$u_name."' AND email='".$pwd."' limit 1";
    $result = mysqli_query($conn,$sql);

    if(mysqli_num_rows($result)==1){
       // header("location:registration.php");
        $data = array("data" => "logged successully");
        echo json_encode($data);
        fwrite($fp, json_encode($data));
        
        
    
    }else{
       
        $data = array("data" => "incorrect");
        fwrite($fp, json_encode($data));
    }
    fclose($fp);
}
//$valid ;
//$conn = new mysqli($servername,$username,$password,$dbname);
/*
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$mysql = "SELECT * FROM user WHERE username =".$_POST['username']." AND email =".$_POST['password'] ;
if( mysqli_query($conn, $mysql)){
    echo "valid";
}
//if (mysqli_num_rows($result) == 1) {
  //  echo "valid";
//}
else {
    echo "invalid";

}

*/
$conn->close();
?>
