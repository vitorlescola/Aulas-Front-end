const produtos={
    "123":{"nome":"Arroz","preco":9.00},
    "456":{"nome":"Feijao","preco":3.00},
    "789":{"nome":"Carne","preco":12.00},
    "147":{"nome":"Batata","precoo":90.50},
};

let carrinho=[];
const audio=new Audio("bip.mp3");

window.onload=()=>{
    document.getElementById("cod").focus();  //faz com que a pagina já abra com o cod selecionado
}

function addProduto(){
    const codHtml=document.getElementById("cod");
    const qtdHtml=document.getElementById("qtd");
    const valorCod=codHtml.value;
    const valorQtd=qtdHtml.value;

    if(!produtos[valorCod]){
        //alertItem();

        return window.alert("Produto não existe!");
    }

    const infoProduto=produtos[valorCod];

    const item={
        nome: infoProduto.nome,
        preco: infoProduto.preco,
        quantidade: valorQtd,
        subtot: infoProduto.preco*qtdHtml
    };

    carrinho.push(item);

    audio.currentTime=0;
    audio.play();
    
    atualizarTela();

    qtdHtml.value=1;
    codHtml.value="";
}