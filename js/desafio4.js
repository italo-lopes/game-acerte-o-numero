import * as desafio  from "./logica.js";

const atv1 = document.getElementById("desafio-1");
const atv2 = document.getElementById("desafio-2");
const atv3 = document.getElementById("desafio-3");
const atv4 = document.getElementById("desafio-4");
const atv5 = document.getElementById("desafio-5");
const atv6 = document.getElementById("desafio-6");
const atv7 = document.getElementById("desafio-7");
const atv8 = document.getElementById("desafio-8");
const atv9 = document.getElementById("desafio-9");
const atv10 = document.getElementById("desafio-10");
const atv11 = document.getElementById("desafio-11");
const atv12 = document.getElementById("desafio-12");
const atv13 = document.getElementById("desafio-13");
const info = document.getElementById("info");

//1
atv1.addEventListener("click",()=>{
    desafio.atv4Desafio1();
});

atv1.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(1);
    info.textContent = infoAux;
});

//2
atv2.addEventListener("click",()=>{
    desafio.atv4Desafio2();
});

atv2.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(2);
    info.textContent = infoAux;
});

///3
atv3.addEventListener("click",()=>{
    desafio.atv4Desafio3();
});

atv3.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(3);
    info.innerHTML = infoAux;
});

//4
atv4.addEventListener("click",()=>{
    desafio.atv4Desafio4();
});

atv4.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(4);
    info.innerHTML = infoAux;
});

//5
atv5.addEventListener("click",()=>{
    desafio.atv4Desafio5();
});

atv5.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(5);
    info.innerHTML = infoAux;
});

//6
atv6.addEventListener("click",()=>{
    desafio.atv4Desafio6();
});

atv6.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(6);
    info.innerHTML = infoAux;
});

//7
atv7.addEventListener("click",()=>{
    desafio.atv4Desafio7();
});

atv7.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(7);
    info.innerHTML = infoAux;
});

//8
atv8.addEventListener("click",()=>{
    desafio.atv4Desafio8();
});

atv8.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(8);
    info.innerHTML = infoAux;
});

//9
atv9.addEventListener("click",()=>{
    desafio.atv4Desafio9();
});

atv9.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(9);
    info.innerHTML = infoAux;
});


//10
atv10.addEventListener("click",()=>{
    desafio.atv4Desafio10();
});

atv10.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(10);
    info.innerHTML = infoAux;
});

//11
atv11.addEventListener("click",()=>{
    desafio.atv4Desafio11();
});

atv11.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(11);
    info.innerHTML = infoAux;
});

//12
atv12.addEventListener("click",()=>{
    desafio.atv4Desafio12();
});

atv12.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(12);
    info.innerHTML = infoAux;
});

//13
atv13.addEventListener("click",()=>{
    desafio.atv4Desafio13();
});

atv13.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(13);
    info.innerHTML = infoAux;
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
        case 7:
            return `Peça ao usuário para inserir sua idade com prompt.
             Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.`;
            break;
        case 8:
            return `Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.`;
            break;
        case 9:
            return `Use um loop while para imprimir os números de 1 a 10 no console.`;
            break;
        case 10:
            return `Crie uma variável "nota" e atribua um valor numérico a ela.
             Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.`;
            break;
        case 11:
            return `Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.`;
            break;
        case 12:
            return `Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.`;
            break;
        case 13:
            return `Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.`;
            break;
        default:
            return "Error";
    }
}