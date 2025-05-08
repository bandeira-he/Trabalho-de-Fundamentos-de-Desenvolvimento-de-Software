
const botao = document.getElementById("botao");
let mensagem = document.getElementById("mensagem");
let cliques = 0

botao.addEventListener("click", exibirMensagem);

function exibirMensagem() {
    if(cliques == 0){
        mensagem.innerHTML  = "Estou aprendendo ainda..."; 
        cliques++;
    }
    else{
        mensagem.innerHTML  = ""; 
        cliques = 0;
    }
}
