function start(){
    document.getElementById("home").style.display="none";
    document.getElementById("main").style.display="block";
}

function show(id){
    document.querySelectorAll(".card").forEach(c=>c.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

/* MUSIC */
const audio = document.getElementById("audio");

function play(){
    audio.play();
}

function pause(){
    audio.pause();
}

/* SLIDER */
let imgs = ["foto1.jpg","foto2.jpg","foto3.jpg"];
let i = 0;

function next(){
    i = (i + 1) % imgs.length;
    document.getElementById("img").src = imgs[i];
}

function prev(){
    i = (i - 1 + imgs.length) % imgs.length;
    document.getElementById("img").src = imgs[i];
}

/* TEXT EFFECT */
function endStory(){
    document.getElementById("blur").style.display="flex";

    let text = "Ini cerita kita...";
    let i = 0;
    let el = document.getElementById("text");

    let interval = setInterval(()=>{
        el.innerHTML += text[i];
        i++;
        if(i >= text.length) clearInterval(interval);
    },100);
}
