
function calculate(){

    var nome = "";
    var sobrenome = "";
    var nomeCompleto

    nome = document.getElementById("name").value
    sobrenome = document.getElementById("sobrenome").value
    nomeCompleto = (nome + " " + sobrenome)

    document.getElementById("nameUser").innerHTML = nomeCompleto
    document.getElementById("recado").innerHTML = ("Olá " + nomeCompleto + "! Seja bem vindo ao nosso site, aqui você poderá fazer compras e saber de detalher de eventos e muito mais!")
    document.getElementById("nameMenu").innerHTML = ("| " + nomeCompleto)
}