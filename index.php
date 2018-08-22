<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">


<?php
$ver = rand(0,100000);
?>


<head>
  <meta charset="UTF-8">
  <link rel="apple-touch-icon" sizes="57x57" href="assets/img/apple-icon-57x57.png">
  <link rel="apple-touch-icon" sizes="60x60" href="assets/img/apple-icon-60x60.png">
  <link rel="apple-touch-icon" sizes="72x72" href="assets/img/apple-icon-72x72.png">
  <link rel="apple-touch-icon" sizes="76x76" href="assets/img/apple-icon-76x76.png">
  <link rel="apple-touch-icon" sizes="114x114" href="assets/img/apple-icon-114x114.png">
  <link rel="apple-touch-icon" sizes="120x120" href="assets/img/apple-icon-120x120.png">
  <link rel="apple-touch-icon" sizes="144x144" href="assets/img/apple-icon-144x144.png">
  <link rel="apple-touch-icon" sizes="152x152" href="assets/img/apple-icon-152x152.png">
  <link rel="apple-touch-icon" sizes="180x180" href="assets/img/apple-icon-180x180.png">
  <link rel="icon" type="image/png" sizes="32x32" href="assets/img/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="96x96" href="assets/img/favicon-96x96.png">
  <link rel="icon" type="image/png" sizes="16x16" href="assets/img/favicon-16x16.png">
  <title>CHORDS</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" />

  <link href="https://fonts.googleapis.com/css?family=EB+Garamond|Ubuntu" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css" />

  <!-- uncomment for development-->
  <link rel="stylesheet" href="assets/css/style.css?ver=<?php echo $ver; ?>">
  <!--<link rel="stylesheet" href="assets/css/style.css?ver=3.1.0">-->

  
</head>

<body>

  <div class="wrap">
<div class="settings">
<div class="set_mode">
  <h3>set mode</h3>
  <div class="group">
    <input id="mode_auto" type="radio" name="set_mode" value="auto" checked><label for="mode_auto">Auto</label>
    <input id="mode_Major" type="radio" name="set_mode" value="Major"><label for="mode_Major">Major</label>
    <input id="mode_minor" type="radio" name="set_mode" value="minor"><label for="mode_minor">minor</label>
  </div>
</div>



<div class="num_of_chords">
  <h3>how many chords?</h3>
  <div class="group">
    <input id="oneChord" type="radio" name="numOfChords" value="1"><label for="oneChord">1</label>
    <input id="twoChord" type="radio" name="numOfChords" value="2"><label for="twoChord">2</label>
    <input id="threeChord" type="radio" name="numOfChords" value="3" checked><label for="threeChord">3</label>
    <input id="fourChord" type="radio" name="numOfChords" value="4"><label for="fourChord">4</label>
    <input id="fiveChord" type="radio" name="numOfChords" value="5"><label for="fiveChord">5</label>
  </div>
</div>

<div class="chords_to_choose_from">
  <h3>which chords can we use?</h3>
  <div class="group">
    <input id="Chord-0" type="checkbox" name="chordList" value="0" checked><label for="Chord-0">1</label>
    <input id="Chord-1" type="checkbox" name="chordList" value="1" checked><label for="Chord-1">2</label>
    <input id="Chord-2" type="checkbox" name="chordList" value="2" checked><label for="Chord-2">3</label>
    <input id="Chord-3" type="checkbox" name="chordList" value="3" checked><label for="Chord-3">4</label>
    <input id="Chord-4" type="checkbox" name="chordList" value="4" checked><label for="Chord-4">5</label>
    <input id="Chord-5" type="checkbox" name="chordList" value="5" checked><label for="Chord-5">6</label>
    <input id="Chord-6" type="checkbox" name="chordList" value="6" checked><label for="Chord-6">7</label>
  </div>
</div>

<div class="bliss">
  <h3>predestined bliss?</h3>
  <div class="group">
    <input id="bliss" type="checkbox" name="bliss" value="0" ><label for="bliss"><i class="fa fa-thumbs-down"></i></label>
  </div>
</div>

<div class="footnote">
  <p>Created to help be creative by <a href="http://danferth.com">danferth</a></p>
</div>

</div><!-- END settings -->

  <div class="openNav"><i class="fa fa-sliders"></i></div>

<div class="output">
<span class="KEY animated fadeIn"></span>

<span class="MODE animated fadeIn"></span>
<span class="NOTES animated fadeIn"></span>
<span class="CHORDS animated fadeIn"></span>
<span class="CHORDnotes animated fadeIn"></span>
  
<i class="button fa fa-meh-o"></i>
  
</div><!-- END output -->
  
</div> <!-- END wrap -->
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script>

  
    <!-- uncomment for development-->
    <script  src="assets/js/index.js?ver=<?php echo $ver; ?>"></script>
    <!--<script  src="assets/js/index.js?ver=3.1.0"></script>-->




</body>

</html>
