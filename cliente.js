// alerta de direitos
document.addEventListener("contextmenu", function(evento) {
    evento.preventDefault();
    alert("© 2026 AgendaMais. Todos os direitos reservados.");
});
// fim fo alerta


// botao para mudar para pagina empressa inicio
const but = document.querySelector(".empressa-cliente");

but.addEventListener("click", function() {
    window.location.href = "index.html";
});
// botao para mudar para pagina empressa fim