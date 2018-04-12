<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Handle_mail
 *
 * @author Ayatullah Abdulhakim
 */
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

class Handle_mail {

    //put your code here
//    public $name;
//    public $email;
//    public $message;
//    public $Message_address;
//    public $phone;
    public function Send_Mail($name, $email, $message, $message_address, $phone) {
        $mail = new PHPMailer(true);                              // Passing `true` enables exceptions
        try {


            //Server settings
            $mail->SMTPDebug = 3;
            $mail->Debugoutput = 'html';

// Enable verbose debug output
            $mail->isSMTP();                                      // Set mailer to use SMTP
            $mail->Host = 'smtp.gmail.com';                 // Specify main and backup SMTP servers
            $mail->SMTPAuth = true;                               // Enable SMTP authentication
            $mail->Username = 'rababh653@gmail.com';                 // SMTP username
            $mail->Password = 'rabab121212';                           // SMTP password
            $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
            $mail->Port = 587;                                    // TCP port to connect to
            //Recipients.
            $mail->setFrom($email, $email);
            $mail->addAddress($email, '$name');     // Add a recipient
            //Content
            $mail->isHTML(true);                                  // Set email format to HTML
            $mail->Subject = $message;
             $mail->Body = " Message $message_address From $name ;<br> info: email $email , phone $phone <br> Message $message";
            $mail->AltBody = " Message $message_address From $name ;<br> info: email $email , phone $phone <br> Message $message";
            $mail->SMTPSecure = 'tls';
            $mail->Host = 'smtp.gmail.com';

            $mail->send();
            
            echo 'Message has been sent';
            //send to the database
        } catch (Exception $e) {
            echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo . "</br>";
        }
    }
   public function test_input($input) {
            $input = trim($input);
            $input = stripslashes($input);
            $input = htmlspecialchars($input);
            return $input;
        }

    public function Insert() {

        require 'config.php';

        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Max-Age: 3600");
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

        $json = file_get_contents('php://input');
        $data = json_decode($json);
        header('Content-Type: application/json');
        
        $name_input =$data->name;
        $email_input =$data->email;
        $message_address_input =$data->message_address;
        $message_input =$data->message;
        $phone_input =$data->phone;

            $name = $this->test_input($name_input);
            $email = $this->test_input($email_input);
            $message_address = $this->test_input($message_address_input);
            $message = $this->test_input($message_input);
            $phone = $this->test_input($phone_input);
        

 

        $sql = "INSERT INTO email (`name`, `email`, `message_address`, `message` , `phone`)
       VALUES ('" . $name . "', '" . $email . "','" . $message_address . "','" . $message . "','" . $phone . "')";
        if (mysqli_query($conn, $sql)) {
            echo "New record created successfully";
            $this->Send_Mail($data->name, $data->email, $data->message, $data->message_address, $data->phone);
        } else {
            echo mysqli_error($conn);
        }

        mysqli_close($conn);
    }
    

    public function List_mail() {

        require 'config.php';
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        header("Access-Control-Allow-Methods: Get");
        header("Access-Control-Max-Age: 3600");
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
        $sql = "SELECT * FROM `email`";
        $result = mysqli_query($conn, $sql);
        $rows = mysqli_fetch_all($result, MYSQLI_ASSOC);

        if ($rows) {
            $json = array("status" => 1, "info" => $rows);
        } else {
            $json = array("status" => 0, "msg" => "User ID not define");
        }

        header('Content-type: application/json');
        return json_encode($json);
    }
    
  

}
