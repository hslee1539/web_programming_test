var audio = document.getElementById("mainAudio");
document.onkeydown = function(e){
    if(e.keyCode == 83){
        audio.pause();
    }
    else{
        audio.play();
    }
}