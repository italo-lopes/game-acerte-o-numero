//alert("Hello, World");
// prompt("input") recebe valor na caixa de dialogo
// let varieavel em js (usado pragurdar variavel)
let numeroSecreto = null;
let chute = null;
const buttonComandao1 = document.getElementById("comando-1");
alert("Hello, World");
buttonComandao1.addEventListener("click", ()=>{
     numeroSecreto = parseInt((Math.random() * 9)+1) ;
     console.log(numeroSecreto);
     chute = prompt("Digite um numero de 1 a 10");
    if(chute == numeroSecreto){
        alert(`O numero secreto é ${numeroSecreto}`);
        console.log("Voce acertou o numero: "+ numeroSecreto);
    }else{
        alert("Error - Tente Novamente \n \n O número secretos era: "+ numeroSecreto);
        console.log("Não acertou o número secreto era: "+numeroSecreto);
    }
})