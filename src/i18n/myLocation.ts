/**
 * Multilingual Data for /my-location/ Primary Landing Page
 * Full professional translations for English, Spanish, French, German, Portuguese, Hindi, and Indonesian.
 * Target search queries: "my current location", "ma position actuelle", "mi ubicación actual", etc.
 */

export interface MyLocationFaqItem {
  question: string;
  answer: string;
}

export interface MyLocationStep {
  num: string;
  title: string;
  desc: string;
}

export interface MyLocationTelemetryRow {
  info: string;
  example: string;
  purpose: string;
}

export interface MyLocationTechRow {
  method: string;
  accuracy: string;
  when: string;
}

export interface MyLocationTroubleshootItem {
  title: string;
  desc: string;
}

export interface MyLocationSubNavItem {
  label: string;
  href: string;
  desc?: string;
  icon?: string;
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
    dms: string;
    address: string;
    city: string;
    state: string;
    country: string;
    accuracy: string;
    altitude: string;
  };
  actions: {
    copy: string;
    copyDms: string;
    copyAddress: string;
    share: string;
    shareWhatsApp: string;
    shareSms: string;
    openMaps: string;
  };
  stepsTitle: string;
  stepsLead: string;
  stepsTip: string;
  steps: MyLocationStep[];
  telemetryTitle: string;
  telemetryLead: string;
  telemetryTable: MyLocationTelemetryRow[];
  techTitle: string;
  techLead: string;
  techTable: MyLocationTechRow[];
  emergencyTitle: string;
  emergencyBadge: string;
  emergencyText: string;
  useCasesTitle: string;
  useCases: Array<{ bold: string; text: string }>;
  troubleshootTitle: string;
  troubleshootItems: MyLocationTroubleshootItem[];
  exploreTitle: string;
  exploreTitleAccent: string;
  subNav: MyLocationSubNavItem[];
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
  // ==========================================
  // ENGLISH (en)
  // ==========================================
  en: {
    metaTitle: 'My Current Location — Where Am I Right Now? GPS & Address | MyLocationLab',
    metaDesc: 'Find your current location instantly on a live map: exact GPS coordinates (DD & DMS), street address, city, and accuracy radius. Free and 100% private.',
    pageTitle: 'My Current',
    pageTitleAccent: 'Location',
    pageDesc: 'Where am I right now? Detect your exact current location with real-time GPS coordinates, reverse-geocoded address, and precision telemetry on an interactive map.',
    reviewedBy: 'MyLocationLab Editorial Team',
    reviewerTitle: 'Geospatial Systems & Navigation Specialist',
    cardTitle: 'Your Current Location',
    btnGetLocation: '📍 Get My Current Location',
    detectingText: 'Acquiring satellite signals and telemetry...',
    labels: {
      lat: 'Latitude (DD)',
      lng: 'Longitude (DD)',
      dms: 'DMS Coordinates',
      address: 'Street Address',
      city: 'City / Municipality',
      state: 'State / Province',
      country: 'Country',
      accuracy: 'GPS Accuracy',
      altitude: 'Altitude (Elevation)',
    },
    actions: {
      copy: '📋 Copy DD',
      copyDms: '📋 Copy DMS',
      copyAddress: '📋 Copy Address',
      share: '🔗 Share',
      shareWhatsApp: '💬 WhatsApp',
      shareSms: '✉️ SMS',
      openMaps: '🗺️ Google Maps',
    },
    stepsTitle: 'How to Find Your Current Location',
    stepsLead: 'Follow these 4 simple steps to pinpoint your position and extract your coordinates:',
    stepsTip: 'Tip: Indoors, satellite reception may take a moment to calibrate. Move near a window or outdoors for metric-level accuracy (±3 to 5 meters).',
    steps: [
      {
        num: '01',
        title: 'Click "Get My Current Location"',
        desc: 'Trigger the HTML5 Geolocation API built directly into your modern web browser.',
      },
      {
        num: '02',
        title: 'Grant Browser Permission',
        desc: 'Select "Allow" or "While using the app" when prompted. Your location is never accessed without consent.',
      },
      {
        num: '03',
        title: 'Allow GPS Circle to Tighten',
        desc: 'Watch the blue accuracy circle on the interactive map shrink as GNSS satellites lock onto your device.',
      },
      {
        num: '04',
        title: 'Copy, Convert, or Share',
        desc: 'Read your coordinates in DD and DMS, copy your resolved street address, or share your live map pin.',
      },
    ],
    telemetryTitle: 'What "My Location" Displays & How to Use It',
    telemetryLead: 'Here is a breakdown of every telemetry parameter provided by our geolocation engine:',
    telemetryTable: [
      {
        info: 'Latitude / Longitude (DD)',
        example: '40.712776, -74.005974',
        purpose: 'Standard digital coordinates for navigation apps, web APIs, and flight loggers.',
      },
      {
        info: 'Coordinates (DMS)',
        example: '40° 42\' 46.0" N 74° 0\' 21.5" W',
        purpose: 'Degrees, Minutes, Seconds format used in maritime navigation, aviation, and paper charts.',
      },
      {
        info: 'Resolved Street Address',
        example: '350 5th Ave, New York, NY 10118',
        purpose: 'Precise delivery verification, rideshare pickups, and local service appointments.',
      },
      {
        info: 'City, County & State',
        example: 'New York, New York County, NY',
        purpose: 'Official administrative jurisdictions and municipal governance.',
      },
      {
        info: 'Accuracy Radius',
        example: '± 5 meters (16 feet)',
        purpose: 'Statistical 95% confidence interval of your physical location.',
      },
      {
        info: 'Altitude (Elevation)',
        example: '24 m (78 ft) above sea level',
        purpose: 'Vertical positioning relevant for hiking, aviation, and topographic assessments.',
      },
    ],
    techTitle: 'How Your Device Determines Where You Are',
    techLead: 'Modern smartphones and computers combine multiple hardware and network sensors to locate you:',
    techTable: [
      {
        method: 'GNSS / GPS Satellites',
        accuracy: '3 to 10 meters outdoors',
        when: 'Active on smartphones and tablets with a clear view of the open sky.',
      },
      {
        method: 'Wi-Fi Trilateration',
        accuracy: '15 to 50 meters',
        when: 'Used indoors and on desktop computers by scanning nearby Wi-Fi BSSID routers.',
      },
      {
        method: 'Cell Tower Triangulation',
        accuracy: '100 to 1,000 meters',
        when: 'Calculates signal timing across mobile cellular towers when GPS is obstructed.',
      },
      {
        method: 'IP Geolocation Fallback',
        accuracy: 'City / Regional level (5–50 km)',
        when: 'Used when location permissions are denied or GPS hardware is unavailable. Distorted by VPNs.',
      },
    ],
    emergencyTitle: 'In Case of Emergency: How to Communicate Your Location',
    emergencyBadge: 'Emergency Dispatch Protocol',
    emergencyText: 'If you are in danger or reporting an accident, call 911 (US/Canada), 112 (Europe), or 999 (UK). State your municipality and street name immediately. If you are in a remote, rural, or unaddressed area, read your latitude and longitude in decimal degrees (e.g., "40 point 7 1 2 7, minus 74 point 0 0 5 9"). Dispatch systems can input coordinates directly into CAD mapping software.',
    useCasesTitle: 'Common Practical Uses for "My Current Location"',
    useCases: [
      { bold: 'Emergency & Roadside Assistance', text: 'Transmit exact GPS coordinates to tow trucks, highway patrols, or emergency rescue teams.' },
      { bold: 'Delivery & Courier Drop-offs', text: 'Confirm exact house numbers, alleyways, or rural route entrances that navigation maps confuse.' },
      { bold: 'Hiking & Outdoor Recreation', text: 'Note waypoint coordinates and elevation markers before embarking on backcountry trails.' },
      { bold: 'Rendezvous & Meeting Points', text: 'Send an instant WhatsApp or SMS map pin so friends or colleagues find you in crowded parks or events.' },
      { bold: 'Field Work & Site Inspections', text: 'Document geographic metadata for photography, real estate appraisals, and surveying.' },
    ],
    troubleshootTitle: 'Inaccurate or Missing Location: How to Fix It',
    troubleshootItems: [
      {
        title: 'Shows the Wrong City or State',
        desc: 'You are likely connected to a VPN, proxy, or corporate gateway that routes through an IP address in another region. Turn off your VPN and allow native GPS access.',
      },
      {
        title: 'Wide Blue Accuracy Circle',
        desc: 'You are indoors or surrounded by tall buildings (urban canyon effect). Move closer to a window or step outside to establish line-of-sight with GNSS satellites.',
      },
      {
        title: 'Chrome Permission Blocked',
        desc: 'Click the padlock or tune icon in your address bar -> Permissions -> Location -> set to "Allow", then reload the page.',
      },
      {
        title: 'Safari (iPhone / iOS) Location Blocked',
        desc: 'Go to iPhone Settings -> Privacy & Security -> Location Services -> Safari Websites -> select "While Using the App".',
      },
    ],
    exploreTitle: 'Explore Your Location',
    exploreTitleAccent: 'Details & Tools',
    subNav: [
      { label: 'My GPS Coordinates', href: '/my-location/gps/', desc: 'View raw decimal, DMS, and UTM coordinates for field navigation.', icon: '🧭' },
      { label: 'My Coordinates Hub', href: '/my-location/coordinates/', desc: 'Full coordinate telemetry in all global military and civil formats.', icon: '📐' },
      { label: 'Latitude and Longitude', href: '/my-location/latitude-longitude/', desc: 'Inspect your exact hemispheres, parallels, and meridian positions.', icon: '🌐' },
      { label: 'My Current Address', href: '/my-location/address/', desc: 'Resolve your physical street number, neighborhood, and postal code.', icon: '📍' },
      { label: 'My City & Municipality', href: '/my-location/city/', desc: 'Discover your official administrative town, parish, or district boundary.', icon: '🏙️' },
      { label: 'My State or Province', href: '/my-location/state/', desc: 'Identify your state, department, or regional governing jurisdiction.', icon: '🗺️' },
      { label: 'My Country & Territory', href: '/my-location/country/', desc: 'Check national sovereignty, ISO codes, and territorial jurisdiction.', icon: '🌍' },
      { label: 'My IP Location Check', href: '/my-location/ip/', desc: 'Compare your ISP routing location against your true hardware GPS.', icon: '💻' },
    ],
    article: {
      whatShowsTitle: 'What Does "My Location" Show?',
      whatShowsLead: 'When you click "Get My Current Location," your browser queries native device sensors and reverse-geocodes your coordinates. Here is what is returned:',
      whatShowsList: [
        { bold: 'GPS Coordinates (DD & DMS)', text: 'Precise latitude and longitude in decimal degrees and nautical degrees-minutes-seconds' },
        { bold: 'Street Address', text: 'Street number and thoroughfare resolved via OpenStreetMap reverse geocoding' },
        { bold: 'City, State, Country', text: 'Administrative borders and official postal districts' },
        { bold: 'Accuracy Radius', text: 'Precision circle indicating the 95% confidence radius of your sensor readings' },
        { bold: 'Altitude', text: 'Vertical elevation above mean sea level' },
        { bold: 'Interactive Live Map', text: 'Vector-rendered Leaflet map with zoom controls and dynamic marker' },
      ],
      howDeterminedTitle: 'How Your Location is Determined',
      howDeterminedLead: 'Your device blends satellite constellations and network signals to deliver maximum spatial precision:',
      howDeterminedList: [
        { bold: 'GNSS Satellites (GPS, Galileo, GLONASS)', text: 'Orbiting atomic clocks delivering 3 to 5 meter accuracy outdoors' },
        { bold: 'Wi-Fi Trilateration', text: 'Scans nearby wireless access points when satellite views are obscured' },
        { bold: 'Cellular Towers', text: 'Triangulates cellular radio base station signals' },
        { bold: 'IP Geolocation Fallback', text: 'Estimated city-level location based on your internet service provider' },
      ],
      privacyTitle: 'Client-Side Privacy & Transparent Data Policy',
      privacyText: 'Your privacy is paramount. Your GPS coordinates are computed entirely on your device using the HTML5 Geolocation API. To convert your coordinates into a human-readable street address, coordinates are transmitted anonymously to the public OpenStreetMap Nominatim service. We do not store, track, or sell your location history on our backend servers.',
    },
    faqTitle: 'Frequently Asked',
    faqTitleAccent: 'Questions',
    faqItems: [
      { question: 'How do I find my current location right now?', answer: 'Click the "Get My Current Location" button and allow your browser access. Your latitude, longitude, street address, and live map marker will appear in seconds.' },
      { question: 'What are my exact GPS coordinates?', answer: 'Your coordinates consist of latitude and longitude, displayed in both Decimal Degrees (e.g. 40.7128, -74.0060) and DMS (40° 42\' 46" N 74° 0\' 21" W).' },
      { question: 'Why does my browser ask for location permission?', answer: 'Under W3C security standards and privacy regulations, browsers prohibit any web page from accessing hardware GPS without your explicit approval.' },
      { question: 'What is the difference between GPS and IP location?', answer: 'GPS uses satellite triangulation to locate you within 3–5 meters. IP location estimates your position based on your Internet Service Provider\'s data center, which can be 10–50 kilometers off.' },
      { question: 'How do I share my current location on WhatsApp or SMS?', answer: 'Click the "WhatsApp" or "SMS" button under your coordinates. A pre-formatted message with your coordinates, address, and Google Maps pin will open in your app.' },
      { question: 'Why is my location showing the wrong city?', answer: 'This usually happens if you are using a VPN, proxy, or cellular hotspot that routes your connection through another metropolitan gateway. Disconnect your VPN to use device GPS.' },
      { question: 'How do I convert coordinates between DD, DMS, and UTM?', answer: 'Use our free <a href="/tools/coordinate-converter/">Coordinate Converter</a> to translate decimal coordinates into DMS, UTM, MGRS, and Plus Codes.' },
      { question: 'Does this site work on laptops and desktop PCs?', answer: 'Yes. Desktop computers utilize Wi-Fi network positioning and IP routing, providing an accuracy of 15 to 50 meters.' },
      { question: 'Is my location recorded or tracked on your servers?', answer: 'No. Telemetry computation occurs strictly in your browser. Coordinates sent for reverse geocoding are anonymous and never logged to a user profile.' },
      { question: 'Can I find my coordinates without an internet connection?', answer: 'GPS chipsets compute coordinates via radio signals from space without internet. However, loading the map tiles and resolving the street address requires an active data connection.' },
    ],
  },

  // ==========================================
  // FRENCH (fr) — TARGET: "ma position actuelle"
  // ==========================================
  fr: {
    metaTitle: 'Ma Position Actuelle : Où Suis-Je En Ce Moment ? GPS et Adresse | MyLocationLab',
    metaDesc: 'Trouvez votre position actuelle en un clic : coordonnées GPS (DD, DMS), adresse, ville et code postal sur une carte interactive. Gratuit et privé.',
    pageTitle: 'Ma Position',
    pageTitleAccent: 'Actuelle',
    pageDesc: 'Où suis-je en ce moment ? Obtenez votre position actuelle exacte avec vos coordonnées GPS (DD et DMS), votre adresse postale et le rayon de précision sur une carte interactive en direct.',
    reviewedBy: 'Équipe Éditoriale MyLocationLab',
    reviewerTitle: 'Expert en Systèmes Géospatiaux et Cartographie',
    cardTitle: 'Votre Position Actuelle en Direct',
    btnGetLocation: '📍 Obtenir Ma Position Actuelle',
    detectingText: 'Acquisition des signaux GPS et de la télémétrie...',
    labels: {
      lat: 'Latitude (DD)',
      lng: 'Longitude (DD)',
      dms: 'Coordonnées (DMS)',
      address: 'Adresse Complète',
      city: 'Ville / Commune',
      state: 'Région / Département',
      country: 'Pays',
      accuracy: 'Précision GPS',
      altitude: 'Altitude (Élévation)',
    },
    actions: {
      copy: '📋 Copier (DD)',
      copyDms: '📋 Copier (DMS)',
      copyAddress: '📋 Copier l\'Adresse',
      share: '🔗 Partager',
      shareWhatsApp: '💬 WhatsApp',
      shareSms: '✉️ SMS',
      openMaps: '🗺️ Google Maps',
    },
    stepsTitle: 'Comment Trouver Ma Position Actuelle en 4 Étapes',
    stepsLead: 'Suivez cette méthode rapide pour afficher votre position géographique exacte :',
    stepsTip: 'Astuce : En intérieur, le signal satellite peut être atténué. Rapprochez-vous d\'une fenêtre ou sortez à ciel ouvert pour une précision métrique (± 3 à 5 mètres).',
    steps: [
      {
        num: '01',
        title: 'Cliquez sur « Obtenir Ma Position Actuelle »',
        desc: 'Interrogez l\'API native de géolocalisation HTML5 intégrée à votre navigateur web.',
      },
      {
        num: '02',
        title: 'Autorisez l\'accès à la localisation',
        desc: 'Choisissez « Autoriser » ou « Lors de l\'utilisation de l\'app ». Aucun accès n\'est possible sans accord.',
      },
      {
        num: '03',
        title: 'Laissez le cercle de précision se resserrer',
        desc: 'Le cercle bleu sur la carte interactive se réduit au fur et à mesure que les satellites GPS se verrouillent.',
      },
      {
        num: '04',
        title: 'Copiez, partagez ou naviguez',
        desc: 'Lisez vos coordonnées en DD ou DMS, copiez votre adresse officielle ou partagez votre point en un clic.',
      },
    ],
    telemetryTitle: 'Ce que « Ma Position » Affiche et à Quoi Ça Sert',
    telemetryLead: 'Voici le détail des paramètres géodésiques fournis par notre outil cartographique :',
    telemetryTable: [
      {
        info: 'Latitude / Longitude (DD)',
        example: '48,856614, 2,352222',
        purpose: 'Format numérique universel pour Google Maps, GPS de voiture et formulaires en ligne.',
      },
      {
        info: 'Coordonnées (DMS)',
        example: '48° 51\' 23,8" N 2° 21\' 7,9" E',
        purpose: 'Degrés, Minutes, Secondes pour la randonnée, la navigation maritime et les secours.',
      },
      {
        info: 'Adresse Postale Officielle',
        example: '1 Rue de Rivoli, 75001 Paris',
        purpose: 'Livraisons précises, commande de taxi/VTC et démarches administratives.',
      },
      {
        info: 'Commune, Département, Région',
        example: 'Paris, Paris (75), Île-de-France',
        purpose: 'Limites administratives territoriales et circonscriptions légales françaises.',
      },
      {
        info: 'Rayon de Précision',
        example: '± 5 mètres',
        purpose: 'Indice de fiabilité physique garantissant le rayon dans lequel se situe votre appareil.',
      },
      {
        info: 'Altitude (Élévation)',
        example: '35 m au-dessus du niveau de la mer',
        purpose: 'Topographie, calcul de dénivelé en montagne et activités de plein air.',
      },
    ],
    techTitle: 'Comment Votre Position Est Déterminée',
    techLead: 'Plusieurs technologies complémentaires sont sollicitées automatiquement par votre appareil :',
    techTable: [
      {
        method: 'Puce GPS / GNSS (Galileo, GPS)',
        accuracy: '3 à 10 mètres en extérieur',
        when: 'Opérationnel sur smartphones et tablettes disposant d\'une vue dégagée sur le ciel.',
      },
      {
        method: 'Triangulation Wi-Fi',
        accuracy: '15 à 50 mètres',
        when: 'Utilisé en intérieur et sur ordinateur en analysant la proximité des box et routeurs Wi-Fi.',
      },
      {
        method: 'Antennes-Relais Mobiles (4G/5G)',
        accuracy: '100 à 1 000 mètres',
        when: 'Triangule la force du signal des stations cellulaires lorsque le GPS est atténué.',
      },
      {
        method: 'Géolocalisation par Adresse IP',
        accuracy: 'Échelle de la ville (5 à 50 km)',
        when: 'Solution de secours quand le GPS est refusé. Très souvent faussée par l\'usage d\'un VPN.',
      },
    ],
    emergencyTitle: 'En Cas d\'Urgence : Comment Transmettre Sa Position aux Secours',
    emergencyBadge: 'Protocole d\'Urgence France / Europe',
    emergencyText: 'En cas d\'urgence ou de détresse, composez le 112 (numéro d\'urgence européen), le 15 (SAMU), le 17 (Police Secours) ou le 18 (Pompiers). Les personnes sourdes ou malentendantes peuvent contacter les secours par SMS au 114. Annoncez votre commune et nom de rue. En zone rurale ou isolée, lisez vos coordonnées en degrés décimaux : les répartiteurs d\'urgence intègrent ces coordonnées directement dans leur cartographie d\'intervention.',
    useCasesTitle: 'À Quoi Sert de Connaître Sa Position Actuelle ?',
    useCases: [
      { bold: 'Secours et Assistance d\'Urgence', text: 'Guidez les pompiers ou le dépannage routier vers votre position exacte sur une route non balisée.' },
      { bold: 'Livraison et Colis en Zone Ambiguë', text: 'Confirmez une adresse exacte en cas de hameau, lieu-dit, impasse ou numéro de voie manquant.' },
      { bold: 'Randonnée et Montagne', text: 'Relevez vos coordonnées et votre altitude pour vous repérer sur une carte IGN ou Top 25.' },
      { bold: 'Retrouver des Amis', text: 'Envoyez un lien de position par WhatsApp ou SMS pour donner un point de rendez-vous immédiat.' },
      { bold: 'Photographie et Relevés de Terrain', text: 'Mémorisez les coordonnées géographiques d\'un point remarquable pour y revenir ultérieurement.' },
    ],
    troubleshootTitle: 'Ma Position Est Fausse ou Imprécise : Que Faire ?',
    troubleshootItems: [
      {
        title: 'Une Autre Ville ou Région S\'affiche',
        desc: 'Vous êtes probablement localisé par l\'adresse IP de votre box ou vous utilisez un VPN. Désactivez votre VPN et activez la puce GPS de votre appareil pour un positionnement satellite réel.',
      },
      {
        title: 'Le Cercle Bleu de Précision Est Trop Large',
        desc: 'Vous êtes à l\'intérieur d\'un bâtiment en béton ou dans un sous-sol. Rapprochez-vous d\'une fenêtre ou sortez à ciel ouvert, puis cliquez à nouveau sur « Obtenir Ma Position ».',
      },
      {
        title: 'Autoriser la Localisation sur Chrome (Android & PC)',
        desc: 'Cliquez sur le cadenas ou les paramètres à gauche de l\'adresse web -> Autorisations -> Position géographique -> sélectionnez « Autoriser » et rafraîchissez.',
      },
      {
        title: 'Autoriser la Localisation sur Safari (iPhone / iOS)',
        desc: 'Ouvrez Réglages de l\'iPhone -> Confidentialité et sécurité -> Service de localisation -> sélectionnez « Safari » et cochez « Lorsque l\'app est active ».',
      },
    ],
    exploreTitle: 'Explorez Votre Position',
    exploreTitleAccent: 'Par Paramètre',
    subNav: [
      { label: 'Mes Coordonnées GPS', href: '/fr/my-location/gps/', desc: 'Affichez vos coordonnées brutes aux formats DD, DMS et UTM pour le terrain.', icon: '🧭' },
      { label: 'Mes Coordonnées', href: '/fr/my-location/coordinates/', desc: 'Télémétrie complète et formats géodésiques civils et militaires.', icon: '📐' },
      { label: 'Ma Latitude et Longitude', href: '/fr/my-location/latitude-longitude/', desc: 'Comprenez vos coordonnées géographiques, parallèles et méridiens.', icon: '🌐' },
      { label: 'Mon Adresse Actuelle', href: '/fr/my-location/address/', desc: 'Identifiez le numéro de rue, le quartier, la commune et le code postal.', icon: '📍' },
      { label: 'Ma Ville & Commune', href: '/fr/my-location/city/', desc: 'Découvrez la commune et communauté d\'agglomération de votre emplacement.', icon: '🏙️' },
      { label: 'Ma Région & Département', href: '/fr/my-location/state/', desc: 'Situez votre position dans le découpage départemental et régional français.', icon: '🗺️' },
      { label: 'Mon Pays de Connexion', href: '/fr/my-location/country/', desc: 'Vérifiez les données territoriales, frontalières et le code pays ISO.', icon: '🌍' },
      { label: 'Ma Position par Adresse IP', href: '/fr/my-location/ip/', desc: 'Comparez la localisation estimée de votre réseau avec votre GPS réel.', icon: '💻' },
    ],
    article: {
      whatShowsTitle: 'Que Révèle « Ma Position Actuelle » ?',
      whatShowsLead: 'En cliquant sur « Obtenir Ma Position Actuelle », l\'API native du navigateur calcule vos paramètres géographiques complets :',
      whatShowsList: [
        { bold: 'Coordonnées GPS (DD et DMS)', text: 'Votre latitude et longitude en degrés décimaux et en degrés-minutes-secondes' },
        { bold: 'Adresse Postale Officielle', text: 'Numéro et voie résolus par géocodage inverse OpenStreetMap' },
        { bold: 'Commune, Département et Pays', text: 'Limites administratives officielles du territoire' },
        { bold: 'Rayon de Précision', text: 'Marge d\'incertitude en mètres mesurée par les capteurs de l\'appareil' },
        { bold: 'Altitude', text: 'Élévation mesurée au-dessus du niveau moyen de la mer' },
        { bold: 'Carte Interactive en Direct', text: 'Rendu vectoriel fluide avec zoom, vue satellite et recentrage' },
      ],
      howDeterminedTitle: 'Comment Est Déterminée Votre Position ?',
      howDeterminedLead: 'Plusieurs technologies complémentaires sont sollicitées automatiquement :',
      howDeterminedList: [
        { bold: 'Constellations GNSS (Galileo, GPS)', text: 'Trilatération par satellites (3 à 5 mètres de précision en extérieur)' },
        { bold: 'Triangulation Wi-Fi', text: 'Détection des bornes et box internet avoisinantes' },
        { bold: 'Antennes-Relais Mobiles', text: 'Positionnement basé sur la puissance du signal cellulaire' },
        { bold: 'Géolocalisation IP', text: 'Solution de secours déduisant la ville via votre fournisseur d\'accès' },
      ],
      privacyTitle: 'Confidentialité et Sécurité des Données (Conformité RGPD)',
      privacyText: 'Votre vie privée est strictement préservée. Vos coordonnées GPS sont traitées localement dans votre navigateur via l\'API HTML5 Geolocation. Pour convertir vos coordonnées en adresse postale textuelle, une requête anonyme est transmise au service public de géocodage OpenStreetMap (Nominatim). Aucun historique de géolocalisation ni profil nominatif n\'est enregistré sur nos serveurs.',
    },
    faqTitle: 'Foire Aux',
    faqTitleAccent: 'Questions',
    faqItems: [
      { question: 'Comment connaître ma position actuelle en ce moment ?', answer: 'Cliquez sur « Obtenir Ma Position Actuelle » en haut de la page et validez la demande d\'autorisation de votre navigateur. Vos coordonnées, votre adresse postale et votre carte interactive s\'affichent instantanément.' },
      { question: 'Quelle est ma position GPS exacte ?', answer: 'Ce sont vos latitude et longitude précises, affichées en Degrés Décimaux (ex. 48,856614, 2,352222) et en Degrés-Minutes-Secondes (DMS). Le rayon de précision indiqué garantit la fiabilité métrique.' },
      { question: 'Pourquoi mon navigateur demande-t-il une autorisation ?', answer: 'Conformément aux normes du W3C et au RGPD, aucun site ne peut interroger les capteurs GPS de votre appareil sans votre accord préalable explicite.' },
      { question: 'Quelle est la différence entre localisation GPS et adresse IP ?', answer: 'Le GPS s\'appuie sur les satellites pour une précision de 3 à 5 mètres. L\'adresse IP n\'est qu\'une estimation rattachée au centre technique de votre fournisseur internet, avec une marge d\'erreur de 5 à 50 km.' },
      { question: 'Comment partager ma position par WhatsApp ou SMS ?', answer: 'Cliquez sur le bouton « WhatsApp » ou « SMS » sous vos coordonnées : un message pré-rempli comportant vos coordonnées, votre adresse et un lien Google Maps s\'ouvre directement dans votre application.' },
      { question: 'Pourquoi ma position affichée n\'est-elle pas exacte ?', answer: 'Si vous êtes en intérieur ou si un VPN est actif, votre appareil peut basculer sur une géolocalisation IP approximative. Désactivez votre VPN et rapprochez-vous d\'une fenêtre pour rétablir la réception satellite.' },
      { question: 'Comment convertir mes coordonnées en DMS ou en Lambert-93 ?', answer: 'Utilisez notre <a href="/fr/tools/coordinate-converter/">Convertisseur de Coordonnées</a> pour basculer facilement entre les degrés décimaux, le système DMS, le carroyage UTM ou la projection officielle française Lambert-93 (RGF93).' },
      { question: 'Le site fonctionne-t-il sur un ordinateur portable ou fixe ?', answer: 'Oui. Sur ordinateur, la position est déterminée en combinant la triangulation Wi-Fi environnante et l\'adresse IP, avec une précision moyenne de 15 à 50 mètres.' },
      { question: 'Mes déplacements sont-ils enregistrés sur vos serveurs ?', answer: 'Non. Le calcul reste confiné à votre appareil. Aucune coordonnée ni trajectoire n\'est stockée ou transmise à des tiers.' },
      { question: 'Puis-je connaître mes coordonnées sans connexion internet ?', answer: 'La puce GPS fonctionne sans internet grâce aux signaux satellites directs, mais le chargement de la carte et la résolution de l\'adresse textuelle nécessitent une connexion active.' },
    ],
  },

  // ==========================================
  // SPANISH (es) — TARGET: "mi ubicación actual"
  // ==========================================
  es: {
    metaTitle: 'Mi Ubicación Actual — ¿Dónde Estoy Ahora? Coordenadas GPS y Dirección | MyLocationLab',
    metaDesc: 'Encuentra tu ubicación actual al instante: coordenadas GPS (DD, DMS), dirección exacta, ciudad y mapa interactivo en vivo. 100% gratuito y privado.',
    pageTitle: 'Mi Ubicación',
    pageTitleAccent: 'Actual',
    pageDesc: '¿Dónde estoy ahora mismo? Encuentra tu ubicación actual exacta con coordenadas GPS en tiempo real, dirección postal y mapa interactivo de alta precisión.',
    reviewedBy: 'Equipo Editorial MyLocationLab',
    reviewerTitle: 'Especialista en Sistemas Geoespaciales y Navegación',
    cardTitle: 'Tu Ubicación Actual en Vivo',
    btnGetLocation: '📍 Obtener Mi Ubicación Actual',
    detectingText: 'Detectando satélites GPS y telemetría...',
    labels: {
      lat: 'Latitud (DD)',
      lng: 'Longitud (DD)',
      dms: 'Coordenadas (DMS)',
      address: 'Dirección Completa',
      city: 'Ciudad / Municipio',
      state: 'Estado / Provincia',
      country: 'País',
      accuracy: 'Precisión GPS',
      altitude: 'Altitud (Elevación)',
    },
    actions: {
      copy: '📋 Copiar DD',
      copyDms: '📋 Copiar DMS',
      copyAddress: '📋 Copiar Dirección',
      share: '🔗 Compartir',
      shareWhatsApp: '💬 WhatsApp',
      shareSms: '✉️ SMS',
      openMaps: '🗺️ Google Maps',
    },
    stepsTitle: 'Cómo Saber Mi Ubicación Actual en 4 Pasos',
    stepsLead: 'Sigue estos sencillos pasos para obtener tus coordenadas y dirección exactas:',
    stepsTip: 'Consejo: En interiores, la señal GPS puede tardar unos segundos. Acércate a una ventana o sal al exterior para lograr precisión métrica (± 3 a 5 metros).',
    steps: [
      {
        num: '01',
        title: 'Haz clic en «Obtener Mi Ubicación Actual»',
        desc: 'Activa la API de geolocalización HTML5 integrada en tu navegador de forma segura.',
      },
      {
        num: '02',
        title: 'Concede permiso en tu navegador',
        desc: 'Selecciona «Permitir» o «Al usar la app». Tus datos nunca se consultan sin autorización explícita.',
      },
      {
        num: '03',
        title: 'Espera a que el círculo azul se ajuste',
        desc: 'El círculo de precisión en el mapa interactivo se reduce a medida que los satélites fijan tu posición.',
      },
      {
        num: '04',
        title: 'Copia, comparte o navega',
        desc: 'Lee tus coordenadas en DD y DMS, copia tu dirección postal o comparte tu ubicación por WhatsApp.',
      },
    ],
    telemetryTitle: 'Qué Información Muestra «Mi Ubicación»',
    telemetryLead: 'Consulta el significado de cada parámetro geodésico proporcionado por el sistema:',
    telemetryTable: [
      {
        info: 'Latitud / Longitud (DD)',
        example: '40.416775, -3.703790',
        purpose: 'Formato digital estándar para Google Maps, navegadores GPS y aplicaciones móviles.',
      },
      {
        info: 'Coordenadas (DMS)',
        example: '40° 25\' 0.4" N 3° 42\' 13.6" O',
        purpose: 'Grados, Minutos y Segundos para senderismo, navegación marítima y rescate.',
      },
      {
        info: 'Dirección Postal Exacta',
        example: 'Puerta del Sol, 28013 Madrid',
        purpose: 'Entregas de paquetería, solicitudes de taxi y referencias urbanas precisas.',
      },
      {
        info: 'Municipio, Provincia, Región',
        example: 'Madrid, Comunidad de Madrid',
        purpose: 'Límites administrativos oficiales y trámites legales.',
      },
      {
        info: 'Radio de Precisión',
        example: '± 5 metros',
        purpose: 'Margen de error estimado por los sensores del dispositivo.',
      },
      {
        info: 'Altitud',
        example: '655 m sobre el nivel del mar',
        purpose: 'Elevación vertical para rutas de montaña y análisis topográficos.',
      },
    ],
    techTitle: 'Cómo Determina Tu Dispositivo Dónde Estás',
    techLead: 'Tu teléfono u ordenador combina diversas tecnologías de posicionamiento:',
    techTable: [
      {
        method: 'Satélites GNSS (GPS, Galileo)',
        accuracy: '3 a 10 metros en exteriores',
        when: 'Disponible en smartphones y tablets con visibilidad directa al cielo.',
      },
      {
        method: 'Triangulación Wi-Fi',
        accuracy: '15 a 50 metros',
        when: 'Ideal en interiores y ordenadores mediante el escaneo de routers cercanos.',
      },
      {
        method: 'Antenas de Telefonía Móvil',
        accuracy: '100 a 1.000 metros',
        when: 'Triangula señales celulares cuando la recepción satelital está obstaculizada.',
      },
      {
        method: 'Geolocalización por IP',
        accuracy: 'Nivel ciudad (5 a 50 km)',
        when: 'Método de respaldo si se deniega el GPS. Se altera si usas VPN.',
      },
    ],
    emergencyTitle: 'En Caso de Emergencia: Cómo Comunicar Tu Posición',
    emergencyBadge: 'Protocolo de Emergencia',
    emergencyText: 'Si te encuentras en peligro o necesitas auxilio, llama al 112 (Europa/América Latina) o 911. Indica primero tu municipio y calle. Si estás en una zona rural o carretera sin señalizar, lee tus coordenadas en grados decimales (ejemplo: «40 punto 4 1 6, menos 3 punto 7 0 3»). Los centros de despacho ingresan estos valores directamente en sus mapas de respuesta.',
    useCasesTitle: 'Usos Prácticos de Conocer Tu Ubicación Actual',
    useCases: [
      { bold: 'Emergencias y Asistencia en Carretera', text: 'Facilita tus coordenadas exactas a la grúa o ambulancia en tramos no numerados.' },
      { bold: 'Entregas y Paquetería', text: 'Confirma la entrada exacta de tu vivienda en zonas residenciales o parcelas rurales ambiguas.' },
      { bold: 'Senderismo y Montañismo', text: 'Anota tus coordenadas y altitud antes de ingresar a senderos sin cobertura regular.' },
      { bold: 'Punto de Encuentro', text: 'Envía un pin interactivo por WhatsApp o SMS para reunirte con amigos en parques o eventos masivos.' },
      { bold: 'Trabajo de Campo', text: 'Documenta la ubicación de parcelas, tasaciones inmobiliarias o fotografías geolocalizadas.' },
    ],
    troubleshootTitle: 'Mi Ubicación Es Incorrecta: ¿Cómo Solucionarlo?',
    troubleshootItems: [
      {
        title: 'Muestra Otra Ciudad o País',
        desc: 'Es probable que tengas una VPN activa o estés usando una red corporativa. Desactiva la VPN y activa el GPS nativo de tu teléfono.',
      },
      {
        title: 'Círculo de Precisión Muy Amplio',
        desc: 'Estás dentro de un edificio con muros gruesos. Acércate a una ventana o sal a la calle y vuelve a pulsar «Obtener Mi Ubicación».',
      },
      {
        title: 'Activar Permiso en Chrome (Android / PC)',
        desc: 'Toca el candado o icono de configuración en la barra de URL -> Permisos -> Ubicación -> selecciona «Permitir» y recarga.',
      },
      {
        title: 'Activar Permiso en Safari (iPhone / iOS)',
        desc: 'Ve a Ajustes del iPhone -> Privacidad y seguridad -> Localización -> Safari -> marca «Al usar la app».',
      },
    ],
    exploreTitle: 'Explora Tu Ubicación',
    exploreTitleAccent: 'Por Detalle',
    subNav: [
      { label: 'Mis Coordenadas GPS', href: '/es/my-location/gps/', desc: 'Visualiza coordenadas en DD, DMS y UTM para navegación en terreno.', icon: '🧭' },
      { label: 'Mis Coordenadas', href: '/es/my-location/coordinates/', desc: 'Panel geodésico completo en estándares civiles y militares.', icon: '📐' },
      { label: 'Mi Latitud y Longitud', href: '/es/my-location/latitude-longitude/', desc: 'Comprende tus paralelos, meridianos y hemisferios terrestres.', icon: '🌐' },
      { label: 'Mi Dirección Actual', href: '/es/my-location/address/', desc: 'Obtén tu número de calle, código postal y vecindario oficial.', icon: '📍' },
      { label: 'Mi Ciudad y Municipio', href: '/es/my-location/city/', desc: 'Conoce los límites administrativos de tu municipio actual.', icon: '🏙️' },
      { label: 'Mi Provincia o Estado', href: '/es/my-location/state/', desc: 'Identifica tu división territorial y gobierno regional.', icon: '🗺️' },
      { label: 'Mi País de Conexión', href: '/es/my-location/country/', desc: 'Consulta información territorial, código ISO y bandera.', icon: '🌍' },
      { label: 'Mi Ubicación por IP', href: '/es/my-location/ip/', desc: 'Comprueba la ubicación de tu conexión de red frente a tu GPS.', icon: '💻' },
    ],
    article: {
      whatShowsTitle: '¿Qué Muestra «Mi Ubicación Actual»?',
      whatShowsLead: 'Al pulsar «Obtener Mi Ubicación Actual», tu navegador consulta los sensores del dispositivo para obtener:',
      whatShowsList: [
        { bold: 'Coordenadas GPS (DD y DMS)', text: 'Latitud y longitud en grados decimales y grados-minutos-segundos' },
        { bold: 'Dirección Postal Completa', text: 'Calle y número obtenidos por geocodificación inversa con OpenStreetMap' },
        { bold: 'Ciudad, Provincia y País', text: 'Divisiones administrativas territoriales oficiales' },
        { bold: 'Radio de Precisión', text: 'Margen de error estimado en metros según la calidad de la señal' },
        { bold: 'Altitud', text: 'Altura sobre el nivel medio del mar calculada por satélite' },
        { bold: 'Mapa Interactivo', text: 'Vista gráfica con zoom, capa satelital y marcador centrado' },
      ],
      howDeterminedTitle: '¿Cómo Se Determina Tu Posición?',
      howDeterminedLead: 'Tu dispositivo utiliza una combinación de tecnologías espaciales y terrestres:',
      howDeterminedList: [
        { bold: 'Satélites GPS / Galileo', text: 'Posicionamiento satelital de 3 a 5 metros de precisión al aire libre' },
        { bold: 'Trilateración Wi-Fi', text: 'Identificación de redes inalámbricas cercanas para interiores' },
        { bold: 'Antenas Celulares', text: 'Triangulación de repetidores móviles en caso de cobertura satelital débil' },
        { bold: 'Geolocalización por IP', text: 'Estimación a nivel ciudad según el proveedor de internet' },
      ],
      privacyTitle: 'Privacidad y Protección de Datos',
      privacyText: 'Tu privacidad es fundamental. El cálculo GPS se realiza de forma 100% local en tu navegador mediante la API HTML5 Geolocation. Para mostrar la dirección postal, las coordenadas se envían de forma anónima al servicio público OpenStreetMap (Nominatim). No almacenamos ni registramos tu historial de movimientos en nuestros servidores.',
    },
    faqTitle: 'Preguntas',
    faqTitleAccent: 'Frecuentes',
    faqItems: [
      { question: '¿Cómo saber mi ubicación actual ahora mismo?', answer: 'Haz clic en «Obtener Mi Ubicación Actual» y acepta la solicitud de permiso del navegador. Tus coordenadas, dirección postal y mapa aparecerán en pocos segundos.' },
      { question: '¿Cuáles son mis coordenadas GPS exactas?', answer: 'Son tu latitud y longitud, mostradas en Grados Decimales (ej. 40.4168, -3.7038) y en Grados Minutos Segundos (DMS).' },
      { question: '¿Por qué mi navegador solicita permiso de ubicación?', answer: 'Por normativas de privacidad y seguridad W3C, ningún sitio web puede acceder a tus sensores GPS sin tu consentimiento voluntario.' },
      { question: '¿Qué diferencia hay entre ubicación GPS y por IP?', answer: 'El GPS utiliza satélites con precisión de 3 a 5 metros. La ubicación por IP depende de los servidores de tu proveedor de internet, con márgenes de error de 5 a 50 km.' },
      { question: '¿Cómo comparto mi ubicación por WhatsApp o SMS?', answer: 'Pulsa el botón «WhatsApp» o «SMS» debajo de las coordenadas: se creará un mensaje automático con tus datos y el enlace a Google Maps.' },
      { question: '¿Por qué aparece una ciudad equivocada?', answer: 'Si usas VPN o red móvil con enrutamiento remoto, tu navegador puede recurrir a la IP. Desconecta tu VPN para usar el GPS físico.' },
      { question: '¿Cómo convierto mis coordenadas a otros formatos?', answer: 'Usa nuestro <a href="/es/tools/coordinate-converter/">Conversor de Coordenadas</a> gratuito para transformar valores a DMS, UTM o MGRS.' },
      { question: '¿Funciona en ordenadores de sobremesa?', answer: 'Sí, empleando el posicionamiento Wi-Fi y la dirección IP con una precisión de 15 a 50 metros.' },
      { question: '¿Guardan mis datos o mi historial de ubicaciones?', answer: 'No. El cálculo se ejecuta en tu navegador y no guardamos ningún registro en el servidor.' },
      { question: '¿Puedo obtener mis coordenadas sin conexión?', answer: 'El GPS del móvil recibe señales satelitales sin internet, pero cargar el mapa y resolver la dirección en texto requiere conexión de datos.' },
    ],
  },

  // ==========================================
  // GERMAN (de) — TARGET: "mein aktueller standort"
  // ==========================================
  de: {
    metaTitle: 'Mein Aktueller Standort — Wo Bin Ich Jetzt? GPS-Koordinaten & Adresse | MyLocationLab',
    metaDesc: 'Ermitteln Sie Ihren aktuellen Standort sofort: GPS-Koordinaten (DD, GMS), Adresse, Stadt und Genauigkeit auf einer interaktiven Live-Karte. Kostenlos und diskret.',
    pageTitle: 'Mein Aktueller',
    pageTitleAccent: 'Standort',
    pageDesc: 'Wo bin ich gerade? Finden Sie Ihren exakten aktuellen Standort mit präzisen GPS-Koordinaten, vollständiger Postadresse und interaktiver Live-Karte in Echtzeit.',
    reviewedBy: 'MyLocationLab Redaktionsteam',
    reviewerTitle: 'Experte für Geoinformationssysteme und Satellitennavigation',
    cardTitle: 'Ihr Aktueller Standort in Echtzeit',
    btnGetLocation: '📍 Meinen Aktuellen Standort Abrufen',
    detectingText: 'Satellitensignale und Geodaten werden ermittelt...',
    labels: {
      lat: 'Breitengrad (DD)',
      lng: 'Längengrad (DD)',
      dms: 'GMS-Koordinaten',
      address: 'Vollständige Adresse',
      city: 'Stadt / Gemeinde',
      state: 'Bundesland / Region',
      country: 'Land',
      accuracy: 'GPS-Genauigkeit',
      altitude: 'Höhe über dem Meeresspiegel',
    },
    actions: {
      copy: '📋 DD Kopieren',
      copyDms: '📋 GMS Kopieren',
      copyAddress: '📋 Adresse Kopieren',
      share: '🔗 Teilen',
      shareWhatsApp: '💬 WhatsApp',
      shareSms: '✉️ SMS',
      openMaps: '🗺️ Google Maps',
    },
    stepsTitle: 'So Ermitteln Sie Ihren Aktuellen Standort in 4 Schritten',
    stepsLead: 'Folgen Sie dieser kurzen Anleitung zur präzisen Standortbestimmung:',
    stepsTip: 'Tipp: In Innenräumen kann der Satellitenempfang schwächer sein. Treten Sie an ein Fenster oder ins Freie für metergenaue Ergebnisse (± 3 bis 5 Meter).',
    steps: [
      {
        num: '01',
        title: 'Klicken Sie auf «Meinen Aktuellen Standort Abrufen»',
        desc: 'Startet die sichere HTML5-Geolocation-Schnittstelle Ihres Webbrowsers.',
      },
      {
        num: '02',
        title: 'Erlauben Sie den Standortzugriff',
        desc: 'Wählen Sie «Zulassen» oder «Beim Verwenden der App». Ohne Ihre Zustimmung findet kein Zugriff statt.',
      },
      {
        num: '03',
        title: 'Warten Sie auf die Satellitenfixierung',
        desc: 'Der blaue Genauigkeitskreis auf der Karte verengt sich, sobald die GNSS-Satelliten erfasst sind.',
      },
      {
        num: '04',
        title: 'Kopieren, Teilen oder Routenplanung',
        desc: 'Lesen Sie Koordinaten in DD und GMS ab, kopieren Sie die Adresse oder teilen Sie den Standort per WhatsApp.',
      },
    ],
    telemetryTitle: 'Was «Mein Standort» Anzeigt und Wofür Es Verwendet Wird',
    telemetryLead: 'Übersicht aller geodätischen Parameter unseres Kartensystems:',
    telemetryTable: [
      {
        info: 'Breitengrad / Längengrad (DD)',
        example: '52.520008, 13.404954',
        purpose: 'Digitales Standardformat für Google Maps, Navigationsgeräte und Web-APIs.',
      },
      {
        info: 'GMS-Koordinaten',
        example: '52° 31\' 12.0" N 13° 24\' 17.8" O',
        purpose: 'Grad, Minuten, Sekunden für Wanderkarten, Seefahrt und Rettungsdienste.',
      },
      {
        info: 'Offizielle Straßenadresse',
        example: 'Alexanderplatz 1, 10178 Berlin',
        purpose: 'Paketzustellung, Taxibestellungen und präzise Treffpunkte.',
      },
      {
        info: 'Stadt, Bundesland, Land',
        example: 'Berlin, Land Berlin, Deutschland',
        purpose: 'Verwaltungsgrenzen und amtliche Gebietsstrukturen.',
      },
      {
        info: 'Genauigkeitsradius',
        example: '± 4 Meter',
        purpose: 'Statistischer Toleranzbereich Ihrer gemessenen Position.',
      },
      {
        info: 'Höhe (Elevation)',
        example: '34 m über NHN',
        purpose: 'Höhenprofil für Wanderungen, Bergsport und Geländeanalyse.',
      },
    ],
    techTitle: 'Wie Ihr Gerät Ihren Standort Bestimmt',
    techLead: 'Moderne Smartphones und Computer kombinieren verschiedene Sensoren:',
    techTable: [
      {
        method: 'GNSS-Satelliten (Galileo, GPS)',
        accuracy: '3 bis 10 Meter im Freien',
        when: 'Aktiv auf Smartphones und Tablets mit freier Sicht zum Himmel.',
      },
      {
        method: 'WLAN-Triangulation',
        accuracy: '15 bis 50 Meter',
        when: 'Hervorragend in Gebäuden und auf PCs durch Abgleich bekannter WLAN-Router.',
      },
      {
        method: 'Mobilfunkmasten',
        accuracy: '100 bis 1.000 Meter',
        when: 'Trianguliert Funksignale bei fehlendem Satellitenkontakt.',
      },
      {
        method: 'IP-Standortbestimmung',
        accuracy: 'Stadtebene (5 bis 50 km)',
        when: 'Notlösung ohne GPS-Berechtigung. Durch VPNs oft stark verfälscht.',
      },
    ],
    emergencyTitle: 'Notfall-Protokoll: Standort Schnell Durchgeben',
    emergencyBadge: 'Notrufhinweis (D-A-CH)',
    emergencyText: 'Wählen Sie im Notfall die 112 (Feuerwehr/Rettungsdienst) oder 110 (Polizei). Nennen Sie zuerst Ort und Straße. In unbewohnten Gebieten, Wäldern oder Bergen lesen Sie Ihre Breiten- und Längengrade in Dezimalgrad vor (z. B. «52 Komma 5 2 0, 13 Komma 4 0 4»). Rettungsleitstellen können diese Koordinaten direkt in Einsatzleitsysteme einspeisen.',
    useCasesTitle: 'Praktische Einsatzbereiche für «Mein Aktueller Standort»',
    useCases: [
      { bold: 'Pannenhilfe & Notruf', text: 'Übermitteln Sie Ihre genauen Koordinaten auf Autobahnen oder Landstraßen ohne Hausnummern.' },
      { bold: 'Lieferdienste & Spedition', text: 'Bestätigen Sie die genaue Zufahrt bei Neubaugebieten oder ländlichen Gehöften.' },
      { bold: 'Wandern & Outdoor-Touren', text: 'Notieren Sie Wegpunkte und Höhenmeter auf topografischen Wanderrouten.' },
      { bold: 'Treffpunkte Teilen', text: 'Senden Sie Ihren Standort per WhatsApp oder SMS, um sich in großen Parks oder Innenstädten zu treffen.' },
      { bold: 'Dokumentation vor Ort', text: 'Halten Sie georeferenzierte Daten für Fotografie, Bauabnahmen oder Immobilien fest.' },
    ],
    troubleshootTitle: 'Standort Ungenau oder Falsch: Was Hilft?',
    troubleshootItems: [
      {
        title: 'Falsche Stadt oder Region Angezeigt',
        desc: 'Sie nutzen vermutlich ein VPN oder eine Firmen-IP. Deaktivieren Sie das VPN und schalten Sie das GPS Ihres Geräts ein.',
      },
      {
        title: 'Sehr Großer Blauer Kreis',
        desc: 'Sie befinden sich in einem geschlossenen Gebäude. Gehen Sie an ein Fenster oder ins Freie und klicken Sie erneut auf Standort abrufen.',
      },
      {
        title: 'Berechtigung in Chrome (Android / PC)',
        desc: 'Klicken Sie auf das Schloss-Symbol neben der Webadresse -> Berechtigungen -> Standort -> «Zulassen» wählen und Seite neu laden.',
      },
      {
        title: 'Berechtigung in Safari (iPhone / iOS)',
        desc: 'Gehen Sie zu Einstellungen -> Datenschutz & Sicherheit -> Ortungsdienste -> Safari -> «Beim Verwenden der App» aktivieren.',
      },
    ],
    exploreTitle: 'Erkunden Sie Ihren Standort',
    exploreTitleAccent: 'Nach Kriterien',
    subNav: [
      { label: 'Meine GPS-Koordinaten', href: '/de/my-location/gps/', desc: 'Rohe Dezimal-, GMS- und UTM-Koordinaten für Navigation im Gelände.', icon: '🧭' },
      { label: 'Meine Koordinaten', href: '/de/my-location/coordinates/', desc: 'Komplette Koordinatentelemetrie in zivilen und militärischen Standards.', icon: '📐' },
      { label: 'Breitengrad & Längengrad', href: '/de/my-location/latitude-longitude/', desc: 'Verstehen Sie Ihre Erdhalbkugeln, Breitenkreise und Meridiane.', icon: '🌐' },
      { label: 'Meine Aktuelle Adresse', href: '/de/my-location/address/', desc: 'Ermitteln Sie Hausnummer, Straße, Postleitzahl und Stadtteil.', icon: '📍' },
      { label: 'Meine Stadt & Gemeinde', href: '/de/my-location/city/', desc: 'Sehen Sie Ihre offizielle Gemeindezugehörigkeit und Verwaltungsgrenzen.', icon: '🏙️' },
      { label: 'Mein Bundesland', href: '/de/my-location/state/', desc: 'Bestimmen Sie Ihr Bundesland bzw. Ihren Kanton oder Bezirk.', icon: '🗺️' },
      { label: 'Mein Aufenthaltsland', href: '/de/my-location/country/', desc: 'Prüfen Sie Territorialdaten, ISO-Ländercodes und Staatsgebiet.', icon: '🌍' },
      { label: 'Mein Standort nach IP', href: '/de/my-location/ip/', desc: 'Vergleichen Sie Ihre Netzwerk-IP mit Ihrem echten Satelliten-GPS.', icon: '💻' },
    ],
    article: {
      whatShowsTitle: 'Was Zeigt «Mein Aktueller Standort»?',
      whatShowsLead: 'Beim Klick auf «Meinen Aktuellen Standort Abrufen» liest Ihr Browser die Hardwaresensoren aus:',
      whatShowsList: [
        { bold: 'GPS-Koordinaten (DD & GMS)', text: 'Breiten- und Längengrade in Dezimalgrad sowie Grad-Minuten-Sekunden' },
        { bold: 'Postadresse', text: 'Straßenname und Hausnummer durch OpenStreetMap-Rückwärtsgeokodierung' },
        { bold: 'Stadt, Bundesland, Land', text: 'Offizielle Gebiets- und Verwaltungsgrenzen' },
        { bold: 'Genauigkeitsradius', text: 'Toleranzbereich in Metern basierend auf Satellitensignalen' },
        { bold: 'Höhe', text: 'Gemessene Elevation über dem Meeresspiegel' },
        { bold: 'Interaktive Karte', text: 'Flüssige Vektorkarte mit Zoomfunktion und zentrierter Positionsnadel' },
      ],
      howDeterminedTitle: 'Wie Wird Ihr Standort Ermittelt?',
      howDeterminedLead: 'Ihr Endgerät nutzt ein Zusammenspiel moderner Ortungsmethoden:',
      howDeterminedList: [
        { bold: 'GNSS-Satelliten (GPS, Galileo)', text: '3 bis 5 Meter Genauigkeit unter freiem Himmel' },
        { bold: 'WLAN-Ortung', text: 'Abgleich mit Netzwerkkennungen umliegender Router in Gebäuden' },
        { bold: 'Mobilfunk-Triangulation', text: 'Signalstärkenmessung zu umliegenden Sendemasten' },
        { bold: 'IP-Standort', text: 'Ungefähre Zuordnung über den Internet-Provider bei fehlendem GPS' },
      ],
      privacyTitle: 'Datenschutz & Vertraulichkeit (DSGVO-konform)',
      privacyText: 'Ihre Privatsphäre ist geschützt. Die GPS-Berechnung erfolgt 100% lokal in Ihrem Browser über die HTML5 Geolocation API. Zur Ermittlung der Textadresse werden die Koordinaten anonymisiert an den öffentlichen Dienst OpenStreetMap (Nominatim) übermittelt. Wir speichern keine Standortprofile oder Bewegungsmuster auf unseren Servern.',
    },
    faqTitle: 'Häufig Gestellte',
    faqTitleAccent: 'Fragen',
    faqItems: [
      { question: 'Wie finde ich meinen aktuellen Standort jetzt sofort?', answer: 'Klicken Sie auf «Meinen Aktuellen Standort Abrufen» und bestätigen Sie die Anfrage im Browser. Koordinaten, Adresse und Karte erscheinen umgehend.' },
      { question: 'Was sind meine genauen GPS-Koordinaten?', answer: 'Ihre Koordinaten bestehen aus Breiten- und Längengrad, dargestellt in Dezimalgrad (z. B. 52.5200, 13.4050) und GMS (52° 31\' 12" N 13° 24\' 18" O).' },
      { question: 'Warum verlangt der Browser eine Erlaubnis?', answer: 'Aus Datenschutzgründen (W3C-Standard und DSGVO) darf keine Website ohne Ihre explizite Freigabe auf GPS-Daten zugreifen.' },
      { question: 'Was ist der Unterschied zwischen GPS und IP-Ortung?', answer: 'GPS nutzt Satellitensignale mit 3 bis 5 Metern Genauigkeit. Die IP-Ortung schätzt nur den Netzknoten Ihres Providers (Abweichung oft 10 bis 50 km).' },
      { question: 'Wie teile ich meinen Standort per WhatsApp oder SMS?', answer: 'Klicken Sie auf «WhatsApp» oder «SMS» unter den Werten: Eine vorgefertigte Nachricht mit Koordinaten, Adresse und Google-Maps-Link öffnet sich direkt.' },
      { question: 'Warum wird eine falsche Stadt angezeigt?', answer: 'Das passiert, wenn Sie ein VPN nutzen oder Ihr Gerät den Standort mangels GPS per IP schätzt. Trennen Sie das VPN für echte Satellitendaten.' },
      { question: 'Wie wandle ich Koordinaten in andere Formate um?', answer: 'Nutzen Sie unseren kostenlosen <a href="/de/tools/coordinate-converter/">Koordinaten-Konverter</a> für Umrechnungen in GMS, UTM oder MGRS.' },
      { question: 'Funktioniert die Ortung auch auf PCs und Laptops?', answer: 'Ja, über WLAN-Triangulation und IP-Daten mit einer Genauigkeit von 15 bis 50 Metern.' },
      { question: 'Werden meine Standorte auf Servern gespeichert?', answer: 'Nein. Alle Berechnungen laufen temporär im Browser ab; es existiert kein Bewegungsprotokoll.' },
      { question: 'Geht die Positionsbestimmung auch offline?', answer: 'Der GPS-Chip erfasst Satellitensignale offline, aber für die Kartendarstellung und Adresse ist eine Internetverbindung nötig.' },
    ],
  },

  // ==========================================
  // PORTUGUESE (pt) — TARGET: "minha localização atual"
  // ==========================================
  pt: {
    metaTitle: 'Minha Localização Atual — Onde Estou Agora? Coordenadas GPS e Endereço | MyLocationLab',
    metaDesc: 'Descubra sua localização atual em tempo real: coordenadas GPS (DD, DMS), endereço completo, CEP, cidade e raio de precisão no mapa interativo.',
    pageTitle: 'Minha Localização',
    pageTitleAccent: 'Atual',
    pageDesc: 'Onde estou agora? Descubra sua localização atual exata com coordenadas GPS em tempo real, endereço postal completo e mapa interativo de alta precisão.',
    reviewedBy: 'Equipe Editorial MyLocationLab',
    reviewerTitle: 'Especialista em Sistemas Geoespaciais e Cartografia Digital',
    cardTitle: 'Sua Localização Atual em Tempo Real',
    btnGetLocation: '📍 Obter Minha Localização Atual',
    detectingText: 'Sincronizando satélites GPS e telemetria...',
    labels: {
      lat: 'Latitude (DD)',
      lng: 'Longitude (DD)',
      dms: 'Coordenadas (DMS)',
      address: 'Endereço Completo',
      city: 'Cidade / Município',
      state: 'Estado / Região (UF)',
      country: 'País',
      accuracy: 'Precisão GPS',
      altitude: 'Altitude (Elevação)',
    },
    actions: {
      copy: '📋 Copiar DD',
      copyDms: '📋 Copiar DMS',
      copyAddress: '📋 Copiar Endereço',
      share: '🔗 Compartilhar',
      shareWhatsApp: '💬 WhatsApp',
      shareSms: '✉️ SMS',
      openMaps: '🗺️ Google Maps',
    },
    stepsTitle: 'Como Saber Minha Localização Atual em 4 Passos',
    stepsLead: 'Siga este passo a passo para identificar seu ponto geográfico exato:',
    stepsTip: 'Dica: Em ambientes fechados, o sinal de satélite pode oscilar. Aproxime-se de uma janela ou vá a céu aberto para atingir precisão métrica (± 3 a 5 metros).',
    steps: [
      {
        num: '01',
        title: 'Clique em «Obter Minha Localização Atual»',
        desc: 'Acione a API HTML5 Geolocation nativa do seu navegador com segurança.',
      },
      {
        num: '02',
        title: 'Autorize a permissão no navegador',
        desc: 'Escolha «Permitir» ou «Durante o uso do app». Nenhum dado é acessado sem sua autorização.',
      },
      {
        num: '03',
        title: 'Aguarde o círculo azul estabilizar',
        desc: 'O círculo de precisão no mapa se fecha à medida que os satélites GNSS travam em seu dispositivo.',
      },
      {
        num: '04',
        title: 'Copie, compartilhe ou visualize',
        desc: 'Veja coordenadas em DD e DMS, copie o endereço postal com CEP ou compartilhe no WhatsApp.',
      },
    ],
    telemetryTitle: 'O Que «Minha Localização» Mostra e Para Que Serve',
    telemetryLead: 'Entenda cada informação geográfica disponibilizada na tela:',
    telemetryTable: [
      {
        info: 'Latitude / Longitude (DD)',
        example: '-23.550520, -46.633308',
        purpose: 'Formato digital padrão para Google Maps, aplicativos de transporte e GPS.',
      },
      {
        info: 'Coordenadas (DMS)',
        example: '23° 33\' 1.9" S 46° 37\' 59.9" O',
        purpose: 'Graus, Minutos e Segundos para cartas náuticas, aviação e trilhas em mata.',
      },
      {
        info: 'Endereço e CEP',
        example: 'Praça da Sé, 01001-000 São Paulo, SP',
        purpose: 'Entregas, pedidos de aplicativo e preenchimento de cadastros.',
      },
      {
        info: 'Município e Estado (UF)',
        example: 'São Paulo, SP, Brasil',
        purpose: 'Jurisdição administrativa territorial oficial.',
      },
      {
        info: 'Raio de Precisão',
        example: '± 5 metros',
        purpose: 'Margem estatística de incerteza dos sensores do aparelho.',
      },
      {
        info: 'Altitude',
        example: '760 m acima do nível do mar',
        purpose: 'Elevação do terreno para trilhas, ciclismo e topografia.',
      },
    ],
    techTitle: 'Como Seu Dispositivo Determina Onde Você Está',
    techLead: 'Seu smartphone ou computador utiliza uma combinação de tecnologias complementares:',
    techTable: [
      {
        method: 'Satélites GNSS (GPS, Galileo)',
        accuracy: '3 a 10 metros em céu aberto',
        when: 'Ideal em celulares e tablets com visão desobstruída do céu.',
      },
      {
        method: 'Triangulação Wi-Fi',
        accuracy: '15 a 50 metros',
        when: 'Excelente em ambientes internos ao mapear roteadores sem fio próximos.',
      },
      {
        method: 'Antenas de Telefonia Celular',
        accuracy: '100 a 1.000 metros',
        when: 'Calcula o tempo de resposta das torres de operadoras móveis.',
      },
      {
        method: 'Geolocalização por IP',
        accuracy: 'Nível da cidade (5 a 50 km)',
        when: 'Recurso de contingência se o GPS for negado. Alterado por VPNs.',
      },
    ],
    emergencyTitle: 'Em Caso de Emergência: Como Informar Sua Localização',
    emergencyBadge: 'Protocolo de Emergência (Brasil / Portugal)',
    emergencyText: 'Em caso de emergência no Brasil, ligue 190 (Polícia Militar), 192 (SAMU) ou 193 (Corpo de Bombeiros). Em Portugal e na Europa, ligue 112. Diga seu município e rua. Se estiver em rodovia, zona rural ou trilha, leia suas coordenadas em graus decimais (ex: «menos 23 ponto 5 5 0, menos 46 ponto 6 3 3»). Os despachantes de resgate inserem esses números diretamente em seus sistemas de despacho.',
    useCasesTitle: 'Usos Práticos para Saber Sua Localização Atual',
    useCases: [
      { bold: 'Socorro e Assistência na Estrada', text: 'Passe sua localização exata para o guincho ou socorro médico em rodovias sem placas visíveis.' },
      { bold: 'Entregas e Encomendas', text: 'Confirme a entrada correta de condomínios, chácaras ou ruas sem numeração ordenada.' },
      { bold: 'Trilhas e Ecoturismo', text: 'Marque coordenadas e altitude antes de entrar em áreas florestais ou montanhosas.' },
      { bold: 'Ponto de Encontro', text: 'Envie sua localização pelo WhatsApp para amigos encontrarem você em eventos, praças ou praias.' },
      { bold: 'Trabalho de Campo e Imóveis', text: 'Registre metadados geográficos para laudos periciais, vistorias e fotos de imóveis.' },
    ],
    troubleshootTitle: 'Localização Errada ou Imprecisa: O Que Fazer?',
    troubleshootItems: [
      {
        title: 'Mostra Outra Cidade ou Estado',
        desc: 'Você provavelmente está com uma VPN ativada ou sua rede corporativa usa um servidor central. Desative a VPN e ligue o GPS do seu smartphone.',
      },
      {
        title: 'Círculo Azul Muito Grande',
        desc: 'Você está no interior de um prédio ou subsolo. Vá para perto de uma janela ou saia ao ar livre e clique novamente em Obter Localização.',
      },
      {
        title: 'Permitir Acesso no Chrome (Android / PC)',
        desc: 'Toque no cadeado ao lado da URL -> Permissões -> Localização -> selecione «Permitir» e atualize a página.',
      },
      {
        title: 'Permitir Acesso no Safari (iPhone / iOS)',
        desc: 'Acesse Ajustes do iPhone -> Privacidade e Segurança -> Serviços de Localização -> Safari -> selecione «Durante o Uso do App».',
      },
    ],
    exploreTitle: 'Explore Sua Localização',
    exploreTitleAccent: 'Por Detalhe',
    subNav: [
      { label: 'Minhas Coordenadas GPS', href: '/pt/my-location/gps/', desc: 'Visualize coordenadas em DD, DMS e UTM para campo e navegação.', icon: '🧭' },
      { label: 'Minhas Coordenadas', href: '/pt/my-location/coordinates/', desc: 'Painel geodésico completo em formatos civis e militares.', icon: '📐' },
      { label: 'Minha Latitude e Longitude', href: '/pt/my-location/latitude-longitude/', desc: 'Entenda seus paralelos, meridianos e hemisférios geográficos.', icon: '🌐' },
      { label: 'Meu Endereço Atual', href: '/pt/my-location/address/', desc: 'Descubra nome da rua, número, bairro e CEP em que você está.', icon: '📍' },
      { label: 'Minha Cidade e Município', href: '/pt/my-location/city/', desc: 'Consulte limites municipais e informações da sua comarca.', icon: '🏙️' },
      { label: 'Meu Estado e Região (UF)', href: '/pt/my-location/state/', desc: 'Identifique sua unidade federativa e divisão regional.', icon: '🗺️' },
      { label: 'Meu País de Origem', href: '/pt/my-location/country/', desc: 'Verifique dados territoriais, código ISO e jurisdição nacional.', icon: '🌍' },
      { label: 'Localização por IP', href: '/pt/my-location/ip/', desc: 'Compare a rota do seu provedor de internet com o GPS real.', icon: '💻' },
    ],
    article: {
      whatShowsTitle: 'O Que «Minha Localização Atual» Mostra?',
      whatShowsLead: 'Ao clicar em «Obter Minha Localização Atual», o navegador aciona os sensores do aparelho e exibe:',
      whatShowsList: [
        { bold: 'Coordenadas GPS (DD e DMS)', text: 'Latitude e longitude em graus decimais e graus-minutos-segundos' },
        { bold: 'Endereço e CEP', text: 'Rua, número e CEP resolvidos via geocodificação reversa OpenStreetMap' },
        { bold: 'Cidade, Estado e País', text: 'Limites territoriais oficiais e divisão política' },
        { bold: 'Raio de Precisão', text: 'Margem estimada em metros indicando a confiabilidade do sinal' },
        { bold: 'Altitude', text: 'Elevação medida acima do nível médio do mar' },
        { bold: 'Mapa Interativo em Tempo Real', text: 'Visualização vetorial com zoom, camada satélite e pino centralizado' },
      ],
      howDeterminedTitle: 'Como Sua Posição É Calculada?',
      howDeterminedLead: 'Seu aparelho combina sinais de satélite e redes terrestres:',
      howDeterminedList: [
        { bold: 'Satélites GNSS (GPS, Galileo)', text: 'Trilateração espacial precisa de 3 a 5 metros ao ar livre' },
        { bold: 'Triangulação Wi-Fi', text: 'Mapeamento de pontos de acesso Wi-Fi próximos em ambientes internos' },
        { bold: 'Torres de Telefonia Móvel', text: 'Cálculo de sinal entre antenas celulares' },
        { bold: 'Geolocalização IP', text: 'Estimativa baseada no seu provedor de internet como contingência' },
      ],
      privacyTitle: 'Privacidade e Segurança dos Dados (Conforme LGPD)',
      privacyText: 'Sua privacidade é respeitada integralmente. O cálculo das coordenadas ocorre no seu próprio navegador via API HTML5 Geolocation. Para converter coordenadas em endereço legível, os dados são transmitidos de forma anônima ao serviço público OpenStreetMap (Nominatim). Não armazenamos históricos de localização nem perfis de usuários em nossos servidores.',
    },
    faqTitle: 'Perguntas',
    faqTitleAccent: 'Frequentes',
    faqItems: [
      { question: 'Como saber minha localização atual agora?', answer: 'Clique em «Obter Minha Localização Atual» e autorize o navegador. Suas coordenadas, endereço e mapa aparecerão em instantes.' },
      { question: 'Quais são minhas coordenadas GPS exatas?', answer: 'São sua latitude e longitude, exibidas em Graus Decimais (ex: -23.5505, -46.6333) e em Graus Minutos Segundos (DMS).' },
      { question: 'Por que o navegador pede autorização de localização?', answer: 'Por padrões de segurança do W3C e leis de privacidade, nenhum site pode acessar os sensores GPS do seu dispositivo sem permissão explícita.' },
      { question: 'Qual a diferença entre GPS e localização por IP?', answer: 'O GPS usa satélites com precisão de 3 a 5 metros. A localização por IP apenas estima a central da sua operadora de internet, com erro de 5 a 50 km.' },
      { question: 'Como compartilhar minha localização pelo WhatsApp?', answer: 'Clique no botão «WhatsApp» abaixo das coordenadas: uma mensagem pronta com coordenadas, endereço e link do Google Maps será aberta no app.' },
      { question: 'Por que minha localização mostra outra cidade?', answer: 'Se você usa VPN ou rede móvel corporativa, sua conexão pode estar saindo por outro estado. Desative a VPN para usar o GPS real do celular.' },
      { question: 'Como converter coordenadas para outros formatos?', answer: 'Utilize nosso <a href="/pt/tools/coordinate-converter/">Conversor de Coordenadas</a> gratuito para transformar valores em DMS, UTM ou MGRS.' },
      { question: 'Funciona em computadores de mesa ou notebooks?', answer: 'Sim, utilizando o posicionamento por Wi-Fi e endereço IP com precisão média de 15 a 50 metros.' },
      { question: 'Minhas rotas ou locais ficam gravados nos servidores?', answer: 'Não. Os cálculos ocorrem na sessão do navegador e não salvamos nenhum histórico de rastreamento.' },
      { question: 'Consigo ver minhas coordenadas sem sinal de internet?', answer: 'O chip GPS calcula coordenadas via satélite sem internet, mas carregar o mapa e o endereço textual requer conexão de dados.' },
    ],
  },

  // ==========================================
  // HINDI (hi) — TARGET: "मेरी वर्तमान लोकेशन"
  // ==========================================
  hi: {
    metaTitle: 'मेरी वर्तमान लोकेशन — मैं अभी कहाँ हूँ? GPS निर्देशांक और पता | MyLocationLab',
    metaDesc: 'अपनी वर्तमान लोकेशन तुरंत लाइव मैप पर देखें: सटीक GPS निर्देशांक (DD और DMS), पता, शहर और सटीकता दायरा। मुफ़्त और सुरक्षित।',
    pageTitle: 'मेरी वर्तमान',
    pageTitleAccent: 'लोकेशन',
    pageDesc: 'मैं अभी कहाँ हूँ? रीयल-टाइम GPS निर्देशांक, डाक पता और लाइव इंटरेक्टिव मैप के साथ अपनी सटीक वर्तमान लोकेशन का पता लगाएं।',
    reviewedBy: 'MyLocationLab संपादकीय टीम',
    reviewerTitle: 'भू-स्थानिक प्रणाली एवं जीपीएस विशेषज्ञ',
    cardTitle: 'आपकी वर्तमान लोकेशन (लाइव)',
    btnGetLocation: '📍 मेरी वर्तमान लोकेशन प्राप्त करें',
    detectingText: 'सैटेलाइट सिग्नल और टेलीमेट्री खोजी जा रही है...',
    labels: {
      lat: 'अक्षांश (Latitude)',
      lng: 'देशांतर (Longitude)',
      dms: 'DMS निर्देशांक',
      address: 'पूरा पता',
      city: 'शहर / कस्बा',
      state: 'राज्य / प्रांत',
      country: 'देश',
      accuracy: 'GPS सटीकता',
      altitude: 'ऊंचाई (समुद्र तल से)',
    },
    actions: {
      copy: '📋 DD कॉपी करें',
      copyDms: '📋 DMS कॉपी करें',
      copyAddress: '📋 पता कॉपी करें',
      share: '🔗 शेयर करें',
      shareWhatsApp: '💬 WhatsApp',
      shareSms: '✉️ SMS',
      openMaps: '🗺️ Google Maps',
    },
    stepsTitle: 'अपनी वर्तमान लोकेशन जानने के 4 आसान चरण',
    stepsLead: 'अपनी सही भौगोलिक स्थिति और निर्देशांक जानने के लिए इन चरणों का पालन करें:',
    stepsTip: 'सुझाव: कमरे के अंदर सैटेलाइट सिग्नल धीमा हो सकता है। 3 से 5 मीटर की सटीक रेंज के लिए खिड़की के पास जाएं या खुले आसमान के नीचे आएं।',
    steps: [
      {
        num: '01',
        title: '«मेरी वर्तमान लोकेशन प्राप्त करें» पर क्लिक करें',
        desc: 'अपने ब्राउज़र के सुरक्षित HTML5 Geolocation API को सक्रिय करें।',
      },
      {
        num: '02',
        title: 'ब्राउज़र में लोकेशन अनुमति दें',
        desc: 'पॉप-अप आने पर «Allow» चुनें। आपकी अनुमति के बिना कोई डेटा एक्सेस नहीं होता।',
      },
      {
        num: '03',
        title: 'नीले सटीकता दायरे को स्थिर होने दें',
        desc: 'जैसे ही GNSS सैटेलाइट आपके फोन से जुड़ते हैं, मैप पर दायरा सटीक हो जाता है।',
      },
      {
        num: '04',
        title: 'कॉपी करें, शेयर करें या मैप खोलें',
        desc: 'DD और DMS फॉर्मेट में निर्देशांक पढ़ें, पता कॉपी करें या WhatsApp पर भेजें।',
      },
    ],
    telemetryTitle: '«मेरी लोकेशन» क्या दिखाती है और इसका क्या उपयोग है',
    telemetryLead: 'हमारे जियोलोकेशन सिस्टम द्वारा प्रदान किए जाने वाले डेटा का विवरण:',
    telemetryTable: [
      {
        info: 'अक्षांश / देशांतर (DD)',
        example: '28.613939, 77.209021',
        purpose: 'Google Maps, कैब ऐप्स और ऑनलाइन फ़ॉर्म के लिए डिजिटल निर्देशांक।',
      },
      {
        info: 'DMS निर्देशांक',
        example: '28° 36\' 50.2" N 77° 12\' 32.5" E',
        purpose: 'डिग्री, मिनट, सेकंड फॉर्मेट - ट्रैकिंग, नेविगेशन और बचाव दलों के लिए।',
      },
      {
        info: 'स्थानीय सड़क का पता',
        example: 'राजपथ, नई दिल्ली, 110001',
        purpose: 'डिलीवरी, आपातकालीन सहायता और पिकअप पॉइंट सत्यापन।',
      },
      {
        info: 'शहर, राज्य और देश',
        example: 'नई दिल्ली, दिल्ली, भारत',
        purpose: 'आधिकारिक प्रशासनिक सीमाएं और क्षेत्रीय पहचान।',
      },
      {
        info: 'सटीकता दायरा (Accuracy)',
        example: '± 5 मीटर',
        purpose: 'हार्डवेयर सेंसर के अनुसार आपकी लोकेशन का संभावित दायरा।',
      },
      {
        info: 'ऊंचाई (Altitude)',
        example: '216 मीटर समुद्र तल से',
        purpose: 'पहाड़ों, ट्रेकिंग और टोपोग्राफिक समझ के लिए वर्टिकल ऊंचाई।',
      },
    ],
    techTitle: 'आपका डिवाइस आपकी लोकेशन कैसे ढूंढता है',
    techLead: 'स्मार्टफोन और कंप्यूटर स्थिति निर्धारित करने के लिए कई सेंसर का उपयोग करते हैं:',
    techTable: [
      {
        method: 'GNSS / GPS सैटेलाइट्स',
        accuracy: '3 से 10 मीटर (खुले में)',
        when: 'स्मार्टफोन पर जब आसमान साफ दिखाई दे रहा हो।',
      },
      {
        method: 'वाई-फाई ट्राइएंगुलेशन',
        accuracy: '15 से 50 मीटर',
        when: 'कमरों के भीतर और डेस्कटॉप कंप्यूटर पर पास के वाई-फाई राउटर से।',
      },
      {
        method: 'सेलुलर मोबाइल टावर्स',
        accuracy: '100 से 1,000 मीटर',
        when: 'जब सैटेलाइट सिग्नल कमजोर हों तो मोबाइल टावर की दूरी से गणना।',
      },
      {
        method: 'IP जियोलोकेशन',
        accuracy: 'शहर स्तर (5 से 50 किमी)',
        when: 'बैकअप विकल्प। VPN चालू होने पर यह किसी अन्य शहर का हो सकता है।',
      },
    ],
    emergencyTitle: 'आपात स्थिति में: अपनी लोकेशन कैसे बताएं',
    emergencyBadge: 'आपातकालीन प्रोटोकॉल (भारत)',
    emergencyText: 'यदि आप संकट में हैं, तो तुरंत 112 (राष्ट्रीय आपातकालीन हेल्पलाइन) पर कॉल करें। पहले अपना शहर और नजदीकी लैंडमार्क बताएं। यदि आप किसी हाईवे या जंगल में हैं, तो स्क्रीन पर दिख रहे दशमलव अक्षांश और देशांतर पढ़ें (जैसे: «28 दशमलव 6 1 3, 77 दशमलव 2 0 9»)। पुलिस और एम्बुलेंस कंट्रोल रूम इन निर्देशांकों को सीधे अपने मैप में डालते हैं।',
    useCasesTitle: 'अपनी वर्तमान लोकेशन जानने के व्यावहारिक उपयोग',
    useCases: [
      { bold: 'आपातकालीन व सड़क सहायता', text: 'हाईवे पर गाड़ी खराब होने पर क्रेन या पुलिस को सटीक GPS लोकेशन दें।' },
      { bold: 'ऑनलाइन डिलीवरी व पार्सल', text: 'कूरियर वालों को बिना नाम वाली गलियों में सही घर तक पहुंचाएं।' },
      { bold: 'ट्रेकिंग और पर्वतारोहण', text: 'पहाड़ी रास्तों पर निकलने से पहले अपने कोऑर्डिनेट्स और ऊंचाई नोट करें।' },
      { bold: 'दोस्तों से मिलना', text: 'भीड़भाड़ वाले पार्क या बाजार में WhatsApp पर लाइव लोकेशन पिन भेजें।' },
      { bold: 'फील्ड वर्क और साइट इंस्पेक्शन', text: 'प्रॉपर्टी, कंस्ट्रक्शन या फोटोग्राफी के लिए सटीक भौगोलिक डेटा दर्ज करें।' },
    ],
    troubleshootTitle: 'लोकेशन गलत या गायब दिख रही है: क्या करें?',
    troubleshootItems: [
      {
        title: 'दूसरा शहर या राज्य दिख रहा है',
        desc: 'हो सकता है आपका VPN चालू हो या नेटवर्क प्रॉक्सी हो। VPN बंद करें और फोन का असली GPS चालू करें।',
      },
      {
        title: 'नीला दायरा बहुत बड़ा आ रहा है',
        desc: 'आप बेसमेंट या कंक्रीट की इमारत में हैं। खिड़की के पास जाएं और दोबारा «मेरी लोकेशन प्राप्त करें» दबाएं।',
      },
      {
        title: 'Chrome (Android/PC) में अनुमति चालू करें',
        desc: 'URL बार में ताले (lock) के निशान पर जाएं -> Permissions -> Location -> «Allow» चुनें और पेज रीफ्रेश करें।',
      },
      {
        title: 'Safari (iPhone) में अनुमति दें',
        desc: 'iPhone Settings -> Privacy & Security -> Location Services -> Safari Websites -> «While Using the App» चुनें।',
      },
    ],
    exploreTitle: 'अपनी लोकेशन के विभिन्न पहलू',
    exploreTitleAccent: 'देखें',
    subNav: [
      { label: 'मेरे GPS निर्देशांक', href: '/hi/my-location/gps/', desc: 'फील्ड व नेविगेशन के लिए DD, DMS और UTM निर्देशांक देखें।', icon: '🧭' },
      { label: 'मेरे निर्देशांक हब', href: '/hi/my-location/coordinates/', desc: 'नागरिक व सैन्य दोनों मानकों में संपूर्ण टेलीमेट्री।', icon: '📐' },
      { label: 'अक्षांश और देशांतर', href: '/hi/my-location/latitude-longitude/', desc: 'अपनी भूमध्य रेखा, गोलार्ध और मेरिडियन स्थिति जानें।', icon: '🌐' },
      { label: 'मेरा वर्तमान पता', href: '/hi/my-location/address/', desc: 'सड़क का नाम, मकान नंबर, इलाका और पिन कोड जानें।', icon: '📍' },
      { label: 'मेरा शहर व कस्बा', href: '/hi/my-location/city/', desc: 'अपने नगर निगम या जिला सीमा की जानकारी देखें।', icon: '🏙️' },
      { label: 'मेरा राज्य व प्रांत', href: '/hi/my-location/state/', desc: 'अपने प्रशासनिक राज्य और प्रांतीय सीमा का पता लगाएं।', icon: '🗺️' },
      { label: 'मेरा देश', href: '/hi/my-location/country/', desc: 'राष्ट्रीय संप्रभुता, ISO कोड और प्रादेशिक डेटा जांचें।', icon: '🌍' },
      { label: 'IP लोकेशन जांच', href: '/hi/my-location/ip/', desc: 'इंटरनेट प्रदाता के डेटा की तुलना असली सैटेलाइट GPS से करें।', icon: '💻' },
    ],
    article: {
      whatShowsTitle: '«मेरी वर्तमान लोकेशन» क्या जानकारी देती है?',
      whatShowsLead: 'जब आप बटन दबाते हैं, तो आपका ब्राउज़र डिवाइस सेंसर से ये आंकड़े प्राप्त करता है:',
      whatShowsList: [
        { bold: 'GPS निर्देशांक (DD और DMS)', text: 'दशमलव डिग्री तथा डिग्री-मिनट-सेकंड दोनों प्रारूपों में सटीक अक्षांश व देशांतर' },
        { bold: 'पूरा डाक पता', text: 'OpenStreetMap रिवर्स जियोकोडिंग द्वारा निर्धारित सड़क और इलाका' },
        { bold: 'शहर, राज्य और देश', text: 'आधिकारिक स्थानीय व राष्ट्रीय प्रशासनिक सीमाएं' },
        { bold: 'सटीकता दायरा (Accuracy)', text: 'मीटर में अनुमानित विश्वसनीयता का दायरा' },
        { bold: 'ऊंचाई', text: 'समुद्र तल से वर्टिकल ऊंचाई का अनुमान' },
        { bold: 'लाइव इंटरेक्टिव मैप', text: 'ज़ूम कंट्रोल और पोजीशन मार्कर के साथ लाइव मैप' },
      ],
      howDeterminedTitle: 'आपकी लोकेशन कैसे तय की जाती है?',
      howDeterminedLead: 'आपकी डिवाइस कई तकनीकों के समन्वय से स्थिति निर्धारित करती है:',
      howDeterminedList: [
        { bold: 'GNSS सैटेलाइट्स (GPS, NavIC)', text: 'खुले आसमान में 3 से 5 मीटर तक की सटीक सैटेलाइट गणना' },
        { bold: 'वाई-फाई ट्राइएंगुलेशन', text: 'कमरे में मौजूद पास के वाई-फाई राउटर की पहचान' },
        { bold: 'मोबाइल सेल टावर्स', text: 'नेटवर्क टावरों के सिग्नल से अनुमान' },
        { bold: 'IP जियोलोकेशन', text: 'इंटरनेट कनेक्शन के आधार पर शहर स्तर का अनुमान' },
      ],
      privacyTitle: 'गोपनीयता और डेटा सुरक्षा नीति',
      privacyText: 'आपकी गोपनीयता सर्वोच्च प्राथमिकता है। GPS निर्देशांक की गणना पूरी तरह से आपके ब्राउज़र में HTML5 Geolocation API द्वारा स्थानीय रूप से की जाती है। पते में बदलने के लिए निर्देशांक गुमनाम रूप से OpenStreetMap (Nominatim) सेवा को भेजे जाते हैं। हम आपके स्थान का कोई रिकॉर्ड या इतिहास अपने सर्वर पर सुरक्षित नहीं रखते।',
    },
    faqTitle: 'अक्सर पूछे जाने वाले',
    faqTitleAccent: 'सवाल',
    faqItems: [
      { question: 'मैं अभी अपनी वर्तमान लोकेशन कैसे जान सकता हूँ?', answer: '«मेरी वर्तमान लोकेशन प्राप्त करें» बटन पर क्लिक करें और ब्राउज़र की अनुमति स्वीकार करें। कुछ ही सेकंड में आपके निर्देशांक, पता और लाइव मैप प्रदर्शित हो जाएंगे।' },
      { question: 'मेरे सटीक GPS निर्देशांक क्या हैं?', answer: 'ये आपके अक्षांश और देशांतर हैं, जो दशमलव डिग्री (जैसे 28.6139, 77.2090) और DMS दोनों प्रारूपों में दिखाए जाते हैं।' },
      { question: 'ब्राउज़र लोकेशन अनुमति क्यों मांगता है?', answer: 'W3C सुरक्षा मानकों के तहत आपकी गोपनीयता की रक्षा के लिए आपकी स्पष्ट सहमति के बिना कोई भी वेबसाइट GPS को एक्सेस नहीं कर सकती।' },
      { question: 'GPS और IP लोकेशन में क्या अंतर है?', answer: 'GPS सैटेलाइट्स से 3 से 5 मीटर की सटीक दूरी बताता है। IP केवल इंटरनेट प्रदाता के शहर का अनुमान देता है जो 10 से 50 किमी दूर हो सकता है।' },
      { question: 'WhatsApp या SMS पर लोकेशन कैसे शेयर करें?', answer: 'कोऑर्डिनेट्स के नीचे दिए गए «WhatsApp» या «SMS» बटन पर क्लिक करें। आपका पता और Google Maps लिंक अपने आप ऐप में खुल जाएगा।' },
      { question: 'मेरी लोकेशन में गलत शहर क्यों आ रहा है?', answer: 'यदि आपका VPN चालू है या वाई-फाई का IP दूसरे राज्य का है, तो ऐसा हो सकता है। सटीक सैटेलाइट लोकेशन के लिए VPN बंद करें।' },
      { question: 'निर्देशांक को दूसरे फॉर्मेट में कैसे बदलें?', answer: 'हमारे मुफ़्त <a href="/hi/tools/coordinate-converter/">निर्देशांक कनवर्टर</a> से DD को DMS, UTM या MGRS में बदलें।' },
      { question: 'क्या यह कंप्यूटर या लैपटॉप पर काम करता है?', answer: 'हाँ, कंप्यूटर पर यह पास के वाई-फाई नेटवर्क और IP के माध्यम से 15 से 50 मीटर की सटीकता देता है।' },
      { question: 'क्या मेरी लोकेशन आपके सर्वर पर सेव होती है?', answer: 'नहीं। सारी गणना आपके ब्राउज़र में होती है। हम कोई भी लोकेशन हिस्ट्री या प्रोफाइल स्टोर नहीं करते।' },
      { question: 'क्या बिना इंटरनेट के निर्देशांक मिल सकते हैं?', answer: 'फोन का GPS चिप बिना इंटरनेट के भी सैटेलाइट से निर्देशांक पढ़ सकता है, लेकिन मैप देखने और पता पढ़ने के लिए इंटरनेट चाहिए।' },
    ],
  },

  // ==========================================
  // INDONESIAN (id) — TARGET: "lokasi saya saat ini"
  // ==========================================
  id: {
    metaTitle: 'Lokasi Saya Saat Ini — Di Mana Saya Sekarang? Koordinat GPS & Alamat | MyLocationLab',
    metaDesc: 'Temukan lokasi saya saat ini secara instan di peta interaktif: koordinat GPS (DD & DMS), alamat lengkap, kota, dan radius akurasi. Gratis dan aman.',
    pageTitle: 'Lokasi Saya',
    pageTitleAccent: 'Saat Ini',
    pageDesc: 'Di mana saya sekarang? Temukan lokasi saya saat ini secara akurat dengan koordinat GPS real-time, alamat jalan lengkap, dan peta interaktif langsung.',
    reviewedBy: 'Tim Redaksi MyLocationLab',
    reviewerTitle: 'Spesialis Sistem Geospasial dan Navigasi Satelit',
    cardTitle: 'Lokasi Saya Saat Ini (Live)',
    btnGetLocation: '📍 Dapatkan Lokasi Saya Saat Ini',
    detectingText: 'Mencari sinyal satelit GPS dan telemetri...',
    labels: {
      lat: 'Lintang (DD)',
      lng: 'Bujur (DD)',
      dms: 'Koordinat DMS',
      address: 'Alamat Lengkap',
      city: 'Kota / Kabupaten',
      state: 'Provinsi',
      country: 'Negara',
      accuracy: 'Akurasi GPS',
      altitude: 'Ketinggian (DPL)',
    },
    actions: {
      copy: '📋 Salin DD',
      copyDms: '📋 Salin DMS',
      copyAddress: '📋 Salin Alamat',
      share: '🔗 Bagikan',
      shareWhatsApp: '💬 WhatsApp',
      shareSms: '✉️ SMS',
      openMaps: '🗺️ Google Maps',
    },
    stepsTitle: 'Cara Mengetahui Lokasi Saya Saat Ini dalam 4 Langkah',
    stepsLead: 'Ikuti panduan praktis ini untuk melihat titik koordinat dan alamat persis Anda:',
    stepsTip: 'Tips: Di dalam gedung, sinyal satelit bisa terhalang. Dekati jendela atau keluar ruangan untuk akurasi metrik terbaik (± 3 hingga 5 meter).',
    steps: [
      {
        num: '01',
        title: 'Klik «Dapatkan Lokasi Saya Saat Ini»',
        desc: 'Aktifkan API Geolocation HTML5 bawaan browser Anda secara aman.',
      },
      {
        num: '02',
        title: 'Berikan izin akses lokasi',
        desc: 'Pilih «Izinkan» atau «Saat aplikasi digunakan». Data tidak pernah diambil tanpa persetujuan.',
      },
      {
        num: '03',
        title: 'Tunggu lingkaran biru menyempit',
        desc: 'Lingkaran akurasi di peta interaktif akan mengecil saat satelit GNSS mengunci posisi Anda.',
      },
      {
        num: '04',
        title: 'Salin, bagikan, atau buka peta',
        desc: 'Lihat koordinat dalam format DD dan DMS, salin alamat pos, atau kirim pin ke WhatsApp.',
      },
    ],
    telemetryTitle: 'Informasi yang Ditampilkan «Lokasi Saya»',
    telemetryLead: 'Berikut rincian data geografis yang disajikan oleh sistem pemetaan kami:',
    telemetryTable: [
      {
        info: 'Lintang / Bujur (DD)',
        example: '-6.208763, 106.845599',
        purpose: 'Format digital standar untuk Google Maps, aplikasi ojek online, dan navigasi GPS.',
      },
      {
        info: 'Koordinat DMS',
        example: '6° 12\' 31.5" S 106° 50\' 44.2" E',
        purpose: 'Derajat, Menit, Detik untuk pelayaran, penerbangan, dan penjelajahan alam.',
      },
      {
        info: 'Alamat Jalan Lengkap',
        example: 'Jl. M.H. Thamrin No. 1, Jakarta Pusat, 10310',
        purpose: 'Pengiriman kurir, penjemputan transportasi, dan verifikasi tempat tinggal.',
      },
      {
        info: 'Kota, Kabupaten, Provinsi',
        example: 'Jakarta Pusat, DKI Jakarta, Indonesia',
        purpose: 'Batas wilayah administratif pemerintahan resmi.',
      },
      {
        info: 'Radius Akurasi',
        example: '± 5 meter',
        purpose: 'Perkiraan toleransi jarak keandalan sinyal sensor ponsel Anda.',
      },
      {
        info: 'Ketinggian (Altitude)',
        example: '18 m di atas permukaan laut',
        purpose: 'Elevasi vertikal untuk pendakian gunung dan analisis kontur.',
      },
    ],
    techTitle: 'Bagaimana Perangkat Menentukan Lokasi Anda',
    techLead: 'Perangkat Anda menggabungkan berbagai teknologi jaringan dan satelit:',
    techTable: [
      {
        method: 'Satelit GNSS (GPS, BeiDou)',
        accuracy: '3 sampai 10 meter di luar ruangan',
        when: 'Bekerja optimal pada smartphone saat berada di bawah langit terbuka.',
      },
      {
        method: 'Trilaterasi Wi-Fi',
        accuracy: '15 sampai 50 meter',
        when: 'Digunakan di dalam ruangan dan PC desktop dengan memindai router terdekat.',
      },
      {
        method: 'Menara BTS Seluler',
        accuracy: '100 sampai 1.000 meter',
        when: 'Menghitung jarak gelombang radio operator seluler jika GPS terhalang.',
      },
      {
        method: 'Geolokasi IP Internet',
        accuracy: 'Tingkat kota (5 sampai 50 km)',
        when: 'Opsi darurat jika izin GPS ditolak. Sering meleset jika memakai VPN.',
      },
    ],
    emergencyTitle: 'Protokol Darurat: Cara Menyampaikan Lokasi Anda',
    emergencyBadge: 'Layanan Darurat Indonesia',
    emergencyText: 'Jika dalam situasi bahaya, hubungi 112 (Layanan Panggilan Darurat Nasional) atau 110 (Polisi) / 118 (Ambulans). Sebutkan nama kota, kecamatan, dan jalan. Jika berada di jalur tol atau pedesaan tanpa plang nama jalan, bacakan angka lintang dan bujur dalam derajat desimal (contoh: «minus 6 koma 2 0 8, 106 koma 8 4 5»). Petugas operator dapat memasukkan angka ini langsung ke sistem peta armada penyelamat.',
    useCasesTitle: 'Kegunaan Praktis Mengetahui Lokasi Saya Saat Ini',
    useCases: [
      { bold: 'Bantuan Darurat di Jalan', text: 'Berikan koordinat pasti saat kendaraan mogok di jalan tol tanpa patokan kilometer.' },
      { bold: 'Pengiriman Paket dan Makanan', text: 'Pastikan kurir menemukan gang atau gerbang rumah yang tidak tertera jelas di peta.' },
      { bold: 'Pendakian dan Wisata Alam', text: 'Catat titik koordinat dan ketinggian sebelum memasuki jalur tanpa sinyal internet.' },
      { bold: 'Titik Temu dengan Teman', text: 'Kirim pin lokasi lewat WhatsApp agar teman mudah menemukan Anda di keramaian.' },
      { bold: 'Survei Lapangan dan Foto', text: 'Simpan data geografis untuk keperluan inventaris properti atau laporan kerja.' },
    ],
    troubleshootTitle: 'Lokasi Salah atau Kurang Tepat: Cara Mengatasinya',
    troubleshootItems: [
      {
        title: 'Muncul Kota atau Provinsi Lain',
        desc: 'Mungkin VPN Anda masih aktif atau jaringan kantor merutekan koneksi ke luar kota. Matikan VPN dan nyalakan GPS di pengaturan HP Anda.',
      },
      {
        title: 'Lingkaran Biru Sangat Luas',
        desc: 'Anda berada di dalam gedung bertingkat atau basement. Dekati jendela atau keluar ke area terbuka, lalu klik tombol cari lokasi lagi.',
      },
      {
        title: 'Buka Izin di Chrome (Android / PC)',
        desc: 'Klik ikon gembok di samping alamat web -> Izin -> Lokasi -> pilih «Izinkan» dan muat ulang halaman.',
      },
      {
        title: 'Buka Izin di Safari (iPhone / iOS)',
        desc: 'Buka Pengaturan iPhone -> Privasi & Keamanan -> Layanan Lokasi -> Safari -> pilih «Saat Menggunakan App».',
      },
    ],
    exploreTitle: 'Eksplorasi Lokasi Anda',
    exploreTitleAccent: 'Berdasarkan Parameter',
    subNav: [
      { label: 'Koordinat GPS Saya', href: '/id/my-location/gps/', desc: 'Lihat koordinat mentah DD, DMS, dan UTM untuk navigasi lapangan.', icon: '🧭' },
      { label: 'Pusat Koordinat Saya', href: '/id/my-location/coordinates/', desc: 'Telemetri geospasial lengkap dalam format sipil dan militer.', icon: '📐' },
      { label: 'Garis Lintang & Bujur', href: '/id/my-location/latitude-longitude/', desc: 'Pahami garis paralel, meridian, dan belahan bumi posisi Anda.', icon: '🌐' },
      { label: 'Alamat Saya Saat Ini', href: '/id/my-location/address/', desc: 'Dapatkan nama jalan, nomor rumah, kelurahan, dan kode pos.', icon: '📍' },
      { label: 'Kota & Kabupaten Saya', href: '/id/my-location/city/', desc: 'Ketahui batas kota administratif dan daerah tempat Anda berada.', icon: '🏙️' },
      { label: 'Provinsi Saya', href: '/id/my-location/state/', desc: 'Identifikasi wilayah provinsi dan yurisdiksi daerah Anda.', icon: '🗺️' },
      { label: 'Negara Saya', href: '/id/my-location/country/', desc: 'Periksa data teritorial, kode ISO negara, dan bendera.', icon: '🌍' },
      { label: 'Cek Lokasi IP Saya', href: '/id/my-location/ip/', desc: 'Bandingkan perkiraan router internet dengan titik GPS satelit asli.', icon: '💻' },
    ],
    article: {
      whatShowsTitle: 'Apa Saja yang Ditampilkan «Lokasi Saya Saat Ini»?',
      whatShowsLead: 'Saat Anda menekan tombol «Dapatkan Lokasi Saya Saat Ini», browser membaca data sensor berikut:',
      whatShowsList: [
        { bold: 'Koordinat GPS (DD dan DMS)', text: 'Garis lintang dan bujur dalam derajat desimal serta derajat-menit-detik' },
        { bold: 'Alamat Pos Lengkap', text: 'Nama jalan dan nomor yang diproses melalui reverse geocoding OpenStreetMap' },
        { bold: 'Kota, Provinsi, dan Negara', text: 'Batas administratif pemerintahan resmi' },
        { bold: 'Radius Akurasi', text: 'Estimasi batas toleransi dalam meter sesuai kualitas sinyal perangkat' },
        { bold: 'Ketinggian (Altitude)', text: 'Ketinggian vertikal di atas permukaan laut' },
        { bold: 'Peta Interaktif Langsung', text: 'Tampilan grafis dengan fitur zoom, lapisan satelit, dan pin terpusat' },
      ],
      howDeterminedTitle: 'Bagaimana Posisi Anda Ditentukan?',
      howDeterminedLead: 'Perangkat Anda menyatukan sinyal antariksa dan darat secara otomatis:',
      howDeterminedList: [
        { bold: 'Satelit GNSS (GPS, BeiDou)', text: 'Perhitungan trilaterasi satelit dengan akurasi 3 sampai 5 meter di luar ruangan' },
        { bold: 'Trilaterasi Wi-Fi', text: 'Pemindaian sinyal router nirkabel di sekitar saat berada di dalam ruangan' },
        { bold: 'Menara Seluler', text: 'Perhitungan jarak sinyal menara BTS operator seluler' },
        { bold: 'Geolokasi Alamat IP', text: 'Perkiraan wilayah kota berdasarkan penyedia layanan internet' },
      ],
      privacyTitle: 'Privasi & Keamanan Data Pengguna',
      privacyText: 'Privasi Anda terjamin sepenuhnya. Penghitungan koordinat GPS berlangsung 100% lokal di browser Anda menggunakan HTML5 Geolocation API. Untuk menampilkan alamat teks, koordinat dikirimkan secara anonim ke layanan publik OpenStreetMap (Nominatim). Kami tidak menyimpan riwayat perjalanan atau identitas pengguna di server kami.',
    },
    faqTitle: 'Pertanyaan yang Sering',
    faqTitleAccent: 'Diajukan',
    faqItems: [
      { question: 'Bagaimana cara mengetahui lokasi saya saat ini secara instan?', answer: 'Klik tombol «Dapatkan Lokasi Saya Saat Ini» dan izinkan akses di browser. Koordinat GPS, alamat, dan peta langsung muncul dalam beberapa detik.' },
      { question: 'Berapa koordinat GPS saya yang persis?', answer: 'Koordinat terdiri dari Lintang dan Bujur, disajikan dalam Derajat Desimal (misal -6.2088, 106.8456) serta format DMS (Derajat Menit Detik).' },
      { question: 'Mengapa browser meminta izin akses lokasi?', answer: 'Sesuai standar privasi W3C, browser wajib meminta izin sebelum situs web mana pun dapat mengakses perangkat GPS Anda.' },
      { question: 'Apa perbedaan antara GPS dan lokasi IP?', answer: 'GPS memakai satelit dengan akurasi 3-5 meter. Lokasi IP hanya memperkirakan pusat data operator internet Anda, dengan selisih 5-50 km.' },
      { question: 'Bagaimana cara berbagi lokasi lewat WhatsApp atau SMS?', answer: 'Klik tombol «WhatsApp» atau «SMS» di bawah data koordinat: pesan siap kirim beserta tautan Google Maps akan otomatis terbuka di aplikasi.' },
      { question: 'Mengapa kota yang muncul di layar keliru?', answer: 'Jika Anda menggunakan VPN atau jaringan seluler dengan IP luar kota, posisi bisa meleset. Matikan VPN untuk menggunakan GPS satelit asli ponsel.' },
      { question: 'Bagaimana mengubah koordinat ke format lain?', answer: 'Gunakan <a href="/id/tools/coordinate-converter/">Konverter Koordinat</a> gratis kami untuk mengubah angka desimal ke DMS, UTM, atau MGRS.' },
      { question: 'Apakah fitur ini berfungsi di laptop atau komputer PC?', answer: 'Ya, melalui pemindaian jaringan Wi-Fi sekitar dan alamat IP dengan rentang akurasi 15 sampai 50 meter.' },
      { question: 'Apakah lokasi saya disimpan di server situs ini?', answer: 'Tidak. Pemrosesan data hanya berlangsung di browser Anda dan kami tidak merekam jejak lokasi pengguna.' },
      { question: 'Bisakah saya melihat koordinat tanpa internet?', answer: 'Sensor GPS di ponsel dapat membaca satelit secara offline, namun untuk membuka peta dan membaca alamat teks dibutuhkan sambungan data internet.' },
    ],
  },
};
