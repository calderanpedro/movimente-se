const pagina = document.documentElement;
const perfil = new URLSearchParams(window.location.search).get("perfil");

const nomesPerfis = {
    aluno: "Aluno",
    professor: "Professor",
    socio: "Sócio",
};

if (Object.hasOwn(nomesPerfis, perfil)) {
    configurarPerfil();
    configurarAgenda();
    configurarTema();
} else {
    window.location.replace("login.html");
}

function configurarPerfil() {
    pagina.dataset.visao = perfil;
    document.getElementById("perfil-atual").textContent = "Perfil: " + nomesPerfis[perfil];

    // Só mostra os elementos que pertencem ao perfil escolhido.
    document.querySelectorAll("[data-perfil]").forEach(function (elemento) {
        elemento.hidden = elemento.dataset.perfil !== perfil;
    });
}

function configurarAgenda() {
    const botaoAgenda = document.getElementById("abrir-agenda");
    const agendaCompleta = document.getElementById("agenda-completa");

    botaoAgenda.addEventListener("click", function () {
        agendaCompleta.showModal();
    });
}

function configurarTema() {
    const botaoTema = document.getElementById("botao-tema");

    botaoTema.addEventListener("click", function () {
        const ativarEscuro = pagina.dataset.tema !== "escuro";
        pagina.dataset.tema = ativarEscuro ? "escuro" : "claro";
        botaoTema.setAttribute("aria-pressed", String(ativarEscuro));
    });
}