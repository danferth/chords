```
                                                                                                      
    ,o888888o.    8 8888        8     ,o888888o.     8 888888888o.   8 888888888o.        d888888o.   
   8888     `88.  8 8888        8  . 8888     `88.   8 8888    `88.  8 8888    `^888.   .`8888:' `88. 
,8 8888       `8. 8 8888        8 ,8 8888       `8b  8 8888     `88  8 8888        `88. 8.`8888.   Y8 
88 8888           8 8888        8 88 8888        `8b 8 8888     ,88  8 8888         `88 `8.`8888.     
88 8888           8 8888        8 88 8888         88 8 8888.   ,88'  8 8888          88  `8.`8888.    
88 8888           8 8888        8 88 8888         88 8 888888888P'   8 8888          88   `8.`8888.   
88 8888           8 8888888888888 88 8888        ,8P 8 8888`8b       8 8888         ,88    `8.`8888.  
`8 8888       .8' 8 8888        8 `8 8888       ,8P  8 8888 `8b.     8 8888        ,88'8b   `8.`8888. 
   8888     ,88'  8 8888        8  ` 8888     ,88'   8 8888   `8b.   8 8888    ,o88P'  `8b.  ;8.`8888 
    `8888888P'    8 8888        8     `8888888P'     8 8888     `88. 8 888888888P'      `Y8888P ,88P' 

=======================================================================================================
```

## Introduction

This is a small pet project started cause... lazy.  

Lazy in the sense that I will spend an exorbitant amount of time building this so I don't have to go the manual route in finding what this web app will accomplish.

## Background

I play guitar among a few other instruments and wanted to find random chord patterns to play because I get stuck on one and every time I pick up the guitar I start playing the same progression and eventually I'm so sick of it I don't want to play anymore.

So started to think of ways to generate random keys and patterns to play just to keep myself entertained.  

## In came the dice

So rolling dice can generate a random number, and having about 5 pounds of various sided dice I began to experiment with different sided dice to accomplish a system of rolling a few dice and gathering a key to play and a set of diatonic chords to form a progression of sorts. *(sorry, but a tad bit of theory is needed to understand this concept.)*.

- A 12 sided die would set the key
- A D&D emotion die set the mode *(minor or Major)* 
- A few other 4, 5, 6 sided dice would set the diatonic chords to play in the progression
 
i.e. roll a 3 (*key is Bb)* roll a smiley face *(Major)* then rolls the chord dice, say 1,5,2 *(BbMaj, FMaj, Cmin)*.

- Play with it till a pattern sounds fun
- Turn on the looper and sketch out a rhythm
- Jam over it
- If it sounded gross, rinse & repeat.

This is all good and well but like I said I'm lazy, so wasn't rolling the dice and started getting stuck on a progression for a few days.

##  Duh, I can build something for this

So here we are, a small web app to pull up on the phone and it will give spit out a random this and that. 
**Great let's jam!**

But then the developer side of me kept going....

It is now something that has become a small monster as I keep thinking of ways to make it better and make it more fun and blah blah blah.

We all know this path....

## So what now

Well if you’re a developer/musician just download and put it on a server and run, if you’re not a developer you can find it at [here](http://chords.danferth.com) if you want to use it.

## How to use it?

- Open the [page](http://chords.danferth.com)
- It will automatically output a random sequence with 3 chords utilizing all seven diatonic chords in either Major or minor
- Hit the meh button at the bottom if it's not to your taste to get another set
- Press the sliders button at the top to see the **settings** to customize the output

### Settings

- Set mode: [Auto, Major, minor]
- How many chords: number of chords to output [default is 3]
- Which chords can we use: here you can set which diatonic chords to use in the set
- predestined bliss: This will pick from a set of predefined chord progressions to ensure a good sounding pattern. The key is random though


## Things to note

- This was built for mobile although it will work on any device, just may not look as nice on a desktop.
- It's a pet so the code hasn't been refactored or optimized yet *(keep thinking of ideas)* and there may be a bug or two if your just downloading from here. [Most stable version is online](http://chords.danferth.com)
- You can use it if you like for personal use but if you want to post this to your website just give me credit for it and let me k

