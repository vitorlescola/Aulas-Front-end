const pk=document.getElementById("pk");
const btn=document.getElementById("btn");

const estados={
    inc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5fQ-viu4mZQhnPndivHSsTFNkZGmhp46x7QZr5v93lCc7PirX6UcFtiJAmpyjAqh90KoVUmqWTLN6pSSwyoSi3R_lS3zUCqgf79yPANA&s=10",
    ang:"https://media.tenor.com/K0eklZ0QQVwAAAAe/mad-angry.png",
    gvu:"https://i.pinimg.com/736x/b2/cc/0b/b2cc0b2239d9c5b7a26693417dd9db68.jpg",
    hpy:"https://i.pinimg.com/originals/62/a3/a4/62a3a4cd36114ae37b836503d4ea77a7.gif",
    eat:"https://gifdb.com/images/high/annoyed-pichu-eating-a-fruit-pqv3dzavc9sq55hj.gif",
    fll:"https://pbs.twimg.com/media/FERC3EzXMAssgEf.jpg",
}

let contador=0;
let intervalo=null;
let timeClick=null;
let timeOut=null;
let quant=0;
let fin=false;

function controlador(){
    if(intervalo) clearInterval(intervalo);
    intervalo=setInterval(()=>{
        contador++;

        console.log("Tempo: ",contador);

        if(contador>=60&&fin===false){
            pk.src=estados.gvu;
        }else if(contador>=30){
            pk.src=estados.ang;
        }
    },1000);
}

function fim(){
    fin=true;
    pk.src=estados.fll;
    document.getElementById("comendo").style="display:block";
    document.getElementById("comendo").textContent="Você comeu tudo!";
    btn.style="display:none";
}

function alimentar(){
    pk.src=estados.eat;
    document.getElementById("comendo").style="display:block";
    contador=0;
    console.log("hm hm hm");

    if(timeClick) clearInterval(timeClick);
    timeClick=setTimeout(()=>{  //faz, espera o tempo, faz de novo
        if(fin===false){
            pk.src=estados.hpy;
        }
        timeOut=setTimeout(()=>{
            if(fin===false){
            pk.src=estados.inc;
            quant++;
            document.getElementById("comendo").style="display:none";
            document.getElementById("quant").textContent=`Quantidade comida: ${quant}/10`;
            }
        },2000);       
    },2000);

    if(quant>=10){
        fim();
    }
}

controlador();