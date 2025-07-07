console.log("Desafio B");
const info = document.getElementById("info");
function desafios(x){
    console.log("======================");
        switch(x){
            case "desafio-1" : 
                showIMC();
            break;
            case "desafio-2" : 
                showFatorial();
            break;
            case "desafio-3" : 
                showConverter()
            break;
            case "desafio-4" : 
                showRetagulo();
            break;
            case "desafio-5" :
                showCirculo();
            break;
            case "desafio-6" :
                showTabuada();
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
chamarDesafios("desafio-1",  `Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.`);
chamarDesafios("desafio-2",  `Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.`);
chamarDesafios("desafio-3",  `Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.`);
chamarDesafios("desafio-4",  `Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.`);
chamarDesafios("desafio-5",  `Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.`);
chamarDesafios("desafio-6",  `Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.`);


function showIMC(){
    let altura = document.getElementById("altura").value;
    let peso =   document.getElementById("peso").value;
    let mensagem = "Error Geral";
    if(altura == "" || peso == ""){
        mensagem = "Error (sem Info)";
        showTextIMC(mensagem);
        return;
    }
    const imc = imcValue(altura,peso);
    console.log(imc);
        if (imc < 18.5) {
            mensagem = "Baixo peso";
        } else if (imc >= 18.5 && imc <= 24.9) {
            mensagem = "Peso normal";
        } else if (imc >= 25.0 && imc <= 29.9) {
            mensagem = "Sobrepeso";
        } else if (imc >= 30.0 && imc <= 34.9) {
            mensagem = "Obesidade grau I";
        } else if (imc >= 35.0 && imc <= 39.9) {
            mensagem = "Obesidade grau II";
        } else if (imc >= 40.0) {
            mensagem = "Obesidade grau III (mórbida)";
        } else {
            mensagem = "Erro ao calcular o IMC.";
        }
    mensagem = mensagem +" IMC :"+ imc,
    showTextIMC(mensagem);
}

function showFatorial(){
    const valor = document.getElementById("fatorial").value;
    const text = document.getElementById("txtFatorial");
    if(valor == ""){
         text.innerHTML = "Sem info";
         return;
    }
    let fatorialTotal = fatorial(valor);
    text.innerHTML = "O Fatorial de "+valor +" é "+fatorialTotal;
    text.style.color = "red";
}
function showTextIMC(texto){
    let p = document.querySelector('p');
    p.innerHTML = texto;
}

function showConverter(){
    const valor = document.getElementById("contacaoDoReal").value;
    const text = document.getElementById("txtReal");
    if(valor == ""){
         text.innerHTML = "Sem info";
         return;
    }
    let converterTotal = transformarDollarEmReal(valor);
    text.innerHTML = "O Real de "+valor +" dollares é R$: "+converterTotal;
    text.style.color = "red";
}

function showRetagulo(){
    const valorLargura = parseFloat(document.getElementById("largura").value);
    const valorAltura = parseFloat(document.getElementById("comprimento").value);
    const text = document.getElementById("txtRetangulo");
    if(valorLargura == "" || valorAltura ==""){
         text.innerHTML = "Sem info";
         return;
    }
    let perimetroRetangulo =  retanguloPerimetro(valorAltura,valorLargura);
    let areaRetangulo = retanguloArea(valorAltura,valorLargura);
    let textoString = `A altura : ${valorAltura} </br>
                        A largura : ${valorLargura} </br>
                        O perimetro do retangulo : ${perimetroRetangulo} </br>
                        A área do retangulo: ${areaRetangulo}`;
    text.innerHTML = textoString;
    text.style.color = "red";
}

function showCirculo(){
    const valor = parseFloat(document.getElementById("raio").value);
    const text = document.getElementById("txtCirculo");
    if(valor == ""){
         text.innerHTML = "Sem info";
         return;
    }
    let perimetro = circuloPerimetro(valor);
    let area = circuloArea(valor);
    let textoString = `O raio : ${valor} </br>
                        O perimetro do circulo: ${perimetro} </br>
                        A área do circulo: ${area}`;

    text.innerHTML = textoString;
    text.style.color = "red";
}




function showTabuada(){
    const valor = parseInt(document.getElementById("tabuada").value);
    const text = document.getElementById("txtTabuada");
    if(valor == ""){
         text.innerHTML = "Sem info";
         return;
    }
    let tabuadaString = tabuada(valor);
    text.innerHTML = tabuadaString;
    text.style.color = "red";
}




function imcValue(altura, peso){
   return (peso/(altura*altura)).toFixed(2);
}

function fatorial(valor){
    if(valor == 0 ){
        return 1;
    }
    let resultado = valor * fatorial(valor-1);
    return resultado;
}

function transformarDollarEmReal(dollar){
        return (dollar * 4.80).toFixed(2);
}

function retanguloPerimetro(altura, largura){
    const resul = altura + largura;
    console.log(resul);
    return 2 * resul;
}

function retanguloArea(altura, largura){
    return altura * largura
}

function circuloPerimetro(raio){
        const pi = 3.14;
        return 2 * pi * raio
}

function circuloArea(raio){
    const pi= 3.14;
    return pi * (raio * raio);
}

function tabuada(x){
    let textString = "";
    for(let count = 10; count > 0; count--){
        let resul = count * x;  
        textString =  "> "+x+" * "+count+" : = "+resul+" </br>"+ textString;
    }
    return textString;
}