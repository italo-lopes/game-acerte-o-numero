console.log("funcionado");
const recebeValor = document.getElementById("click");
const text = document.getElementById("textNumberLimit");
recebeValor.addEventListener("click", ()=>{
    let number = document.getElementById("quantity").value;
    text.innerHTML = "O valor esta entre"+ number + "menor que";
    console.log("O button foi clicado", number);

});