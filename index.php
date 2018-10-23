<?php
//set title and description for page
$title        = 'chords';
$description  = 'random chords to jam to';
$pageLoader   = false;
include $_SERVER['DOCUMENT_ROOT'].'/assets/build/scaffold/head.php';
?>

<!-- START -->
<div class="wrap" id="wrap">
<div class="settings" id="settings">
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
  <p><a href="https://danferth.com"><i class="fa fa-user-circle-o"></i></a> | <a href="https://github.com/danferth/chords"><i class="fa fa-github"></i></a></p>
</div>

</div><!-- END settings -->

  <!--<div class="openNav"><i class="fa fa-sliders"></i></div>-->

<div class="output" id="output">

<span class="KEY"></span>

<span class="MODE"></span>
<span class="NOTES"></span>
<span class="CHORDS"></span>
<span class="CHORDnotes"></span>
  
<i class="button fa fa-meh-o"></i>
  
</div><!-- END output -->
  
</div> <!-- END wrap -->
<!-- END -->

<?php include $_SERVER['DOCUMENT_ROOT'].'/assets/build/scaffold/foot.php'; ?>