<?php
    require_once('db.php');
    class contact extends db{
        function savecontact($userid,$firstname,$email,$mobile,$subject,$message){
            $sql = "CALL `sp_savecontactusdetails`({$userid},'{$firstname}','{$email}','{$mobile}','{$subject}','{$message}','{$this->platform}')";
            $this->getData($sql);
            return ['status'=>'success', 'message'=>'Your Details Have Been Sent and Saved Successfully!'];
        }
    }
?>