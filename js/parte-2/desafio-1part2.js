import * as desafio  from "../parte-2/logica-part2.js";

console.log("Desafio 1 parte 2");


const desafio1  = document.getElementById("desafio-1");
const desafio2  = document.getElementById("desafio-2");
const desafio3  = document.getElementById("desafio-3");
const desafio4  = document.getElementById("desafio-4");
const desafio5  = document.getElementById("desafio-5");
const desafio6  = document.getElementById("desafio-6");


//1
desafio1.addEventListener("click",()=>{
    desafio.atv1Desafio1();
});

desafio1.addEventListener("mouseover", ()=>{
    console.log("df");
    const infoAux =  infoPrompt(1);
    info.textContent = infoAux;
});

//2
desafio2.addEventListener("click",()=>{
    desafio.atv2Desafio1();
});

desafio2.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(2);
    info.textContent = infoAux;
});

//3
desafio3.addEventListener("click",()=>{
    desafio.atv3Desafio1();
});

desafio3.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(3);
    info.textContent = infoAux;
});


//4
desafio4.addEventListener("click",()=>{
    desafio.atv4Desafio1();
});

desafio4.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(4);
    info.textContent = infoAux;
});

//5
desafio5.addEventListener("click",()=>{
    desafio.atv5Desafio1();
});

desafio5.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(5);
    info.textContent = infoAux;
});

//6
desafio6.addEventListener("click",()=>{
    desafio.atv6Desafio1();
});

desafio6.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(6);
    info.textContent = infoAux;
});

function infoPrompt(x){
    switch (x) {
        case 1:
            return `Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas`;
            break;
        case 2:
            return `Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.`;
            break;
        case 3:
            return `Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!"`;
            break;
        case 4:
            return `Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?.
             Em seguida, armazene a resposta em uma variável e mostre no console do navegador.`;
            break;
        case 5:
            return `Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha.
            </br> Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado".
             </br> </br>Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.`;
            break;
        case 6:
            return `Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
            </br>Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado".
            </br></br> Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.`;
            break;
        default:
            return "Error";
    }
}
