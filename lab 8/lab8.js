var player = document.getElementById("myplayer");

function playpause() {
  if (player.paused) { player.play();}
  else { play.pause();}
}

function Stopvideo(){
    player.pause();
    if (player.currentTime) { player.currentTime = 0; }
}

function Replayvideo() {
    player.currentTime = 0;
    player.play();
}

function IncreaseVolume() {
    if (player.volume > 0)
        player.volume = parseFloat(player.volume + 0.1).toFixed(1);
}

function DecreaseVolume() {
    if (player.volume > 0)
        player.volume = parseFloat(player.volume - 0.1).toFixed(1)
}

function MuteVolume() {
    if (player.muted) { player.muted = false;}
    else{ player.muted = true; }
}