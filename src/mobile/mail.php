<?php

if(!empty($_POST)) {
	
$to = "vanoja@mail.ru";

$name = htmlspecialchars($_POST['header-name']);
$phone = htmlspecialchars($_POST['header-tel']);

$subject = 'Новая заявка с сайта';

/* сообщение */
$message = '
<html>
<head>
 <title>Новая заявка с сайта</title>
</head>
<body>
<p><b>Имя:</b> ' . $name .  '</p>
<p><b>Телефон:</b> ' . $phone . '</p>
</body>
</html>
';

	$headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
	$headers .= "From: Отправитель <noreply@ozr-uk.ru>\r\n"; //Наименование и почта отправителя
	mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail

// header("Location: " . getenv("HTTP_REFERER") . "?send_message"); 

}

?>