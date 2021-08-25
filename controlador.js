//  console.log("Hola mundo");
//Con esto me doy cuenta que java está funcionando//


let boton=document.getElementById("boton");
let foto1=document.getElementById("foto1");
let audio1=document.getElementById("audio1");
let titulo1=document.getElementById("titulo1");
let foto2=document.getElementById("foto2");
let audio2=document.getElementById("audio2");
let titulo2=document.getElementById("titulo2");
let foto3=document.getElementById("foto3");
let audio3=document.getElementById("audio3");
let titulo3=document.getElementById("titulo3");


boton.addEventListener("click", perroGuardian); //estoy haciendo un callback

//crear funciones, todas tienen () y abro siempre llaves
function perroGuardian(){
    //console.log("hiciste clic");
    titulo1.textContent="Just the way you are"
    foto1.src="img/just.jpg";
    audio1.src="audio/just.mp3"
    titulo2.textContent="Lazy Song"
    foto2.src="img/lazy.jpg";
    audio2.src="audio/lazy.mp3"
    titulo3.textContent="When I was your man"
    foto3.src="img/man.jpg";
    audio3.src="audio/man.mp3"
}


let boton2=document.getElementById("boton2");

boton2.addEventListener("click", Regresar);

function Regresar(){
    titulo1.textContent="That's What I Like"
    foto1.src="img/like.jpg";
    audio1.src="audio/like.mp3"
    titulo2.textContent="Locked Out of Heaven"
    foto2.src="img/heaven.jpg";
    audio2.src="audio/heaven.mp3"
    titulo3.textContent="Uptown Funk"
    foto3.src="img/uptown.jpg";
    audio3.src="audio/uptown.mp3"
}


