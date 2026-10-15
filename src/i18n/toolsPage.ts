/**
 * Multilingual Data for /tools/ Directory Page
 * Translations for en, es, fr, de, pt.
 */

export interface ToolItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  url: string;
  category: string;
}

export interface ToolsPageTranslation {
  metaTitle: string;
  metaDesc: string;
  pageTitle: string;
  pageTitleAccent: string;
  pageDesc: string;
  directoryName: string;
  directoryDesc: string;
  categories: Record<string, string>;
  tools: Record<string, { title: string; description: string }>;
  faqTitle: string;
  faqTitleAccent: string;
  faqSubtitle: string;
  faqItems: Array<{ question: string; answer: string }>;
}

export const toolsPageTranslations: Record<string, ToolsPageTranslation> = {
  en: {
    metaTitle: 'Free Location Tools — GPS & Coordinates | MyLocationLab',
    metaDesc: 'Free online location tools: GPS finder, address finder, distance calculator, coordinate converter, elevation, and QR codes.',
    pageTitle: 'Location & Geospatial',
    pageTitleAccent: 'Tools',
    pageDesc: 'Free browser-based geospatial utilities to find, convert, measure, and share geographic data. Zero server storage, instant client-side execution.',
    directoryName: 'Free Online Location Tools Directory',
    directoryDesc: 'Complete collection of free GPS, coordinates, conversion, and geospatial tools.',
    categories: {
      location: 'Location Finders',
      conversion: 'Converters',
      calculation: 'Calculators',
      sharing: 'Sharing Tools',
      utility: 'Utilities',
    },
    tools: {
      'gps-coordinates': { title: 'GPS Coordinates Finder', description: 'Find your exact GPS coordinates including latitude, longitude, and altitude in real-time.' },
      'latitude-longitude': { title: 'Latitude Longitude Finder', description: 'Get your precise latitude and longitude coordinates with interactive map selection.' },
      'address-finder': { title: 'Address Finder', description: 'Find the full street address for any location or your current position using reverse geocoding.' },
      'reverse-geocoding': { title: 'Reverse Geocoder', description: 'Convert GPS coordinates into a human-readable street address instantly.' },
      'geocoding': { title: 'Geocoder', description: 'Convert any address, city, or place name into GPS coordinates.' },
      'distance-calculator': { title: 'Distance Calculator', description: 'Calculate the exact distance between two points on Earth using the Haversine formula.' },
      'coordinate-converter': { title: 'Coordinate Converter', description: 'Convert coordinates between Decimal Degrees, DMS, UTM, and other formats.' },
      'elevation-finder': { title: 'Elevation Finder', description: 'Find the elevation (altitude above sea level) for any location on Earth.' },
      'gps-accuracy': { title: 'GPS Accuracy Checker', description: 'Monitor your GPS signal accuracy in real-time and get tips to improve it.' },
      'location-qr-code': { title: 'Location QR Code Generator', description: 'Generate a scannable QR code for any GPS coordinates or address.' },
    },
    faqTitle: 'Frequently Asked',
    faqTitleAccent: 'Questions',
    faqSubtitle: 'Common questions about using our location tools and coordinate calculations.',
    faqItems: [
      {
        question: 'Are all location tools on MyLocationLab free to use?',
        answer: 'Yes, 100% of our tools are completely free, open-access, and do not require account registration, API keys, or downloads.',
      },
      {
        question: 'Do these tools store or track my GPS coordinates?',
        answer: 'No. All calculations execute directly inside your browser client. We do not store or transmit your coordinates.',
      },
      {
        question: 'What is the most accurate tool for finding my exact position?',
        answer: 'The GPS Coordinates Finder and GPS Accuracy Checker utilize your device\'s hardware GNSS chip to provide coordinates accurate within 3–5 meters outdoors.',
      },
    ],
  },

  es: {
    metaTitle: 'Herramientas de Ubicación Gratuitas — GPS y Coordenadas | MyLocationLab',
    metaDesc: 'Herramientas de ubicación online gratis: buscador GPS, buscador de direcciones, calculadora de distancias, conversor de coordenadas, altitud y códigos QR.',
    pageTitle: 'Herramientas',
    pageTitleAccent: 'Geoespaciales',
    pageDesc: 'Utilidades geoespaciales gratuitas para encontrar, convertir, medir y compartir datos geográficos. Ejecución 100% en el navegador y cero registros.',
    directoryName: 'Directorio Gratuito de Herramientas de Ubicación',
    directoryDesc: 'Colección integral de herramientas gratuitas de GPS, coordenadas y conversión cartográfica.',
    categories: {
      location: 'Buscadores de Ubicación',
      conversion: 'Conversores',
      calculation: 'Calculadoras',
      sharing: 'Herramientas para Compartir',
      utility: 'Utilidades',
    },
    tools: {
      'gps-coordinates': { title: 'Buscador de Coordenadas GPS', description: 'Encuentra tus coordenadas GPS exactas con latitud, longitud y altitud en tiempo real.' },
      'latitude-longitude': { title: 'Buscador de Latitud y Longitud', description: 'Obtén coordenadas exactas con selección sobre mapa vectorial interactivo.' },
      'address-finder': { title: 'Buscador de Direcciones', description: 'Descubre la dirección postal exacta de cualquier punto geográfico o de tu ubicación actual.' },
      'reverse-geocoding': { title: 'Geocodificador Inverso', description: 'Convierte coordenadas GPS en una dirección postal legible al instante.' },
      'geocoding': { title: 'Geocodificador Directo', description: 'Convierte direcciones, nombres de ciudades o lugares en coordenadas GPS.' },
      'distance-calculator': { title: 'Calculadora de Distancias', description: 'Calcula la distancia geodésica exacta entre dos puntos mediante la fórmula de Haversine.' },
      'coordinate-converter': { title: 'Conversor de Coordenadas', description: 'Convierte coordenadas entre Grados Decimales, GMS (DMS), UTM y MGRS.' },
      'elevation-finder': { title: 'Buscador de Elevación', description: 'Calcula la altitud exacta sobre el nivel del mar en cualquier coordenada del planeta.' },
      'gps-accuracy': { title: 'Monitor de Precisión GPS', description: 'Monitoriza la precisión de la señal GPS de tu dispositivo en tiempo real.' },
      'location-qr-code': { title: 'Generador de Códigos QR de Ubicación', description: 'Crea códigos QR escaneables con coordenadas o direcciones geográficas.' },
    },
    faqTitle: 'Preguntas',
    faqTitleAccent: 'Frecuentes',
    faqSubtitle: 'Respuestas a dudas comunes sobre el uso de herramientas de localización y cálculo de coordenadas.',
    faqItems: [
      {
        question: '¿Son gratuitas todas las herramientas de MyLocationLab?',
        answer: 'Sí, el 100% de nuestras utilidades son de acceso totalmente libre, sin registro previo ni claves de API.',
      },
      {
        question: '¿Almacenan estas herramientas mis coordenadas GPS?',
        answer: 'No. Todos los algoritmos y transformaciones geodésicas se ejecutan en tu propio navegador.',
      },
      {
        question: '¿Cuál es la herramienta más precisa para ubicarme?',
        answer: 'El Buscador de Coordenadas GPS y el Monitor de Precisión aprovechan el hardware GNSS para lograr una precisión de 3 a 5 metros en exteriores.',
      },
    ],
  },

  fr: {
    metaTitle: 'Outils de Géolocalisation Gratuits — Coordonnées GPS | MyLocationLab',
    metaDesc: 'Outils de localisation en ligne gratuits : GPS, adresses, calculateur de distance, convertisseur de coordonnées, élévation et QR codes.',
    pageTitle: 'Outils',
    pageTitleAccent: 'Géospatiaux',
    pageDesc: 'Utilitaires géospatiaux gratuits pour localiser, convertir, mesurer et partager vos données géographiques. Exécution client immédiate sans stockage.',
    directoryName: 'Annuaire des Outils de Géolocalisation en Ligne',
    directoryDesc: 'Collection complète d’outils gratuits pour le GPS, les coordonnées et les conversions géodésiques.',
    categories: {
      location: 'Localisateurs',
      conversion: 'Convertisseurs',
      calculation: 'Calculateurs',
      sharing: 'Outils de Partage',
      utility: 'Utilitaires',
    },
    tools: {
      'gps-coordinates': { title: 'Trouver Coordonnées GPS', description: 'Obtenez vos coordonnées exactes (latitude, longitude, altitude) en temps réel.' },
      'latitude-longitude': { title: 'Trouver Latitude Longitude', description: 'Repérez vos coordonnées précises avec pointeur sur carte interactive.' },
      'address-finder': { title: 'Localisateur d’Adresse', description: 'Trouvez l’adresse complète de tout point géographique grâce au géocodage inverse.' },
      'reverse-geocoding': { title: 'Géocodage Inverse', description: 'Convertissez instantanément des coordonnées GPS en adresse postale lisible.' },
      'geocoding': { title: 'Géocodage Direct', description: 'Convertissez une adresse ou une ville en coordonnées géographiques.' },
      'distance-calculator': { title: 'Calculateur de Distance', description: 'Calculez la distance exacte entre deux points de la Terre avec la formule Haversine.' },
      'coordinate-converter': { title: 'Convertisseur de Coordonnées', description: 'Convertissez entre Degrés Décimaux, Degrés-Minutes-Secondes (DMS) et UTM.' },
      'elevation-finder': { title: 'Mesure d’Altitude', description: 'Mesurez l’altitude exacte au-dessus du niveau moyen de la mer partout sur le globe.' },
      'gps-accuracy': { title: 'Contrôleur de Précision GPS', description: 'Surveillez en direct la précision du récepteur GPS de votre appareil.' },
      'location-qr-code': { title: 'Générateur de QR Code de Position', description: 'Générez un QR code pour partager facilement des coordonnées ou une adresse.' },
    },
    faqTitle: 'Foire Aux',
    faqTitleAccent: 'Questions',
    faqSubtitle: 'Questions courantes sur l’utilisation des outils géospatiaux et des calculs géodésiques.',
    faqItems: [
      {
        question: 'Ces outils géospatiaux sont-ils gratuits ?',
        answer: 'Oui, l’ensemble de nos utilitaires est 100% gratuit, sans abonnement ni création de compte requise.',
      },
      {
        question: 'Vos outils conservent-ils mes coordonnées ?',
        answer: 'Non, tous les calculs sont effectués directement dans votre navigateur web sans transmission sur serveur.',
      },
      {
        question: 'Quel est l’outil le plus précis pour me repérer ?',
        answer: 'Le module Coordonnées GPS et le Contrôleur de Précision exploitent la puce GNSS de votre appareil pour une précision métrique.',
      },
    ],
  },

  de: {
    metaTitle: 'Kostenlose Standort-Tools — GPS & Koordinaten | MyLocationLab',
    metaDesc: 'Kostenlose Online-Tools: GPS-Finder, Adressfinder, Distanzrechner, Koordinaten-Konverter, Höhenmessung und QR-Codes.',
    pageTitle: 'Geodaten- &',
    pageTitleAccent: 'Standort-Tools',
    pageDesc: 'Kostenlose browserbasierte Geowerkzeuge zum Finden, Konvertieren, Messen und Teilen von Geodaten. Keine Serveraufzeichnung, direkte Ausführung.',
    directoryName: 'Verzeichnis Kostenloser Geodaten-Tools',
    directoryDesc: 'Umfassende Sammlung kostenloser Tools für GPS, Koordinatentransformation und Distanzberechnung.',
    categories: {
      location: 'Standortfinder',
      conversion: 'Konverter',
      calculation: 'Rechner',
      sharing: 'Teilen-Tools',
      utility: 'Dienstprogramme',
    },
    tools: {
      'gps-coordinates': { title: 'GPS-Koordinaten-Finder', description: 'Ermitteln Sie Ihre exakten GPS-Koordinaten mit Breiten-, Längengrad und Höhenangabe in Echtzeit.' },
      'latitude-longitude': { title: 'Breitengrad & Längengrad Finder', description: 'Präzise Koordinaten mit interaktiver Kartenauswahl bestimmen.' },
      'address-finder': { title: 'Adressfinder', description: 'Vollständige Postanschrift für jeden beliebigen Standort weltweit ermitteln.' },
      'reverse-geocoding': { title: 'Reverse-Geocoder', description: 'GPS-Koordinaten sofort in eine lesbare Straßenadresse umwandeln.' },
      'geocoding': { title: 'Vorwärts-Geocoder', description: 'Beliebige Adressen oder Ortsnamen in GPS-Koordinaten umrechnen.' },
      'distance-calculator': { title: 'Entfernungsrechner', description: 'Exakte Distanz zwischen zwei Punkten auf der Erdoberfläche mit der Haversine-Formel berechnen.' },
      'coordinate-converter': { title: 'Koordinaten-Konverter', description: 'Konvertieren zwischen Dezimalgrad, GMS (DMS), UTM und MGRS.' },
      'elevation-finder': { title: 'Höhenfinder', description: 'Genaue Höhe über dem Meeresspiegel weltweit ermitteln.' },
      'gps-accuracy': { title: 'GPS-Genauigkeitsprüfer', description: 'Überwachen Sie die Empfangsgenauigkeit Ihres GPS-Signals in Echtzeit.' },
      'location-qr-code': { title: 'Standort-QR-Code-Generator', description: 'Erstellen Sie scannbare QR-Codes für GPS-Koordinaten oder Adressen.' },
    },
    faqTitle: 'Häufig Gestellte',
    faqTitleAccent: 'Fragen',
    faqSubtitle: 'Antworten auf häufige Fragen zur Nutzung unserer Geodaten-Werkzeuge.',
    faqItems: [
      {
        question: 'Sind alle Tools auf MyLocationLab kostenlos?',
        answer: 'Ja, 100% unserer Werkzeuge sind vollkommen kostenlos und ohne Registrierung oder API-Schlüssel nutzbar.',
      },
      {
        question: 'Werden meine GPS-Koordinaten gespeichert?',
        answer: 'Nein, alle Transformationen und Berechnungen laufen ausschließlich lokal in Ihrem Browser ab.',
      },
      {
        question: 'Welches Tool ermittelt die genaueste Position?',
        answer: 'Der GPS-Koordinaten-Finder und der Genauigkeitsprüfer nutzen die GNSS-Hardware für 3–5 Meter Genauigkeit im Freien.',
      },
    ],
  },

  pt: {
    metaTitle: 'Ferramentas de Localização Gratuitas — GPS e Coordenadas | MyLocationLab',
    metaDesc: 'Ferramentas online grátis: localizador GPS, endereço, calculadora de distância, conversor de coordenadas, altitude e QR code.',
    pageTitle: 'Ferramentas',
    pageTitleAccent: 'Geoespaciais',
    pageDesc: 'Utilitários geoespaciais gratuitos para encontrar, converter, medir e compartilhar dados geográficos. Processamento 100% no navegador.',
    directoryName: 'Diretório de Ferramentas de Localização Gratuitas',
    directoryDesc: 'Coleção completa de utilitários para GPS, coordenadas e conversão cartográfica.',
    categories: {
      location: 'Localizadores',
      conversion: 'Conversores',
      calculation: 'Calculadoras',
      sharing: 'Ferramentas de Compartilhamento',
      utility: 'Utilitários',
    },
    tools: {
      'gps-coordinates': { title: 'Localizador de Coordenadas GPS', description: 'Descubra suas coordenadas GPS exatas com latitude, longitude e altitude em tempo real.' },
      'latitude-longitude': { title: 'Localizador de Latitude e Longitude', description: 'Obtenha suas coordenadas com seleção interativa no mapa vetorial.' },
      'address-finder': { title: 'Localizador de Endereço', description: 'Encontre o endereço postal completo para qualquer local ou sua posição atual.' },
      'reverse-geocoding': { title: 'Geocodificador Reverso', description: 'Converta coordenadas GPS em endereço legível instantaneamente.' },
      'geocoding': { title: 'Geocodificador Direto', description: 'Converta qualquer endereço ou cidade em coordenadas GPS.' },
      'distance-calculator': { title: 'Calculadora de Distância', description: 'Calcule a distância geodésica exata entre dois pontos usando a fórmula de Haversine.' },
      'coordinate-converter': { title: 'Conversor de Coordenadas', description: 'Converta coordenadas entre Graus Decimais, GMS (DMS), UTM e MGRS.' },
      'elevation-finder': { title: 'Localizador de Altitude', description: 'Descubra a altitude exata acima do nível do mar em qualquer coordenada.' },
      'gps-accuracy': { title: 'Monitor de Precisão GPS', description: 'Acompanhe a precisão do sinal GPS do seu dispositivo em tempo real.' },
      'location-qr-code': { title: 'Gerador de QR Code de Localização', description: 'Crie códigos QR para compartilhar coordenadas ou endereços facilmente.' },
    },
    faqTitle: 'Perguntas',
    faqTitleAccent: 'Frequentes',
    faqSubtitle: 'Perguntas comuns sobre o uso das nossas ferramentas de localização e cálculos.',
    faqItems: [
      {
        question: 'Todas as ferramentas são gratuitas?',
        answer: 'Sim, 100% das ferramentas do MyLocationLab são gratuitas e dispensam cadastro.',
      },
      {
        question: 'Estas ferramentas guardam as minhas coordenadas?',
        answer: 'Não. Todas as fórmulas são calculadas diretamente no seu navegador, sem envio a servidores.',
      },
      {
        question: 'Qual é a ferramenta mais precisa para localização?',
        answer: 'O Localizador de Coordenadas GPS e o Monitor de Precisão usam a antena GNSS física do aparelho.',
      },
    ],
  },

  hi: {
    metaTitle: 'मुफ़्त लोकेशन टूल्स — GPS और निर्देशांक | MyLocationLab',
    metaDesc: 'मुफ़्त ऑनलाइन लोकेशन टूल्स: GPS फाइंडर, पता खोजें, दूरी कैलकुलेटर, निर्देशांक कनवर्टर, ऊंचाई स्कैन और लोकेशन QR कोड जेनरेटर। सब कुछ सीधे आपके ब्राउज़र में।',
    pageTitle: 'लोकेशन और',
    pageTitleAccent: 'भू-स्थानिक टूल्स',
    pageDesc: 'भौगोलिक डेटा खोजने, बदलने, मापने और साझा करने के लिए मुफ़्त ब्राउज़र-आधारित भू-स्थानिक यूटिलिटीज़। ज़ीरो सर्वर स्टोरेज, तुरंत क्लाइंट-साइड निष्पादन।',
    directoryName: 'मुफ़्त ऑनलाइन लोकेशन टूल्स डायरेक्टरी',
    directoryDesc: 'GPS, निर्देशांक, रूपांतरण और भू-स्थानिक टूल्स का पूरा मुफ़्त संग्रह।',
    categories: {
      location: 'लोकेशन फाइंडर',
      conversion: 'कनवर्टर',
      calculation: 'कैलकुलेटर',
      sharing: 'शेयरिंग टूल्स',
      utility: 'यूटिलिटीज़',
    },
    tools: {
      'gps-coordinates': { title: 'GPS निर्देशांक फाइंडर', description: 'रीयल-टाइम में अपने सटीक GPS निर्देशांक — अक्षांश, देशांतर और ऊंचाई सहित — पाएं।' },
      'latitude-longitude': { title: 'अक्षांश-देशांतर फाइंडर', description: 'इंटरैक्टिव नक्शा चयन के साथ अपने सटीक अक्षांश और देशांतर निर्देशांक पाएं।' },
      'address-finder': { title: 'पता खोजें', description: 'रिवर्स जियोकोडिंग के ज़रिए किसी भी जगह या अपनी वर्तमान स्थिति का पूरा सड़क पता जानें।' },
      'reverse-geocoding': { title: 'रिवर्स जियोकोडर', description: 'GPS निर्देशांकों को तुरंत पठनीय सड़क के पते में बदलें।' },
      'geocoding': { title: 'जियोकोडर', description: 'किसी भी पते, शहर या स्थान के नाम को GPS निर्देशांकों में बदलें।' },
      'distance-calculator': { title: 'दूरी कैलकुलेटर', description: 'हैवरसाइन फॉर्मूले का उपयोग करके पृथ्वी पर दो बिंदुओं के बीच सटीक दूरी की गणना करें।' },
      'coordinate-converter': { title: 'निर्देशांक कनवर्टर', description: 'निर्देशांकों को दशमलव डिग्री, DMS, UTM और अन्य फॉर्मेट के बीच बदलें।' },
      'elevation-finder': { title: 'ऊंचाई फाइंडर', description: 'पृथ्वी पर किसी भी स्थान की ऊंचाई (समुद्र तल से) जानें।' },
      'gps-accuracy': { title: 'GPS सटीकता चेकर', description: 'अपनी GPS सिग्नल सटीकता को रीयल-टाइम में मॉनिटर करें और इसे बेहतर बनाने के सुझाव पाएं।' },
      'location-qr-code': { title: 'लोकेशन QR कोड जेनरेटर', description: 'किसी भी GPS निर्देशांक या पते के लिए स्कैन करने योग्य QR कोड बनाएं।' },
    },
    faqTitle: 'अक्सर पूछे',
    faqTitleAccent: 'जाने वाले प्रश्न',
    faqSubtitle: 'हमारे लोकेशन टूल्स और निर्देशांक गणनाओं के उपयोग के बारे में सामान्य प्रश्न।',
    faqItems: [
      {
        question: 'क्या MyLocationLab के सभी लोकेशन टूल्स मुफ़्त हैं?',
        answer: 'हां, हमारे 100% टूल्स पूरी तरह मुफ़्त और खुली पहुंच वाले हैं और इनके लिए खाता पंजीकरण, API कुंजी या डाउनलोड की ज़रूरत नहीं है।',
      },
      {
        question: 'क्या ये टूल्स मेरे GPS निर्देशांक स्टोर या ट्रैक करते हैं?',
        answer: 'नहीं। सभी गणनाएं सीधे आपके ब्राउज़र क्लाइंट में निष्पादित होती हैं। हम आपके निर्देशांक स्टोर या ट्रांसमिट नहीं करते।',
      },
      {
        question: 'मेरी सटीक स्थिति जानने के लिए सबसे सटीक टूल कौन सा है?',
        answer: 'GPS निर्देशांक फाइंडर और GPS सटीकता चेकर आपके डिवाइस की हार्डवेयर GNSS चिप का उपयोग करते हैं, जो बाहर 3–5 मीटर के भीतर सटीक निर्देशांक देती है।',
      },
    ],
  },

  id: {
    metaTitle: 'Alat Lokasi Gratis — GPS & Koordinat | MyLocationLab',
    metaDesc: 'Alat lokasi online gratis: pelacak GPS, pencari alamat, kalkulator jarak, konverter koordinat, pengukur elevasi, dan generator kode QR lokasi.',
    pageTitle: 'Alat Lokasi &',
    pageTitleAccent: 'Geospasial',
    pageDesc: 'Utilitas geospasial gratis berbasis peramban untuk menemukan, mengonversi, mengukur, dan membagikan data geografis. Tanpa penyimpanan server, eksekusi instan di sisi klien.',
    directoryName: 'Direktori Alat Lokasi Online Gratis',
    directoryDesc: 'Kumpulan lengkap alat GPS, koordinat, konversi, dan geospasial yang gratis.',
    categories: {
      location: 'Pelacak Lokasi',
      conversion: 'Konverter',
      calculation: 'Kalkulator',
      sharing: 'Alat Berbagi',
      utility: 'Utilitas',
    },
    tools: {
      'gps-coordinates': { title: 'Pelacak Koordinat GPS', description: 'Temukan koordinat GPS Anda yang persis — lintang, bujur, dan ketinggian — secara real-time.' },
      'latitude-longitude': { title: 'Pelacak Lintang Bujur', description: 'Dapatkan koordinat lintang dan bujur Anda yang akurat dengan pemilihan di peta interaktif.' },
      'address-finder': { title: 'Pencari Alamat', description: 'Temukan alamat jalan lengkap untuk lokasi mana pun atau posisi Anda saat ini menggunakan reverse geocoding.' },
      'reverse-geocoding': { title: 'Reverse Geocoder', description: 'Ubah koordinat GPS menjadi alamat jalan yang mudah dibaca secara instan.' },
      'geocoding': { title: 'Geocoder', description: 'Ubah alamat, kota, atau nama tempat mana pun menjadi koordinat GPS.' },
      'distance-calculator': { title: 'Kalkulator Jarak', description: 'Hitung jarak persis antara dua titik di Bumi menggunakan rumus Haversine.' },
      'coordinate-converter': { title: 'Konverter Koordinat', description: 'Konversi koordinat antara Derajat Desimal, DMS, UTM, dan format lainnya.' },
      'elevation-finder': { title: 'Pencari Elevasi', description: 'Temukan elevasi (ketinggian di atas permukaan laut) untuk lokasi mana pun di Bumi.' },
      'gps-accuracy': { title: 'Pemeriksa Akurasi GPS', description: 'Pantau akurasi sinyal GPS Anda secara real-time dan dapatkan tips untuk meningkatkannya.' },
      'location-qr-code': { title: 'Generator Kode QR Lokasi', description: 'Buat kode QR yang dapat dipindai untuk koordinat GPS atau alamat mana pun.' },
    },
    faqTitle: 'Pertanyaan yang',
    faqTitleAccent: 'Sering Diajukan',
    faqSubtitle: 'Pertanyaan umum tentang penggunaan alat lokasi dan perhitungan koordinat kami.',
    faqItems: [
      {
        question: 'Apakah semua alat lokasi di MyLocationLab gratis digunakan?',
        answer: 'Ya, 100% alat kami sepenuhnya gratis dan terbuka, tanpa perlu pendaftaran akun, kunci API, atau unduhan apa pun.',
      },
      {
        question: 'Apakah alat-alat ini menyimpan atau melacak koordinat GPS saya?',
        answer: 'Tidak. Semua perhitungan dijalankan langsung di dalam peramban Anda. Kami tidak menyimpan atau mengirimkan koordinat Anda.',
      },
      {
        question: 'Alat mana yang paling akurat untuk menemukan posisi persis saya?',
        answer: 'Pelacak Koordinat GPS dan Pemeriksa Akurasi GPS memanfaatkan chip GNSS perangkat Anda untuk memberikan koordinat akurat hingga 3–5 meter di luar ruangan.',
      },
    ],
  },
};
