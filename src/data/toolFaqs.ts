/**
 * MyLocationLab — Tool FAQs Registry
 * Comprehensive, localized FAQs for all 10 location & geodesy tools.
 * Supports en, es, fr, de, pt, hi, id with contextual interlinking.
 */
import { getLocalizedPath, type SupportedLang, defaultLang } from '../i18n/config';

export interface ToolFAQItem {
  question: string;
  answer: string;
}

export const toolFaqTitles: Record<string, string> = {
  en: "Frequently Asked Questions",
  es: "Preguntas Frecuentes",
  fr: "Foire Aux Questions",
  de: "Häufig Gestellte Fragen",
  pt: "Perguntas Frequentes",
  hi: "अक्सर पूछे जाने वाले सवाल",
  id: "Pertanyaan yang Sering Diajukan"
};

type FaqBuilder = (l: SupportedLang) => ToolFAQItem[];

export const toolFaqsData: Record<string, Record<string, FaqBuilder>> = {
  'gps-coordinates': {
    en: (l) => [
      {
        question: "How do I find my current GPS coordinates?",
        answer: "This tool automatically queries your device's built-in GNSS hardware using the standard browser Geolocation API when the page loads. When prompted, tap <strong>Allow</strong> to grant permission. If geolocation was previously blocked or failed, click the <strong>Find My GPS Coordinates</strong> button to trigger a manual hardware poll."
      },
      {
        question: "What format are the GPS coordinates in?",
        answer: `By default, coordinates are rendered in <strong>Decimal Degrees (DD)</strong> (e.g. <code>28.6139, 77.2090</code>), the universal standard for modern web mapping and GPS receivers. The tool also provides traditional <strong>Degrees Minutes Seconds (DMS)</strong>. To convert between UTM, MGRS, or Plus Codes, visit our <a href="${getLocalizedPath('/tools/coordinate-converter/', l)}">Coordinate Converter</a>.`
      },
      {
        question: "How accurate are these GPS coordinates?",
        answer: "Under clear outdoor skies, modern dual-band smartphones achieve a horizontal accuracy radius of <strong>3 to 5 meters</strong> (10–16 feet). Indoors, near skyscrapers, or beneath heavy forest canopy, signal reflection (multipath) may widen this margin to 10–50 meters. Your exact real-time accuracy radius is shown in the results box."
      },
      {
        question: "What is the difference between GPS coordinates and IP-based location?",
        answer: `GPS coordinates are calculated directly from high-precision satellite signals received by your device's radio hardware, providing exact pinpoint accuracy. In contrast, IP geolocation guesses your position based on internet service provider routing centers, which can be off by tens of kilometers. Read our full technical comparison in <a href="${getLocalizedPath('/comparisons/gps-vs-ip-location/', l)}">GPS vs IP Location</a>.`
      },
      {
        question: "How can I convert GPS coordinates into a street address?",
        answer: `You can translate raw numerical coordinates into a street name, house number, and postal code using our <a href="${getLocalizedPath('/tools/reverse-geocoding/', l)}">Reverse Geocoder</a> or inspect your physical position with the interactive <a href="${getLocalizedPath('/tools/address-finder/', l)}">Address Finder</a>.`
      },
      {
        question: "Can I obtain GPS coordinates without an internet connection?",
        answer: `Yes. Your device's internal GNSS receiver receives one-way radio broadcasts directly from orbiting satellites without needing cellular data or Wi-Fi. However, an internet connection speeds up satellite locking via Assisted GPS (A-GPS). Learn how orbital trilateration works in <a href="${getLocalizedPath('/guides/how-gps-location-works/', l)}">How GPS Location Works</a> and monitor satellite health with our <a href="${getLocalizedPath('/tools/gps-accuracy/', l)}">GPS Accuracy Checker</a>.`
      }
    ],
    es: (l) => [
      {
        question: "¿Cómo obtengo mis coordenadas GPS actuales?",
        answer: "Esta herramienta consulta de forma automática el receptor GNSS de su dispositivo mediante la API Geolocation del navegador al cargar la página. Pulse <strong>Permitir</strong> en el aviso de permisos. Si la detección falla, pulse el botón <strong>Obtener Coordenadas GPS</strong> para un nuevo intento manual."
      },
      {
        question: "¿En qué formato se presentan las coordenadas?",
        answer: `Por defecto se muestran en <strong>Grados Decimales (DD)</strong> (ej. <code>28.6139, 77.2090</code>) y formato sexagesimal <strong>Grados Minutos Segundos (DMS)</strong>. Para transformarlas a UTM militar o códigos Plus Code, use nuestro <a href="${getLocalizedPath('/tools/coordinate-converter/', l)}">Conversor de Coordenadas</a>.`
      },
      {
        question: "¿Qué precisión tienen estas coordenadas satelitales?",
        answer: "En exteriores despejados, un smartphone moderno alcanza una precisión de <strong>3 a 5 metros</strong>. En interiores o cañones urbanos, la dispersión puede situarse entre 10 y 50 metros. El margen de error exacto se indica en pantalla en tiempo real."
      },
      {
        question: "¿Cuál es la diferencia entre coordenadas GPS y ubicación por IP?",
        answer: `El GPS calcula su posición mediante señales de satélites en órbita con margen métrico. La geolocalización IP identifica el nodo de su proveedor de internet, pudiendo fallar por decenas de kilómetros. Revise la comparativa en <a href="${getLocalizedPath('/comparisons/gps-vs-ip-location/', l)}">GPS vs Ubicación por IP</a>.`
      },
      {
        question: "¿Cómo convierto estas coordenadas en una dirección postal?",
        answer: `Puede resolver el nombre de calle y número exacto utilizando nuestro <a href="${getLocalizedPath('/tools/reverse-geocoding/', l)}">Geocodificador Inverso</a> o consultar el mapa en el <a href="${getLocalizedPath('/tools/address-finder/', l)}">Buscador de Dirección</a>.`
      },
      {
        question: "¿Puedo obtener coordenadas GPS sin conexión a internet?",
        answer: `Sí. El chip GNSS recibe transmisiones de satélites directamente sin consumir datos móviles. La conexión a internet solo agiliza la sincronización inicial mediante A-GPS. Descubra los fundamentos en <a href="${getLocalizedPath('/guides/how-gps-location-works/', l)}">Cómo funciona el GPS</a> y compruebe su señal con el <a href="${getLocalizedPath('/tools/gps-accuracy/', l)}">Comprobador de Precisión GPS</a>.`
      }
    ],
    fr: (l) => [
      {
        question: "Comment trouver mes coordonnées GPS actuelles ?",
        answer: "Cet outil interroge directement le capteur GNSS de votre appareil via l'API Geolocation standard du navigateur. Cliquez sur <strong>Autoriser</strong> lors de la demande de géolocalisation. En cas d'échec, appuyez sur <strong>Trouver Mes Coordonnées GPS</strong> pour forcer une détection manuelle."
      },
      {
        question: "Sous quel format les coordonnées sont-elles affichées ?",
        answer: `Les coordonnées apparaissent en <strong>Degrés Décimaux (DD)</strong> (ex. <code>48.8584, 2.2945</code>) ainsi qu'en <strong>Degrés Minutes Secondes (DMS)</strong>. Pour des conversions vers la grille militaire UTM ou MGRS, visitez notre <a href="${getLocalizedPath('/tools/coordinate-converter/', l)}">Convertisseur de Coordonnées</a>.`
      },
      {
        question: "Quelle est la précision des coordonnées mesurées ?",
        answer: "En extérieur et ciel dégagé, les smartphones récents offrent une précision de <strong>3 à 5 mètres</strong>. En intérieur ou entre de hauts immeubles, l'incertitude peut atteindre 10 à 50 mètres. Le rayon d'erreur exact est affiché en mètres."
      },
      {
        question: "Quelle différence entre coordonnées GPS et localisation par IP ?",
        answer: `Le GPS repose sur des signaux de satellites en orbite avec une justesse métrique. La géolocalisation IP localise le centre de routage de votre fournisseur d'accès internet, avec des écarts fréquents de plusieurs kilomètres. Lisez notre comparatif complet dans <a href="${getLocalizedPath('/comparisons/gps-vs-ip-location/', l)}">GPS vs Localisation IP</a>.`
      },
      {
        question: "Comment traduire ces coordonnées en adresse physique ?",
        answer: `Utilisez notre outil dédié de <a href="${getLocalizedPath('/tools/reverse-geocoding/', l)}">Géocodage Inverse</a> ou inspectez votre rue sur le <a href="${getLocalizedPath('/tools/address-finder/', l)}">Localisateur d'Adresse</a>.`
      },
      {
        question: "Puis-je mesurer mes coordonnées sans connexion internet ?",
        answer: `Oui. L'antenne GNSS interne capte les ondes radio des satellites sans forfait ni Wi-Fi. La connexion sert uniquement à accélérer l'acquisition initiale via le système A-GPS. Découvrez les détails dans notre guide <a href="${getLocalizedPath('/guides/how-gps-location-works/', l)}">Comment fonctionne le GPS</a> et testez votre signal dans le <a href="${getLocalizedPath('/tools/gps-accuracy/', l)}">Testeur de Précision GPS</a>.`
      }
    ],
    de: (l) => [
      {
        question: "Wie ermittle ich meine aktuellen GPS-Koordinaten?",
        answer: "Das Werkzeug ruft Ihren Gerätestandort über die HTML5-Geolocation-API direkt vom GNSS-Empfänger ab. Bestätigen Sie die Browserabfrage mit <strong>Zulassen</strong>. Falls die Erkennung fehlschlägt, klicken Sie auf <strong>Meine GPS-Koordinaten ermitteln</strong>."
      },
      {
        question: "In welchem Format werden die Koordinaten angezeigt?",
        answer: `Standardmäßig in <strong>Dezimalgrad (DD)</strong> (z.B. <code>52.5200, 13.4050</code>) sowie in traditionellen <strong>Grad Minuten Sekunden (GMS)</strong>. Für UTM- oder MGRS-Gitter nutzen Sie unseren <a href="${getLocalizedPath('/tools/coordinate-converter/', l)}">Koordinaten-Konverter</a>.`
      },
      {
        question: "Wie genau sind die ermittelten Koordinaten?",
        answer: "Unter freiem Himmel erreichen moderne Mobiltelefone eine Genauigkeit von <strong>3 bis 5 Metern</strong>. In geschlossenen Räumen oder Straßenschluchten kann der Fehlerradius auf 10 bis 50 Meter ansteigen. Der aktuelle Toleranzwert wird live angezeigt."
      },
      {
        question: "Was ist der Unterschied zwischen GPS und IP-Standort?",
        answer: `GPS nutzt direkte Laufzeitsignale von Satelliten mit metrischer Präzision. Eine IP-Ortung basiert auf Einwahlknoten Ihres Internetanbieters und weicht oft viele Kilometer ab. Lesen Sie unseren Leitfaden <a href="${getLocalizedPath('/comparisons/gps-vs-ip-location/', l)}">GPS vs. IP-Standort</a>.`
      },
      {
        question: "Wie wandle ich Koordinaten in eine Postadresse um?",
        answer: `Nutzen Sie unseren <a href="${getLocalizedPath('/tools/reverse-geocoding/', l)}">Rückwärts-Geocoder</a> oder prüfen Sie den Standort auf der interaktiven Karte im <a href="${getLocalizedPath('/tools/address-finder/', l)}">Adressen-Finder</a>.`
      },
      {
        question: "Funktioniert die GPS-Bestimmung auch ohne Internet?",
        answer: `Ja. Der integrierte GPS-Chip empfängt autonome Funksignale der Satelliten ohne Mobilfunkdaten. Eine Internetverbindung beschleunigt lediglich den Erstkontakt via A-GPS. Vertiefen Sie das Thema in <a href="${getLocalizedPath('/guides/how-gps-location-works/', l)}">Wie GPS funktioniert</a> und testen Sie Empfangswerte im <a href="${getLocalizedPath('/tools/gps-accuracy/', l)}">GPS-Genauigkeitsprüfer</a>.`
      }
    ],
    pt: (l) => [
      {
        question: "Como descubro minhas coordenadas GPS atuais?",
        answer: "A ferramenta consulta o hardware GNSS do seu aparelho através da API Geolocation do navegador logo ao abrir a página. Clique em <strong>Permitir</strong> quando solicitado. Se houver falha, pressione <strong>Obter Coordenadas GPS</strong> para consultar manualmente."
      },
      {
        question: "Qual é o formato das coordenadas apresentadas?",
        answer: `As coordenadas são exibidas em <strong>Graus Decimais (DD)</strong> (ex: <code>-23.5505, -46.6333</code>) e <strong>Graus Minutos Segundos (DMS)</strong>. Para converter em UTM militar ou Plus Codes, acesse nosso <a href="${getLocalizedPath('/tools/coordinate-converter/', l)}">Conversor de Coordenadas</a>.`
      },
      {
        question: "Qual é o nível de precisão obtido?",
        answer: "Em áreas externas abertas, celulares modernos garantem precisão de <strong>3 a 5 metros</strong>. Em ambientes fechados ou áreas densamente urbanizadas, o raio de incerteza pode variar de 10 a 50 metros."
      },
      {
        question: "Qual a diferença entre coordenadas GPS e localização por IP?",
        answer: `O GPS recebe transmissões diretas de satélites com margem métrica de erro. A localização por IP baseia-se no roteamento do provedor de internet, errando comumente por vários quilômetros. Confira o comparativo <a href="${getLocalizedPath('/comparisons/gps-vs-ip-location/', l)}">GPS vs Localização IP</a>.`
      },
      {
        question: "Como converter coordenadas GPS em endereço com rua e número?",
        answer: `Utilize nossa ferramenta de <a href="${getLocalizedPath('/tools/reverse-geocoding/', l)}">Geocodificador Reverso</a> ou veja o mapa visual no <a href="${getLocalizedPath('/tools/address-finder/', l)}">Localizador de Endereço</a>.`
      },
      {
        question: "É possível obter coordenadas GPS sem sinal de internet?",
        answer: `Sim. O receptor GNSS do aparelho capta sinais de rádio diretamente dos satélites sem precisar de dados móveis. A internet serve apenas para acelerar a sincronização inicial via A-GPS. Saiba mais em <a href="${getLocalizedPath('/guides/how-gps-location-works/', l)}">Como funciona o GPS</a> e monitore seu sinal no <a href="${getLocalizedPath('/tools/gps-accuracy/', l)}">Verificador de Precisão GPS</a>.`
      }
    ],
    hi: (l) => [
      {
        question: "मैं अपने वर्तमान GPS निर्देशांक कैसे प्राप्त करूं?",
        answer: "पेज लोड होते ही यह टूल ब्राउज़र Geolocation API के ज़रिए आपके डिवाइस के इनबिल्ट GPS से निर्देशांक प्राप्त करता है। अनुमति का संकेत आने पर <strong>अनुमति दें (Allow)</strong> चुनें। यदि पहचान न हो, तो <strong>मेरे GPS निर्देशांक खोजें</strong> बटन पर क्लिक करें।"
      },
      {
        question: "GPS निर्देशांक किस प्रारूप में प्रस्तुत होते हैं?",
        answer: `डिफ़ॉल्ट रूप से निर्देशांक <strong>दशमलव डिग्री (DD)</strong> (जैसे <code>28.6139, 77.2090</code>) और <strong>डिग्री मिनट सेकंड (DMS)</strong> में दिखाए जाते हैं। UTM या अन्य प्रारूपों के लिए हमारे <a href="${getLocalizedPath('/tools/coordinate-converter/', l)}">निर्देशांक कनवर्टर</a> का उपयोग करें।`
      },
      {
        question: "इन GPS निर्देशांकों की सटीकता कितनी होती है?",
        answer: "खुले आकाश के नीचे आधुनिक स्मार्टफ़ोन <strong>3 से 5 मीटर</strong> की सटीकता प्रदान करते हैं। इमारतों के भीतर या घने पेड़ों में यह दायरा 10 से 50 मीटर तक बढ़ सकता है।"
      },
      {
        question: "GPS निर्देशांक और IP लोकेशन में क्या अंतर है?",
        answer: `GPS अंतरिक्ष में स्थित सैटेलाइट से सीधे सटीक संकेत लेता है। वहीं IP लोकेशन केवल आपके इंटरनेट प्रदाता के केंद्र का अनुमान लगाती है, जिसमें कई किलोमीटर का अंतर हो सकता है। तुलना पढ़ें: <a href="${getLocalizedPath('/comparisons/gps-vs-ip-location/', l)}">GPS बनाम IP लोकेशन</a>।`
      },
      {
        question: "GPS निर्देशांकों को डाक पते में कैसे बदलें?",
        answer: `संख्यात्मक निर्देशांकों को गली और मकान नंबर में बदलने के लिए हमारे <a href="${getLocalizedPath('/tools/reverse-geocoding/', l)}">रिवर्स जियोकोडर</a> या <a href="${getLocalizedPath('/tools/address-finder/', l)}">सड़क पता खोजक</a> का उपयोग करें।`
      },
      {
        question: "क्या बिना इंटरनेट के GPS निर्देशांक मिल सकते हैं?",
        answer: `हाँ। आपके फ़ोन का GPS चिप बिना मोबाइल डेटा के सैटेलाइट रेडियो सिग्नल पकड़ता है। इंटरनेट केवल A-GPS के माध्यम से शुरुआती संपर्क को तेज़ करता है। विस्तार से पढ़ें <a href="${getLocalizedPath('/guides/how-gps-location-works/', l)}">GPS कैसे काम करता है</a> और सिग्नल की जांच <a href="${getLocalizedPath('/tools/gps-accuracy/', l)}">GPS सटीकता चेकर</a> में करें।`
      }
    ],
    id: (l) => [
      {
        question: "Bagaimana cara menemukan koordinat GPS saya saat ini?",
        answer: "Alat ini secara otomatis mengakses modul GNSS perangkat Anda menggunakan API Geolocation peramban saat halaman dimuat. Klik <strong>Izinkan</strong> saat jendela izin muncul. Jika gagal, klik tombol <strong>Cari Koordinat GPS Saya</strong> untuk mencoba secara manual."
      },
      {
        question: "Dalam format apa koordinat GPS ditampilkan?",
        answer: `Secara default disajikan dalam <strong>Derajat Desimal (DD)</strong> (mis. <code>-6.2088, 106.8456</code>) dan <strong>Derajat Menit Detik (DMS)</strong>. Untuk konversi ke proyeksi kisi UTM militer atau Plus Code, gunakan <a href="${getLocalizedPath('/tools/coordinate-converter/', l)}">Konverter Koordinat</a>.`
      },
      {
        question: "Seberapa akurat koordinat GPS yang terdeteksi?",
        answer: "Di area luar ruangan terbuka, ponsel cerdas modern memiliki radius akurasi <strong>3 hingga 5 meter</strong>. Di dalam gedung atau area padat, kesalahan bisa berkisar 10–50 meter. Radius kesalahan real-time ditampilkan langsung di layar."
      },
      {
        question: "Apa perbedaan antara koordinat GPS dan lokasi berbasis IP?",
        answer: `GPS dihitung langsung dari sinyal gelombang mikro satelit dengan presisi meter. Sedangkan lokasi IP hanya memetakan rute server penyedia internet Anda yang bisa meleset puluhan kilometer. Baca panduan lengkap di <a href="${getLocalizedPath('/comparisons/gps-vs-ip-location/', l)}">GPS vs Lokasi IP</a>.`
      },
      {
        question: "Bagaimana cara mengubah koordinat GPS menjadi alamat jalan fisik?",
        answer: `Gunakan alat <a href="${getLocalizedPath('/tools/reverse-geocoding/', l)}">Reverse Geocoder</a> atau periksa langsung pada peta interaktif melalui <a href="${getLocalizedPath('/tools/address-finder/', l)}">Pencari Alamat</a>.`
      },
      {
        question: "Bisakah memperoleh koordinat GPS tanpa koneksi internet?",
        answer: `Ya. Chip GNSS ponsel Anda menerima transmisi satu arah langsung dari satelit tanpa memerlukan kuota data atau Wi-Fi. Koneksi internet hanya mempercepat penguncian awal sinyal (A-GPS). Pelajari cara kerjanya di <a href="${getLocalizedPath('/guides/how-gps-location-works/', l)}">Cara Kerja GPS</a> dan pantau sinyal di <a href="${getLocalizedPath('/tools/gps-accuracy/', l)}">Pemeriksa Akurasi GPS</a>.`
      }
    ]
  },

  'latitude-longitude': {
    en: (l) => [
      {
        question: "What is the difference between latitude and longitude?",
        answer: `<strong>Latitude</strong> lines (parallels) measure distance north or south of the Equator, ranging from 0° at the equator to 90° at the poles. <strong>Longitude</strong> lines (meridians) measure distance east or west from the Prime Meridian in Greenwich, England, ranging from 0° to 180°. Together, they form an angular coordinate system covering every millimeter of the globe. Learn more in our <a href="${getLocalizedPath('/guides/latitude-and-longitude-explained/', l)}">Latitude and Longitude Explained Guide</a>.`
      },
      {
        question: "In geographic coordinates, does latitude or longitude come first?",
        answer: "By international convention, <strong>latitude is always written first</strong>, followed by longitude: <code>(Latitude, Longitude)</code>. For example, the coordinates of the Statue of Liberty are <code>40.6892, -74.0445</code>. In mathematical and GIS coordinate systems, latitude corresponds to the Y-axis (vertical) and longitude to the X-axis (horizontal)."
      },
      {
        question: "What do positive and negative coordinate numbers mean?",
        answer: "Positive latitudes represent the Northern Hemisphere (North of the Equator), while negative latitudes represent the Southern Hemisphere. Positive longitudes represent the Eastern Hemisphere (East of the Prime Meridian), while negative longitudes represent the Western Hemisphere (West of the Prime Meridian). For example, Sydney, Australia has a negative latitude (<code>-33.8688</code>) and positive longitude (<code>151.2093</code>)."
      },
      {
        question: "How many decimal places are needed for meter-level accuracy?",
        answer: `Each decimal place increases spatial precision: 3 decimal places equals ~111 meters; 4 decimal places gives ~11 meters; <strong>5 decimal places resolves down to ~1.1 meters</strong>; and 6 decimal places resolves positions down to ~0.11 meters (11 centimeters). You can convert decimal degrees into Degrees Minutes Seconds using our <a href="${getLocalizedPath('/tools/coordinate-converter/', l)}">Coordinate Converter</a> and compare notations in our <a href="${getLocalizedPath('/comparisons/decimal-degrees-vs-dms/', l)}">DD vs DMS Comparison</a>.`
      },
      {
        question: "How do I find the latitude and longitude for a street address?",
        answer: `You can use the search bar above to pinpoint any address on the map, or use our dedicated <a href="${getLocalizedPath('/tools/geocoding/', l)}">Forward Geocoder</a> to search buildings, monuments, and cities worldwide.`
      },
      {
        question: "How do I measure distance between two latitude/longitude points?",
        answer: `Use our interactive <a href="${getLocalizedPath('/tools/distance-calculator/', l)}">Distance Calculator</a> to compute the shortest great-circle spherical distance and compass bearing between any two pairs of coordinates.`
      }
    ],
    es: (l) => [
      {
        question: "¿Cuál es la diferencia entre latitud y longitud?",
        answer: `La <strong>latitud</strong> mide la distancia angular hacia el norte o sur del Ecuador (-90° a +90°). La <strong>longitud</strong> mide la distancia hacia el este u oeste del meridiano de Greenwich (-180° a +180°). Descubra todos los conceptos en nuestra <a href="${getLocalizedPath('/guides/latitude-and-longitude-explained/', l)}">Guía Explicativa de Latitud y Longitud</a>.`
      },
      {
        question: "¿Qué número se escribe primero, la latitud o la longitud?",
        answer: "Por norma internacional, la <strong>latitud siempre se coloca primero</strong>, seguida de la longitud: <code>(Latitud, Longitud)</code>. En cálculo cartesiano, la latitud representa el eje Y y la longitud el eje X."
      },
      {
        question: "¿Qué indican los signos positivo (+) y negativo (-)?",
        answer: "Latitudes positivas están en el Hemisferio Norte y negativas en el Hemisferio Sur. Longitudes positivas se ubican al Este de Greenwich y negativas al Oeste. Por ejemplo, Madrid se ubica en latitud norte (+40.41) y longitud oeste (-3.70)."
      },
      {
        question: "¿Cuántos decimales se necesitan para una precisión de un metro?",
        answer: `Con 4 decimales se logra una resolución de ~11 metros, con <strong>5 decimales se alcanza ~1,1 metros</strong> y con 6 decimales ~11 centímetros. Puede transformar estos valores en nuestro <a href="${getLocalizedPath('/tools/coordinate-converter/', l)}">Conversor de Coordenadas</a> y revisar la <a href="${getLocalizedPath('/comparisons/decimal-degrees-vs-dms/', l)}">comparativa Grados Decimales vs DMS</a>.`
      },
      {
        question: "¿Cómo consultar coordenadas para una dirección de calle?",
        answer: `Introduzca el nombre del lugar en el buscador del mapa o use directamente el <a href="${getLocalizedPath('/tools/geocoding/', l)}">Geocodificador Directo</a>.`
      },
      {
        question: "¿Cómo calcular la distancia entre dos puntos de coordenadas?",
        answer: `Utilice nuestra <a href="${getLocalizedPath('/tools/distance-calculator/', l)}">Calculadora de Distancia</a> interactiva para calcular la distancia ortodrómica y el rumbo de navegación entre coordenadas.`
      }
    ],
    fr: (l) => [
      {
        question: "Quelle est la différence entre latitude et longitude ?",
        answer: `La <strong>latitude</strong> mesure la position angulaire nord-sud par rapport à l'Équateur (-90° à +90°). La <strong>longitude</strong> mesure la position est-ouest par rapport au méridien de Greenwich (-180° à +180°). Approfondissez le sujet avec notre <a href="${getLocalizedPath('/guides/latitude-and-longitude-explained/', l)}">Guide Latitude et Longitude</a>.`
      },
      {
        question: "Lequel s'écrit en premier : latitude ou longitude ?",
        answer: "Selon la norme universelle, la <strong>latitude s'écrit toujours en premier</strong> : <code>(Latitude, Longitude)</code>. En géométrie cartographique, la latitude correspond à l'axe vertical Y et la longitude à l'axe horizontal X."
      },
      {
        question: "Que signifient les valeurs positives et négatives ?",
        answer: "Une latitude positive désigne l'hémisphère nord, négative le sud. Une longitude positive désigne l'est de Greenwich, négative l'ouest. Paris est ainsi à <code>+48.85°</code> N et <code>+2.35°</code> E."
      },
      {
        question: "Combien de décimales sont nécessaires pour une précision métrique ?",
        answer: `4 décimales donnent ~11 mètres, <strong>5 décimales donnent ~1,1 mètre</strong> et 6 décimales descendent à ~11 centimètres. Convertissez ces formats dans notre <a href="${getLocalizedPath('/tools/coordinate-converter/', l)}">Convertisseur de Coordonnées</a> et lisez notre <a href="${getLocalizedPath('/comparisons/decimal-degrees-vs-dms/', l)}">comparatif Degrés Décimaux vs DMS</a>.`
      },
      {
        question: "Comment trouver les coordonnées d'une adresse précise ?",
        answer: `Utilisez la barre de recherche au-dessus de la carte ou notre outil dédié de <a href="${getLocalizedPath('/tools/geocoding/', l)}">Géocodage Direct</a>.`
      },
      {
        question: "Comment calculer la distance entre deux positions ?",
        answer: `Lancez notre <a href="${getLocalizedPath('/tools/distance-calculator/', l)}">Calculateur de Distance</a> pour obtenir la distance exacte du grand cercle et le cap compas.`
      }
    ],
    de: (l) => [
      {
        question: "Was ist der Unterschied zwischen Breiten- und Längengrad?",
        answer: `Der <strong>Breitengrad</strong> misst die Nord-Süd-Ausrichtung relativ zum Äquator (-90° bis +90°). Der <strong>Längengrad</strong> misst die Ost-West-Position ab dem Nullmeridian in Greenwich (-180° bis +180°). Lesen Sie dazu unseren <a href="${getLocalizedPath('/guides/latitude-and-longitude-explained/', l)}">Ratgeber zu Breiten- und Längengraden</a>.`
      },
      {
        question: "Wird die Breite oder die Länge zuerst genannt?",
        answer: "Gemäß internationalem Standard steht <strong>stets die Breite an erster Stelle</strong>: <code>(Breitengrad, Längengrad)</code>. Im kartesischen Koordinatensystem entspricht die Breite der Y-Achse und die Länge der X-Achse."
      },
      {
        question: "Was bedeuten positive und negative Vorzeichen?",
        answer: "Positive Breitenwerte liegen auf der Nordhalbkugel, negative auf der Südhalbkugel. Positive Längenwerte liegen östlich von Greenwich, negative westlich. Berlin liegt bei etwa <code>+52.52°</code> N und <code>+13.40°</code> E."
      },
      {
        question: "Wie viele Nachkommastellen braucht man für Meter-Genauigkeit?",
        answer: `4 Dezimalstellen entsprechen ca. 11 Metern, <strong>5 Stellen ca. 1,1 Metern</strong> und 6 Stellen lösen bis auf 11 Zentimeter auf. Für Formatumwandlungen nutzen Sie den <a href="${getLocalizedPath('/tools/coordinate-converter/', l)}">Koordinaten-Konverter</a> und unseren Vergleich <a href="${getLocalizedPath('/comparisons/decimal-degrees-vs-dms/', l)}">Dezimalgrad vs. GMS</a>.`
      },
      {
        question: "Wie ermittle ich Koordinaten für eine Straßenadresse?",
        answer: `Nutzen Sie das Suchfeld auf der Karte oder unseren spezialisierten <a href="${getLocalizedPath('/tools/geocoding/', l)}">Vorwärts-Geocoder</a>.`
      },
      {
        question: "Wie messe ich die Entfernung zwischen Koordinatenpunkten?",
        answer: `Verwenden Sie unseren interaktiven <a href="${getLocalizedPath('/tools/distance-calculator/', l)}">Entfernungsrechner</a> zur Bestimmung der kürzesten Großkreisdistanz.`
      }
    ],
    pt: (l) => [
      {
        question: "Qual é a diferença entre latitude e longitude?",
        answer: `A <strong>latitude</strong> mede a distância angular ao norte ou sul da Linha do Equador (-90° a +90°). A <strong>longitude</strong> mede a distância a leste ou oeste do Meridiano de Greenwich (-180° a +180°). Veja nosso <a href="${getLocalizedPath('/guides/latitude-and-longitude-explained/', l)}">Guia de Latitude e Longitude</a>.`
      },
      {
        question: "Qual coordenada é escrita primeiro?",
        answer: "Por convenção universal, a <strong>latitude é sempre informada primeiro</strong>: <code>(Latitude, Longitude)</code>. Em termos matemáticos, a latitude corresponde ao eixo Y e a longitude ao eixo X."
      },
      {
        question: "O que significam os sinais de positivo (+) e negativo (-)?",
        answer: "Latitudes positivas ficam no Hemisfério Norte e negativas no Hemisfério Sul. Longitudes positivas ficam a leste de Greenwich e negativas a oeste. Brasília localiza-se em <code>-15.79°</code> de latitude e <code>-47.88°</code> de longitude."
      },
      {
        question: "Quantas casas decimais são necessárias para precisão de um metro?",
        answer: `4 casas decimais atingem ~11 metros, <strong>5 casas chegam a ~1,1 metro</strong> e 6 casas alcançam 11 centímetros. Converta notações no <a href="${getLocalizedPath('/tools/coordinate-converter/', l)}">Conversor de Coordenadas</a> e veja o comparativo <a href="${getLocalizedPath('/comparisons/decimal-degrees-vs-dms/', l)}">Graus Decimais vs DMS</a>.`
      },
      {
        question: "Como descobrir as coordenadas de um endereço escrito?",
        answer: `Pesquise no mapa acima ou utilize nosso <a href="${getLocalizedPath('/tools/geocoding/', l)}">Geocodificador Direto</a>.`
      },
      {
        question: "Como medir a distância entre duas coordenadas?",
        answer: `Acesse a nossa <a href="${getLocalizedPath('/tools/distance-calculator/', l)}">Calculadora de Distância</a> para computar a rota ortodrômica mais curta na superfície da Terra.`
      }
    ],
    hi: (l) => [
      {
        question: "अक्षांश (Latitude) और देशांतर (Longitude) में क्या अंतर है?",
        answer: `<strong>अक्षांश</strong> भूमध्य रेखा से उत्तर या दक्षिण की कोणीय दूरी (-90° से +90°) मापता है। <strong>देशांतर</strong> ग्रीनविच प्राइम मेरिडियन से पूर्व या पश्चिम की दूरी (-180° से +180°) मापता है। विस्तृत विवरण हमारे <a href="${getLocalizedPath('/guides/latitude-and-longitude-explained/', l)}">अक्षांश और देशांतर गाइड</a> में पढ़ें।`
      },
      {
        question: "निर्देशांक लिखते समय पहले अक्षांश आता है या देशांतर?",
        answer: "वैश्विक मानक के अनुसार हमेशा <strong>अक्षांश पहले लिखा जाता है</strong> और देशांतर बाद में: <code>(अक्षांश, देशांतर)</code>। गणितीय ग्राफ़ में अक्षांश Y-अक्ष और देशांतर X-अक्ष के समान होता है।"
      },
      {
        question: "धनात्मक (+) और ऋणात्मक (-) संख्याओं का क्या अर्थ है?",
        answer: "धनात्मक अक्षांश उत्तरी गोलार्ध को और ऋणात्मक दक्षिणी गोलार्ध को दर्शाता है। धनात्मक देशांतर पूर्वी गोलार्ध और ऋणात्मक पश्चिमी गोलार्ध को दर्शाता है। जैसे नई दिल्ली <code>+28.61°</code> N और <code>+77.20°</code> E पर स्थित है।"
      },
      {
        question: "मीटर स्तर की सटीकता के लिए दशमलव के कितने अंकों की आवश्यकता होती है?",
        answer: `4 दशमलव स्थानों से ~11 मीटर, <strong>5 दशमलव स्थानों से ~1.1 मीटर</strong> और 6 स्थानों से ~11 सेंटीमीटर की सटीकता मिलती है। प्रारूप बदलने के लिए <a href="${getLocalizedPath('/tools/coordinate-converter/', l)}">निर्देशांक कनवर्टर</a> देखें।`
      },
      {
        question: "किसी सड़क पते के अक्षांश और देशांतर कैसे खोजें?",
        answer: `नक्शे में खोजें या हमारे समर्पित <a href="${getLocalizedPath('/tools/geocoding/', l)}">जियोकोडर</a> में कोई भी पता या स्मारक नाम लिखें।`
      },
      {
        question: "दो निर्देशांकों के बीच दूरी कैसे नापें?",
        answer: `पृथ्वी के घुमाव को ध्यान में रखकर सटीक दूरी मापने के लिए हमारे <a href="${getLocalizedPath('/tools/distance-calculator/', l)}">दूरी कैलकुलेटर</a> का उपयोग करें।`
      }
    ],
    id: (l) => [
      {
        question: "Apa perbedaan antara garis lintang (latitude) dan bujur (longitude)?",
        answer: `<strong>Lintang (Latitude)</strong> mengukur jarak sudut ke arah utara atau selatan Khatulistiwa (-90° hingga +90°). <strong>Bujur (Longitude)</strong> mengukur jarak sudut ke arah timur atau barat Meridian Utama Greenwich (-180° hingga +180°). Pelajari selengkapnya di <a href="${getLocalizedPath('/guides/latitude-and-longitude-explained/', l)}">Panduan Penjelasan Lintang & Bujur</a>.`
      },
      {
        question: "Dalam penulisan koordinat, lintang atau bujur yang ditulis lebih dulu?",
        answer: "Berdasarkan konvensi geospasial internasional, <strong>garis lintang selalu ditulis pertama</strong>, diikuti garis bujur: <code>(Lintang, Bujur)</code>. Pada bidang kartesius, lintang merepresentasikan sumbu Y dan bujur merepresentasikan sumbu X."
      },
      {
        question: "Apa arti angka koordinat bernilai positif (+) dan negatif (-)?",
        answer: "Lintang positif berada di Belahan Bumi Utara dan negatif di Belahan Bumi Selatan. Bujur positif berada di Belahan Bumi Timur dan negatif di Barat. Jakarta berada di koordinat lintang negatif (<code>-6.2088</code>) dan bujur positif (<code>106.8456</code>)."
      },
      {
        question: "Berapa banyak angka desimal yang dibutuhkan untuk akurasi meter?",
        answer: `4 angka desimal memberikan presisi ~11 meter, <strong>5 angka desimal mencapai ~1,1 meter</strong>, dan 6 desimal mencapai ~11 sentimeter. Konversikan ke format derajat-menit-detik lewat <a href="${getLocalizedPath('/tools/coordinate-converter/', l)}">Konverter Koordinat</a> dan baca <a href="${getLocalizedPath('/comparisons/decimal-degrees-vs-dms/', l)}">perbandingan Derajat Desimal vs DMS</a>.`
      },
      {
        question: "Bagaimana cara mencari koordinat dari alamat tertulis?",
        answer: `Ketik nama tempat pada kolom pencarian di peta atau gunakan <a href="${getLocalizedPath('/tools/geocoding/', l)}">Geocoder Langsung</a>.`
      },
      {
        question: "Bagaimana cara menghitung jarak antara dua koordinat?",
        answer: `Buka <a href="${getLocalizedPath('/tools/distance-calculator/', l)}">Kalkulator Jarak</a> interaktif untuk menghitung rute lingkaran besar terpendek.`
      }
    ]
  },

  'address-finder': {
    en: (l) => [
      {
        question: "How does the Address Finder locate my street address from GPS?",
        answer: `The tool captures your device's latitude and longitude via the browser Geolocation API and queries the OpenStreetMap Nominatim spatial database. Nominatim applies <strong>reverse geocoding</strong> algorithms to match your coordinates against building polygons, property boundaries, and interpolated road centerlines.`
      },
      {
        question: "Why does the detected house number sometimes differ from my actual building?",
        answer: "Consumer GPS signals typically carry a 3 to 8 meter error radius. Additionally, mapping databases use road centerline address interpolation, estimating door numbers between known cross-streets. If the address appears one building off, click directly on your building footprint on the map to snap to the exact property."
      },
      {
        question: "Can I find the address of a location without sharing my live GPS?",
        answer: `Yes! You do not need to share your location. Simply type any known latitude and longitude into the coordinate box, or click anywhere on the interactive map. For looking up coordinates from written names, use our <a href="${getLocalizedPath('/tools/geocoding/', l)}">Geocoder</a>.`
      },
      {
        question: "What is the difference between Address Finder and Reverse Geocoding?",
        answer: `Address Finder provides an interactive visual map with point-and-click address resolution, while the <a href="${getLocalizedPath('/tools/reverse-geocoding/', l)}">Reverse Geocoder</a> offers a fast numeric interface for typing coordinates directly. Learn how both algorithms work in <a href="${getLocalizedPath('/comparisons/geocoding-vs-reverse-geocoding/', l)}">Geocoding vs Reverse Geocoding</a>.`
      },
      {
        question: "Is my address or location history stored on your servers?",
        answer: `No. All geolocation requests are processed client-side in your browser. Coordinates are transmitted securely over encrypted HTTPS directly to open geocoding servers without storing your IP or location. Read our transparent <a href="${getLocalizedPath('/privacy/', l)}">Privacy Policy</a>.`
      },
      {
        question: "How can I share my discovered street address with others?",
        answer: `Click the <strong>Copy Address</strong> button, generate a scannable map pin with our <a href="${getLocalizedPath('/tools/location-qr-code/', l)}">Location QR Code Generator</a>, or send an interactive map link via our <a href="${getLocalizedPath('/share-location/', l)}">Share Location Tool</a>.`
      }
    ],
    es: (l) => [
      {
        question: "¿Cómo determina el Buscador de Dirección mi calle y número?",
        answer: `Obtiene la latitud y longitud de su terminal mediante la API del navegador y consulta el índice espacial de OpenStreetMap Nominatim. Aplica algoritmos de <strong>geocodificación inversa</strong> para cruzar coordenadas con polígonos catastrales y viales.`
      },
      {
        question: "¿Por qué el número detectado a veces difiere de mi portal físico?",
        answer: "El GPS estándar tiene una tolerancia de 3 a 8 metros. Además, los mapas emplean interpolación lineal de numeración entre esquinas. Si el número no es exacto, haga clic directamente sobre el tejado de su edificio en el mapa."
      },
      {
        question: "¿Puedo consultar una dirección sin activar los permisos de ubicación?",
        answer: `Sí. Puede escribir cualquier coordenada en la casilla o hacer clic en cualquier lugar del mapa. Si desea el proceso inverso (obtener coordenadas a partir de una dirección), use el <a href="${getLocalizedPath('/tools/geocoding/', l)}">Geocodificador</a>.`
      },
      {
        question: "¿Qué diferencia existe con el Geocodificador Inverso?",
        answer: `El Buscador de Dirección añade un mapa interactivo para seleccionar puntos visualmente, mientras que el <a href="${getLocalizedPath('/tools/reverse-geocoding/', l)}">Geocodificador Inverso</a> permite introducir coordenadas numéricas de forma directa. Revise nuestra comparativa <a href="${getLocalizedPath('/comparisons/geocoding-vs-reverse-geocoding/', l)}">Geocodificación vs Inversa</a>.`
      },
      {
        question: "¿Se guardan mis direcciones o historial en sus servidores?",
        answer: `No. El cálculo se ejecuta directamente en su navegador y no almacenamos registros de su ubicación ni dirección física. Consulte nuestra <a href="${getLocalizedPath('/privacy/', l)}">Política de Privacidad</a>.`
      },
      {
        question: "¿Cómo puedo compartir la dirección encontrada?",
        answer: `Copie el texto con un clic, cree un pin móvil con el <a href="${getLocalizedPath('/tools/location-qr-code/', l)}">Código QR de Ubicación</a> o comparta un enlace en <a href="${getLocalizedPath('/share-location/', l)}">Compartir Ubicación</a>.`
      }
    ],
    fr: (l) => [
      {
        question: "Comment le localisateur d'adresse retrouve-t-il mon adresse exacte ?",
        answer: `L'outil récupère la latitude et la longitude de votre terminal via l'API Geolocation puis interroge la base de données Nominatim d'OpenStreetMap. L'algorithme de <strong>géocodage inverse</strong> associe vos coordonnées aux emprises de bâtiments et aux axes de voirie.`
      },
      {
        question: "Pourquoi le numéro de voie est-il parfois légèrement décalé ?",
        answer: "La précision GPS des smartphones est généralement de 3 à 8 mètres. De plus, les plans cadastraux calculent souvent les numéros par interpolation linéaire le long de la rue. Cliquez simplement sur votre bâtiment sur la carte pour affiner."
      },
      {
        question: "Puis-je rechercher une adresse sans activer mon GPS ?",
        answer: `Absolument. Saisissez manuellement des coordonnées dans le champ prévu ou cliquez n'importe où sur la carte. Pour faire l'inverse (chercher un lieu par son nom), utilisez le <a href="${getLocalizedPath('/tools/geocoding/', l)}">Géocodeur Direct</a>.`
      },
      {
        question: "Quelle est la différence avec l'outil de géocodage inverse ?",
        answer: `Le localisateur d'adresse offre une carte dynamique Leaflet interactive, alors que le <a href="${getLocalizedPath('/tools/reverse-geocoding/', l)}">Géocodage Inverse</a> est une interface textuelle rapide. Comparez les deux dans <a href="${getLocalizedPath('/comparisons/geocoding-vs-reverse-geocoding/', l)}">Géocodage Direct vs Inverse</a>.`
      },
      {
        question: "Mes adresses et coordonnées sont-elles enregistrées ?",
        answer: `Non. Aucune information de localisation n'est collectée ni stockée sur nos serveurs. Consultez notre <a href="${getLocalizedPath('/privacy/', l)}">Politique de Confidentialité</a>.`
      },
      {
        question: "Comment partager cette adresse facilement ?",
        answer: `Copiez l'adresse d'un clic, générez un code scannable avec notre <a href="${getLocalizedPath('/tools/location-qr-code/', l)}">QR Code de Localisation</a> ou partagez un repère via <a href="${getLocalizedPath('/share-location/', l)}">Partager Ma Position</a>.`
      }
    ],
    de: (l) => [
      {
        question: "Wie ermittelt der Adressen-Finder meine Anschrift per GPS?",
        answer: `Das System erfasst Breite und Länge über Ihren Browser und gleicht diese mit der OpenStreetMap-Nominatim-Datenbank ab. Mithilfe von <strong>Reverse Geocoding</strong> werden die Geokoordinaten Straßenzügen und Katasterflächen zugeordnet.`
      },
      {
        question: "Warum weicht die Hausnummer manchmal minimal ab?",
        answer: "Handy-GPS-Sensoren weisen typischerweise 3 bis 8 Meter Toleranz auf. Zudem nutzen Adressdatenbanken oft Straßenachsen-Interpolation zwischen Kreuzungen. Klicken Sie direkt auf das gewünschte Gebäude auf der Karte für exakten Abgleich."
      },
      {
        question: "Kann ich Adressen auch ohne GPS-Freigabe ermitteln?",
        answer: `Ja. Sie können beliebige Koordinaten manuell eingeben oder direkt auf die Karte klicken. Zur reinen Textsuche nutzen Sie unseren <a href="${getLocalizedPath('/tools/geocoding/', l)}">Vorwärts-Geocoder</a>.`
      },
      {
        question: "Was ist der Unterschied zum Reverse Geocoder?",
        answer: `Der Adressen-Finder bietet eine visuelle interaktive Karte, während der <a href="${getLocalizedPath('/tools/reverse-geocoding/', l)}">Rückwärts-Geocoder</a> für reine Texteingabe ausgelegt ist. Lesen Sie <a href="${getLocalizedPath('/comparisons/geocoding-vs-reverse-geocoding/', l)}">Geokodierung vs. Rückwärts-Geokodierung</a>.`
      },
      {
        question: "Werden meine Standortdaten oder Adressen gespeichert?",
        answer: `Nein. Alle Vorgänge laufen clientseitig im Browser ab, ohne jegliche Speicherung auf Webservern. Details in unserer <a href="${getLocalizedPath('/privacy/', l)}">Datenschutzerklärung</a>.`
      },
      {
        question: "Wie kann ich die ermittelte Adresse weitergeben?",
        answer: `Kopieren Sie den Text per Klick, erstellen Sie einen Wegpunkt-Code mit dem <a href="${getLocalizedPath('/tools/location-qr-code/', l)}">Standort-QR-Code</a> oder teilen Sie einen Link mit <a href="${getLocalizedPath('/share-location/', l)}">Standort Teilen</a>.`
      }
    ],
    pt: (l) => [
      {
        question: "Como o Localizador de Endereço descobre a rua e o número?",
        answer: `A ferramenta lê a latitude e longitude do seu dispositivo via API do navegador e consulta a base OpenStreetMap Nominatim por <strong>geocodificação reversa</strong>, mapeando o ponto para vias e polígonos prediais.`
      },
      {
        question: "Por que o número predial às vezes apresenta pequena variação?",
        answer: "O GPS civil possui margem de erro de 3 a 8 metros. Além disso, bases de dados usam interpolação métrica ao longo da via. Clique diretamente no telhado do seu prédio no mapa para ajustar."
      },
      {
        question: "Posso encontrar um endereço sem ativar a localização do celular?",
        answer: `Sim. Digite quaisquer coordenadas ou clique em qualquer ponto do mapa. Para converter nomes de lugares em coordenadas, use o <a href="${getLocalizedPath('/tools/geocoding/', l)}">Geocodificador</a>.`
      },
      {
        question: "Qual a diferença para o Geocodificador Reverso?",
        answer: `O localizador possui mapa visual para clicar, enquanto o <a href="${getLocalizedPath('/tools/reverse-geocoding/', l)}">Geocodificador Reverso</a> é voltado para digitação rápida de coordenadas. Compare em <a href="${getLocalizedPath('/comparisons/geocoding-vs-reverse-geocoding/', l)}">Geocodificação Direta vs Reversa</a>.`
      },
      {
        question: "O meu endereço fica registrado nos seus servidores?",
        answer: `Não. Todo o processamento é feito no cliente via HTTPS e não guardamos logs de endereços. Veja nossa <a href="${getLocalizedPath('/privacy/', l)}">Política de Privacidade</a>.`
      },
      {
        question: "Como compartilhar o endereço encontrado?",
        answer: `Copie o endereço com um botão, gere um pin com o <a href="${getLocalizedPath('/tools/location-qr-code/', l)}">QR Code de Localização</a> ou envie o link em <a href="${getLocalizedPath('/share-location/', l)}">Compartilhar Localização</a>.`
      }
    ],
    hi: (l) => [
      {
        question: "पता खोजक GPS से मेरा सड़क का पता कैसे पहचानता है?",
        answer: `यह टूल आपके डिवाइस के अक्षांश और देशांतर को OpenStreetMap की वैश्विक निर्देशिका से मिलाता है। <strong>रिवर्स जियोकोडिंग</strong> तकनीक के ज़रिए यह निकटतम सड़क, भवन और पिन कोड की पहचान करता है।`
      },
      {
        question: "दर्ज मकान नंबर कभी-कभी थोड़ा अलग क्यों दिखता है?",
        answer: "स्मार्टफ़ोन GPS में 3 से 8 मीटर तक की सामान्य त्रुटि हो सकती है। इसके अलावा मानचित्र डेटाबेस दो मोड़ों के बीच पते का अनुमान लगाते हैं। सटीक पते के लिए नक्शे पर अपनी इमारत पर सीधे क्लिक करें।"
      },
      {
        question: "क्या बिना लोकेशन अनुमति दिए किसी जगह का पता जाना जा सकता है?",
        answer: `हाँ। आप बॉक्स में कोई भी अक्षांश और देशांतर लिख सकते हैं या सीधे नक्शे पर क्लिक कर सकते हैं। पते से निर्देशांक खोजने के लिए हमारे <a href="${getLocalizedPath('/tools/geocoding/', l)}">जियोकोडर</a> का उपयोग करें।`
      },
      {
        question: "पता खोजक और रिवर्स जियोकोडर में क्या अंतर है?",
        answer: `पता खोजक में इंटरैक्टिव नक्शा मिलता है, जबकि <a href="${getLocalizedPath('/tools/reverse-geocoding/', l)}">रिवर्स जियोकोडर</a> सीधे संख्यात्मक निर्देशांक दर्ज करने के लिए है। तुलनात्मक जानकारी <a href="${getLocalizedPath('/comparisons/geocoding-vs-reverse-geocoding/', l)}">जियोकोडिंग बनाम रिवर्स जियोकोडिंग</a> में पढ़ें।`
      },
      {
        question: "क्या मेरा पता या लोकेशन सर्वर पर सुरक्षित रखी जाती है?",
        answer: `नहीं। हम कोई भी लोकेशन डेटा सर्वर पर स्टोर नहीं करते। पूरी प्रक्रिया आपके ब्राउज़र में सीधे होती है। विवरण के लिए हमारी <a href="${getLocalizedPath('/privacy/', l)}">गोपनीयता नीति</a> पढ़ें।`
      },
      {
        question: "मिले हुए पते को दूसरों के साथ कैसे साझा करें?",
        answer: `पते को कॉपी करें, <a href="${getLocalizedPath('/tools/location-qr-code/', l)}">लोकेशन QR कोड</a> से स्कैन कोड बनाएं या <a href="${getLocalizedPath('/share-location/', l)}">लोकेशन साझा करें</a> टूल से लिंक भेजें।`
      }
    ],
    id: (l) => [
      {
        question: "Bagaimana Pencari Alamat mengetahui alamat jalan dari GPS?",
        answer: `Alat ini mengambil koordinat lintang dan bujur perangkat Anda dan mengirim kueri ke indeks OpenStreetMap Nominatim. Melalui <strong>reverse geocoding</strong>, koordinat dicocokkan dengan data poligon gedung dan garis jalan.`
      },
      {
        question: "Mengapa nomor rumah terkadang sedikit berbeda dari nomor fisik?",
        answer: "Sinyal GPS ponsel memiliki toleransi wajar 3 hingga 8 meter. Peta digital juga menggunakan interpolasi penomoran jalan. Jika nomor bergeser, klik langsung pada gedung Anda di peta untuk hasil tepat."
      },
      {
        question: "Bisakah mencari alamat tanpa mengaktifkan izin GPS?",
        answer: `Tentu saja. Anda dapat mengetik koordinat apa saja atau mengeklik lokasi mana pun di peta. Untuk mencari koordinat dari teks alamat, buka <a href="${getLocalizedPath('/tools/geocoding/', l)}">Geocoder Langsung</a>.`
      },
      {
        question: "Apa bedanya Pencari Alamat dengan Reverse Geocoder?",
        answer: `Pencari Alamat dilengkapi peta interaktif, sedangkan <a href="${getLocalizedPath('/tools/reverse-geocoding/', l)}">Reverse Geocoder</a> ditujukan untuk kueri koordinat teks secara cepat. Pelajari selengkapnya di <a href="${getLocalizedPath('/comparisons/geocoding-vs-reverse-geocoding/', l)}">Geocoding vs Reverse Geocoding</a>.`
      },
      {
        question: "Apakah riwayat alamat saya disimpan di server?",
        answer: `Tidak. Permintaan diproses langsung di peramban Anda dan tidak pernah disimpan di basis data server kami. Baca <a href="${getLocalizedPath('/privacy/', l)}">Kebijakan Privasi</a> kami.`
      },
      {
        question: "Bagaimana cara membagikan alamat yang ditemukan?",
        answer: `Salin alamat dengan satu klik, buat kode pin dengan <a href="${getLocalizedPath('/tools/location-qr-code/', l)}">QR Code Lokasi</a>, atau kirim tautan peta via <a href="${getLocalizedPath('/share-location/', l)}">Bagi Lokasi</a>.`
      }
    ]
  },

  'reverse-geocoding': {
    en: (l) => [
      {
        question: "What is reverse geocoding and how does it work?",
        answer: `<strong>Reverse geocoding</strong> is the computational process of converting geographic coordinates (latitude and longitude) into a human-readable postal address. A reverse geocoding engine queries spatial indices of administrative polygons, building footprints, and street networks to identify the closest match. Read our comprehensive analysis in <a href="${getLocalizedPath('/comparisons/geocoding-vs-reverse-geocoding/', l)}">Geocoding vs Reverse Geocoding</a>.`
      },
      {
        question: "What coordinate format does this tool accept?",
        answer: `The tool expects standard <strong>Decimal Degrees (DD)</strong> under the WGS 84 datum (e.g. <code>48.8584, 2.2945</code>). If your coordinates are in Degrees Minutes Seconds or UTM, use our <a href="${getLocalizedPath('/tools/coordinate-converter/', l)}">Coordinate Converter</a> to reformat them before reverse geocoding.`
      },
      {
        question: "What happens if coordinates fall in oceans, lakes, or unmapped wilderness?",
        answer: "When coordinates fall into bodies of water, offshore regions, or unpopulated wilderness where no roads exist, the engine returns the closest administrative entity—such as the territorial sea boundary, coastal bay, island name, or municipality—or an 'unmapped area' status."
      },
      {
        question: "How does reverse geocoding differ from forward geocoding?",
        answer: `Forward geocoding converts text addresses into coordinates, whereas reverse geocoding converts coordinates into text addresses. Use our <a href="${getLocalizedPath('/tools/geocoding/', l)}">Forward Geocoder</a> if you already have an address and need coordinates.`
      },
      {
        question: "How accurate is coordinate-to-address resolution?",
        answer: "Resolution depends on local open-data cadastral records. In major metropolitan areas, accuracy routinely pinpoints rooftop and entrance house numbers. In rural areas, the nearest road segment or village centroid is returned."
      },
      {
        question: "Can I check my current physical address using this tool?",
        answer: `Yes, click <strong>Use My Location</strong> to query your device's live coordinates, or explore our dedicated <a href="${getLocalizedPath('/my-location/address/', l)}">What Is My Current Address?</a> diagnostic page.`
      }
    ],
    es: (l) => [
      {
        question: "¿Qué es la geocodificación inversa y cómo funciona?",
        answer: `La <strong>geocodificación inversa</strong> es el proceso informático que transforma coordenadas de latitud y longitud en una dirección postal con calle, ciudad y código postal. Consulte los detalles técnicos en <a href="${getLocalizedPath('/comparisons/geocoding-vs-reverse-geocoding/', l)}">Geocodificación vs Inversa</a>.`
      },
      {
        question: "¿Qué formato de coordenadas se debe introducir?",
        answer: `Se introducen en <strong>Grados Decimales (DD)</strong> (ej. <code>48.8584, 2.2945</code>). Si tiene coordenadas en formato sexagesimal DMS o UTM, transfórmelas previamente con nuestro <a href="${getLocalizedPath('/tools/coordinate-converter/', l)}">Conversor de Coordenadas</a>.`
      },
      {
        question: "¿Qué ocurre si las coordenadas se sitúan en el mar o zonas remotas?",
        answer: "Si las coordenadas caen en aguas abiertas o selvas sin calles, el sistema devuelve la demarcación administrativa más próxima (país, región o bahía) o indica zona no urbanizada."
      },
      {
        question: "¿Cuál es la diferencia con la geocodificación directa?",
        answer: `La directa pasa de texto a coordenadas numéricas, mientras que la inversa pasa de números a texto de dirección. Si necesita coordenadas desde un nombre, use el <a href="${getLocalizedPath('/tools/geocoding/', l)}">Geocodificador Directo</a>.`
      },
      {
        question: "¿Qué nivel de exactitud se consigue en el número de calle?",
        answer: "En urbes consolidadas la precisión llega al portal o edificio. En zonas agrícolas o rurales abiertas se devuelve el tramo de carretera o cabecera municipal más cercana."
      },
      {
        question: "¿Puedo averiguar la dirección física de mi propio móvil?",
        answer: `Sí, pulse <strong>Usar Mi Ubicación</strong> o visite nuestra página especializada <a href="${getLocalizedPath('/my-location/address/', l)}">Mi Dirección Actual</a>.`
      }
    ],
    fr: (l) => [
      {
        question: "Qu'est-ce que le géocodage inverse et comment fonctionne-t-il ?",
        answer: `Le <strong>géocodage inverse</strong> transforme des coordonnées géographiques chiffrées (latitude et longitude) en une adresse postale lisible par l'homme. Consultez notre comparatif technique <a href="${getLocalizedPath('/comparisons/geocoding-vs-reverse-geocoding/', l)}">Géocodage Direct vs Inverse</a>.`
      },
      {
        question: "Quel format de coordonnées est accepté par l'outil ?",
        answer: `L'outil attend des <strong>Degrés Décimaux (DD)</strong> (ex. <code>48.8584, 2.2945</code>). Si vous possédez des valeurs en DMS ou UTM, convertissez-les d'abord via le <a href="${getLocalizedPath('/tools/coordinate-converter/', l)}">Convertisseur de Coordonnées</a>.`
      },
      {
        question: "Que se passe-t-il si les coordonnées pointent dans l'océan ?",
        answer: "En zone maritime ou dans un désert non répertorié par les services postaux, le moteur renvoie la circonscription administrative la plus proche (territoire maritime, commune côtière)."
      },
      {
        question: "En quoi diffère-t-il du géocodage direct ?",
        answer: `Le géocodage direct trouve les coordonnées d'une adresse textuelle, alors que l'inverse trouve l'adresse depuis les coordonnées. Pour l'opération directe, testez notre <a href="${getLocalizedPath('/tools/geocoding/', l)}">Géocodeur Direct</a>.`
      },
      {
        question: "Quelle est la précision au numéro de rue ?",
        answer: "Dans les agglomérations pourvues d'un cadastre numérique complet, la précision est au bâtiment près. En milieu rural, le centroïde du hameau ou la route principale est retenu."
      },
      {
        question: "Puis-je vérifier l'adresse actuelle de mon terminal ?",
        answer: `Oui, cliquez sur <strong>Utiliser Ma Position</strong> ou ouvrez notre page diagnostic dédiée <a href="${getLocalizedPath('/my-location/address/', l)}">Mon Adresse Actuelle</a>.`
      }
    ],
    de: (l) => [
      {
        question: "Was ist Reverse Geocoding und wie funktioniert es?",
        answer: `<strong>Reverse Geocoding</strong> bezeichnet die Umwandlung numerischer Koordinaten (Breite und Länge) in eine lesbare Postanschrift. Das System gleicht Koordinaten mit Straßenkatastern ab. Lesen Sie unseren Leitfaden <a href="${getLocalizedPath('/comparisons/geocoding-vs-reverse-geocoding/', l)}">Vorwärts- vs. Rückwärts-Geokodierung</a>.`
      },
      {
        question: "Welches Koordinatenformat wird vorausgesetzt?",
        answer: `Standardmäßig <strong>Dezimalgrad (DD)</strong> (z.B. <code>52.5200, 13.4050</code>). Für GMS- oder UTM-Werte nutzen Sie zuvor den <a href="${getLocalizedPath('/tools/coordinate-converter/', l)}">Koordinaten-Konverter</a>.`
      },
      {
        question: "Was geschieht bei Koordinaten im Meer oder unbewohntem Gebiet?",
        answer: "Befindet sich der Punkt auf See oder im Gebirge ohne Straßenausbau, meldet das System die nächstgelegene Gebietskörperschaft oder Gemeinde."
      },
      {
        question: "Wie unterscheidet sich die Vorwärts-Geokodierung?",
        answer: `Vorwärts-Geokodierung macht aus Adressen Koordinaten, Rückwärts-Geokodierung aus Koordinaten Adressen. Für Ortsnamensuchen nutzen Sie den <a href="${getLocalizedPath('/tools/geocoding/', l)}">Vorwärts-Geocoder</a>.`
      },
      {
        question: "Wie exakt ist die Ermittlung der Hausnummer?",
        answer: "In städtischen Gebieten mit detaillierten Geodaten wird oft die exakte Gebäudeadresse getroffen. Auf dem Land wird der Straßenabschnitt interpoliert."
      },
      {
        question: "Kann ich die Adresse meines aktuellen Standorts abfragen?",
        answer: `Klicken Sie auf <strong>Meinen Standort nutzen</strong> oder prüfen Sie die Daten auf <a href="${getLocalizedPath('/my-location/address/', l)}">Meine Aktuelle Adresse</a>.`
      }
    ],
    pt: (l) => [
      {
        question: "O que é geocodificação reversa e como ela funciona?",
        answer: `A <strong>geocodificação reversa</strong> converte coordenadas geográficas (latitude e longitude) em um endereço postal com logradouro, bairro e CEP. Veja os detalhes em <a href="${getLocalizedPath('/comparisons/geocoding-vs-reverse-geocoding/', l)}">Geocodificação Direta vs Reversa</a>.`
      },
      {
        question: "Qual formato de coordenadas é aceito?",
        answer: `A ferramenta processa <strong>Graus Decimais (DD)</strong> (ex: <code>-23.5505, -46.6333</code>). Caso tenha dados em DMS ou UTM, utilize antes o nosso <a href="${getLocalizedPath('/tools/coordinate-converter/', l)}">Conversor de Coordenadas</a>.`
      },
      {
        question: "O que acontece com coordenadas em alto-mar ou florestas?",
        answer: "Se o ponto cair em corpos d'água ou áreas sem vias urbanas, o serviço indica a jurisdição territorial mais próxima ou área desabitada."
      },
      {
        question: "Qual a diferença para a geocodificação direta?",
        answer: `A direta converte nomes e endereços em números de coordenadas. Para esse fluxo, consulte o <a href="${getLocalizedPath('/tools/geocoding/', l)}">Geocodificador Direto</a>.`
      },
      {
        question: "Qual a precisão alcançada para números residenciais?",
        answer: "Em centros urbanos a identificação atinge a fachada do imóvel. Em áreas periféricas ou estradas rurais, aponta o trecho rodoviário."
      },
      {
        question: "Posso descobrir o endereço físico atual do meu aparelho?",
        answer: `Sim, clique em <strong>Usar Minha Localização</strong> ou abra a página especializada <a href="${getLocalizedPath('/my-location/address/', l)}">Meu Endereço Atual</a>.`
      }
    ],
    hi: (l) => [
      {
        question: "रिवर्स जियोकोडिंग क्या है और यह कैसे काम करती है?",
        answer: `<strong>रिवर्स जियोकोडिंग</strong> संख्यात्मक भौगोलिक निर्देशांकों (अक्षांश और देशांतर) को पढ़ने योग्य सड़क के पते में बदलने की प्रक्रिया है। तुलनात्मक जानकारी <a href="${getLocalizedPath('/comparisons/geocoding-vs-reverse-geocoding/', l)}">फ़ॉरवर्ड बनाम रिवर्स जियोकोडिंग</a> में पढ़ें।`
      },
      {
        question: "टूल में निर्देशांक किस प्रारूप में दर्ज करने होते हैं?",
        answer: `मानक <strong>दशमलव डिग्री (DD)</strong> (जैसे <code>28.6139, 77.2090</code>) में दर्ज करें। यदि निर्देशांक DMS या UTM में हैं, तो पहले <a href="${getLocalizedPath('/tools/coordinate-converter/', l)}">निर्देशांक कनवर्टर</a> का उपयोग करें।`
      },
      {
        question: "यदि निर्देशांक समुद्र या जंगल में हों तो क्या परिणाम मिलता है?",
        answer: "यदि कोई सड़क या इमारत मौजूद न हो, तो सिस्टम निकटतम प्रशासनिक क्षेत्र, तटीय क्षेत्र या नजदीकी कस्बे का नाम प्रदर्शित करता है।"
      },
      {
        question: "फ़ॉरवर्ड जियोकोडिंग और रिवर्स जियोकोडिंग में क्या अंतर है?",
        answer: `फ़ॉरवर्ड प्रक्रिया पते से निर्देशांक बनाती है, जबकि रिवर्स प्रक्रिया निर्देशांक से पता निकालती है। पते से निर्देशांक खोजने के लिए <a href="${getLocalizedPath('/tools/geocoding/', l)}">जियोकोडर</a> देखें।`
      },
      {
        question: "मकान नंबर की पहचान कितनी सटीक होती है?",
        answer: "शहरी क्षेत्रों में जहाँ भवन मानचित्रण पूर्ण है, वहां सटीक इमारत मिल जाती है। ग्रामीण सड़कों पर निकटतम सड़क मार्ग दिखाया जाता है।"
      },
      {
        question: "क्या मैं अपने फ़ोन का वर्तमान पता जान सकता हूँ?",
        answer: `हाँ, <strong>मेरा स्थान उपयोग करें</strong> पर क्लिक करें या सीधे <a href="${getLocalizedPath('/my-location/address/', l)}">मेरा वर्तमान पता</a> पेज पर जाएं।`
      }
    ],
    id: (l) => [
      {
        question: "Apa itu reverse geocoding dan bagaimana cara kerjanya?",
        answer: `<strong>Reverse geocoding</strong> adalah proses mengubah koordinat geografis (lintang dan bujur) menjadi alamat pos lengkap yang dapat dibaca manusia. Baca perbandingan teknis di <a href="${getLocalizedPath('/comparisons/geocoding-vs-reverse-geocoding/', l)}">Geocoding vs Reverse Geocoding</a>.`
      },
      {
        question: "Format koordinat apa yang didukung alat ini?",
        answer: `Gunakan format <strong>Derajat Desimal (DD)</strong> standar WGS 84 (mis. <code>-6.2088, 106.8456</code>). Untuk konversi dari format DMS atau kisi UTM, gunakan <a href="${getLocalizedPath('/tools/coordinate-converter/', l)}">Konverter Koordinat</a>.`
      },
      {
        question: "Apa yang terjadi jika koordinat berada di laut atau hutan belantara?",
        answer: "Jika tidak ada jalan atau bangunan berpenghuni, sistem akan menampilkan wilayah administratif terdekat (wilayah perairan, teluk, atau kecamatan terdekat)."
      },
      {
        question: "Apa bedanya dengan geocoding biasa?",
        answer: `Geocoding langsung mengubah alamat tertulis menjadi koordinat numerik. Untuk mencari koordinat dari nama tempat, buka <a href="${getLocalizedPath('/tools/geocoding/', l)}">Geocoder Langsung</a>.`
      },
      {
        question: "Seberapa akurat penentuan nomor jalan yang dihasilkan?",
        answer: "Di area perkotaan besar dengan data geospasial matang, presisi mencapai gedung spesifik. Di daerah pedesaan, perkiraan jalan terdekat akan digunakan."
      },
      {
        question: "Bisakah memeriksa alamat fisik perangkat saya sekarang?",
        answer: `Ya, klik <strong>Gunakan Lokasi Saya</strong> atau kunjungi laman diagnostik <a href="${getLocalizedPath('/my-location/address/', l)}">Alamat Saya Sekarang</a>.`
      }
    ]
  },

  'geocoding': {
    en: (l) => [
      {
        question: "What is forward geocoding?",
        answer: `<strong>Forward geocoding</strong> is the process of translating human-written location descriptions—such as a street address, business landmark, ZIP code, or municipality—into geographic coordinates (latitude and longitude). Learn how it compares to reverse operations in <a href="${getLocalizedPath('/comparisons/geocoding-vs-reverse-geocoding/', l)}">Geocoding vs Reverse Geocoding</a>.`
      },
      {
        question: "What search query format delivers the most accurate geocoding results?",
        answer: "For maximum precision, include the full address hierarchy: street number, street name, city, province/state, postal code, and country (e.g., <code>1600 Amphitheatre Pkwy, Mountain View, CA 94043</code>). Including postal codes eliminates ambiguity."
      },
      {
        question: "Why do some place names return multiple search results?",
        answer: "Many cities and street names share identical titles across different regions (for example, there are dozens of cities named 'Springfield' across the United States). Our tool displays candidate matches so you can verify the intended state and country."
      },
      {
        question: "How do I convert geocoded coordinates to Degrees Minutes Seconds or UTM?",
        answer: `Copy the coordinates returned by the search and paste them into our <a href="${getLocalizedPath('/tools/coordinate-converter/', l)}">Coordinate Converter</a> to instantly convert to nautical DMS or military UTM grids.`
      },
      {
        question: "Can I measure the distance between two geocoded addresses?",
        answer: `Yes! Copy the coordinates of your first and second destination, then open our <a href="${getLocalizedPath('/tools/distance-calculator/', l)}">Distance Calculator</a> to measure great-circle distance and flight bearing.`
      },
      {
        question: "How can I find the elevation above sea level of a geocoded location?",
        answer: `Paste your coordinates into our <a href="${getLocalizedPath('/tools/elevation-finder/', l)}">Elevation Finder</a> to calculate ground elevation, barometric pressure, and boiling point.`
      }
    ],
    es: (l) => [
      {
        question: "¿Qué es la geocodificación directa?",
        answer: `La <strong>geocodificación directa</strong> convierte descripciones textuales de lugares (direcciones, códigos postales o monumentos) en coordenadas matemáticas de latitud y longitud. Vea la comparativa en <a href="${getLocalizedPath('/comparisons/geocoding-vs-reverse-geocoding/', l)}">Geocodificación vs Inversa</a>.`
      },
      {
        question: "¿Cuál es la forma más precisa de escribir una dirección?",
        answer: "Indique la jerarquía completa: número de portal, nombre de vía, localidad, código postal y país (ej. <code>Gran Vía 28, 28013 Madrid, España</code>) para evitar ambigüedades."
      },
      {
        question: "¿Por qué algunos nombres muestran varios resultados?",
        answer: "Muchos nombres de ciudades o calles se repiten en diferentes provincias o países. La herramienta lista los candidatos más coincidentes para que elija el correcto."
      },
      {
        question: "¿Cómo pasar las coordenadas obtenidas a formato DMS o UTM?",
        answer: `Copie el resultado y péguelo en nuestro <a href="${getLocalizedPath('/tools/coordinate-converter/', l)}">Conversor de Coordenadas</a> para obtener Grados Minutos Segundos o proyección UTM.`
      },
      {
        question: "¿Puedo medir la distancia entre dos direcciones geocodificadas?",
        answer: `Sí, traslade las coordenadas obtenidas a nuestra <a href="${getLocalizedPath('/tools/distance-calculator/', l)}">Calculadora de Distancia</a> para calcular la ruta ortodrómica.`
      },
      {
        question: "¿Cómo saber la altitud del lugar que he buscado?",
        answer: `Introduzca las coordenadas en nuestro <a href="${getLocalizedPath('/tools/elevation-finder/', l)}">Buscador de Altitud</a> para conocer los metros sobre el nivel del mar.`
      }
    ],
    fr: (l) => [
      {
        question: "Qu'est-ce que le géocodage direct ?",
        answer: `Le <strong>géocodage direct</strong> traduit une adresse écrite, un toponyme ou un code postal en coordonnées géographiques normalisées (latitude et longitude). Retrouvez l'explication dans <a href="${getLocalizedPath('/comparisons/geocoding-vs-reverse-geocoding/', l)}">Géocodage Direct vs Inverse</a>.`
      },
      {
        question: "Comment formuler sa recherche pour un résultat parfait ?",
        answer: "Fournissez l'adresse complète : numéro, nom de rue, code postal, ville et pays (ex. <code>55 Rue du Faubourg Saint-Honoré, 75008 Paris, France</code>)."
      },
      {
        question: "Pourquoi certains lieux affichent-ils plusieurs résultats ?",
        answer: "De nombreuses communes portent le même nom. La liste déroulante vous permet de sélectionner l'état ou le département visé."
      },
      {
        question: "Comment convertir ces résultats en degrés sexagésimaux (DMS) ou UTM ?",
        answer: `Copiez les coordonnées obtenues dans notre <a href="${getLocalizedPath('/tools/coordinate-converter/', l)}">Convertisseur de Coordonnées</a>.`
      },
      {
        question: "Puis-je calculer la distance entre deux adresses géocodées ?",
        answer: `Oui, reportez les coordonnées dans notre <a href="${getLocalizedPath('/tools/distance-calculator/', l)}">Calculateur de Distance</a> pour afficher le tracé orthodromique.`
      },
      {
        question: "Comment connaître l'altitude du lieu trouvé ?",
        answer: `Saisissez les coordonnées dans notre <a href="${getLocalizedPath('/tools/elevation-finder/', l)}">Calculateur d'Altitude</a> pour obtenir la hauteur au-dessus du niveau de la mer.`
      }
    ],
    de: (l) => [
      {
        question: "Was ist Vorwärts-Geokodierung?",
        answer: `<strong>Vorwärts-Geokodierung</strong> übersetzt Textadressen, Ortsnamen oder Sehenswürdigkeiten in geografische Koordinaten (Breite und Länge). Lesen Sie <a href="${getLocalizedPath('/comparisons/geocoding-vs-reverse-geocoding/', l)}">Vorwärts- vs. Rückwärts-Geokodierung</a>.`
      },
      {
        question: "Wie formuliere ich eine Suchanfrage am besten?",
        answer: "Geben Sie die vollständige Anschrift an: Straße, Hausnummer, Postleitzahl, Ort und Land (z.B. <code>Unter den Linden 77, 10117 Berlin, Deutschland</code>)."
      },
      {
        question: "Warum gibt es bei manchen Suchanfragen mehrere Treffer?",
        answer: "Zahlreiche Ortsnamen existieren mehrfach. Die Trefferliste ermöglicht Ihnen die exakte Auswahl des passenden Standorts."
      },
      {
        question: "Wie rechne ich die Koordinaten in GMS oder UTM um?",
        answer: `Übertragen Sie die Werte in unseren <a href="${getLocalizedPath('/tools/coordinate-converter/', l)}">Koordinaten-Konverter</a>.`
      },
      {
        question: "Kann ich die Entfernung zwischen zwei Geocoder-Ergebnissen berechnen?",
        answer: `Ja, nutzen Sie dafür unseren <a href="${getLocalizedPath('/tools/distance-calculator/', l)}">Entfernungsrechner</a> für Luftliniendistanzen.`
      },
      {
        question: "Wie ermittle ich die Geländehöhe des gesuchten Orts?",
        answer: `Fügen Sie die Koordinaten in unseren <a href="${getLocalizedPath('/tools/elevation-finder/', l)}">Höhenfinder</a> ein.`
      }
    ],
    pt: (l) => [
      {
        question: "O que é geocodificação direta?",
        answer: `A <strong>geocodificação direta</strong> traduz endereços de texto, bairros ou monumentos em coordenadas numéricas de latitude e longitude. Veja os detalhes em <a href="${getLocalizedPath('/comparisons/geocoding-vs-reverse-geocoding/', l)}">Geocodificação Direta vs Reversa</a>.`
      },
      {
        question: "Qual o melhor formato para pesquisar um endereço?",
        answer: "Inclua logradouro, número, bairro, cidade, CEP e país (ex: <code>Av. Paulista 1578, Bela Vista, São Paulo - SP, Brasil</code>)."
      },
      {
        question: "Por que algumas buscas mostram mais de um resultado?",
        answer: "Existem diversas cidades com nomes idênticos no Brasil e no mundo. A lista permite escolher o estado e município corretos."
      },
      {
        question: "Como converter essas coordenadas para DMS ou UTM?",
        answer: `Copie os números para o nosso <a href="${getLocalizedPath('/tools/coordinate-converter/', l)}">Conversor de Coordenadas</a>.`
      },
      {
        question: "Posso calcular a distância entre endereços geocodificados?",
        answer: `Sim, informe as coordenadas na nossa <a href="${getLocalizedPath('/tools/distance-calculator/', l)}">Calculadora de Distância</a> para medir o trajeto.`
      },
      {
        question: "Como verificar a altitude do local encontrado?",
        answer: `Insira as coordenadas no <a href="${getLocalizedPath('/tools/elevation-finder/', l)}">Localizador de Altitude</a> para ver a altura sobre o nível do mar.`
      }
    ],
    hi: (l) => [
      {
        question: "फ़ॉरवर्ड जियोकोडिंग क्या है?",
        answer: `<strong>फ़ॉरवर्ड जियोकोडिंग</strong> किसी पते, स्थान या पिन कोड को अक्षांश और देशांतर निर्देशांकों में बदलने की तकनीक है। तुलनात्मक जानकारी <a href="${getLocalizedPath('/comparisons/geocoding-vs-reverse-geocoding/', l)}">फ़ॉरवर्ड बनाम रिवर्स जियोकोडिंग</a> में पढ़ें।`
      },
      {
        question: "सटीक परिणाम पाने के लिए पता कैसे लिखें?",
        answer: "पूरा पता लिखें: मकान नंबर, सड़क का नाम, शहर, राज्य और पिन कोड (जैसे <code>राजपथ, इंडिया गेट, नई दिल्ली 110001, भारत</code>)।"
      },
      {
        question: "कुछ खोजों में एक से अधिक परिणाम क्यों दिखते हैं?",
        answer: "कई शहरों या मोहल्लों के नाम समान होते हैं। सूची आपको सही राज्य या जिले का चयन करने में मदद करती है।"
      },
      {
        question: "प्राप्त निर्देशांकों को DMS या UTM में कैसे बदलें?",
        answer: `निर्देशांक कॉपी करें और हमारे <a href="${getLocalizedPath('/tools/coordinate-converter/', l)}">निर्देशांक कनवर्टर</a> में पेस्ट करें।`
      },
      {
        question: "क्या दो पतों के बीच हवाई दूरी नापी जा सकती है?",
        answer: `हाँ, निर्देशांकों को हमारे <a href="${getLocalizedPath('/tools/distance-calculator/', l)}">दूरी कैलकुलेटर</a> में डालकर सीधी दूरी मापें।`
      },
      {
        question: "किसी स्थान की समुद्र तल से ऊंचाई कैसे जानें?",
        answer: `निर्देशांकों को हमारे <a href="${getLocalizedPath('/tools/elevation-finder/', l)}">ऊंचाई खोजक</a> में दर्ज करें।`
      }
    ],
    id: (l) => [
      {
        question: "Apa itu forward geocoding?",
        answer: `<strong>Forward geocoding</strong> adalah proses mengubah teks nama tempat, jalan, atau kode pos menjadi koordinat numerik lintang dan bujur. Pelajari perbedaannya di <a href="${getLocalizedPath('/comparisons/geocoding-vs-reverse-geocoding/', l)}">Geocoding vs Reverse Geocoding</a>.`
      },
      {
        question: "Format pencarian apa yang memberikan hasil paling tepat?",
        answer: "Cantumkan nama jalan, nomor, kelurahan/kecamatan, kota, kode pos, dan negara (mis. <code>Jl. M.H. Thamrin No. 1, Jakarta Pusat, Indonesia</code>)."
      },
      {
        question: "Mengapa pencarian terkadang menampilkan beberapa hasil pilihan?",
        answer: "Banyak nama kota atau jalan yang serupa di berbagai provinsi. Daftar pilihan memudahkan Anda memastikan wilayah yang benar."
      },
      {
        question: "Bagaimana cara mengubah koordinat ke format DMS atau UTM?",
        answer: `Salin koordinat ke <a href="${getLocalizedPath('/tools/coordinate-converter/', l)}">Konverter Koordinat</a> untuk konversi instan.`
      },
      {
        question: "Bisakah mengukur jarak antara dua alamat yang digeocode?",
        answer: `Bisa, masukkan kedua titik koordinat ke dalam <a href="${getLocalizedPath('/tools/distance-calculator/', l)}">Kalkulator Jarak</a> kami.`
      },
      {
        question: "Bagaimana mengetahui ketinggian elevasi tempat yang dicari?",
        answer: `Masukkan hasil koordinat ke <a href="${getLocalizedPath('/tools/elevation-finder/', l)}">Pencari Elevasi</a> untuk melihat meter di atas permukaan laut.`
      }
    ]
  },

  'distance-calculator': {
    en: (l) => [
      {
        question: "What is the Haversine formula and how does it calculate distance?",
        answer: "The <strong>Haversine formula</strong> calculates the great-circle distance between two points on a spherical Earth given their latitudes and longitudes. It accounts for the curvature of the Earth by computing the spherical arc between coordinates using trigonometry."
      },
      {
        question: "Is this distance as the crow flies or driving road distance?",
        answer: "This tool calculates <strong>straight-line geodetic distance</strong> ('as the crow flies'). It represents the absolute shortest spatial path between two geographic points across the surface of the globe, rather than street network turn-by-turn routes."
      },
      {
        question: "How does Earth's curvature affect distance calculations?",
        answer: `On a flat 2D map projection, straight lines are distorted by projection skew (such as Mercator stretching). Great-circle calculation follows the true curved surface of the Earth, which is why commercial flight paths appear curved on flat maps. Learn coordinate basics in <a href="${getLocalizedPath('/guides/latitude-and-longitude-explained/', l)}">Latitude & Longitude Explained</a>.`
      },
      {
        question: "What does the 'Bearing' angle mean?",
        answer: "The <strong>Bearing</strong> (forward azimuth) indicates the initial compass heading in degrees (0° to 360°) needed to travel from Point A toward Point B along the great-circle path. Because great-circle tracks curve across meridians, the bearing gradually shifts as you travel along the route."
      },
      {
        question: "How accurate is this spherical calculation compared to an ellipsoid model?",
        answer: "The Haversine formula assumes a spherical Earth with an average radius of 6,371 km. Worldwide, this yields an accuracy margin within <strong>0.3% to 0.5%</strong> compared to complex ellipsoidal geodesics (such as Vincenty's equations)."
      },
      {
        question: "How can I set Point A and Point B easily?",
        answer: `You can click anywhere on the interactive map to place Point A and Point B, use <strong>Use My Location</strong> for your current satellite position, or look up coordinates with our <a href="${getLocalizedPath('/tools/geocoding/', l)}">Geocoder</a>.`
      }
    ],
    es: (l) => [
      {
        question: "¿Qué es la fórmula de Haversine y cómo calcula la distancia?",
        answer: "La <strong>fórmula del semiverseno (Haversine)</strong> determina la distancia ortodrómica sobre la superficie de una esfera a partir de las latitudes y longitudes de ambos puntos, respetando la curvatura terrestre."
      },
      {
        question: "¿La distancia calculada es en línea recta o por carretera?",
        answer: "Calcula la <strong>distancia geodésica en línea recta</strong> ('a vuelo de pájaro'). Representa la trayectoria más corta posible entre dos puntos sobre el globo, no la distancia por carretera de tráfico rodado."
      },
      {
        question: "¿Cómo afecta la curvatura del planeta a la medición?",
        answer: `Los mapas planos distorsionan las distancias por deformación cartográfica. El cálculo de círculo máximo sigue el relieve esférico real, motivo por el cual las rutas aéreas transoceánicas se ven curvadas en mapas planos. Consulte nuestra guía <a href="${getLocalizedPath('/guides/latitude-and-longitude-explained/', l)}">Latitud y Longitud Explicadas</a>.`
      },
      {
        question: "¿Qué representa el ángulo de rumbo (Bearing)?",
        answer: "El <strong>rumbo de navegación</strong> expresa la dirección de brújula en grados (0° a 360°) para iniciar el trayecto desde el Punto A hacia el Punto B a lo largo del arco ortodrómico."
      },
      {
        question: "¿Qué precisión tiene el modelo esférico?",
        answer: "Con un radio medio terrestre de 6.371 km, la fórmula de Haversine presenta un margen de error de tan solo <strong>0,3% a 0,5%</strong> frente a modelos elipsoidales complejos como Vincenty."
      },
      {
        question: "¿Cómo fijar los Puntos A y B fácilmente?",
        answer: `Haga clic dos veces sobre el mapa interactivo, use el botón de geolocalización o busque lugares con el <a href="${getLocalizedPath('/tools/geocoding/', l)}">Geocodificador</a>.`
      }
    ],
    fr: (l) => [
      {
        question: "Qu'est-ce que la formule de Haversine ?",
        answer: "La <strong>formule de Haversine</strong> détermine la distance du grand cercle (orthodromie) entre deux points de coordonnées géographiques à la surface d'une sphère terrestre."
      },
      {
        question: "S'agit-il d'une distance à vol d'oiseau ou routière ?",
        answer: "C'est une <strong>distance orthodromique à vol d'oiseau</strong>, soit le plus court chemin physique à la surface du globe, et non un itinéraire routier automobile."
      },
      {
        question: "Comment la courbure de la Terre influence-t-elle le calcul ?",
        answer: `Les projections planes déforment les distances aux hautes latitudes. Le calcul sphérique épouse la véritable forme courbe du globe. Découvrez les coordonnées dans notre <a href="${getLocalizedPath('/guides/latitude-and-longitude-explained/', l)}">Guide Latitude et Longitude</a>.`
      },
      {
        question: "Que signifie le cap (Bearing) indiqué ?",
        answer: "Le <strong>cap initial</strong> est la direction angulaire au compas (0° à 360°) à suivre au départ du point A pour rejoindre le point B."
      },
      {
        question: "Quelle est la précision par rapport à un ellipsoïde ?",
        answer: "Basée sur un rayon terrestre moyen de 6 371 km, la formule garantit une justesse à <strong>0,3 % près</strong> par rapport aux équations d'ellipsoïde géodésique."
      },
      {
        question: "Comment définir les points A et B facilement ?",
        answer: `Cliquez directement sur la carte interactive, activez votre géolocalisation ou trouvez des coordonnées via le <a href="${getLocalizedPath('/tools/geocoding/', l)}">Géocodeur</a>.`
      }
    ],
    de: (l) => [
      {
        question: "Was ist die Haversine-Formel?",
        answer: "Die <strong>Haversine-Formel</strong> berechnet die Großkreisdistanz zwischen zwei Koordinatenpaaren auf einer Kugel unter Berücksichtigung der Erdkrümmung."
      },
      {
        question: "Handelt es sich um Luftlinie oder Straßenstrecke?",
        answer: "Es ist die <strong>geodätische Luftlinie</strong> ('wie die Taube fliegt') – der kürzeste Weg auf der Erdoberfläche, nicht die Fahrtstrecke auf Straßen."
      },
      {
        question: "Welchen Einfluss hat die Erdkrümmung?",
        answer: `Flache Karten verzerren Distanzen stark. Die Großkreisberechnung folgt der sphärischen Realität der Erde. Mehr in unserem <a href="${getLocalizedPath('/guides/latitude-and-longitude-explained/', l)}">Ratgeber zu Breiten- und Längengraden</a>.`
      },
      {
        question: "Was bedeutet die Peilung (Bearing)?",
        answer: "Die <strong>Peilung</strong> gibt den Kompasskurs in Grad (0° bis 360°) an, den man am Startpunkt A einschlagen muss, um Punkt B anzusteuern."
      },
      {
        question: "Wie genau ist die Berechnung?",
        answer: "Mit einem Erdradius von 6.371 km liegt die Abweichung weltweit bei nur <strong>0,3 % bis 0,5 %</strong> gegenüber komplexen Ellipsoidmodellen."
      },
      {
        question: "Wie lege ich die Punkte A und B fest?",
        answer: `Klicken Sie auf die Karte, nutzen Sie Ihren aktuellen GPS-Standort oder suchen Sie Orte mit dem <a href="${getLocalizedPath('/tools/geocoding/', l)}">Geocoder</a>.`
      }
    ],
    pt: (l) => [
      {
        question: "O que é a fórmula de Haversine?",
        answer: "A <strong>fórmula de Haversine</strong> calcula a distância ortodrômica de círculo máximo entre dois pares de coordenadas sobre a superfície esférica da Terra."
      },
      {
        question: "A distância é em linha reta ou percurso por rodovia?",
        answer: "Trata-se de <strong>distância geodésica em linha reta</strong> ('em linha reta / voo de pássaro'), que representa a rota espacial mais curta no globo, e não o trajeto de carro."
      },
      {
        question: "Como a curvatura da Terra afeta a medição?",
        answer: `Mapas planos distorcem distâncias continentais. O cálculo ortodrômico segue o formato real do planeta. Entenda os conceitos em <a href="${getLocalizedPath('/guides/latitude-and-longitude-explained/', l)}">Latitude e Longitude Explicadas</a>.`
      },
      {
        question: "O que significa o azimute/rumo (Bearing)?",
        answer: "O <strong>rumo</strong> indica a direção da bússola em graus (0° a 360°) no ponto de partida A para seguir rumo ao ponto de chegada B."
      },
      {
        question: "Qual a precisão do cálculo?",
        answer: "Considerando o raio médio de 6.371 km, a margem de erro situa-se em apenas <strong>0,3% a 0,5%</strong> frente a cálculos elipsoidais como Vincenty."
      },
      {
        question: "Como definir os pontos A e B com facilidade?",
        answer: `Basta clicar duas vezes no mapa, usar o sensor GPS do celular ou pesquisar coordenadas com o <a href="${getLocalizedPath('/tools/geocoding/', l)}">Geocodificador</a>.`
      }
    ],
    hi: (l) => [
      {
        question: "हैवरसाइन (Haversine) सूत्र क्या है?",
        answer: "<strong>हैवरसाइन सूत्र</strong> पृथ्वी की गोलाकार वक्रता को ध्यान में रखते हुए दो बिंदुओं के अक्षांश और देशांतर के आधार पर उनके बीच सबसे छोटी हवाई दूरी की गणना करता है।"
      },
      {
        question: "क्या यह सीधी हवाई दूरी है या सड़क की दूरी?",
        answer: "यह <strong>सीधी हवाई दूरी (As the crow flies)</strong> है, जो पृथ्वी की सतह पर दो स्थानों के बीच का सबसे छोटा भूगणितीय मार्ग है, न कि सड़क का रास्ता।"
      },
      {
        question: "पृथ्वी की वक्रता दूरी को कैसे प्रभावित करती है?",
        answer: `समतल नक्शे दूरियों को विकृत करते हैं। ग्रेट-सर्कल गणना पृथ्वी की वास्तविक गोलाई के अनुसार सही दूरी मापती है। विस्तार से पढ़ें <a href="${getLocalizedPath('/guides/latitude-and-longitude-explained/', l)}">अक्षांश और देशांतर गाइड</a>।`
      },
      {
        question: "बेयरिंग (Bearing / दिशा कोण) का क्या अर्थ है?",
        answer: "<strong>बेयरिंग</strong> बिंदु A से बिंदु B की ओर यात्रा शुरू करने के लिए आवश्यक कंपास दिशा (0° से 360°) को दर्शाती है।"
      },
      {
        question: "गणना की सटीकता कितनी होती है?",
        answer: "6,371 किमी के औसत पृथ्वी अर्धव्यास के साथ, हैवरसाइन सूत्र <strong>0.3% से 0.5%</strong> की उच्च सटीकता प्रदान करता है।"
      },
      {
        question: "बिंदु A और B कैसे सेट करें?",
        answer: `नक्शे पर दो बार क्लिक करें, अपना लाइव GPS चुनें या <a href="${getLocalizedPath('/tools/geocoding/', l)}">जियोकोडर</a> से पते खोजें।`
      }
    ],
    id: (l) => [
      {
        question: "Apa itu formula Haversine?",
        answer: "<strong>Formula Haversine</strong> menghitung jarak lingkaran besar terpendek antara dua koordinat pada permukaan bola bumi dengan mempertimbangkan kelengkungan bumi."
      },
      {
        question: "Apakah ini jarak garis lurus atau jarak rute jalan raya?",
        answer: "Ini adalah <strong>jarak geodetik garis lurus</strong> (jarak udara terpendek), bukan rute mengemudi kendaraan melalui jaringan jalan."
      },
      {
        question: "Bagaimana kelengkungan bumi memengaruhi perhitungan jarak?",
        answer: `Peta datar mendistorsi jarak pada rentang panjang. Perhitungan lingkaran besar mengikuti permukaan lengkung bumi sesungguhnya. Baca konsepnya di <a href="${getLocalizedPath('/guides/latitude-and-longitude-explained/', l)}">Penjelasan Lintang dan Bujur</a>.`
      },
      {
        question: "Apa arti sudut 'Bearing' pada hasil?",
        answer: "<strong>Bearing</strong> adalah arah sudut kompas dalam derajat (0° hingga 360°) dari Titik A menuju Titik B pada awal rute."
      },
      {
        question: "Seberapa akurat perhitungan model bola ini?",
        answer: "Dengan rata-rata radius bumi 6.371 km, tingkat kesalahannya hanya sekitar <strong>0,3% hingga 0,5%</strong> dibanding kalkulasi elipsoid rumit."
      },
      {
        question: "Bagaimana cara menentukan Titik A dan Titik B?",
        answer: `Klik langsung dua titik pada peta interaktif, gunakan GPS perangkat Anda, atau cari lokasi dengan <a href="${getLocalizedPath('/tools/geocoding/', l)}">Geocoder</a>.`
      }
    ]
  },

  'coordinate-converter': {
    en: (l) => [
      {
        question: "How do I convert Degrees Minutes Seconds (DMS) to Decimal Degrees (DD)?",
        answer: `Use the standard mathematical formula: <code>Decimal Degrees = Degrees + (Minutes / 60) + (Seconds / 3600)</code>. If the coordinate is South or West, multiply by -1. For a detailed breakdown and conversion examples, explore our <a href="${getLocalizedPath('/comparisons/decimal-degrees-vs-dms/', l)}">Decimal Degrees vs DMS Comparison</a>.`
      },
      {
        question: "What is Universal Transverse Mercator (UTM) and how does it work?",
        answer: `<strong>UTM</strong> projects the Earth onto a flat 2D Cartesian plane by dividing the globe into 60 longitudinal zones of 6 degrees each. Positions are expressed in meters using Easting and Northing coordinates. Read our complete guide to <a href="${getLocalizedPath('/guides/utm-coordinates-and-datums/', l)}">UTM Coordinates and Geodetic Datums</a>.`
      },
      {
        question: "What is MGRS (Military Grid Reference System)?",
        answer: "<strong>MGRS</strong> is the NATO military coordinate standard derived from UTM and UPS. It expresses positions as a Grid Zone Designator (e.g. <code>43R</code>), a 100,000-meter square identification (e.g. <code>XQ</code>), followed by numerical Easting and Northing values."
      },
      {
        question: "What are Google Plus Codes and Geohashes?",
        answer: "Plus Codes (Open Location Code) and Geohashes are compact alphanumeric codes representing grid squares on Earth. They provide universal addresses in areas without street names or formal postal infrastructure."
      },
      {
        question: "How many decimal places are required for meter-level accuracy?",
        answer: "4 decimal places achieve ~11 meters resolution; <strong>5 decimal places resolve down to ~1.1 meters</strong>; and 6 decimal places achieve ~11 centimeters resolution."
      },
      {
        question: "How do I view converted coordinates on a map or find the street address?",
        answer: `Open our <a href="${getLocalizedPath('/tools/latitude-longitude/', l)}">Latitude Longitude Finder</a> to see the coordinates pinned on an interactive map, or use the <a href="${getLocalizedPath('/tools/address-finder/', l)}">Address Finder</a> to look up the physical building address.`
      }
    ],
    es: (l) => [
      {
        question: "¿Cómo convertir Grados Minutos Segundos (DMS) a Grados Decimales (DD)?",
        answer: `Aplique la fórmula: <code>Grados Decimales = Grados + (Minutos / 60) + (Segundos / 3600)</code>. En hemisferios Sur u Oeste, el resultado es negativo. Revise nuestra <a href="${getLocalizedPath('/comparisons/decimal-degrees-vs-dms/', l)}">comparativa Grados Decimales vs DMS</a>.`
      },
      {
        question: "¿Qué es la proyección UTM y para qué se utiliza?",
        answer: `El sistema <strong>UTM</strong> divide el planeta en 60 husos cilíndricos de 6 grados de longitud, expresando posiciones métricas en Coordenadas X (Easting) e Y (Northing). Aprenda más en <a href="${getLocalizedPath('/guides/utm-coordinates-and-datums/', l)}">Coordenadas UTM y Datums</a>.`
      },
      {
        question: "¿Qué es el sistema militar MGRS?",
        answer: "<strong>MGRS</strong> es el estándar militar de la OTAN basado en UTM. Identifica zonas cuadrangulares de 100.000 metros seguidas de coordenadas métricas."
      },
      {
        question: "¿Qué son los códigos Plus Code y Geohash?",
        answer: "Son códigos alfanuméricos compactos que representan celdas espaciales en la Tierra, facilitando direcciones abiertas en regiones sin nombres de calle oficiales."
      },
      {
        question: "¿Cuántos decimales se precisan para precisión métrica?",
        answer: "Con 4 decimales se alcanzan ~11 metros, con <strong>5 decimales ~1,1 metros</strong> y con 6 decimales ~11 centímetros."
      },
      {
        question: "¿Cómo ver las coordenadas en un mapa o saber la dirección?",
        answer: `Abra el <a href="${getLocalizedPath('/tools/latitude-longitude/', l)}">Buscador de Latitud y Longitud</a> para situar el pin o el <a href="${getLocalizedPath('/tools/address-finder/', l)}">Buscador de Dirección</a> para extraer la calle.`
      }
    ],
    fr: (l) => [
      {
        question: "Comment convertir des Degrés Minutes Secondes (DMS) en Degrés Décimaux (DD) ?",
        answer: `Utilisez la formule : <code>Degrés Décimaux = Degrés + (Minutes / 60) + (Secondes / 3600)</code>. Multipliez par -1 pour les hémisphères Sud et Ouest. Consultez notre <a href="${getLocalizedPath('/comparisons/decimal-degrees-vs-dms/', l)}">comparatif Degrés Décimaux vs DMS</a>.`
      },
      {
        question: "Qu'est-ce que le système UTM et à quoi sert-il ?",
        answer: `Le système <strong>UTM</strong> projette la surface terrestre sur un plan 2D découpé en 60 fuseaux de 6 degrés de longitude, exprimant les coordonnées en mètres métriques. Lisez notre guide <a href="${getLocalizedPath('/guides/utm-coordinates-and-datums/', l)}">Coordonnées UTM et Datums</a>.`
      },
      {
        question: "Qu'est-ce que le système MGRS militaire ?",
        answer: "Le standard <strong>MGRS</strong> de l'OTAN découpe le quadrillage UTM en carrés de 100 kilomètres identifiés par des lettres, suivis de coordonnées métriques."
      },
      {
        question: "À quoi servent les Plus Codes et les Geohashes ?",
        answer: "Ce sont des encodages alphanumériques ouverts qui attribuent un identifiant de géolocalisation unique même en l'absence d'adresses postales formelles."
      },
      {
        question: "Combien de décimales pour une précision au mètre ?",
        answer: "4 décimales donnent ~11 mètres, <strong>5 décimales donnent ~1,1 mètre</strong> et 6 décimales descendent à ~11 centimètres."
      },
      {
        question: "Comment situer les coordonnées sur une carte ou trouver l'adresse ?",
        answer: `Ouvrez notre <a href="${getLocalizedPath('/tools/latitude-longitude/', l)}">Traceur de Latitude et Longitude</a> ou cherchez l'adresse postale dans le <a href="${getLocalizedPath('/tools/address-finder/', l)}">Localisateur d'Adresse</a>.`
      }
    ],
    de: (l) => [
      {
        question: "Wie rechnet man GMS in Dezimalgrad (DD) um?",
        answer: `Formel: <code>Dezimalgrad = Grad + (Minuten / 60) + (Sekunden / 3600)</code>. Bei Süd oder West wird der Wert negativ. Mehr in unserem Vergleich <a href="${getLocalizedPath('/comparisons/decimal-degrees-vs-dms/', l)}">Dezimalgrad vs. GMS</a>.`
      },
      {
        question: "Was ist das UTM-System und wie funktioniert es?",
        answer: `Das <strong>UTM-System</strong> unterteilt die Erde in 60 Längenzonen zu je 6 Grad und projiziert Punkte metrisch in Ost- und Nordwerte. Lesen Sie unseren Leitfaden <a href="${getLocalizedPath('/guides/utm-coordinates-and-datums/', l)}">UTM-Koordinaten und Datums</a>.`
      },
      {
        question: "Was bedeutet MGRS (Military Grid Reference System)?",
        answer: "<strong>MGRS</strong> ist das militärische NATO-Gitternetz basierend auf UTM. Es kennzeichnet Zonen mit 100-km-Quadraten und numerischen Koordinaten."
      },
      {
        question: "Was sind Google Plus Codes und Geohashes?",
        answer: "Alphanumerische Codes, die Gitterfelder auf der Erde repräsentieren und als offene Adressen ohne Straßennamen fungieren."
      },
      {
        question: "Wie viele Nachkommastellen für Meter-Genauigkeit?",
        answer: "4 Dezimalstellen bieten ca. 11 Meter, <strong>5 Stellen ca. 1,1 Meter</strong> und 6 Stellen 11 Zentimeter Genauigkeit."
      },
      {
        question: "Wie überprüfe ich Koordinaten auf der Karte?",
        answer: `Nutzen Sie den <a href="${getLocalizedPath('/tools/latitude-longitude/', l)}">Breiten- und Längengrad-Finder</a> für die Kartenansicht oder den <a href="${getLocalizedPath('/tools/address-finder/', l)}">Adressen-Finder</a> für die Postadresse.`
      }
    ],
    pt: (l) => [
      {
        question: "Como converter Graus Minutos Segundos (DMS) para Graus Decimais (DD)?",
        answer: `Use a fórmula: <code>Graus Decimais = Graus + (Minutos / 60) + (Segundos / 3600)</code>. No Sul ou Oeste, o valor é negativo. Veja o comparativo em <a href="${getLocalizedPath('/comparisons/decimal-degrees-vs-dms/', l)}">Graus Decimais vs DMS</a>.`
      },
      {
        question: "O que é o sistema UTM e quando utilizá-lo?",
        answer: `O <strong>UTM</strong> projeta a Terra em um plano 2D dividido em 60 fusos de 6 graus de longitude, usando coordenadas métricas em Leste (Easting) e Norte (Northing). Leia nosso guia <a href="${getLocalizedPath('/guides/utm-coordinates-and-datums/', l)}">Coordenadas UTM e Datums</a>.`
      },
      {
        question: "O que é o sistema militar MGRS?",
        answer: "O <strong>MGRS</strong> é o padrão militar da OTAN derivado do UTM, dividindo regiões em quadrados de 100 km com códigos alfanuméricos."
      },
      {
        question: "O que são Plus Codes e Geohashes?",
        answer: "São códigos compactos que representam áreas no mapa, servindo de endereço em regiões sem nomes formais de ruas."
      },
      {
        question: "Quantas casas decimais geram precisão métrica?",
        answer: "4 casas alcançam ~11 metros, <strong>5 casas decimais garantem ~1,1 metro</strong> e 6 casas chegam a 11 centímetros."
      },
      {
        question: "Como ver essas coordenadas no mapa ou achar o endereço?",
        answer: `Abra o <a href="${getLocalizedPath('/tools/latitude-longitude/', l)}">Localizador de Latitude e Longitude</a> ou consulte o <a href="${getLocalizedPath('/tools/address-finder/', l)}">Localizador de Endereço</a>.`
      }
    ],
    hi: (l) => [
      {
        question: "DMS (डिग्री मिनट सेकंड) को दशमलव डिग्री (DD) में कैसे बदलें?",
        answer: `सूत्र: <code>दशमलव डिग्री = डिग्री + (मिनट / 60) + (सेकंड / 3600)</code>। दक्षिण या पश्चिम के लिए मान ऋणात्मक होता है। तुलना पढ़ें: <a href="${getLocalizedPath('/comparisons/decimal-degrees-vs-dms/', l)}">दशमलव डिग्री बनाम DMS</a>।`
      },
      {
        question: "UTM निर्देशांक प्रणाली क्या है?",
        answer: `<strong>UTM</strong> पृथ्वी को 60 जोनों में बांटकर समतल ग्रिड पर मीटर में निर्देशांक व्यक्त करती है। विस्तृत गाइड: <a href="${getLocalizedPath('/guides/utm-coordinates-and-datums/', l)}">UTM निर्देशांक और डेटम</a>।`
      },
      {
        question: "MGRS सैन्य ग्रिड प्रणाली क्या है?",
        answer: "<strong>MGRS</strong> नाटो सेनाओं द्वारा उपयोग किया जाने वाला ग्रिड सिस्टम है जो UTM पर आधारित 100 किमी के ब्लॉक बनाता है।"
      },
      {
        question: "Plus Code और Geohash क्या होते हैं?",
        answer: "ये अक्षरों और संख्याओं के संक्षिप्त कोड होते हैं जो बिना सड़क पते वाले क्षेत्रों में सटीक डिजिटल पता प्रदान करते हैं।"
      },
      {
        question: "मीटर स्तर की शुद्धता के लिए कितने दशमलव चाहिए?",
        answer: "4 दशमलव से ~11 मीटर, <strong>5 दशमलव से ~1.1 मीटर</strong> और 6 दशमलव से ~11 सेंटीमीटर की सटीकता मिलती है।"
      },
      {
        question: "बदले हुए निर्देशांकों को नक्शे या पते पर कैसे देखें?",
        answer: `नक्शे पर देखने के लिए <a href="${getLocalizedPath('/tools/latitude-longitude/', l)}">अक्षांश और देशांतर खोजक</a> और पते के लिए <a href="${getLocalizedPath('/tools/address-finder/', l)}">सड़क पता खोजक</a> देखें।`
      }
    ],
    id: (l) => [
      {
        question: "Bagaimana cara mengubah DMS ke Derajat Desimal (DD)?",
        answer: `Gunakan rumus: <code>Derajat Desimal = Derajat + (Menit / 60) + (Detik / 3600)</code>. Di belahan Selatan atau Barat hasilnya negatif. Baca ulasannya di <a href="${getLocalizedPath('/comparisons/decimal-degrees-vs-dms/', l)}">Derajat Desimal vs DMS</a>.`
      },
      {
        question: "Apa itu proyeksi UTM dan bagaimana fungsinya?",
        answer: `Sistem <strong>UTM</strong> membagi bumi menjadi 60 zona bujur selebar 6 derajat dan memetakan koordinat dalam satuan meter (Easting & Northing). Baca selengkapnya di <a href="${getLocalizedPath('/guides/utm-coordinates-and-datums/', l)}">Koordinat UTM & Datum Geodesi</a>.`
      },
      {
        question: "Apa itu sistem militer MGRS?",
        answer: "<strong>MGRS</strong> adalah standar militer NATO yang diturunkan dari proyeksi UTM, mengidentifikasi bujur sangkar 100.000 meter dengan kode alfanumerik."
      },
      {
        question: "Apa fungsi Google Plus Code dan Geohash?",
        answer: "Keduanya adalah kode pengenal spasial ringkas yang berfungsi sebagai alamat terbuka di area terpencil tanpa nama jalan resmi."
      },
      {
        question: "Berapa angka desimal yang dibutuhkan untuk akurasi meter?",
        answer: "4 desimal memberikan presisi ~11 meter, <strong>5 desimal mencapai ~1,1 meter</strong>, dan 6 desimal mencapai ~11 sentimeter."
      },
      {
        question: "Bagaimana cara melihat koordinat pada peta atau memeriksa alamatnya?",
        answer: `Gunakan <a href="${getLocalizedPath('/tools/latitude-longitude/', l)}">Pencari Lintang dan Bujur</a> untuk melihat pin peta atau <a href="${getLocalizedPath('/tools/address-finder/', l)}">Pencari Alamat</a> untuk menemukan alamat jalan.`
      }
    ]
  },

  'elevation-finder': {
    en: (l) => [
      {
        question: "What is the difference between elevation and altitude?",
        answer: "<strong>Elevation</strong> refers to the vertical height of a physical ground location or landmark above mean sea level (MSL). <strong>Altitude</strong> describes the vertical distance of an airborne object (such as an airplane, drone, or weather balloon) above ground level (AGL) or above sea level (AMSL)."
      },
      {
        question: "How does this tool calculate elevation above sea level?",
        answer: "The tool queries digital elevation models derived from satellite radar topography (NASA SRTM) and open topographical datasets calibrated against the Earth Gravitational Model (EGM96) geoid for your exact latitude and longitude."
      },
      {
        question: "Why does smartphone GPS altitude differ from topographic map elevation?",
        answer: `Smartphone GNSS chips calculate height relative to the mathematical WGS 84 reference ellipsoid, which differs from mean sea level (orthometric height) by tens of meters due to gravitational undulation. Learn how satellite receivers work in <a href="${getLocalizedPath('/guides/how-gps-location-works/', l)}">How GPS Location Works</a>.`
      },
      {
        question: "How does elevation affect air pressure and boiling water?",
        answer: "As elevation increases, atmospheric air column weight decreases. Atmospheric pressure drops by approximately 12 hPa per 100 meters at lower elevations. Consequently, water boils at lower temperatures (for example, ~93°C at 2,000 meters altitude versus 100°C at sea level)."
      },
      {
        question: "How accurate is satellite radar elevation data?",
        answer: "SRTM satellite elevation data achieves vertical accuracy within <strong>5 to 10 meters</strong> across most populated continents. In extremely steep mountain cliffs, canyon edges, or dense rainforests, slight radar shadow variance may occur."
      },
      {
        question: "How can I measure the distance and slope between two elevations?",
        answer: `Retrieve the elevation for both locations, then use our <a href="${getLocalizedPath('/tools/distance-calculator/', l)}">Distance Calculator</a> to measure the horizontal ground distance and compute slope grade percentage.`
      }
    ],
    es: (l) => [
      {
        question: "¿Cuál es la diferencia entre elevación y altitud?",
        answer: "La <strong>elevación</strong> es la altura de un punto del terreno sobre el nivel medio del mar. La <strong>altitud</strong> es la distancia vertical de un objeto en vuelo (avión o dron) respecto al suelo o al mar."
      },
      {
        question: "¿Cómo calcula esta herramienta la elevación sobre el mar?",
        answer: "Consulta modelos digitales de terreno derivados de la misión de radar satelital NASA SRTM calibrados sobre el geoide gravimétrico terrestre EGM96."
      },
      {
        question: "¿Por qué la altitud del móvil difiere de la del mapa topográfico?",
        answer: `Los chips GPS miden alturas sobre el elipsoide matemático WGS 84, que puede discrepar decenas de metros respecto al nivel medio del mar. Vea los fundamentos en <a href="${getLocalizedPath('/guides/how-gps-location-works/', l)}">Cómo funciona el GPS</a>.`
      },
      {
        question: "¿Cómo influye la altitud en la presión y el agua hirviendo?",
        answer: "A mayor altura, la presión atmosférica se reduce. Por ello el agua hierve a menor temperatura en las montañas (~93°C a 2.000 metros de altitud frente a 100°C al nivel del mar)."
      },
      {
        question: "¿Qué precisión tienen los datos topográficos satelitales?",
        answer: "El modelo SRTM ofrece una precisión vertical típica de <strong>5 a 10 metros</strong> en la inmensa mayoría de regiones continentales."
      },
      {
        question: "¿Cómo medir la distancia y desnivel entre dos cumbres?",
        answer: `Obtenga la elevación de ambos puntos y use nuestra <a href="${getLocalizedPath('/tools/distance-calculator/', l)}">Calculadora de Distancia</a> para conocer la distancia horizontal y calcular la pendiente.`
      }
    ],
    fr: (l) => [
      {
        question: "Quelle est la différence entre élévation et altitude ?",
        answer: "L'<strong>élévation</strong> correspond à la hauteur d'un lieu physique au sol par rapport au niveau moyen de la mer. L'<strong>altitude</strong> mesure la hauteur d'un mobile dans les airs (avion, montgolfière) au-dessus du sol ou de la mer."
      },
      {
        question: "Comment l'altitude est-elle calculée par cet outil ?",
        answer: "L'outil interroge les modèles numériques de terrain de la mission radar SRTM de la NASA, calés sur le géoïde gravitationnel EGM96."
      },
      {
        question: "Pourquoi l'altitude GPS du smartphone diffère-t-elle de la carte IGN ?",
        answer: `Le récepteur GPS calcule une hauteur géométrique au-dessus de l'ellipsoïde WGS 84, différent du niveau de la mer réel de plusieurs mètres. Lisez <a href="${getLocalizedPath('/guides/how-gps-location-works/', l)}">Comment fonctionne le GPS</a>.`
      },
      {
        question: "Comment l'altitude affecte-t-elle la pression et l'ébullition de l'eau ?",
        answer: "En altitude, la colonne d'air pèse moins lourd : la pression baisse et l'eau bout à température plus basse (~93°C à 2 000 m contre 100°C au niveau de la mer)."
      },
      {
        question: "Quelle est la précision des mesures d'élévation ?",
        answer: "La justesse verticale des données SRTM est généralement comprise entre <strong>5 et 10 mètres</strong> sur les continents."
      },
      {
        question: "Comment mesurer le dénivelé et la distance entre deux points ?",
        answer: `Relevez l'élévation des deux repères et calculez la distance horizontale avec notre <a href="${getLocalizedPath('/tools/distance-calculator/', l)}">Calculateur de Distance</a>.`
      }
    ],
    de: (l) => [
      {
        question: "Was ist der Unterschied zwischen Höhe über NN und Flughöhe?",
        answer: "Die <strong>Geländehöhe (Elevation)</strong> ist die Höhe eines Bodenpunkts über dem Meeresspiegel (Normalnull). Die <strong>Flughöhe (Altitude)</strong> beschreibt die Höhe eines fliegenden Objekts über Grund oder Meeresspiegel."
      },
      {
        question: "Wie berechnet das Tool die Geländehöhe?",
        answer: "Das Werkzeug nutzt digitale Höhenmodelle der NASA-SRTM-Radarmission, kalibriert auf das Schwerefeld-Geoid EGM96."
      },
      {
        question: "Warum weicht die GPS-Höhe des Smartphones von topografischen Karten ab?",
        answer: `GPS-Sensoren messen Höhen über dem mathematischen WGS-84-Ellipsoid, welches durch Geoidundulationen vom wahren Meeresspiegel abweicht. Details in <a href="${getLocalizedPath('/guides/how-gps-location-works/', l)}">Wie GPS funktioniert</a>.`
      },
      {
        question: "Wie wirkt sich die Höhe auf Luftdruck und Siedepunkt aus?",
        answer: "Mit steigender Höhe sinkt der barometrische Luftdruck, weshalb Wasser im Hochgebirge bei niedrigeren Temperaturen kocht (~93°C auf 2.000 m Höhe)."
      },
      {
        question: "Wie genau sind die Höhendaten?",
        answer: "Die vertikale Genauigkeit der SRTM-Radardaten liegt in den meisten Gebieten bei <strong>5 bis 10 Metern</strong>."
      },
      {
        question: "Wie messe ich Distanz und Steigung zwischen zwei Punkten?",
        answer: `Bestimmen Sie die Höhe beider Punkte und nutzen Sie den <a href="${getLocalizedPath('/tools/distance-calculator/', l)}">Entfernungsrechner</a> für die Distanzmessung.`
      }
    ],
    pt: (l) => [
      {
        question: "Qual a diferença entre elevação e altitude?",
        answer: "A <strong>elevação</strong> mede a cota do terreno em relação ao nível médio do mar (MSL). A <strong>altitude</strong> mede a altura de um objeto aéreo (aeronave, drone) em relação à superfície ou ao mar."
      },
      {
        question: "Como a ferramenta calcula a elevação sobre o nível do mar?",
        answer: "Consulta modelos digitais de elevação derivados da missão de radar NASA SRTM calibrados no geoide EGM96."
      },
      {
        question: "Por que a altitude do GPS do celular difere das cartas topográficas?",
        answer: `O chip GNSS mede a altura sobre o elipsoide WGS 84, que apresenta ondulação em relação ao nível do mar verdadeiro. Veja em <a href="${getLocalizedPath('/guides/how-gps-location-works/', l)}">Como funciona o GPS</a>.`
      },
      {
        question: "Como a altitude afeta a pressão e a fervura da água?",
        answer: "Quanto maior a altitude, menor a pressão do ar, fazendo com que a água ferva a temperaturas mais baixas (~93°C a 2.000 metros de altitude)."
      },
      {
        question: "Qual a precisão dos dados de satélite?",
        answer: "O modelo SRTM atinge precisão vertical de <strong>5 a 10 metros</strong> na maior parte dos continentes."
      },
      {
        question: "Como medir a distância e desnível entre dois pontos?",
        answer: `Consulte a elevação de ambos e use a nossa <a href="${getLocalizedPath('/tools/distance-calculator/', l)}">Calculadora de Distância</a> para calcular a distância e a inclinação da rota.`
      }
    ],
    hi: (l) => [
      {
        question: "एलिवेशन (Elevation) और अल्टीट्यूड (Altitude) में क्या अंतर है?",
        answer: "<strong>एलिवेशन</strong> ज़मीनी स्थान की समुद्र तल से ऊंचाई को कहते हैं। <strong>अल्टीट्यूड</strong> हवा में उड़ने वाली किसी वस्तु (जैसे विमान या ड्रोन) की ऊंचाई को दर्शाता है।"
      },
      {
        question: "यह टूल समुद्र तल से ऊंचाई की गणना कैसे करता है?",
        answer: "यह टूल नासा के SRTM सैटेलाइट रडार टोपोग्राफी मॉडल और EGM96 गुरुत्वाकर्षण डेटम से ऊंचाई डेटा प्राप्त करता है।"
      },
      {
        question: "फ़ोन की GPS ऊंचाई और टोपोग्राफिक मैप की ऊंचाई में अंतर क्यों होता है?",
        answer: `फ़ोन का GPS चिप गणितीय WGS 84 दीर्घवृत्त से ऊंचाई मापता है, जो वास्तविक समुद्र तल से कई मीटर अलग हो सकता है। पढ़ें <a href="${getLocalizedPath('/guides/how-gps-location-works/', l)}">GPS कैसे काम करता है</a>।`
      },
      {
        question: "ऊंचाई का वायुदाब और पानी उबलने पर क्या प्रभाव पड़ता है?",
        answer: "ऊंचाई बढ़ने पर वायुमंडलीय दबाव घटता है, जिससे पानी कम तापमान पर उबलने लगता है (जैसे 2,000 मीटर पर ~93°C बनाम समुद्र तट पर 100°C)।"
      },
      {
        question: "सैटेलाइट ऊंचाई डेटा कितना सटीक होता है?",
        answer: "SRTM रडार मॉडल अधिकांश मैदानी और मध्यम इलाकों में <strong>5 से 10 मीटर</strong> की ऊर्ध्वाधर सटीकता देता है।"
      },
      {
        question: "दो स्थानों के बीच दूरी और ढलान कैसे नापें?",
        answer: `दोनों स्थानों की ऊंचाई नोट करें और क्षैतिज दूरी जानने के लिए हमारे <a href="${getLocalizedPath('/tools/distance-calculator/', l)}">दूरी कैलकुलेटर</a> का उपयोग करें।`
      }
    ],
    id: (l) => [
      {
        question: "Apa perbedaan antara elevasi dan altitude?",
        answer: "<strong>Elevasi</strong> merujuk pada ketinggian titik daratan di atas permukaan laut rata-rata (MSL). <strong>Altitude</strong> mengukur ketinggian objek terbang (seperti pesawat atau drone) di atas tanah atau laut."
      },
      {
        question: "Bagaimana alat ini menghitung elevasi di atas permukaan laut?",
        answer: "Alat ini mengakses model elevasi digital dari misi radar satelit NASA SRTM yang diselaraskan dengan model geoid bumi EGM96."
      },
      {
        question: "Mengapa ketinggian GPS ponsel berbeda dari peta topografi resmi?",
        answer: `GPS ponsel mengukur ketinggian di atas elipsoid WGS 84, yang memiliki selisih undulasi geoid puluhan meter dari permukaan laut sebenarnya. Pelajari di <a href="${getLocalizedPath('/guides/how-gps-location-works/', l)}">Cara Kerja GPS</a>.`
      },
      {
        question: "Bagaimana ketinggian memengaruhi tekanan udara dan titik didih air?",
        answer: "Semakin tinggi elevasi, semakin rendah tekanan udara. Akibatnya, air mendidih pada suhu lebih rendah (~93°C pada ketinggian 2.000 meter)."
      },
      {
        question: "Seberapa akurat data elevasi radar satelit ini?",
        answer: "Secara umum, data radar SRTM memiliki akurasi vertikal dalam kisaran <strong>5 hingga 10 meter</strong> di sebagian besar daratan bumi."
      },
      {
        question: "Bagaimana cara mengukur jarak dan selisih kemiringan antartitik?",
        answer: `Catat ketinggian kedua lokasi lalu gunakan <a href="${getLocalizedPath('/tools/distance-calculator/', l)}">Kalkulator Jarak</a> untuk menghitung jarak horizontal dan persentase tanjakan.`
      }
    ]
  },

  'gps-accuracy': {
    en: (l) => [
      {
        question: "What does the GPS accuracy radius (in meters) mean?",
        answer: `The accuracy value reported by your device represents a <strong>95% circular error probable (CEP) confidence radius</strong>. If the tool reports ±4.2 meters, there is a 95% statistical likelihood that your true physical location lies within a circle of 4.2 meters around the pin. Learn how satellite constellations govern this in <a href="${getLocalizedPath('/guides/how-gps-location-works/', l)}">How GPS Works</a>.`
      },
      {
        question: "Why is GPS accuracy significantly worse indoors or in city centers?",
        answer: "GPS satellite signals are low-power microwave transmissions (~1.5 GHz) that cannot penetrate reinforced concrete, metal roofs, or dense building structures. In cities, signals bounce off glass facades (multipath reflection), causing receiver timing delays."
      },
      {
        question: "What is Dilution of Precision (HDOP/PDOP)?",
        answer: `<strong>Horizontal Dilution of Precision (HDOP)</strong> measures the geometric spread of visible satellites across the sky. When satellites are evenly distributed from horizon to zenith, HDOP is low (&lt; 1.5) and precision is highest. Check our <a href="${getLocalizedPath('/glossary/', l)}">Geospatial Glossary</a> for DOP definitions.`
      },
      {
        question: "What is the difference between single-band and dual-band (L1 + L5) GPS?",
        answer: "Older receivers use only the legacy L1 civilian frequency. Modern flagship smartphones feature dual-band GNSS (L1 + L5 frequencies), which enables the hardware to calculate and eliminate ionospheric signal delays, achieving sub-meter accuracy outdoors."
      },
      {
        question: "How can I improve my device's GPS accuracy right now?",
        answer: `Step outside with an unobstructed sky view, enable 'High Accuracy' in system settings, keep Wi-Fi enabled for Assisted GPS beaconing, and hold still for 30 seconds. Follow all actionable steps in our comprehensive guide: <a href="${getLocalizedPath('/guides/improve-gps-accuracy/', l)}">How to Improve GPS Accuracy</a>.`
      },
      {
        question: "How does GPS positioning differ from IP geolocation?",
        answer: `GPS relies on satellite atomic clocks for meter-level physical fixes. IP geolocation merely maps your internet router's network hub, which can be off by 10 to 50 kilometers. Compare both technologies in our guide to <a href="${getLocalizedPath('/comparisons/gps-vs-ip-location/', l)}">GPS vs IP Location</a>.`
      }
    ],
    es: (l) => [
      {
        question: "¿Qué significa el radio de precisión GPS en metros?",
        answer: `Indica un <strong>radio de confianza del 95%</strong> (CEP). Si marca ±4 metros, hay un 95% de probabilidad estadística de que su posición real se encuentre dentro de un círculo de 4 metros alrededor del punto. Lea <a href="${getLocalizedPath('/guides/how-gps-location-works/', l)}">Cómo funciona el GPS</a>.`
      },
      {
        question: "¿Por qué la precisión empeora en interiores o ciudades con rascacielos?",
        answer: "Las ondas satelitales no atraviesan hormigón armado ni tejados metálicos. En calles estrechas, las señales rebotan en fachadas acristaladas (error por trayectos múltiples), retrasando la sincronización."
      },
      {
        question: "¿Qué es la dilución de la precisión (HDOP/PDOP)?",
        answer: `El <strong>HDOP</strong> mide la distribución geométrica de los satélites visibles en el cielo. Cuanto más repartidos estén en la bóveda celeste, menor es el valor (&lt; 1,5) y mayor la exactitud. Consulte nuestro <a href="${getLocalizedPath('/glossary/', l)}">Glosario de Geodesia</a>.`
      },
      {
        question: "¿Qué diferencia el GPS de doble frecuencia (L1 + L5)?",
        answer: "El GPS tradicional solo sintoniza la banda L1. Los teléfonos modernos con doble banda (L1 y L5) corrigen las interferencias de la ionosfera, logrando precisiones inferiores a un metro."
      },
      {
        question: "¿Cómo puedo mejorar la precisión de mi GPS ahora mismo?",
        answer: `Salga a cielo abierto, active el modo 'Alta Precisión' en ajustes del móvil y mantenga encendido el Wi-Fi para A-GPS. Siga el tutorial completo en <a href="${getLocalizedPath('/guides/improve-gps-accuracy/', l)}">Cómo mejorar la precisión GPS</a>.`
      },
      {
        question: "¿En qué se diferencia el GPS de la ubicación por dirección IP?",
        answer: `El GPS calcula su posición con satélites espaciales con margen métrico. La IP localiza el centro de red del proveedor, errando por decenas de kilómetros. Lea <a href="${getLocalizedPath('/comparisons/gps-vs-ip-location/', l)}">GPS vs Ubicación IP</a>.`
      }
    ],
    fr: (l) => [
      {
        question: "Que signifie le rayon de précision GPS en mètres ?",
        answer: `Il exprime un <strong>rayon de confiance à 95 %</strong>. Si l'outil indique ±4 mètres, il y a 95 % de probabilité que votre position physique réelle se situe dans un cercle de 4 mètres. Découvrez les principes dans notre guide <a href="${getLocalizedPath('/guides/how-gps-location-works/', l)}">Comment fonctionne le GPS</a>.`
      },
      {
        question: "Pourquoi la précision baisse-t-elle en ville ou en intérieur ?",
        answer: "Les ondes radio des satellites ne traversent pas le béton armé. En ville, les signaux se réfléchissent sur les façades des immeubles (trajets multiples), faussant la mesure."
      },
      {
        question: "Qu'est-ce que la dilution de précision (HDOP) ?",
        answer: `L'<strong>HDOP</strong> mesure la répartition géométrique des satellites visibles dans le ciel. Plus les satellites sont dispersés, plus l'HDOP est faible (&lt; 1,5) et la mesure précise. Voir notre <a href="${getLocalizedPath('/glossary/', l)}">Glossaire Géodésique</a>.`
      },
      {
        question: "Quelle différence entre GPS simple et double fréquence (L1 + L5) ?",
        answer: "Le GPS classique n'utilise que la fréquence L1. Les téléphones récents à double bande (L1 + L5) éliminent les réfractions atmosphériques et atteignent une précision sous-métrique."
      },
      {
        question: "Comment améliorer la précision de mon GPS immédiatement ?",
        answer: `Placez-vous sous un ciel dégagé, activez la localisation haute précision et gardez le Wi-Fi actif pour l'A-GPS. Suivez nos conseils dans <a href="${getLocalizedPath('/guides/improve-gps-accuracy/', l)}">Comment améliorer la précision GPS</a>.`
      },
      {
        question: "Quelle différence entre GPS et géolocalisation IP ?",
        answer: `Le GPS relève votre position par satellites avec une justesse métrique. L'IP localise le centre serveur de votre fournisseur avec des kilomètres d'écart. Lisez <a href="${getLocalizedPath('/comparisons/gps-vs-ip-location/', l)}">GPS vs Localisation IP</a>.`
      }
    ],
    de: (l) => [
      {
        question: "Was bedeutet der Genauigkeitsradius in Metern?",
        answer: `Der Wert beziffert einen <strong>95%-Wahrscheinlichkeitsradius</strong> (CEP). Zeigt das Gerät ±4 Meter, befindet sich Ihr Standort mit 95%iger Sicherheit innerhalb dieses Umkreises. Mehr in <a href="${getLocalizedPath('/guides/how-gps-location-works/', l)}">Wie GPS funktioniert</a>.`
      },
      {
        question: "Warum ist die Genauigkeit in Gebäuden oder Städten schlechter?",
        answer: "Satellitensignale werden durch Betonwände stark gedämpft. In Straßenschluchten reflektieren Glasfassaden die Funkwellen (Mehrwegeffekte), was Laufzeitfehler erzeugt."
      },
      {
        question: "Was bedeutet Dilution of Precision (HDOP)?",
        answer: `Der <strong>HDOP-Wert</strong> beschreibt die geometrische Verteilung der empfangbaren Satelliten am Himmel. Je weiter sie auseinanderstehen, desto geringer ist der HDOP (&lt; 1,5) und desto höher die Präzision. Siehe unser <a href="${getLocalizedPath('/glossary/', l)}">Geodaten-Glossar</a>.`
      },
      {
        question: "Was ist der Vorteil von Dual-Frequency-GPS (L1 + L5)?",
        answer: "Herkömmliche Geräte empfangen nur das L1-Signal. Moderne Dual-Band-Smartphones nutzen L1 und L5 gleichzeitig, um ionosphärische Verzögerungen zu korrigieren."
      },
      {
        question: "Wie kann ich die GPS-Genauigkeit sofort verbessern?",
        answer: `Gehen Sie ins Freie, aktivieren Sie 'Hohe Genauigkeit' in den Geräteeinstellungen und lassen Sie WLAN für A-GPS eingeschaltet. Anleitung: <a href="${getLocalizedPath('/guides/improve-gps-accuracy/', l)}">GPS-Genauigkeit verbessern</a>.`
      },
      {
        question: "Wie unterscheidet sich GPS von der IP-Ortung?",
        answer: `GPS liefert metergeneue Satellitenkoordinaten. Die IP-Ortung zeigt lediglich den Serverstandort des Internetanbieters mit Kilometern Abweichung. Vergleich: <a href="${getLocalizedPath('/comparisons/gps-vs-ip-location/', l)}">GPS vs. IP-Standort</a>.`
      }
    ],
    pt: (l) => [
      {
        question: "O que significa o raio de precisão em metros?",
        answer: `Representa um <strong>raio de confiança probabilística de 95%</strong> (CEP). Um valor de ±4 metros significa 95% de certeza estatística de que você está dentro desse círculo. Leia <a href="${getLocalizedPath('/guides/how-gps-location-works/', l)}">Como funciona o GPS</a>.`
      },
      {
        question: "Por que a precisão cai dentro de prédios ou centros urbanos?",
        answer: "As ondas de satélite não cruzam lajes de concreto. Entre arranha-céus, os sinais sofrem reflexão nas fachadas (multicaminho), gerando atrasos de sincronização."
      },
      {
        question: "O que é Diluição de Precisão (HDOP)?",
        answer: `O <strong>HDOP</strong> mede a dispersão geométrica dos satélites visíveis. Quanto mais espalhados pelo céu, menor o valor (&lt; 1,5) e maior a estabilidade. Consulte o nosso <a href="${getLocalizedPath('/glossary/', l)}">Glossário de Geodésia</a>.`
      },
      {
        question: "Qual a vantagem do GPS de dupla frequência (L1 + L5)?",
        answer: "Aparelhos com tecnologia GNSS de frequência dupla (L1 e L5) conseguem neutralizar distorções da atmosfera, atingindo precisão submétrica ao ar livre."
      },
      {
        question: "Como melhorar a precisão do GPS agora mesmo?",
        answer: `Vá para um local ao ar livre, ative o modo 'Alta Precisão' nas configurações do celular e mantenha o Wi-Fi ligado para o A-GPS. Confira o guia: <a href="${getLocalizedPath('/guides/improve-gps-accuracy/', l)}">Como melhorar a precisão do GPS</a>.`
      },
      {
        question: "Qual a diferença entre GPS e localização por IP?",
        answer: `O GPS capta dados orbitais diretos com precisão métrica. A localização por IP mapeia o roteador do provedor com vários quilômetros de margem. Leia <a href="${getLocalizedPath('/comparisons/gps-vs-ip-location/', l)}">GPS vs Localização IP</a>.`
      }
    ],
    hi: (l) => [
      {
        question: "मीटर में GPS सटीकता दायरे का क्या अर्थ है?",
        answer: `यह <strong>95% विश्वास अंतराल (Confidence Radius)</strong> दर्शाता है। यदि दायरा ±4 मीटर है, तो 95% संभावना है कि आप उस 4 मीटर के दायरे में ही मौजूद हैं। पढ़ें <a href="${getLocalizedPath('/guides/how-gps-location-works/', l)}">GPS कैसे काम करता है</a>।`
      },
      {
        question: "कमरे के भीतर या ऊँची इमारतों में सटीकता क्यों कम हो जाती है?",
        answer: "सैटेलाइट तरंगें कंक्रीट की दीवारों को पार नहीं कर पातीं। शहरों में इमारतें सिग्नलों को परावर्तित (Multipath reflection) करती हैं, जिससे रिसीवर की गणना में देरी होती है।"
      },
      {
        question: "HDOP (Dilution of Precision) क्या है?",
        answer: `<strong>HDOP</strong> आकाश में दिखाई देने वाले सैटेलाइटों के ज्यामितीय फैलाव को मापता है। सैटेलाइट जितने फैले होंगे, HDOP उतना कम (&lt; 1.5) और सटीकता उतनी ही अधिक होगी। विवरण हमारे <a href="${getLocalizedPath('/glossary/', l)}">ग्लोसरी</a> में देखें।`
      },
      {
        question: "ड्यूल-बैंड (L1 + L5) GPS के क्या लाभ हैं?",
        answer: "ड्यूल-बैंड GPS तकनीक दोनों आवृत्तियों से सिग्नल लेकर वायुमंडलीय त्रुटियों को समाप्त करती है, जिससे 1 मीटर से भी कम का सटीक दायरा मिलता है।"
      },
      {
        question: "GPS सटीकता को तुरंत कैसे सुधारें?",
        answer: `खुले आसमान के नीचे जाएं, फ़ोन में 'हाई एक्यूरेसी' मोड चालू करें और Wi-Fi ऑन रखें। हमारा ट्यूटोरियल पढ़ें: <a href="${getLocalizedPath('/guides/improve-gps-accuracy/', l)}">GPS सटीकता कैसे बढ़ाएं</a>।`
      },
      {
        question: "GPS और IP लोकेशन में क्या मुख्य अंतर है?",
        answer: `GPS सीधे सैटेलाइट से मीटर स्तर की वास्तविक स्थिति लेता है, जबकि IP लोकेशन इंटरनेट केंद्र से कई किलोमीटर दूर हो सकती है। पढ़ें <a href="${getLocalizedPath('/comparisons/gps-vs-ip-location/', l)}">GPS बनाम IP लोकेशन</a>।`
      }
    ],
    id: (l) => [
      {
        question: "Apa arti radius akurasi GPS dalam meter?",
        answer: `Angka tersebut menunjukkan <strong>radius keyakinan statistik 95%</strong> (CEP). Jika tertulis ±4 meter, artinya 95% kemungkinan posisi fisik Anda berada dalam lingkaran 4 meter tersebut. Pelajari di <a href="${getLocalizedPath('/guides/how-gps-location-works/', l)}">Cara Kerja GPS</a>.`
      },
      {
        question: "Mengapa akurasi GPS menurun drastis di dalam ruangan atau pusat kota?",
        answer: "Sinyal radio satelit tidak dapat menembus struktur beton tebal. Di area gedung pencakar langit, sinyal memantul pada dinding kaca (multipath) sehingga mengacaukan perhitungan waktu tiba sinyal."
      },
      {
        question: "Apa itu Dilution of Precision (HDOP)?",
        answer: `<strong>HDOP</strong> mengukur sebaran geometris satelit di langit. Semakin merata posisi satelit di cakrawala, semakin rendah nilai HDOP (&lt; 1,5) dan semakin tinggi ketepatan posisinya. Lihat <a href="${getLocalizedPath('/glossary/', l)}">Glosarium Geodesi</a>.`
      },
      {
        question: "Apa keunggulan GPS frekuensi ganda (L1 + L5)?",
        answer: "Ponsel dengan GNSS dual-band menerima sinyal L1 dan L5 sekaligus untuk mengeliminasi distorsi ionosfer, menghasilkan akurasi hingga di bawah 1 meter di ruang terbuka."
      },
      {
        question: "Bagaimana cara meningkatkan akurasi GPS ponsel sekarang?",
        answer: `Keluarlah ke ruang terbuka dengan langit cerah, nyalakan mode 'Akurasi Tinggi' di pengaturan lokasi, dan aktifkan Wi-Fi untuk A-GPS. Ikuti panduan kami: <a href="${getLocalizedPath('/guides/improve-gps-accuracy/', l)}">Cara Meningkatkan Akurasi GPS</a>.`
      },
      {
        question: "Apa perbedaan antara akurasi GPS dan geolokasi IP?",
        answer: `GPS terhubung langsung ke konstelasi satelit dengan presisi meter. Sedangkan lokasi IP memetakan server ISP Anda yang bisa meleset berkilo-kilo meter. Baca ulasan di <a href="${getLocalizedPath('/comparisons/gps-vs-ip-location/', l)}">GPS vs Lokasi IP</a>.`
      }
    ]
  },

  'location-qr-code': {
    en: (l) => [
      {
        question: "Which map format should I choose for my Location QR Code?",
        answer: "<strong>Google Maps</strong> is ideal for general public sharing as it opens seamlessly in Android and iOS web browsers. <strong>Apple Maps</strong> is perfect for iPhone-centric audiences. <strong>Geo URI</strong> (<code>geo:lat,lng</code>) is an open international standard (RFC 5870) that prompts the user's operating system to launch their default navigation app (Google Maps, Apple Maps, OsmAnd, or Waze)."
      },
      {
        question: "Does scanning a location QR code require an active internet connection?",
        answer: "If the QR code contains a <strong>Geo URI</strong> (<code>geo:lat,lng</code>), offline navigation apps with pre-downloaded maps (such as OsmAnd, Organic Maps, or saved Google Maps areas) can navigate without cellular data. Standard web URLs require an internet connection to load online map tiles."
      },
      {
        question: "What are best practices for printing a Location QR Code?",
        answer: "Print at a minimum size of <strong>2 x 2 cm (0.8 x 0.8 inches)</strong> for close handheld scanning, or at least 10 x 10 cm for storefront posters. Maintain strong contrast (black code on clean white paper) and ensure quiet zone borders around the matrix."
      },
      {
        question: "Is any personal data, analytics, or tracking embedded in the QR code?",
        answer: `None. The generated QR code contains solely the static geographic URI or map URL. It contains no tracking pixels, redirect intermediaries, or user identifiers. Read our <a href="${getLocalizedPath('/privacy/', l)}">Privacy Policy</a>.`
      },
      {
        question: "How can I share my real-time GPS coordinates directly without a QR code?",
        answer: `You can copy exact coordinates using our <a href="${getLocalizedPath('/tools/gps-coordinates/', l)}">GPS Coordinates Finder</a> or create an instant mobile sharing link via our <a href="${getLocalizedPath('/share-location/', l)}">Share Location Tool</a>.`
      },
      {
        question: "How do I find the latitude and longitude coordinates to encode?",
        answer: `You can use our <a href="${getLocalizedPath('/tools/latitude-longitude/', l)}">Latitude Longitude Finder</a> to click anywhere on an interactive world map, or look up a physical street address with our <a href="${getLocalizedPath('/tools/address-finder/', l)}">Address Finder</a>.`
      }
    ],
    es: (l) => [
      {
        question: "¿Qué formato debo elegir para mi código QR de ubicación?",
        answer: "<strong>Google Maps</strong> es el más versátil en Android e iOS. <strong>Apple Maps</strong> abre navegación directa en iPhone. <strong>Geo URI</strong> (<code>geo:lat,lng</code>) es un estándar abierto que permite al usuario abrir su aplicación de navegación preferida."
      },
      {
        question: "¿Se necesita conexión a internet para escanear y abrir el código?",
        answer: "Con el formato <strong>Geo URI</strong>, aplicaciones con mapas descargados (como OsmAnd o mapas guardados sin conexión) funcionan sin internet. Los enlaces web requieren datos móviles para cargar el callejero."
      },
      {
        question: "¿Cuáles son las recomendaciones para imprimir el código QR?",
        answer: "Imprima con un tamaño mínimo de <strong>2 x 2 cm</strong> para lectura cercana. Asegure alto contraste (negro sobre blanco) y conserve un margen blanco limpio alrededor."
      },
      {
        question: "¿Se incluye algún rastreo o dato personal en el código?",
        answer: `Ninguno. El código QR contiene únicamente el texto de las coordenadas o el enlace geográfico estático, sin intermediarios ni analítica de seguimiento. Vea nuestra <a href="${getLocalizedPath('/privacy/', l)}">Política de Privacidad</a>.`
      },
      {
        question: "¿Cómo compartir coordenadas directamente sin código QR?",
        answer: `Puede copiar sus números en el <a href="${getLocalizedPath('/tools/gps-coordinates/', l)}">Buscador de Coordenadas GPS</a> o generar un enlace en <a href="${getLocalizedPath('/share-location/', l)}">Compartir Ubicación</a>.`
      },
      {
        question: "¿Cómo localizar las coordenadas exactas que deseo codificar?",
        answer: `Haga clic en el mapa del <a href="${getLocalizedPath('/tools/latitude-longitude/', l)}">Buscador de Latitud y Longitud</a> o consulte una dirección en el <a href="${getLocalizedPath('/tools/address-finder/', l)}">Buscador de Dirección</a>.`
      }
    ],
    fr: (l) => [
      {
        question: "Quel format cartographique choisir pour le QR Code ?",
        answer: "<strong>Google Maps</strong> est universel pour le grand public. <strong>Apple Maps</strong> s'ouvre directement sur iPhone. Le format <strong>Geo URI</strong> (<code>geo:lat,lng</code>) est un standard ouvert (RFC 5870) qui laisse le smartphone ouvrir l'application GPS de son choix."
      },
      {
        question: "L'ouverture du QR Code nécessite-t-elle une connexion internet ?",
        answer: "Avec le protocole <strong>Geo URI</strong>, les applications hors-ligne (comme OsmAnd ou cartes enregistrées) fonctionnent sans réseau. Les liens web classiques nécessitent une connexion internet."
      },
      {
        question: "Quelles sont les bonnes pratiques d'impression du QR Code ?",
        answer: "Imprimez à une taille minimale de <strong>2 x 2 cm</strong> pour une lecture facile à la main. Garantissez un contraste noir sur blanc net sans reflets."
      },
      {
        question: "Le code QR contient-il des traceurs ou données personnelles ?",
        answer: `Aucun. Le QR code ne stocke que la chaîne de coordonnées géographiques ou l'URL statique, sans traceur ni redirection. Consultez notre <a href="${getLocalizedPath('/privacy/', l)}">Politique de Confidentialité</a>.`
      },
      {
        question: "Comment partager mes coordonnées sans passer par un QR Code ?",
        answer: `Copiez vos données via le <a href="${getLocalizedPath('/tools/gps-coordinates/', l)}">Détecteur de Coordonnées GPS</a> ou créez un lien direct sur <a href="${getLocalizedPath('/share-location/', l)}">Partager Ma Position</a>.`
      },
      {
        question: "Comment identifier les coordonnées précises à encoder ?",
        answer: `Pointez sur la carte avec le <a href="${getLocalizedPath('/tools/latitude-longitude/', l)}">Traceur de Latitude et Longitude</a> ou saisissez une adresse dans le <a href="${getLocalizedPath('/tools/address-finder/', l)}">Localisateur d'Adresse</a>.`
      }
    ],
    de: (l) => [
      {
        question: "Welches Format sollte ich für den Standort-QR-Code wählen?",
        answer: "<strong>Google Maps</strong> eignet sich universell für Web-Nutzer. <strong>Apple Maps</strong> öffnet die native Karten-App auf iPhones. <strong>Geo URI</strong> (<code>geo:lat,lng</code>) ist ein offener RFC-Standard, der die bevorzugte Navigations-App des Nutzers startet."
      },
      {
        question: "Wird zum Scannen eine Internetverbindung benötigt?",
        answer: "Bei Nutzung einer <strong>Geo URI</strong> können Offline-Navigations-Apps (wie OsmAnd oder vorab geladene Karten) den Wegpunkt völlig ohne Internet öffnen. Weblinks erfordern Datenempfang."
      },
      {
        question: "Was ist beim Drucken des QR-Codes zu beachten?",
        answer: "Mindestgröße von <strong>2 x 2 cm</strong> für Handzettel oder 10 x 10 cm für Aushänge. Auf hohen Kontrast (schwarz auf weiß) und ausreichend weiße Randabstände achten."
      },
      {
        question: "Werden Tracking-Daten oder persönliche Infos codiert?",
        answer: `Nein. Der generierte Code enthält ausschließlich die reine Geokoordinaten-URI ohne Weiterleitungen oder Analyseskripte. Siehe unsere <a href="${getLocalizedPath('/privacy/', l)}">Datenschutzerklärung</a>.`
      },
      {
        question: "Wie kann ich Koordinaten ohne QR-Code versenden?",
        answer: `Kopieren Sie Zahlenwerte im <a href="${getLocalizedPath('/tools/gps-coordinates/', l)}">GPS-Koordinaten-Finder</a> oder erstellen Sie einen Link unter <a href="${getLocalizedPath('/share-location/', l)}">Standort Teilen</a>.`
      },
      {
        question: "Wie finde ich die passenden Koordinaten für den Code?",
        answer: `Klicken Sie auf die Karte im <a href="${getLocalizedPath('/tools/latitude-longitude/', l)}">Breiten- und Längengrad-Finder</a> oder nutzen Sie den <a href="${getLocalizedPath('/tools/address-finder/', l)}">Adressen-Finder</a>.`
      }
    ],
    pt: (l) => [
      {
        question: "Qual formato de mapa devo escolher para o QR Code?",
        answer: "<strong>Google Maps</strong> é compatível com todos os navegadores. <strong>Apple Maps</strong> abre direto no iOS. <strong>Geo URI</strong> (<code>geo:lat,lng</code>) é um padrão aberto que aciona o aplicativo de mapas instalado no aparelho."
      },
      {
        question: "É preciso internet para ler e abrir o QR Code?",
        answer: "Com o formato <strong>Geo URI</strong>, aplicativos com mapas baixados offline abrem o ponto sem consumir dados. Links web necessitam de internet para carregar o mapa."
      },
      {
        question: "Quais as orientações para impressão do código?",
        answer: "Imprima com tamanho mínimo de <strong>2 x 2 cm</strong> para leitura em folhetos ou cartões. Mantenha fundo branco com alto contraste."
      },
      {
        question: "Existe algum rastreador embutido no código gerado?",
        answer: `Nenhum. O QR Code contém unicamente as coordenadas ou o endereço web estático, sem pixels de rastreamento. Consulte nossa <a href="${getLocalizedPath('/privacy/', l)}">Política de Privacidade</a>.`
      },
      {
        question: "Como compartilhar coordenadas diretamente sem QR Code?",
        answer: `Copie os números no <a href="${getLocalizedPath('/tools/gps-coordinates/', l)}">Buscador de Coordenadas GPS</a> ou envie o link por <a href="${getLocalizedPath('/share-location/', l)}">Compartilhar Localização</a>.`
      },
      {
        question: "Como descobrir as coordenadas exatas para gerar o código?",
        answer: `Clique no mapa do <a href="${getLocalizedPath('/tools/latitude-longitude/', l)}">Localizador de Latitude e Longitude</a> ou resolva o logradouro no <a href="${getLocalizedPath('/tools/address-finder/', l)}">Localizador de Endereço</a>.`
      }
    ],
    hi: (l) => [
      {
        question: "लोकेशन QR कोड के लिए कौन सा मैप प्रारूप चुनें?",
        answer: "<strong>गूगल मैप्स</strong> एंड्रॉइड और आईफोन दोनों पर आसानी से खुलता है। <strong>एप्पल मैप्स</strong> आईफोन के लिए आदर्श है। <strong>Geo URI</strong> (<code>geo:lat,lng</code>) एक खुला मानक है जो फ़ोन में मौजूद पसंदीदा मैप ऐप को खोलता है।"
      },
      {
        question: "क्या QR कोड स्कैन करने के लिए इंटरनेट कनेक्शन आवश्यक है?",
        answer: "यदि QR कोड में <strong>Geo URI</strong> है, तो ऑफ़लाइन मैप ऐप्स बिना इंटरनेट के भी रास्ता दिखा सकते हैं। वेब लिंक वाले कोड के लिए डेटा कनेक्शन चाहिए।"
      },
      {
        question: "लोकेशन QR कोड प्रिंट करने के सर्वोत्तम नियम क्या हैं?",
        answer: "न्यूनतम <strong>2 x 2 सेमी</strong> के आकार में प्रिंट करें। सफ़ेद पृष्ठभूमि पर गहरा काला रंग रखें ताकि स्कैनर तुरंत पढ़ सके।"
      },
      {
        question: "क्या QR कोड में कोई ट्रैकिंग या निजी डेटा होता है?",
        answer: `बिल्कुल नहीं। यह केवल सार्वजनिक निर्देशांक या मैप लिंक को एनकोड करता है। इसमें कोई ट्रैकिंग कोड नहीं होता। हमारी <a href="${getLocalizedPath('/privacy/', l)}">गोपनीयता नीति</a> पढ़ें।`
      },
      {
        question: "बिना QR कोड के लोकेशन कैसे शेयर करें?",
        answer: `सीधे निर्देशांक कॉपी करने के लिए <a href="${getLocalizedPath('/tools/gps-coordinates/', l)}">GPS निर्देशांक खोजक</a> या लिंक भेजने के लिए <a href="${getLocalizedPath('/share-location/', l)}">लोकेशन साझा करें</a> देखें।`
      },
      {
        question: "कोड बनाने के लिए सटीक निर्देशांक कैसे खोजें?",
        answer: `नक्शे पर क्लिक करने के लिए <a href="${getLocalizedPath('/tools/latitude-longitude/', l)}">अक्षांश और देशांतर खोजक</a> और सड़क पते के लिए <a href="${getLocalizedPath('/tools/address-finder/', l)}">सड़क पता खोजक</a> का उपयोग करें।`
      }
    ],
    id: (l) => [
      {
        question: "Format peta apa yang paling sesuai untuk QR Code lokasi saya?",
        answer: "<strong>Google Maps</strong> sangat ramah bagi pengguna Android dan web. <strong>Apple Maps</strong> langsung membuka peta bawaan iPhone. <strong>Geo URI</strong> (<code>geo:lat,lng</code>) adalah standar terbuka yang memberi opsi kepada pengguna untuk memilih aplikasi peta favorit mereka."
      },
      {
        question: "Apakah memindai QR Code membutuhkan kuota internet?",
        answer: "Jika menggunakan format <strong>Geo URI</strong>, aplikasi navigasi offline dapat langsung membuka titik koordinat tanpa sambungan internet. Tautan web biasa membutuhkan kuota data."
      },
      {
        question: "Berapa ukuran cetak terbaik untuk QR Code lokasi?",
        answer: "Cetak dengan ukuran minimal <strong>2 x 2 cm</strong> untuk kartu undangan atau brosur. Gunakan kontras tinggi warna hitam di atas kertas putih bersih."
      },
      {
        question: "Apakah ada data pribadi atau pelacakan di dalam QR Code?",
        answer: `Tidak ada sama sekali. Kode QR hanya berisi teks koordinat statis murni tanpa perantara atau skrip pelacakan. Baca <a href="${getLocalizedPath('/privacy/', l)}">Kebijakan Privasi</a> kami.`
      },
      {
        question: "Bagaimana cara membagikan koordinat langsung tanpa QR Code?",
        answer: `Salin koordinat Anda lewat <a href="${getLocalizedPath('/tools/gps-coordinates/', l)}">Pencari Koordinat GPS</a> atau buat tautan instan via <a href="${getLocalizedPath('/share-location/', l)}">Bagi Lokasi</a>.`
      },
      {
        question: "Bagaimana cara menemukan koordinat yang tepat untuk dimasukkan?",
        answer: `Pilih titik pada peta interaktif di <a href="${getLocalizedPath('/tools/latitude-longitude/', l)}">Pencari Lintang dan Bujur</a> atau gunakan <a href="${getLocalizedPath('/tools/address-finder/', l)}">Pencari Alamat</a>.`
      }
    ]
  }
};

export function getToolFaqs(toolId: string, lang: SupportedLang | string): ToolFAQItem[] {
  const toolGroup = toolFaqsData[toolId];
  if (!toolGroup) return [];
  const currentLang = (lang in toolGroup ? lang : defaultLang) as SupportedLang;
  const builder = toolGroup[currentLang] || toolGroup[defaultLang];
  return builder ? builder(currentLang) : [];
}
