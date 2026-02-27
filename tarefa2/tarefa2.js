//document.getElementById("darkMode").onclick.style.setProperty('--background', 'var(--background-dark)')
/*document.getElementById("introducao").onclick=function(){
    document.getElementById("introducao").style.backgroundColor="cyan";
}*/

function avaliar(){
    const q1=document.querySelector('input[name="q1"]:checked').value;
    const q2=document.querySelector('input[name="q2"]:checked').value;
    const q3=document.querySelector('input[name="q3"]:checked').value;
    const q4=document.querySelector('input[name="q4"]:checked').value;
    const q5=document.querySelector('input[name="q5"]:checked').value;
    const q6=document.querySelector('input[name="q6"]:checked').value;
    const q7=document.querySelector('input[name="q7"]:checked').value;
    const q8=document.querySelector('input[name="q8"]:checked').value;
    const q9=document.querySelector('input[name="q9"]:checked').value;
    const q10=document.querySelector('input[name="q10"]:checked').value;
    let nota=0;

    if(q1==='c'){
        nota++;
    }

    if(q2==='c'){
        nota++;
    }

    if(q3==='c'){
        nota++;
    }

    if(q4==='c'){
        nota++;
    }

    if(q5==='c'){
        nota++;
    }

    if(q6==='c'){
        nota++;
    }

    if(q7==='c'){
        nota++;
    }

    if(q8==='c'){
        nota++;
    }

    if(q9==='c'){
        nota++;
    }

    if(q10==='c'){
        nota++;
    }

    document.getElementById("acerto").textContent="Acertos: "+nota+"/10";
}

function confirmar(){
    let email=document.getElementById("email").value;

    if(email===""){
        document.getElementById("obrigado").textContent=`Insira seu email para enviar!`
    }else{
        document.getElementById("obrigado").textContent=`Obrigado por enviar sua opnião, ${email}!`
    }
}