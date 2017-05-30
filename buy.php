<?php
    $to = 'jakovskid@gmail.com, gavryliukdmytro@gmail.com';
    $subject = 'Новый заказ на сайте protectorplus.com.ua'; 
    $message = '
            <html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>
                    <p>Імя: <strong> '.$_POST['name'].'  </strong>  </p>
                    <p>Телефон:  <strong>  '.$_POST['phone'].'  </strong> </p>
                    <p>Название товара :  <strong>  '.$_POST['title'].'  </strong> </p>
                    <p>Размер сумки:  <strong>  '.$_POST['size'].'  </strong> </p>
                    <br>                       
                </body>
            </html>';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From:".$_POST['name']."<letswork>\r\n";
    mail($to, $subject, $message, $headers);
?>