<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $eventName = $_POST['event-name'];
    $eventPrice = $_POST['event-price'];
    $email = $_POST['email'];
    $to = $email;
    $subject = "Event Booking Confirmation";
    $message = "Thank you for booking the $eventName event.\nTotal Price: $eventPrice";
    $headers = "From: your-email@gmail.com\r\n";
    // Use Gmail SMTP
    $mailSent = mail($to, $subject, $message, $headers);
    if ($mailSent) {
        echo "Email sent successfully!";    
    } else {
        echo "Email sending failed!";
    }
}
?>