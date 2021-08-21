let mysong =document.getElementById("mysong");
let playBtn =document.getElementById("playBtn");

playBtn.onclick =function()
{
    if(mysong.paused){
        mysong.play();
        playBtn.src= "/pause.png";
    }else{
        mysong.pause();
        playBtn.src= "/play.png";
    }
}
