// alerta de direitos

document.addEventListener("contextmenu", function(evento) {
    evento.preventDefault();
    alert("© 2026 AgendaMais. Todos os direitos reservados.");
});

// fim fo alerta


// nav-bar inicio


// inicio bota que troca de pagina
const but = document.querySelector(".empressa-cliente");

but.addEventListener("click", function() {
    window.location.href = "index.html";
});


// fim botao que troca de pagina

// bota que adciona ativo inicio
const botao = document.querySelectorAll('.but_cli');
const campo = document.querySelectorAll('.painel');

botao.forEach(btn => {//percorre pelos botão
    btn.addEventListener("click", () => {// da o evento de click
        campo.forEach(p => p.classList.remove('ativo'));// tira o div de flex/ativo
        document.getElementById(btn.dataset.alvo).classList.add('ativo');// adiciona ativo ao div
    });
});

campo[0].classList.add('ativo');// deixa a primera div aparecendo 

// bota que adciona ativo  fim

// nav-bar fim


// localização atual inicio

navigator.geolocation.getCurrentPosition(function(posicao) {

    let latitude = posicao.coords.latitude;
    let longitude = posicao.coords.longitude;

    console.log(latitude);
    console.log(longitude);

    fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`)
    .then(resposta => resposta.json())
    .then(dados => {

        let estado = dados.address.state;
        let codigo = dados.address["ISO3166-2-lvl4"];
        let sigla = codigo ? codigo.split("-")[1] : "";

        document.querySelector("#localização").textContent =
        sigla ? `${estado} - ${sigla}` : estado;

    });

});

// localização atual fim