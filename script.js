




var bdrum = new Audio();
bdrum.src = "../sprint-9/audio/909/bdrum1.WAV";

var clap = new Audio();
clap.src = "../sprint-9/audio/909/clap1.WAV";
var crash = new Audio();
crash.src = "../sprint-9/audio/909/crash.WAV";
var hhclose = new Audio();
hhclose.src = "../sprint-9/audio/909/hhclose.WAV";
var hhopena = new Audio();
hhopena.src = "../sprint-9/audio/909/hhopena.WAV";

var hhopenb = new Audio();
hhopenb.src = "../sprint-9/audio/909/hhopenb.WAV";

var perca = new Audio();
perca.src = "../sprint-9/audio/909/perca.wav";

var percb = new Audio();
percb.src = "../sprint-9/audio/909/percb.wav";

var percc = new Audio();
percc.src = "../sprint-9/audio/909/percc.wav";

var percd = new Audio();
percd.src = "../sprint-9/audio/909/percd.wav";

var ride = new Audio();
ride.src = "../sprint-9/audio/909/ride.WAV";

var rimshot = new Audio();
rimshot.src = "../sprint-9/audio/909/rimshot.WAV";

var snare = new Audio();
snare.src = "../sprint-9/audio/909/snare.WAV";

var toma = new Audio();
toma.src = "../sprint-9/audio/909/toma.WAV";

var tomb = new Audio();
tomb.src = "../sprint-9/audio/909/tomb.WAV";

var tomc = new Audio();
tomc.src = "../sprint-9/audio/909/tomc.WAV";

function loadContent(num){
    bleep.play(); // Play button sound now
    bloop.play();
    bdrum.play();
    perca.play()
}



//document.addEventListener('DOMContentLoaded', start)

//soundManager.setup({
//  url: '../sprint-9/audio/swf',
//  onready: function() {
//    var mySound = soundManager.createSound({
//      id: 'btn.s0',
//     url: '../sprint-9/audio/909/BDRUM1.WAV'
//    });
//    mySound.play();
//  },
//  ontimeout: function() {
//    // Hrmm, SM2 could not start. Missing SWF? Flash blocked? Show an error, etc.?
//  }
//});
//const [btn-s0] = new Audio("../sprint-9/audio/909/BDRUM1.WAV")



//var playSound = soundManager.getSoundById(soundManager.play);
//btn-s0.addEventListener("click", playSound);
//console.log(playSound);

//function modifyText() {
//  var t2 = document.getElementById("t2");
//  if (t2.firstChild.nodeValue == "three") {
 //   t2.firstChild.nodeValue = "two";
//  } else {
//    t2.firstChild.nodeValue = "three";
//  }
//}

// add event listener to table
// var el = document.getElementById("outside");
// el.addEventListener("click", modifyText, false);

