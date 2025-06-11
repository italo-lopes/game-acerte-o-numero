// alert("Hello, World");
// prompt("input") recebe valor na caixa de dialogo
// let varieavel em js (usado pragurdar variavel)
let numeroSecreto = null;
let chute = null;
const buttonComandao1 = document.getElementById("comando-1");
const buttonComandao2 = document.getElementById("comando-2");
//const textWin = document.getElementsByClassName("container__informacoes");

buttonComandao1.addEventListener("click", ()=>{
    acertaOnumeroRandom();
});

buttonComandao2.addEventListener("click", ()=>{
    acertaOnumeroRandomComNTentativa();
});

// primeira lógica do curso da alura
function acertaOnumeroRandom(){
     numeroSecreto = parseInt((Math.random() * 9)+1);
     console.log(numeroSecreto);
     chute = prompt("Digite um numero de 1 a 10");
    if(chute == numeroSecreto){
        alert(`O numero secreto é ${numeroSecreto}`);
        console.log("Voce acertou o numero: "+ numeroSecreto);
    }else{
        alert("Error - Tente Novamente \n \n O número secretos era: "+ numeroSecreto);
        console.log("Não acertou o número secreto era: "+numeroSecreto);
    }
}

function acertaOnumeroRandomComNTentativa(){
    chute = -1;
    numeroSecreto = parseInt((Math.random() * 9)+1) ;
    console.log(numeroSecreto);
    let min = 1;
    let max = 10;
    let tentativa=0;
    while(chute != numeroSecreto){
        tentativa++;
        chute = prompt(`Digite um numero de ${min} a ${max}`);
         if(chute == numeroSecreto){
            break;
        }else{
            if(chute > numeroSecreto){
                 max = chute;
            }else{
                min = chute; 
            }
        }
    }
    alert(`O numero secreto é ${numeroSecreto} 
            \n win 
            \n Tentativas : ${tentativa}`);
}