<?php
//start a session if one isn't started
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
//grab the config file (functions file is required within)
require('config.php');

//*************************************
//START form stuffs

//set $hasForm to true before
//"include $_SERVER['DOCUMENT_ROOT'].'/head.php';"
//on any page that contains a form
if($hasForm){
  if(isset($_SESSION['formLoadTime'])){
    unset($_SESSION['formLoadTime']);
    $_SESSION['formLoadTime'] = time();
  }else{
    $_SESSION['formLoadTime'] = time();
  };
  //grab the get from parse file
  $first_name = $_GET['first_name'];
  //grab get and custom fields
  if(isset($_GET['success'])){
  	$form_success = $_GET['success'];
  }
  $rand_str1 = substr(md5(rand()), 0, 7);
  $rand_str2 = substr(md5(rand()), 0, 7);
}
//END form stuffs
//*************************************
?>


<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title><?php echo $title; ?></title>
        <meta name="description" content="<?php echo $description; ?>">
        <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1">
        <meta name="msapplication-tap-highlight" content="no" />

        <!-- ***********FAVICON SETTINGS****************** -->
        <!-- generated with the heros at https://realfavicongenerator.net/ -->
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-touch-icon.png?v=2.0.0">
				<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon-32x32.png?v=2.0.0">
				<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicons/favicon-16x16.png?v=2.0.0">
				<link rel="manifest" href="/assets/favicons/site.webmanifest?v=2.0.0">
				<link rel="mask-icon" href="/assets/favicons/safari-pinned-tab.svg?v=2.0.0" color="#2c3035">
				<link rel="shortcut icon" href="/assets/favicons/favicon.ico?v=2.0.0">
				<meta name="apple-mobile-web-app-title" content="chords">
				<meta name="application-name" content="chords">
				<meta name="msapplication-TileColor" content="#2c3035">
				<meta name="msapplication-config" content="/assets/favicons/browserconfig.xml?v=2.0.0">
				<meta name="theme-color" content="#ffffff">
        <!-- ***********END FAVICON SETTINGS****************** -->
        
        <!-- Humans.txt-->
        <link type="text/plain" rel="author" href="/humans.txt">
        
        <!-- You know what would be cool? some google font action! -->
        <!-- Well..... we're waiting on the fonts bruh -->
        <link href="https://fonts.googleapis.com/css?family=EB+Garamond|Ubuntu" rel="stylesheet">
        <!-- css -->
        <link rel="stylesheet" href="/assets/build/css/site.css?ver=<?php echo $v; ?>">
        <?php
					if(isset($_GET['success'])){
						echo ("<script type='text/javascript'> var form_success = '" . $form_success . "'; </script>");
					}else{
						echo ("<script type='text/javascript'> var form_success = 'noForm'; </script>");
					}
				?>
    </head>
    <body class="no-js">
    <?php
    //need loader
      if($loader){
        echo "<div class='loader'></div>";
      }
    ?>
