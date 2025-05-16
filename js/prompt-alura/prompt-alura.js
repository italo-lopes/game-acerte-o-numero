const prompt1 = document.getElementById("prompt-1");
const prompt2 = document.getElementById("prompt-2");
const prompt3 = document.getElementById("prompt-3");
const prompt4 = document.getElementById("prompt-4");
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

function promp1(){
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
        default:
            return "Error";
    }
}