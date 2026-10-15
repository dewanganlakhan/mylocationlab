export interface GuideItem {
  title: string;
  description: string;
  url: string;
  icon: string;
  readTime: string;
  tag: string;
}

export interface GuideCategory {
  category: string;
  description: string;
  guides: GuideItem[];
}

export interface GuidesHubContent {
  metaTitle: string;
  metaDescription: string;
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  categories: GuideCategory[];
  ctaTitle: string;
  ctaDesc: string;
  ctaGpsBtn: string;
  ctaConverterBtn: string;
  ctaElevationBtn: string;
  ctaAllToolsBtn: string;
  readGuide: string;
}

export const guidesHubTranslations: Record<string, GuidesHubContent> = {
  en: {
    metaTitle: "GPS & Geolocation Guides Hub | MyLocationLab",
    metaDescription: "Master GPS technology, calibrate your device's accuracy, troubleshoot wrong locations, learn geodesy coordinate models, and discover developer tools.",
    badge: "Geospatial Knowledge Base",
    titlePrefix: "Geolocation",
    titleHighlight: "Guides & Knowledge",
    subtitle: "Authoritative technical tutorials, accuracy optimization manuals, and geodesy primers written by geospatial engineers.",
    readGuide: "Read Guide →",
    ctaTitle: "Ready to Put Knowledge into Practice?",
    ctaDesc: "Explore our complete suite of free geospatial tools to find coordinates, measure distances, look up elevations, and convert formats.",
    ctaGpsBtn: "🛰️ GPS Coordinates Finder",
    ctaConverterBtn: "🧭 Coordinate Converter",
    ctaElevationBtn: "⛰️ Elevation Finder",
    ctaAllToolsBtn: "Browse All Tools →",
    categories: [
      {
        category: "🛰️ Satellite Physics & Geodesy Foundations",
        description: "Fundamental principles of global satellite navigation, spherical geometry, and coordinate reference models.",
        guides: [
          {
            title: "How GPS Location Works: Satellites, Trilateration & WGS 84",
            description: "Understand how atomic clocks, orbital ephemeris, relativistic time dilation, and 3D trilateration compute sub-meter coordinates.",
            url: "/guides/how-gps-location-works/",
            icon: "🛰️",
            readTime: "9 min read",
            tag: "Hardware Physics"
          },
          {
            title: "Latitude & Longitude Explained: Complete Geodesy Guide",
            description: "Master the global coordinate grid, degrees, minutes, seconds, decimal degree precision tables, and antipodes.",
            url: "/guides/latitude-and-longitude-explained/",
            icon: "🌐",
            readTime: "8 min read",
            tag: "GIS Foundations"
          },
          {
            title: "UTM Coordinates & Geodetic Datums: WGS84, NAD83, ETRS89",
            description: "Metric coordinate projections, 60 longitudinal zones, false easting/northing offsets, and continental tectonic datums.",
            url: "/guides/utm-coordinates-and-datums/",
            icon: "🗺️",
            readTime: "9 min read",
            tag: "Surveying Standards"
          }
        ]
      },
      {
        category: "⚡ Accuracy Optimization & Troubleshooting",
        description: "Actionable techniques to calibrate hardware sensors, troubleshoot wrong locations, and overcome signal interference.",
        guides: [
          {
            title: "How to Improve GPS Accuracy on iPhone, Android & Desktop",
            description: "Step-by-step techniques to eliminate multipath interference, calibrate compass sensors, and optimize device GNSS performance.",
            url: "/guides/improve-gps-accuracy/",
            icon: "⚡",
            readTime: "8 min read",
            tag: "Calibration"
          },
          {
            title: "Why Is My Location Wrong? Complete Troubleshooting Guide",
            description: "Fix inaccurate location readings caused by VPNs, stale Wi-Fi router BSSID databases, and ISP proxy routing.",
            url: "/guides/wrong-location/",
            icon: "🔧",
            readTime: "8 min read",
            tag: "Troubleshooting"
          },
          {
            title: "IP Geolocation Accuracy: How GeoIP Works & Why It Fails",
            description: "How GeoIP providers (MaxMind, DB-IP) map IP addresses to cities and why IP lookups are statistically non-physical.",
            url: "/guides/ip-geolocation-accuracy/",
            icon: "📡",
            readTime: "8 min read",
            tag: "Network GeoIP"
          }
        ]
      },
      {
        category: "🔒 Privacy, Web Development & Testing",
        description: "Developer integration guides, mock location testing, and security blueprints for location data privacy.",
        guides: [
          {
            title: "HTML5 Geolocation API: Web Developer & User Guide",
            description: "Implement navigator.geolocation in JavaScript with high accuracy flags, timeout handling, and permissions policies.",
            url: "/guides/browser-geolocation-api-guide/",
            icon: "💻",
            readTime: "9 min read",
            tag: "Developer Guide"
          },
          {
            title: "How to Share Your Location Safely: Complete Guide",
            description: "Share live movement or static coordinates on iPhone, Android, WhatsApp, Google Maps, and browser QR codes safely.",
            url: "/guides/how-to-share-location/",
            icon: "🔗",
            readTime: "7 min read",
            tag: "Safety & Sharing"
          },
          {
            title: "GPS Privacy & Security: Who Tracks Your Location & How to Stop It",
            description: "Audit app permissions, strip photo EXIF geotags, and defend against background cellular and ad beacon tracking.",
            url: "/guides/gps-privacy-and-security/",
            icon: "🔒",
            readTime: "8 min read",
            tag: "Privacy Defense"
          },
          {
            title: "How Mock Locations Work: Testing & Spoofing GPS for Developers",
            description: "Simulate coordinates using Android Mock Locations, Xcode GPX route playback, and Chrome DevTools sensor overrides.",
            url: "/guides/how-to-fake-or-mock-location/",
            icon: "🧪",
            readTime: "8 min read",
            tag: "QA Testing"
          }
        ]
      }
    ]
  },
  es: {
    metaTitle: "Centro de Guías de GPS y Geolocalización | MyLocationLab",
    metaDescription: "Domine la tecnología GPS, calibre la precisión de sus dispositivos, solucione ubicaciones erróneas y descubra modelos geodésicos.",
    badge: "Base de Conocimiento Geoespacial",
    titlePrefix: "Guías y Conocimiento de",
    titleHighlight: "Geolocalización",
    subtitle: "Tutoriales técnicos autorizados, manuales de calibración de precisión y principios de geodesia redactados por ingenieros geoespaciales.",
    readGuide: "Leer Guía →",
    ctaTitle: "¿Listo para aplicar sus conocimientos?",
    ctaDesc: "Explore nuestra gama de herramientas geoespaciales gratuitas para consultar coordenadas, medir distancias, calcular elevaciones y convertir formatos.",
    ctaGpsBtn: "🛰️ Buscador de Coordenadas GPS",
    ctaConverterBtn: "🧭 Conversor de Coordenadas",
    ctaElevationBtn: "⛰️ Buscador de Elevación",
    ctaAllToolsBtn: "Ver Todas las Herramientas →",
    categories: [
      {
        category: "🛰️ Física Satelital y Fundamentos de Geodesia",
        description: "Principios clave de navegación satelital global, geometría esférica y modelos de referencia elipsoidales.",
        guides: [
          {
            title: "Cómo Funciona el GPS: Satélites, Trilateración y WGS 84",
            description: "Comprenda cómo los relojes atómicos, las efemérides orbitales, la dilatación temporal y la trilateración 3D calculan coordenadas submétricas.",
            url: "/guides/how-gps-location-works/",
            icon: "🛰️",
            readTime: "9 min de lectura",
            tag: "Física de Hardware"
          },
          {
            title: "Latitud y Longitud Explicadas: Guía Completa de Geodesia",
            description: "Domine la cuadrícula de coordenadas mundial, grados, minutos, segundos, tablas de precisión decimal y antípodas.",
            url: "/guides/latitude-and-longitude-explained/",
            icon: "🌐",
            readTime: "8 min de lectura",
            tag: "Fundamentos SIG"
          },
          {
            title: "Coordenadas UTM y Dátums Geodésicos: WGS84, NAD83, ETRS89",
            description: "Proyecciones métricas transversas de Mercator, 60 husos longitudinales y dátums tectónicos continentales.",
            url: "/guides/utm-coordinates-and-datums/",
            icon: "🗺️",
            readTime: "9 min de lectura",
            tag: "Estándares Topográficos"
          }
        ]
      },
      {
        category: "⚡ Optimización de Precisión y Resolución de Errores",
        description: "Técnicas prácticas para calibrar sensores de hardware, solucionar ubicaciones incorrectas y eliminar interferencias.",
        guides: [
          {
            title: "Cómo Mejorar la Precisión del GPS en iPhone, Android y PC",
            description: "Métodos paso a paso para eliminar el efecto multitrayecto, calibrar sensores de brújula y optimizar el rendimiento GNSS.",
            url: "/guides/improve-gps-accuracy/",
            icon: "⚡",
            readTime: "8 min de lectura",
            tag: "Calibración"
          },
          {
            title: "¿Por qué mi ubicación es errónea? Guía Completa de Soluciones",
            description: "Repare ubicaciones imprecisas provocadas por VPNs, bases de datos BSSID de routers Wi-Fi desactualizadas y proxys de ISP.",
            url: "/guides/wrong-location/",
            icon: "🔧",
            readTime: "8 min de lectura",
            tag: "Resolución de Problemas"
          },
          {
            title: "Precisión de Geolocalización IP: Cómo Funciona GeoIP y por qué Falla",
            description: "Cómo los proveedores GeoIP (MaxMind, DB-IP) asocian IPs con ciudades y por qué el rastreo IP carece de precisión física.",
            url: "/guides/ip-geolocation-accuracy/",
            icon: "📡",
            readTime: "8 min de lectura",
            tag: "Red GeoIP"
          }
        ]
      },
      {
        category: "🔒 Privacidad, Desarrollo Web y Pruebas",
        description: "Guías de integración para programadores, simulaciones de ubicación y protección de datos espaciales.",
        guides: [
          {
            title: "API de Geolocalización HTML5: Guía para Desarrolladores",
            description: "Implemente navigator.geolocation en JavaScript con banderas de alta precisión, tiempos de espera y políticas de permisos.",
            url: "/guides/browser-geolocation-api-guide/",
            icon: "💻",
            readTime: "9 min de lectura",
            tag: "Guía de Desarrollo"
          },
          {
            title: "Cómo Compartir su Ubicación de Forma Segura",
            description: "Comparta movimientos en vivo o coordenadas fijas en iPhone, Android, WhatsApp, Google Maps y códigos QR de forma privada.",
            url: "/guides/how-to-share-location/",
            icon: "🔗",
            readTime: "7 min de lectura",
            tag: "Seguridad y Compartición"
          },
          {
            title: "Privacidad y Seguridad GPS: Quién Rastrea su Posición y Cómo Detenerlo",
            description: "Audite permisos de aplicaciones, elimine etiquetas EXIF de fotos y protéjase contra el rastreo por antenas celulares.",
            url: "/guides/gps-privacy-and-security/",
            icon: "🔒",
            readTime: "8 min de lectura",
            tag: "Defensa de Privacidad"
          },
          {
            title: "Cómo Funcionan las Ubicaciones Simuladas: Pruebas y Spoofing GPS",
            description: "Simule coordenadas con Android Mock Locations, reproducción de trayectorias GPX en Xcode e invalidaciones de sensores en Chrome DevTools.",
            url: "/guides/how-to-fake-or-mock-location/",
            icon: "🧪",
            readTime: "8 min de lectura",
            tag: "Pruebas QA"
          }
        ]
      }
    ]
  },
  fr: {
    metaTitle: "Guides & Base de Connaissances GPS | MyLocationLab",
    metaDescription: "Maîtrisez la technologie GPS, optimisez la précision de vos appareils, résolvez les erreurs de position et apprenez la géodésie.",
    badge: "Base de Connaissances Géospatiales",
    titlePrefix: "Guides & Savoirs en",
    titleHighlight: "Géolocalisation",
    subtitle: "Tutoriels techniques de référence, manuels d'étalonnage de précision et fondements géodésiques rédigés par des ingénieurs SIG.",
    readGuide: "Consulter le Guide →",
    ctaTitle: "Prêt à passer de la théorie à la pratique ?",
    ctaDesc: "Découvrez notre gamme complète d'outils géospatiaux gratuits pour obtenir vos coordonnées, mesurer des distances et convertir des formats.",
    ctaGpsBtn: "🛰️ Détecteur de Coordonnées GPS",
    ctaConverterBtn: "🧭 Convertisseur de Coordonnées",
    ctaElevationBtn: "⛰️ Calculateur d'Altitude",
    ctaAllToolsBtn: "Tous les Outils →",
    categories: [
      {
        category: "🛰️ Physique Spatiale & Fondations Géodésiques",
        description: "Principes fondamentaux du positionnement GNSS par satellite, géométrie sphérique et modèles de référence WGS 84.",
        guides: [
          {
            title: "Comment Fonctionne le GPS : Satellites, Trilatération & WGS 84",
            description: "Découvrez comment horloges atomiques, éphémérides orbitales, dilatation temporelle et trilatération 3D déterminent vos coordonnées.",
            url: "/guides/how-gps-location-works/",
            icon: "🛰️",
            readTime: "9 min de lecture",
            tag: "Physique Hardware"
          },
          {
            title: "Latitude & Longitude Expliquées : Guide Géodésique Complet",
            description: "Maîtrisez la grille globale, les degrés, minutes, secondes, les tables de précision décimale et les antipodes.",
            url: "/guides/latitude-and-longitude-explained/",
            icon: "🌐",
            readTime: "8 min de lecture",
            tag: "Fondations SIG"
          },
          {
            title: "Coordonnées UTM & Datums Géodésiques : WGS84, NAD83, ETRS89",
            description: "Projections métriques, 60 fuseaux longitudinaux, décalages d'abscisse et datums tectoniques continentaux.",
            url: "/guides/utm-coordinates-and-datums/",
            icon: "🗺️",
            readTime: "9 min de lecture",
            tag: "Normes Topographiques"
          }
        ]
      },
      {
        category: "⚡ Optimisation de la Précision & Dépannage",
        description: "Méthodes concrètes pour étalonner vos capteurs, résoudre les positions inexactes et éliminer les interférences.",
        guides: [
          {
            title: "Comment Améliorer la Précision GPS sur iPhone, Android et PC",
            description: "Techniques pratiques pour éliminer le multitrajet, calibrer la boussole et booster la réception satellitaire GNSS.",
            url: "/guides/improve-gps-accuracy/",
            icon: "⚡",
            readTime: "8 min de lecture",
            tag: "Étalonnage"
          },
          {
            title: "Pourquoi ma position est-elle fausse ? Guide de dépannage",
            description: "Corrigez les erreurs de localisation causées par les VPN, les bases Wi-Fi BSSID obsolètes ou les passerelles FAI.",
            url: "/guides/wrong-location/",
            icon: "🔧",
            readTime: "8 min de lecture",
            tag: "Dépannage"
          },
          {
            title: "Précision de la Géolocalisation IP : Fonctionnement & Limites",
            description: "Comment les fournisseurs GeoIP associent une adresse IP à une ville et pourquoi la géolocalisation IP n'est pas physique.",
            url: "/guides/ip-geolocation-accuracy/",
            icon: "📡",
            readTime: "8 min de lecture",
            tag: "Réseau GeoIP"
          }
        ]
      },
      {
        category: "🔒 Confidentialité, Développement Web & Tests",
        description: "Guides d'intégration pour les développeurs, simulation de position GPS et protection des données personnelles.",
        guides: [
          {
            title: "API Geolocation HTML5 : Guide Développeur & Utilisateur",
            description: "Intégrez navigator.geolocation en JavaScript avec haute précision, gestion des délais et permissions.",
            url: "/guides/browser-geolocation-api-guide/",
            icon: "💻",
            readTime: "9 min de lecture",
            tag: "Guide Développeur"
          },
          {
            title: "Comment Partager sa Position en Toute Sécurité",
            description: "Partagez votre position en direct ou des coordonnées précises sur iPhone, Android, WhatsApp et QR codes sans risque.",
            url: "/guides/how-to-share-location/",
            icon: "🔗",
            readTime: "7 min de lecture",
            tag: "Sécurité & Partage"
          },
          {
            title: "Sécurité & Confidentialité GPS : Qui vous suit et comment s'en protéger",
            description: "Vérifiez les autorisations de vos applications, supprimez les métadonnées EXIF et bloquez le pistage publicitaire.",
            url: "/guides/gps-privacy-and-security/",
            icon: "🔒",
            readTime: "8 min de lecture",
            tag: "Défense Vie Privée"
          },
          {
            title: "Positions Fictives & Simulation GPS pour Développeurs",
            description: "Simulez des coordonnées avec les positions fictives Android, les trajets GPX Xcode et Chrome DevTools.",
            url: "/guides/how-to-fake-or-mock-location/",
            icon: "🧪",
            readTime: "8 min de lecture",
            tag: "Tests QA"
          }
        ]
      }
    ]
  },
  de: {
    metaTitle: "GPS & Geolokalisierung Ratgeber-Hub | MyLocationLab",
    metaDescription: "Meistern Sie GPS-Technologie, kalibrieren Sie Sensoren, beheben Sie falsche Standorte und lernen Sie geodätische Koordinatenmodelle kennen.",
    badge: "Geospatiale Wissensdatenbank",
    titlePrefix: "Geolokalisierung",
    titleHighlight: "Ratgeber & Fachwissen",
    subtitle: "Fundierte technische Anleitungen, Optimierungshandbücher zur Ortungsgenauigkeit und Geodäsie-Grundlagen von Geo-Ingenieuren.",
    readGuide: "Ratgeber lesen →",
    ctaTitle: "Bereit, Wissen in die Praxis umzusetzen?",
    ctaDesc: "Nutzen Sie unsere kostenlosen Geotools, um Koordinaten zu ermitteln, Distanzen zu vermessen, Höhen abzufragen und Formate umzurechnen.",
    ctaGpsBtn: "🛰️ GPS-Koordinaten Finder",
    ctaConverterBtn: "🧭 Koordinaten-Umrechner",
    ctaElevationBtn: "⛰️ Höhenmeter-Finder",
    ctaAllToolsBtn: "Alle Werkzeuge ansehen →",
    categories: [
      {
        category: "🛰️ Satellitenphysik & Geodätische Grundlagen",
        description: "Fundamentale Prinzipien der globalen Satellitennavigation, sphärischen Geometrie und WGS-84-Referenzmodelle.",
        guides: [
          {
            title: "Wie GPS funktioniert: Satelliten, Trilateration & WGS 84",
            description: "Verstehen Sie, wie Atomuhren, Bahndaten, relativistische Zeitdilatation und 3D-Trilateration hochpräzise Koordinaten berechnen.",
            url: "/guides/how-gps-location-works/",
            icon: "🛰️",
            readTime: "9 Min. Lesezeit",
            tag: "Hardware-Physik"
          },
          {
            title: "Breitengrad & Längengrad erklärt: Der vollständige Leitfaden",
            description: "Gradnetz der Erde, Grad, Minuten, Sekunden, Dezimalgrad-Genauigkeitstabellen und Antipodenpunkte im Detail.",
            url: "/guides/latitude-and-longitude-explained/",
            icon: "🌐",
            readTime: "8 Min. Lesezeit",
            tag: "GIS-Grundlagen"
          },
          {
            title: "UTM-Koordinaten & Geodätische Datums: WGS84, NAD83, ETRS89",
            description: "Metrische Projektionen, 60 Längenzonen, Rechts-/Hochwert-Offsets und kontinentale tektonische Bezugssysteme.",
            url: "/guides/utm-coordinates-and-datums/",
            icon: "🗺️",
            readTime: "9 Min. Lesezeit",
            tag: "Vermessungsnormen"
          }
        ]
      },
      {
        category: "⚡ Genauigkeitsoptimierung & Fehlerbehebung",
        description: "Praktische Methoden zur Sensorkalibrierung, Fehlerbehebung falscher Standorte und Beseitigung von Störsignalen.",
        guides: [
          {
            title: "GPS-Genauigkeit auf iPhone, Android & PC verbessern",
            description: "Schritt-für-Schritt-Anleitung zur Vermeidung von Mehrwegeffekten, Kompass-Kalibrierung und Optimierung des GNSS-Empfangs.",
            url: "/guides/improve-gps-accuracy/",
            icon: "⚡",
            readTime: "8 Min. Lesezeit",
            tag: "Kalibrierung"
          },
          {
            title: "Warum ist mein Standort falsch? Vollständiger Problemlöser",
            description: "Beheben Sie ungenaue Ortungsdaten durch VPNs, veraltete Wi-Fi-BSSID-Routerdatenbanken und Provider-Proxys.",
            url: "/guides/wrong-location/",
            icon: "🔧",
            readTime: "8 Min. Lesezeit",
            tag: "Fehlerbehebung"
          },
          {
            title: "IP-Geolokalisierung: Funktionsweise & Fehlerquellen",
            description: "Wie GeoIP-Anbieter (MaxMind, DB-IP) IP-Adressen Städten zuordnen und warum IP-Lookups physikalisch ungenau sind.",
            url: "/guides/ip-geolocation-accuracy/",
            icon: "📡",
            readTime: "8 Min. Lesezeit",
            tag: "Netzwerk-GeoIP"
          }
        ]
      },
      {
        category: "🔒 Datenschutz, Webentwicklung & Testen",
        description: "Integrationsleitfäden für Entwickler, Simulation virtueller Standorte und Schutz persönlicher Standortdaten.",
        guides: [
          {
            title: "HTML5 Geolocation API: Entwickler- und Anwenderhandbuch",
            description: "Implementieren Sie navigator.geolocation in JavaScript mit Hochpräzisions-Optionen, Timeouts und Berechtigungen.",
            url: "/guides/browser-geolocation-api-guide/",
            icon: "💻",
            readTime: "9 Min. Lesezeit",
            tag: "Entwickler-Guide"
          },
          {
            title: "Standort sicher teilen: Der vollständige Praxisleitfaden",
            description: "Teilen Sie Live-Bewegungen oder fixe Koordinaten auf iPhone, Android, WhatsApp und QR-Codes ohne Sicherheitsrisiko.",
            url: "/guides/how-to-share-location/",
            icon: "🔗",
            readTime: "7 Min. Lesezeit",
            tag: "Sicherheit & Teilen"
          },
          {
            title: "GPS-Datenschutz & Sicherheit: Wer trackt Ihren Standort?",
            description: "App-Berechtigungen prüfen, EXIF-Geotags aus Fotos entfernen und sich gegen Werbe-Beacons und Funkzellen-Tracking schützen.",
            url: "/guides/gps-privacy-and-security/",
            icon: "🔒",
            readTime: "8 Min. Lesezeit",
            tag: "Datenschutz"
          },
          {
            title: "Virtuelle Standorte (Mock Locations): GPS-Simulation für Tests",
            description: "Simulieren Sie Koordinaten mit Android Mock Locations, Xcode GPX-Routen und Chrome DevTools Sensor-Overrides.",
            url: "/guides/how-to-fake-or-mock-location/",
            icon: "🧪",
            readTime: "8 Min. Lesezeit",
            tag: "QA & Testing"
          }
        ]
      }
    ]
  },
  pt: {
    metaTitle: "Central de Guias de GPS e Geolocalização | MyLocationLab",
    metaDescription: "Domine a tecnologia GPS, calibre a precisão dos seus dispositivos, corrija localizações erradas e aprenda sobre modelos geodésicos.",
    badge: "Base de Conhecimento Geoespacial",
    titlePrefix: "Guias e Conhecimento de",
    titleHighlight: "Geolocalização",
    subtitle: "Tutoriais técnicos especializados, manuais de calibração de precisão e fundamentos geodésicos desenvolvidos por engenheiros espaciais.",
    readGuide: "Ler Guia →",
    ctaTitle: "Pronto para colocar o conhecimento em prática?",
    ctaDesc: "Explore nosso conjunto completo de ferramentas geoespaciais gratuitas para encontrar coordenadas, medir distâncias e converter formatos.",
    ctaGpsBtn: "🛰️ Localizador de Coordenadas GPS",
    ctaConverterBtn: "🧭 Conversor de Coordenadas",
    ctaElevationBtn: "⛰️ Medidor de Altitude",
    ctaAllToolsBtn: "Explorar Todas as Ferramentas →",
    categories: [
      {
        category: "🛰️ Física de Satélites e Fundamentos de Geodésia",
        description: "Princípios essenciais de navegação por satélite global, geometria esférica e modelos elipsoidais WGS 84.",
        guides: [
          {
            title: "Como Funciona o GPS: Satélites, Trilateração e WGS 84",
            description: "Entenda como relógios atômicos, efemérides orbitais, dilatação temporal e trilateração 3D calculam coordenadas submétricas.",
            url: "/guides/how-gps-location-works/",
            icon: "🛰️",
            readTime: "9 min de leitura",
            tag: "Física de Hardware"
          },
          {
            title: "Latitude e Longitude Explicadas: Guia Completo de Geodésia",
            description: "Domine a grade global de coordenadas, graus, minutos, segundos, tabelas de precisão decimal e antípodas.",
            url: "/guides/latitude-and-longitude-explained/",
            icon: "🌐",
            readTime: "8 min de leitura",
            tag: "Fundamentos SIG"
          },
          {
            title: "Coordenadas UTM e Datums Geodésicos: WGS84, NAD83, SIRGAS2000",
            description: "Projeções métricas, 60 fusos longitudinais, coordenadas planas e sistemas de referência continentais.",
            url: "/guides/utm-coordinates-and-datums/",
            icon: "🗺️",
            readTime: "9 min de leitura",
            tag: "Padrões Topográficos"
          }
        ]
      },
      {
        category: "⚡ Otimização de Precisão e Solução de Problemas",
        description: "Técnicas práticas para calibrar sensores, diagnosticar localizações incorretas e superar interferências.",
        guides: [
          {
            title: "Como Melhorar a Precisão do GPS no iPhone, Android e PC",
            description: "Passo a passo para eliminar erros de multicaminho, calibrar a bússola e extrair máxima precisão do GNSS.",
            url: "/guides/improve-gps-accuracy/",
            icon: "⚡",
            readTime: "8 min de leitura",
            tag: "Calibração"
          },
          {
            title: "Por que minha localização está errada? Guia de Diagnóstico",
            description: "Corrija desvios causados por redes VPN ativas, registros Wi-Fi BSSID desatualizados e roteamento de provedores.",
            url: "/guides/wrong-location/",
            icon: "🔧",
            readTime: "8 min de leitura",
            tag: "Diagnóstico"
          },
          {
            title: "Precisão do GeoIP: Como Funciona e Por que Falha",
            description: "Como servidores comerciais correlacionam endereços IP a cidades e por que a localização por IP não é física.",
            url: "/guides/ip-geolocation-accuracy/",
            icon: "📡",
            readTime: "8 min de leitura",
            tag: "Rede GeoIP"
          }
        ]
      },
      {
        category: "🔒 Privacidade, Desenvolvimento Web e Testes",
        description: "Manuais de integração para desenvolvedores, simulação de coordenadas e proteção de dados de posicionamento.",
        guides: [
          {
            title: "API de Geolocalização HTML5: Guia para Desenvolvedores",
            description: "Implemente navigator.geolocation em JavaScript com precisão elevada, tratamento de timeout e políticas seguras.",
            url: "/guides/browser-geolocation-api-guide/",
            icon: "💻",
            readTime: "9 min de leitura",
            tag: "Guia Dev"
          },
          {
            title: "Como Compartilhar sua Localização com Total Segurança",
            description: "Compartilhe posições em tempo real ou coordenadas estáticas no iPhone, Android, WhatsApp e códigos QR com privacidade.",
            url: "/guides/how-to-share-location/",
            icon: "🔗",
            readTime: "7 min de leitura",
            tag: "Segurança e Compartilhamento"
          },
          {
            title: "Privacidade GPS: Quem Rastreia sua Posição e Como Evitar",
            description: "Audite permissões de aplicativos, remova metadados EXIF de fotos e impeça o rastreamento por antenas celulares.",
            url: "/guides/gps-privacy-and-security/",
            icon: "🔒",
            readTime: "8 min de leitura",
            tag: "Proteção de Dados"
          },
          {
            title: "Como Funcionam Localizações Fictícias: Testes e Mock GPS",
            description: "Simule trajetos com Mock Locations no Android, arquivos GPX no Xcode e overrides de sensores no Chrome DevTools.",
            url: "/guides/how-to-fake-or-mock-location/",
            icon: "🧪",
            readTime: "8 min de leitura",
            tag: "Testes QA"
          }
        ]
      }
    ]
  },
  hi: {
    metaTitle: "GPS और जियोलोकेशन गाइड हब | MyLocationLab",
    metaDescription: "GPS तकनीक में महारत रखें, अपने डिवाइस की सटीकता कैलिब्रेट करें, गलत लोकेशन की समस्या हल करें, जियोडेसी निर्देशांक मॉडल सीखें और डेवलपर टूल्स खोजें।",
    badge: "भू-स्थानिक ज्ञान कोश",
    titlePrefix: "जियोलोकेशन",
    titleHighlight: "गाइड और ज्ञान",
    subtitle: "भू-स्थानिक इंजीनियरों द्वारा लिखे गए विश्वसनीय तकनीकी ट्यूटोरियल, सटीकता अनुकूलन मैनुअल और जियोडेसी परिचय।",
    readGuide: "गाइड पढ़ें →",
    ctaTitle: "ज्ञान को व्यवहार में उतारने के लिए तैयार हैं?",
    ctaDesc: "निर्देशांक खोजने, दूरियां मापने, ऊंचाई जानने और फॉर्मेट बदलने के लिए हमारे मुफ़्त भू-स्थानिक टूल्स का पूरा संग्रह देखें।",
    ctaGpsBtn: "🛰️ GPS निर्देशांक फाइंडर",
    ctaConverterBtn: "🧭 निर्देशांक कनवर्टर",
    ctaElevationBtn: "⛰️ ऊंचाई फाइंडर",
    ctaAllToolsBtn: "सभी टूल्स देखें →",
    categories: [
      {
        category: "🛰️ सैटेलाइट भौतिकी और जियोडेसी आधार",
        description: "वैश्विक सैटेलाइट नेविगेशन, गोलीय ज्यामिति और निर्देशांक रेफरेंस मॉडल के मूलभूत सिद्धांत।",
        guides: [
          {
            title: "GPS लोकेशन कैसे काम करता है: सैटेलाइट, ट्राईलैटरेशन और WGS 84",
            description: "जानें कि परमाणु घड़ियां, कक्षीय एफेमेरिस, सापेक्षतावादी समय विस्तारण और 3D ट्राईलैटरेशन मिलकर सब-मीटर निर्देशांक की गणना कैसे करते हैं।",
            url: "/guides/how-gps-location-works/",
            icon: "🛰️",
            readTime: "9 मिनट की पढ़ाई",
            tag: "हार्डवेयर भौतिकी"
          },
          {
            title: "अक्षांश और देशांतर की व्याख्या: संपूर्ण जियोडेसी गाइड",
            description: "वैश्विक निर्देशांक ग्रिड, डिग्री, मिनट, सेकंड, दशमलव डिग्री सटीकता तालिकाओं और समपाद (एंटीपोड्स) में महारत रखें।",
            url: "/guides/latitude-and-longitude-explained/",
            icon: "🌐",
            readTime: "8 मिनट की पढ़ाई",
            tag: "GIS आधार"
          },
          {
            title: "UTM निर्देशांक और जियोडेसिक डेटम: WGS84, NAD83, ETRS89",
            description: "मीट्रिक निर्देशांक प्रक्षेप, 60 देशांतर क्षेत्र, फॉल्स ईस्टिंग/नॉर्थिंग ऑफसेट और महाद्वीपीय विवर्तनिक डेटम।",
            url: "/guides/utm-coordinates-and-datums/",
            icon: "🗺️",
            readTime: "9 मिनट की पढ़ाई",
            tag: "सर्वे मानक"
          }
        ]
      },
      {
        category: "⚡ सटीकता अनुकूलन और समस्या निवारण",
        description: "हार्डवेयर सेंसर कैलिब्रेट करने, गलत लोकेशन की समस्या हल करने और सिग्नल हस्तक्षेप से उबरने की व्यावहारिक तकनीकें।",
        guides: [
          {
            title: "iPhone, Android और डेस्कटॉप पर GPS सटीकता कैसे बढ़ाएं",
            description: "मल्टीपाथ हस्तक्षेप दूर करने, कंपास सेंसर कैलिब्रेट करने और डिवाइस के GNSS प्रदर्शन को अनुकूलित करने की चरण-दर-चरण तकनीकें।",
            url: "/guides/improve-gps-accuracy/",
            icon: "⚡",
            readTime: "8 मिनट की पढ़ाई",
            tag: "कैलिब्रेशन"
          },
          {
            title: "मेरी लोकेशन गलत क्यों है? संपूर्ण समस्या निवारण गाइड",
            description: "VPN, पुरानी वाई-फाई राउटर BSSID डेटाबेस और ISP प्रॉक्सी राउटिंग से होने वाली अशुद्ध लोकेशन रीडिंग ठीक करें।",
            url: "/guides/wrong-location/",
            icon: "🔧",
            readTime: "8 मिनट की पढ़ाई",
            tag: "समस्या निवारण"
          },
          {
            title: "IP जियोलोकेशन सटीकता: GeoIP कैसे काम करता है और क्यों विफल होता है",
            description: "GeoIP प्रदाता (MaxMind, DB-IP) IP पतों को शहरों से कैसे जोड़ते हैं और IP लुकअप आंकड़ों के आधार पर भौतिक क्यों नहीं होते।",
            url: "/guides/ip-geolocation-accuracy/",
            icon: "📡",
            readTime: "8 मिनट की पढ़ाई",
            tag: "नेटवर्क GeoIP"
          }
        ]
      },
      {
        category: "🔒 गोपनीयता, वेब डेवलपमेंट और टेस्टिंग",
        description: "डेवलपर इंटीग्रेशन गाइड, मॉक लोकेशन टेस्टिंग और लोकेशन डेटा गोपनीयता के लिए सुरक्षा खाका।",
        guides: [
          {
            title: "HTML5 Geolocation API: वेब डेवलपर और उपयोगकर्ता गाइड",
            description: "JavaScript में navigator.geolocation को हाई एक्यूरेसी फ्लैग, टाइमआउट हैंडलिंग और अनुमति नीतियों के साथ लागू करें।",
            url: "/guides/browser-geolocation-api-guide/",
            icon: "💻",
            readTime: "9 मिनट की पढ़ाई",
            tag: "डेवलपर गाइड"
          },
          {
            title: "अपनी लोकेशन सुरक्षित रूप से कैसे साझा करें: संपूर्ण गाइड",
            description: "iPhone, Android, WhatsApp, Google Maps और ब्राउज़र QR कोड पर लाइव चलन या स्थिर निर्देशांक सुरक्षित रूप से साझा करें।",
            url: "/guides/how-to-share-location/",
            icon: "🔗",
            readTime: "7 मिनट की पढ़ाई",
            tag: "सुरक्षा और साझाकरण"
          },
          {
            title: "GPS गोपनीयता और सुरक्षा: कौन आपकी लोकेशन ट्रैक करता है और कैसे रोकें",
            description: "ऐप अनुमतियों की जांच करें, फोटो के EXIF जियोटैग हटाएं और बैकग्राउंड सेल्युलर तथा विज्ञापन बीकन ट्रैकिंग से बचाव करें।",
            url: "/guides/gps-privacy-and-security/",
            icon: "🔒",
            readTime: "8 मिनट की पढ़ाई",
            tag: "गोपनीयता रक्षा"
          },
          {
            title: "मॉक लोकेशन कैसे काम करते हैं: डेवलपर के लिए GPS टेस्टिंग और स्पूफिंग",
            description: "Android Mock Locations, Xcode GPX रूट प्लेबैक और Chrome DevTools सेंसर ओवरराइड का उपयोग करके निर्देशांक सिम्युलेट करें।",
            url: "/guides/how-to-fake-or-mock-location/",
            icon: "🧪",
            readTime: "8 मिनट की पढ़ाई",
            tag: "QA टेस्टिंग"
          }
        ]
      }
    ]
  },
  id: {
    metaTitle: "Pusat Panduan GPS & Geolokasi | MyLocationLab",
    metaDescription: "Kuasai teknologi GPS, kalibrasi akurasi perangkat Anda, atasi lokasi yang salah, pelajari model koordinat geodesi, dan temukan alat pengembang.",
    badge: "Basis Pengetahuan Geospasial",
    titlePrefix: "Geolokasi",
    titleHighlight: "Panduan & Pengetahuan",
    subtitle: "Tutorial teknis otoritatif, manual optimasi akurasi, dan pengantar geodesi yang ditulis oleh insinyur geospasial.",
    readGuide: "Baca Panduan →",
    ctaTitle: "Siap Menerapkan Pengetahuan Anda?",
    ctaDesc: "Jelajahi rangkaian lengkap alat geospasial gratis kami untuk menemukan koordinat, mengukur jarak, mencari elevasi, dan mengonversi format.",
    ctaGpsBtn: "🛰️ Pelacak Koordinat GPS",
    ctaConverterBtn: "🧭 Konverter Koordinat",
    ctaElevationBtn: "⛰️ Pencari Elevasi",
    ctaAllToolsBtn: "Lihat Semua Alat →",
    categories: [
      {
        category: "🛰️ Fisika Satelit & Dasar Geodesi",
        description: "Prinsip mendasar navigasi satelit global, geometri bola, dan model acuan koordinat.",
        guides: [
          {
            title: "Cara Kerja Lokasi GPS: Satelit, Trilaterasi & WGS 84",
            description: "Pahami bagaimana jam atom, efemeris orbit, dilatasi waktu relativistik, dan trilaterasi 3D menghitung koordinat presisi di bawah satu meter.",
            url: "/guides/how-gps-location-works/",
            icon: "🛰️",
            readTime: "bacaan 9 menit",
            tag: "Fisika Perangkat Keras"
          },
          {
            title: "Lintang & Bujur Dijelaskan: Panduan Geodesi Lengkap",
            description: "Kuasai kisi koordinat global, derajat, menit, detik, tabel presisi derajat desimal, dan antipode.",
            url: "/guides/latitude-and-longitude-explained/",
            icon: "🌐",
            readTime: "bacaan 8 menit",
            tag: "Dasar GIS"
          },
          {
            title: "Koordinat UTM & Datum Geodesik: WGS84, NAD83, ETRS89",
            description: "Proyeksi koordinat metrik, 60 zona bujur, offset false easting/northing, dan datum tektonik benua.",
            url: "/guides/utm-coordinates-and-datums/",
            icon: "🗺️",
            readTime: "bacaan 9 menit",
            tag: "Standar Pemetaan"
          }
        ]
      },
      {
        category: "⚡ Optimasi Akurasi & Pemecahan Masalah",
        description: "Teknik praktis mengkalibrasi sensor perangkat keras, mengatasi lokasi yang salah, dan menghindari gangguan sinyal.",
        guides: [
          {
            title: "Cara Meningkatkan Akurasi GPS di iPhone, Android & Desktop",
            description: "Teknik langkah demi langkah menghilangkan interferensi multipath, mengkalibrasi sensor kompas, dan mengoptimalkan kinerja GNSS perangkat.",
            url: "/guides/improve-gps-accuracy/",
            icon: "⚡",
            readTime: "bacaan 8 menit",
            tag: "Kalibrasi"
          },
          {
            title: "Mengapa Lokasi Saya Salah? Panduan Pemecahan Masalah Lengkap",
            description: "Perbaiki pembacaan lokasi yang tidak akurat akibat VPN, basis data BSSID router Wi-Fi yang usang, dan routing proxy ISP.",
            url: "/guides/wrong-location/",
            icon: "🔧",
            readTime: "bacaan 8 menit",
            tag: "Pemecahan Masalah"
          },
          {
            title: "Akurasi Geolokasi IP: Cara Kerja GeoIP & Mengapa Gagal",
            description: "Bagaimana penyedia GeoIP (MaxMind, DB-IP) memetakan alamat IP ke kota dan mengapa pencarian IP secara statistik tidak bersifat fisik.",
            url: "/guides/ip-geolocation-accuracy/",
            icon: "📡",
            readTime: "bacaan 8 menit",
            tag: "GeoIP Jaringan"
          }
        ]
      },
      {
        category: "🔒 Privasi, Pengembangan Web & Pengujian",
        description: "Panduan integrasi untuk pengembang, pengujian lokasi tiruan, dan cetak biru keamanan privasi data lokasi.",
        guides: [
          {
            title: "HTML5 Geolocation API: Panduan Pengembang Web & Pengguna",
            description: "Terapkan navigator.geolocation dalam JavaScript dengan flag akurasi tinggi, penanganan timeout, dan kebijakan izin.",
            url: "/guides/browser-geolocation-api-guide/",
            icon: "💻",
            readTime: "bacaan 9 menit",
            tag: "Panduan Pengembang"
          },
          {
            title: "Cara Berbagi Lokasi dengan Aman: Panduan Lengkap",
            description: "Bagikan pergerakan langsung atau koordinat statis di iPhone, Android, WhatsApp, Google Maps, dan kode QR peramban dengan aman.",
            url: "/guides/how-to-share-location/",
            icon: "🔗",
            readTime: "bacaan 7 menit",
            tag: "Keamanan & Berbagi"
          },
          {
            title: "Privasi & Keamanan GPS: Siapa yang Melacak Lokasi Anda & Cara Menghentikannya",
            description: "Audit izin aplikasi, hapus geotag EXIF foto, dan bertahan dari pelacakan menara seluler serta beacon iklan di latar belakang.",
            url: "/guides/gps-privacy-and-security/",
            icon: "🔒",
            readTime: "bacaan 8 menit",
            tag: "Pertahanan Privasi"
          },
          {
            title: "Cara Kerja Mock Location: Pengujian & Spoofing GPS untuk Pengembang",
            description: "Simulasikan koordinat menggunakan Mock Locations Android, pemutaran rute GPX Xcode, dan override sensor Chrome DevTools.",
            url: "/guides/how-to-fake-or-mock-location/",
            icon: "🧪",
            readTime: "bacaan 8 menit",
            tag: "Pengujian QA"
          }
        ]
      }
    ]
  }
};
