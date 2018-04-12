<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Admin
 *
 * @author Ayatullah Abdulhakim
 */
include 'Handle_mail.php';


if($_SERVER['REQUEST_METHOD'] === 'Get'){
         $get  = new Handle_mail();
         $json = file_get_contents('php://input');
         $data = json_decode($json);
         var_dump($get->get_element($id));
         
}elseif($_SERVER['REQUEST_METHOD'] === 'Post'){
                require 'config.php';
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$json = file_get_contents('php://input');
$data = json_decode($json);
header('Content-Type: application/json');
return($data);
      $message_ifo = "SELECT * FROM `email` where id =  ". $message_id;
               $result = mysqli_query($conn, $message_ifo);
                $rows = mysqli_fetch_all($result,MYSQLI_ASSOC); 
                
                if(count($rows) > 0){
              $message_input =$data->message;
               $message_id_input =$data->message_id;

            $message = $this->test_input($message_input);
            $message_id = $this->test_input($message_id_input);
    
            
        $sql = "INSERT INTO message_reply (`message`, `message_id`)
       VALUES ('" . $message . "', '" . $message_id . "')";
        if (mysqli_query($conn, $sql)) {
            echo "New record created successfully";
                  return json_encode(array("response" => "true"));

              $mail = new Handle_mail();
            $mail->Send_Mail($rows[0]['name'], $rows[0]['email'], $rows[0]['message_address'], $rows[0]['message'], $rows[0]['phone']);
        } else {
            echo mysqli_error($conn);
        }
    
    mysqli_close($conn);
        
    }else{
        return json_encode(array("response" => "false"));
}
}