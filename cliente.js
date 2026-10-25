// alerta de direitos
document.addEventListener("contextmenu", function(evento) {
    evento.preventDefault();
    alert("© 2026 AgendaMais. Todos os direitos reservados.");
});
// fim fo alerta

const but = document.querySelector("#emp");

but.addEventListener("click", function() {
    window.location.href = "index.html";
});