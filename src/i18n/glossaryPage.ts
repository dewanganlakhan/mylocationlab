export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface GlossaryPageContent {
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  crossLinkTitle: string;
  tool1Btn: string;
  tool2Btn: string;
  guideBtn: string;
  terms: GlossaryTerm[];
}

export const glossaryPageTranslations: Record<string, GlossaryPageContent> = {
  en: {
    metaTitle: "GPS & Geospatial Glossary — Definitions | MyLocationLab",
    metaDescription: "Master the terminology of GPS, geodesy, and web mapping: Trilateration, WGS 84, HDOP, A-GPS, Reverse Geocoding, Haversine formula, and Datums.",
    breadcrumb: "Glossary",
    titlePrefix: "Geospatial & GPS",
    titleHighlight: "Glossary",
    subtitle: "Definitive definitions of core concepts in satellite navigation, geodetic datums, and spatial computing.",
    crossLinkTitle: "Apply These Concepts With Live Tools",
    tool1Btn: "🔀 Coordinate Converter",
    tool2Btn: "🎯 Test Live HDOP",
    guideBtn: "📡 How GPS Works Guide",
    terms: [
      {
        term: "Assisted GPS (A-GPS)",
        definition: "A system that uses cellular network base stations and internet data connections to rapidly download satellite orbital information (ephemeris), reducing Time-to-First-Fix (TTFF) from minutes to seconds."
      },
      {
        term: "BSSID (Basic Service Set Identifier)",
        definition: "The unique MAC address of a Wi-Fi router. Mobile operating systems cross-reference detected BSSIDs against global geospatial databases to determine approximate indoor locations where GPS signals cannot penetrate."
      },
      {
        term: "Datum (Geodetic Datum)",
        definition: "A reference coordinate system and geometric model of Earth used to accurately measure positions on its surface. The standard global datum used by GPS is WGS 84."
      },
      {
        term: "Decimal Degrees (DD)",
        definition: "A standard notation format representing geographic coordinates as decimal fractions of a degree (e.g. 37.7749, -122.4194), universally preferred in web mapping APIs and GIS software."
      },
      {
        term: "Dilution of Precision (DOP / HDOP)",
        definition: "A mathematical multiplier describing the geometric configuration of satellites in the sky. Lower values (e.g. HDOP < 2.0) indicate widely dispersed satellites and higher positional accuracy."
      },
      {
        term: "Ephemeris",
        definition: "Precise mathematical parameters continuously broadcast by GPS satellites describing their exact current orbital trajectory, velocity, and clock corrections."
      },
      {
        term: "Geocoding",
        definition: "The computational process of converting descriptive human address text (such as '10 Downing St, London') into spatial geographic coordinates (latitude and longitude)."
      },
      {
        term: "Geofencing",
        definition: "A virtual geographic boundary established around a specific coordinate point using a defined radius. Mobile devices trigger actions when entering or exiting the perimeter."
      },
      {
        term: "Haversine Formula",
        definition: "An astronomical and navigation equation that calculates the great-circle distance between two points on a spherical Earth from their latitudes and longitudes."
      },
      {
        term: "IP Geolocation",
        definition: "The technique of estimating an internet device's physical geographic location by querying commercial databases that map public IP address ranges to regional ISP routers."
      },
      {
        term: "Reverse Geocoding",
        definition: "The spatial process of querying a mapping database with latitude and longitude coordinates to find the nearest human-readable street address, city, and country."
      },
      {
        term: "Trilateration",
        definition: "A geometric positioning method that computes an unknown position by measuring distances from at least three known reference points (satellites or radio towers)."
      },
      {
        term: "WGS 84 (World Geodetic System 1984)",
        definition: "The global standard geodetic reference frame (EPSG:4326) established by the U.S. National Geospatial-Intelligence Agency, defining the mathematical reference ellipsoid for GPS."
      }
    ]
  },
  es: {
    metaTitle: "Glosario Geoespacial y GPS — Términos y Definiciones | MyLocationLab",
    metaDescription: "Domine la terminología de GPS, geodesia y cartografía: Trilateración, WGS 84, HDOP, A-GPS, Geocodificación inversa, fórmula Haversine y Dátums.",
    breadcrumb: "Glosario",
    titlePrefix: "Glosario Geoespacial y",
    titleHighlight: "GPS",
    subtitle: "Definiciones de referencia sobre conceptos clave en navegación por satélite, dátums geodésicos y computación espacial.",
    crossLinkTitle: "Aplique estos conceptos con herramientas en vivo",
    tool1Btn: "🔀 Conversor de Coordenadas",
    tool2Btn: "🎯 Probar HDOP en Vivo",
    guideBtn: "📡 Guía de Cómo Funciona el GPS",
    terms: [
      {
        term: "GPS Asistido (A-GPS)",
        definition: "Sistema que aprovecha antenas de telefonía móvil y conexiones de datos para descargar las efemérides orbitales satelitales, reduciendo el tiempo de primera fijación (TTFF) de varios minutos a pocos segundos."
      },
      {
        term: "BSSID (Basic Service Set Identifier)",
        definition: "Dirección MAC única de un router Wi-Fi. Los sistemas operativos móviles contrastan los BSSID detectados contra bases geoespaciales globales para estimar la posición en interiores."
      },
      {
        term: "Dátum (Dátum Geodésico)",
        definition: "Sistema de referencia de coordenadas y modelo matemático de la Tierra empleado para medir posiciones sobre su superficie. El estándar universal del GPS es WGS 84."
      },
      {
        term: "Grados Decimales (DD)",
        definition: "Formato numérico estándar que representa coordenadas como fracciones decimales de grado (ej. 40.4167, -3.7037), preferido universalmente en APIs cartográficas y software SIG."
      },
      {
        term: "Dilución de Precisión (DOP / HDOP)",
        definition: "Multiplicador geométrico derivado de la disposición angular de los satélites visibles. Valores más bajos (HDOP < 2.0) indican satélites bien distribuidos y mayor precisión."
      },
      {
        term: "Efemérides",
        definition: "Conjunto de parámetros matemáticos transmitidos continuamente por satélites GNSS que especifican su trayectoria orbital exacta, velocidad y corrección de reloj atómico."
      },
      {
        term: "Geocodificación Directa",
        definition: "Proceso informático de convertir direcciones de texto escritas (como 'Paseo de la Castellana 1, Madrid') en coordenadas espaciales (latitud y longitud)."
      },
      {
        term: "Geovalla (Geofencing)",
        definition: "Perímetro geográfico virtual delimitado alrededor de un punto de coordenadas con un radio específico, que activa eventos al entrar o salir de su área."
      },
      {
        term: "Fórmula de Haversine",
        definition: "Ecuación trigonométrica que calcula la distancia ortodrómica sobre un círculo máximo entre dos puntos de una esfera a partir de sus latitudes y longitudes."
      },
      {
        term: "Geolocalización por IP",
        definition: "Método para estimar la ubicación aproximada de un dispositivo mediante la consulta de bases de datos que asignan bloques de direcciones IP públicas a centrales de proveedores."
      },
      {
        term: "Geocodificación Inversa",
        definition: "Consulta espacial que transforma un par de coordenadas numéricas (latitud/longitud) en la dirección postal, calle y número más cercanos."
      },
      {
        term: "Trilateración",
        definition: "Método geométrico de posicionamiento que calcula un punto desconocido midiendo las distancias relativas hacia al menos tres puntos de referencia conocidos (satélites o antenas)."
      },
      {
        term: "WGS 84 (World Geodetic System 1984)",
        definition: "Marco de referencia geodésico global estándar (EPSG:4326) que define el elipsoide de referencia matemático universal utilizado por el sistema GPS."
      }
    ]
  },
  fr: {
    metaTitle: "Glossaire Géodésique & GPS — Définitions SIG | MyLocationLab",
    metaDescription: "Tous les termes du GPS et de la géomatique expliqués : Trilatération, WGS 84, HDOP, A-GPS, Géocodage inverse, formule de Haversine et Datums.",
    breadcrumb: "Glossaire",
    titlePrefix: "Glossaire Géospatial &",
    titleHighlight: "GPS",
    subtitle: "Définitions techniques de référence sur la navigation par satellite, les systèmes géodésiques et la géomatique moderne.",
    crossLinkTitle: "Mettez ces concepts en pratique",
    tool1Btn: "🔀 Convertisseur de Coordonnées",
    tool2Btn: "🎯 Tester le HDOP en Direct",
    guideBtn: "📡 Fonctionnement du GPS",
    terms: [
      {
        term: "GPS Assisté (A-GPS)",
        definition: "Dispositif exploitant les relais cellulaires et le réseau Internet pour télécharger rapidement les éphémérides des satellites, réduisant le temps de premier pointage (TTFF) de quelques minutes à quelques secondes."
      },
      {
        term: "BSSID (Identifiant de Service de Base)",
        definition: "Adresse MAC matérielle d'un point d'accès Wi-Fi. Les smartphones recoupent les BSSID détectés avec des référentiels mondiaux pour déterminer une localisation en intérieur."
      },
      {
        term: "Datum (Système Géodésique)",
        definition: "Modèle ellipsoïdal géométrique de référence servant de base aux coordonnées terrestres. Le standard mondial adopté par le GPS est le WGS 84."
      },
      {
        term: "Degrés Décimaux (DD)",
        definition: "Notation géographique exprimant la position sous forme de fractions décimales d'un degré (ex. 48.8566, 2.3522), standard universel des API cartographiques et des SIG."
      },
      {
        term: "Facteur de Perte de Précision (DOP / HDOP)",
        definition: "Multiplicateur mathématique reflétant la répartition géométrique des satellites en vue. Un HDOP inférieur à 2,0 indique une constellation favorable et une grande précision."
      },
      {
        term: "Éphémérides",
        definition: "Paramètres orbitaux précis diffusés en continu par chaque satellite GPS pour décrire sa trajectoire, sa vitesse et les dérives de son horloge atomique."
      },
      {
        term: "Géocodage Direct",
        definition: "Transformation algorithmique d'une adresse textuelle humaine en coordonnées géographiques précises (latitude et longitude)."
      },
      {
        term: "Géorepérage (Geofencing)",
        definition: "Périmètre virtuel circulaire ou polygonal défini autour d'un point géographique, déclenchant des notifications au franchissement de la zone."
      },
      {
        term: "Formule de Haversine",
        definition: "Formule mathématique de trigonométrie sphérique calculant la distance orthodromique minimale entre deux coordonnées sur le globe."
      },
      {
        term: "Géolocalisation IP",
        definition: "Estimation de la position d'un équipement par consultation de tables informatiques liant les plages d'adresses IP publiques aux routeurs régionaux des FAI."
      },
      {
        term: "Géocodage Inverse",
        definition: "Requête spatiale convertissant des coordonnées numériques de latitude et de longitude en adresse postale la plus proche."
      },
      {
        term: "Trilatération",
        definition: "Méthode géométrique de calcul d'une position par mesure des distances le séparant d'au moins trois émetteurs satellites connus."
      },
      {
        term: "WGS 84 (World Geodetic System 1984)",
        definition: "Système géodésique de référence mondial (EPSG:4326) définissant l'ellipsoïde de révolution et le centre de masse terrestre pour la navigation spatiale."
      }
    ]
  },
  de: {
    metaTitle: "GPS & Geodaten Glossar — Fachbegriffe | MyLocationLab",
    metaDescription: "Wichtige Begriffe der Satellitennavigation und Geodäsie: Trilateration, WGS 84, HDOP, A-GPS, Rückwärts-Geokodierung, Haversine-Formel und Bezugssysteme.",
    breadcrumb: "Glossar",
    titlePrefix: "Geodaten & GPS",
    titleHighlight: "Glossar",
    subtitle: "Fundierte Definitionen der wichtigsten Konzepte der Satellitennavigation, geodätischer Datums und GIS-Technologien.",
    crossLinkTitle: "Konzepte mit Live-Werkzeugen anwenden",
    tool1Btn: "🔀 Koordinaten-Umrechner",
    tool2Btn: "🎯 Live-HDOP testen",
    guideBtn: "📡 GPS-Funktionsweise",
    terms: [
      {
        term: "Assisted GPS (A-GPS)",
        definition: "Ein Verfahren, das Mobilfunknetze und Internetdaten nutzt, um Satelliten-Bahndaten (Ephemeriden) vorab zu laden, wodurch die Zeit bis zur ersten Positionsbestimmung (TTFF) drastisch sinkt."
      },
      {
        term: "BSSID (Basic Service Set Identifier)",
        definition: "Die eindeutige MAC-Adresse eines WLAN-Routers. Mobile Betriebssysteme gleichen empfangene BSSIDs mit globalen Datenbanken ab, um Innenräume ohne GPS zu lokalisieren."
      },
      {
        term: "Datum (Geodätisches Datum)",
        definition: "Ein Bezugssystem und mathematisches Erdmodell zur exakten Positionsbestimmung auf der Erdoberfläche. Das weltweite Standard-Datum für GPS ist WGS 84."
      },
      {
        term: "Dezimalgrad (DD)",
        definition: "Standardnotation für Geokoordinaten als Fließkommazahlen (z. B. 52.5200, 13.4050), bevorzugt in Web-Mapping-APIs und GIS-Systemen."
      },
      {
        term: "Dilution of Precision (DOP / HDOP)",
        definition: "Ein geometrischer Multiplikator für die Satellitenanordnung am Himmel. Niedrige Werte (HDOP < 2.0) signalisieren weit verteilte Satelliten und hohe Genauigkeit."
      },
      {
        term: "Ephemeriden",
        definition: "Präzise Bahnparameter, die GPS-Satelliten kontinuierlich senden, um ihre aktuelle Orbitalposition und Atomuhrkorrekturen zu übermitteln."
      },
      {
        term: "Geokodierung",
        definition: "Die Umwandlung von menschenlesbaren Adressen in räumliche Geokoordinaten (Breiten- und Längengrad)."
      },
      {
        term: "Geofencing",
        definition: "Ein virtueller geografischer Umkreis um einen festen Koordinatenpunkt, der Aktionen auslöst, sobald ein Mobilgerät die Grenze passiert."
      },
      {
        term: "Haversine-Formel",
        definition: "Eine trigonometrische Formel zur Berechnung der Großkreisdistanz (kürzeste Entfernung) zwischen zwei Punkten auf einer Kugel anhand von Koordinaten."
      },
      {
        term: "IP-Geolokalisierung",
        definition: "Die Schätzung des physischen Standorts eines Geräts über den Abgleich öffentlicher IP-Adressen mit Datenbanken regionaler Provider-Knoten."
      },
      {
        term: "Rückwärts-Geokodierung (Reverse Geocoding)",
        definition: "Das Ermitteln der nächstgelegenen Postadresse aus Breiten- und Längengraden über räumliche Datenbankabfragen."
      },
      {
        term: "Trilateration",
        definition: "Ein geometrisches Ortungsverfahren zur Bestimmung eines unbekannten Standorts über Abstandsmessungen zu mindestens drei bekannten Referenzpunkten."
      },
      {
        term: "WGS 84 (World Geodetic System 1984)",
        definition: "Das globale geodätische Referenzsystem (EPSG:4326), das das mathematische Referenzellipsoid für weltweite GPS-Messungen definiert."
      }
    ]
  },
  pt: {
    metaTitle: "Glossário de GPS e Geodésia — Definições Técnicas | MyLocationLab",
    metaDescription: "Terminologia essencial de posicionamento por satélite e SIG: Trilateração, WGS 84, HDOP, A-GPS, Geocodificação reversa, fórmula de Haversine e Datums.",
    breadcrumb: "Glossário",
    titlePrefix: "Glossário de GPS e",
    titleHighlight: "Geodésia",
    subtitle: "Definições técnicas e autorizadas dos principais conceitos em navegação orbital, referenciais geodésicos e cartografia digital.",
    crossLinkTitle: "Coloque estes conceitos em prática",
    tool1Btn: "🔀 Conversor de Coordenadas",
    tool2Btn: "🎯 Testar HDOP ao Vivo",
    guideBtn: "📡 Como Funciona o GPS",
    terms: [
      {
        term: "GPS Assistido (A-GPS)",
        definition: "Tecnologia que utiliza antenas celulares e conexões de rede para baixar previamente as efemérides dos satélites, reduzindo o tempo de captura inicial (TTFF) de minutos para segundos."
      },
      {
        term: "BSSID (Basic Service Set Identifier)",
        definition: "Endereço físico MAC de roteadores Wi-Fi. Os smartphones cruzam sinais BSSID com bancos globais para calcular o posicionamento em ambientes internos onde o GPS não penetra."
      },
      {
        term: "Datum (Datum Geodésico)",
        definition: "Sistema de coordenadas de referência e modelo elipsoidal da Terra adotado para mensurar pontos na superfície. O datum padrão do GPS é o WGS 84."
      },
      {
        term: "Graus Decimais (DD)",
        definition: "Formato numérico padrão que representa coordenadas como frações decimais (ex.: -23.5505, -46.6333), utilizado universalmente em APIs de mapas e softwares GIS."
      },
      {
        term: "Diluição de Precisão (DOP / HDOP)",
        definition: "Fator multiplicador matemático da geometria dos satélites visíveis. Valores baixos (HDOP < 2.0) indicam satélites bem espaçados no céu e maior precisão."
      },
      {
        term: "Efemérides",
        definition: "Parâmetros orbitais contínuos transmitidos por satélites GNSS informando suas trajetórias espaciais exatas, velocidades e desvios de relógio atômico."
      },
      {
        term: "Geocodificação Direta",
        definition: "Processo computacional de converter endereços textuais em coordenadas geográficas precisas (latitude e longitude)."
      },
      {
        term: "Cerca Eletrônica (Geofencing)",
        definition: "Delimitação virtual circular ou poligonal em torno de uma coordenada geográfica que dispara alertas ao ser transposta por aparelhos móveis."
      },
      {
        term: "Fórmula de Haversine",
        definition: "Equação trigonométrica esférica que calcula a distância de círculo máximo mais curta entre dois pontos terrestres a partir de suas coordenadas."
      },
      {
        term: "Geolocalização por IP",
        definition: "Estimativa da posição de um equipamento na internet através de consultas a tabelas que mapeiam blocos de IP até os roteadores das operadoras."
      },
      {
        term: "Geocodificação Reversa",
        definition: "Operação espacial que converte coordenadas numéricas de latitude e longitude no endereço com nome de rua e número mais próximo."
      },
      {
        term: "Trilateração",
        definition: "Método de posicionamento geométrico que calcula as coordenadas de um ponto desconhecido medindo distâncias até pelo menos três estações de referência conhecidas."
      },
      {
        term: "WGS 84 (World Geodetic System 1984)",
        definition: "Sistema geodésico de referência mundial (EPSG:4326) que especifica o elipsoide matemático adotado por toda a constelação de satélites GPS."
      }
    ]
  }
};
