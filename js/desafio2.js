import * as desafio  from "./logica.js";

const atv1 = document.getElementById("desafio-1");
const atv2 = document.getElementById("desafio-2");
const atv3 = document.getElementById("desafio-3");
const atv4 = document.getElementById("desafio-4");
const atv5 = document.getElementById("desafio-5");
const info = document.getElementById("info");


atv1.addEventListener("click",()=>{
    desafio.atv2Desafio1();
});

atv1.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(1);
    info.textContent = infoAux;
});

//2
atv2.addEventListener("click",()=>{
    desafio.atv2Desafio2();
});

atv2.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(2);
    info.textContent = infoAux;
});

//3
atv3.addEventListener("click",()=>{
    desafio.atv2Desafio3();
});

atv3.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(3);
    info.innerHTML = infoAux;
});

//4
atv4.addEventListener("click",()=>{
    desafio.atv2Desafio4();
});

atv4.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(4);
    info.innerHTML = infoAux;
});

//5
atv5.addEventListener("click",()=>{
    desafio.atv2Desafio5();
});

atv5.addEventListener("mouseover", ()=>{
    const infoAux =  infoPrompt(5);
    info.innerHTML = infoAux;
});

function infoPrompt(x){
    switch (x) {
        case 1:
            return `Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".`;
            break;
        case 2:
            return "Verifique se um número digitado pelo usuário é positivo ou negativo.  Mostre um alerta informando.";
            break;
        case 3:
            return `Crie um sistema de pontuação para um jogo. 
                    Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!".
                    Caso contrário, mostre "Tente novamente para ganhar.".
                    </br></br>
                    ( A pontuação é criada em modo random entre (95/105)  )
                    `;
            break;
        case 4:
            return "Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.";
            break;
        case 5:
            return `Peça ao usuário para inserir seu nome usando prompt \n
                    Em seguida, mostre um alerta de boas-vindas usando esse nome.`;
            break;
        default:
            return "Error";
    }
}