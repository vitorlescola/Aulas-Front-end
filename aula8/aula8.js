let count=1;

function addTask(){
    const nova=document.getElementById("taskInput").value.trim();

    if(nova!=''){
        document.getElementById("taskList").insertAdjacentHTML('beforeend',`<li id="${count}">${count}: ${nova}
            <button id="com" onclick="completeTask(${count})">Feita</button>
            <button id="edi" onclick="editTask(${count})">Editar</button>
            <button id="del" onclick="deleteTask(${count})">X</button></li>`);

        count++;

        document.getElementById("taskInput").value="";
    }else{
        alert("Não pode estar vazia");
    }
}

function completeTask(id){
    document.getElementById(id).style.background="lime";
}

function editTask(id){
    const ta=document.getElementById(id);
    const textoAtual=ta.firstChild.textContent.split(": ")[1].trim();

    ta.innerHTML=`<input id="no${id}" value="${textoAtual}"><button onclick="changeTask(${id})">Editar</button>`;
}

function changeTask(id){
    const novoTexto=document.getElementById(`no${id}`).value.trim();

    if(novoTexto!==''){
        const ta=document.getElementById(id);

        ta.innerHTML=`${id}: ${novoTexto}<button id="com" onclick="completeTask(${id})">Feita</button>
            <button id="edi" onclick="editTask(${id})">Editar</button>
            <button id="del" onclick="deleteTask(${id})">X</button>`;
    }else{
        alert("Não pode estar vazia");
    }
}

function deleteTask(id){
    document.getElementById(id).remove();
}