<?php 

$body="";

$body.='Name: '.$_POST["name"].'\n';
$body.='Email: '.$_POST["email"].'\n';
$body.='Phone: '.$_POST["phone"].'\n';
$body.='Message: '.$_POST["message"].'\n';

//var_dump($_POST);

echo mail('me@preetham.in','Message on preetham.in',$body);

?>