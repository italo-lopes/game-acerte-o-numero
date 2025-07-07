const chuteButton = document.getElementById("chute");
const reiniciarButton = document.getElementById("reiniciar");
let tentativa = 0;
function showText(tag,texto){
    const elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
}

function randomNumber(){
    return parseInt((Math.random() * 10) + 1); 
}

showText("h1","Jogo do Número Secreto");
showText("p","Escolha o número de 1 a 10");

const valor = randomNumber();
console.log("Valor random : "+valor);

chuteButton.addEventListener("click",()=>{
    const value = document.querySelector('input').value;
    tentativa++;
      console.log(tentativa);
    console.log(valor == value);
    if(valor == value){
        tentativa=0;
    }
});

reiniciarButton.addEventListener("click", ()=>{
    console.log("Reiniciado");
});