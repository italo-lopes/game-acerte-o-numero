import * as desafio  from "./logica.js";

const atv1 = document.getElementById("desafio-1");
const atv2 = document.getElementById("desafio-2");
const atv3 = document.getElementById("desafio-3");
const atv4 = document.getElementById("desafio-4");
const atv5 = document.getElementById("desafio-5");
const info = document.getElementById("info");

//1
atv1.addEventListener("click",()=>{
    desafio.atv3Desafio1();
});

atv1.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(1);
    info.textContent = infoAux;
});

//2
atv2.addEventListener("click",()=>{
    desafio.atv3Desafio2();
});

atv2.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(2);
    info.textContent = infoAux;
});

///3
atv3.addEventListener("click",()=>{
    desafio.atv3Desafio3();
});

atv3.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(3);
    info.innerHTML = infoAux;
});

//4
atv4.addEventListener("click",()=>{
    desafio.atv3Desafio4();
});

atv4.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(4);
    info.innerHTML = infoAux;
});


function infoPrompt(x){
    switch (x) {
        case 1:
            return `Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.`;
            break;
        case 2:
            return "Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número";
            break;
        case 3:
            return `Crie um programa de contagem regressiva. Peça um número e conte deste número até 0,</br>
             usando um loop while no console do navegador`;
            break;
        case 4:
            return `Crie um programa de contagem progressiva.</br>
             Peça um número e conte de 0 até esse número, usando um loop while no console do navegador..`;
            break;
        default:
            return "Error";
    }
}