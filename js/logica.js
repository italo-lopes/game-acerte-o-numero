export let age = null;
let name = null;

export function atv1Desafio1(){
    alert("Boas vindas ao nosso site!")
}

export function atv1Desafio2(){
    console.log("Declare uma variável chamada nome e atribua a ela o valor 'Lua'.");
    const name = "Lua";
    alert("O nome dela é : "+name);
}

export function atv1Desafio3(){
    console.log("Crie uma variável chamada idade e atribua a ela o valor 25.");
    const idade = 25;
    alert("A idade é : "+idade);
}

export function atv1Desafio4(){
    console.log("Defina uma variável numeroDeVendas e atribua a ela o valor 50.");
    const numeroDeVendas = 50;
    alert("O numero de  Vendas é : "+ numeroDeVendas);
}
export function atv1Desafio5(){
    console.log("Defina uma variável saldoDisponivel e atribua a ela o valor 1000.");
    const saldoDisponivel = 1000;
    alert("O saldo disponivel : "+saldoDisponivel);
}

export function atv1Desafio6(){
    console.log("Erro! Preencha todos os campos ");
    const saldoDisponivel = 1000;
    alert("Erro! Preencha todos os campos");
}

export function atv1Desafio7(){
    console.log("Declare uma variável chamada mensagemDeErro e atribua a ela o valor 'Erro! Preencha todos os campos' Agora exiba um alerta com o valor da variável mensagemDeErro.");
    const mensagemDeErro = "Erro! Preencha todos os campos";
    alert(mensagemDeErro);
}

export function atv1Desafio8(){
    console.log("Para o próximo código, use um novo prompt para perguntar o nome do usuário e armazená-lo em uma variável, pode chamá-la de nome ou adicionar o que desejar");
    name = prompt("Qual o seu nome?");
    alert(name);
}

export function atv1Desafio9(){
    console.log("Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade");
    age = parseInt(prompt("Qual o seu idade?"));
    if(isNaN(age)){
        age = null;
        alert("Idade invalida");
    }else{
        alert("idade : "+age);
    }
}
// NaN nao pode ser comparado NaN == NaN (invalido)
export function atv1Desafio10(){
    console.log(age);
    console.log("Agora, para validar a idade que capturamos no desafio 09, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem 'Pode tirar a habilitação!'");
    if(age != null){
        if(age >= 18){
            alert("Pode tirar a habilitação!");
        }else{
            alert("Menor de Idade");
        }
    }else{
        alert("Valor invalido - fazer a atv 9")
    }
}

// export não ter DOM por que carrega a pagina 

//parte 2
export function atv2Desafio1(){
    let dayWeek = prompt("Qual o dia da Semana?");
    let recebe = dayWeek.toUpperCase() ; 
    if(recebe == "SÁBADO" || recebe == "DOMINGO"){
        alert("Bom fim de semana!")
    }else{
         alert("Boa semana!")
    }
    console.log(recebe);
}

export function atv2Desafio2(){
    let number = prompt("Digite o número.");
    if(number > 0){
        alert("Número positivo");
    }else{
        if(number == 0 ){
            alert("Número é zero neutro")
            return
        }
        alert("Número é negativo");
    }
}

export function atv2Desafio3(){
    let score = parseInt((Math.random() * 10) + 95);
    alert("Sua pontuação é : " +score );
    if(score >= 100){
        alert("Parabéns");
        return
    }
    alert("Tente novamente para ganhar"); 
}

let saldo = 100;
export function atv2Desafio4(){
    alert(`Seu saldo :  R$ ${saldo} Reais`);
}

export function atv2Desafio5(){
    const name = prompt("Qual o seu nome?");
    alert(`boas-vindas ${name}`);
}

// deafio 3
export function atv3Desafio1(){
    let cont = 0;
    while(cont < 10){
        cont++;
        alert(`Número ${cont}`);
    }
}

export function atv3Desafio2(){
    let cont = 11;
    while(cont > 0){
        cont--;
        alert(`Número ${cont}`);
    }
}

export function atv3Desafio3(){
    let number = prompt("Qual número que usar pra contar de modo regressivo");
    console.log("===============================");
    while(number >= 0){
        console.log("-> "+number);
        number--;
    }
}

export function atv3Desafio4(){
    let number = prompt("Qual número que usar pra contar de modo progressivo");
    let count=0;
    console.log("===============================");
    while(count <= number){
        console.log("-> "+count);
        count++;
    }
}

// 4 defasio
export function atv4Desafio1(){
    console.log("Boas vidas");
}

export function atv4Desafio2(){
    const nome = "Italo de Assis Silva Lopes";
    console.log(`Olá, ${nome}!`);
}

export function atv4Desafio3(){
    const nome = "Italo de Assis Silva Lopes";
    alert(`Olá, ${nome}!`);
}

export function atv4Desafio4(){
    const res = prompt(" Qual a linguagem de programação que você mais gosta?.");
    alert(`A linguagem de programação que você mais gosta é ${res}`);
}

export function atv4Desafio5(){
    const valor1 = 10;
    const valor2 = 5;
    const resultado = valor1 + valor2;
    console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);
}

export function atv4Desafio6(){
    const valor1 = 10;
    const valor2 = 5;
    const resultado = valor1 - valor2;
    console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);
}

export function atv4Desafio7(){
    const age = prompt("Qual a sua idade?");
    const menssage = (age >= 18)? "Voce é maior de idade" : "Menor de iadade";
    console.log(menssage);
}

export function atv4Desafio8(){
    const numero = prompt("Digite um numero?");
    let menssage = "";
    if(numero > 0){
        menssage ="Positivo";
    }else{
        if(numero == 0){
            menssage = "Zero";
        }else if(numero < 0){
            menssage = "Negativo";
        }
    }
    console.log(menssage);
}

export function atv4Desafio9(){
    let count = 0;
    while(count < 10){
        count ++;
        console.log("-> "+count);
    }
}

export function atv4Desafio10(){
    const nota = 8;
    const aluno = nota >= 7? "Aprovado" : "Reprovado";
    console.log(aluno);
}

export function atv4Desafio11(){
    const random = Math.random();
    console.log(random);
}

export function atv4Desafio12(){
    const number = parseInt(Math.random()* 10 + 1);
    console.log("Número aleatorio: "+number);
}

export function atv4Desafio13(){
    const number =parseInt(Math.random()* 1000 +1);
    console.log("Número aleatorio: "+number);
}