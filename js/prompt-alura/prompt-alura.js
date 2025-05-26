const prompt1 = document.getElementById("prompt-1");
const prompt2 = document.getElementById("prompt-2");
const prompt3 = document.getElementById("prompt-3");
const prompt4 = document.getElementById("prompt-4");
const prompt5 = document.getElementById("prompt-5");
const info = document.getElementById("info");

prompt1.addEventListener("click",()=>{
    console.log("promp1");
    const infoAux =  infoPrompt(1);
    info.textContent = infoAux;
});

prompt2.addEventListener("click",()=>{
    console.log("promp2");
    const infoAux =  infoPrompt(2);
    info.textContent = infoAux;
});

prompt3.addEventListener("click",()=>{
    console.log("promp2");
    const infoAux =  infoPrompt(3);
    info.textContent = infoAux;
});

prompt4.addEventListener("click",()=>{
    console.log("promp2");
    const infoAux =  infoPrompt(4);
    info.textContent = infoAux;
});

prompt5.addEventListener("click",()=>{
    console.log("promp2");
    const infoAux =  infoPrompt(5);
    info.textContent = infoAux;
});

// logia não necessariamente tem que ficar no arquivo que ler o DOM
function promp1(){
    console.log("logica de programação");
}

function promp2(){
    console.log("logica de programação");
}

function promp(){
    console.log("logica de programação");
}

function infoPrompt(x){
    switch (x) {
        case 1:
            return "Desafio 1";
            break;
        case 2:
            return "Desafio 2";
            break;
        case 3:
            return "Desafio 3";
            break;
        case 4:
            return "Desafio 4";
            break;
        case 5:
            return "Desafio 5";
            break;
        default:
            return "Error";
    }
}