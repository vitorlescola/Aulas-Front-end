let poder=0;
let mult=1;
let valor=20;
let comprados=0;
let fim=false;

const estados={
    kaio:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/08058935-1be6-4a21-8565-3c718332bfe3/df778et-e658f474-7b95-4dc0-8a5d-28bbb714db25.png/v1/fill/w_754,h_1059/goku_kaioken_1_png_by_12road12_df778et-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTc5NyIsInBhdGgiOiIvZi8wODA1ODkzNS0xYmU2LTRhMjEtODU2NS0zYzcxODMzMmJmZTMvZGY3NzhldC1lNjU4ZjQ3NC03Yjk1LTRkYzAtOGE1ZC0yOGJiYjcxNGRiMjUucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.QwUsOVtL-GXCV7QV8-E0aFNy-qAEya1iQ6MkqdtTwdg",
    ssj1:"https://www.transparentpng.com/download/goku/0Hk4Ku-goku-background.png",
    ssj2:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b88f884e-d134-4606-a5ab-0eb9bcfaaa36/dg3irwx-e5a8c0de-5c31-4721-949d-6b96649ecc14.png/v1/fill/w_501,h_1594/goku_ssj2_fp_png_format_by_gogitoytb_dg3irwx-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTU5NCIsInBhdGgiOiIvZi9iODhmODg0ZS1kMTM0LTQ2MDYtYTVhYi0wZWI5YmNmYWFhMzYvZGczaXJ3eC1lNWE4YzBkZS01YzMxLTQ3MjEtOTQ5ZC02Yjk2NjQ5ZWNjMTQucG5nIiwid2lkdGgiOiI8PTUwMSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.hjegqwLdl4SklQ1d2fdREzwniaEnoSfA2pTurnBNl_Q",
    ssj3:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b88f884e-d134-4606-a5ab-0eb9bcfaaa36/dg3ijop-2bb14161-b60e-4e4c-a29a-0c74d9142e5e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9iODhmODg0ZS1kMTM0LTQ2MDYtYTVhYi0wZWI5YmNmYWFhMzYvZGczaWpvcC0yYmIxNDE2MS1iNjBlLTRlNGMtYTI5YS0wYzc0ZDkxNDJlNWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ylfQGuN8ySz35__4Hr7CSHDw49DBogJxZU1WQkMByLw",
    ssj4:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c789a6c-dc0f-4c90-9977-471e89ef548d/dg1bvil-8b076e4e-a003-42c2-90d7-92ec46800035.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi83Yzc4OWE2Yy1kYzBmLTRjOTAtOTk3Ny00NzFlODllZjU0OGQvZGcxYnZpbC04YjA3NmU0ZS1hMDAzLTQyYzItOTBkNy05MmVjNDY4MDAwMzUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9_ZJy01940gtawgzk2Eje8x7yGq4uCkc-2GNhg9z9Cs",
    venc:"https://i.pinimg.com/originals/2b/66/00/2b6600305e44f6a54fc2647d59ee20ad.gif",
}

function treinar(){
    poder+=mult;
    document.getElementById("poder").textContent=`Poder: ${poder}`;
    //console.log(poder);

    if(Number(poder)>=valor&&!fim){
    //console.log("a");
    atualizar();
}
}

function atualizar(){
    //console.log("a");
    document.getElementById("formas").firstElementChild.classList.replace('forma','compravel');
    document.getElementById("formas").firstElementChild.addEventListener("click", comprar);
}

function comprar(){
    //console.log("comprado");
    document.getElementById("formas").firstElementChild.remove();
    mult+=1;
    poder-=valor;
    document.getElementById("poder").textContent=`Poder: ${poder}`;
    comprados++;

    //document.getElementById("img").src=estados.kaio;

    document.getElementById("h2").textContent=`Multiplicador: ${mult}x`;

    switch(comprados){
        case 1:
            valor=100;
            document.getElementById("img").src=estados.kaio;
            break;
        case 2:
            valor=500;
            document.getElementById("img").src=estados.ssj1;
            break;
        case 3:
            valor=1000;
            document.getElementById("img").src=estados.ssj2;
            break;
        case 4:
            valor=2000;
            document.getElementById("img").src=estados.ssj3;
            break;
        case 5:
            document.getElementById("img").src=estados.ssj4;
            fim=true;
            document.getElementById("victory").style="display:block";
            document.getElementById("vic").src=estados.venc;
            break;
        default:
            valor=999999999999999;
    }
}

setInterval(() => {
    auto();
}, 1000);

function auto(){
    setTimeout(() => {
        if(comprados>0){
            poder+=mult;
            document.getElementById("poder").textContent=`Poder: ${poder}`;
        }
    }, 1000);
}