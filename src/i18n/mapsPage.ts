export interface MapsPageContent {
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  eatRole: string;
  centerBtn: string;
  clearBtn: string;
  radiusLabel: string;
  radiusNone: string;
  selectedPoint: string;
  clickPrompt: string;
  copyBtn: string;
  copiedBtn: string;
  h2Projections: string;
  pProjections: string;
  h3Radius: string;
  pRadius: string;
  h2Connected: string;
  tool1Desc: string;
  tool2Desc: string;
  tool3Desc: string;
  tool4Desc: string;
}

export const mapsPageTranslations: Record<string, MapsPageContent> = {
  en: {
    metaTitle: "Interactive Location Map — Live GPS View | MyLocationLab",
    metaDescription: "Interactive fullscreen map of your location: switch layers, inspect coordinates by click, draw radius circles, measure distances.",
    breadcrumb: "Interactive Maps",
    titlePrefix: "Interactive Location",
    titleHighlight: "Map",
    subtitle: "Explore your live GPS position, inspect latitude and longitude by clicking anywhere, and visualize distance radius circles.",
    eatRole: "Geospatial Content Reviewer",
    centerBtn: "📍 Center on My Location",
    clearBtn: "🧹 Clear Markers",
    radiusLabel: "Radius Circle:",
    radiusNone: "None",
    selectedPoint: "📌 Selected Point:",
    clickPrompt: "Click anywhere on the map",
    copyBtn: "📋 Copy",
    copiedBtn: "✅ Copied",
    h2Projections: "Understanding Web Cartography and Map Projections",
    pProjections: "Modern online interactive maps utilize the Web Mercator projection (EPSG:3857). While your device's GNSS hardware collects coordinates in WGS-84 (EPSG:4326) ellipsoidal coordinates, the browser dynamically projects these spherical coordinates onto a planar 2D grid.",
    h3Radius: "How Radius Geofences Function",
    pRadius: "When you enable radius circles on this map, we compute a planar circle using the Haversine geodesic equation. This visual circle represents a true geodesic radius on the curved surface of the Earth.",
    h2Connected: "Explore Connected Geospatial Tools",
    tool1Desc: "Distance Calculator — Measure exact point-to-point distances across Earth.",
    tool2Desc: "Street Address Finder — Convert any map coordinate into a street address.",
    tool3Desc: "Coordinate Converter — Convert decimal degrees into DMS or UTM.",
    tool4Desc: "How GPS Works — Learn about satellite constellations and atomic clocks."
  },
  es: {
    metaTitle: "Mapa de Ubicación Interactivo — Vista GPS en Vivo | MyLocationLab",
    metaDescription: "Mapa interactivo a pantalla completa: explore coordenadas haciendo clic, dibuje círculos de radio y mida distancias.",
    breadcrumb: "Mapas Interactivos",
    titlePrefix: "Mapa Interactivo de",
    titleHighlight: "Ubicación",
    subtitle: "Explore su posición GPS en tiempo real, consulte latitud y longitud haciendo clic sobre cualquier punto y trace círculos de distancia.",
    eatRole: "Revisor de Cartografía y SIG",
    centerBtn: "📍 Centrar en Mi Posición",
    clearBtn: "🧹 Limpiar Marcadores",
    radiusLabel: "Círculo de Radio:",
    radiusNone: "Ninguno",
    selectedPoint: "📌 Punto Seleccionado:",
    clickPrompt: "Haga clic en cualquier lugar del mapa",
    copyBtn: "📋 Copiar",
    copiedBtn: "✅ Copiado",
    h2Projections: "Comprendiendo la Cartografía Web y Proyecciones",
    pProjections: "Los mapas web modernos emplean la proyección Web Mercator (EPSG:3857). Mientras que el chip GPS de su móvil obtiene datos en el sistema elipsoidal WGS-84 (EPSG:4326), el navegador proyecta estas coordenadas esféricas en una cuadrícula plana 2D.",
    h3Radius: "Cómo Funcionan los Círculos de Radio",
    pRadius: "Al habilitar círculos de distancia en el mapa, calculamos el radio geodésico exacto aplicando la fórmula trigonométrica de Haversine, compensando la distorsión cilíndrica de Mercator.",
    h2Connected: "Explore Herramientas Geoespaciales Relacionadas",
    tool1Desc: "Calculadora de Distancia — Mida distancias exactas de punto a punto.",
    tool2Desc: "Buscador de Direcciones — Convierta cualquier coordenada en una dirección.",
    tool3Desc: "Conversor de Coordenadas — Convierta grados decimales a DMS o UTM.",
    tool4Desc: "Cómo Funciona el GPS — Aprenda sobre constelaciones orbitales."
  },
  fr: {
    metaTitle: "Carte de Localisation Interactive — Vue GPS Direct | MyLocationLab",
    metaDescription: "Carte interactive plein écran de votre position : inspectez les coordonnées en un clic, tracez des rayons et mesurez des distances.",
    breadcrumb: "Cartes Interactives",
    titlePrefix: "Carte Interactive de",
    titleHighlight: "Position",
    subtitle: "Consultez votre position GPS en direct, inspectez latitude et longitude au clic et visualisez des cercles de rayon kilométriques.",
    eatRole: "Expert Cartographie & SIG",
    centerBtn: "📍 Centrer sur Ma Position",
    clearBtn: "🧹 Effacer les Marqueurs",
    radiusLabel: "Rayon de Distance :",
    radiusNone: "Aucun",
    selectedPoint: "📌 Point Sélectionné :",
    clickPrompt: "Cliquez sur la carte pour inspecter un point",
    copyBtn: "📋 Copier",
    copiedBtn: "✅ Copié",
    h2Projections: "Cartographie Web & Systèmes de Projection",
    pProjections: "Les cartes web en ligne exploitent la projection Web Mercator (EPSG:3857). Si les capteurs GNSS acquièrent les coordonnées dans le système géodésique WGS-84 (EPSG:4326), le navigateur projette dynamiquement ces données sphériques sur un pavage 2D.",
    h3Radius: "Fonctionnement des Cercles de Rayon Géodésiques",
    pRadius: "Lorsque vous activez un cercle de rayon, nous calculons la distance sphérique par la formule trigonométrique de Haversine, assurant une parfaite exactitude métrique sur la surface du globe.",
    h2Connected: "Outils Géospatiaux Liés",
    tool1Desc: "Calculateur de Distance — Mesurez la distance exacte entre deux points du globe.",
    tool2Desc: "Détecteur d'Adresse — Transformez n'importe quelle coordonnée en adresse postale.",
    tool3Desc: "Convertisseur de Coordonnées — Convertissez vos degrés décimaux en DMS ou UTM.",
    tool4Desc: "Comment Fonctionne le GPS — Comprenez la constellation de satellites."
  },
  de: {
    metaTitle: "Interaktive Standortkarte — Live-GPS-Ansicht | MyLocationLab",
    metaDescription: "Interaktive Vollbildkarte Ihres Standorts: Koordinaten per Klick prüfen, Umkreisradien einzeichnen und Distanzen vermessen.",
    breadcrumb: "Interaktive Karten",
    titlePrefix: "Interaktive",
    titleHighlight: "Standortkarte",
    subtitle: "Erkunden Sie Ihre Live-GPS-Position, rufen Sie Längen- und Breitengrade per Klick ab und visualisieren Sie Umkreisradien.",
    eatRole: "Geodaten- & Kartografie-Experte",
    centerBtn: "📍 Auf meinen Standort zentrieren",
    clearBtn: "🧹 Markierungen löschen",
    radiusLabel: "Umkreisradius:",
    radiusNone: "Keiner",
    selectedPoint: "📌 Gewählter Punkt:",
    clickPrompt: "Klicken Sie an eine beliebige Stelle auf der Karte",
    copyBtn: "📋 Kopieren",
    copiedBtn: "✅ Kopiert",
    h2Projections: "Webkartografie & Kartenprojektionen verstehen",
    pProjections: "Moderne digitale Webkarten nutzen die Web-Mercator-Projektion (EPSG:3857). Während GNSS-Sensoren Koordinaten im WGS-84-Referenzsystem (EPSG:4326) erfassen, projiziert der Browser diese Punkte auf ein planares 2D-Gitter.",
    h3Radius: "Funktionsweise geodätischer Umkreisradien",
    pRadius: "Umkreisradien auf dieser Karte werden über die Haversine-Formel berechnet. Dadurch bildet der Kreis einen echten geodätischen Abstand auf der gekrümmten Erdoberfläche ab.",
    h2Connected: "Verwandte Geotools entdecken",
    tool1Desc: "Entfernungsrechner — Punkt-zu-Punkt-Distanzen auf der Erde vermessen.",
    tool2Desc: "Adress-Finder — Beliebige Kartenpunkte in Straßenadressen umwandeln.",
    tool3Desc: "Koordinaten-Umrechner — Dezimalgrad in GMS oder UTM transformieren.",
    tool4Desc: "Wie GPS funktioniert — Satellitenkonstellationen und Atomuhren."
  },
  pt: {
    metaTitle: "Mapa Interativo de Localização — Vista GPS em Tempo Real | MyLocationLab",
    metaDescription: "Mapa interativo em tela cheia: inspecione coordenadas clicando no mapa, trace raios de distância e meça percursos.",
    breadcrumb: "Mapas Interativos",
    titlePrefix: "Mapa Interativo de",
    titleHighlight: "Localização",
    subtitle: "Visualize sua posição GPS ao vivo, descubra a latitude e longitude de qualquer lugar com um clique e desenhe círculos de distância.",
    eatRole: "Revisor Técnico de Geodésia",
    centerBtn: "📍 Centralizar na Minha Posição",
    clearBtn: "🧹 Limpar Marcadores",
    radiusLabel: "Círculo de Raio:",
    radiusNone: "Nenhum",
    selectedPoint: "📌 Ponto Selecionado:",
    clickPrompt: "Clique em qualquer ponto do mapa",
    copyBtn: "📋 Copiar",
    copiedBtn: "✅ Copiado",
    h2Projections: "Cartografia Digital e Projeções Cartográficas",
    pProjections: "Mapas interativos online utilizam a projeção Web Mercator (EPSG:3857). Embora o GPS obtenha dados no elipsoide WGS-84 (EPSG:4326), o navegador projeta essas coordenadas em uma grade plana 2D contínua.",
    h3Radius: "Como Operam os Círculos de Raio Geodésicos",
    pRadius: "Ao ativar círculos de raio neste mapa, calculamos a distância ortodrômica pela fórmula de Haversine, assegurando precisão métrica na superfície curva da Terra.",
    h2Connected: "Descubra Ferramentas Conectadas",
    tool1Desc: "Calculadora de Distância — Meça a distância exata entre pontos no globo.",
    tool2Desc: "Localizador de Endereço — Converta qualquer ponto do mapa em endereço com rua e número.",
    tool3Desc: "Conversor de Coordenadas — Transforme graus decimais em GMS ou UTM.",
    tool4Desc: "Como Funciona o GPS — Entenda as constelações de satélites."
  }
};
