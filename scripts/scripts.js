function onClickMenu() {
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");
	
	document.getElementById("menu-bg").classList.toggle("change-bg");
}

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
