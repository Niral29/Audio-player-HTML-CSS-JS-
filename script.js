let progress=document.getElementById("progress");
let song=document.getElementById("song");
let controllicon=document.getElementById("ctrlicn");

song.onloadeddata=function(){
    progress.max=song.duration;
    progress.value=song.currentTime;


}

    function playpause(){
        if(controllicon.classList.contains("fa-pause")){
            song.pause();
            controllicon.classList.remove("fa-pause");
           
            controllicon.classList.add("fa-play");
          
        }
        else{
            song.play();
            controllicon.classList.add("fa-pause");
            controllicon.classList.remove("fa-play");
           
        }
    }


    

