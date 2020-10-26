/* Adiciona Mapa */
const map = L.map("mapid").setView([-23.1894443, -46.0030986], 13);

// TileLayer e atribuições
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// Ícone
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  icoAnchor: [29, 68],
});

/* Adiciona marcador */

let marker;

map.on("click", (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;

  // Remove marcador se houver
  marker && map.removeLayer(marker);

  // Adiciona ícone no mapa
  marker = L.marker([lat, lng], { icon }).addTo(map);
});

// Adiciona o campo de fotos
function addPhotoField() {
  // pegar o container de fotos
  const container = document.querySelector("#images");
  // Pegar o container para duplicar
  const fieldsContainer = document.querySelectorAll(".new-upload");
  // realizar a duplicação da última imagem adicionada
  const newFieldContainer = fieldsContainer[
    fieldsContainer.length - 1
  ].cloneNode(true);
  // Verificar se o campo está vazio antes de adicionar ao container de imagens
  const input = newFieldContainer.children[0];

  if (input.value == "") {
    return;
  }
  // Limpar o campo antes de adicionar ao container de imagens
  input.value = "";
  // Adicionar o clone ao container de imagens
  container.appendChild(newFieldContainer);
}

function deleteField(event) {
  const span = event.currentTarget;
  const fieldsContainer = document.querySelectorAll(".new-upload");

  if (fieldsContainer.length <= 1) {
    // limpar o valor do campo
    span.parentNode.children[0].value = "";
    return;
  }

  // deletar o campo pai (div) pelo campo filho (span)
  span.parentNode.remove();
}

// Ativar do sim ou não
function toggleSelect(event) {
  // retirar a class .active (dos botões)
  document
    .querySelectorAll(".button-select button")
    .forEach((button) => button.classList.remove("active"));
  // colocar a class .active no botão clicado
  const button = event.currentTarget;
  button.classList.add("active");
  // atualizar o input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekend"]');
  input.value = button.dataset.value;
}
/*
    function.validate(event) {
        // Validar se lat e lng estão preenchidos
        const needsLatAndlng = true;
        if(needsLatAndlng) {
            event.preventDefault();
            alert("Selecione um ponto no mapa")
        }
        
    }
*/
