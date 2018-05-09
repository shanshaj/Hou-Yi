var frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
<<<<<<< HEAD
    playbackConst =3200, 
    // get page height from video duration
//    setHeight = document.getElementById("set-height"), 
=======
    playbackConst = 400, 
    // get page height from video duration
    setHeight = document.getElementById("set-height"), 
>>>>>>> ba834acb77516038d742f8fb7bfe0db52109eae6
    // select video element         
    vid = document.getElementById('v0'); 
    // var vid = $('#v0')[0]; // jquery option

//// dynamically set the page height according to video length
//vid.addEventListener('loadedmetadata', function() {
//  setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
//});


// Use requestAnimationFrame for smooth playback
function scrollPlay(){  
<<<<<<< HEAD
  var frameNumber = window.pageYOffset * 9.7 / (playbackConst);
=======
  var frameNumber  = window.pageYOffset *1.3 / (playbackConst);
>>>>>>> ba834acb77516038d742f8fb7bfe0db52109eae6
  vid.currentTime  = frameNumber;
  window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);