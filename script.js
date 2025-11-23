// 2.2. Data to Use - İllerin resmi koordinatları [Boylam, Enlem] ve MEŞHUR ŞEYLER
const cityData = [
    { name: "ADANA", coords: [35.3324, 36.9719], hint: "Kebabı" },
    { name: "ADIYAMAN", coords: [38.2784, 37.7607], hint: "Nemrut Dağı" },
    { name: "AFYON", coords: [30.5418, 38.7558], hint: "Kaymağı" },
    { name: "AĞRI", coords: [43.0544, 39.7226], hint: "Dağı" },
    { name: "AKSARAY", coords: [34.0284, 38.3746], hint: "Ihlara Vadisi" },
    { name: "AMASYA", coords: [35.832, 40.6544], hint: "Elması" },
    { name: "ANKARA", coords: [32.8496, 39.9347], hint: "Anıtkabir" },
    { name: "ANTALYA", coords: [30.6868, 36.894], hint: "Düden Şelalesi" },
    { name: "ARDAHAN", coords: [42.7031, 41.1103], hint: "Kaşar Peyniri" },
    { name: "ARTVIN", coords: [41.82, 41.1816], hint: "Kafkasör Şenlikleri" },
    { name: "AYDIN", coords: [27.8426, 37.8528], hint: "İncir" },
    { name: "BALIKESIR", coords: [27.8833, 39.6521], hint: "Höşmerim Tatlısı" },
    { name: "BARTIN", coords: [32.3378, 41.6364], hint: "Amasra Kalesi" },
    { name: "BATMAN", coords: [41.1235, 37.8783], hint: "Hasankeyf" },
    { name: "BAYBURT", coords: [40.2284, 40.2587], hint: "Sırakayalar Şelalesi" },
    { name: "BILECIK", coords: [29.9805, 40.1426], hint: "Türbeleri" },
    { name: "BINGÖL", coords: [40.4895, 38.8891], hint: "Turnalar Gölü" },
    { name: "BITLIS", coords: [42.1084, 38.3997], hint: "Beş Minare" },
    { name: "BOLU", coords: [31.6107, 40.7333], hint: "Abant Gölü" },
    { name: "BURDUR", coords: [30.2843, 37.7193], hint: "İnsuyu Mağarası" },
    { name: "BURSA", coords: [29.0708, 40.2071], hint: "İskender Kebabı" },
    { name: "ÇANAKKALE", coords: [26.4142, 40.1566], hint: "Gelibolu Şehitliği" },
    { name: "ÇANKIRI", coords: [33.6168, 40.5985], hint: "Taşmescit" },
    { name: "ÇORUM", coords: [34.9536, 40.5509], hint: "Leblebisi" },
    { name: "DENIZLI", coords: [29.0865, 37.7735], hint: "Horozu" },
    { name: "DIYARBAKIR", coords: [40.2145, 37.9189], hint: "Karpuzu" },
    { name: "DÜZCE", coords: [31.1639, 40.8393], hint: "Saklıkent ve Aktaş Şelaleleri" },
    { name: "EDIRNE", coords: [26.5604, 41.6755], hint: "Selimiye Camii" },
    { name: "ELAZIG", coords: [39.2229, 38.6755], hint: "Çaydaçıra Halkoyunu" },
    { name: "ERZINCAN", coords: [39.4905, 39.7492], hint: "Tulum Peyniri" },
    { name: "ERZURUM", coords: [41.2709, 39.9051], hint: "Cağ Kebabı" },
    { name: "ESKISEHIR", coords: [30.5025, 39.77], hint: "Lületaşı" },
    { name: "GAZIANTEP", coords: [37.3867, 37.0646], hint: "Baklava" },
    { name: "GIRESUN", coords: [38.3903, 40.9175], hint: "Fındık" },
    { name: "GÜMÜSHANE", coords: [39.4671, 40.4611], hint: "Pestil" },
    { name: "HAKKARI", coords: [43.7392, 37.5761], hint: "Ters Lale" },
    { name: "HATAY", coords: [36.1621, 36.2018], hint: "Künefe" },
    { name: "IGDIR", coords: [44.0455, 39.9193], hint: "Kayısı" },
    { name: "ISPARTA", coords: [30.5589, 37.7636], hint: "Gül" },
    { name: "ISTANBUL", coords: [28.9766, 41.0291], hint: "Kız Kulesi" },
    { name: "IZMIR", coords: [27.1297, 38.4101], hint: "Kordon" },
    { name: "K.MARAS", coords: [36.9283, 37.5894], hint: "Dondurması" },
    { name: "KARABÜK", coords: [32.6264, 41.1982], hint: "Safranbolu Evleri" },
    { name: "KARAMAN", coords: [33.2219, 37.1814], hint: "Koyunu" },
    { name: "KARS", coords: [43.0958, 40.6094], hint: "Kazı" },
    { name: "KASTAMONU", coords: [33.7719, 41.3723], hint: "Taşköprü Sarımsağı" },
    { name: "KAYSERI", coords: [35.4801, 38.7229], hint: "Pastırması" },
    { name: "KIRIKKALE", coords: [33.516, 39.8417], hint: "Silah Müzesi ve Fabrikaları" },
    { name: "KIRKLARELI", coords: [27.2285, 41.7378], hint: "Dupnisa Mağarası" },
    { name: "KIRSEHIR", coords: [34.164, 39.148], hint: "Ahi Evran Heykeli" },
    { name: "KILIS", coords: [37.1139, 36.7176], hint: "Yorganları" },
    { name: "KOCAELI", coords: [29.9507, 40.7732], hint: "Pişmaniye" },
    { name: "KONYA", coords: [32.511, 37.8704], hint: "Mevlana Türbesi" },
    { name: "KÜTAHYA", coords: [29.9879, 39.4217], hint: "Çinisi" },
    { name: "MALATYA", coords: [38.3143, 38.3475], hint: "Kayısısı" },
    { name: "MANISA", coords: [27.4297, 38.6222], hint: "Mesir Macunu" },
    { name: "MARDIN", coords: [40.7584, 37.3136], hint: "Kaburga Dolması" },
    { name: "MERSIN", coords: [34.609, 36.8], hint: "Tantuni" },
    { name: "MUGLA", coords: [28.3658, 37.2196], hint: "Turistik" },
    { name: "MUS", coords: [41.4878, 38.7334], hint: "Malazgirt Ovası" },
    { name: "NEVSEHIR", coords: [34.714, 38.6246], hint: "Peri Bacaları" },
    { name: "NIGDE", coords: [34.6775, 37.9718], hint: "Aladağlar" },
    { name: "ORDU", coords: [37.874, 40.9881], hint: "Fındık" },
    { name: "OSMANIYE", coords: [36.2485, 37.0743], hint: "Yer Fıstığı" },
    { name: "RIZE", coords: [40.5214, 41.0224], hint: "Çay" },
    { name: "SAKARYA", coords: [30.3793, 40.7489], hint: "Islama Köfte" },
    { name: "SAMSUN", coords: [36.3234, 41.2871], hint: "Atatürk Anıtı" },
    { name: "SIIRT", coords: [41.9442, 37.9251], hint: "Büryan Kebabı" },
    { name: "SINOP", coords: [35.16, 42.0269], hint: "Tarihi Cezaevi" },
    { name: "SIVAS", coords: [37.0172, 39.7515], hint: "Kangal Köpeği" },
    { name: "SANLIURFA", coords: [38.7922, 37.1512], hint: "Çiğ Köfte" },
    { name: "SIRNAK", coords: [42.4608, 37.5228], hint: "Mem-u Zin Türbesi" },
    { name: "TEKIRDAG", coords: [27.5144, 40.9792], hint: "Köftesi" },
    { name: "TOKAT", coords: [36.5559, 40.3063], hint: "Asma Yaprağı, Zile Pekmezi" },
    { name: "TRABZON", coords: [39.7191, 41.0061], hint: "Uzungöl" },
    { name: "TUNCELI", coords: [39.5491, 39.1069], hint: "Munzur Vadisi Milli Parkı" },
    { name: "USAK", coords: [29.4056, 38.6716], hint: "Uşak Battaniyesi" },
    { name: "VAN", coords: [43.3816, 38.497], hint: "Kedisi" },
    { name: "YALOVA", coords: [29.2712, 40.656], hint: "Termal Kaplıcaları" },
    { name: "YOZGAT", coords: [34.8055, 39.8212], hint: "Testi Kebabı" },
    { name: "ZONGULDAK", coords: [31.7925, 41.4514], hint: "Kömür Madenleri" }
];

let map;
let markerLayer;
let secretCity = null;
let timer;
let timeLeft = 30; 
let hintUsed = false;

// Yönerge Metni
const instructionsText = `
    Oyunumuzda gizli bir şehrimiz var. 30 saniye içinde istediğiniz bir şehrin merkezine basarak gizli şehirimiz ve bastığınız şehir arasındaki mesafeyi görebilirsiniz. Mesafeye göre tahminlerinize devam edebilirsiniz. Gizli şehri bulamazsanız, **İPUCU İSTE** butonuna tıklayarak gizli şehirde meşhur olan bir şeyi göreceksiniz. Kilometre 0'a indiğinde oyunu kazanacaksınız. 30 saniye dolduğunda şehri bulamazsanız oyunu kaybedeceksiniz. Başarılar.
`;


// 3.2. Basic Algorithms - Haversine Formülü
function haversineDistance(coords1, coords2) {
    const R = 6371; 
    const toRad = (x) => x * Math.PI / 180;

    const lat1 = coords1[1];
    const lon1 = coords1[0];
    const lat2 = coords2[1];
    const lon2 = coords2[0];

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c; 
}

// Harita başlatma ve temel fonksiyonlar
function initMap() {
    // Yönerge metnini yükleme
    document.getElementById('game-instructions').innerHTML = instructionsText;
    document.getElementById('game-info').style.display = 'none';

    const osmLayer = new ol.layer.Tile({
        source: new ol.source.OSM()
    });

    markerLayer = new ol.layer.Vector({
        source: new ol.source.Vector()
    });

    map = new ol.Map({
        target: 'map',
        layers: [osmLayer, markerLayer],
        view: new ol.View({
            center: ol.proj.fromLonLat([35, 39]),
            zoom: 6 
        })
    });
    
    map.on('click', handleMapClick);
    addCityMarkers(cityData, '#9370DB'); // Başlangıçta Lila/Mor noktalar
}

// Şehirleri haritaya ekleme fonksiyonu
function addCityMarkers(cities, color) {
    const features = cities.map(city => {
        const iconFeature = new ol.Feature({
            geometry: new ol.geom.Point(ol.proj.fromLonLat(city.coords)),
            name: city.name,
            coords: city.coords
        });
        
        iconFeature.setStyle(new ol.style.Style({
            image: new ol.style.Circle({
                radius: 6,
                fill: new ol.style.Fill({ color: color }),
                stroke: new ol.style.Stroke({ color: '#fff', width: 1 })
            })
        }));
        return iconFeature;
    });

    markerLayer.getSource().clear();
    markerLayer.getSource().addFeatures(features);
}

// Zamanlayıcıyı başlatma fonksiyonu
function startTimer() {
    timeLeft = 30;
    document.getElementById('timer-display').textContent = `Süre: ${timeLeft}s`;
    
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timer-display').textContent = `Süre: ${timeLeft}s`;
        
        if (timeLeft <= 10) {
            document.getElementById('timer-display').style.color = 'red';
        } else {
            document.getElementById('timer-display').style.color = 'white';
        }

        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame(false); 
        }
    }, 1000);
}

// Oyunu Başlatma
function startGame() {
    clearInterval(timer);
    
    const randomIndex = Math.floor(Math.random() * cityData.length);
    secretCity = cityData[randomIndex];
    
    // Ekranı sıfırlama ve göstergeleri hazırlama
    addCityMarkers(cityData, '#9370DB'); // Lila/Mor noktalar
    document.getElementById('distance-display').textContent = 'Mesafe: ? km';
    document.getElementById('distance-display').style.color = 'white';
    document.getElementById('start-button').style.display = 'none';
    document.getElementById('restart-button').style.display = 'none';
    
    // Yönerge ve İpucu Butonlarını Yönetme
    document.getElementById('game-instructions').style.display = 'none';
    document.getElementById('game-info').style.display = 'block';
    
    hintUsed = false;
    document.getElementById('hint-button').style.display = 'block';
    document.getElementById('hint-button').disabled = false;
    document.getElementById('hint-button').textContent = 'İPUCU İSTE';
    document.getElementById('feedback-message').textContent = 'Tahminlerini yap!'; 

    startTimer();
}

// İpucu İste Butonu Fonksiyonu
function getHint() {
    if (!secretCity || hintUsed) return;
    
    document.getElementById('feedback-message').textContent = `Meşhur Olan Şey: ${secretCity.hint}`;
    document.getElementById('hint-button').disabled = true; 
    document.getElementById('hint-button').textContent = 'İpucu Alındı';
    hintUsed = true;
}


// Harita Tıklama İşlemi
function handleMapClick(event) {
    if (!secretCity || timeLeft <= 0) return;

    map.forEachFeatureAtPixel(event.pixel, (feature) => {
        const guessedCoords = feature.get('coords');
        
        const distance = haversineDistance(guessedCoords, secretCity.coords);
        const distanceRounded = Math.round(distance);

        document.getElementById('distance-display').textContent = `Mesafe: ${distanceRounded} km`;

        feature.setStyle(new ol.style.Style({
            image: new ol.style.Circle({
                radius: 6,
                fill: new ol.style.Fill({ color: '#483D8B' }), // Koyu Mor Tahmin Noktası
                stroke: new ol.style.Stroke({ color: '#fff', width: 1 })
            })
        }));

        const maxDistance = 1500; 
        const colorValue = Math.min(distanceRounded / maxDistance, 1);
        
        const r = Math.round(255 * colorValue);
        const g = Math.round(255 * (1 - colorValue));
        document.getElementById('distance-display').style.color = `rgb(${r}, ${g}, 0)`;


        if (distanceRounded === 0) {
            endGame(true); 
        }

        return true; 
    }, {
        hitTolerance: 5
    });
}

// Oyunu Bitirme
function endGame(win) {
    clearInterval(timer);
    document.getElementById('timer-display').style.color = 'white';
    document.getElementById('hint-button').style.display = 'none'; 
    
    if (win) {
        document.getElementById('feedback-message').textContent = `TEBRİKLER! ${secretCity.name} şehrini ${30 - timeLeft} saniyede buldunuz.`;
        document.getElementById('distance-display').textContent = 'Mesafe: 0 km (KAZANDINIZ)';
        document.getElementById('distance-display').style.color = '#008000'; // Yeşil Kazandınız Yazısı
    } else {
        document.getElementById('feedback-message').textContent = `SÜRE DOLDU! Gizli şehir ${secretCity.name} idi.`;
        document.getElementById('distance-display').textContent = 'Mesafe: Çok Uzak (KAYBETTİNİZ)';
        document.getElementById('distance-display').style.color = '#FF0000'; // Kırmızı Kaybettiniz Yazısı
    }

    // Gizli şehri yeşil renkte işaretle
    const secretFeature = markerLayer.getSource().getFeatures().find(f => f.get('name') === secretCity.name);
    if (secretFeature) {
        secretFeature.setStyle(new ol.style.Style({
            image: new ol.style.Circle({
                radius: 7,
                fill: new ol.style.Fill({ color: '#008000' }), // Yeşil Doğru Şehir Noktası
                stroke: new ol.style.Stroke({ color: '#fff', width: 2 })
            })
        }));
    }

    document.getElementById('restart-button').style.display = 'block';
    document.getElementById('restart-button').onclick = startGame; 
    secretCity = null; 
}

window.onload = initMap;