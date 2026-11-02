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