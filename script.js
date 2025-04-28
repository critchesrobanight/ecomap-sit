// Инициализация карты
var map = L.map('map-container').setView([42.32, 69.59], 13);

// Подключаем слой карты
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Иконки для разных типов отходов
var icons = {
  plastic: L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2921/2921822.png',
    iconSize: [30, 30],
  }),
  battery: L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/888/888063.png',
    iconSize: [30, 30],
  }),
  glass: L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/809/809957.png',
    iconSize: [30, 30],
  })
};

// Список всех маркеров
var markers = [
  {
    position: [42.321, 69.594],
    type: 'plastic',
    text: 'Пункт переработки: Пластик и бумага'
  },
  {
    position: [42.315, 69.580],
    type: 'battery',
    text: 'Пункт переработки: Батарейки'
  },
  {
    position: [42.330, 69.605],
    type: 'glass',
    text: 'Пункт переработки: Стекло'
  }
];

var leafletMarkers = [];

// Отобразить все маркеры
markers.forEach(marker => {
  var m = L.marker(marker.position, {icon: icons[marker.type]})
    .bindPopup(marker.text)
    .addTo(map);
  m.type = marker.type; // добавляем тип к объекту маркера
  leafletMarkers.push(m);
});

// Фильтрация маркеров
function filterMarkers(type) {
  leafletMarkers.forEach(marker => {
    if (marker.type === type) {
      marker.addTo(map);
    } else {
      map.removeLayer(marker);
    }
  });
}

// Показать все маркеры
function showAllMarkers() {
  leafletMarkers.forEach(marker => {
    marker.addTo(map);
  });
}
