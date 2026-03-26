const pk=document.getElementById("pk");
const btn=document.getElementById("btn");

const estados={
    inc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5fQ-viu4mZQhnPndivHSsTFNkZGmhp46x7QZr5v93lCc7PirX6UcFtiJAmpyjAqh90KoVUmqWTLN6pSSwyoSi3R_lS3zUCqgf79yPANA&s=10",
    ang:"https://media.tenor.com/K0eklZ0QQVwAAAAe/mad-angry.png",
    gvu:"https://i.pinimg.com/736x/b2/cc/0b/b2cc0b2239d9c5b7a26693417dd9db68.jpg",
    hpy:"https://i.pinimg.com/originals/62/a3/a4/62a3a4cd36114ae37b836503d4ea77a7.gif",
    eat:"https://gifdb.com/images/high/annoyed-pichu-eating-a-fruit-pqv3dzavc9sq55hj.gif",
}

let contador=0;
let intervalo=null;
let timeClick=null;
let timeOut=null;

function controlador(){
    if(intervalo) clearInterval(intervalo);
    intervalo=setInterval(()=>{
        contador++;

        console.log("Tempo: ",contador);

        if(contador>=60){
            pk.src=estados.gvu;
        }else if(contador>=30){
            pk.src=estados.ang;
        }
    },1000);
}

function alimentar(){
    pk.src=estados.eat;
    contador=0;
    console.log("hm hm hm");

    if(timeClick) clearInterval(timeClick);
    timeClick=setTimeout(()=>{  //faz, espera o tempo, faz de novo
        pk.src=estados.hpy;
        timeOut=setTimeout(()=>{
            pk.src=estados.inc;
        },2000);       
    },2000);
}

controlador();