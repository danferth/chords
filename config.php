<?php

//is the site in production
$production    = true;
//if not in production, what is the version for css and js
$version        = '1.3.0';

//SERVER & MAINTENANCE settings
$https          = true;
$maintenance  = [
                'status' => false,
                'file'   => 'maintenance.php'
                ];

//enable scripts
$gsap           = true;
$sweetalert     = false;
$hammer         = true;
$moment         = false;
$localforage    = false;

//google stuff
$googleAnalytics = "";
$gmailUser       = "user@gmail.com";
$gmailPass       = "passW0rd";

//global loader
$globalLoader   = true;

// functions
require('functions.php');
?>