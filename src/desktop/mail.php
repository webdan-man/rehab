<?php

// if(!empty($_POST)) {

// $to = "vanoja@mail.ru";

// $name = htmlspecialchars($_POST['header-name']);
// $phone = htmlspecialchars($_POST['header-tel']);

// $subject = 'Новая заявка с сайта';

// /* сообщение */
// $message = '
// <html>
// <head>
//  <title>Новая заявка с сайта</title>
// </head>
// <body>
// <p><b>Имя:</b> ' . $name .  '</p>
// <p><b>Телефон:</b> ' . $phone . '</p>
// </body>
// </html>
// ';

// 	$headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
// 	$headers .= "From: Отправитель <noreply@ozr-uk.ru>\r\n"; //Наименование и почта отправителя
// 	mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail

// // header("Location: " . getenv("HTTP_REFERER") . "?send_message"); 

// }



$success = true; /* Проверка того, что все выполнено корректно. */
if ($success) {
	$url = $_POST['consultant_server_url'].'api/add_offline_message/';
	$data = array(
						'site_key' => $_POST['site_key'], //Значение без изменений из служебного поля site_key 
						'visitor_id' => $_POST['visitor_id'], //Значение без изменений из служебного поля visitor_id
						'hit_id' => $_POST['hit_id'], //Значение без изменений из служебного поля hit_id
						'session_id' => $_POST['session_id'], //Значение без изменений из служебного поля session_id
						'name' => $_POST['name'], //Имя клиента
						'email' => $_POST['email'], //E-mail
						'phone' => $_POST['tel'], //Номер телефона
						'text' => $_POST['text'] //Текст заявки
					);
				/* Если все поля в html-разметке формы называются так же как этого требует comagic, можно написать "$data = $_POST".
				В противном случае потребуются дополнительные преобразования. */
				$options = array(
					'http' => array(
						'header' => "Content-type: application/x-www-form-urlencoded; charset=UTF-8",
						'method' => "POST",
						'content' => http_build_query($data)
					)
				);
				$context = stream_context_create($options);
				$result = file_get_contents($url, false, $context);
				$resultArray = json_decode($result, true);
				if ($result === false or $resultArray['success' === false]) {
					/* Обработка случая, если отправка заявки в CoMagic завершилась ошибкой. */
				} else {
					// print 'Заявка успешно сохранена.';
				}
			} else {
				print 'Произошла непредвиденная ошибка';
			}



$frm = $_POST['frmid'];
$name = $_POST['name'];
$phone = $_POST['tel'];
$email = $_POST['email'];

$for_who = $_POST['for-who'];
$how_much_years = $_POST['years'];
$lech_before = $_POST['before'];
$agro = $_POST['agro'];
$type_ill = $_POST['type_narko'];

$utm_source = $_POST['utm_source'];
$utm_medium = $_POST['utm_medium'];
$utm_campaign = $_POST['utm_campaign'];
$utm_term = $_POST['utm_term'];
$source_type = $_POST['source_type'];
$source = $_POST['source'];
$position_type = $_POST['position_type'];
$position = $_POST['position'];
$added = $_POST['added'];
$creative = $_POST['creative'];
$matchtype = $_POST['matchtype'];
$location = $_POST['location'];
$url = $_POST['url'];
$title = $_POST['title'];

$subject = 'Заявка с rehabfamily.com';

//$headers= "From: noreply <noreply@noreply.ru>\r\n";
//$headers.= "Reply-To: noreply <noreply@noreply.ru>\r\n";
$headers.= "X-Mailer: PHP/" . phpversion()."\r\n";
$headers.= "MIME-Version: 1.0" . "\r\n";
$headers.= "Content-type: text/plain; charset=utf-8\r\n";

$to = "vanoja@mail.ru";

$message = "Форма: $frm\n\n";
$message .= "Имя: $name\n";
$message .= "Телефон: $phone\n\n";
$message .= "E-mail: $email\n\n";
$message .= "<br/>";

$message .= "Для кого лечение: $for_who\n\n";
$message .= "Сколько лет вы уже боритесь с зависимостью: $how_much_years\n\n";
$message .= "Ранее уже проходили лечения: $lech_before\n\n";
$message .= "Были случаи агрессивного поведения: $agro\n\n";
$message .= "Тип возможного заболевания: $type_ill\n\n";

$message .= "<br/>";

// $message .= "Источник: $utm_source\n";
// $message .= "Тип источника: $utm_medium\n";
// $message .= "Кампания: $utm_campaign\n";
// $message .= "Ключевое слово: $utm_term\n";
// $message .= "Тип площадки(поиск или контекст): $source_type\n";
// $message .= "Площадка: $source\n";
// $message .= "Спецразмещение или гарантия: $position_type\n";
// $message .= "Позиция объявления в блоке: $position\n";
// $message .= "Показ по дополнительным ролевантным фразам: $added\n";
// $message .= "Идентификатор объявления: $creative\n";
// $message .= "Тип соответствия ключа(e-точное/p-фразовое/b-широкое): $matchtype\n\n";
$message .= "Гео-положение отправителя: $location\n\n";
$message .= "Ссылка на сайт: $url\n";
$message .= "Заголовок: $title\n\n";

mail ($to,$subject,$message,$headers);







?>