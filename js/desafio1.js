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
const info = document.getElementById("info");


atv10.addEventListener("click",()=>{
    desafio.atv1Desafio10();
});

atv10.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(10);
    info.textContent = infoAux;
});

atv9.addEventListener("click",()=>{
    desafio.atv1Desafio9();
    const infoAux =  infoPrompt(9);
    info.innerHTML = infoAux;   
});

atv9.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(9);
    info.innerHTML = infoAux;
});

atv8.addEventListener("click",()=>{
    desafio.atv1Desafio8();
});

atv8.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(8);
    info.textContent = infoAux;
});

atv7.addEventListener("click",()=>{
    desafio.atv1Desafio7();
});

atv7.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(7);
    info.textContent = infoAux;
});

atv6.addEventListener("click",()=>{
    desafio.atv1Desafio6();
});

atv6.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(6);
    info.textContent = infoAux;
})


atv1.addEventListener("click",()=>{
    desafio.atv1Desafio1();
});

atv1.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(1);
    info.textContent = infoAux;
})

atv2.addEventListener("click",()=>{
    desafio.atv1Desafio2();
});

atv2.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(2);
    info.innerHTML = infoAux;
});

atv3.addEventListener("click",()=>{
    desafio.atv1Desafio3();
});

atv3.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(3);
    info.innerHTML = infoAux;
});

atv4.addEventListener("click",()=>{
    desafio.atv1Desafio4();
});

atv4.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(4);
    info.innerHTML = infoAux;
});

atv5.addEventListener("click",()=>{
    desafio.atv1Desafio5();
});

atv5.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(5);
    info.innerHTML = infoAux;
});

function infoPrompt(x){
    switch (x) {
        case 1:
            return "Mostre um alerta com a mensagem Boas vindas ao nosso site! alert('Boas vindas ao nosso site!')";
            break;
        case 2:
            return "Declare uma variável chamada nome e atribua a ela o valor 'Lua'"
            + " </br></br> (const nome = 'Lua')";
            break;
        case 3:
            return "Crie uma variável chamada idade e atribua a ela o valor 25. (const idade = 25)";
            break;
        case 4:
            return "Defina uma variável numeroDeVendas e atribua a ela o valor 50. (const numeroDeVendas = 50)";
            break;
        case 5:
            return "Defina uma variável saldoDisponivel e atribua a ela o valor 1000. (const saldoDisponivel = 1000)";
            break;
        case 6:
            return "Exiba um alerta com o texto 'Erro! Preencha todos os campos' alert('Erro! Preencha todos os campos' )";
            break;
        case 7:
            return "Declare uma variável chamada mensagemDeErro e atribua a ela o valor 'Erro! Preencha todos os campos' Agora exiba um alerta com o valor da variável mensagemDeErro. alert(mensagemDeErro) ";
            break;
        case 8:
            return "Para o próximo código, use um novo prompt para perguntar o nome do usuário e armazená-lo em uma variável, pode chamá-la de nome ou adicionar o que desejar";
            break;
        case 9:
            let note = "sem idade";
            if(desafio.age != null  ){
                note = desafio.age;
            }
            return "Para o próximo código, use um novo prompt para perguntar o nome do usuário e armazená-lo em uma variável, pode chamá-la de nome ou adicionar o que desejar</br></br> idade :"+note;
            break;
        case 10:
            return "Agora, para validar a idade que capturamos no desafio 09, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem 'Pode tirar a habilitação!'";
            break;
        default:
            return "Error";
    }
}