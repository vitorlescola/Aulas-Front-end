let count=1;

function addTask(){
    const nova=document.getElementById("taskInput").value.trim();

    if(nova!=''){
        document.getElementById("taskList").insertAdjacentHTML('beforeend',`<li id="${count}">${count}: ${nova} <button id="del" onclick="deleteTask(${count})">X</button></li>`);

        count++;
    }else{
        alert("Não pode estar vazia");
    }
}

function deleteTask(id){
    document.getElementById(id).remove();
}