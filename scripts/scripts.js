function onClickMenu() {
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");

  document.getElementById("menu-bg").classList.toggle("change-bg");
}

$(document).ready(function () {

  $("#enviar").click(function () {

    var nome = $("#inputNome").val();
    var email = $("#inputEmail").val();
    var telefone = $("#inputTelefone").val();
    var mensagem = $("#modalTextarea").val();

    $.post('', {
      "nome": nome,
      "email": email,
      "telefone": telefone,
      "mensagem": mensagem,
    });
  });
})