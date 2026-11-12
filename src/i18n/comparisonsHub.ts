export interface ComparisonItem {
  title: string;
  description: string;
  url: string;
  icon: string;
  tags: string[];
}

export interface ComparisonsHubContent {
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  viewComparison: string;
  items: ComparisonItem[];
}

export const comparisonsHubTranslations: Record<string, ComparisonsHubContent> = {
  en: {
    metaTitle: "GPS & Geolocation Comparisons | MyLocationLab",
    metaDescription: "Compare GPS vs IP location accuracy, Forward vs Reverse Geocoding, and Decimal Degrees vs DMS formats with in-depth engineering breakdowns.",
    breadcrumb: "Technical Comparisons",
    titlePrefix: "Geospatial",
    titleHighlight: "Comparisons & Benchmarks",
    subtitle: "Technical breakdowns comparing positioning technologies, coordinate encodings, and geospatial indexing algorithms.",
    viewComparison: "View Comparison →",
    items: [
      {
        title: "GPS Location vs. IP Geolocation: Accuracy, Privacy & Mechanisms",
        description: "Compare space-based satellite positioning against internet routing table lookups. Understand the differences in accuracy (3 meters vs 50 kilometers), latency, and privacy.",
        url: "/comparisons/gps-vs-ip-location/",
        icon: "⚖️",
        tags: ["Accuracy", "Network", "GNSS"]
      },
      {
        title: "Forward Geocoding vs. Reverse Geocoding: Which Do You Need?",
        description: "Understand the mathematical and database differences between converting addresses to coordinates versus converting coordinate pairs to street addresses.",
        url: "/comparisons/geocoding-vs-reverse-geocoding/",
        icon: "🔄",
        tags: ["APIs", "Geocoding", "Addresses"]
      },
      {
        title: "Decimal Degrees (DD) vs. Degrees Minutes Seconds (DMS)",
        description: "Technical comparison of coordinate notation systems, conversion formulas, storage efficiency in GIS databases, and human readability trade-offs.",
        url: "/comparisons/decimal-degrees-vs-dms/",
        icon: "📐",
        tags: ["Coordinates", "GIS", "Datums"]
      }
    ]
  },
  es: {
    metaTitle: "Comparativas de GPS y Geolocalización | MyLocationLab",
    metaDescription: "Compare la precisión de GPS vs ubicación IP, Geocodificación directa vs inversa, y Grados Decimales vs DMS con análisis de ingeniería.",
    breadcrumb: "Comparativas Técnicas",
    titlePrefix: "Comparativas y",
    titleHighlight: "Pruebas Geoespaciales",
    subtitle: "Análisis técnicos exhaustivos comparando tecnologías de posicionamiento, codificación de coordenadas y algoritmos de indexación espacial.",
    viewComparison: "Ver Comparativa →",
    items: [
      {
        title: "Ubicación GPS vs. Geolocalización IP: Precisión, Privacidad y Métodos",
        description: "Compare el posicionamiento satelital orbital frente a las tablas de enrutamiento web. Conozca las diferencias de precisión (3 metros vs 50 km), latencia y privacidad.",
        url: "/comparisons/gps-vs-ip-location/",
        icon: "⚖️",
        tags: ["Precisión", "Red IP", "GNSS"]
      },
      {
        title: "Geocodificación Directa vs. Inversa: ¿Cuál necesita su proyecto?",
        description: "Comprenda las diferencias algorítmicas y de base de datos entre convertir direcciones escritas a coordenadas o coordenadas a números de calle.",
        url: "/comparisons/geocoding-vs-reverse-geocoding/",
        icon: "🔄",
        tags: ["APIs", "Geocodificación", "Direcciones"]
      },
      {
        title: "Grados Decimales (DD) vs. Grados Minutos Segundos (DMS)",
        description: "Comparativa técnica de notaciones de coordenadas, fórmulas de conversión, eficiencia de almacenamiento en bases de datos SIG y legibilidad.",
        url: "/comparisons/decimal-degrees-vs-dms/",
        icon: "📐",
        tags: ["Coordenadas", "SIG", "Dátums"]
      }
    ]
  },
  fr: {
    metaTitle: "Comparatifs GPS & Géolocalisation | MyLocationLab",
    metaDescription: "Comparez la précision GPS vs position IP, Géocodage direct vs inverse, et Degrés Décimaux vs DMS avec des analyses d'ingénierie détaillées.",
    breadcrumb: "Comparatifs Techniques",
    titlePrefix: "Comparatifs &",
    titleHighlight: "Analyses Géospatiales",
    subtitle: "Analyses techniques comparant les technologies de localisation, les formats de coordonnées et les algorithmes d'indexation géospatiale.",
    viewComparison: "Voir le Comparatif →",
    items: [
      {
        title: "Localisation GPS vs. Géolocalisation IP : Précision, Vie Privée & Principes",
        description: "Comparez le positionnement satellitaire GNSS aux tables de routage Internet. Découvrez les écarts de précision (3 mètres vs 50 km), de latence et d'anonymat.",
        url: "/comparisons/gps-vs-ip-location/",
        icon: "⚖️",
        tags: ["Précision", "Réseau IP", "GNSS"]
      },
      {
        title: "Géocodage Direct vs. Géocodage Inverse : Que choisir ?",
        description: "Comprenez les spécificités mathématiques et informatiques de la conversion d'adresses en coordonnées et de coordonnées en adresses postales.",
        url: "/comparisons/geocoding-vs-reverse-geocoding/",
        icon: "🔄",
        tags: ["APIs", "Géocodage", "Adresses"]
      },
      {
        title: "Degrés Décimaux (DD) vs. Degrés Minutes Secondes (DMS)",
        description: "Comparatif technique des notations géographiques, formules de conversion, stockage en base SIG et lisibilité humaine.",
        url: "/comparisons/decimal-degrees-vs-dms/",
        icon: "📐",
        tags: ["Coordonnées", "SIG", "Datums"]
      }
    ]
  },
  de: {
    metaTitle: "GPS & Geolokalisierung Vergleiche | MyLocationLab",
    metaDescription: "Vergleichen Sie GPS- vs. IP-Ortung, Vorwärts- vs. Rückwärts-Geokodierung sowie Dezimalgrad vs. GMS mit tiefgehenden technischen Analysen.",
    breadcrumb: "Technische Vergleiche",
    titlePrefix: "Geospatiale",
    titleHighlight: "Vergleiche & Benchmarks",
    subtitle: "Technische Gegenüberstellungen von Ortungstechnologien, Koordinatenkodierungen und raumbezogenen Indexierungsalgorithmen.",
    viewComparison: "Vergleich ansehen →",
    items: [
      {
        title: "GPS-Ortung vs. IP-Geolokalisierung: Genauigkeit, Datenschutz & Funktionsweise",
        description: "Satellitenortung im Vergleich zu ISP-Routingtabellen. Verstehen Sie Unterschiede bei Präzision (3 Meter vs. 50 km), Latenz und Privatsphäre.",
        url: "/comparisons/gps-vs-ip-location/",
        icon: "⚖️",
        tags: ["Genauigkeit", "Netzwerk", "GNSS"]
      },
      {
        title: "Vorwärts- vs. Rückwärts-Geokodierung: Welche Methode brauchen Sie?",
        description: "Mathematische und datenbanktechnische Unterschiede bei der Adressumwandlung in Koordinatenpaare und umgekehrt.",
        url: "/comparisons/geocoding-vs-reverse-geocoding/",
        icon: "🔄",
        tags: ["APIs", "Geokodierung", "Adressen"]
      },
      {
        title: "Dezimalgrad (DD) vs. Grad Minuten Sekunden (GMS)",
        description: "Technischer Vergleich von Notationssystemen, Umrechnungsformeln, Speichereffizienz in GIS-Datenbanken und Lesbarkeit.",
        url: "/comparisons/decimal-degrees-vs-dms/",
        icon: "📐",
        tags: ["Koordinaten", "GIS", "Datums"]
      }
    ]
  },
  pt: {
    metaTitle: "Comparações de GPS e Geolocalização | MyLocationLab",
    metaDescription: "Compare a precisão do GPS vs localização por IP, Geocodificação direta vs reversa, e Graus Decimais vs GMS com análises aprofundadas.",
    breadcrumb: "Comparações Técnicas",
    titlePrefix: "Comparações e",
    titleHighlight: "Benchmarks Geoespaciais",
    subtitle: "Análises técnicas aprofundadas comparando tecnologias de posicionamento, codificação de coordenadas e indexação espacial.",
    viewComparison: "Ver Comparação →",
    items: [
      {
        title: "Localização GPS vs. Geolocalização IP: Precisão, Privacidade e Funcionamento",
        description: "Compare o posicionamento por satélite com o mapeamento de tabelas de rede. Entenda as diferenças de precisão (3 metros vs 50 km), latência e privacidade.",
        url: "/comparisons/gps-vs-ip-location/",
        icon: "⚖️",
        tags: ["Precisão", "Rede IP", "GNSS"]
      },
      {
        title: "Geocodificação Direta vs. Reversa: Qual delas utilizar?",
        description: "Entenda as distinções algorítmicas entre converter endereços textuais em coordenadas e converter pares de coordenadas em nomes de ruas.",
        url: "/comparisons/geocoding-vs-reverse-geocoding/",
        icon: "🔄",
        tags: ["APIs", "Geocodificação", "Endereços"]
      },
      {
        title: "Graus Decimais (DD) vs. Graus Minutos Segundos (DMS)",
        description: "Comparativo técnico de sistemas de notação, fórmulas de conversão, eficiência de armazenamento em bancos GIS e legibilidade.",
        url: "/comparisons/decimal-degrees-vs-dms/",
        icon: "📐",
        tags: ["Coordenadas", "SIG", "Datums"]
      }
    ]
  },
  hi: {
    metaTitle: "GPS और जियोलोकेशन तुलना | MyLocationLab",
    metaDescription: "GPS बनाम IP लोकेशन की सटीकता, फॉरवर्ड बनाम रिवर्स जियोकोडिंग और दशमलव डिग्री बनाम DMS फॉर्मेट की गहन इंजीनियरिंग विश्लेषण के साथ तुलना करें।",
    breadcrumb: "तकनीकी तुलनाएं",
    titlePrefix: "भू-स्थानिक",
    titleHighlight: "तुलनाएं और बेंचमार्क",
    subtitle: "पोज़िशनिंग तकनीकों, निर्देशांक एनकोडिंग और भू-स्थानिक इंडेक्सिंग एल्गोरिद्म की गहन तकनीकी तुलना।",
    viewComparison: "तुलना देखें →",
    items: [
      {
        title: "GPS लोकेशन बनाम IP जियोलोकेशन: सटीकता, गोपनीयता और कार्यप्रणाली",
        description: "सैटेलाइट-आधारित पोज़िशनिंग की तुलना इंटरनेट राउटिंग टेबल लुकअप से करें। सटीकता (3 मीटर बनाम 50 किलोमीटर), लेटेंसी और गोपनीयता के अंतर समझें।",
        url: "/comparisons/gps-vs-ip-location/",
        icon: "⚖️",
        tags: ["सटीकता", "नेटवर्क", "GNSS"]
      },
      {
        title: "फॉरवर्ड जियोकोडिंग बनाम रिवर्स जियोकोडिंग: आपको कौन चाहिए?",
        description: "पतों को निर्देशांकों में बदलने और निर्देशांक युग्मों को सड़क के पतों में बदलने के बीच के गणितीय और डेटाबेस अंतर को समझें।",
        url: "/comparisons/geocoding-vs-reverse-geocoding/",
        icon: "🔄",
        tags: ["APIs", "जियोकोडिंग", "पते"]
      },
      {
        title: "दशमलव डिग्री (DD) बनाम डिग्री मिनट सेकंड (DMS)",
        description: "निर्देशांक नोटेशन सिस्टम, रूपांतरण फॉर्मूला, GIS डेटाबेस में स्टोरेज दक्षता और पठनीयता की तकनीकी तुलना।",
        url: "/comparisons/decimal-degrees-vs-dms/",
        icon: "📐",
        tags: ["निर्देशांक", "GIS", "डेटम"]
      }
    ]
  },
  id: {
    metaTitle: "Perbandingan GPS & Geolokasi | MyLocationLab",
    metaDescription: "Bandingkan akurasi GPS vs lokasi IP, Geocoding Langsung vs Terbalik, serta Derajat Desimal vs DMS melalui uraian teknis mendalam seputar rekayasa.",
    breadcrumb: "Perbandingan Teknis",
    titlePrefix: "Geospasial",
    titleHighlight: "Perbandingan & Benchmark",
    subtitle: "Uraian teknis yang membandingkan teknologi penentuan posisi, pengodean koordinat, dan algoritme pengindeksan geospasial.",
    viewComparison: "Lihat Perbandingan →",
    items: [
      {
        title: "Lokasi GPS vs. Geolokasi IP: Akurasi, Privasi & Cara Kerjanya",
        description: "Bandingkan penentuan posisi berbasis satelit dengan pencarian tabel routing internet. Pahami perbedaan akurasi (3 meter vs 50 kilometer), latensi, dan privasi.",
        url: "/comparisons/gps-vs-ip-location/",
        icon: "⚖️",
        tags: ["Akurasi", "Jaringan", "GNSS"]
      },
      {
        title: "Geocoding Langsung vs. Terbalik: Mana yang Anda Butuhkan?",
        description: "Pahami perbedaan matematis dan basis data antara mengubah alamat menjadi koordinat dan mengubah pasangan koordinat menjadi alamat jalan.",
        url: "/comparisons/geocoding-vs-reverse-geocoding/",
        icon: "🔄",
        tags: ["API", "Geocoding", "Alamat"]
      },
      {
        title: "Derajat Desimal (DD) vs. Derajat Menit Detik (DMS)",
        description: "Perbandingan teknis sistem notasi koordinat, rumus konversi, efisiensi penyimpanan di basis data GIS, dan keterbacaan oleh manusia.",
        url: "/comparisons/decimal-degrees-vs-dms/",
        icon: "📐",
        tags: ["Koordinat", "GIS", "Datum"]
      }
    ]
  },
  ja: {
    metaTitle: "GPS＆位置情報技術の比較・ベンチマーク | MyLocationLab",
    metaDescription: "GPSとIP位置情報の精度差、正ジオコーディングと逆ジオコーディングの違い、十進角（DD）と度分秒（DMS）のフォーマット比較を徹底解説。",
    breadcrumb: "技術比較",
    titlePrefix: "地理空間技術の",
    titleHighlight: "徹底比較とベンチマーク",
    subtitle: "測位技術、座標エンコーディング、空間インデックスアルゴリズムをエンジニアリング視点で詳細に比較。",
    viewComparison: "比較記事を読む →",
    items: [
      {
        title: "GPS位置情報 vs. IP位置情報：精度・プライバシー・仕組みの違い",
        description: "衛星測位とインターネットのルーティングテーブル検索を徹底比較。精度（3メートル vs 50キロメートル）、レイテンシ、プライバシーの違いを解明。",
        url: "/comparisons/gps-vs-ip-location/",
        icon: "⚖️",
        tags: ["測位精度", "ネットワーク", "GNSS"]
      },
      {
        title: "正ジオコーディング vs. 逆ジオコーディング：どちらを使うべきか？",
        description: "住所から座標を求めるフォワードジオコーディングと、座標ペアから住所を特定するリバースジオコーディングのアルゴリズムとデータベースの差異。",
        url: "/comparisons/geocoding-vs-reverse-geocoding/",
        icon: "🔄",
        tags: ["API", "ジオコーディング", "住所"]
      },
      {
        title: "十進角 (DD) vs. 度分秒 (DMS)：座標フォーマット比較",
        description: "座標表記システムの技術的比較。変換計算式、GISデータベースでの格納効率、人間にとっての可読性のトレードオフを解説。",
        url: "/comparisons/decimal-degrees-vs-dms/",
        icon: "📐",
        tags: ["座標フォーマット", "GIS", "測地基準系"]
      }
    ]
  },
  it: {
    metaTitle: "Confronti GPS & Geolocalizzazione | MyLocationLab",
    metaDescription: "Confronta l'accuratezza di GPS vs localizzazione IP, Geocodifica Diretta vs Inversa, e Gradi Decimali vs DMS con analisi tecniche dettagliate.",
    breadcrumb: "Confronti Tecnici",
    titlePrefix: "Confronti & Benchmark",
    titleHighlight: "Geospaziali",
    subtitle: "Analisi tecniche approfondite su tecnologie di posizionamento, codifica delle coordinate e algoritmi di indicizzazione geospaziale.",
    viewComparison: "Visualizza Confronto →",
    items: [
      {
        title: "Posizione GPS vs. Geolocalizzazione IP: Accuratezza, Privacy e Meccanismi",
        description: "Confronto tra posizionamento satellitare nello spazio e tabelle di routing internet. Differenze di precisione (3 metri vs 50 chilometri), latenza e privacy.",
        url: "/comparisons/gps-vs-ip-location/",
        icon: "⚖️",
        tags: ["Accuratezza", "Rete", "GNSS"]
      },
      {
        title: "Geocodifica Diretta vs. Inversa: Quale Ti Occorre?",
        description: "Differenze matematiche e di database tra la conversione di indirizzi in coordinate e la risoluzione di coordinate in indirizzi stradali.",
        url: "/comparisons/geocoding-vs-reverse-geocoding/",
        icon: "🔄",
        tags: ["API", "Geocodifica", "Indirizzi"]
      },
      {
        title: "Gradi Decimali (DD) vs. Gradi Minuti Secondi (DMS)",
        description: "Confronto tecnico tra i sistemi di notazione delle coordinate, formule di conversione, efficienza nei database GIS e leggibilità.",
        url: "/comparisons/decimal-degrees-vs-dms/",
        icon: "📐",
        tags: ["Coordinate", "GIS", "Datum"]
      }
    ]
  },
  ru: {
    metaTitle: "Сравнение Технологий GPS и Геолокации | MyLocationLab",
    metaDescription: "Сравнение точности GPS и IP-геолокации, прямого и обратного геокодирования, а также форматов десятичных градусов (DD) и DMS.",
    breadcrumb: "Технические Сравнения",
    titlePrefix: "Геопространственные",
    titleHighlight: "Сравнения и Бенчмарки",
    subtitle: "Технический анализ технологий позиционирования, кодирования координат и геопространственных алгоритмов.",
    viewComparison: "Открыть Сравнение →",
    items: [
      {
        title: "GPS-Локация vs. IP-Геолокация: Точность, Приватность и Механизмы",
        description: "Сравнение спутникового позиционирования и таблиц маршрутизации провайдеров. Разница в точности (3 метра против 50 км), задержке и приватности.",
        url: "/comparisons/gps-vs-ip-location/",
        icon: "⚖️",
        tags: ["Точность", "Сеть", "GNSS"]
      },
      {
        title: "Прямое Геокодирование vs. Обратное: Что Выбрать?",
        description: "Математические и архитектурные различия между конвертацией текстового адреса в координаты и получением улицы по координатам.",
        url: "/comparisons/geocoding-vs-reverse-geocoding/",
        icon: "🔄",
        tags: ["API", "Геокодирование", "Адреса"]
      },
      {
        title: "Десятичные Градусы (DD) vs. Градусы Минуты Секунды (DMS)",
        description: "Техническое сравнение систем записи координат, формулы перевода, эффективность хранения в базах данных ГИС и читаемость.",
        url: "/comparisons/decimal-degrees-vs-dms/",
        icon: "📐",
        tags: ["Координаты", "ГИС", "Датумы"]
      }
    ]
  }
};
