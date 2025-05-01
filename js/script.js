console.log("funcionado");
const recebeValor = document.getElementById("click");
const text = document.getElementById("text-number-limit");
const buttonGameIniciar = document.getElementById("go-game");
const warning = document.getElementById("warning");
const numberWinText = document.getElementById("number");
const numeroSecret = document.getElementById("numero-secret")

console.log(warning);
let min = 0;
let max = 100;
let inicioGame = false;
let valorRandom = null;
let numberSelect = null;
let win = false;
let countGame=0;
let countWin=0;
let countTentativa;
buttonGameIniciar.addEventListener("click",()=>{
    iniciarGame()
    let checkStatus = inicioGame?false: true;
    if(checkStatus == true){
        countGame++;
        text.innerHTML = "Selecione o Número entre 0 e 100";
        buttonGameIniciar.innerHTML ="Parar Game";
        buttonGameIniciar.style.background = "red";
        inicioGame = true;
        valorRandom = gerarRandom();
    }else{
        gameOver();
    }
      //Selecione o Número entre 0 e 10  
});

recebeValor.addEventListener("click", ()=>{
    numberSelect = parseInt(document.getElementById("quantity").value);

    if(inicioGame == true && (numberSelect >= 0 || numberSelect <= 100 ) ){
        console.log(numberSelect);
        if(numberSelect == valorRandom){
            win = true;
            countWin++;
            gameOver();
        }else{
            if(numberSelect > valorRandom){
                max = numberSelect;
                text.innerHTML = "O valor esta entre "+min+" e "+max;
            }else{
                min = numberSelect;
                text.innerHTML = "O valor esta entre "+min+" e "+max;
            }
        }
        console.log("O button foi clicado",  numberSelect);
    }else{
        if(inicioGame != true){
            warning.innerHTML = "O jogo precisa ser iniciado";
        }else{
            warning.innerHTML = "Selecione um número valido";
        }
        
    }
});

function gameOver(){
    if(win == true){
        text.innerHTML = "Acerte o número Secrteto";
        numberWinText.innerHTML = "Win/ Numero: "+valorRandom;
        numeroSecret.style.display = "none";
    }else{
        text.innerHTML = "Acerte o número Secrteto";
    }
    buttonGameIniciar.innerHTML = "Íniciar do Game";
    buttonGameIniciar.style.background = "#3498db";
    inicioGame = false;
}

function iniciarGame(){
    numberWinText.innerHTML = "";
    warning.innerHTML = "";
    numeroSecret.style.display = "block";
    win = false;
}


function gerarRandom(){
    let random = parseInt(Math.random() * 100);
    console.log(random);
    return random
}


function verificarRage(random){
    text.innerHTML = "O valor esta entre "+number+" menor que";
}