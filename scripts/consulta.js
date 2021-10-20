function logar() {
    var nome = document.getElementById("nome").value;
    var cpf = document.getElementById("cpf").value;
    window.open("msg_registro_consulta.html", "_blank", "width=1200,height=720").focus();
    msg_registro_consulta.document.write("<p id='mostra_nome'></p>");
    msg_registro_consulta.document.write("<p id='mostra_cpf'></p>");
    msg_registro_consulta.document.getElementById("mostra_nome").innerHTML = nome;
    msg_registro_consulta.document.getElementById("mostra_cpf").innerHTML = cpf;
}