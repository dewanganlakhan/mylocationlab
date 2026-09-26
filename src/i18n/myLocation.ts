/**
 * Multilingual Data for /my-location/ Primary Landing Page
 * Full professional translations for English, Spanish, French, German, and Portuguese.
 */

export interface MyLocationFaqItem {
  question: string;
  answer: string;
}

export interface MyLocationTranslation {
  metaTitle: string;
  metaDesc: string;
  pageTitle: string;
  pageTitleAccent: string;
  pageDesc: string;
  reviewedBy: string;
  reviewerTitle: string;
  cardTitle: string;
  btnGetLocation: string;
  detectingText: string;
  labels: {
    lat: string;
    lng: string;
    address: string;
    city: string;
    state: string;
    country: string;
    accuracy: string;
    altitude: string;
  };
  actions: {
    copy: string;
    share: string;
    openMaps: string;
  };
  exploreTitle: string;
  exploreTitleAccent: string;
  subNav: Array<{ label: string; href: string }>;
  article: {
    whatShowsTitle: string;
    whatShowsLead: string;
    whatShowsList: Array<{ bold: string; text: string }>;
    howDeterminedTitle: string;
    howDeterminedLead: string;
    howDeterminedList: Array<{ bold: string; text: string }>;
    privacyTitle: string;
    privacyText: string;
  };
  faqTitle: string;
  faqTitleAccent: string;
  faqItems: MyLocationFaqItem[];
}

export const myLocationTranslations: Record<string, MyLocationTranslation> = {
  en: {
    metaTitle: 'My Location — Find Where I Am Right Now | MyLocationLab',
    metaDesc: 'Find your current location instantly with GPS coordinates, full address, city, state, and country. See your exact position on an interactive map.',
    pageTitle: 'My',
    pageTitleAccent: 'Location',
    pageDesc: 'Find your exact current location with GPS coordinates, full address, and interactive map. Your location is processed entirely in your browser — we never store your data.',
    reviewedBy: 'MyLocationLab Editorial Team',
    reviewerTitle: 'Geospatial Content Reviewer',
    cardTitle: 'Your Current Location',
    btnGetLocation: '📍 Get My Location',
    detectingText: 'Detecting your location...',
    labels: {
      lat: 'Latitude',
      lng: 'Longitude',
      address: 'Full Address',
      city: 'City',
      state: 'State / Region',
      country: 'Country',
      accuracy: 'Accuracy',
      altitude: 'Altitude',
    },
    actions: {
      copy: '📋 Copy Coordinates',
      share: '🔗 Share',
      openMaps: '🗺️ Open in Maps',
    },
    exploreTitle: 'Explore Your Location',
    exploreTitleAccent: 'Details',
    subNav: [
      { label: 'My GPS Coordinates', href: '/my-location/gps/' },
      { label: 'My Coordinates', href: '/my-location/coordinates/' },
      { label: 'My Latitude & Longitude', href: '/my-location/latitude-longitude/' },
      { label: 'My Address', href: '/my-location/address/' },
      { label: 'My City', href: '/my-location/city/' },
      { label: 'My State', href: '/my-location/state/' },
      { label: 'My Country', href: '/my-location/country/' },
      { label: 'My IP Location', href: '/my-location/ip/' },
    ],
    article: {
      whatShowsTitle: 'What Does "My Location" Show?',
      whatShowsLead: 'When you click "Get My Location," we use your browser\'s built-in Geolocation API to determine your exact position. The data shown includes:',
      whatShowsList: [
        { bold: 'GPS Coordinates', text: 'Your precise latitude and longitude in decimal degrees format' },
        { bold: 'Full Address', text: 'Street address determined by reverse geocoding your coordinates' },
        { bold: 'City, State, Country', text: 'Administrative boundaries you\'re located within' },
        { bold: 'Accuracy Radius', text: 'How precise the GPS reading is (lower = better)' },
        { bold: 'Altitude', text: 'Your elevation above sea level (when available from GPS)' },
        { bold: 'Interactive Map', text: 'Visual representation of your position with zoom controls' },
      ],
      howDeterminedTitle: 'How We Determine Your Location',
      howDeterminedLead: 'Your location is determined using a combination of technologies available in your device:',
      howDeterminedList: [
        { bold: 'GPS', text: 'Satellite-based positioning, most accurate (3-5m outdoors)' },
        { bold: 'Wi-Fi Trilateration', text: 'Uses nearby Wi-Fi network IDs when GPS is unavailable' },
        { bold: 'Cellular Towers', text: 'Triangulates position using nearby cellular towers' },
        { bold: 'IP Geolocation', text: 'Fallback using your internet provider\'s registered location' },
      ],
      privacyTitle: 'Privacy & Data Protection',
      privacyText: 'Your privacy is paramount. Your location is processed entirely in your browser using the HTML5 Geolocation API. We do not store, track, or share your coordinates. When you close the page, the data is gone.',
    },
    faqTitle: 'Frequently Asked',
    faqTitleAccent: 'Questions',
    faqItems: [
      { question: 'How do I find my current location?', answer: 'This page detects your location <strong>automatically</strong> — your browser will ask for permission the first time you visit. Once granted, your exact GPS coordinates, address, city, state, and country are displayed instantly. If detection fails or you deny permission, a "Get My Location" button appears so you can retry manually.' },
      { question: 'Why does my browser ask for location permission?', answer: 'For your privacy, browsers require explicit permission before sharing your location with any website. This is a security feature — your location is only shared when you actively allow it. You can revoke permission at any time in your browser settings.' },
      { question: 'What information does "My Location" show?', answer: 'We show your <strong>latitude and longitude coordinates</strong>, full street address (via reverse geocoding), city, state/region, country, GPS accuracy radius, altitude (if available), and your position on an interactive map.' },
      { question: 'Is GPS location the same as IP location?', answer: 'No. GPS location uses satellite signals and is accurate to 3-10 meters. IP location uses your internet address and is typically only accurate to the city level (1-50 km).' },
    ],
  },

  es: {
    metaTitle: 'Mi Ubicación — Encuentra Dónde Estoy Ahora Mismo | MyLocationLab',
    metaDesc: 'Descubre tu ubicación actual al instante con coordenadas GPS, dirección postal completa, ciudad y mapa interactivo. 100% privado en tu navegador.',
    pageTitle: 'Mi',
    pageTitleAccent: 'Ubicación',
    pageDesc: 'Encuentra tu ubicación exacta con coordenadas GPS, dirección postal completa y mapa interactivo. Procesado 100% en tu navegador sin almacenar datos.',
    reviewedBy: 'Equipo Editorial de MyLocationLab',
    reviewerTitle: 'Especialista en Sistemas Geoespaciales',
    cardTitle: 'Tu Ubicación Actual',
    btnGetLocation: '📍 Obtener Mi Ubicación',
    detectingText: 'Detectando tu ubicación...',
    labels: {
      lat: 'Latitud',
      lng: 'Longitud',
      address: 'Dirección Completa',
      city: 'Ciudad',
      state: 'Estado / Región',
      country: 'País',
      accuracy: 'Precisión',
      altitude: 'Altitud',
    },
    actions: {
      copy: '📋 Copiar Coordenadas',
      share: '🔗 Compartir',
      openMaps: '🗺️ Abrir en Google Maps',
    },
    exploreTitle: 'Explora los Datos de Tu',
    exploreTitleAccent: 'Ubicación',
    subNav: [
      { label: 'Mis Coordenadas GPS', href: '/es/my-location/gps/' },
      { label: 'Mis Coordenadas', href: '/es/my-location/coordinates/' },
      { label: 'Mi Latitud y Longitud', href: '/es/my-location/latitude-longitude/' },
      { label: 'Mi Dirección Postal', href: '/es/my-location/address/' },
      { label: 'Mi Ciudad', href: '/es/my-location/city/' },
      { label: 'Mi Estado / Región', href: '/es/my-location/state/' },
      { label: 'Mi País', href: '/es/my-location/country/' },
      { label: 'Mi Ubicación por IP', href: '/es/my-location/ip/' },
    ],
    article: {
      whatShowsTitle: '¿Qué Información Muestra "Mi Ubicación"?',
      whatShowsLead: 'Al pulsar "Obtener Mi Ubicación", usamos la API de Geolocalización nativa de tu navegador para determinar tu posición exacta:',
      whatShowsList: [
        { bold: 'Coordenadas GPS', text: 'Tu latitud y longitud exactas en formato de grados decimales' },
        { bold: 'Dirección Completa', text: 'Nombre de calle y número obtenidos mediante geocodificación inversa' },
        { bold: 'Ciudad, Estado y País', text: 'Límites administrativos de la jurisdicción donde te encuentras' },
        { bold: 'Radio de Precisión', text: 'Margen de error reportado por los sensores de tu hardware' },
        { bold: 'Altitud y Elevación', text: 'Tu altura sobre el nivel medio del mar (cuando el GPS la emite)' },
        { bold: 'Mapa Interactivo', text: 'Representación visual con controles de zoom y satélite en tiempo real' },
      ],
      howDeterminedTitle: '¿Cómo Determinamos Tu Posición?',
      howDeterminedLead: 'Tu ubicación se obtiene combinando múltiples tecnologías de hardware y red:',
      howDeterminedList: [
        { bold: 'Satélites GNSS / GPS', text: 'Posicionamiento satelital de alta precisión (3-5 m en exteriores)' },
        { bold: 'Trilateración Wi-Fi', text: 'Identificación de redes Wi-Fi cercanas cuando el GPS no tiene cobertura' },
        { bold: 'Antenas Celulares', text: 'Triangulación de señal mediante torres de telefonía móvil' },
        { bold: 'Geolocalización por IP', text: 'Método de respaldo que estima la ciudad mediante tu proveedor de internet' },
      ],
      privacyTitle: 'Privacidad y Seguridad Absoluta',
      privacyText: 'Tu privacidad es fundamental. Tu ubicación se calcula únicamente en tu propio navegador mediante la API HTML5. Jamás almacenamos ni transmitimos tus coordenadas a servidores.',
    },
    faqTitle: 'Preguntas',
    faqTitleAccent: 'Frecuentes',
    faqItems: [
      { question: '¿Cómo obtengo mi ubicación actual?', answer: 'Esta página detecta tu posición <strong>automáticamente</strong> al autorizar el permiso en el navegador. Se mostrarán de inmediato tus coordenadas GPS, dirección postal, ciudad y país.' },
      { question: '¿Por qué mi navegador pide permiso de ubicación?', answer: 'Por razones de seguridad y privacidad, los navegadores exigen tu autorización expresa antes de compartir coordenadas con cualquier sitio web.' },
      { question: '¿Es lo mismo la ubicación GPS que la ubicación por IP?', answer: 'No. La ubicación GPS utiliza satélites con precisión métrica (3 a 10 metros), mientras que la IP solo aproxima a nivel ciudad (1 a 50 km).' },
    ],
  },

  fr: {
    metaTitle: 'Ma Position — Trouver Où Je Suis En Ce Moment | MyLocationLab',
    metaDesc: 'Trouvez instantanément votre position exacte avec coordonnées GPS, adresse complète, ville et pays sur une carte interactive. 100% privé.',
    pageTitle: 'Ma',
    pageTitleAccent: 'Position',
    pageDesc: 'Trouvez votre position actuelle exacte avec coordonnées GPS, adresse postale et carte interactive. Traitement 100% local dans votre navigateur.',
    reviewedBy: 'Équipe Éditoriale MyLocationLab',
    reviewerTitle: 'Expert en Systèmes Géospatiaux',
    cardTitle: 'Votre Position Actuelle',
    btnGetLocation: '📍 Obtenir Ma Position',
    detectingText: 'Détection de votre position...',
    labels: {
      lat: 'Latitude',
      lng: 'Longitude',
      address: 'Adresse Complète',
      city: 'Ville',
      state: 'Région / Dép.',
      country: 'Pays',
      accuracy: 'Précision',
      altitude: 'Altitude',
    },
    actions: {
      copy: '📋 Copier les Coordonnées',
      share: '🔗 Partager',
      openMaps: '🗺️ Ouvrir dans Google Maps',
    },
    exploreTitle: 'Explorez Votre',
    exploreTitleAccent: 'Position',
    subNav: [
      { label: 'Mes Coordonnées GPS', href: '/fr/my-location/gps/' },
      { label: 'Mes Coordonnées', href: '/fr/my-location/coordinates/' },
      { label: 'Ma Latitude et Longitude', href: '/fr/my-location/latitude-longitude/' },
      { label: 'Mon Adresse Postale', href: '/fr/my-location/address/' },
      { label: 'Ma Ville', href: '/fr/my-location/city/' },
      { label: 'Ma Région', href: '/fr/my-location/state/' },
      { label: 'Mon Pays', href: '/fr/my-location/country/' },
      { label: 'Ma Position par IP', href: '/fr/my-location/ip/' },
    ],
    article: {
      whatShowsTitle: 'Que Révèle "Ma Position" ?',
      whatShowsLead: 'En cliquant sur "Obtenir Ma Position", l\'API native du navigateur détermine vos paramètres télémétriques :',
      whatShowsList: [
        { bold: 'Coordonnées GPS', text: 'Votre latitude et longitude au format degrés décimaux' },
        { bold: 'Adresse Postale', text: 'Numéro et voie résolus par géocodage inverse' },
        { bold: 'Ville, Région et Pays', text: 'Limites administratives territoriales' },
        { bold: 'Rayon de Précision', text: 'Indice de fiabilité des capteurs physiques de l\'appareil' },
        { bold: 'Altitude', text: 'Élévation mesurée au-dessus du niveau de la mer' },
        { bold: 'Carte Interactive', text: 'Rendu vectoriel fluide avec zoom et recentrage instantané' },
      ],
      howDeterminedTitle: 'Comment Est Déterminée Votre Position ?',
      howDeterminedLead: 'Plusieurs technologies complémentaires sont sollicitées par votre appareil :',
      howDeterminedList: [
        { bold: 'Puce GNSS / GPS', text: 'Trilatération par satellites (3 à 5 mètres en extérieur)' },
        { bold: 'Bornes Wi-Fi', text: 'Triangulation des réseaux Wi-Fi environnants' },
        { bold: 'Antennes Relais', text: 'Positionnement basé sur la force du signal mobile' },
        { bold: 'Géolocalisation IP', text: 'Solution de secours déduisant la ville via le fournisseur d\'accès' },
      ],
      privacyTitle: 'Confidentialité et Sécurité des Données',
      privacyText: 'Vos données géographiques restent strictement sur votre appareil. Aucun enregistrement de coordonnées n\'est réalisé sur nos serveurs.',
    },
    faqTitle: 'Foire Aux',
    faqTitleAccent: 'Questions',
    faqItems: [
      { question: 'Comment trouver ma position actuelle ?', answer: 'Cette page détecte automatiquement votre position après avoir validé l\'invitation du navigateur.' },
      { question: 'Pourquoi une autorisation est-elle demandée ?', answer: 'Par mesure de protection de la vie privée, les navigateurs interdisent tout accès aux coordonnées sans accord explicite.' },
      { question: 'Quelle est la différence entre GPS et IP ?', answer: 'Le GPS est précis à quelques mètres grâce aux satellites, tandis que l\'adresse IP donne une approximation à l\'échelle d\'une ville.' },
    ],
  },

  de: {
    metaTitle: 'Mein Standort — Wo Bin Ich Jetzt Sofort Finden | MyLocationLab',
    metaDesc: 'Ermitteln Sie Ihren Standort sofort mit GPS-Koordinaten, vollständiger Adresse, Stadt und interaktiver Karte. 100% vertraulich im Browser.',
    pageTitle: 'Mein',
    pageTitleAccent: 'Standort',
    pageDesc: 'Ermitteln Sie Ihre exakte Position mit GPS-Koordinaten, vollständiger Adresse und Live-Karte. Reine clientseitige Berechnung ohne Speicherung.',
    reviewedBy: 'MyLocationLab Redaktionsteam',
    reviewerTitle: 'Experte für Geoinformationssysteme',
    cardTitle: 'Ihr Aktueller Standort',
    btnGetLocation: '📍 Meinen Standort Abrufen',
    detectingText: 'Standort wird ermittelt...',
    labels: {
      lat: 'Breitengrad',
      lng: 'Längengrad',
      address: 'Vollständige Adresse',
      city: 'Stadt',
      state: 'Bundesland / Region',
      country: 'Land',
      accuracy: 'Genauigkeit',
      altitude: 'Höhe',
    },
    actions: {
      copy: '📋 Koordinaten Kopieren',
      share: '🔗 Teilen',
      openMaps: '🗺️ In Google Maps Öffnen',
    },
    exploreTitle: 'Erkunden Sie Ihre',
    exploreTitleAccent: 'Standortdaten',
    subNav: [
      { label: 'Meine GPS-Koordinaten', href: '/de/my-location/gps/' },
      { label: 'Meine Koordinaten', href: '/de/my-location/coordinates/' },
      { label: 'Breitengrad & Längengrad', href: '/de/my-location/latitude-longitude/' },
      { label: 'Meine Straßenadresse', href: '/de/my-location/address/' },
      { label: 'Meine Stadt', href: '/de/my-location/city/' },
      { label: 'Mein Bundesland', href: '/de/my-location/state/' },
      { label: 'Mein Land', href: '/de/my-location/country/' },
      { label: 'Mein IP-Standort', href: '/de/my-location/ip/' },
    ],
    article: {
      whatShowsTitle: 'Welche Informationen Zeigt "Mein Standort"?',
      whatShowsLead: 'Beim Klick auf "Meinen Standort Abrufen" fragt der Browser die Hardware-Schnittstellen ab:',
      whatShowsList: [
        { bold: 'GPS-Koordinaten', text: 'Exakte Werte für Latitude und Longitude in Dezimalgrad' },
        { bold: 'Vollständige Adresse', text: 'Straße und Hausnummer ermittelt durch Reverse-Geocoding' },
        { bold: 'Stadt, Bundesland und Land', text: 'Ihre aktuelle administrative Gebietskörperschaft' },
        { bold: 'Genauigkeitsradius', text: 'Messunsicherheit gemeldet von den Gerätesensoren' },
        { bold: 'Höhe über dem Meeresspiegel', text: 'Vertikale Elevation über Normalnull' },
        { bold: 'Interaktive Karte', text: 'Vektorbasiertes Kartenmodul mit flexiblen Zoomstufen' },
      ],
      howDeterminedTitle: 'Wie Wird Ihre Position Ermittelt?',
      howDeterminedLead: 'Ihr Endgerät nutzt ein Zusammenspiel moderner Lokalisierungstechniken:',
      howDeterminedList: [
        { bold: 'GNSS / GPS-Satelliten', text: 'Satellitenortung mit 3-5 Metern Genauigkeit im Freien' },
        { bold: 'Wi-Fi-Ortung', text: 'Abgleich von WLAN-Netzwerken in der Umgebung' },
        { bold: 'Mobilfunk-Triangulation', text: 'Peilung über Mobilfunkbasisstationen' },
        { bold: 'IP-Geolokalisierung', text: 'Rückfallebene zur ungefähren Zuordnung auf Stadtebene' },
      ],
      privacyTitle: 'Datenschutz & Vertraulichkeit',
      privacyText: 'Der Schutz Ihrer Privatsphäre steht an erster Stelle. Alle Berechnungen laufen ausschließlich lokal im Browser. Es werden keinerlei Standortdaten auf unseren Servern gespeichert.',
    },
    faqTitle: 'Häufig Gestellte',
    faqTitleAccent: 'Fragen',
    faqItems: [
      { question: 'Wie finde ich meinen aktuellen Standort?', answer: 'Diese Seite erkennt Ihren Standort automatisch nach Bestätigung der Browserabfrage.' },
      { question: 'Warum benötigt der Browser eine Berechtigung?', answer: 'Aus Sicherheitsgründen verlangen Webstandards eine ausdrückliche Nutzerzustimmung, bevor Geodaten freigegeben werden.' },
      { question: 'Was ist der Unterschied zwischen GPS und IP-Ortung?', answer: 'GPS liefert metergenaue Koordinaten via Satellit, während IP-Ortung nur eine ungefähre Regionsangabe bietet.' },
    ],
  },

  pt: {
    metaTitle: 'Minha Localização — Onde Estou Agora? | MyLocationLab',
    metaDesc: 'Descubra sua localização atual imediatamente com coordenadas GPS, endereço completo, cidade e mapa interativo. 100% privado.',
    pageTitle: 'Minha',
    pageTitleAccent: 'Localização',
    pageDesc: 'Descubra sua posição exata com coordenadas GPS, endereço completo e mapa interativo. Processado diretamente no seu navegador.',
    reviewedBy: 'Equipe Editorial MyLocationLab',
    reviewerTitle: 'Especialista em Sistemas Geoespaciais',
    cardTitle: 'Sua Localização Atual',
    btnGetLocation: '📍 Obter Minha Localização',
    detectingText: 'Detectando sua localização...',
    labels: {
      lat: 'Latitude',
      lng: 'Longitude',
      address: 'Endereço Completo',
      city: 'Cidade',
      state: 'Estado / Região',
      country: 'País',
      accuracy: 'Precisão',
      altitude: 'Altitude',
    },
    actions: {
      copy: '📋 Copiar Coordenadas',
      share: '🔗 Compartilhar',
      openMaps: '🗺️ Abrir no Google Maps',
    },
    exploreTitle: 'Explore os Dados da Sua',
    exploreTitleAccent: 'Localização',
    subNav: [
      { label: 'Minhas Coordenadas GPS', href: '/pt/my-location/gps/' },
      { label: 'Minhas Coordenadas', href: '/pt/my-location/coordinates/' },
      { label: 'Minha Latitude e Longitude', href: '/pt/my-location/latitude-longitude/' },
      { label: 'Meu Endereço Completo', href: '/pt/my-location/address/' },
      { label: 'Minha Cidade', href: '/pt/my-location/city/' },
      { label: 'Meu Estado', href: '/pt/my-location/state/' },
      { label: 'Meu País', href: '/pt/my-location/country/' },
      { label: 'Minha Localização por IP', href: '/pt/my-location/ip/' },
    ],
    article: {
      whatShowsTitle: 'O Que a Página "Minha Localização" Mostra?',
      whatShowsLead: 'Ao clicar em "Obter Minha Localização", utilizamos a API de Geolocalização do navegador para determinar seus dados exatos:',
      whatShowsList: [
        { bold: 'Coordenadas GPS', text: 'Sua latitude e longitude exatas em formato de graus decimais' },
        { bold: 'Endereço Completo', text: 'Rua, número e bairro resolvidos por geocodificação reversa' },
        { bold: 'Cidade, Estado e País', text: 'Limites administrativos do território onde você está' },
        { bold: 'Raio de Precisão', text: 'Margem de erro calculada pelos sensores do aparelho' },
        { bold: 'Altitude e Elevação', text: 'Altura em relação ao nível médio do mar' },
        { bold: 'Mapa Interativo', text: 'Visualização vetorial com controles de zoom em tempo real' },
      ],
      howDeterminedTitle: 'Como Determinamos Sua Posição?',
      howDeterminedLead: 'Seu dispositivo combina diversas tecnologias integradas:',
      howDeterminedList: [
        { bold: 'Satélites GNSS / GPS', text: 'Posicionamento via satélite (3 a 5 metros em áreas abertas)' },
        { bold: 'Redes Wi-Fi', text: 'Triangulação por identificação de redes Wi-Fi próximas' },
        { bold: 'Torres Celulares', text: 'Estimativa baseada na antena de telefonia conectada' },
        { bold: 'Geolocalização por IP', text: 'Método alternativo que aproxima a cidade através do provedor de internet' },
      ],
      privacyTitle: 'Privacidade e Proteção de Dados',
      privacyText: 'Sua privacidade é essencial. Suas coordenadas são calculadas localmente no seu navegador e jamais gravadas em servidores.',
    },
    faqTitle: 'Perguntas',
    faqTitleAccent: 'Frequentes',
    faqItems: [
      { question: 'Como encontrar minha localização atual?', answer: 'Esta página detecta sua posição automaticamente assim que você concede permissão no navegador.' },
      { question: 'Por que o navegador pede permissão?', answer: 'Por proteção à privacidade, os navegadores exigem consentimento antes de emitir dados geográficos.' },
      { question: 'Qual a diferença entre GPS e localização por IP?', answer: 'O GPS tem precisão de poucos metros via satélite; a IP é apenas uma estimativa a nível de cidade.' },
    ],
  },
};
