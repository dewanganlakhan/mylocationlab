export interface AboutPageContent {
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  h2Mission: string;
  pMission1: string;
  pMission2: string;
  h2ZeroData: string;
  pZeroData: string;
  b1Title: string;
  b1Desc: string;
  b2Title: string;
  b2Desc: string;
  b3Title: string;
  b3Desc: string;
  h2Editorial: string;
  pEditorial: string;
  h3CalcStandards: string;
  c1Title: string;
  c1Desc: string;
  c2Title: string;
  c2Desc: string;
  c3Title: string;
  c3Desc: string;
  h2Disclaimers: string;
  pDisclaimers: string;
  h2Contact: string;
  pContact: string;
  contactBtn: string;
}

export const aboutPageTranslations: Record<string, AboutPageContent> = {
  en: {
    metaTitle: "About Us — Standards & Methodology | MyLocationLab",
    metaDescription: "Discover the mission, editorial standards, geospatial engineering methodology, and zero-data retention architecture behind MyLocationLab.",
    breadcrumb: "About & Editorial Standards",
    badge: "Verified Accuracy Standards",
    titlePrefix: "About",
    titleHighlight: "MyLocationLab",
    subtitle: "Engineered to provide the world with the fastest, most accurate, and rigorously private geolocation tools on the web.",
    h2Mission: "Our Core Mission",
    pMission1: "MyLocationLab was created to solve a persistent web problem: finding your physical location, converting coordinates, and measuring distances without being tracked, subjected to invasive cookies, or forced to download native mobile apps.",
    pMission2: "Every tool, calculator, and technical guide on this website is engineered with two foundational pillars: geodetic precision and absolute user privacy.",
    h2ZeroData: "The Zero-Data Retention Architecture",
    pZeroData: "Unlike many web utilities that send your location to remote marketing databases, MyLocationLab operates on an in-browser edge architecture:",
    b1Title: "Client-Side Execution:",
    b1Desc: "When your browser requests coordinates via the W3C Geolocation API, those numerical values exist purely in the ephemeral memory of your device's browser.",
    b2Title: "No Server Logs:",
    b2Desc: "We never transmit, store, or log your latitude, longitude, IP address, or reverse-geocoded street address to our backend servers.",
    b3Title: "Open Source Cartography:",
    b3Desc: "We utilize open-source cartographic datasets from OpenStreetMap and Nominatim under the Open Database License (ODbL).",
    h2Editorial: "Editorial Standards & Geospatial Accuracy",
    pEditorial: "Our technical guides, formulas, and comparison articles are authored and peer-reviewed by geospatial professionals with expertise in Geographic Information Systems (GIS), geodesy, and computer science.",
    h3CalcStandards: "Our Calculation Standards:",
    c1Title: "Earth Ellipsoidal Model:",
    c1Desc: "All coordinate representations adhere strictly to the WGS 84 (World Geodetic System 1984) standard (EPSG:4326), the same reference datum used by the NAVSTAR GPS constellation.",
    c2Title: "Great-Circle Distance:",
    c2Desc: "Distance calculations between two coordinates utilize the spherical Haversine formula with a mean Earth volumetric radius (R = 6,371.0 km), or Vincenty's inverse geodetic equations.",
    c3Title: "Continuous Verification:",
    c3Desc: "Formulas and API endpoints are tested weekly against benchmark geodetic survey markers established by the National Geodetic Survey (NGS).",
    h2Disclaimers: "Disclaimers: Non-Emergency Use",
    pDisclaimers: "While our tools achieve high precision using modern dual-frequency GNSS sensors, MyLocationLab is not an emergency dispatch service. In the event of an urgent life-threatening emergency, always dial 911 (US/Canada), 112 (Europe), 999 (UK), or your local emergency response authority directly from a mobile cellular phone.",
    h2Contact: "Contact & Feedback",
    pContact: "Notice a bug, coordinate anomaly, or have a suggestion for a new geospatial tool? We welcome input from cartographers, surveyors, and web developers:",
    contactBtn: "✉️ Get in Touch with Our Team"
  },
  es: {
    metaTitle: "Sobre Nosotros — Estándares y Metodología | MyLocationLab",
    metaDescription: "Conozca la misión, los estándares editoriales, la ingeniería geoespacial y la arquitectura sin retención de datos de MyLocationLab.",
    breadcrumb: "Sobre Nosotros y Estándares",
    badge: "Estándares Verificados de Precisión",
    titlePrefix: "Acerca de",
    titleHighlight: "MyLocationLab",
    subtitle: "Diseñado para brindar al mundo las herramientas de geolocalización más veloces, precisas y estrictamente privadas de la web.",
    h2Mission: "Nuestra Misión Principal",
    pMission1: "MyLocationLab nació para resolver una carencia en internet: averiguar su ubicación física, convertir coordenadas y medir distancias sin ser rastreado, sin cookies invasivas y sin obligar a descargar aplicaciones.",
    pMission2: "Cada herramienta, conversor y guía técnica en este sitio se construye sobre dos pilares inquebrantables: máxima precisión geodésica y privacidad absoluta del usuario.",
    h2ZeroData: "Arquitectura Cero Retención de Datos",
    pZeroData: "A diferencia de servicios web que almacenan posiciones en bases de datos comerciales, MyLocationLab funciona íntegramente en el extremo del cliente (navegador):",
    b1Title: "Ejecución en el Cliente:",
    b1Desc: "Al solicitar coordenadas mediante la API W3C Geolocation, los valores numéricos residen únicamente en la memoria efímera de su navegador.",
    b2Title: "Cero Registros en Servidores:",
    b2Desc: "Jamás enviamos, guardamos ni registramos su latitud, longitud, dirección IP o calle en servidores externos.",
    b3Title: "Cartografía de Código Abierto:",
    b3Desc: "Empleamos bases de datos cartográficas abiertas de OpenStreetMap y Nominatim bajo licencia ODbL.",
    h2Editorial: "Estándares Editoriales y Precisión Geoespacial",
    pEditorial: "Nuestras guías técnicas, fórmulas y comparativas son redactadas y validadas por profesionales en Sistemas de Información Geográfica (SIG), geodesia y ciencias de la computación.",
    h3CalcStandards: "Estándares de Cálculo Geodésico:",
    c1Title: "Modelo Elipsoidal Terrestre:",
    c1Desc: "Todas las coordenadas se ajustan estrictamente al elipsoide WGS 84 (EPSG:4326), el mismo marco de referencia adoptado por la constelación GPS.",
    c2Title: "Distancia Ortodrómica:",
    c2Desc: "El cómputo métrico entre pares de puntos emplea la fórmula esférica de Haversine (radio terrestre R = 6.371,0 km) o las ecuaciones de Vincenty.",
    c3Title: "Verificación Continua:",
    c3Desc: "Comprobamos periódicamente nuestras rutinas matemáticas contra vértices geodésicos oficiales.",
    h2Disclaimers: "Aviso: Uso No Apto para Emergencias",
    pDisclaimers: "Aunque nuestras herramientas alcanzan alta precisión con chips GNSS modernos, MyLocationLab no es un servicio de emergencias. En caso de riesgo vital, llame siempre al 112 (Europa/España), 911 (América) o a los servicios de rescate locales desde un teléfono móvil.",
    h2Contact: "Contacto y Sugerencias",
    pContact: "¿Ha detectado un error o desea sugerir una nueva función geoespacial? Valoramos enormemente las aportaciones de topógrafos, ingenieros y programadores:",
    contactBtn: "✉️ Contactar con Nuestro Equipo"
  },
  fr: {
    metaTitle: "À Propos — Méthodologie & Déontologie | MyLocationLab",
    metaDescription: "Découvrez la mission, les exigences de précision géodésique, l'éthique de confidentialité et l'architecture technique de MyLocationLab.",
    breadcrumb: "À Propos & Normes Déontologiques",
    badge: "Normes de Précision Certifiées",
    titlePrefix: "À Propos de",
    titleHighlight: "MyLocationLab",
    subtitle: "Conçu pour offrir au public des outils de géolocalisation rapides, rigoureusement précis et respectueux de la vie privée.",
    h2Mission: "Notre Mission Fondamentale",
    pMission1: "MyLocationLab a été créé pour pallier un manque récurrent : déterminer sa position, convertir des coordonnées et mesurer des distances sans aucun pistage publicitaire, cookie intrusif ou installation d'application mobile.",
    pMission2: "Chacun de nos outils et guides techniques repose sur deux piliers inaliénables : l'exactitude géodésique et l'anonymat total de l'internaute.",
    h2ZeroData: "Architecture Zéro Collecte de Données",
    pZeroData: "À l'opposé des plateformes commerciales qui revendent les historiques de localisation, MyLocationLab repose sur un traitement exclusif côté client :",
    b1Title: "Exécution Locale :",
    b1Desc: "Lorsque votre navigateur sollicite vos coordonnées via l'API W3C Geolocation, les valeurs numériques résident uniquement dans la mémoire vive temporaire de votre appareil.",
    b2Title: "Aucune Sauvegarde Serveur :",
    b2Desc: "Nous ne transmettons, ne stockons et ne journalisons aucune coordonnée, IP ou adresse postale sur nos serveurs.",
    b3Title: "Cartographie Ouverte :",
    b3Desc: "Nous nous appuyons sur les données géographiques mondiales d'OpenStreetMap et du géocodeur Nominatim sous licence ODbL.",
    h2Editorial: "Exigence Éditoriale & Rigueur Scientifique",
    pEditorial: "Nos manuels techniques et comparatifs sont conçus et vérifiés par des ingénieurs spécialistes des Systèmes d'Information Géographique (SIG) et de la géodésie.",
    h3CalcStandards: "Nos Référentiels de Calcul :",
    c1Title: "Modèle Ellipsoïdal Terrestre :",
    c1Desc: "Toutes nos coordonnées respectent la norme mondiale WGS 84 (EPSG:4326), cadre géodésique de la constellation satellitaire NAVSTAR GPS.",
    c2Title: "Distance du Grand Cercle :",
    c2Desc: "Le calcul des distances entre points emploie la formule trigonométrique de Haversine (rayon terrestre moyen R = 6 371 km) ou les algorithmes de Vincenty.",
    c3Title: "Contrôles Périodiques :",
    c3Desc: "Nos algorithmes sont calibrés régulièrement à partir de bornes géodésiques d'organismes nationaux de référence.",
    h2Disclaimers: "Avertissement : Situations d'Urgence",
    pDisclaimers: "Bien que nos outils délivrent une précision métrique, MyLocationLab ne constitue pas un système de secours d'urgence. En cas de détresse ou de danger vital, composez immédiatement le 112 (Europe), le 15/17/18 (France), le 911 (Amérique du Nord) ou contactez vos services de secours locaux par téléphone cellulaire.",
    h2Contact: "Contact & Retours",
    pContact: "Vous constatez une anomalie de calcul ou souhaitez nous proposer un nouvel utilitaire spatial ? Les retours de développeurs et de géomètres sont les bienvenus :",
    contactBtn: "✉️ Contacter l'Équipe d'Ingénierie"
  },
  de: {
    metaTitle: "Über Uns — Qualitätsstandards & Methodik | MyLocationLab",
    metaDescription: "Erfahren Sie mehr über die Mission, geodätische Standards, wissenschaftliche Methodik und die datenschutzfreundliche Architektur von MyLocationLab.",
    breadcrumb: "Über Uns & Standards",
    badge: "Zertifizierte Genauigkeitsstandards",
    titlePrefix: "Über",
    titleHighlight: "MyLocationLab",
    subtitle: "Entwickelt, um die schnellsten, präzisesten und datenschutzkonformsten Geodaten-Werkzeuge im Web bereitzustellen.",
    h2Mission: "Unsere Kernmission",
    pMission1: "MyLocationLab entstand, um ein alltägliches Web-Problem zu lösen: Eigene Koordinaten ermitteln, transformieren und Distanzen messen, ohne getrackt zu werden, Cookies zu akzeptieren oder Apps installieren zu müssen.",
    pMission2: "Jedes Werkzeug und jeder Leitfaden auf dieser Plattform beruht auf zwei Grundsätzen: kompromisslose geodätische Präzision und absolute Nutzerprivatsphäre.",
    h2ZeroData: "Architektur ohne Datenspeicherung (Zero Data Retention)",
    pZeroData: "Im Gegensatz zu kommerziellen Datenbrokern arbeitet MyLocationLab mit einer dezentralen In-Browser-Architektur:",
    b1Title: "Clientseitige Ausführung:",
    b1Desc: "Bei der Abfrage von Koordinaten über die W3C Geolocation API verbleiben die Positionsdaten ausschließlich im flüchtigen Arbeitsspeicher Ihres Endgeräts.",
    b2Title: "Keine Server-Protokolle:",
    b2Desc: "Breiten-, Längengrade, IP-Adressen oder Adressdaten werden niemals an unsere Backend-Server übertragen oder gespeichert.",
    b3Title: "Open-Source-Geodaten:",
    b3Desc: "Wir nutzen freie Kartendaten von OpenStreetMap und Nominatim unter der Open Database License (ODbL).",
    h2Editorial: "Redaktionelle Standards & Fachliche Genauigkeit",
    pEditorial: "Unsere Fachartikel, Formeln und Vergleiche werden von Geo-Ingenieuren und GIS-Fachleuten erstellt und geprüft.",
    h3CalcStandards: "Unsere Berechnungsstandards:",
    c1Title: "Erdellipsoid-Modell:",
    c1Desc: "Alle Koordinaten basieren streng auf dem Referenzsystem WGS 84 (EPSG:4326), dem weltweiten Standard des NAVSTAR-GPS.",
    c2Title: "Großkreisdistanz:",
    c2Desc: "Entfernungsmessungen erfolgen nach der sphärischen Haversine-Formel (mittlerer Erdradius R = 6.371,0 km) bzw. den inversen Gleichungen nach Vincenty.",
    c3Title: "Laufende Validierung:",
    c3Desc: "Rechenkerne werden regelmäßig anhand amtlicher Vermessungspunkte auf Richtigkeit geprüft.",
    h2Disclaimers: "Haftungsausschluss: Kein Notrufdienst",
    pDisclaimers: "Trotz hoher GNSS-Präzision ist MyLocationLab kein Notrufsystem. Wählen Sie bei lebensbedrohlichen Notfällen immer direkt die 112 (Europa), 911 (USA/Kanada) oder Ihre örtliche Rettungsleitstelle über das Mobilfunknetz.",
    h2Contact: "Kontakt & Feedback",
    pContact: "Haben Sie einen Rechenfehler entdeckt oder einen Vorschlag für ein neues Geowerkzeug? Wir freuen uns über Rückmeldungen aus Vermessung und GIS:",
    contactBtn: "✉️ Kontakt zum Ingenieurteam aufnehmen"
  },
  pt: {
    metaTitle: "Sobre Nós — Padrões e Metodologia | MyLocationLab",
    metaDescription: "Conheça a missão, os critérios científicos, a precisão geodésica e a política de zero armazenamento de dados do MyLocationLab.",
    breadcrumb: "Sobre Nós e Padrões Técnicos",
    badge: "Padrões Certificados de Precisão",
    titlePrefix: "Sobre o",
    titleHighlight: "MyLocationLab",
    subtitle: "Desenvolvido para oferecer ferramentas de geolocalização rápidas, de alta precisão métrica e com privacidade irrestrita.",
    h2Mission: "Nossa Missão",
    pMission1: "O MyLocationLab foi idealizado para resolver um problema recorrente: encontrar sua localização física, converter formatos e medir distâncias sem rastreamento ou necessidade de instalar aplicativos móveis.",
    pMission2: "Todas as ferramentas e guias são construídos sob dois pilares essenciais: exatidão geodésica e privacidade inegociável do usuário.",
    h2ZeroData: "Arquitetura com Zero Retenção de Dados",
    pZeroData: "Ao contrário de plataformas que vendem dados espaciais para anunciantes, o MyLocationLab funciona estritamente no navegador cliente:",
    b1Title: "Execução no Dispositivo:",
    b1Desc: "Ao autorizar o W3C Geolocation API, as coordenadas residem exclusivamente na memória volátil do seu próprio navegador.",
    b2Title: "Sem Logs em Servidor:",
    b2Desc: "Não transmitimos nem armazenamos latitude, longitude, IP ou endereço de rua em nossos servidores.",
    b3Title: "Cartografia Livre:",
    b3Desc: "Utilizamos as bases cartográficas abertas do OpenStreetMap e Nominatim sob licença ODbL.",
    h2Editorial: "Critérios Editoriais e Rigor Geoespacial",
    pEditorial: "Nossos guias, tabelas comparativas e algoritmos são escritos e revisados por engenheiros especializados em Geodésia e Sistemas de Informação Geográfica (SIG).",
    h3CalcStandards: "Padrões de Cálculo Aplicados:",
    c1Title: "Elipsoide de Referência Terrestre:",
    c1Desc: "Todas as coordenadas seguem o referencial WGS 84 (EPSG:4326), o mesmo modelo matemático adotado pela constelação de satélites GPS.",
    c2Title: "Distância Geodésica Ortodrômica:",
    c2Desc: "As medições de distância utilizam a fórmula esférica de Haversine (raio volumétrico médio da Terra R = 6.371,0 km) ou as equações inversas de Vincenty.",
    c3Title: "Validação Técnica Contínua:",
    c3Desc: "Nossos algoritmos são calibrados sistematicamente com marcos geodésicos oficiais de referência.",
    h2Disclaimers: "Aviso Legal: Uso Não Emergencial",
    pDisclaimers: "Embora os cálculos atinjam alta exatidão, o MyLocationLab não substitui serviços de resgate. Em casos de emergência médica ou perigo à vida, ligue sempre para o 190 / 192 / 193 (Brasil), 112 (Europa) ou para as autoridades locais diretamente via rede celular.",
    h2Contact: "Contato e Colaborações",
    pContact: "Encontrou uma anomalia em coordenadas ou quer sugerir uma nova ferramenta? Agradecemos o contato de topógrafos, desenvolvedores e pesquisadores:",
    contactBtn: "✉️ Falar com a Equipe de Engenharia"
  }
};
