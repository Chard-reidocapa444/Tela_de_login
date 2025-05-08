document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch(
    `http://localhost:3000/usuarios?username=${username}&password=${password}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data.length > 0) {
        localStorage.setItem("usuarioLogado", data[0].username);
        window.location.href = "bemvindo.html";
      } else {
        alert("Usuário ou senha incorretos!");
      }
    })
    .catch((err) => {
      console.error("Erro ao conectar com a API:", err);
      alert("Erro ao tentar logar. Verifique o servidor.");
    });
});
