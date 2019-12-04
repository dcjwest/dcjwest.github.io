<?php
    if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["message"])) {
        echo "All fields are set!";
        $name = $_POST["name"];
        $senderEmail = $_POST["email"];
        $subject = $_POST["subject"] || "Hello David! Nice Portfolio :)";
        $message = $_POST["message"];

        $recipientEmail = "dcjwest@gmail.com";
        $messageBody = "Name: ".$name."\nEmail: ".$senderEmail."\nMessage:\n\n".$message;
        $headers = "From: ".$senderEmail;

        $result = mail($recipientEmail, $subject, $messageBody, $headers) ? (
            "Thank you ".$name." for your message!<br>I will contact you shortly."
        ) : (
            "Sorry ".$name."...<br>Something went wrong!"
        );

        // if (mail($recipientEmail, $subject, $messageBody, $headers)) {
        //     echo "<h1>Thank you ".$name." for your message! I will contact you shortly.</h1>";
        // }
        // else {
        //     echo "Something went wrong!";
        // }
    }
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="https://fonts.googleapis.com/css?family=Fjalla+One&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300&display=swap" rel="stylesheet">
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>David v.d. Westhuizen | Web Developer</title>
    </head>
    <body>
        <div id="after-submit" class="flex-center">
            <h2><?php echo $result ?></h2>
            <button class="btn" data-text="Home" onclick="window.location='index.html'">
                <span class="btn-overlay"></span>
                <span class="btn-text">Home</span>
            </button><br />
        </div>
    </body>
</html>
