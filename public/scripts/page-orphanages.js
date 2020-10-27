/* Adiciona Mapa */
const map = L.map("mapid").setView([-23.1894443, -46.0030986], 13);

// TileLayer e atribuições
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",).addTo(map);

// Ícone
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  icoAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function addMarker({id, name, lat, lng}) {

  /* Pop up */
  const popup = L.popup({
    closeButton: false,
    className: "map-popup",
    minWidth: 240,
    minHeight: 240,
  }).setContent(`${name} <a href="/orphanage?id=${id}"> <img src="/images/arrow-white.svg" /> </a>`);

  L
  .marker([lat,lng], { icon })
  .addTo(map)
  .bindPopup(popup)
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
orphanagesSpan.forEach( span => {
  const orphanage = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng
  }
  addMarker(orphanage)
})




/* Pop up *//*
const popup = L.popup({
  closeButton: false,
  className: "map-popup",
  minWidth: 240,
  minHeight: 240,
}).setContent('Fake Orfanato <a href="/orphanage?id=1" class="choose-orphanage"> <img src="/images/arrow-white.svg" /> </a>');

L.marker([-23.1894443, -46.0030986], { icon })
  .addTo(map)
  .bindPopup(popup)
*/