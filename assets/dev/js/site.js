// ==============================================================
// =============================DATA=============================
// ==============================================================
// KEYS set of keys to choose from
var KEYS = [
	{
		"KEY" : "A<sup>b</sup>",
		"Major" : ["A<sup>b</sup>", "B<sup>b</sup>", "C", "D<sup>b</sup>", "E<sup>b</sup>", "F", "G"],
		"minor" : ["A<sup>b</sup>", "B<sup>b</sup>", "C<sup>b</sup>", "D<sup>b</sup>", "E<sup>b</sup>", "F<sup>b</sup>", "G<sup>b</sup>"]
	},
	{
		"KEY" : "A",
		"Major" : ["A", "B", "C<sup>#</sup>", "D", "E", "F<sup>#</sup>", "G<sup>#</sup>"],
		"minor" : ["A", "B", "C", "D", "E", "F", "G"]
	},
	{
		"KEY" : "B<sup>b</sup>",
		"Major" : ["B<sup>b</sup>", "C", "D", "E<sup>b</sup>", "F", "G", "A"],
		"minor" : ["B<sup>b</sup>", "C", "D<sup>b</sup>", "E<sup>b</sup>", "F", "G<sup>b</sup>", "A<sup>b</sup>"]
	},
	{
		"KEY" : "B",
		"Major" : ["B", "C<sup>#</sup>", "D<sup>#</sup>", "E", "F<sup>#</sup>", "G<sup>#</sup>", "A<sup>#</sup>"],
		"minor" : ["B", "C<sup>#</sup>", "D", "E", "F<sup>#</sup>", "G", "A"]
	},
	{
		"KEY" : "C",
		"Major" : ["C", "D", "E", "F", "G", "A", "B"],
		"minor" : ["C", "D", "E<sup>b</sup>", "F", "G", "A<sup>b</sup>", "B<sup>b</sup>"]
	},
	{
		"KEY" : "D<sup>b</sup>",
		"Major" : ["D<sup>b</sup>", "E<sup>b</sup>", "F", "G<sup>b</sup>", "A<sup>b</sup>", "B<sup>b</sup>", "C"],
		"minor" : ["D<sup>b</sup>", "E<sup>b</sup>", "F<sup>b</sup>", "G<sup>b</sup>", "A<sup>b</sup>", "B<sup>bb</sup>", "C<sup>b</sup>"]
	},
	{
		"KEY" : "D",
		"Major" : ["D", "E", "F<sup>#</sup>", "G", "A", "B", "C<sup>#</sup>"],
		"minor" : ["D", "E", "F", "G", "A", "B<sup>b</sup>", "C"]
	},
	{
		"KEY" : "E<sup>b</sup>",
		"Major" : ["E<sup>b</sup>", "F", "G", "A<sup>b</sup>", "B<sup>b</sup>", "C", "D"],
		"minor" : ["E<sup>b</sup>", "F", "G<sup>b</sup>", "A<sup>b</sup>", "B<sup>b</sup>", "C<sup>b</sup>", "D<sup>b</sup>"]
	},
	{
		"KEY" : "E",
		"Major" : ["E", "F<sup>#</sup>", "G<sup>#</sup>", "A", "B", "C<sup>#</sup>", "D<sup>#</sup>"],
		"minor" : ["E", "F<sup>#</sup>", "G", "A", "B", "C", "D"]
	},
	{
		"KEY" : "F",
		"Major" : ["F", "G", "A", "B<sup>b</sup>", "C", "D", "E"],
		"minor" : ["F", "G", "A<sup>b</sup>", "B<sup>b</sup>", "C", "D<sup>b</sup>", "E<sup>b</sup>"]
	},
	{
		"KEY" : "F<sup>#</sup>",
		"Major" : ["F<sup>#</sup>", "G<sup>#</sup>", "A<sup>#</sup>", "B", "C<sup>#</sup>", "D<sup>#</sup>", "E<sup>#</sup>"],
		"minor" : ["F<sup>#</sup>", "G<sup>#</sup>", "A", "B", "C<sup>#</sup>", "D", "E"]
	},
	{
		"KEY" : "G",
		"Major" : ["G", "A", "B", "C", "D", "E<sup>b</sup>", "F<sup>#</sup>"],
		"minor" : ["G", "A", "B<sup>b</sup>", "C", "D", "E", "F"]
	}
];
// MODES
var MODES = ["Major", "minor"];
// CHORDS
var Major_CHORDS = ["I", "ii", "iii", "IV", "V", "vi", "vii°"];
var minor_CHORDS = ["i", "ii°", "III", "iv", "v", "VI", "VII"];
// chord types
var append = [
	{
		"Major" : ["M", "m", "m", "M", "M", "m", "°"],
		"minor" : ["m", "°", "M", "m", "m", "M", "M"]
	}
];
//Bliss
var BLISS = [
	{
		"mode"	 : "minor",
		"chords" : [0, 3, 0, 4, 3]
	},
	{
		"mode"	 : "Major",
		"chords" : [0, 3, 0, 4, 3]
	},
	{
		"mode"   : "Major",
		"chords" : [1, 4, 0]
	},
	{
		"mode"   : "Major",
		"chords" : [5, 2, 3, 1]
	},
	{
		"mode"   : "minor",
		"chords" : [0, 5, 6]
	},
	{
		"mode"   : "minor",
		"chords" : [0, 5, 2, 6]
	},
	{
		"mode"   : "minor",
		"chords" : [0, 6, 5, 4]
	},
	{
		"mode"   : "Major",
		"chords" : [5, 3, 0, 4]
	},
	{
		"mode"   : "Major",
		"chords" : [3, 0, 4, 5]
	},
	{
		"mode"   : "Major",
		"chords" : [0, 4, 5, 3]
	},
	{
		"mode"   : "Major",
		"chords" : [0, 5, 3, 4]
	},
	{
		"mode"   : "Major",
		"chords" : [0, 5, 1, 4]
	},
	{
		"mode"   : "Major",
		"chords" : [0, 4, 5, 2, 3]
	},
	{
		"mode"   : "minor",
		"chords" : [0, 3, 6]
	},
	{
		"mode"   : "minor",
		"chords" : [1, 4, 0]
	}
	];

//go nuts!
//to have something parse before anything else add the code to ../lib/AAA.js it is the first file in the concatenation process
//initialize foundation
$(document).foundation();


//doc ready
$(document).ready(function(){
// =========================================
// ================functions================
// ========================================= 
  
  
//GET random number
var getRandom = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var formatChords = function(array){
  var result = "";
  for(i = 0; i < array.length; i++){
    result += "<span class='chord'>"+array[i]+"</span>";
  }
  return result;
};
  
//function to verify available to use (returns boolean)
var VERIFY_CHORD = function(test, array){
  for(c = 0; c < array.length; c++){
    if(test === array[c]){
      return true;
    }
  }
  return false;
};  
//============================================
//===================Music stuffs=============
//============================================

//global music variables
var Rkey_num;
var Rmode_num;
var Rchords_num;
var Bliss = false;
//GET random Key
var GET_KEY = function(){
	var KEYS_length = KEYS.length -1;
	
	var KEYS_random = getRandom(0,KEYS_length);
	var result = KEYS[KEYS_random].KEY;
  //set global 
  Rkey_num = KEYS_random;
	return result;
};

//GET random MODE
var GET_MODE = function(){
  var result;
  var preset_mode = $('input[name="set_mode"]:checked').val();
  if(preset_mode === "auto"){
    var MODE_num = getRandom(0,1);
    result = MODES[MODE_num];
  }else{
    result = preset_mode;
  }
  //set global
  Rmode_num = result;
  return result;
}; 
  
// GET CHORD number (how many chords we can have)
// ==============================================
var CHORD_NUMBER = function(){
  var result;
  // is it auto or set in the UI
  var CHORD_num_set = $('input[name="numOfChords"]:checked').val();
	result = CHORD_num_set;
	return result;
};
  
// GET CHORD SET
// =============
// n = number of chords desired in result
var GET_CHORD_SET = function(n){ 
	//what chords can we play with
  var CHORD_available = $('input[name="chordList"]:checked').map(function(){
  	return parseInt($(this).val(), 10);
   }).get();
  if(CHORD_available.length == 0){
    CHORD_available = [0, 3, 4];
  }
	//array for verified CHORD numbers to be pushed to
	var result = [];
  //loop through and generate list
  while(result.length < n){
    var hold_num = getRandom(0,6);
  	if(VERIFY_CHORD(hold_num, CHORD_available)){
  	result.push(hold_num);
  	}
  }
  //set global
  Rchords_num = result;
  return result;

}; //END GET_CHORD_SET 
  
// GET CHORDS
// ==========
var GET_CHORDS = function(CHORD_SET){
  //start with empty array to put them in
	var result = [];
  var CHORD_set = CHORD_SET;
	//Loop through chord array to get proper chords
	if(MODE === "Major"){
	  for(i = 0; i < CHORD_set.length; i++){
	    result.push(Major_CHORDS[CHORD_set[i]]);
	  }
	}
	if(MODE === "minor"){
	  for(i = 0; i < CHORD_set.length; i++){
	    result.push(minor_CHORDS[CHORD_set[i]]);
	  }
	}
	return result;
};  

//get key notes
var GET_KEY_NOTES = function(){
  var result = KEYS[Rkey_num][Rmode_num];
  return result;
};

//get chords with notes for toggle of chord numbers
var GET_CHORD_NOTES = function(){
	var key = Rkey_num;
	var mode = Rmode_num;
	var chords = Rchords_num;

	var result = [];
	
	for(i = 0; i < chords.length; i++){
		var chord_number = chords[i];
		var hold_note = KEYS[key][mode][chord_number];
		var hold_append = append[0][mode][chord_number];
		var together = hold_note+hold_append;
		result.push(together);
	}
	
	return result;
};
  
//INITIAL load of page
var KEY 				= GET_KEY(),
		MODE				= GET_MODE(),
		NUMBER			= CHORD_NUMBER(),
		CHORD_SET 	= GET_CHORD_SET(NUMBER),
		CHORDS			= GET_CHORDS(CHORD_SET),
		KEYnotes		= GET_KEY_NOTES(),
		CHORD_NOTES = GET_CHORD_NOTES();
$('.KEY').html(KEY);
$('.MODE').html(MODE);
$('.NOTES').html(formatChords(KEYnotes));
$('.CHORDS').html(formatChords(CHORDS));
$('.CHORDnotes').html(formatChords(CHORD_NOTES));


//on click of button

var buttonAnimation = new TimelineMax({paused:true});
		buttonAnimation.to('.button', .1, {scale:.90, ease: Power3.easeOut});
		buttonAnimation.to('.button', .125, {scale:1, ease: Power3.easeOut});

  $('.button').on('click', function(){
  	buttonAnimation.play(0);
    //do stuff when It's clicked
    if(Bliss == false){
    	KEY 				= GET_KEY();
    	MODE				= GET_MODE();
    	NUMBER			= CHORD_NUMBER();
    	CHORD_SET 	= GET_CHORD_SET(NUMBER);
    	CHORDS			= GET_CHORDS(CHORD_SET);
    	KEYnotes		= GET_KEY_NOTES();
    	CHORD_NOTES = GET_CHORD_NOTES();

    	$('.KEY').html(KEY);
    	$('.MODE').html(MODE);
    	$('.NOTES').html(formatChords(KEYnotes));
    	$('.CHORDS').html(formatChords(CHORDS));
    	$('.CHORDnotes').html(formatChords(CHORD_NOTES));
    }else{
    	//get a random bliss
    	var setBliss = BLISS[getRandom(0, BLISS.length-1)];
    	Rmode_num = setBliss.mode;
			Rchords_num = setBliss.chords;
    	KEY = GET_KEY();
    	KEYnotes		= GET_KEY_NOTES();
    	MODE = setBliss.mode;
    	CHORDS			= GET_CHORDS(setBliss.chords);
    	CHORD_NOTES = GET_CHORD_NOTES();
    	$('.KEY').html(KEY);
    	$('.NOTES').html(formatChords(KEYnotes));
    	$('.MODE').html(MODE);
    	$('.CHORDS').html(formatChords(CHORDS));
    	$('.CHORDnotes').html(formatChords(CHORD_NOTES));
    }
  });

//setting open close stuff
//******************************
//hammer swipe to show goes here
//******************************
var navEl 					= document.getElementById('wrap');
var settingsEl			= document.getElementById('settings');
var outputEl				= document.getElementById('output');

var hammerWrap			= new Hammer(navEl);
var hammerSettings	= new Hammer(settingsEl);
var hammerOutput		= new Hammer(outputEl);

TweenMax.set('.settings', {x:500, scale:-1.25, height:"50vh"});

var openSettings		= new TimelineMax({paused:true});
		openSettings.to('.output', .25, {x:-500, scale:1.25, height:"50vh",  autoAlpha:0});
		openSettings.to('.settings', .125, {x:0, scale:1, height:"100vh", autoAlpha:1}, '-=.125');

var openOutput			= new TimelineMax({paused:true});
		openOutput.to('.settings', .25, {x:500, scale:-1.25, height:"50vh", autoAlpha:0});
		openOutput.to('.output', .125, {x:0, scale:1, height:"100vh", autoAlpha:1}, '-=.125');

hammerOutput.on('swipeleft', function(e){
	openSettings.play(0);
});

hammerSettings.on('swiperight', function(e){
	openOutput.play(0);
});


//toggle the chord and chord note elements
TweenMax.set('.CHORDnotes', {rotationY:-90});

var chordAnimation = new TimelineMax({paused:true});
		chordAnimation.to('.CHORDS', .25, {rotationY:90, autoAlpha:0, display:'none'});
		chordAnimation.to('.CHORDnotes', .25, {rotationY:0, autoAlpha:1, display:'block'});
		
var chordNotesAnimation = new TimelineMax({paused:true});
		chordNotesAnimation.to('.CHORDnotes', .25, {rotationY:-90, autoAlpha:0, display:'none'});
		chordNotesAnimation.to('.CHORDS', .25, {rotationY:0, autoAlpha:1, display:'block'});

$('.CHORDS').on('click', function(e){
	chordAnimation.play(0);
});
$('.CHORDnotes').on('click', function(e){
	chordNotesAnimation.play(0);
});

//bliss toggle
var blissAnimation = new TimelineMax({paused:true});
		blissAnimation.to('.bliss h3', .5, {y:-50, autoAlpha:0, ease: Power2.easeIn});
		blissAnimation.to('.blissIcon', .5, {rotationX:180, y:50, autoAlpha:0, ease: Power2.easeIn}, '-=.5');
		blissAnimation.to('.set_mode', .5, {x:-300, autoAlpha:0}, '-=.25');
		blissAnimation.to('.chords_to_choose_from', .5, {x:300, autoAlpha:0}, '-=.5');
		blissAnimation.to('.num_of_chords', 1, {autoAlpha:0}, '-=.75');
		blissAnimation.set('.notBliss', {css:{'display':'none'}});
		blissAnimation.to('.settings', 1, {backgroundColor:'hsl(48, 100%, 93%)'}, '-=.5');
		blissAnimation.to('.bliss h3', .25, {y:0, autoAlpha:1}, '-=.25');
		blissAnimation.to('.blissIcon', .25, {y:0, autoAlpha:1}, '-=.25');


$('label[for="bliss"] i').on('click', function(e){
		//$(this).toggleClass('fa-thumbs-up');
		//$(this).toggleClass('fa-thumbs-down');
		
	if(!$('input#bliss').is(':checked')){
		blissAnimation.play(0);
		Bliss = true;
		//change bliss <h3>
		$('.bliss h3').html('you have chosen ... bliss');
		//for output page buton
		$('.button').toggleClass('blissSolid');
		$('.button').toggleClass('fa-meh-o');
		$('.button').toggleClass('fa-smile-o');
	}else{
		blissAnimation.reverse();
		Bliss = false;
		//change bliss <h3>
		$('.bliss h3').html('predestined bliss?');
		//for output page buton
		$('.button').toggleClass('blissSolid');
		$('.button').toggleClass('fa-meh-o');
		$('.button').toggleClass('fa-smile-o');
	}
});
}); //END Doc.ready


//doc load
$(window).on('load', function(){

  var openAnimation = new TimelineMax();
  		openAnimation.staggerFrom('.outputEl', .75, {rotationX: 90, alpha:0, ease: Back.easeOut.config(5)}, .125);
  		openAnimation.to('.button', .5, {rotationY: 360}, '-=.65');
  		openAnimation.pause(0);
	
	var openAnimationStart = function(){
		openAnimation.play(0); 
	}
  
  
  //if loader play()
  var loaded = function(){
    if($('.loader').is(':visible')){
      console.log('loader detected <br/>');
      //loader animation  
      var loaderExit = new TimelineMax({onComplete: openAnimationStart});
          loaderExit.to('.loader', .5, {autoAlpha:0});
	  }
  };
	
  loaded();
}); //END WIN.load