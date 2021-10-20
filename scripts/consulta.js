function logar() {
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    var success = window.open("", "Registro", "width=1200,height=720");
    success.document.write("<p id='mostra_nome'></p>");
    success.document.write("<p id='mostra_cpf'></p>");
    success.document.getElementById("mostra_nome").innerHTML = nome;
    success.document.getElementById("mostra_cpf").innerHTML = cpf;
    return success;
}