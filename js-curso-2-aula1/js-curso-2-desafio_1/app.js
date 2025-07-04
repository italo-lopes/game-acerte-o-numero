const titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do Desafio.";

function consoleVerificar(){
    console.log("O botão foi clicado");
}

function alertVerificar(){
    alert("Eu amo JS");
}

function promptVerificar(){
    const city = prompt("O nome de uma cidade Brasileira?");
    alert(`Estive em ${city} e lembrei de você`)
}

function someVerificar(){
  const numberA = prompt("Digite o primeiro número?");
  const numberB = prompt("Digite o segundo número?");
  const soma = parseInt(numberA) + parseInt(numberB);
  alert(`A soma de ${numberA} + ${numberB} = ${soma} `);  
}