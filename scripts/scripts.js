$(document).ready(function() {

  $("#enviar").click(function() {

    let nome = $("#inputNome").val();
    let email = $("#inputEmail").val();
    let telefone = $("#inputTelefone").val();
    let mensagem = $("#modalTextarea").val();

    $.post('',{
      "nome": nome,
      "email": email,
      "telefone": telefone,
      "mensagem": mensagem,
    });
  });
});


