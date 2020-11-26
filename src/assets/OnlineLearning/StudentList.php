
<?php require_once('connection.php'); ?>

<?php

$query = "SELECT Fname,Addressline1,Contact,BirthDate from student";

$result = mysqli_query($connection,$query);

if($result){

    $table = '<table class="table">';
    $table .= ' <thead>
    <tr>
      
        <th>Name</th>
        <th>Address</th>
        <th>Contact</th>
        <th>Birth Day</th>
        <th>Action</th>
    </tr>
</thead>';
    
    while($record = mysqli_fetch_assoc($result)){

  $table .= '<tr>';

  $table .= '<td>'.$record['Fname'].'</td>';
  $table .= '<td>'  . $record['Addressline1'] . '</td>';
  $table .= '<td>' .$record['Contact'] . '</td>';
  $table .= '<td>' .$record['BirthDate'] . '</td>';  
  $table .= '<td> <a href="#" id="btn-delete" class="btn btn">Delete</a> </td>'; 
  
  $table .= '</tr>';

    }

$table .= '</table>';

}








?>



<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

        

        <!-- Fonts -->
        
        <link  rel="stylesheet" href="style.css">

      
    </head>
    <body>
       
        

      













<section class="tab-content">

    <div class="container">

       

    <div class="text-center">
            
             <a href="#" class="btn btn-lg">Students</a>
           </div>


           <?php echo $table; ?>

     </div>

</div>






    </body>
</html>
<?php mysqli_close($connection); ?>