// nav-bar inicio js
const butao = document.querySelectorAll(".selecao");
const campo = document.querySelectorAll(".painel");


butao.forEach(btn => {//percorre pelos botão
    btn.addEventListener("click", () => {// da o evento de click
        campo.forEach(p => p.classList.remove('ativo'));// tira o div de flex/ativo
        document.getElementById(btn.dataset.alvo).classList.add('ativo');// adiciona ativo ao div
    });
});

campo[0].classList.add('ativo');// deixa a primera div aparecendo 

const pag = document.querySelector("#area_cliente");

pag.addEventListener("click", function() {
    window.location.href = "Cliente.html";
});

// nav-bar fim js


// painel_agenda data top inicio js
let dataAtual = new Date();
const dataTexto = document.getElementById("data_texto");

function mostrarData() {
    dataTexto.textContent = dataAtual.toLocaleDateString("pt-br", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
}
function mudarDia(n) {
    dataAtual.setDate(dataAtual.getDate() + n);
    mostrarData();
}


document.getElementById("sel-dat-ant").addEventListener("click", () => mudarDia(-1));
document.getElementById("sel-dat-pro").addEventListener("click", () => mudarDia(1));
document.getElementById("sel-dat-hoj").addEventListener("click", () => {
    dataAtual = new Date();
    mostrarData();
});

mostrarData();
// painel_agenda data top fim js

// alerta de direitos
document.addEventListener("contextmenu", function(evento) {
    evento.preventDefault();
    alert("© 2026 AgendaMais. Todos os direitos reservados.");
});
// fim fo alerta
