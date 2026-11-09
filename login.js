const nomesPerfis = {
    aluno: "Aluno",
    professor: "Professor",
    socio: "Sócio",
};

const etapaPerfil = document.getElementById("etapa-perfil");
const etapaLogin = document.getElementById("etapa-login");
const formularioPerfil = document.getElementById("form-perfil");
const formularioLogin = document.getElementById("form-login");
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const erroLogin = document.getElementById("erro-login");

let perfilEscolhido = "";

// Guarda o perfil escolhido e mostra a segunda etapa no mesmo cartão.
formularioPerfil.addEventListener("submit", function (evento) {
    evento.preventDefault();

    perfilEscolhido = new FormData(formularioPerfil).get("perfil");
    document.getElementById("perfil-escolhido").textContent =
        "Perfil: " + nomesPerfis[perfilEscolhido];

    etapaPerfil.hidden = true;
    etapaLogin.hidden = false;
    usuario.focus();
});

document.getElementById("trocar-perfil").addEventListener("click", function () {
    etapaLogin.hidden = true;
    etapaPerfil.hidden = false;
    formularioLogin.reset();
    erroLogin.hidden = true;
    formularioPerfil.querySelector("input:checked").focus();
});

formularioLogin.addEventListener("submit", function (evento) {
    evento.preventDefault();

    // Credenciais fictícias usadas apenas na demonstração.
    if (usuario.value.trim() !== "demo" || senha.value !== "movimente") {
        erroLogin.hidden = false;
        erroLogin.textContent = "Use o login e a senha de demonstração indicados acima.";
        senha.focus();
        return;
    }

    // O endereço leva apenas o perfil escolhido.
    window.location.href = "index.html?perfil=" + encodeURIComponent(perfilEscolhido);
});