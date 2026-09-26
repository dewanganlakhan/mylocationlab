export interface PrivacyPageContent {
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  titlePrefix: string;
  titleHighlight: string;
  effectiveDate: string;
  h2Principle: string;
  pPrinciple1: string;
  pPrinciple2: string;
  h2Perms: string;
  pPerms: string;
  perm1Title: string;
  perm1Desc: string;
  perm2Title: string;
  perm2Desc: string;
  perm3Title: string;
  perm3Desc: string;
  h2ThirdParty: string;
  pThirdParty: string;
  tp1Title: string;
  tp1Desc: string;
  tp2Title: string;
  tp2Desc: string;
  pThirdParty2: string;
  h2Ip: string;
  pIp: string;
  h2Cookies: string;
  pCookies: string;
  h2Compliance: string;
  pCompliance: string;
  h2Contact: string;
  pContact: string;
}

export const privacyPageTranslations: Record<string, PrivacyPageContent> = {
  en: {
    metaTitle: "Privacy Policy — Zero Data Retention | MyLocationLab",
    metaDescription: "Read our clear, transparent privacy policy. Learn why MyLocationLab never records, logs, or sells your GPS coordinates or IP location.",
    breadcrumb: "Privacy Policy",
    titlePrefix: "Privacy",
    titleHighlight: "Policy",
    effectiveDate: "Effective Date: September 15, 2026. Your location data is private, personal, and belongs exclusively to you.",
    h2Principle: "1. The Core Principle: Zero-Data Retention",
    pPrinciple1: "At MyLocationLab, our architecture is designed around a single unbreakable principle: we do not collect, store, log, or monetize your location data.",
    pPrinciple2: "When you use any tool on our website, all calculations are performed locally inside your device's web browser.",
    h2Perms: "2. How Location Permissions Work (W3C Geolocation API)",
    pPerms: "We access your device's position strictly via the standardized W3C HTML5 Geolocation API.",
    perm1Title: "Explicit Consent:",
    perm1Desc: "Your browser will never expose your coordinates without showing a permission dialog.",
    perm2Title: "No Background Tracking:",
    perm2Desc: "We only read your position when you actively click a button or interact with a tool. Once you navigate away or close the tab, all location access immediately terminates.",
    perm3Title: "Revocation:",
    perm3Desc: "You can revoke location access at any time through your browser's site settings.",
    h2ThirdParty: "3. Third-Party Mapping & Reverse Geocoding Requests",
    pThirdParty: "To translate your raw latitude and longitude coordinates into a human-readable street address or render an interactive map, your browser communicates directly with open-source mapping APIs:",
    tp1Title: "OpenStreetMap & Nominatim:",
    tp1Desc: "Used for map tile rendering and reverse geocoding under the Open Database License.",
    tp2Title: "Leaflet.js:",
    tp2Desc: "An open-source client-side JavaScript library that runs locally in your browser to render map tiles.",
    pThirdParty2: "Neither MyLocationLab nor our open-source cartographic partners correlate your requests with your identity.",
    h2Ip: "4. IP Addresses & Server Logs",
    pIp: "When you connect to any web server, your public IP address is transmitted as part of basic TCP/IP internet protocol communication. We configure our hosting edge servers to anonymize IP addresses and avoid logging persistent user identifiers.",
    h2Cookies: "5. Cookies and Tracking Technologies",
    pCookies: "MyLocationLab does not use invasive cross-site tracking cookies, behavioral tracking scripts, or finger-printing beacons. If local storage is used, it is solely to remember your preferred unit preferences (e.g. Metric meters vs. Imperial feet).",
    h2Compliance: "6. GDPR, CCPA & Global Compliance",
    pCompliance: "Because we do not store, process, or sell personal data or location histories, we are fully compliant with the European General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and international privacy frameworks.",
    h2Contact: "7. Contact Our Data Protection Officer",
    pContact: "If you have any questions or privacy concerns regarding this policy, please reach out through our Contact Page."
  },
  es: {
    metaTitle: "Política de Privacidad — Cero Retención de Datos | MyLocationLab",
    metaDescription: "Consulte nuestra política de privacidad transparente. Sepa por qué MyLocationLab jamás guarda, registra ni vende sus coordenadas GPS o IP.",
    breadcrumb: "Política de Privacidad",
    titlePrefix: "Política de",
    titleHighlight: "Privacidad",
    effectiveDate: "Fecha de vigencia: 15 de septiembre de 2026. Sus datos de localización son personales y le pertenecen exclusivamente a usted.",
    h2Principle: "1. Principio Fundamental: Cero Retención de Datos",
    pPrinciple1: "En MyLocationLab, nuestra arquitectura responde a un principio inquebrantable: no recopilamos, almacenamos, registramos ni comercializamos sus datos de ubicación.",
    pPrinciple2: "Al utilizar cualquier utilidad de este sitio, todos los cálculos se realizan localmente en el navegador de su dispositivo.",
    h2Perms: "2. Permisos de Ubicación (API W3C Geolocation)",
    pPerms: "Accedemos a la posición de su terminal mediante la API estándar W3C HTML5 Geolocation.",
    perm1Title: "Consentimiento Explícito:",
    perm1Desc: "Su navegador jamás transmitirá coordenadas sin mostrarle un cuadro de diálogo de autorización previa.",
    perm2Title: "Sin Rastreo en Segundo Plano:",
    perm2Desc: "Solo leemos su posición cuando usted pulsa voluntariamente un botón interactivo. Al cerrar la pestaña o salir del sitio, el acceso cesa de inmediato.",
    perm3Title: "Revocación Sencilla:",
    perm3Desc: "Puede retirar el permiso en cualquier momento desde la configuración de su navegador.",
    h2ThirdParty: "3. Cartografía y Peticiones de Geocodificación Externa",
    pThirdParty: "Para convertir coordenadas numéricas en direcciones postales o desplegar capas cartográficas, su navegador contacta directamente con fuentes abiertas:",
    tp1Title: "OpenStreetMap y Nominatim:",
    tp1Desc: "Utilizados para renderizar teselas cartográficas y geocodificación inversa bajo licencia ODbL.",
    tp2Title: "Leaflet.js:",
    tp2Desc: "Biblioteca JavaScript de código abierto ejecutada en su equipo para manipular mapas interactivos.",
    pThirdParty2: "Ni MyLocationLab ni los proyectos cartográficos abiertos vinculan sus consultas con identidades de usuario.",
    h2Ip: "4. Direcciones IP y Registros de Servidor",
    pIp: "Al conectarse a la web, su IP pública se transmite como requisito técnico de comunicación TCP/IP. Nuestros servidores de borde están configurados para anonimizar las direcciones IP y no conservar perfiles persistentes.",
    h2Cookies: "5. Cookies y Tecnologías de Seguimiento",
    pCookies: "MyLocationLab no utiliza cookies de seguimiento cruzado ni herramientas de huella digital (fingerprinting). El almacenamiento local solo recuerda sus preferencias de unidades (metros o pies).",
    h2Compliance: "6. Cumplimiento con RGPD, CCPA y Estándares Globales",
    pCompliance: "Al no retener, procesar ni monetizar datos personales o historiales de desplazamiento, cumplimos con el Reglamento General de Protección de Datos (RGPD) de la UE y la normativa CCPA de California.",
    h2Contact: "7. Contacto de Protección de Datos",
    pContact: "Si tiene cualquier consulta o duda sobre el tratamiento de su privacidad, póngase en contacto a través de nuestra Página de Contacto."
  },
  fr: {
    metaTitle: "Politique de Confidentialité — Zéro Donnée Stockée | MyLocationLab",
    metaDescription: "Consultez notre politique de confidentialité. Découvrez pourquoi MyLocationLab n'enregistre, ne trace et ne revend jamais vos coordonnées GPS.",
    breadcrumb: "Politique de Confidentialité",
    titlePrefix: "Politique de",
    titleHighlight: "Confidentialité",
    effectiveDate: "Date d'application : 15 septembre 2026. Vos coordonnées géographiques vous appartiennent exclusivement.",
    h2Principle: "1. Principe Clé : Zéro Conservation des Données",
    pPrinciple1: "Chez MyLocationLab, nous appliquons un principe absolu : nous ne collectons, ne conservons, ne journalisons et ne commercialisons aucune donnée de localisation.",
    pPrinciple2: "Tous les calculs géodésiques et conversions sont exécutés localement dans le navigateur de votre propre appareil.",
    h2Perms: "2. Gestion des Permissions (API W3C Geolocation)",
    pPerms: "L'accès aux capteurs s'opère selon les spécifications officielles de l'API standardisée W3C HTML5 Geolocation.",
    perm1Title: "Consentement Explicite :",
    perm1Desc: "Votre navigateur n'autorise aucun accès sans afficher une invite de confirmation préalable.",
    perm2Title: "Aucun Suivi en Arrière-Plan :",
    perm2Desc: "La position n'est relevée qu'à la suite d'un clic volontaire sur un bouton. Fermer l'onglet interrompt immédiatement toute lecture.",
    perm3Title: "Révocation Immédiate :",
    perm3Desc: "Vous pouvez annuler l'autorisation à tout moment dans les préférences de votre navigateur.",
    h2ThirdParty: "3. Cartographie & Requêtes de Géocodage Ouvertes",
    pThirdParty: "Pour convertir vos coordonnées en adresse lisible ou afficher un plan, votre navigateur interroge des infrastructures cartographiques ouvertes :",
    tp1Title: "OpenStreetMap & Nominatim :",
    tp1Desc: "Fournisseurs de tuiles cartographiques et de géocodage inverse sous licence Open Database License.",
    tp2Title: "Leaflet.js :",
    tp2Desc: "Bibliothèque logicielle libre exécutée localement sur votre poste.",
    pThirdParty2: "Aucune requête cartographique n'est recoupée avec votre identité personnelle.",
    h2Ip: "4. Adresses IP & Journaux de Connexion",
    pIp: "Toute connexion réseau implique la transmission de votre IP publique selon les protocoles fondamentaux TCP/IP. Nos serveurs d'hébergement sont configurés pour anonymiser les IP et ne constituer aucun registre de profilage.",
    h2Cookies: "5. Cookies & Technologies de Traçage",
    pCookies: "MyLocationLab n'utilise aucun cookie publicitaire tiers, script de profilage ou traceur d'empreinte numérique. Seules vos préférences métriques sont conservées localement.",
    h2Compliance: "6. Conformité RGPD & Normes Mondiales",
    pCompliance: "N'enregistrant aucune donnée à caractère personnel ni historique de géolocalisation, nous sommes en stricte conformité avec le RGPD européen et la loi californienne CCPA.",
    h2Contact: "7. Contact Délégué à la Protection des Données",
    pContact: "Pour toute question relative à la protection de vos données, veuillez nous joindre via notre Page de Contact."
  },
  de: {
    metaTitle: "Datenschutzerklärung — Null Datenspeicherung | MyLocationLab",
    metaDescription: "Unsere transparente Datenschutzerklärung. Erfahren Sie, warum MyLocationLab Ihre GPS-Koordinaten oder IP-Daten niemals aufzeichnet oder weitergibt.",
    breadcrumb: "Datenschutzerklärung",
    titlePrefix: "Datenschutz",
    titleHighlight: "Erklärung",
    effectiveDate: "Gültig ab: 15. September 2026. Ihre Standortdaten sind privat und gehören ausschließlich Ihnen.",
    h2Principle: "1. Grundprinzip: Vollständiger Verzicht auf Datenspeicherung",
    pPrinciple1: "Bei MyLocationLab gilt der unverhandelbare Grundsatz: Wir erheben, speichern, protokollieren und monetarisieren zu keinem Zeitpunkt Ihre Standortdaten.",
    pPrinciple2: "Sämtliche Berechnungen und Koordinatentransformationen werden ausschließlich lokal in Ihrem Webbrowser ausgeführt.",
    h2Perms: "2. Handhabung von Standort-Berechtigungen (W3C Geolocation API)",
    pPerms: "Der Zugriff auf Sensoren erfolgt streng standardisiert über die W3C HTML5 Geolocation API.",
    perm1Title: "Ausdrückliche Einwilligung:",
    perm1Desc: "Ihr Browser gibt Standortdaten erst nach Ihrer expliziten Freigabe im Berechtigungsdialog frei.",
    perm2Title: "Keine Hintergrundortung:",
    perm2Desc: "Daten werden nur erfasst, wenn Sie aktiv eine Schaltfläche bedienen. Nach Verlassen der Seite stoppt jeder Zugriff sofort.",
    perm3Title: "Widerrufbarkeit:",
    perm3Desc: "Berechtigungen können Sie jederzeit in den Website-Einstellungen Ihres Browsers widerrufen.",
    h2ThirdParty: "3. Externe Kartendienste & Geokodierung",
    pThirdParty: "Zur Umwandlung von Koordinaten in Straßenadressen oder zur Kartendarstellung kommuniziert Ihr Browser mit offenen Geodiensten:",
    tp1Title: "OpenStreetMap & Nominatim:",
    tp1Desc: "Dienste für Kartendarstellung und Reverse Geocoding unter der Open Database License (ODbL).",
    tp2Title: "Leaflet.js:",
    tp2Desc: "Eine quelloffene JavaScript-Bibliothek, die lokal in Ihrem Browser arbeitet.",
    pThirdParty2: "Weder MyLocationLab noch unsere Kartographiepartner verknüpfen Abfragen mit persönlichen Identitäten.",
    h2Ip: "4. IP-Adressen & Server-Logs",
    pIp: "Bei jedem Webzugriff wird Ihre öffentliche IP-Adresse technisch zwingend über TCP/IP übertragen. Unsere Edge-Server sind so konfiguriert, dass IP-Adressen unverzüglich anonymisiert werden.",
    h2Cookies: "5. Cookies & Tracking-Technologien",
    pCookies: "Wir setzen keine Third-Party-Tracking-Cookies oder Fingerprinting-Methoden ein. Der lokale Browserspeicher wird lediglich zur Speicherung von Maßeinheiten verwendet.",
    h2Compliance: "6. DSGVO-Konformität",
    pCompliance: "Da wir keine personenbezogenen Daten speichern oder verarbeiten, entspricht MyLocationLab vollumfänglich den Bestimmungen der europäischen Datenschutz-Grundverordnung (DSGVO).",
    h2Contact: "7. Kontakt zum Datenschutzbeauftragten",
    pContact: "Bei Fragen zu unserer Datenschutzerklärung kontaktieren Sie uns bitte über unsere Kontaktseite."
  },
  pt: {
    metaTitle: "Política de Privacidade — Zero Armazenamento de Dados | MyLocationLab",
    metaDescription: "Conheça nossa política de privacidade. Saiba por que o MyLocationLab nunca registra, salva ou vende suas coordenadas GPS ou endereço IP.",
    breadcrumb: "Política de Privacidade",
    titlePrefix: "Política de",
    titleHighlight: "Privacidade",
    effectiveDate: "Vigência: 15 de setembro de 2026. Seus dados de localização pertencem estritamente a você.",
    h2Principle: "1. Princípio Fundamental: Zero Retenção de Dados",
    pPrinciple1: "No MyLocationLab, nossa arquitetura adota uma regra inegociável: não coletamos, não armazenamos, não registramos e não comercializamos dados de localização.",
    pPrinciple2: "Todas as operações matemáticas e renderizações acontecem localmente dentro do navegador do seu dispositivo.",
    h2Perms: "2. Como Operam as Permissões de Localização (W3C Geolocation API)",
    pPerms: "O acesso aos dados geográficos utiliza estritamente o padrão universal W3C HTML5 Geolocation API.",
    perm1Title: "Consentimento Explícito:",
    perm1Desc: "O navegador só disponibiliza coordenadas mediante a aprovação expressa na janela de autorização.",
    perm2Title: "Sem Rastreamento em Segundo Plano:",
    perm2Desc: "A leitura só ocorre ao clicar intencionalmente em uma função. Ao fechar a aba, a conexão é encerrada imediatamente.",
    perm3Title: "Revogação Simples:",
    perm3Desc: "A permissão pode ser desfeita a qualquer momento nas opções de segurança do navegador.",
    h2ThirdParty: "3. Mapeamento e Consultas de Geocodificação Externa",
    pThirdParty: "Para converter pares de coordenadas em endereços postais, o navegador consulta fontes cartográficas abertas:",
    tp1Title: "OpenStreetMap e Nominatim:",
    tp1Desc: "Bases utilizadas para carregamento de mapas e geocodificação sob licença Open Database License.",
    tp2Title: "Leaflet.js:",
    tp2Desc: "Biblioteca de código aberto executada no dispositivo para manuseio do mapa.",
    pThirdParty2: "Nenhuma consulta cartográfica é correlacionada a identificadores pessoais.",
    h2Ip: "4. Endereços IP e Registros em Servidor",
    pIp: "A transmissão do IP público é indispensável ao protocolo TCP/IP de navegação. Nossos servidores de borda são ajustados para anonimizar endereços IP e dispensar logs contínuos.",
    h2Cookies: "5. Cookies e Tecnologias de Monitoramento",
    pCookies: "Não utilizamos cookies invasivos de terceiros ou técnicas de fingerprinting. O armazenamento local guarda apenas suas preferências de medida (metros ou pés).",
    h2Compliance: "6. Conformidade com LGPD e GDPR",
    pCompliance: "Como não armazenamos nem repassamos dados de usuários, operamos em perfeita consonância com a Lei Geral de Proteção de Dados (LGPD) e o GDPR europeu.",
    h2Contact: "7. Encarregado de Proteção de Dados",
    pContact: "Dúvidas sobre o tratamento de privacidade podem ser encaminhadas através da nossa Página de Contato."
  }
};
