export interface ShareLocationContent {
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  eatRole: string;
  getShareBtn: string;
  statusInitial: string;
  statusRequesting: string;
  statusAcquired: string;
  btnRefresh: string;
  coordsLabel: string;
  accuracyLabel: string;
  resolvingAddr: string;
  shareOptions: string;
  copyLinkBtn: string;
  copyCoordsBtn: string;
  copiedLink: string;
  copiedCoords: string;
  shareWhatsApp: string;
  shareSms: string;
  openGoogle: string;
  openApple: string;
  needQrBtn: string;
  h2How: string;
  pHow1: string;
  pHow2: string;
  h2When: string;
  when1Title: string;
  when1Desc: string;
  when2Title: string;
  when2Desc: string;
  when3Title: string;
  when3Desc: string;
}

export const shareLocationTranslations: Record<string, ShareLocationContent> = {
  en: {
    metaTitle: "Share My Location — Free & Private | MyLocationLab",
    metaDescription: "Quickly share your current GPS location via WhatsApp, SMS, email, Google Maps, or QR code. 100% private and processed entirely in your browser.",
    breadcrumb: "Share Location",
    titlePrefix: "Share Your",
    titleHighlight: "Location",
    subtitle: "Generate an instant, secure link to your current GPS position. Share with friends, emergency contacts, or delivery drivers with complete privacy.",
    eatRole: "Privacy & Geospatial Content Reviewer",
    getShareBtn: "📍 Get & Share My Location",
    statusInitial: "Click to detect your current position securely",
    statusRequesting: "Requesting browser GPS permission...",
    statusAcquired: "Location successfully acquired!",
    btnRefresh: "🔄 Refresh Position",
    coordsLabel: "DETECTED COORDINATES",
    accuracyLabel: "High Precision",
    resolvingAddr: "Resolving street address...",
    shareOptions: "Share Options:",
    copyLinkBtn: "📋 Copy Map Link",
    copyCoordsBtn: "📐 Copy Coordinates",
    copiedLink: "✅ Copied Link!",
    copiedCoords: "✅ Copied Coordinates!",
    shareWhatsApp: "💬 Share via WhatsApp",
    shareSms: "📱 Share via SMS",
    openGoogle: "🗺️ Open Google Maps",
    openApple: "🍏 Open Apple Maps",
    needQrBtn: "📱 Need a Printable QR Code? Generate QR Code →",
    h2How: "How Location Sharing Works (Zero-Storage Guarantee)",
    pHow1: "When you share your location using MyLocationLab, your geographic coordinates are encoded directly into the share URL query parameters (e.g., ?lat=40.7128&lng=-74.0060).",
    pHow2: "Your location data is never transmitted to or saved on our servers. When your recipient opens the link, their browser reads the coordinates directly from their own URL bar.",
    h2When: "When to Share Your Exact GPS Location",
    when1Title: "Meeting Friends in Large Parks:",
    when1Desc: "Pinpoint your exact picnic blanket or festival tent where street addresses do not exist.",
    when2Title: "Roadside Assistance:",
    when2Desc: "Provide tow truck drivers or emergency roadside crews with your exact highway mile-marker coordinates.",
    when3Title: "Rural Delivery Drop-offs:",
    when3Desc: "Direct courier couriers to specific driveway gates on large rural properties."
  },
  es: {
    metaTitle: "Compartir Mi Ubicación — Gratis y Privado | MyLocationLab",
    metaDescription: "Comparta su posición GPS rápidamente por WhatsApp, SMS, Google Maps o código QR. 100% privado y procesado en su navegador.",
    breadcrumb: "Compartir Ubicación",
    titlePrefix: "Compartir su",
    titleHighlight: "Ubicación",
    subtitle: "Genere un enlace seguro e inmediato con sus coordenadas GPS. Compártalas con familiares, emergencias o repartidores con total privacidad.",
    eatRole: "Revisor de Privacidad y Geoinformación",
    getShareBtn: "📍 Obtener y Compartir Mi Ubicación",
    statusInitial: "Haga clic para detectar su posición con seguridad",
    statusRequesting: "Solicitando permiso GPS al navegador...",
    statusAcquired: "¡Ubicación detectada con éxito!",
    btnRefresh: "🔄 Actualizar Posición",
    coordsLabel: "COORDENADAS DETECTADAS",
    accuracyLabel: "Alta Precisión",
    resolvingAddr: "Obteniendo dirección física...",
    shareOptions: "Opciones para Compartir:",
    copyLinkBtn: "📋 Copiar Enlace del Mapa",
    copyCoordsBtn: "📐 Copiar Coordenadas",
    copiedLink: "✅ ¡Enlace Copiado!",
    copiedCoords: "✅ ¡Coordenadas Copiadas!",
    shareWhatsApp: "💬 Compartir por WhatsApp",
    shareSms: "📱 Compartir por SMS",
    openGoogle: "🗺️ Abrir en Google Maps",
    openApple: "🍏 Abrir en Apple Maps",
    needQrBtn: "📱 ¿Necesita un código QR imprimible? Generar Código QR →",
    h2How: "Cómo funciona el envío de ubicación (Garantía Cero Almacenamiento)",
    pHow1: "Al compartir su ubicación con MyLocationLab, las coordenadas se codifican directamente en los parámetros de la URL.",
    pHow2: "Sus datos jamás se guardan ni se envían a nuestros servidores. Quien reciba el enlace lee las coordenadas directamente en su propio navegador.",
    h2When: "Cuándo es útil compartir coordenadas exactas",
    when1Title: "Encuentros en parques o festivales:",
    when1Desc: "Marque su posición exacta donde no existen números de calle ni portales.",
    when2Title: "Asistencia en carretera:",
    when2Desc: "Indique a la grúa o ambulancia el punto kilométrico exacto en autovía o carretera secundaria.",
    when3Title: "Entregas en zonas rurales:",
    when3Desc: "Guíe a repartidores hasta la cancela exacta en fincas o parcelas sin nombre de vía."
  },
  fr: {
    metaTitle: "Partager Ma Position — Gratuit & Privé | MyLocationLab",
    metaDescription: "Partagez votre position GPS en direct par WhatsApp, SMS, Google Maps ou QR code. 100 % confidentiel et traité dans votre navigateur.",
    breadcrumb: "Partager la Position",
    titlePrefix: "Partager Votre",
    titleHighlight: "Position",
    subtitle: "Créez un lien sécurisé vers votre position GPS en un clic. Partagez avec vos proches, les urgences ou des livreurs en toute discrétion.",
    eatRole: "Expert Données Spatiales & Confidentialité",
    getShareBtn: "📍 Détecter & Partager Ma Position",
    statusInitial: "Cliquez pour géolocaliser votre appareil en toute sécurité",
    statusRequesting: "Demande d'accès aux satellites en cours...",
    statusAcquired: "Position acquise avec succès !",
    btnRefresh: "🔄 Actualiser la Position",
    coordsLabel: "COORDONNÉES DÉTECTÉES",
    accuracyLabel: "Haute Précision",
    resolvingAddr: "Recherche de l'adresse postale...",
    shareOptions: "Options de Partage :",
    copyLinkBtn: "📋 Copier le Lien Carte",
    copyCoordsBtn: "📐 Copier les Coordonnées",
    copiedLink: "✅ Lien Copié !",
    copiedCoords: "✅ Coordonnées Copiées !",
    shareWhatsApp: "💬 Partager sur WhatsApp",
    shareSms: "📱 Partager par SMS",
    openGoogle: "🗺️ Ouvrir Google Maps",
    openApple: "🍏 Ouvrir Apple Maps",
    needQrBtn: "📱 Besoin d'un QR code imprimable ? Créer un QR Code →",
    h2How: "Principe du partage (Garantie Zéro Enregistrement)",
    pHow1: "Lorsque vous partagez votre position, vos coordonnées géographiques sont encapsulées directement dans l'URL transmise.",
    pHow2: "Aucune coordonnée n'est stockée ni transmise sur nos serveurs distants. Le destinataire lit les coordonnées dans sa propre barre d'adresse.",
    h2When: "Cas d'usage du partage de coordonnées GPS",
    when1Title: "Retrouvailles dans les parcs ou festivals :",
    when1Desc: "Localisez précisément votre emplacement sans dépendre d'adresses inexistantes.",
    when2Title: "Assistance et dépannage sur route :",
    when2Desc: "Transmettez votre point exact aux services d'assistance routière sur autoroute.",
    when3Title: "Livraisons en zone rurale :",
    when3Desc: "Guidez les livreurs directement vers l'entrée de votre propriété en campagne."
  },
  de: {
    metaTitle: "Standort Teilen — Kostenlos & Privat | MyLocationLab",
    metaDescription: "Teilen Sie Ihren aktuellen GPS-Standort schnell per WhatsApp, SMS, Google Maps oder QR-Code. 100 % privat im Browser verarbeitet.",
    breadcrumb: "Standort Teilen",
    titlePrefix: "Standort",
    titleHighlight: "Sicher Teilen",
    subtitle: "Erstellen Sie einen privaten Sofort-Link zu Ihren Koordinaten. Teilen Sie Ihren Aufenthaltsort mit Kontakten, Notdiensten oder Lieferanten.",
    eatRole: "Geodaten- & Datenschutz-Prüfer",
    getShareBtn: "📍 Meinen Standort erfassen & teilen",
    statusInitial: "Klicken Sie hier, um Ihren Standort abzurufen",
    statusRequesting: "GPS-Zugriff wird im Browser angefragt...",
    statusAcquired: "Standort erfolgreich ermittelt!",
    btnRefresh: "🔄 Position aktualisieren",
    coordsLabel: "ERMITTELTE KOORDINATEN",
    accuracyLabel: "Hohe Präzision",
    resolvingAddr: "Adresse wird aufgelöst...",
    shareOptions: "Optionen zum Teilen:",
    copyLinkBtn: "📋 Karten-Link kopieren",
    copyCoordsBtn: "📐 Koordinaten kopieren",
    copiedLink: "✅ Link kopiert!",
    copiedCoords: "✅ Koordinaten kopiert!",
    shareWhatsApp: "💬 Per WhatsApp teilen",
    shareSms: "📱 Per SMS teilen",
    openGoogle: "🗺️ In Google Maps öffnen",
    openApple: "🍏 In Apple Maps öffnen",
    needQrBtn: "📱 Druckbarer QR-Code benötigt? QR-Code erzeugen →",
    h2How: "Funktionsweise der Standort-Weitergabe (Null-Speicherung)",
    pHow1: "Beim Teilen Ihrer Position werden die Geokoordinaten direkt in die URL-Parameter eingebettet.",
    pHow2: "Ihre Koordinaten werden niemals an unsere Server übertragen. Der Empfänger liest die Positionsdaten direkt aus seiner Browserzeile.",
    h2When: "Wann sich die Weitergabe von Koordinaten lohnt",
    when1Title: "Treffpunkte in Parks oder auf Events:",
    when1Desc: "Finden Sie sich punktgenau auf Festivalgeländen ohne Postadressen.",
    when2Title: "Pannenhilfe & Abschleppdienst:",
    when2Desc: "Übermitteln Sie dem Notdienst Ihre metergenauen Koordinaten auf der Autobahn.",
    when3Title: "Zustellungen auf dem Land:",
    when3Desc: "Lotsen Sie Lieferdienste zuverlässig an die richtige Grundstückszufahrt."
  },
  pt: {
    metaTitle: "Compartilhar Minha Localização — Rápido e Seguro | MyLocationLab",
    metaDescription: "Compartilhe sua posição GPS por WhatsApp, SMS, Google Maps ou QR code. 100% privativo e processado no seu navegador.",
    breadcrumb: "Compartilhar Localização",
    titlePrefix: "Compartilhar sua",
    titleHighlight: "Localização",
    subtitle: "Gere um link direto e privativo para suas coordenadas GPS atuais. Compartilhe com amigos, emergências ou entregadores com discrição.",
    eatRole: "Revisor de Privacidade e Dados Espaciais",
    getShareBtn: "📍 Obter e Compartilhar Posição",
    statusInitial: "Clique para capturar suas coordenadas com segurança",
    statusRequesting: "Solicitando autorização do GPS no navegador...",
    statusAcquired: "Coordenadas capturadas com sucesso!",
    btnRefresh: "🔄 Atualizar Posição",
    coordsLabel: "COORDENADAS DETECTADAS",
    accuracyLabel: "Alta Precisão",
    resolvingAddr: "Identificando endereço da rua...",
    shareOptions: "Opções de Envio:",
    copyLinkBtn: "📋 Copiar Link do Mapa",
    copyCoordsBtn: "📐 Copiar Coordenadas",
    copiedLink: "✅ Link Copiado!",
    copiedCoords: "✅ Coordenadas Copiadas!",
    shareWhatsApp: "💬 Enviar no WhatsApp",
    shareSms: "📱 Enviar por SMS",
    openGoogle: "🗺️ Abrir no Google Maps",
    openApple: "🍏 Abrir no Apple Maps",
    needQrBtn: "📱 Precisa de um QR Code impresso? Criar QR Code →",
    h2How: "Como funciona o compartilhamento (Garantia de Zero Armazenamento)",
    pHow1: "Ao compartilhar sua localização, as coordenadas são codificadas exclusivamente na URL gerada.",
    pHow2: "Nenhum dado é salvo ou enviado para nossos servidores. O destinatário lê as coordenadas diretamente no navegador dele.",
    h2When: "Quando utilizar o envio de coordenadas GPS",
    when1Title: "Encontros em parques ou praias:",
    when1Desc: "Localize amigos com precisão métrica onde não existem números de rua.",
    when2Title: "Socorro e guincho em rodovias:",
    when2Desc: "Informe o ponto exato da estrada para serviços de resgate ou seguro.",
    when3Title: "Entregas em áreas rurais:",
    when3Desc: "Oriente motoristas até a porteira exata em sítios e fazendas."
  }
};
