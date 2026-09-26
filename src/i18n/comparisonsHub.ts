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
  }
};
