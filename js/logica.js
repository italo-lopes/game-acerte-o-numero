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