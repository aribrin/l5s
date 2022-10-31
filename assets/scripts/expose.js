// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  
  //select a horn from the drop down menu
  const horn = document.getElementById('horn-select');
  horn.addEventListener('change', function hornSelect(event){
    
    //display image
    var image = document.querySelector('img[alt="No image selected"]');
    image.src = "assets/images/" + horn.value + ".svg";
    
    //load audio
    var aux = document.getElementsByClassName('hidden');
    aux[0].src = "assets/audio/" + horn.value + ".mp3";

  } );

  //change the volume
  const volumeSelector = document.getElementById('volume');
  volumeSelector.addEventListener('change', function volumeChange(event){
    
    var level = 3;
    if(volumeSelector.value < 67)
      level = 2;
    if(volumeSelector.value < 33)
      level = 1;
    if(volumeSelector.value == 0)
      level = 0;

    //set volume-level icon
    var icon = document.querySelector('img[alt="Volume level 2"]');
    icon.src = "assets/icons/volume-level-" + level + ".svg";
     
    //set volume for audio element
    var audio = document.getElementsByClassName('hidden');
    audio.volume = (volumeSelector.value)/100;
  } );

  //play sound when button is clicked
  const button = document.getElementsByTagName("button");
  button[0].addEventListener("click", function playSound(event){
    
    var sound = document.getElementsByTagName('audio');
    sound[0].play();
    
    if(horn.value == "party-horn"){
      const jsConfetti = new JSConfetti()
      jsConfetti.addConfetti()
    }

  } );




}




