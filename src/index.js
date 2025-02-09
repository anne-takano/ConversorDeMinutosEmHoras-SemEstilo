window.converterMinutos = converterMinutos;
window.reiniciarConversao = reiniciarConvercao;

function converterMinutos() {
  let valorConverter = Number(document.getElementById("minutosInput").value);

  if (isNaN(valorConverter) || valorConverter <= 0) {
    document.getElementById("resultado").innerText =
      "Por favor, insira um número válido.";
    return;
  }

  let horasConvertidas = Math.floor(valorConverter / 60);
  let minutosConvertidos = valorConverter % 60;
  let palavraValorConverter = valorConverter > 1 ? "minutos" : "minuto";
  let palavraHoras = horasConvertidas > 1 ? "horas" : "hora";
  let palavraMinutos = minutosConvertidos > 1 ? "minutos" : "minuto";
  let mensagemConvercao = `${valorConverter} ${palavraValorConverter} equivale a ${horasConvertidas} ${palavraHoras} e ${minutosConvertidos} ${palavraMinutos}`;

  document.getElementById("resultado").innerText = mensagemConvercao;
  document.getElementById("reiniciar").removeAttribute("disabled");
}
function limparCampo(campo) {
  campo.value = "";
}
function reiniciarConvercao() {
  limparCampo(document.querySelector("input"));
  document.getElementById("minutosInput").innerText = "";
  document.getElementById("resultado").innerText = "";
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
