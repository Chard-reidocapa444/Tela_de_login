const usuario = localStorage.getItem("usuarioLogado");
const mensagem = document.getElementById("mensagem");

if (usuario) {
  mensagem.textContent = `Bem-vindo, ${usuario}!`;
} else {
  mensagem.textContent = "Usuário não identificado.";
}
