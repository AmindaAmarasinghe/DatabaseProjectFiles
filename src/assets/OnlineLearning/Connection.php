
<?php 

$connection = mysqli_connect('localhost','root','','OnlineLearning');

if(mysqli_connect_errno()){

    die('Connection failed'.mysqli_connect_error());
}else{
    echo 'Connection success';
}




?>