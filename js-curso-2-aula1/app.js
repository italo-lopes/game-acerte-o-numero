const chuteButton = document.getElementById("chute");
const reiniciarButton = document.getElementById("reiniciar");
let tentativa = null;
let valor = null;
reiniciar();

function showText(tag,texto){
    const elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
}
function randomNumber(){
    return parseInt((Math.random() * 10) + 1); 
}
function inicializarTexto(){
    showText("h1","Jogo do Número Secreto");
    showText("p","Escolha o número de 1 a 10");
}

chuteButton.addEventListener("click",()=>{
    const chute = document.querySelector('input').value;
    tentativa++;
    if(valor == chute){
        let tentativaString = tentativa == 1 ? "Tentativa" : "Tentativas";
        let mensagem = `Voce descobriu o número secreto com ${tentativa} ${tentativaString}`;
        showText("h1","Acertou");
        showText("p",mensagem);
        chuteButton.setAttribute("disabled",true);
        reiniciarButton.removeAttribute("disabled");
    }else{
        showText("h1","Jogo do Número Secreto");
        if(chute > valor){
            showText("p","O número secreto é menor");
        }else{
            showText("p","O número secreto é maior");
        }
    }
    limparCampo();
});
reiniciarButton.addEventListener("click", ()=>{
    reiniciar();
});
function limparCampo(){
    document.querySelector('input').value = "";
}
function reiniciar(){
    valor = randomNumber();
    tentativa=0;
    limparCampo();
    inicializarTexto();
    reiniciarButton.setAttribute("disabled", true);
    chuteButton.removeAttribute("disabled");
}