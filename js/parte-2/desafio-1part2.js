const info = document.getElementById("info");
function desafios(x){
    console.log("======================");
        switch(x){
            case "desafio-1" : 
                olaMundo();
            break;
            case "desafio-2" : 
                olaPersona("Italo");
            break;
            case "desafio-3" : 
                let number = 4;
                 console.log(`O dobro de ${number} é : ${dobro(4)}`);
            break;
            case "desafio-4" : 
                let x = 3;
                let y = 6;
                let z = 12;
                let media = mediaAritimetica(x,y,z);
                console.log(`O media de ${x} , ${y} , ${z} , é : ${media}`);
            break;
            case "desafio-5" :
                let numberA = 10;
                let numberB = 5; 
                let maiorNumber = maiorQuer(numberA,numberB);
                console.log(`O numero maior entre ${numberA} e ${numberB} é : ${maiorNumber}`);
            break;
            case "desafio-6" :
                let numeroBase = 9; 
               let resutadoQuaratico = quadrado(numeroBase);
               console.log(`O quadrado de ${numeroBase} é: ${resutadoQuaratico}`);
            break;
            default : console.log("Erro");
            break
        }
}

function chamarDesafios(tag,  texto){
    let button = document.getElementById(tag);
    button.addEventListener("click", ()=>{
        desafios(tag);
    });
    button.addEventListener("mouseover",()=>{
        info.textContent = texto;
    })
}
chamarDesafios("desafio-1",  `Criar uma função que exibe "Olá, mundo!" no console.`);
chamarDesafios("desafio-2",  `Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.`);
chamarDesafios("desafio-3",  `Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.`);
chamarDesafios("desafio-4",  `Criar uma função que recebe três números como parâmetros e retorna a média deles.`);
chamarDesafios("desafio-5",  `Criar uma função que recebe dois números como parâmetros e retorna o maior deles.`);
chamarDesafios("desafio-6",  `Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo`);


function olaMundo(){
    console.log("Olá, mundo!");
}
function olaPersona(nome){
    console.log(`Olá, ${nome}!`)
}
function dobro(x){
    return x *2 ;
}
function mediaAritimetica(x,y,z){
    return (x+y+z)/3;
}
function maiorQuer(x,y){
    let maior = x >= y ? x : y;
    return maior;
}
function quadrado(x){
    return x*x;
}