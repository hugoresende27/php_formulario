<?php

$nome =htmlspecialchars($_POST['nome']);
$mail =htmlspecialchars($_POST['mail']);
$tele =htmlspecialchars($_POST['tele']);
$site =htmlspecialchars($_POST['site']);
$msg =htmlspecialchars($_POST['msg']);


if (!empty ($mail) && !empty($msg) ) 
{       //se mail e mensagem vazia
   // if(filter_var($mail, FILTER_VALIDATE_mail)){
        $receiver = "hugoresende27@gmail.com"; //enter that mail address where you want to receive all messages
        $subject = "From: $nome <$mail>";
        $body = "nome: $nome\nEmail: $mail\nTelemóvel: $tele\nWebsite: $site\n\nMensagem:\n$msg\n\nCumprimentos,\n$nome";
        $sender = "From: $mail";
       
        if(mail($receiver, $subject, $body, $sender)){
        echo "Mensagem enviada";
        }else{
        echo "Sorry, failed to send your message!";
        }
    }else{
        echo "Enter a valid mail address!";
    }
//}else{echo "mail and message field is required!";}

?>