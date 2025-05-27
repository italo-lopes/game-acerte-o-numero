console.log("funcionado");
const recebeValor = document.getElementById("click");
const text = document.getElementById("text-number-limit");
const buttonGameIniciar = document.getElementById("go-game");
const warning = document.getElementById("warning");
const numberWinText = document.getElementById("number");
const numeroSecret = document.getElementById("numero-secret")
const inputSelect = document.getElementById("quantity");

//hud
const hudWin = document.getElementById("hud-win");
const hudAttempt = document.getElementById("hud-attempt");
const hudGame = document.getElementById("hud-game");

console.log(buttonGameIniciar);
let min = 0;
let max = 100;
let inicioGame = false;
let valorRandom = null;
let numberSelect = null;
let win = false;
let countGame=0;
let countWin=0;
let countTentativa=0;

buttonGameIniciar.addEventListener("click", ()=>{
    iniciarGame();
    let checkStatus = inicioGame?false: true;
    if(checkStatus == true){
        countGame++;
        text.textContent = "Selecione o Número entre 0 e 100";
        buttonGameIniciar.textContent ="Parar Game";
        buttonGameIniciar.style.background = "red";
        inicioGame = true;
        valorRandom = gerarRandom();
        hudGame.textContent ="Game: "+ countGame;
    }else{
        gameOver();
    }
      //Selecione o Número entre 0 e 10  
});

recebeValor.addEventListener("click", ()=>{
    let valorString = document.getElementById("quantity").value;
    numberSelect = parseInt(valorString);
    console.log(numberSelect);
    warning.textContent = "";
    countTentativa++;   
    hudAttempt.textContent = "Tentativa: "+ countTentativa;
    if(inicioGame == true && (numberSelect > min && numberSelect < max ) ){
        console.log(numberSelect);
        if(numberSelect == valorRandom){
            win = true;
            countWin++;
            hudWin.textContent = "Win : "+ countWin;
            gameOver();
        }else{
            if(numberSelect > valorRandom){
                max = numberSelect;
            }else{
                min = numberSelect;
            }
            text.textContent = "O valor esta entre "+min+" e "+max;
        }
        console.log("O button foi clicado",  numberSelect);
    }else{
        if(inicioGame != true){
            warning.textContent = "O jogo precisa ser iniciado";
        }else{
            warning.textContent = "Selecione um número valido";
        }
        
    }
});

function gameOver(){
    if(win == true){
        text.textContent = "Acerte o número Secrteto";
        numberWinText.innerText = "Win \n Numero: "+valorRandom;
        numeroSecret.style.display = "none";
    }else{
        text.textContent = "Acerte o número Secrteto";
    }
    buttonGameIniciar.textContent = "Íniciar do Game";
    buttonGameIniciar.style.background = "#3498db";

    inicioGame = false;
}

function iniciarGame(){
    numberWinText.textContent = "";
    warning.textContent = "";
    numeroSecret.style.display = "block";
    win = false;
    inputSelect.value = "";
    min = 0;
    max = 100;
    countTentativa=0;
    hudAttempt.textContent = "Tentativa: "+ countTentativa;
}

function gerarRandom(){
    let random = parseInt(Math.random() * 99)+1;
    console.log(random);
    return random
}

function verificarRage(random){
    text.textContent = "O valor esta entre "+number+" menor que";
}

