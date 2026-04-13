<?php
    require_once('../models/contact.php');

    $contact = new contact;

    if(isset($_POST['savecontact'])){
        $userid = $_POST['userid'];
        $firstname = $_POST['firstname'];
        $email=$_POST['email'];
        $mobile=$_POST['mobile'];
        $subject=$_POST['subject'];
        $message=$_POST['message'];
        $response = $contact->savecontact($userid,$firstname,$email,$mobile,$subject,$message);
        echo json_encode($response);
    }

?>