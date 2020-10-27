const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false
}

// Pegando valores do html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

/* Adiciona Mapa define latitude, longitude e zoom do mapa*/
const map = L.map("mapid", options).setView([lat, lng], 13);

// TileLayer e atribuições
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
.addTo(map);

// Ícone
const icon = L.icon({
  iconUrl: "/images/map-marker.svg", 
  iconSize: [58, 68],
  icoAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// Criando Marcador

L.marker([lat, lng], { icon })
  .addTo(map)

  /* Image Gallery */

  function selectImage(event) {
    const button = event.currentTarget

    // remover todas as classes .active
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach((button) => {
      button.classList.remove("active")
    })


    /*
    const buttons = document.querySelectorAll(".images button");
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button) {
      button.classList.remove("active")
    }
    */
    // selecionar a imagem clicada
    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");

    // atualizar o container de imagem
    imageContainer.src = image.src;
    // adicionar a classe .active para este botão
    bu.classList.add("active");
  }
