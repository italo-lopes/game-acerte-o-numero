const titulo = document.querySelector('h1');
const subTitulo = document.querySelector('p');

titulo.innerHTML = "Jogo do Número Secreto";
subTitulo.innerHTML = "Escolha o número de 1 a 10";

const chute = document.getElementById("chute");
const reiniciar = document.getElementById("reiniciar");

chute.addEventListener("click",()=>{
    console.log("Foi clickado");
});

reiniciar.addEventListener("click", ()=>{
    console.log("Reiniciado");
});