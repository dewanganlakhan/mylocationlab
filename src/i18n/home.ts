/**
 * Multilingual Data for the Homepage / Main Geolocation Tool
 * Full professional translations for English, Spanish, French, German, and Portuguese.
 */

export interface HomeFaqItem {
  question: string;
  answer: string;
}

export interface HomeTranslation {
  metaTitle: string;
  metaDesc: string;
  heroBadge: string;
  heroTitle: string;
  heroTitleHighlight: string;
  heroSubtitle: string;
  btnGetLocation: string;
  btnBrowseTools: string;
  privacyBanner: string;
  telemetryTitle: string;
  telemetrySubtext: string;
  btnCopy: string;
  btnShare: string;
  btnOpenMaps: string;
  mapWaiting: string;
  mapStandby: string;
  s: {
    ready: string;
    acquiring: string;
    acquiringSub: string;
    locked: string;
    lockedDetail: string;
    gpsStatus: string;
    ipPill: string;
    ipSub: string;
    ipStatus: string;
    ipPrecision: string;
    noFix: string;
    failed: string;
    okBanner: string;
    ipBanner: string;
    copyNone: string;
    copied: string;
    decimal: string;
    meters: string;
    accuracyDevice: string;
    accuracyIp: string;
    altitudeNone: string;
    altitudeIpNone: string;
    addrFail: string;
    addrFallback: string;
    cityFallback: string;
    viaGps: string;
    county: string;
    global: string;
    metro: string;
    shareTitle: string;
    shareText: string;
  };
  labels: {
    latitude: string;
    longitude: string;
    streetAddress: string;
    city: string;
    state: string;
    accuracy: string;
    elevation: string;
    waiting: string;
    resolvingAddress: string;
    reverseGeocoded: string;
    deviceReported: string;
    aboveSeaLevel: string;
  };
  detailsSection: {
    subtag: string;
    title: string;
    titleAccent: string;
    desc: string;
    cards: Array<{ title: string; desc: string; link: string; href: string }>;
  };
  toolsSection: {
    subtag: string;
    title: string;
    titleAccent: string;
    desc: string;
    btnAll: string;
    cards: Array<{ title: string; desc: string; link: string; href: string }>;
  };
  guidesSection: {
    subtag: string;
    title: string;
    titleAccent: string;
    desc: string;
    cards: Array<{ title: string; desc: string; link: string; href: string }>;
  };
  faqSection: {
    subtag: string;
    title: string;
    titleAccent: string;
    desc: string;
    items: HomeFaqItem[];
  };
}

export const homeTranslations: Record<string, HomeTranslation> = {
  en: {
    metaTitle: 'Where Am I? Find My Location Instantly | MyLocationLab',
    metaDesc: 'Instantly find your current location: GPS coordinates, address, city, and map. 100% private, works in your browser, no app needed.',
    heroBadge: 'Free GPS Location Finder',
    heroTitle: 'Where Am I',
    heroTitleHighlight: 'Right Now?',
    heroSubtitle: 'Instantly find your current GPS location, coordinates, address, and see it on an interactive map. No app needed.',
    btnGetLocation: 'Get My Location',
    btnBrowseTools: 'Browse Tools',
    privacyBanner: 'Please allow location access when your browser asks for permission. Zero-Data Retention • 100% In-Browser',
    telemetryTitle: 'Your Location',
    telemetrySubtext: 'Detected automatically in your browser — no click needed.',
    btnCopy: 'Copy Coordinates',
    btnShare: 'Share Location',
    btnOpenMaps: 'Open in Maps',
    mapWaiting: 'Awaiting location fix',
    mapStandby: 'STANDBY',
    s: {
      ready: 'Ready when you are',
      acquiring: 'Finding your location…',
      acquiringSub: 'Asking your browser for a GPS fix…',
      locked: 'Location found',
      lockedDetail: 'Fix acquired with about {m} m accuracy.',
      gpsStatus: 'Located',
      ipPill: 'Approximate location',
      ipSub: 'GPS unavailable — showing an approximate location from your IP address.',
      ipStatus: 'Approximate (IP)',
      ipPrecision: 'Approximate (IP-level precision)',
      noFix: 'No location',
      failed: "Couldn't get your location. Please make sure location access is allowed.",
      okBanner: 'Location found. Nothing about you is stored on our servers.',
      ipBanner: 'Approximate location from your IP address. Nothing about you is stored on our servers.',
      copyNone: 'No location yet',
      copied: 'Copied!',
      decimal: 'Decimal',
      meters: '± {m} m',
      accuracyDevice: 'Reported by your device',
      accuracyIp: 'Estimated from your IP address',
      altitudeNone: 'Not reported by your device',
      altitudeIpNone: 'Not available from an IP lookup',
      addrFail: 'Address lookup unavailable',
      addrFallback: 'Resolved location',
      cityFallback: 'Detected city',
      viaGps: 'Resolved via GPS',
      county: 'County: {c}',
      global: 'Worldwide',
      metro: 'Metro area',
      shareTitle: 'My Location',
      shareText: 'My location coordinates: {lat}, {lng}'
    },
    labels: {
      latitude: 'LATITUDE',
      longitude: 'LONGITUDE',
      streetAddress: 'STREET ADDRESS',
      city: 'CITY',
      state: 'STATE / COUNTRY',
      accuracy: 'ACCURACY RADIUS',
      elevation: 'ELEVATION / ALTITUDE',
      waiting: 'Waiting for fix',
      resolvingAddress: 'Resolving your address automatically…',
      reverseGeocoded: 'Reverse Geocoded via OpenStreetMap Nominatim',
      deviceReported: 'Reported by your device',
      aboveSeaLevel: 'Above Mean Sea Level',
    },
    detailsSection: {
      subtag: 'DETAILED BREAKDOWNS',
      title: 'Explore Your',
      titleAccent: 'Location Details',
      desc: 'Dive deeper into specific aspects of your current location.',
      cards: [
        { title: 'My GPS Coordinates', desc: 'View your precise GPS position data.', link: 'Inspect GPS Data →', href: '/my-location/gps/' },
        { title: 'My Coordinates', desc: 'Get coordinates in multiple formats.', link: 'Explore Formats →', href: '/my-location/coordinates/' },
        { title: 'My Latitude & Longitude', desc: 'Exact lat/lng with map position.', link: 'Check Lat/Lng →', href: '/my-location/latitude-longitude/' },
        { title: 'My Address', desc: 'Find your full street address.', link: 'Resolve Address →', href: '/my-location/address/' },
        { title: 'My City', desc: 'What city are you currently in?', link: 'View City Info →', href: '/my-location/city/' },
        { title: 'My State', desc: 'Find your current state or region.', link: 'View State Boundary →', href: '/my-location/state/' },
        { title: 'My Country', desc: 'What country are you in right now?', link: 'View Country Data →', href: '/my-location/country/' },
        { title: 'My IP Location', desc: 'Location based on your IP address.', link: 'Resolve IP Geolocation →', href: '/my-location/ip/' },
      ],
    },
    toolsSection: {
      subtag: 'UTILITY SUITE',
      title: 'Location',
      titleAccent: 'Tools',
      desc: 'Free location utilities to find, convert, measure, and share coordinates.',
      btnAll: 'View All Tools',
      cards: [
        { title: 'GPS Coordinates Finder', desc: 'Find your exact GPS coordinates including latitude, longitude, and altitude in real-time.', link: 'Launch Tool →', href: '/tools/gps-coordinates/' },
        { title: 'Latitude Longitude Finder', desc: 'Get your precise latitude and longitude coordinates with interactive map selection.', link: 'Launch Tool →', href: '/tools/latitude-longitude/' },
        { title: 'Address Finder', desc: 'Find the full street address for any location or your current position using reverse geocoding.', link: 'Launch Tool →', href: '/tools/address-finder/' },
        { title: 'Reverse Geocoder', desc: 'Convert GPS coordinates into a human-readable street address instantly.', link: 'Launch Tool →', href: '/tools/reverse-geocoding/' },
        { title: 'Geocoder', desc: 'Convert any address, city, or place name into GPS coordinates.', link: 'Launch Tool →', href: '/tools/geocoding/' },
        { title: 'Distance Calculator', desc: 'Calculate the exact distance between two points on Earth using the Haversine formula.', link: 'Launch Tool →', href: '/tools/distance-calculator/' },
        { title: 'Coordinate Converter', desc: 'Convert coordinates between Decimal Degrees, DMS, UTM, and other formats.', link: 'Launch Tool →', href: '/tools/coordinate-converter/' },
        { title: 'Elevation Finder', desc: 'Find the elevation (altitude above sea level) for any location on Earth.', link: 'Launch Tool →', href: '/tools/elevation-finder/' },
      ],
    },
    guidesSection: {
      subtag: 'KNOWLEDGE BASE',
      title: 'Learn About',
      titleAccent: 'Location',
      desc: 'Understand how GPS works, improve accuracy, and troubleshoot issues.',
      cards: [
        { title: 'How GPS Location Works', desc: 'Learn how satellite trilateration calculates your position.', link: 'Read Guide →', href: '/guides/how-gps-location-works/' },
        { title: 'How to Improve GPS Accuracy', desc: 'Actionable tips to get more accurate location readings.', link: 'Read Optimization Guide →', href: '/guides/improve-gps-accuracy/' },
        { title: 'Fixing Wrong Location Issues', desc: 'Step-by-step troubleshooting for incorrect position reports.', link: 'Read Troubleshooting Guide →', href: '/guides/wrong-location/' },
        { title: 'Latitude & Longitude Explained', desc: 'Everything you need to know about geographic coordinates.', link: 'Explore Coordinate Formats →', href: '/guides/latitude-and-longitude-explained/' },
        { title: 'How to Share Your Location Safely', desc: 'Best practices for sharing coordinates while protecting privacy.', link: 'Generate Share Link →', href: '/guides/how-to-share-location/' },
        { title: 'GPS vs IP Location', desc: 'Understand the differences between GPS and IP-based location.', link: 'Read Comparison Matrix →', href: '/comparisons/gps-vs-ip-location/' },
      ],
    },
    faqSection: {
      subtag: 'ASSISTANCE & SECURITY',
      title: 'Frequently Asked',
      titleAccent: 'Questions',
      desc: 'Everything you need to know about browser GPS privacy, precision, and telemetry.',
      items: [
        {
          question: 'What is my current location?',
          answer: 'Click the <strong>"Get My Location"</strong> button above to instantly acquire your precise device telemetry via the W3C Geolocation API. We calculate your exact latitude, longitude, reverse-geocoded street address, administrative boundary, and 95% confidence radius on an interactive vector map.',
        },
        {
          question: 'How does this site find my location?',
          answer: 'We interface directly with your browser\'s native <strong>HTML5 Geolocation API</strong>. Your device synthesizes multi-constellation GNSS (GPS, GLONASS, Galileo, BeiDou), Wi-Fi BSSID trilateration, cellular tower IDs, and barometric altimeters to achieve high-precision coordinates.',
        },
        {
          question: 'Is my location data private?',
          answer: '<strong>100% In-Browser & Zero-Data Retention.</strong> Your coordinates and telemetry are computed locally on your client machine. Coordinates are never transmitted to or recorded on our backend servers, ensuring complete geospatial confidentiality.',
        },
        {
          question: 'Why is my location wrong?',
          answer: 'When GNSS satellite signals are obstructed indoors or in dense urban canyons, your operating system defaults to Wi-Fi positioning or ISP network routing nodes. Moving near an unobstructed window or switching on hardware location services immediately improves precision.',
        },
        {
          question: 'Can I find my location without GPS?',
          answer: 'Yes. In the absence of GNSS hardware, our engine initiates client-side IP-based resolver queries and local network geocoding to resolve your city-level geographic boundary within 15 to 40 kilometers.',
        },
      ],
    },
  },

  es: {
    metaTitle: '¿Dónde Estoy? Encuentra Tu Ubicación al Instante | MyLocationLab',
    metaDesc: 'Encuentra tu ubicación actual al instante: coordenadas GPS, dirección postal, ciudad y mapa interactivo. 100% privado en tu navegador, sin apps.',
    heroBadge: 'Localizador GPS Gratuito',
    heroTitle: '¿Dónde Estoy',
    heroTitleHighlight: 'Ahora Mismo?',
    heroSubtitle: 'Encuentra al instante tu ubicación GPS actual, coordenadas exactas, dirección postal y visualízalo en un mapa interactivo. Sin descargas.',
    btnGetLocation: 'Obtener Mi Ubicación',
    btnBrowseTools: 'Explorar Herramientas',
    privacyBanner: 'Por favor, permite el acceso a la ubicación cuando tu navegador lo solicite. Cero Retención de Datos • 100% en el Navegador',
    telemetryTitle: 'Tu Ubicación',
    telemetrySubtext: 'Detectada automáticamente en tu navegador, sin pulsar nada.',
    btnCopy: 'Copiar Coordenadas',
    btnShare: 'Compartir Ubicación',
    btnOpenMaps: 'Abrir en Google Maps',
    mapWaiting: 'Esperando señal de ubicación',
    mapStandby: 'EN ESPERA',
    s: {
      ready: 'Listo cuando usted quiera',
      acquiring: 'Buscando su ubicación…',
      acquiringSub: 'Solicitando una posición GPS a su navegador…',
      locked: 'Ubicación encontrada',
      lockedDetail: 'Posición obtenida con una precisión de unos {m} m.',
      gpsStatus: 'Ubicado',
      ipPill: 'Ubicación aproximada',
      ipSub: 'GPS no disponible: se muestra una ubicación aproximada según su dirección IP.',
      ipStatus: 'Aproximada (IP)',
      ipPrecision: 'Aproximada (precisión de IP)',
      noFix: 'Sin ubicación',
      failed: 'No se pudo obtener su ubicación. Compruebe que el acceso a la ubicación esté permitido.',
      okBanner: 'Ubicación encontrada. No guardamos nada sobre usted en nuestros servidores.',
      ipBanner: 'Ubicación aproximada a partir de su IP. No guardamos nada sobre usted en nuestros servidores.',
      copyNone: 'Aún sin ubicación',
      copied: '¡Copiado!',
      decimal: 'Decimal',
      meters: '± {m} m',
      accuracyDevice: 'Comunicado por su dispositivo',
      accuracyIp: 'Estimada a partir de su dirección IP',
      altitudeNone: 'No facilitada por su dispositivo',
      altitudeIpNone: 'No disponible mediante IP',
      addrFail: 'Búsqueda de dirección no disponible',
      addrFallback: 'Ubicación resuelta',
      cityFallback: 'Ciudad detectada',
      viaGps: 'Resuelta vía GPS',
      county: 'Condado: {c}',
      global: 'Mundial',
      metro: 'Área metropolitana',
      shareTitle: 'Mi Ubicación',
      shareText: 'Mis coordenadas de ubicación: {lat}, {lng}'
    },
    labels: {
      latitude: 'LATITUD',
      longitude: 'LONGITUD',
      streetAddress: 'DIRECCIÓN POSTAL',
      city: 'CIUDAD',
      state: 'ESTADO / PAÍS',
      accuracy: 'RADIO DE PRECISIÓN',
      elevation: 'ALTITUD / ELEVACIÓN',
      waiting: 'Esperando señal',
      resolvingAddress: 'Resolviendo tu dirección automáticamente…',
      reverseGeocoded: 'Geocodificado inverso vía OpenStreetMap Nominatim',
      deviceReported: 'Notificado por tu dispositivo',
      aboveSeaLevel: 'Sobre el Nivel Medio del Mar',
    },
    detailsSection: {
      subtag: 'DETALLES ESPECÍFICOS',
      title: 'Explora los Datos de Tu',
      titleAccent: 'Ubicación',
      desc: 'Consulta aspectos detallados de tu posición geográfica en tiempo real.',
      cards: [
        { title: 'Mis Coordenadas GPS', desc: 'Consulta tus datos exactos de posición satelital.', link: 'Inspeccionar Datos GPS →', href: '/es/my-location/gps/' },
        { title: 'Mis Coordenadas', desc: 'Obtén coordenadas en múltiples formatos cartográficos.', link: 'Explorar Formatos →', href: '/es/my-location/coordinates/' },
        { title: 'Mi Latitud y Longitud', desc: 'Valores exactos de latitud y longitud con mapa.', link: 'Ver Lat/Long →', href: '/es/my-location/latitude-longitude/' },
        { title: 'Mi Dirección Postal', desc: 'Encuentra la calle y número de tu ubicación.', link: 'Resolver Dirección →', href: '/es/my-location/address/' },
        { title: 'Mi Ciudad', desc: '¿En qué ciudad te encuentras actualmente?', link: 'Información de Ciudad →', href: '/es/my-location/city/' },
        { title: 'Mi Estado o Región', desc: 'Descubre tu estado, provincia o comunidad autónoma.', link: 'Ver Límites Estatales →', href: '/es/my-location/state/' },
        { title: 'Mi País', desc: 'Identifica el país y código territorial donde estás.', link: 'Ver Datos del País →', href: '/es/my-location/country/' },
        { title: 'Mi Ubicación por IP', desc: 'Ubicación aproximada deducida por tu conexión de red.', link: 'Resolver Geolocalización IP →', href: '/es/my-location/ip/' },
      ],
    },
    toolsSection: {
      subtag: 'SUITE DE HERRAMIENTAS',
      title: 'Herramientas de',
      titleAccent: 'Ubicación',
      desc: 'Utilidades gratuitas para encontrar, convertir, medir y compartir coordenadas geográficas.',
      btnAll: 'Ver Todas las Herramientas',
      cards: [
        { title: 'Buscador de Coordenadas GPS', desc: 'Encuentra tus coordenadas GPS exactas incluyendo latitud, longitud y altitud en tiempo real.', link: 'Abrir Herramienta →', href: '/es/tools/gps-coordinates/' },
        { title: 'Buscador de Latitud y Longitud', desc: 'Obtén tus coordenadas con selección interactiva sobre mapa vectorial.', link: 'Abrir Herramienta →', href: '/es/tools/latitude-longitude/' },
        { title: 'Buscador de Direcciones', desc: 'Obtén la dirección postal completa de cualquier lugar o de tu posición actual.', link: 'Abrir Herramienta →', href: '/es/tools/address-finder/' },
        { title: 'Geocodificador Inverso', desc: 'Convierte coordenadas GPS en una dirección legible por humanos al instante.', link: 'Abrir Herramienta →', href: '/es/tools/reverse-geocoding/' },
        { title: 'Geocodificador Directo', desc: 'Convierte cualquier dirección postal o nombre de ciudad en coordenadas GPS.', link: 'Abrir Herramienta →', href: '/es/tools/geocoding/' },
        { title: 'Calculadora de Distancias', desc: 'Calcula la distancia geodésica exacta entre dos puntos con la fórmula de Haversine.', link: 'Abrir Herramienta →', href: '/es/tools/distance-calculator/' },
        { title: 'Conversor de Coordenadas', desc: 'Convierte coordenadas entre Grados Decimales, GMS (DMS), UTM y MGRS.', link: 'Abrir Herramienta →', href: '/es/tools/coordinate-converter/' },
        { title: 'Buscador de Elevación', desc: 'Calcula la altitud y elevación sobre el nivel del mar en cualquier punto del planeta.', link: 'Abrir Herramienta →', href: '/es/tools/elevation-finder/' },
      ],
    },
    guidesSection: {
      subtag: 'BASE DE CONOCIMIENTO',
      title: 'Aprende Sobre',
      titleAccent: 'Geolocalización',
      desc: 'Entiende cómo funciona el GPS, optimiza la precisión y resuelve problemas técnicos.',
      cards: [
        { title: 'Cómo Funciona la Ubicación GPS', desc: 'Aprende cómo la trilateración satelital calcula tu posición exacta.', link: 'Leer Guía →', href: '/es/guides/how-gps-location-works/' },
        { title: 'Cómo Mejorar la Precisión GPS', desc: 'Consejos prácticos para obtener lecturas de posición mucho más precisas.', link: 'Leer Guía de Optimización →', href: '/es/guides/improve-gps-accuracy/' },
        { title: 'Solución a Ubicación Incorrecta', desc: 'Solución paso a paso cuando el mapa muestra una posición errónea.', link: 'Leer Guía de Soluciones →', href: '/es/guides/wrong-location/' },
        { title: 'Latitud y Longitud Explicadas', desc: 'Todo lo que necesitas comprender sobre los sistemas de coordenadas.', link: 'Explorar Formatos →', href: '/es/guides/latitude-and-longitude-explained/' },
        { title: 'Compartir Ubicación con Seguridad', desc: 'Mejores prácticas para enviar tus coordenadas protegiendo tu privacidad.', link: 'Crear Enlace Seguro →', href: '/es/guides/how-to-share-location/' },
        { title: 'GPS vs Ubicación por IP', desc: 'Diferencias clave de precisión entre geolocalización satelital e IP.', link: 'Ver Tabla Comparativa →', href: '/es/comparisons/gps-vs-ip-location/' },
      ],
    },
    faqSection: {
      subtag: 'ASISTENCIA Y SEGURIDAD',
      title: 'Preguntas',
      titleAccent: 'Frecuentes',
      desc: 'Todo lo que necesitas saber sobre privacidad GPS, precisión y telemetría en el navegador.',
      items: [
        {
          question: '¿Cuál es mi ubicación actual?',
          answer: 'Haz clic en el botón <strong>"Obtener Mi Ubicación"</strong> superior para consultar al instante los sensores de tu dispositivo mediante la API de Geolocalización W3C. Mostramos tu latitud, longitud, dirección exacta y radio de confianza en un mapa vectorial.',
        },
        {
          question: '¿Cómo encuentra este sitio mi posición?',
          answer: 'Nos conectamos directamente con la <strong>API de Geolocalización HTML5</strong> de tu navegador. Tu dispositivo combina satélites GNSS (GPS, Galileo, GLONASS), triangulación Wi-Fi BSSID y antenas celulares.',
        },
        {
          question: '¿Son privados mis datos de ubicación?',
          answer: '<strong>100% en el Navegador y Cero Registro en Servidores.</strong> Tus coordenadas se procesan de forma estrictamente local en tu dispositivo. Jamás guardamos ni transmitimos tus datos geográficos.',
        },
        {
          question: '¿Por qué mi ubicación es inexacta?',
          answer: 'Si estás en interiores o rodeado de edificios altos, la señal de los satélites GNSS puede bloquearse, recurriendo tu sistema a la red Wi-Fi o al proveedor de internet (ISP). Acercarte a una ventana mejora de inmediato la precisión.',
        },
        {
          question: '¿Puedo conocer mi ubicación sin señal GPS?',
          answer: 'Sí. A falta de chip GPS, nuestro sistema utiliza consultas de red por dirección IP para aproximar tu localidad con un margen de 15 a 40 kilómetros.',
        },
      ],
    },
  },

  fr: {
    metaTitle: 'Où Suis-Je ? Trouver Ma Position GPS Immédiatement | MyLocationLab',
    metaDesc: 'Découvrez instantanément votre position actuelle : coordonnées GPS, adresse complète, ville et carte interactive. 100% privé, sans application.',
    heroBadge: 'Localisateur GPS Gratuit',
    heroTitle: 'Où Suis-Je',
    heroTitleHighlight: 'En Ce Moment ?',
    heroSubtitle: 'Obtenez instantanément vos coordonnées GPS, votre adresse exacte et votre position sur une carte interactive en direct. Sans application.',
    btnGetLocation: 'Obtenir Ma Position',
    btnBrowseTools: 'Parcourir les Outils',
    privacyBanner: 'Veuillez autoriser l’accès à la position lorsque votre navigateur le demande. Zéro Donnée Enregistrée • 100% dans le Navigateur',
    telemetryTitle: 'Votre Position',
    telemetrySubtext: 'Détectée automatiquement dans votre navigateur, sans clic.',
    btnCopy: 'Copier les Coordonnées',
    btnShare: 'Partager Ma Position',
    btnOpenMaps: 'Ouvrir dans Google Maps',
    mapWaiting: 'En attente du signal GPS',
    mapStandby: 'EN ATTENTE',
    s: {
      ready: 'Prêt quand vous voulez',
      acquiring: 'Recherche de votre position…',
      acquiringSub: 'Demande d’un point GPS à votre navigateur…',
      locked: 'Position trouvée',
      lockedDetail: 'Point acquis avec une précision d’environ {m} m.',
      gpsStatus: 'Localisé',
      ipPill: 'Position approximative',
      ipSub: 'GPS indisponible — position approximative déduite de votre adresse IP.',
      ipStatus: 'Approximative (IP)',
      ipPrecision: 'Approximative (précision IP)',
      noFix: 'Aucune position',
      failed: 'Impossible d’obtenir votre position. Vérifiez que l’accès à la localisation est autorisé.',
      okBanner: 'Position trouvée. Rien à votre sujet n’est stocké sur nos serveurs.',
      ipBanner: 'Position approximative issue de votre IP. Rien à votre sujet n’est stocké sur nos serveurs.',
      copyNone: 'Pas encore de position',
      copied: 'Copié !',
      decimal: 'Décimal',
      meters: '± {m} m',
      accuracyDevice: 'Fourni par votre appareil',
      accuracyIp: 'Estimée à partir de votre adresse IP',
      altitudeNone: 'Non fournie par votre appareil',
      altitudeIpNone: 'Indisponible via IP',
      addrFail: 'Recherche d’adresse indisponible',
      addrFallback: 'Position résolue',
      cityFallback: 'Ville détectée',
      viaGps: 'Résolue via GPS',
      county: 'Comté : {c}',
      global: 'Mondial',
      metro: 'Aire métropolitaine',
      shareTitle: 'Ma Position',
      shareText: 'Mes coordonnées : {lat}, {lng}'
    },
    labels: {
      latitude: 'LATITUDE',
      longitude: 'LONGITUDE',
      streetAddress: 'ADRESSE POSTALE',
      city: 'VILLE',
      state: 'RÉGION / PAYS',
      accuracy: 'RAYON DE PRÉCISION',
      elevation: 'ALTITUDE / ÉLÉVATION',
      waiting: 'En attente du point',
      resolvingAddress: 'Résolution automatique de votre adresse…',
      reverseGeocoded: 'Géocodage inverse via OpenStreetMap Nominatim',
      deviceReported: 'Fourni par votre appareil',
      aboveSeaLevel: 'Au-dessus du niveau de la mer',
    },
    detailsSection: {
      subtag: 'DÉTAILS SPÉCIFIQUES',
      title: 'Explorez Votre',
      titleAccent: 'Position Géographique',
      desc: 'Découvrez tous les paramètres détaillés de votre localisation actuelle.',
      cards: [
        { title: 'Mes Coordonnées GPS', desc: 'Consultez vos données télémétriques précises.', link: 'Inspecter les Données GPS →', href: '/fr/my-location/gps/' },
        { title: 'Mes Coordonnées', desc: 'Obtenez vos coordonnées en formats multiples (DD, DMS, UTM).', link: 'Explorer les Formats →', href: '/fr/my-location/coordinates/' },
        { title: 'Ma Latitude et Longitude', desc: 'Valeurs précises de latitude et longitude avec carte.', link: 'Vérifier Lat/Long →', href: '/fr/my-location/latitude-longitude/' },
        { title: 'Mon Adresse Postale', desc: 'Identifiez votre adresse avec nom de rue et numéro.', link: 'Résoudre l’Adresse →', href: '/fr/my-location/address/' },
        { title: 'Ma Ville', desc: 'Dans quelle ville vous trouvez-vous actuellement ?', link: 'Voir les Infos Ville →', href: '/fr/my-location/city/' },
        { title: 'Ma Région / Département', desc: 'Trouvez votre région administrative et limites territoriales.', link: 'Voir la Région →', href: '/fr/my-location/state/' },
        { title: 'Mon Pays', desc: 'Identifiez votre pays et code territorial.', link: 'Données du Pays →', href: '/fr/my-location/country/' },
        { title: 'Ma Position par IP', desc: 'Localisation approximative fournie par votre adresse IP.', link: 'Résoudre la Position IP →', href: '/fr/my-location/ip/' },
      ],
    },
    toolsSection: {
      subtag: 'SUITE D’OUTILS',
      title: 'Outils de',
      titleAccent: 'Géolocalisation',
      desc: 'Utilitaires gratuits pour convertir, mesurer et partager vos données géographiques.',
      btnAll: 'Tous les Outils',
      cards: [
        { title: 'Trouver Coordonnées GPS', desc: 'Trouvez vos coordonnées GPS précises en temps réel avec altitude.', link: 'Lancer l’Outil →', href: '/fr/tools/gps-coordinates/' },
        { title: 'Trouver Latitude Longitude', desc: 'Obtenez vos coordonnées avec repérage sur carte vectorielle.', link: 'Lancer l’Outil →', href: '/fr/tools/latitude-longitude/' },
        { title: 'Localisateur d’Adresse', desc: 'Trouvez l’adresse complète de n’importe quel point géographique.', link: 'Lancer l’Outil →', href: '/fr/tools/address-finder/' },
        { title: 'Géocodage Inverse', desc: 'Convertissez instantanément des coordonnées GPS en adresse postale.', link: 'Lancer l’Outil →', href: '/fr/tools/reverse-geocoding/' },
        { title: 'Géocodeur Direct', desc: 'Convertissez une adresse ou une ville en coordonnées GPS.', link: 'Lancer l’Outil →', href: '/fr/tools/geocoding/' },
        { title: 'Calculateur de Distance', desc: 'Calculez la distance exacte entre deux points du globe via la formule Haversine.', link: 'Lancer l’Outil →', href: '/fr/tools/distance-calculator/' },
        { title: 'Convertisseur de Coordonnées', desc: 'Convertissez entre Degrés Décimaux, DMS, UTM et MGRS.', link: 'Lancer l’Outil →', href: '/fr/tools/coordinate-converter/' },
        { title: 'Mesure d’Élévation / Altitude', desc: 'Découvrez l’altitude exacte au-dessus du niveau de la mer.', link: 'Lancer l’Outil →', href: '/fr/tools/elevation-finder/' },
      ],
    },
    guidesSection: {
      subtag: 'BASE DE CONNAISSANCES',
      title: 'Comprendre la',
      titleAccent: 'Géolocalisation',
      desc: 'Découvrez le fonctionnement du GPS, améliorez votre précision et résolvez les erreurs.',
      cards: [
        { title: 'Comment Fonctionne le GPS', desc: 'Comprendre la trilatération satellitaire pour calculer une position.', link: 'Lire le Guide →', href: '/fr/guides/how-gps-location-works/' },
        { title: 'Améliorer la Précision GPS', desc: 'Conseils pratiques pour obtenir des mesures bien plus fiables.', link: 'Guide d’Optimisation →', href: '/fr/guides/improve-gps-accuracy/' },
        { title: 'Corriger une Mauvaise Position', desc: 'Résolution étape par étape lorsque votre position est incorrecte.', link: 'Guide de Dépannage →', href: '/fr/guides/wrong-location/' },
        { title: 'Latitude et Longitude Expliquées', desc: 'Tout comprendre sur le système de coordonnées géodésiques.', link: 'Comprendre les Formats →', href: '/fr/guides/latitude-and-longitude-explained/' },
        { title: 'Partager sa Position en Sécurité', desc: 'Bonnes pratiques pour partager vos coordonnées sans compromettre votre vie privée.', link: 'Créer un Lien Sécurisé →', href: '/fr/guides/how-to-share-location/' },
        { title: 'GPS vs Localisation IP', desc: 'Différences fondamentales de précision entre signal GPS et réseau IP.', link: 'Voir le Comparatif →', href: '/fr/comparisons/gps-vs-ip-location/' },
      ],
    },
    faqSection: {
      subtag: 'ASSISTANCE ET CONFIDENTIALITÉ',
      title: 'Foire Aux',
      titleAccent: 'Questions',
      desc: 'Tout ce qu’il faut savoir sur la sécurité, la précision et la télémétrie GPS.',
      items: [
        {
          question: 'Comment trouver ma position actuelle ?',
          answer: 'Cliquez sur le bouton <strong>"Obtenir Ma Position"</strong> pour interroger instantanément les capteurs de votre appareil via l’API W3C. Vos coordonnées, adresse et rayon de précision s’affichent directement sur une carte interactive.',
        },
        {
          question: 'Comment ce site localise-t-il mon appareil ?',
          answer: 'Nous interagissons directement avec l’<strong>API HTML5 de Géolocalisation</strong> intégrée à votre navigateur. Votre appareil combine les satellites GNSS (GPS, Galileo), le Wi-Fi et les antennes relais.',
        },
        {
          question: 'Mes données de localisation sont-elles privées ?',
          answer: '<strong>100% dans votre navigateur et zéro journalisation.</strong> Vos coordonnées sont calculées localement. Aucune information géographique n’est enregistrée sur nos serveurs.',
        },
        {
          question: 'Pourquoi ma position est-elle imprécise ?',
          answer: 'En intérieur ou en ville dense, les signaux satellites peuvent être atténués. Votre système bascule alors sur le réseau Wi-Fi ou l’adresse IP de votre fournisseur. Vous rapprocher d’une fenêtre rétablit le signal satellite.',
        },
        {
          question: 'Puis-je être localisé sans récepteur GPS ?',
          answer: 'Oui. En l’absence de puce GPS active, notre moteur interroge votre adresse IP pour estimer votre agglomération avec une marge d’environ 15 à 40 kilomètres.',
        },
      ],
    },
  },

  de: {
    metaTitle: 'Wo Bin Ich? Standort Jetzt Sofort Finden | MyLocationLab',
    metaDesc: 'Ermitteln Sie sofort Ihren aktuellen Standort: GPS-Koordinaten, Straßenadresse, Stadt und Live-Karte. 100% privat im Browser, ohne App.',
    heroBadge: 'Kostenloser GPS-Standortfinder',
    heroTitle: 'Wo Bin Ich',
    heroTitleHighlight: 'Jetzt Gerade?',
    heroSubtitle: 'Ermitteln Sie sofort Ihre aktuellen GPS-Koordinaten, Ihre Postadresse und sehen Sie Ihren Standort auf einer interaktiven Karte. Ohne App.',
    btnGetLocation: 'Meinen Standort Abrufen',
    btnBrowseTools: 'Tools Entdecken',
    privacyBanner: 'Bitte erlauben Sie den Standortzugriff bei der Browser-Aufforderung. Keine Datenspeicherung • 100% im Browser',
    telemetryTitle: 'Ihr Standort',
    telemetrySubtext: 'Automatisch in Ihrem Browser ermittelt — kein Klick nötig.',
    btnCopy: 'Koordinaten Kopieren',
    btnShare: 'Standort Teilen',
    btnOpenMaps: 'In Google Maps Öffnen',
    mapWaiting: 'Warte auf Standortschnittstelle',
    mapStandby: 'BEREIT',
    s: {
      ready: 'Bereit, wenn Sie es sind',
      acquiring: 'Standort wird gesucht…',
      acquiringSub: 'GPS-Fix wird beim Browser angefragt…',
      locked: 'Standort gefunden',
      lockedDetail: 'Fix mit etwa {m} m Genauigkeit erfasst.',
      gpsStatus: 'Lokalisiert',
      ipPill: 'Ungefährer Standort',
      ipSub: 'GPS nicht verfügbar — ungefährer Standort laut Ihrer IP-Adresse.',
      ipStatus: 'Ungefähr (IP)',
      ipPrecision: 'Ungefähr (IP-Genauigkeit)',
      noFix: 'Kein Standort',
      failed: 'Standort konnte nicht ermittelt werden. Bitte erlauben Sie den Standortzugriff.',
      okBanner: 'Standort gefunden. Über Sie wird nichts auf unseren Servern gespeichert.',
      ipBanner: 'Ungefährer Standort laut Ihrer IP. Über Sie wird nichts auf unseren Servern gespeichert.',
      copyNone: 'Noch kein Standort',
      copied: 'Kopiert!',
      decimal: 'Dezimal',
      meters: '± {m} m',
      accuracyDevice: 'Von Ihrem Gerät gemeldet',
      accuracyIp: 'Geschätzt aus Ihrer IP-Adresse',
      altitudeNone: 'Von Ihrem Gerät nicht gemeldet',
      altitudeIpNone: 'Per IP nicht verfügbar',
      addrFail: 'Adresssuche nicht verfügbar',
      addrFallback: 'Standort ermittelt',
      cityFallback: 'Stadt erkannt',
      viaGps: 'Über GPS ermittelt',
      county: 'Landkreis: {c}',
      global: 'Weltweit',
      metro: 'Ballungsraum',
      shareTitle: 'Mein Standort',
      shareText: 'Meine Standortkoordinaten: {lat}, {lng}'
    },
    labels: {
      latitude: 'BREITENGRAD',
      longitude: 'LÄNGENGRAD',
      streetAddress: 'STRASSENADRESSE',
      city: 'STADT',
      state: 'BUNDESLAND / REGION',
      accuracy: 'GENAUIGKEITSRADIUS',
      elevation: 'HÖHE ÜBER DEM MEERESSPIEGEL',
      waiting: 'Warte auf Signal',
      resolvingAddress: 'Adresse wird automatisch ermittelt…',
      reverseGeocoded: 'Reverse-Geocoding via OpenStreetMap Nominatim',
      deviceReported: 'Vom Gerät gemeldet',
      aboveSeaLevel: 'Über Normalnull (NN)',
    },
    detailsSection: {
      subtag: 'DETAILÜBERSICHT',
      title: 'Erkunden Sie Ihre',
      titleAccent: 'Standortdaten',
      desc: 'Detaillierte Analyse aller geodätischen Parameter Ihrer aktuellen Position.',
      cards: [
        { title: 'Meine GPS-Koordinaten', desc: 'Präzise Satelliten-Positionsdaten abrufen.', link: 'GPS-Daten Prüfen →', href: '/de/my-location/gps/' },
        { title: 'Meine Koordinaten', desc: 'Koordinaten in verschiedenen Formaten (Dezimal, GMS, UTM).', link: 'Formate Erkunden →', href: '/de/my-location/coordinates/' },
        { title: 'Breitengrad & Längengrad', desc: 'Exakte Werte für Latitude und Longitude auf der Karte.', link: 'Breite/Länge Prüfen →', href: '/de/my-location/latitude-longitude/' },
        { title: 'Meine Straßenadresse', desc: 'Vollständige Anschrift mit Hausnummer und Straße ermitteln.', link: 'Adresse Auflösen →', href: '/de/my-location/address/' },
        { title: 'Meine Stadt', desc: 'In welcher Ortschaft oder Großstadt befinden Sie sich gerade?', link: 'Stadt-Info Anzeigen →', href: '/de/my-location/city/' },
        { title: 'Mein Bundesland', desc: 'Ihr Bundesland, Kanton oder Ihre regionale Verwaltungseinheit.', link: 'Bundesland Anzeigen →', href: '/de/my-location/state/' },
        { title: 'Mein Land', desc: 'Ihr Aufenthaltsland mit ISO-Ländercode.', link: 'Länderdaten Prüfen →', href: '/de/my-location/country/' },
        { title: 'Mein IP-Standort', desc: 'Ungefährer Standort basierend auf Ihrer Internet-IP-Adresse.', link: 'IP-Standort Bestimmen →', href: '/de/my-location/ip/' },
      ],
    },
    toolsSection: {
      subtag: 'GEODATEN-SUITE',
      title: 'Geodaten- &',
      titleAccent: 'Standort-Tools',
      desc: 'Kostenlose Werkzeuge zum Finden, Konvertieren, Messen und Teilen von Geokoordinaten.',
      btnAll: 'Alle Tools Anzeigen',
      cards: [
        { title: 'GPS-Koordinaten-Finder', desc: 'Ermitteln Sie Ihre exakten GPS-Koordinaten mit Höhenmessung in Echtzeit.', link: 'Tool Starten →', href: '/de/tools/gps-coordinates/' },
        { title: 'Breitengrad & Längengrad Finder', desc: 'Präzise Koordinaten mit interaktiver Kartenauswahl ermitteln.', link: 'Tool Starten →', href: '/de/tools/latitude-longitude/' },
        { title: 'Adressfinder', desc: 'Vollständige Anschrift für jede Position weltweit finden.', link: 'Tool Starten →', href: '/de/tools/address-finder/' },
        { title: 'Reverse-Geocoder', desc: 'Wandeln Sie GPS-Koordinaten sofort in eine lesbare Straßenadresse um.', link: 'Tool Starten →', href: '/de/tools/reverse-geocoding/' },
        { title: 'Vorwärts-Geocoder', desc: 'Wandeln Sie beliebige Postadressen oder Ortsnamen in GPS-Koordinaten um.', link: 'Tool Starten →', href: '/de/tools/geocoding/' },
        { title: 'Entfernungsrechner', desc: 'Berechnen Sie die exakte Distanz zwischen zwei Punkten mit der Haversine-Formel.', link: 'Tool Starten →', href: '/de/tools/distance-calculator/' },
        { title: 'Koordinaten-Konverter', desc: 'Konvertieren Sie zwischen Dezimalgrad, GMS, UTM und MGRS.', link: 'Tool Starten →', href: '/de/tools/coordinate-converter/' },
        { title: 'Höhenfinder', desc: 'Ermitteln Sie die genaue Höhe über dem Meeresspiegel weltweit.', link: 'Tool Starten →', href: '/de/tools/elevation-finder/' },
      ],
    },
    guidesSection: {
      subtag: 'WISSENSARCHIV',
      title: 'Wissenswertes über',
      titleAccent: 'Standorttechnik',
      desc: 'Verstehen Sie die Funktionsweise von GPS, steigern Sie die Genauigkeit und beheben Sie Fehler.',
      cards: [
        { title: 'Wie GPS-Ortung Funktioniert', desc: 'Erfahren Sie, wie Satelliten-Trilateration Ihre Position errechnet.', link: 'Ratgeber Lesen →', href: '/de/guides/how-gps-location-works/' },
        { title: 'GPS-Genauigkeit Verbessern', desc: 'Praxistipps für verlässlichere und präzisere Standortdaten.', link: 'Optimierungsratgeber →', href: '/de/guides/improve-gps-accuracy/' },
        { title: 'Falschen Standort Korrigieren', desc: 'Schritt-für-Schritt-Anleitung bei ungenauen Positionsangaben.', link: 'Fehlerbehebungs-Ratgeber →', href: '/de/guides/wrong-location/' },
        { title: 'Breitengrad & Längengrad Erklärt', desc: 'Alles über das globale geodätische Koordinatensystem.', link: 'Koordinaten Verstehen →', href: '/de/guides/latitude-and-longitude-explained/' },
        { title: 'Standort Sicher Teilen', desc: 'Sichere Weitergabe von Koordinaten unter Schutz Ihrer Privatsphäre.', link: 'Sicheren Link Erstellen →', href: '/de/guides/how-to-share-location/' },
        { title: 'GPS vs. IP-Standort', desc: 'Die entscheidenden Unterschiede zwischen Satelliten- und IP-Ortung.', link: 'Vergleichstabelle Öffnen →', href: '/de/comparisons/gps-vs-ip-location/' },
      ],
    },
    faqSection: {
      subtag: 'HILFE & SICHERHEIT',
      title: 'Häufig Gestellte',
      titleAccent: 'Fragen',
      desc: 'Wichtige Informationen zu Datenschutz, Messgenauigkeit und Browser-Telemetrie.',
      items: [
        {
          question: 'Was ist mein aktueller Standort?',
          answer: 'Klicken Sie auf <strong>"Meinen Standort Abrufen"</strong>, um Ihre genauen Gerätedaten über die W3C Geolocation API abzurufen. Wir berechnen Ihre Koordinaten, Anschrift und den Genauigkeitsradius auf einer interaktiven Vektorkarte.',
        },
        {
          question: 'Wie ermittelt diese Webseite meine Position?',
          answer: 'Wir nutzen direkt die native <strong>HTML5 Geolocation API</strong> Ihres Browsers. Ihr Gerät kombiniert Satellitensignale (GPS, Galileo, GLONASS), Wi-Fi-Ortung und Mobilfunkmasten.',
        },
        {
          question: 'Sind meine Standortdaten geschützt?',
          answer: '<strong>100% lokal im Browser & keine Serverspeicherung.</strong> Ihre Koordinaten werden ausschließlich auf Ihrem Endgerät berechnet und niemals an unsere Server übermittelt.',
        },
        {
          question: 'Warum ist mein Standort ungenau?',
          answer: 'In Gebäuden oder Häuserschluchten kann das Satellitensignal gestört sein. Ihr Betriebssystem weicht dann auf Wi-Fi- oder IP-Standorte aus. Das Aufsuchen eines Fensters verbessert die Genauigkeit meist sofort.',
        },
        {
          question: 'Funktioniert die Ortung auch ohne GPS?',
          answer: 'Ja. Fehlt ein GPS-Modul, ermittelt unser System Ihren ungefähren Standort anhand Ihrer IP-Adresse auf Stadt-Ebene (ca. 15 bis 40 km Genauigkeit).',
        },
      ],
    },
  },

  pt: {
    metaTitle: 'Onde Estou? Encontre Sua Localização Instantaneamente | MyLocationLab',
    metaDesc: 'Descubra sua localização atual em tempo real: coordenadas GPS, endereço completo, cidade e mapa interativo. 100% privado, sem app.',
    heroBadge: 'Localizador GPS Gratuito',
    heroTitle: 'Onde Estou',
    heroTitleHighlight: 'Agora?',
    heroSubtitle: 'Descubra instantaneamente sua localização GPS atual, coordenadas precisas, endereço completo e veja no mapa interativo. Sem aplicativos.',
    btnGetLocation: 'Obter Minha Localização',
    btnBrowseTools: 'Ver Ferramentas',
    privacyBanner: 'Por favor, permita o acesso à localização quando solicitado pelo navegador. Sem Retenção de Dados • 100% no Navegador',
    telemetryTitle: 'Sua Localização',
    telemetrySubtext: 'Detectada automaticamente no seu navegador, sem clicar em nada.',
    btnCopy: 'Copiar Coordenadas',
    btnShare: 'Compartilhar Localização',
    btnOpenMaps: 'Abrir no Google Maps',
    mapWaiting: 'Aguardando sinal de localização',
    mapStandby: 'EM ESPERA',
    s: {
      ready: 'Pronto quando você quiser',
      acquiring: 'Buscando sua localização…',
      acquiringSub: 'Pedindo uma posição GPS ao seu navegador…',
      locked: 'Localização encontrada',
      lockedDetail: 'Posição obtida com precisão de cerca de {m} m.',
      gpsStatus: 'Localizado',
      ipPill: 'Localização aproximada',
      ipSub: 'GPS indisponível — mostrando uma localização aproximada pelo seu endereço IP.',
      ipStatus: 'Aproximada (IP)',
      ipPrecision: 'Aproximada (precisão de IP)',
      noFix: 'Sem localização',
      failed: 'Não foi possível obter sua localização. Verifique se o acesso à localização está permitido.',
      okBanner: 'Localização encontrada. Nada sobre você fica salvo nos nossos servidores.',
      ipBanner: 'Localização aproximada pelo seu IP. Nada sobre você fica salvo nos nossos servidores.',
      copyNone: 'Ainda sem localização',
      copied: 'Copiado!',
      decimal: 'Decimal',
      meters: '± {m} m',
      accuracyDevice: 'Informado pelo seu aparelho',
      accuracyIp: 'Estimada a partir do seu endereço IP',
      altitudeNone: 'Não informada pelo seu aparelho',
      altitudeIpNone: 'Não disponível por IP',
      addrFail: 'Busca de endereço indisponível',
      addrFallback: 'Localização resolvida',
      cityFallback: 'Cidade detectada',
      viaGps: 'Resolvida via GPS',
      county: 'Município: {c}',
      global: 'Global',
      metro: 'Região metropolitana',
      shareTitle: 'Minha Localização',
      shareText: 'Minhas coordenadas de localização: {lat}, {lng}'
    },
    labels: {
      latitude: 'LATITUDE',
      longitude: 'LONGITUDE',
      streetAddress: 'ENDEREÇO COMPLETO',
      city: 'CIDADE',
      state: 'ESTADO / PAÍS',
      accuracy: 'RAIO DE PRECISÃO',
      elevation: 'ALTITUDE / ELEVAÇÃO',
      waiting: 'Aguardando sinal',
      resolvingAddress: 'Identificando seu endereço automaticamente…',
      reverseGeocoded: 'Geocodificação reversa via OpenStreetMap Nominatim',
      deviceReported: 'Informado pelo seu dispositivo',
      aboveSeaLevel: 'Acima do Nível do Mar',
    },
    detailsSection: {
      subtag: 'DETALHES ESPECÍFICOS',
      title: 'Explore os Dados da Sua',
      titleAccent: 'Localização',
      desc: 'Analise parâmetros detalhados sobre sua posição geográfica em tempo real.',
      cards: [
        { title: 'Minhas Coordenadas GPS', desc: 'Consulte dados exatos de posicionamento por satélite.', link: 'Ver Dados GPS →', href: '/pt/my-location/gps/' },
        { title: 'Minhas Coordenadas', desc: 'Obtenha coordenadas em múltiplos formatos cartográficos.', link: 'Explorar Formatos →', href: '/pt/my-location/coordinates/' },
        { title: 'Minha Latitude e Longitude', desc: 'Valores precisos de latitude e longitude com mapa.', link: 'Ver Lat/Long →', href: '/pt/my-location/latitude-longitude/' },
        { title: 'Meu Endereço Completo', desc: 'Descubra o nome da rua, número e código postal.', link: 'Resolver Endereço →', href: '/pt/my-location/address/' },
        { title: 'Minha Cidade', desc: 'Em qual município ou cidade você está agora?', link: 'Ver Dados da Cidade →', href: '/pt/my-location/city/' },
        { title: 'Meu Estado', desc: 'Identifique seu estado ou região administrativa.', link: 'Ver Limite do Estado →', href: '/pt/my-location/state/' },
        { title: 'Meu País', desc: 'Identifique o país e código territorial onde está.', link: 'Ver Dados do País →', href: '/pt/my-location/country/' },
        { title: 'Minha Localização por IP', desc: 'Localização aproximada fornecida pelo seu provedor de internet.', link: 'Resolver Geolocalização IP →', href: '/pt/my-location/ip/' },
      ],
    },
    toolsSection: {
      subtag: 'SUÍTE DE FERRAMENTAS',
      title: 'Ferramentas de',
      titleAccent: 'Localização',
      desc: 'Utilitários gratuitos para encontrar, converter, medir e compartilhar dados geográficos.',
      btnAll: 'Ver Todas as Ferramentas',
      cards: [
        { title: 'Localizador de Coordenadas GPS', desc: 'Descubra suas coordenadas GPS exatas com altitude em tempo real.', link: 'Abrir Ferramenta →', href: '/pt/tools/gps-coordinates/' },
        { title: 'Localizador de Latitude e Longitude', desc: 'Obtenha suas coordenadas com seleção interativa no mapa.', link: 'Abrir Ferramenta →', href: '/pt/tools/latitude-longitude/' },
        { title: 'Localizador de Endereço', desc: 'Encontre o endereço postal completo para qualquer ponto do mapa.', link: 'Abrir Ferramenta →', href: '/pt/tools/address-finder/' },
        { title: 'Geocodificador Reverso', desc: 'Converta coordenadas GPS em um endereço legível instantaneamente.', link: 'Abrir Ferramenta →', href: '/pt/tools/reverse-geocoding/' },
        { title: 'Geocodificador Direto', desc: 'Transforme qualquer endereço ou cidade em coordenadas GPS.', link: 'Abrir Ferramenta →', href: '/pt/tools/geocoding/' },
        { title: 'Calculadora de Distância', desc: 'Calcule a distância exata entre dois pontos da Terra usando a fórmula de Haversine.', link: 'Abrir Ferramenta →', href: '/pt/tools/distance-calculator/' },
        { title: 'Conversor de Coordenadas', desc: 'Converta coordenadas entre Graus Decimais, GMS, UTM e MGRS.', link: 'Abrir Ferramenta →', href: '/pt/tools/coordinate-converter/' },
        { title: 'Localizador de Altitude', desc: 'Descubra a altitude exata acima do nível do mar em qualquer ponto.', link: 'Abrir Ferramenta →', href: '/pt/tools/elevation-finder/' },
      ],
    },
    guidesSection: {
      subtag: 'BASE DE CONHECIMENTO',
      title: 'Aprenda Sobre',
      titleAccent: 'Geolocalização',
      desc: 'Entenda como o GPS funciona, otimize sua precisão e solucione problemas.',
      cards: [
        { title: 'Como Funciona o GPS', desc: 'Entenda como a trilateração por satélite calcula sua posição.', link: 'Ler o Guia →', href: '/pt/guides/how-gps-location-works/' },
        { title: 'Como Melhorar a Precisão GPS', desc: 'Dicas práticas para obter medições de localização muito mais confiáveis.', link: 'Guia de Otimização →', href: '/pt/guides/improve-gps-accuracy/' },
        { title: 'Corrigir Localização Incorreta', desc: 'Passo a passo para resolver erros quando a posição indicada está errada.', link: 'Guia de Soluções →', href: '/pt/guides/wrong-location/' },
        { title: 'Latitude e Longitude Explicadas', desc: 'Tudo o que você precisa saber sobre o sistema de coordenadas.', link: 'Explorar Formatos →', href: '/pt/guides/latitude-and-longitude-explained/' },
        { title: 'Compartilhar Localização com Segurança', desc: 'Boas práticas para compartilhar coordenadas mantendo sua privacidade.', link: 'Criar Link Seguro →', href: '/pt/guides/how-to-share-location/' },
        { title: 'GPS vs Localização por IP', desc: 'Entenda as principais diferenças de precisão entre sinal GPS e IP.', link: 'Ver Comparativo →', href: '/pt/comparisons/gps-vs-ip-location/' },
      ],
    },
    faqSection: {
      subtag: 'SUPORTE E PRIVACIDADE',
      title: 'Perguntas',
      titleAccent: 'Frequentes',
      desc: 'Tudo o que você precisa saber sobre privacidade, precisão e telemetria GPS.',
      items: [
        {
          question: 'Qual é a minha localização atual?',
          answer: 'Clique no botão <strong>"Obter Minha Localização"</strong> acima para consultar instantaneamente os sensores do seu aparelho via API W3C. Exibimos sua latitude, longitude, endereço e raio de precisão em um mapa vetorial interativo.',
        },
        {
          question: 'Como este site descobre onde estou?',
          answer: 'Nós nos comunicamos diretamente com a <strong>API de Geolocalização HTML5</strong> do navegador. Seu aparelho combina satélites GNSS (GPS, Galileo, GLONASS), Wi-Fi e antenas de celular.',
        },
        {
          question: 'Meus dados de localização são privados?',
          answer: '<strong>100% no Navegador e Sem Retenção de Dados.</strong> Suas coordenadas são processadas exclusivamente no seu dispositivo. Jamais armazenamos ou transmitimos seus dados geográficos.',
        },
        {
          question: 'Por que minha localização está incorreta?',
          answer: 'Em ambientes fechados ou áreas com edifícios altos, o sinal de satélite pode falhar. Seu sistema recorrerá ao Wi-Fi ou provedor de internet (IP). Ficar perto de uma janela restabelece a precisão quase imediatamente.',
        },
        {
          question: 'Posso encontrar minha localização sem GPS?',
          answer: 'Sim. Na ausência de sinal de GPS, nosso sistema utiliza o endereço IP para estimar sua cidade com margem de 15 a 40 quilômetros.',
        },
      ],
    },
  },

  hi: {
    metaTitle: 'मैं कहां हूं? अपनी लोकेशन तुरंत पाएं | MyLocationLab',
    metaDesc: 'अपनी वर्तमान लोकेशन तुरंत जानें: GPS निर्देशांक, पता, शहर और नक्शा। 100% प्राइवेट, आपके ब्राउज़र में काम करता है, किसी ऐप की ज़रूरत नहीं। बिल्कुल मुफ़्त।',
    heroBadge: 'मुफ़्त GPS लोकेशन फाइंडर',
    heroTitle: 'मैं अभी',
    heroTitleHighlight: 'कहां हूं?',
    heroSubtitle: 'अपनी वर्तमान GPS लोकेशन, निर्देशांक और पता तुरंत जानें और इंटरैक्टिव नक्शे पर देखें। किसी ऐप की ज़रूरत नहीं।',
    btnGetLocation: 'मेरी लोकेशन प्राप्त करें',
    btnBrowseTools: 'टूल्स देखें',
    privacyBanner: 'ब्राउज़र द्वारा अनुमति मांगे जाने पर कृपया लोकेशन एक्सेस की अनुमति दें। ज़ीरो-डेटा रिटेंशन • 100% ब्राउज़र में',
    telemetryTitle: 'आपकी लोकेशन',
    telemetrySubtext: 'आपके ब्राउज़र में स्वतः पहचानी गई — किसी क्लिक की ज़रूरत नहीं।',
    btnCopy: 'निर्देशांक कॉपी करें',
    btnShare: 'लोकेशन साझा करें',
    btnOpenMaps: 'नक्शों में खोलें',
    mapWaiting: 'लोकेशन फिक्स की प्रतीक्षा में',
    mapStandby: 'स्टैंडबाय',
    s: {
      ready: 'आप जब चाहें, तब तैयार',
      acquiring: 'आपकी लोकेशन खोजी जा रही है…',
      acquiringSub: 'आपके ब्राउज़र से GPS फिक्स मांगा जा रहा है…',
      locked: 'लोकेशन मिल गई',
      lockedDetail: 'लगभग {m} मीटर सटीकता के साथ फिक्स प्राप्त हुआ।',
      gpsStatus: 'लोकेटेड',
      ipPill: 'अनुमानित लोकेशन',
      ipSub: 'GPS अनुपलब्ध — आपके IP पते से अनुमानित लोकेशन दिखाई जा रही है।',
      ipStatus: 'अनुमानित (IP)',
      ipPrecision: 'अनुमानित (IP-स्तर की सटीकता)',
      noFix: 'कोई लोकेशन नहीं',
      failed: 'आपकी लोकेशन प्राप्त नहीं हो सकी। कृपया सुनिश्चित करें कि लोकेशन एक्सेस की अनुमति दी गई है।',
      okBanner: 'लोकेशन मिल गई। आपके बारे में कुछ भी हमारे सर्वर पर स्टोर नहीं होता।',
      ipBanner: 'आपके IP पते से अनुमानित लोकेशन। आपके बारे में कुछ भी हमारे सर्वर पर स्टोर नहीं होता।',
      copyNone: 'अभी कोई लोकेशन नहीं',
      copied: 'कॉपी हो गया!',
      decimal: 'दशमलव',
      meters: '± {m} मी',
      accuracyDevice: 'आपके डिवाइस द्वारा बताई गई',
      accuracyIp: 'आपके IP पते से अनुमानित',
      altitudeNone: 'आपके डिवाइस द्वारा नहीं बताई गई',
      altitudeIpNone: 'IP लुकअप से उपलब्ध नहीं',
      addrFail: 'पता खोज अनुपलब्ध',
      addrFallback: 'लोकेशन हल की गई',
      cityFallback: 'पहचाना गया शहर',
      viaGps: 'GPS के ज़रिए हल की गई',
      county: 'ज़िला: {c}',
      global: 'विश्वव्यापी',
      metro: 'महानगर क्षेत्र',
      shareTitle: 'मेरा स्थान',
      shareText: 'मेरी लोकेशन के निर्देशांक: {lat}, {lng}'
    },
    labels: {
      latitude: 'अक्षांश',
      longitude: 'देशांतर',
      streetAddress: 'सड़क का पता',
      city: 'शहर',
      state: 'राज्य / देश',
      accuracy: 'सटीकता त्रिज्या',
      elevation: 'एलिवेशन / ऊंचाई',
      waiting: 'फिक्स की प्रतीक्षा में',
      resolvingAddress: 'आपका पता स्वतः हल किया जा रहा है…',
      reverseGeocoded: 'OpenStreetMap Nominatim के ज़रिए रिवर्स जियोकोडेड',
      deviceReported: 'आपके डिवाइस द्वारा बताया गया',
      aboveSeaLevel: 'औसत समुद्र तल से ऊपर',
    },
    detailsSection: {
      subtag: 'विस्तृत विश्लेषण',
      title: 'अपनी लोकेशन',
      titleAccent: 'का विवरण देखें',
      desc: 'अपनी वर्तमान लोकेशन के विशिष्ट पहलुओं के बारे में गहराई से जानें।',
      cards: [
        { title: 'मेरे GPS निर्देशांक', desc: 'अपना सटीक GPS स्थिति डेटा देखें।', link: 'GPS डेटा जांचें →', href: '/hi/my-location/gps/' },
        { title: 'मेरे निर्देशांक', desc: 'कई फॉर्मेट में निर्देशांक पाएं।', link: 'फॉर्मेट देखें →', href: '/hi/my-location/coordinates/' },
        { title: 'मेरा अक्षांश और देशांतर', desc: 'नक्शा स्थिति के साथ सटीक अक्षांश-देशांतर।', link: 'अक्षांश-देशांतर जांचें →', href: '/hi/my-location/latitude-longitude/' },
        { title: 'मेरा पता', desc: 'अपना पूरा सड़क पता जानें।', link: 'पता हल करें →', href: '/hi/my-location/address/' },
        { title: 'मेरा शहर', desc: 'आप इस समय किस शहर में हैं?', link: 'शहर जानकारी देखें →', href: '/hi/my-location/city/' },
        { title: 'मेरा राज्य', desc: 'अपना वर्तमान राज्य या क्षेत्र जानें।', link: 'राज्य सीमा देखें →', href: '/hi/my-location/state/' },
        { title: 'मेरा देश', desc: 'आप इस समय किस देश में हैं?', link: 'देश डेटा देखें →', href: '/hi/my-location/country/' },
        { title: 'मेरी IP लोकेशन', desc: 'आपके IP पते पर आधारित लोकेशन।', link: 'IP जियोलोकेशन हल करें →', href: '/hi/my-location/ip/' },
      ],
    },
    toolsSection: {
      subtag: 'यूटिलिटी सूट',
      title: 'लोकेशन',
      titleAccent: 'टूल्स',
      desc: 'निर्देशांक खोजने, बदलने, मापने और साझा करने के मुफ़्त लोकेशन यूटिलिटीज़।',
      btnAll: 'सभी टूल्स देखें',
      cards: [
        { title: 'GPS निर्देशांक फाइंडर', desc: 'रीयल-टाइम में अक्षांश, देशांतर और ऊंचाई सहित अपने सटीक GPS निर्देशांक पाएं।', link: 'टूल खोलें →', href: '/hi/tools/gps-coordinates/' },
        { title: 'अक्षांश-देशांतर फाइंडर', desc: 'इंटरैक्टिव नक्शा चयन के साथ अपने सटीक अक्षांश और देशांतर निर्देशांक पाएं।', link: 'टूल खोलें →', href: '/hi/tools/latitude-longitude/' },
        { title: 'पता खोजें', desc: 'रिवर्स जियोकोडिंग का उपयोग करके किसी भी जगह या अपनी वर्तमान स्थिति का पूरा सड़क पता जानें।', link: 'टूल खोलें →', href: '/hi/tools/address-finder/' },
        { title: 'रिवर्स जियोकोडर', desc: 'GPS निर्देशांकों को तुरंत पठनीय सड़क के पते में बदलें।', link: 'टूल खोलें →', href: '/hi/tools/reverse-geocoding/' },
        { title: 'जियोकोडर', desc: 'किसी भी पते, शहर या स्थान के नाम को GPS निर्देशांकों में बदलें।', link: 'टूल खोलें →', href: '/hi/tools/geocoding/' },
        { title: 'दूरी कैलकुलेटर', desc: 'हैवरसाइन फॉर्मूले का उपयोग करके पृथ्वी पर दो बिंदुओं के बीच सटीक दूरी की गणना करें।', link: 'टूल खोलें →', href: '/hi/tools/distance-calculator/' },
        { title: 'निर्देशांक कनवर्टर', desc: 'निर्देशांकों को दशमलव डिग्री, DMS, UTM और अन्य फॉर्मेट के बीच बदलें।', link: 'टूल खोलें →', href: '/hi/tools/coordinate-converter/' },
        { title: 'ऊंचाई फाइंडर', desc: 'पृथ्वी पर किसी भी स्थान की ऊंचाई (समुद्र तल से) जानें।', link: 'टूल खोलें →', href: '/hi/tools/elevation-finder/' },
      ],
    },
    guidesSection: {
      subtag: 'ज्ञान कोश',
      title: 'लोकेशन के बारे में',
      titleAccent: 'जानें',
      desc: 'GPS कैसे काम करता है जानें, सटीकता बढ़ाएं और समस्याओं का समाधान करें।',
      cards: [
        { title: 'GPS लोकेशन कैसे काम करता है', desc: 'जानें कि सैटेलाइट ट्राईलैटरेशन आपकी स्थिति की गणना कैसे करता है।', link: 'गाइड पढ़ें →', href: '/hi/guides/how-gps-location-works/' },
        { title: 'GPS सटीकता कैसे बढ़ाएं', desc: 'अधिक सटीक लोकेशन रीडिंग पाने के व्यावहारिक सुझाव।', link: 'अनुकूलन गाइड पढ़ें →', href: '/hi/guides/improve-gps-accuracy/' },
        { title: 'गलत लोकेशन की समस्या हल करें', desc: 'गलत स्थिति रिपोर्ट के लिए चरण-दर-चरण समस्या निवारण।', link: 'समस्या निवारण गाइड पढ़ें →', href: '/hi/guides/wrong-location/' },
        { title: 'अक्षांश और देशांतर की व्याख्या', desc: 'भौगोलिक निर्देशांकों के बारे में वह सब जो आपको जानना चाहिए।', link: 'निर्देशांक फॉर्मेट देखें →', href: '/hi/guides/latitude-and-longitude-explained/' },
        { title: 'अपनी लोकेशन सुरक्षित रूप से साझा करें', desc: 'गोपनीयता की रक्षा करते हुए निर्देशांक साझा करने की सर्वोत्तम प्रथाएं।', link: 'शेयर लिंक बनाएं →', href: '/hi/guides/how-to-share-location/' },
        { title: 'GPS बनाम IP लोकेशन', desc: 'GPS और IP-आधारित लोकेशन के बीच अंतर समझें।', link: 'तुलना तालिका देखें →', href: '/hi/comparisons/gps-vs-ip-location/' },
      ],
    },
    faqSection: {
      subtag: 'सहायता और सुरक्षा',
      title: 'अक्सर पूछे',
      titleAccent: 'जाने वाले प्रश्न',
      desc: 'ब्राउज़र GPS गोपनीयता, सटीकता और टेलीमेट्री के बारे में वह सब जो आपको जानना चाहिए।',
      items: [
        {
          question: 'मेरी वर्तमान लोकेशन क्या है?',
          answer: 'W3C Geolocation API के माध्यम से अपनी सटीक डिवाइस टेलीमेट्री तुरंत प्राप्त करने के लिए ऊपर <strong>"मेरी लोकेशन प्राप्त करें"</strong> बटन पर क्लिक करें। हम आपका सटीक अक्षांश, देशांतर, रिवर्स-जियोकोडेड सड़क पता, प्रशासनिक सीमा और 95% कॉन्फिडेंस त्रिज्या इंटरैक्टिव वेक्टर नक्शे पर गणना करते हैं।',
        },
        {
          question: 'यह साइट मेरी लोकेशन कैसे पता करती है?',
          answer: 'हम सीधे आपके ब्राउज़र के नेटिव <strong>HTML5 Geolocation API</strong> से इंटरैक्ट करते हैं। आपका डिवाइस उच्च-सटीकता वाले निर्देशांकों के लिए मल्टी-कॉन्स्टेलेशन GNSS (GPS, GLONASS, Galileo, BeiDou), वाई-फाई BSSID ट्राईलैटरेशन, सेल्युलर टावर ID और बैरोमीट्रिक एल्टीमीटर का संयोजन करता है।',
        },
        {
          question: 'क्या मेरा लोकेशन डेटा प्राइवेट है?',
          answer: '<strong>100% ब्राउज़र में और ज़ीरो-डेटा रिटेंशन।</strong> आपके निर्देशांक और टेलीमेट्री आपकी क्लाइंट मशीन पर स्थानीय रूप से गणना किए जाते हैं। निर्देशांक कभी भी हमारे बैकएंड सर्वर पर ट्रांसमिट या रिकॉर्ड नहीं किए जाते, जिससे पूर्ण भू-स्थानिक गोपनीयता सुनिश्चित होती है।',
        },
        {
          question: 'मेरी लोकेशन गलत क्यों है?',
          answer: 'जब घर के अंदर या घने शहरी इलाकों में GNSS सैटेलाइट सिग्नल अवरुद्ध हो जाते हैं, तो आपका ऑपरेटिंग सिस्टम वाई-फाई पोज़िशनिंग या ISP नेटवर्क राउटिंग नोड्स पर चला जाता है। किसी खुली खिड़की के पास जाने या हार्डवेयर लोकेशन सेवाएं चालू करने से सटीकता तुरंत बेहतर हो जाती है।',
        },
        {
          question: 'क्या मैं GPS के बिना अपनी लोकेशन जान सकता हूं?',
          answer: 'हां। GNSS हार्डवेयर की अनुपस्थिति में, हमारा इंजन क्लाइंट-साइड IP-आधारित रिज़ॉल्वर क्वेरी और लोकल नेटवर्क जियोकोडिंग शुरू करके 15 से 40 किलोमीटर के भीतर आपकी शहर-स्तर की भौगोलिक सीमा हल करता है।',
        },
      ],
    },
  },

  id: {
    metaTitle: 'Di Mana Saya? Temukan Lokasi Saya Seketika | MyLocationLab',
    metaDesc: 'Temukan lokasi Anda saat ini secara instan: koordinat GPS, alamat, kota, dan peta. 100% privat, berjalan di peramban Anda, tanpa aplikasi, sepenuhnya gratis.',
    heroBadge: 'Pelacak Lokasi GPS Gratis',
    heroTitle: 'Di Mana Saya',
    heroTitleHighlight: 'Saat Ini?',
    heroSubtitle: 'Temukan lokasi GPS, koordinat, dan alamat Anda saat ini secara instan, dan lihat semuanya di peta interaktif. Tanpa perlu aplikasi.',
    btnGetLocation: 'Dapatkan Lokasi Saya',
    btnBrowseTools: 'Jelajahi Alat',
    privacyBanner: 'Mohon izinkan akses lokasi saat peramban Anda meminta izin. Retensi Nol Data • 100% di Peramban',
    telemetryTitle: 'Lokasi Anda',
    telemetrySubtext: 'Terdeteksi otomatis di peramban Anda — tanpa perlu mengeklik apa pun.',
    btnCopy: 'Salin Koordinat',
    btnShare: 'Bagikan Lokasi',
    btnOpenMaps: 'Buka di Peta',
    mapWaiting: 'Menunggu fix lokasi',
    mapStandby: 'SIAGA',
    s: {
      ready: 'Siap kapan pun Anda mau',
      acquiring: 'Mencari lokasi Anda…',
      acquiringSub: 'Meminta fix GPS dari peramban Anda…',
      locked: 'Lokasi ditemukan',
      lockedDetail: 'Fix diperoleh dengan akurasi sekitar {m} m.',
      gpsStatus: 'Terlacak',
      ipPill: 'Lokasi perkiraan',
      ipSub: 'GPS tidak tersedia — menampilkan lokasi perkiraan dari alamat IP Anda.',
      ipStatus: 'Perkiraan (IP)',
      ipPrecision: 'Perkiraan (presisi tingkat IP)',
      noFix: 'Tidak ada lokasi',
      failed: 'Tidak dapat memperoleh lokasi Anda. Pastikan akses lokasi telah diizinkan.',
      okBanner: 'Lokasi ditemukan. Tidak ada data tentang Anda yang disimpan di server kami.',
      ipBanner: 'Lokasi perkiraan dari alamat IP Anda. Tidak ada data tentang Anda yang disimpan di server kami.',
      copyNone: 'Belum ada lokasi',
      copied: 'Tersalin!',
      decimal: 'Desimal',
      meters: '± {m} m',
      accuracyDevice: 'Dilaporkan oleh perangkat Anda',
      accuracyIp: 'Diperkirakan dari alamat IP Anda',
      altitudeNone: 'Tidak dilaporkan oleh perangkat Anda',
      altitudeIpNone: 'Tidak tersedia dari pencarian IP',
      addrFail: 'Pencarian alamat tidak tersedia',
      addrFallback: 'Lokasi teridentifikasi',
      cityFallback: 'Kota terdeteksi',
      viaGps: 'Teridentifikasi via GPS',
      county: 'Kabupaten: {c}',
      global: 'Global',
      metro: 'Wilayah metropolitan',
      shareTitle: 'Lokasi Saya',
      shareText: 'Koordinat lokasi saya: {lat}, {lng}'
    },
    labels: {
      latitude: 'LINTANG',
      longitude: 'BUJUR',
      streetAddress: 'ALAMAT JALAN',
      city: 'KOTA',
      state: 'PROVINSI / NEGARA',
      accuracy: 'RADIUS AKURASI',
      elevation: 'ELEVASI / KETINGGIAN',
      waiting: 'Menunggu fix',
      resolvingAddress: 'Mengidentifikasi alamat Anda secara otomatis…',
      reverseGeocoded: 'Reverse geocoding via OpenStreetMap Nominatim',
      deviceReported: 'Dilaporkan oleh perangkat Anda',
      aboveSeaLevel: 'Di Atas Permukaan Laut Rata-rata',
    },
    detailsSection: {
      subtag: 'RINCIAN TERPERINCI',
      title: 'Jelajahi',
      titleAccent: 'Detail Lokasi Anda',
      desc: 'Dalami aspek-aspek spesifik dari lokasi Anda saat ini.',
      cards: [
        { title: 'Koordinat GPS Saya', desc: 'Lihat data posisi GPS Anda yang presisi.', link: 'Periksa Data GPS →', href: '/id/my-location/gps/' },
        { title: 'Koordinat Saya', desc: 'Dapatkan koordinat dalam berbagai format.', link: 'Jelajahi Format →', href: '/id/my-location/coordinates/' },
        { title: 'Lintang & Bujur Saya', desc: 'Lintang/bujur persis dengan posisi di peta.', link: 'Cek Lintang/Bujur →', href: '/id/my-location/latitude-longitude/' },
        { title: 'Alamat Saya', desc: 'Temukan alamat jalan lengkap Anda.', link: 'Identifikasi Alamat →', href: '/id/my-location/address/' },
        { title: 'Kota Saya', desc: 'Anda sedang berada di kota apa?', link: 'Lihat Info Kota →', href: '/id/my-location/city/' },
        { title: 'Provinsi Saya', desc: 'Temukan provinsi atau wilayah Anda saat ini.', link: 'Lihat Batas Provinsi →', href: '/id/my-location/state/' },
        { title: 'Negara Saya', desc: 'Anda sedang berada di negara mana saat ini?', link: 'Lihat Data Negara →', href: '/id/my-location/country/' },
        { title: 'Lokasi IP Saya', desc: 'Lokasi berdasarkan alamat IP Anda.', link: 'Identifikasi Geolokasi IP →', href: '/id/my-location/ip/' },
      ],
    },
    toolsSection: {
      subtag: 'SUITE UTILITAS',
      title: 'Alat',
      titleAccent: 'Lokasi',
      desc: 'Utilitas lokasi gratis untuk menemukan, mengonversi, mengukur, dan membagikan koordinat.',
      btnAll: 'Lihat Semua Alat',
      cards: [
        { title: 'Pelacak Koordinat GPS', desc: 'Temukan koordinat GPS persis Anda — lintang, bujur, dan ketinggian — secara real-time.', link: 'Buka Alat →', href: '/id/tools/gps-coordinates/' },
        { title: 'Pelacak Lintang Bujur', desc: 'Dapatkan koordinat lintang dan bujur akurat dengan pemilihan di peta interaktif.', link: 'Buka Alat →', href: '/id/tools/latitude-longitude/' },
        { title: 'Pencari Alamat', desc: 'Temukan alamat jalan lengkap untuk lokasi mana pun atau posisi Anda saat ini menggunakan reverse geocoding.', link: 'Buka Alat →', href: '/id/tools/address-finder/' },
        { title: 'Reverse Geocoder', desc: 'Ubah koordinat GPS menjadi alamat jalan yang mudah dibaca secara instan.', link: 'Buka Alat →', href: '/id/tools/reverse-geocoding/' },
        { title: 'Geocoder', desc: 'Ubah alamat, kota, atau nama tempat mana pun menjadi koordinat GPS.', link: 'Buka Alat →', href: '/id/tools/geocoding/' },
        { title: 'Kalkulator Jarak', desc: 'Hitung jarak persis antara dua titik di Bumi menggunakan rumus Haversine.', link: 'Buka Alat →', href: '/id/tools/distance-calculator/' },
        { title: 'Konverter Koordinat', desc: 'Konversi koordinat antara Derajat Desimal, DMS, UTM, dan format lainnya.', link: 'Buka Alat →', href: '/id/tools/coordinate-converter/' },
        { title: 'Pencari Elevasi', desc: 'Temukan elevasi (ketinggian di atas permukaan laut) untuk lokasi mana pun di Bumi.', link: 'Buka Alat →', href: '/id/tools/elevation-finder/' },
      ],
    },
    guidesSection: {
      subtag: 'BASIS PENGETAHUAN',
      title: 'Pelajari',
      titleAccent: 'Tentang Lokasi',
      desc: 'Pahami cara kerja GPS, tingkatkan akurasi, dan atasi masalah.',
      cards: [
        { title: 'Cara Kerja Lokasi GPS', desc: 'Pelajari cara trilaterasi satelit menghitung posisi Anda.', link: 'Baca Panduan →', href: '/id/guides/how-gps-location-works/' },
        { title: 'Cara Meningkatkan Akurasi GPS', desc: 'Tips praktis untuk mendapatkan pembacaan lokasi yang lebih akurat.', link: 'Baca Panduan Optimasi →', href: '/id/guides/improve-gps-accuracy/' },
        { title: 'Memperbaiki Lokasi yang Salah', desc: 'Pemecahan masalah langkah demi langkah untuk laporan posisi yang tidak benar.', link: 'Baca Panduan Solusi →', href: '/id/guides/wrong-location/' },
        { title: 'Lintang & Bujur Dijelaskan', desc: 'Semua yang perlu Anda ketahui tentang koordinat geografis.', link: 'Jelajahi Format Koordinat →', href: '/id/guides/latitude-and-longitude-explained/' },
        { title: 'Cara Berbagi Lokasi dengan Aman', desc: 'Praktik terbaik berbagi koordinat sambil melindungi privasi.', link: 'Buat Tautan Berbagi →', href: '/id/guides/how-to-share-location/' },
        { title: 'GPS vs Lokasi IP', desc: 'Pahami perbedaan antara lokasi berbasis GPS dan IP.', link: 'Lihat Matriks Perbandingan →', href: '/id/comparisons/gps-vs-ip-location/' },
      ],
    },
    faqSection: {
      subtag: 'BANTUAN & KEAMANAN',
      title: 'Pertanyaan yang',
      titleAccent: 'Sering Diajukan',
      desc: 'Semua yang perlu Anda ketahui tentang privasi GPS peramban, presisi, dan telemetri.',
      items: [
        {
          question: 'Apa lokasi saya saat ini?',
          answer: 'Klik tombol <strong>"Dapatkan Lokasi Saya"</strong> di atas untuk memperoleh telemetri perangkat persis Anda secara instan melalui W3C Geolocation API. Kami menghitung lintang, bujur, alamat jalan hasil reverse geocoding, batas administratif, dan radius keyakinan 95% Anda di peta vektor interaktif.',
        },
        {
          question: 'Bagaimana situs ini menemukan lokasi saya?',
          answer: 'Kami berinteraksi langsung dengan <strong>HTML5 Geolocation API</strong> bawaan peramban Anda. Perangkat Anda menggabungkan GNSS multi-konstelasi (GPS, GLONASS, Galileo, BeiDou), trilaterasi BSSID Wi-Fi, ID menara seluler, dan altimeter barometrik untuk mencapai koordinat presisi tinggi.',
        },
        {
          question: 'Apakah data lokasi saya privat?',
          answer: '<strong>100% di Peramban & Retensi Nol Data.</strong> Koordinat dan telemetri Anda dihitung secara lokal di mesin klien Anda. Koordinat tidak pernah dikirim ke atau dicatat di server backend kami, sehingga kerahasiaan geospasial sepenuhnya terjaga.',
        },
        {
          question: 'Mengapa lokasi saya salah?',
          answer: 'Saat sinyal satelit GNSS terhalang di dalam ruangan atau di kawasan perkotaan yang padat, sistem operasi Anda beralih ke positioning Wi-Fi atau node routing jaringan ISP. Mendekati jendela yang tidak terhalang atau mengaktifkan layanan lokasi perangkat keras segera meningkatkan presisi.',
        },
        {
          question: 'Bisakah saya menemukan lokasi saya tanpa GPS?',
          answer: 'Ya. Tanpa perangkat keras GNSS, mesin kami menjalankan kueri resolver berbasis IP di sisi klien dan geocoding jaringan lokal untuk mengidentifikasi batas geografis tingkat kota Anda dalam rentang 15 hingga 40 kilometer.',
        },
      ],
    },
  },
};
