​<?php

$email2 = $_POST['email2'];
$name2 = $_POST['name2'];
$question = $_POST['question'];

$to = "savason@bigmir.net";
$subject = "От посетителя сайта";
$text =  "Написал(а): $name2\n Контактный email - $email2\n\n Текст письма: $question\n";

$header .= "Content-type: text/html; charset=utf-8\r\n";
$header .= "MIME-Version: 1.0\r\n";
$sending = mail($to, $subject, $text, $headers);

if($sending) echo "Письмо отправлено. Ответа не ждите :)";

?>