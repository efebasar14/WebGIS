// Haritayı başlat
const map = L.map('map').setView([39.925, 32.866], 6); // Türkiye merkez koordinatı

// OpenStreetMap katmanı
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// MongoDB'den veri çek ve marker ekle
fetch('/stations')
  .then(res => res.json())
  .then(data => {
      data.forEach(station => {
          if(station.latitude && station.longitude) { // boş koordinatları atla
              L.marker([station.latitude, station.longitude])
                .addTo(map)
                .bindPopup(`<b>${station.title || 'İsimsiz'}</b><br>${station.city || ''}`);
          }
      });
  })
  .catch(err => console.error('Veri çekme hatası:', err));
