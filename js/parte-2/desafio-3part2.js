const info = document.getElementById("info");
let listaA = ["1", "2", "3","4","5"];
let linguagensDeProgramacao = ["JavaScript","C","C++","Kotlin","Python"];
function desafios(x){
    console.log("======================");
        switch(x){
            case "desafio-1" : 
                listaVazia();
            break;
            case "desafio-2" : 
                ShowDeitem();
            break;
            case "desafio-3" : 
                adicionarNaLista("Java");
                adicionarNaLista("Ruby");
                adicionarNaLista("GoLang");
                ShowDeitem();
            break;
            case "desafio-4" : 
                showListaA("O primeiro da lista é", 0);
            break;
            case "desafio-5" :
                showListaA("O segundo da lista é", 1);
            break;
            case "desafio-6" :
                let index =  listaA.length -1;
                showListaA("O último da lista é", index);
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
chamarDesafios("desafio-1",  `Crie uma lista vazia, com o nome listaGenerica.`);
chamarDesafios("desafio-2",  `Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'`);
chamarDesafios("desafio-3",  `Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.`);
chamarDesafios("desafio-4",  `Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento`);
chamarDesafios("desafio-5",  `Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.`);
chamarDesafios("desafio-6",  `Crie uma lista com 3 nomes e exiba no console apenas o último elemento.`);


function listaVazia(){
    let listaGenerica = [];
    console.log("let listaGenerica = [];");
}
function ShowDeitem(){
    console.log(linguagensDeProgramacao.toString());
}
function adicionarNaLista(item){
    linguagensDeProgramacao.push(item);
}
function showListaA(texto, index){
    console.log(texto+": "+listaA[index]);
}