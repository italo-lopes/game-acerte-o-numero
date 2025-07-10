const chuteButton = document.getElementById("chute");
const reiniciarButton = document.getElementById("reiniciar");
let tentativa = null;
let valor = null;
let listaNumberRandom = [];
const limiteMax = 10;
reiniciar();

function showText(tag,texto){
    const elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
    //voiceText(texto);
    //responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate: 1.3});
}
function randomNumber(){
    let numeroSecreto = parseInt((Math.random() * limiteMax) + 1); 
    if (listaNumberRandom.includes(numeroSecreto)){
        if(listaNumberRandom.length == limiteMax){
                listaNumberRandom = [];
        }
        return randomNumber();
    }else{
        listaNumberRandom.push(numeroSecreto);
    }
    return numeroSecreto; 
}
function inicializarTexto(){
    showText("h1","Jogo do Número Secreto");
    showText("p","Escolha o número de 1 a "+ limiteMax);
}

chuteButton.addEventListener("click",()=>{
    const chute = document.querySelector('input').value;
    tentativa++;
    if(valor == chute){
        let tentativaString = tentativa == 1 ? "Tentativa" : "Tentativas";
        let mensagem = `Você descobriu o número secreto com ${tentativa} ${tentativaString}`;
        showText("h1","Acertou");
        showText("p",mensagem);
        chuteButton.setAttribute("disabled",true);
        reiniciarButton.removeAttribute("disabled");
    }else{
        //showText("h1","Jogo do Número Secreto");
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

function voiceText(texto){
     if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.5; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}