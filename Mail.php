<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Mail
 *
 * @author rabab
 */
echo  error_reporting(E_ALL);

require 'config.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';


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

    //Recipients
    $mail->setFrom( $_POST['email'],  $_POST['name']);
    $mail->addAddress('rabab.abdulhakim.hussein@gmail.com', 'Joe User');     // Add a recipient

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = $_POST['message_address'];
    $mail->Body    = $_POST['address'];
    $mail->AltBody = $_POST['address'];

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}

        $sql = "INSERT INTO email (`name`, `email`, `message_address`, `message` , `phone`)
       VALUES ('" . $_POST['name'] . "', '" . $_POST['email'] . "','" . $_POST['message_address'] . "','" . $_POST['message'] . "','" . $_POST['phone'] . "')";
        if (mysqli_query($conn, $sql)) {
            echo "New record created successfully";
        } else {
            echo mysqli_error($conn);
        }
    
    mysqli_close($conn);

