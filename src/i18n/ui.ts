import { defaultLang, type SupportedLang } from './config';

export const ui = {
  en: {
    // Navigation
    'nav.myLocation': 'My Location',
    'nav.tools': 'Tools',
    'nav.maps': 'Maps',
    'nav.guides': 'Guides',
    'nav.comparisons': 'Comparisons',
    'nav.faq': 'FAQ',
    'nav.findLocation': 'Find My Location',
    'nav.tagline': 'GEOSPATIAL SUITE',
    'nav.colorTheme': 'Color Theme',

    // Language Selector
    'lang.select': 'Select Language',
    'lang.current': 'Language',

    // Hero
    'hero.badge': 'Free GPS Location Finder',
    'hero.title': 'Where Am I Right Now?',
    'hero.titleHighlight': 'Right Now?',
    'hero.subtitle': 'Instantly find your current GPS location, coordinates, address, and see it on an interactive map. No app needed.',
    'hero.btnGetLocation': 'Get My Location',
    'hero.btnBrowseTools': 'Browse Tools',
    'hero.privacyBanner': 'Please allow location access when your browser asks for permission. Zero-Data Retention • 100% In-Browser',

    // Telemetry Dashboard
    'telemetry.status': 'Live GNSS Telemetry',
    'telemetry.liveIndicator': 'Live Feed',
    'telemetry.latLong': 'Latitude & Longitude',
    'telemetry.accuracy': 'Accuracy Radius',
    'telemetry.altitude': 'Altitude / Elevation',
    'telemetry.heading': 'Heading & Speed',
    'telemetry.streetAddress': 'Current Street Address',
    'telemetry.district': 'City / District',
    'telemetry.state': 'State / Province',
    'telemetry.country': 'Country & Code',
    'telemetry.postalCode': 'Postal / ZIP Code',
    'telemetry.ipLocation': 'ISP / IP Location',
    'telemetry.copy': 'Copy',
    'telemetry.copied': 'Copied!',
    'telemetry.share': 'Share Location',

    // Footer
    'footer.brandDesc': 'Authoritative telemetry, datum transformation, and client-side browser positioning diagnostics.',
    'footer.statusLabel': 'GNSS CONSTELLATION ACTIVE',
    'footer.colMyLocation': 'MY LOCATION',
    'footer.colTools': 'GEOSPATIAL TOOLS',
    'footer.colGuides': 'KNOWLEDGE & GUIDES',
    'footer.colComparisons': 'COMPARISONS & REF',
    'footer.trust': 'Zero Server Logs • W3C Standard Geolocation API • HTTPS TLS 1.3',
    'footer.copyright': 'All rights reserved. Open Geodetic Architecture.',

    // Footer Links
    'footer.link.gpsCoords': 'Instant GPS Coordinates',
    'footer.link.address': 'Current Street Address',
    'footer.link.elevation': 'Elevation & Altitude Scan',
    'footer.link.ipLocation': 'IP Geolocation Lookup',
    'footer.link.converter': 'Coordinate Converter (DD/DMS/UTM)',
    'footer.link.distance': 'Haversine Distance Calculator',
    'footer.link.qrCode': 'Location QR Code Generator',
    'footer.link.accuracy': 'GPS Accuracy Monitor',
    'footer.link.howGpsWorks': 'How GPS Location Works',
    'footer.link.improveGps': 'Improve GPS Accuracy Guide',
    'footer.link.wrongLocation': 'Fix Wrong Location Troubleshooter',
    'footer.link.latLongGuide': 'Latitude & Longitude Explained',
    'footer.link.gpsVsIp': 'GPS vs IP Location Comparison',
    'footer.link.geocodingComp': 'Forward vs Reverse Geocoding',
    'footer.link.decimalVsDms': 'Decimal Degrees vs DMS',
    'footer.link.faq': 'Frequently Asked Questions',

    // Common
    'common.home': 'Home',
    'common.readMore': 'Read More',
    'common.viewAll': 'View All',
  },
  es: {
    // Navigation
    'nav.myLocation': 'Mi Ubicación',
    'nav.tools': 'Herramientas',
    'nav.maps': 'Mapas',
    'nav.guides': 'Guías',
    'nav.comparisons': 'Comparativas',
    'nav.faq': 'Preguntas',
    'nav.findLocation': 'Buscar Mi Ubicación',
    'nav.tagline': 'SUITE GEOESPACIAL',
    'nav.colorTheme': 'Tema de Color',

    // Language Selector
    'lang.select': 'Seleccionar Idioma',
    'lang.current': 'Idioma',

    // Hero
    'hero.badge': 'Localizador GPS Gratuito',
    'hero.title': '¿Dónde Estoy Ahora Mismo?',
    'hero.titleHighlight': 'Ahora Mismo?',
    'hero.subtitle': 'Encuentra al instante tu ubicación GPS actual, coordenadas exactas, dirección postal y visualízalo en un mapa interactivo. Sin descargas.',
    'hero.btnGetLocation': 'Obtener Mi Ubicación',
    'hero.btnBrowseTools': 'Explorar Herramientas',
    'hero.privacyBanner': 'Por favor, permite el acceso a la ubicación cuando tu navegador lo solicite. Cero Retención de Datos • 100% en el Navegador',

    // Telemetry Dashboard
    'telemetry.status': 'Telemetría GNSS en Directo',
    'telemetry.liveIndicator': 'En Directo',
    'telemetry.latLong': 'Latitud y Longitud',
    'telemetry.accuracy': 'Radio de Precisión',
    'telemetry.altitude': 'Altitud / Elevación',
    'telemetry.heading': 'Rumbo y Velocidad',
    'telemetry.streetAddress': 'Dirección Postal Actual',
    'telemetry.district': 'Ciudad / Distrito',
    'telemetry.state': 'Estado / Provincia',
    'telemetry.country': 'País y Código',
    'telemetry.postalCode': 'Código Postal',
    'telemetry.ipLocation': 'Ubicación por IP / ISP',
    'telemetry.copy': 'Copiar',
    'telemetry.copied': '¡Copiado!',
    'telemetry.share': 'Compartir Ubicación',

    // Footer
    'footer.brandDesc': 'Telemetría de precisión, transformación de datos geodésicos y diagnósticos de posicionamiento web en cliente.',
    'footer.statusLabel': 'CONSTELACIÓN GNSS ACTIVA',
    'footer.colMyLocation': 'MI UBICACIÓN',
    'footer.colTools': 'HERRAMIENTAS GPS',
    'footer.colGuides': 'CONOCIMIENTO Y GUÍAS',
    'footer.colComparisons': 'COMPARATIVAS Y REF',
    'footer.trust': 'Sin Registros en Servidor • API W3C Estándar • HTTPS TLS 1.3',
    'footer.copyright': 'Todos los derechos reservados. Arquitectura Geodésica Abierta.',

    // Footer Links
    'footer.link.gpsCoords': 'Coordenadas GPS en Directo',
    'footer.link.address': 'Dirección Postal Actual',
    'footer.link.elevation': 'Buscador de Altitud y Elevación',
    'footer.link.ipLocation': 'Geolocalización por IP',
    'footer.link.converter': 'Conversor de Coordenadas (DD/DMS/UTM)',
    'footer.link.distance': 'Calculadora de Distancia Haversine',
    'footer.link.qrCode': 'Generador QR de Ubicación',
    'footer.link.accuracy': 'Monitor de Precisión GPS',
    'footer.link.howGpsWorks': 'Cómo Funciona el GPS',
    'footer.link.improveGps': 'Mejorar Precisión del GPS',
    'footer.link.wrongLocation': 'Solucionar Ubicación Errónea',
    'footer.link.latLongGuide': 'Latitud y Longitud Explicadas',
    'footer.link.gpsVsIp': 'GPS vs Ubicación por IP',
    'footer.link.geocodingComp': 'Geocodificación Directa vs Inversa',
    'footer.link.decimalVsDms': 'Grados Decimales vs DMS',
    'footer.link.faq': 'Preguntas Frecuentes (FAQ)',

    // Common
    'common.home': 'Inicio',
    'common.readMore': 'Leer Más',
    'common.viewAll': 'Ver Todo',
  },
  fr: {
    // Navigation
    'nav.myLocation': 'Ma Position',
    'nav.tools': 'Outils',
    'nav.maps': 'Cartes',
    'nav.guides': 'Guides',
    'nav.comparisons': 'Comparatifs',
    'nav.faq': 'FAQ',
    'nav.findLocation': 'Trouver Ma Position',
    'nav.tagline': 'SUITE GÉOSPATIALE',
    'nav.colorTheme': 'Thème de Couleur',

    // Language Selector
    'lang.select': 'Choisir la Langue',
    'lang.current': 'Langue',

    // Hero
    'hero.badge': 'Localisateur GPS Gratuit',
    'hero.title': 'Où Suis-Je En Ce Moment ?',
    'hero.titleHighlight': 'En Ce Moment ?',
    'hero.subtitle': 'Obtenez instantanément vos coordonnées GPS, votre adresse exacte et votre position sur une carte interactive en direct. Sans application.',
    'hero.btnGetLocation': 'Obtenir Ma Position',
    'hero.btnBrowseTools': 'Parcourir les Outils',
    'hero.privacyBanner': 'Veuillez autoriser l’accès à la position lorsque votre navigateur le demande. Zéro Donnée Enregistrée • 100% dans le Navigateur',

    // Telemetry Dashboard
    'telemetry.status': 'Télémétrie GNSS en Direct',
    'telemetry.liveIndicator': 'En Direct',
    'telemetry.latLong': 'Latitude et Longitude',
    'telemetry.accuracy': 'Rayon de Précision',
    'telemetry.altitude': 'Altitude / Élévation',
    'telemetry.heading': 'Cap et Vitesse',
    'telemetry.streetAddress': 'Adresse Postale Actuelle',
    'telemetry.district': 'Ville / District',
    'telemetry.state': 'Région / Département',
    'telemetry.country': 'Pays et Code',
    'telemetry.postalCode': 'Code Postal',
    'telemetry.ipLocation': 'Position IP / FAI',
    'telemetry.copy': 'Copier',
    'telemetry.copied': 'Copié !',
    'telemetry.share': 'Partager la Position',

    // Footer
    'footer.brandDesc': 'Télémétrie de référence, transformation de datums et diagnostics de géolocalisation côté client.',
    'footer.statusLabel': 'CONSTELLATION GNSS ACTIVE',
    'footer.colMyLocation': 'MA POSITION',
    'footer.colTools': 'OUTILS GÉOSPATIAUX',
    'footer.colGuides': 'GUIDES ET SAVOIR',
    'footer.colComparisons': 'COMPARATIFS ET RÉF',
    'footer.trust': 'Zéro Journal Serveur • API Géolocalisation W3C • HTTPS TLS 1.3',
    'footer.copyright': 'Tous droits réservés. Architecture Géodésique Ouverte.',

    // Footer Links
    'footer.link.gpsCoords': 'Coordonnées GPS en Direct',
    'footer.link.address': 'Adresse Postale Actuelle',
    'footer.link.elevation': 'Recherche d\'Altitude et Élévation',
    'footer.link.ipLocation': 'Localisation par Adresse IP',
    'footer.link.converter': 'Convertisseur de Coordonnées (DD/DMS/UTM)',
    'footer.link.distance': 'Calculateur de Distance Haversine',
    'footer.link.qrCode': 'Générateur de QR Code de Position',
    'footer.link.accuracy': 'Moniteur de Précision GPS',
    'footer.link.howGpsWorks': 'Comment Fonctionne le GPS',
    'footer.link.improveGps': 'Améliorer la Précision GPS',
    'footer.link.wrongLocation': 'Corriger une Position Erronée',
    'footer.link.latLongGuide': 'Latitude et Longitude Expliquées',
    'footer.link.gpsVsIp': 'GPS vs Géolocalisation IP',
    'footer.link.geocodingComp': 'Géocodage Direct vs Inverse',
    'footer.link.decimalVsDms': 'Degrés Décimaux vs DMS',
    'footer.link.faq': 'Foire Aux Questions (FAQ)',

    // Common
    'common.home': 'Accueil',
    'common.readMore': 'En Savoir Plus',
    'common.viewAll': 'Tout Voir',
  },
  de: {
    // Navigation
    'nav.myLocation': 'Mein Standort',
    'nav.tools': 'Tools',
    'nav.maps': 'Karten',
    'nav.guides': 'Ratgeber',
    'nav.comparisons': 'Vergleiche',
    'nav.faq': 'FAQ',
    'nav.findLocation': 'Standort Finden',
    'nav.tagline': 'GEODATEN-SUITE',
    'nav.colorTheme': 'Farbdesign',

    // Language Selector
    'lang.select': 'Sprache Wählen',
    'lang.current': 'Sprache',

    // Hero
    'hero.badge': 'Kostenloser GPS-Standortfinder',
    'hero.title': 'Wo Bin Ich Jetzt Gerade?',
    'hero.titleHighlight': 'Jetzt Gerade?',
    'hero.subtitle': 'Ermitteln Sie sofort Ihre aktuellen GPS-Koordinaten, Ihre Postadresse und sehen Sie Ihren Standort auf einer interaktiven Karte. Ohne App.',
    'hero.btnGetLocation': 'Meinen Standort Abrufen',
    'hero.btnBrowseTools': 'Tools Entdecken',
    'hero.privacyBanner': 'Bitte erlauben Sie den Standortzugriff bei der Browser-Aufforderung. Keine Datenspeicherung • 100% im Browser',

    // Telemetry Dashboard
    'telemetry.status': 'Echtzeit-GNSS-Telemetrie',
    'telemetry.liveIndicator': 'Live-Feed',
    'telemetry.latLong': 'Breitengrad & Längengrad',
    'telemetry.accuracy': 'Genauigkeitsradius',
    'telemetry.altitude': 'Höhe über dem Meeresspiegel',
    'telemetry.heading': 'Kurs & Geschwindigkeit',
    'telemetry.streetAddress': 'Aktuelle Straßenadresse',
    'telemetry.district': 'Stadt / Bezirk',
    'telemetry.state': 'Bundesland / Region',
    'telemetry.country': 'Land & Ländercode',
    'telemetry.postalCode': 'Postleitzahl (PLZ)',
    'telemetry.ipLocation': 'IP- / ISP-Standort',
    'telemetry.copy': 'Kopieren',
    'telemetry.copied': 'Kopiert!',
    'telemetry.share': 'Standort Teilen',

    // Footer
    'footer.brandDesc': 'Präzise Geodaten, Koordinatentransformation und browserbasierte Client-Standortdiagnostik.',
    'footer.statusLabel': 'GNSS-SATELLITENKONSTELLATION AKTIV',
    'footer.colMyLocation': 'MEIN STANDORT',
    'footer.colTools': 'GEODATEN-TOOLS',
    'footer.colGuides': 'WISSEN & RATGEBER',
    'footer.colComparisons': 'VERGLEICHE & REF',
    'footer.trust': 'Keine Server-Logs • W3C-Standard-API • HTTPS TLS 1.3',
    'footer.copyright': 'Alle Rechte vorbehalten. Offene Geodätische Architektur.',

    // Footer Links
    'footer.link.gpsCoords': 'Echtzeit-GPS-Koordinaten',
    'footer.link.address': 'Aktuelle Straßenadresse',
    'footer.link.elevation': 'Höhen- & Höhenmetermessung',
    'footer.link.ipLocation': 'IP-Standortabfrage',
    'footer.link.converter': 'Koordinaten-Umrechner (DD/GMS/UTM)',
    'footer.link.distance': 'Haversine-Entfernungsrechner',
    'footer.link.qrCode': 'Standort-QR-Code-Generator',
    'footer.link.accuracy': 'GPS-Genauigkeitsmonitor',
    'footer.link.howGpsWorks': 'Wie GPS-Ortung funktioniert',
    'footer.link.improveGps': 'GPS-Genauigkeit verbessern',
    'footer.link.wrongLocation': 'Falschen Standort korrigieren',
    'footer.link.latLongGuide': 'Breitengrad & Längengrad erklärt',
    'footer.link.gpsVsIp': 'GPS vs IP-Standort Vergleich',
    'footer.link.geocodingComp': 'Vorwärts- vs Rückwärts-Geokodierung',
    'footer.link.decimalVsDms': 'Dezimalgrad vs GMS',
    'footer.link.faq': 'Häufig gestellte Fragen (FAQ)',

    // Common
    'common.home': 'Startseite',
    'common.readMore': 'Weiterlesen',
    'common.viewAll': 'Alle Anzeigen',
  },
  pt: {
    // Navigation
    'nav.myLocation': 'Minha Localização',
    'nav.tools': 'Ferramentas',
    'nav.maps': 'Mapas',
    'nav.guides': 'Guias',
    'nav.comparisons': 'Comparações',
    'nav.faq': 'Perguntas',
    'nav.findLocation': 'Descobrir Localização',
    'nav.tagline': 'SUÍTE GEOESPACIAL',
    'nav.colorTheme': 'Tema de Cor',

    // Language Selector
    'lang.select': 'Selecionar Idioma',
    'lang.current': 'Idioma',

    // Hero
    'hero.badge': 'Localizador GPS Gratuito',
    'hero.title': 'Onde Estou Agora?',
    'hero.titleHighlight': 'Agora?',
    'hero.subtitle': 'Descubra instantaneamente sua localização GPS atual, coordenadas precisas, endereço completo e veja no mapa interativo. Sem aplicativos.',
    'hero.btnGetLocation': 'Obter Minha Localização',
    'hero.btnBrowseTools': 'Ver Ferramentas',
    'hero.privacyBanner': 'Por favor, permita o acesso à localização quando solicitado pelo navegador. Sem Retenção de Dados • 100% no Navegador',

    // Telemetry Dashboard
    'telemetry.status': 'Telemetria GNSS em Tempo Real',
    'telemetry.liveIndicator': 'Ao Vivo',
    'telemetry.latLong': 'Latitude e Longitude',
    'telemetry.accuracy': 'Raio de Precisão',
    'telemetry.altitude': 'Altitude / Elevação',
    'telemetry.heading': 'Rumo e Velocidade',
    'telemetry.streetAddress': 'Endereço Atual',
    'telemetry.district': 'Cidade / Bairro',
    'telemetry.state': 'Estado',
    'telemetry.country': 'País e Código',
    'telemetry.postalCode': 'CEP / Código Postal',
    'telemetry.ipLocation': 'Localização por IP / Provedor',
    'telemetry.copy': 'Copiar',
    'telemetry.copied': 'Copiado!',
    'telemetry.share': 'Compartilhar Localização',

    // Footer
    'footer.brandDesc': 'Telemetria geoespacial confiável, conversão de coordenadas e diagnóstico de posicionamento no navegador.',
    'footer.statusLabel': 'CONSTELAÇÃO GNSS ATIVA',
    'footer.colMyLocation': 'MINHA LOCALIZAÇÃO',
    'footer.colTools': 'FERRAMENTAS GPS',
    'footer.colGuides': 'CONHECIMENTO E GUIAS',
    'footer.colComparisons': 'COMPARAÇÕES E REF',
    'footer.trust': 'Sem Logs no Servidor • API W3C Padrão • HTTPS TLS 1.3',
    'footer.copyright': 'Todos os direitos reservados. Arquitetura Geodésica Aberta.',

    // Footer Links
    'footer.link.gpsCoords': 'Coordenadas GPS em Tempo Real',
    'footer.link.address': 'Endereço Postal Atual',
    'footer.link.elevation': 'Localizador de Altitude e Relevo',
    'footer.link.ipLocation': 'Geolocalização por IP',
    'footer.link.converter': 'Conversor de Coordenadas (DD/GMS/UTM)',
    'footer.link.distance': 'Calculadora de Distância Haversine',
    'footer.link.qrCode': 'Gerador de QR Code de Localização',
    'footer.link.accuracy': 'Monitor de Precisão GPS',
    'footer.link.howGpsWorks': 'Como Funciona a Localização GPS',
    'footer.link.improveGps': 'Como Melhorar a Precisão do GPS',
    'footer.link.wrongLocation': 'Corrigir Localização Incorreta',
    'footer.link.latLongGuide': 'Latitude e Longitude Explicadas',
    'footer.link.gpsVsIp': 'GPS vs Geolocalização IP',
    'footer.link.geocodingComp': 'Geocodificação Direta vs Reversa',
    'footer.link.decimalVsDms': 'Graus Decimais vs GMS',
    'footer.link.faq': 'Perguntas Frequentes (FAQ)',

    // Common
    'common.home': 'Início',
    'common.readMore': 'Ler Mais',
    'common.viewAll': 'Ver Tudo',
  },
} as const;

export type TranslationKey = keyof typeof ui[typeof defaultLang];

/**
 * Returns translation helper for a given locale with fallback to English.
 */
export function useTranslations(lang: SupportedLang | string = defaultLang) {
  const currentLang = (lang in ui ? lang : defaultLang) as SupportedLang;

  return function t(key: TranslationKey): string {
    const translation = ui[currentLang]?.[key] ?? ui[defaultLang]?.[key];
    return translation || key;
  };
}
