export interface FAQItem {
  question: string;
  answerHtml: string;
}

export interface FAQPageContent {
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  stillQuestionsTitle: string;
  stillQuestionsDesc: string;
  browseGuidesBtn: string;
  glossaryBtn: string;
  contactBtn: string;
  faqs: FAQItem[];
}

export const faqPageTranslations: Record<string, FAQPageContent> = {
  en: {
    metaTitle: "Location & GPS FAQ — All Answers | MyLocationLab",
    metaDescription: "Answers to the most common questions about finding your location, GPS accuracy, browser privacy, wrong city fixes, and coordinate conversions.",
    breadcrumb: "Frequently Asked Questions",
    titlePrefix: "Frequently Asked",
    titleHighlight: "Questions",
    subtitle: "Everything you need to know about browser geolocation, satellite GPS accuracy, coordinate systems, and data privacy.",
    stillQuestionsTitle: "Still Have Questions?",
    stillQuestionsDesc: "Explore our technical guides or contact our geospatial engineering team directly.",
    browseGuidesBtn: "📚 Browse All Guides",
    glossaryBtn: "📖 Geodesy Glossary",
    contactBtn: "✉️ Contact Support",
    faqs: [
      {
        question: "What is my current location and how do I find it?",
        answerHtml: 'You can find your current location immediately by visiting our <a href="/location/">Where Am I</a> homepage and clicking <strong>"Get My Location"</strong>. Your browser will access your device\'s GPS or Wi-Fi positioning hardware to display your exact latitude, longitude, street address, city, state, and country.'
      },
      {
        question: "How accurate is this website in determining my position?",
        answerHtml: 'Accuracy depends on your hardware and environment: On smartphones and mobile devices with GPS enabled outdoors, accuracy is typically within <strong>3 to 5 meters</strong> (10–16 feet). On laptops or desktop computers connected to Wi-Fi, accuracy is usually within <strong>15 to 40 meters</strong>. On wired desktop ethernet connections, accuracy falls back to regional IP geolocation (within 10 to 50 kilometers).'
      },
      {
        question: "Is my location data tracked, recorded, or stored on your servers?",
        answerHtml: '<strong>No. Never.</strong> All geolocation calculations, coordinate conversions, and map rendering are executed 100% locally inside your browser client using the standard W3C Geolocation API. We do not store, log, track, or sell your coordinates. Read our full <a href="/privacy/">Privacy Policy</a>.'
      },
      {
        question: "Why does my location display the wrong city or state?",
        answerHtml: 'If your location is off by 30–80 kilometers, you are likely on a desktop computer using your Internet Service Provider\'s IP address rather than GPS. Alternatively, if you are using an active VPN or recently moved a Wi-Fi router from another address, your network routing table may reflect the VPN or old residence. Read our comprehensive <a href="/guides/wrong-location/">Guide to Fixing Wrong Location</a>.'
      },
      {
        question: "What is the difference between GPS coordinates and IP location?",
        answerHtml: 'GPS uses real-time radio signals from satellites orbiting 20,200 km above Earth to calculate your exact physical position down to 3 meters. IP geolocation looks up your public internet address in a commercial routing database to estimate which city or region your ISP operates in. Learn more in our <a href="/comparisons/gps-vs-ip-location/">GPS vs. IP Location Comparison</a>.'
      },
      {
        question: "How can I convert GPS coordinates into a street address?",
        answerHtml: 'You can use our free <a href="/tools/reverse-geocoding/">Reverse Geocoder</a> or <a href="/tools/address-finder/">Address Finder</a> tool. Enter your latitude and longitude, and our system queries OpenStreetMap\'s global address index to return the closest street name, house number, postal code, and municipality.'
      },
      {
        question: "Can I find my elevation and altitude above sea level?",
        answerHtml: 'Yes! Our <a href="/tools/elevation-finder/">Elevation Finder</a> measures your altitude above mean sea level in meters and feet using satellite topographic models and device barometric sensors.'
      },
      {
        question: "How do I share my location with someone else safely?",
        answerHtml: 'Visit our <a href="/share-location/">Share Location Tool</a>. You can generate a private, one-click link or scannable <a href="/tools/location-qr-code/">Location QR Code</a> that opens your exact position in Google Maps, Apple Maps, or OpenStreetMap.'
      },
      {
        question: 'What should I do if I accidentally clicked "Block" on the location prompt?',
        answerHtml: 'Click the padlock or settings icon in your browser\'s URL address bar, find <strong>Location</strong>, change the permission to <strong>Allow</strong>, and reload the webpage.'
      }
    ]
  },
  es: {
    metaTitle: "Preguntas Frecuentes sobre GPS y Ubicación | MyLocationLab",
    metaDescription: "Respuestas a dudas habituales sobre cómo encontrar su posición, precisión GPS, privacidad, cómo solucionar ciudades erróneas y convertir coordenadas.",
    breadcrumb: "Preguntas Frecuentes",
    titlePrefix: "Preguntas",
    titleHighlight: "Frecuentes (FAQ)",
    subtitle: "Todo lo que necesita saber sobre geolocalización en navegadores, precisión de satélites GPS, sistemas de coordenadas y privacidad.",
    stillQuestionsTitle: "¿Aún tiene preguntas?",
    stillQuestionsDesc: "Explore nuestras guías técnicas o contacte directamente con nuestro equipo de ingeniería geoespacial.",
    browseGuidesBtn: "📚 Ver Todas las Guías",
    glossaryBtn: "📖 Glosario de Geodesia",
    contactBtn: "✉️ Contactar con Soporte",
    faqs: [
      {
        question: "¿Cuál es mi ubicación actual y cómo puedo encontrarla?",
        answerHtml: 'Puede localizar su posición al instante visitando nuestra página principal <a href="/location/">Dónde Estoy</a> y haciendo clic en <strong>"Obtener Mi Ubicación"</strong>. Su navegador consultará el hardware GPS o las redes Wi-Fi de su dispositivo para mostrar latitud, longitud, dirección de calle, ciudad y país exactos.'
      },
      {
        question: "¿Qué precisión tiene este sitio web al calcular mi posición?",
        answerHtml: 'La precisión depende de su hardware y entorno: en smartphones con GPS activado al aire libre, suele ser de <strong>3 a 5 metros</strong>. En ordenadores portátiles conectados a Wi-Fi, suele rondar los <strong>15 a 40 metros</strong>. En conexiones de cable de escritorio, se recurre a la geolocalización por IP regional (margen de 5 a 50 km según el proveedor).'
      },
      {
        question: "¿Se rastrean, registran o almacenan mis datos de ubicación en sus servidores?",
        answerHtml: '<strong>No. Nunca.</strong> Todos los cálculos de geolocalización, transformaciones de coordenadas y renderizado de mapas se procesan 100% de forma local en su navegador mediante la API W3C Geolocation. No registramos ni comercializamos sus coordenadas. Consulte nuestra <a href="/privacy/">Política de Privacidad</a>.'
      },
      {
        question: "¿Por qué mi ubicación muestra una ciudad o provincia errónea?",
        answerHtml: 'Si el desvío es de 30 a 80 km, probablemente esté en un ordenador de sobremesa usando la IP de su proveedor de Internet en lugar de GPS. Si utiliza una VPN o ha trasladado recientemente su router Wi-Fi, la red puede reflejar la ubicación anterior. Consulte nuestra <a href="/guides/wrong-location/">Guía para Corregir Ubicaciones Erróneas</a>.'
      },
      {
        question: "¿Cuál es la diferencia entre coordenadas GPS y ubicación IP?",
        answerHtml: 'El GPS utiliza señales de radio de satélites a 20.200 km de altura para calcular su ubicación física con 3 metros de margen. La geolocalización IP consulta su dirección IP pública en bases de datos de enrutamiento comercial para aproximar la ciudad del proveedor. Aprenda más en nuestra <a href="/comparisons/gps-vs-ip-location/">Comparativa GPS vs. IP</a>.'
      },
      {
        question: "¿Cómo puedo convertir coordenadas GPS en una dirección con calle y número?",
        answerHtml: 'Puede utilizar nuestras herramientas gratuitas de <a href="/tools/reverse-geocoding/">Geocodificación Inversa</a> o el <a href="/tools/address-finder/">Buscador de Direcciones</a>. Introduzca latitud y longitud, y nuestro sistema consultará el índice cartográfico de OpenStreetMap.'
      },
      {
        question: "¿Puedo averiguar mi elevación y altitud sobre el nivel del mar?",
        answerHtml: '¡Sí! Nuestro <a href="/tools/elevation-finder/">Buscador de Elevación</a> calcula su altitud sobre el nivel medio del mar en metros y pies combinando modelos topográficos satelitales y barómetros de dispositivos.'
      },
      {
        question: "¿Cómo puedo compartir mi posición con otra persona de forma segura?",
        answerHtml: 'Visite nuestra herramienta <a href="/share-location/">Compartir Ubicación</a>. Puede generar un enlace directo o un <a href="/tools/location-qr-code/">Código QR de Ubicación</a> escaneable para abrir en Google Maps, Apple Maps u OpenStreetMap.'
      },
      {
        question: '¿Qué hago si pulsé accidentalmente "Bloquear" en el permiso de ubicación?',
        answerHtml: 'Haga clic en el icono del candado o configuración junto a la barra de direcciones de su navegador, localice <strong>Ubicación</strong>, cambie el permiso a <strong>Permitir</strong> y recargue la página.'
      }
    ]
  },
  fr: {
    metaTitle: "FAQ Géolocalisation & GPS — Réponses Clés | MyLocationLab",
    metaDescription: "Réponses aux questions courantes sur la détection de votre position, la précision du GPS, la confidentialité et la conversion de coordonnées.",
    breadcrumb: "Foire Aux Questions",
    titlePrefix: "Foire Aux",
    titleHighlight: "Questions (FAQ)",
    subtitle: "Tout ce que vous devez savoir sur la géolocalisation dans le navigateur, la précision satellitaire, les coordonnées et la confidentialité.",
    stillQuestionsTitle: "Vous avez encore des questions ?",
    stillQuestionsDesc: "Consultez nos guides détaillés ou contactez directement nos ingénieurs en géomatique.",
    browseGuidesBtn: "📚 Tous les Guides",
    glossaryBtn: "📖 Glossaire Géodésique",
    contactBtn: "✉️ Contacter le Support",
    faqs: [
      {
        question: "Quelle est ma position actuelle et comment la trouver ?",
        answerHtml: 'Trouvez votre position instantanément sur notre page <a href="/location/">Où Suis-Je</a> en cliquant sur <strong>« Obtenir Ma Position »</strong>. Votre navigateur interrogera la puce GPS ou le réseau Wi-Fi de votre appareil pour afficher vos coordonnées, adresse, ville et pays.'
      },
      {
        question: "Quelle est la précision de ce site web ?",
        answerHtml: 'La précision dépend de vos récepteurs et de l\'environnement : sur smartphone en extérieur avec GPS, elle est typiquement de <strong>3 à 5 mètres</strong>. Sur ordinateur portable en Wi-Fi, de <strong>15 à 40 mètres</strong>. Sur réseau filaire Ethernet, le site bascule sur l\'IP régionale (précision de 10 à 50 km).'
      },
      {
        question: "Mes coordonnées sont-elles enregistrées ou suivies sur vos serveurs ?",
        answerHtml: '<strong>Non. Jamais.</strong> Tous les calculs, conversions et affichages cartographiques s\'effectuent à 100 % localement dans votre navigateur via l\'API W3C Geolocation. Aucune coordonnée n\'est stockée ou vendue. Lisez notre <a href="/privacy/">Politique de Confidentialité</a>.'
      },
      {
        question: "Pourquoi ma position affiche-t-elle une ville ou une région erronée ?",
        answerHtml: 'Si l\'écart est de 30 à 80 km, vous êtes probablement sur PC fixe géolocalisé via l\'adresse IP de votre FAI. De même, un VPN actif ou un routeur Wi-Fi déplacé faussent la position. Consultez notre <a href="/guides/wrong-location/">Guide de Résolution des Erreurs de Position</a>.'
      },
      {
        question: "Quelle est la différence entre coordonnées GPS et position IP ?",
        answerHtml: 'Le GPS calcule votre position physique à 3 mètres près grâce aux signaux radio de satellites en orbite. La géolocalisation IP consulte des bases de routage pour estimer le centre régional de votre fournisseur d\'accès. Voir notre <a href="/comparisons/gps-vs-ip-location/">Comparatif GPS vs. IP</a>.'
      },
      {
        question: "Comment convertir des coordonnées GPS en adresse postale ?",
        answerHtml: 'Utilisez nos outils gratuits de <a href="/tools/reverse-geocoding/">Géocodage Inverse</a> ou le <a href="/tools/address-finder/">Détecteur d\'Adresse</a>. Entrez votre latitude et longitude pour interroger la base mondiale OpenStreetMap.'
      },
      {
        question: "Puis-je connaître mon altitude par rapport au niveau de la mer ?",
        answerHtml: 'Oui ! Notre <a href="/tools/elevation-finder/">Calculateur d\'Altitude</a> mesure votre hauteur exacte en mètres et en pieds à partir de modèles topographiques satellitaires.'
      },
      {
        question: "Comment partager ma position en toute sécurité ?",
        answerHtml: 'Accédez à l\'outil <a href="/share-location/">Partager Ma Position</a>. Générez un lien direct confidentiel ou un <a href="/tools/location-qr-code/">QR Code de Position</a> compatible Google Maps, Apple Maps et OpenStreetMap.'
      },
      {
        question: 'Que faire si j\'ai cliqué sur "Bloquer" l\'accès à ma position ?',
        answerHtml: 'Cliquez sur l\'icône de cadenas à gauche de la barre d\'adresse de votre navigateur, modifiez l\'autorisation <strong>Position</strong> sur <strong>Autoriser</strong>, puis rechargez la page.'
      }
    ]
  },
  de: {
    metaTitle: "Standort & GPS FAQ — Häufige Fragen | MyLocationLab",
    metaDescription: "Antworten auf die wichtigsten Fragen zu Standortbestimmung, GPS-Genauigkeit, Datenschutz, falschen Ortsangaben und Koordinatenumrechnung.",
    breadcrumb: "Häufig Gestellte Fragen",
    titlePrefix: "Häufig Gestellte",
    titleHighlight: "Fragen (FAQ)",
    subtitle: "Alles, was Sie über Browser-Geolokalisierung, Satellitengenauigkeit, Koordinatensysteme und Datenschutz wissen müssen.",
    stillQuestionsTitle: "Haben Sie noch weitere Fragen?",
    stillQuestionsDesc: "Nutzen Sie unsere technischen Leitfäden oder kontaktieren Sie unser Geodaten-Team direkt.",
    browseGuidesBtn: "📚 Alle Ratgeber ansehen",
    glossaryBtn: "📖 Geodäsie-Glossar",
    contactBtn: "✉️ Support kontaktieren",
    faqs: [
      {
        question: "Was ist mein aktueller Standort und wie ermittle ich ihn?",
        answerHtml: 'Sie können Ihren Standort sofort feststellen: Besuchen Sie unsere Startseite <a href="/location/">Wo bin ich</a> und klicken Sie auf <strong>„Meinen Standort abrufen“</strong>. Ihr Browser greift auf GPS oder Wi-Fi zu, um Längen- und Breitengrad sowie Postadresse präzise anzuzeigen.'
      },
      {
        question: "Wie genau arbeitet diese Website bei der Positionsbestimmung?",
        answerHtml: 'Die Genauigkeit variiert je nach Sensor: Auf Smartphones im Freien mit aktivem GPS liegt sie bei <strong>3 bis 5 Metern</strong>. Auf Laptops über WLAN bei etwa <strong>15 bis 40 Metern</strong>. Bei kabelgebundenem Ethernet greift die Website auf regionale IP-Ortung zurück (10 bis 50 km Radius).'
      },
      {
        question: "Werden meine Standortdaten gespeichert oder getrackt?",
        answerHtml: '<strong>Nein. Niemals.</strong> Alle Berechnungen, Umrechnungen und Kartendarstellungen finden zu 100 % lokal in Ihrem Browser über die W3C Geolocation API statt. Es erfolgt keine Aufzeichnung oder Weitergabe. Lesen Sie unsere <a href="/privacy/">Datenschutzerklärung</a>.'
      },
      {
        question: "Warum wird eine falsche Stadt oder Region angezeigt?",
        answerHtml: 'Bei einer Abweichung von 30–80 km nutzen Sie vermutlich einen stationären PC ohne GPS, der über die IP des Internetproviders verortet wird. Auch aktive VPNs oder umgezogene WLAN-Router führen zu falschen Daten. Siehe unseren <a href="/guides/wrong-location/">Leitfaden zur Standortkorrektur</a>.'
      },
      {
        question: "Was unterscheidet GPS-Koordinaten von einer IP-Ortung?",
        answerHtml: 'GPS empfängt Funksignale von Satelliten in 20.200 km Höhe und berechnet den physischen Ort auf 3 Meter genau. IP-Geolokalisierung schätzt anhand von Datenbanken nur das Routing-Zentrum des Netzanbieters ab. Mehr Details im <a href="/comparisons/gps-vs-ip-location/">GPS vs. IP-Vergleich</a>.'
      },
      {
        question: "Wie wandle ich GPS-Koordinaten in eine Straßenadresse um?",
        answerHtml: 'Verwenden Sie unseren kostenlosen <a href="/tools/reverse-geocoding/">Reverse Geocoder</a> oder den <a href="/tools/address-finder/">Adress-Finder</a>. Nach Eingabe von Breitengrad und Längengrad liefert OpenStreetMap die passende Adresse.'
      },
      {
        question: "Kann ich meine Höhenmeter über dem Meeresspiegel abrufen?",
        answerHtml: 'Ja! Unser <a href="/tools/elevation-finder/">Höhen-Finder</a> ermittelt Ihre Geländehöhe über Normalnull in Metern und Fuß anhand satellitengestützter topografischer Höhenmodelle.'
      },
      {
        question: "Wie kann ich meinen Standort sicher mit anderen teilen?",
        answerHtml: 'Nutzen Sie unser Werkzeug <a href="/share-location/">Standort teilen</a>. Sie können einen privaten Einmalklick-Link oder einen scannbaren <a href="/tools/location-qr-code/">Standort-QR-Code</a> für Google Maps, Apple Maps und OSM erzeugen.'
      },
      {
        question: 'Was tun, wenn ich die Standortabfrage versehentlich blockiert habe?',
        answerHtml: 'Klicken Sie auf das Schloss-Symbol in der Adressleiste Ihres Browsers, suchen Sie die Berechtigung für <strong>Standort</strong>, ändern Sie diese auf <strong>Zulassen</strong> und laden Sie die Seite neu.'
      }
    ]
  },
  pt: {
    metaTitle: "FAQ sobre Localização e GPS — Todas as Respostas | MyLocationLab",
    metaDescription: "Respostas claras sobre como encontrar sua posição, precisão do GPS, privacidade de navegação, correção de cidade errada e conversões.",
    breadcrumb: "Perguntas Frequentes",
    titlePrefix: "Perguntas",
    titleHighlight: "Frequentes (FAQ)",
    subtitle: "Tudo o que você precisa entender sobre geolocalização no navegador, precisão de satélites GPS, sistemas de coordenadas e privacidade.",
    stillQuestionsTitle: "Ainda tem dúvidas?",
    stillQuestionsDesc: "Explore nossos manuais técnicos ou entre em contato com nossa equipe de engenharia geoespacial.",
    browseGuidesBtn: "📚 Todos os Guias",
    glossaryBtn: "📖 Glossário de Geodésia",
    contactBtn: "✉️ Falar com Suporte",
    faqs: [
      {
        question: "Qual é a minha localização atual e como descobri-la?",
        answerHtml: 'Descubra sua localização imediatamente acessando nossa página <a href="/location/">Onde Estou</a> e clicando em <strong>"Obter Minha Localização"</strong>. Seu navegador consultará os sensores GPS ou redes Wi-Fi para exibir latitude, longitude, endereço, cidade e país.'
      },
      {
        question: "Qual a precisão deste site ao determinar minha posição?",
        answerHtml: 'A precisão varia conforme o dispositivo: em celulares ao ar livre com GPS ligado, a precisão típica é de <strong>3 a 5 metros</strong>. Em computadores portáteis via Wi-Fi, entre <strong>15 e 40 metros</strong>. Em conexões de cabo Ethernet, utiliza-se a geolocalização por IP (precisão regional de 5 a 50 km).'
      },
      {
        question: "Minhas coordenadas são rastreadas ou salvas nos seus servidores?",
        answerHtml: '<strong>Não. Nunca.</strong> Todos os cálculos de posicionamento, conversão e desenho de mapas são executados 100% no navegador via API W3C Geolocation. Não registramos e nem vendemos seus dados. Veja nossa <a href="/privacy/">Política de Privacidade</a>.'
      },
      {
        question: "Por que minha localização mostra uma cidade ou estado errado?",
        answerHtml: 'Se a diferença for de 30 a 80 km, você provavelmente está em um computador de mesa usando o IP do provedor. O uso de VPN ou a mudança recente de um roteador Wi-Fi também causam esse efeito. Leia nosso <a href="/guides/wrong-location/">Guia para Corrigir Localizações Erradas</a>.'
      },
      {
        question: "Qual é a diferença entre coordenadas GPS e localização por IP?",
        answerHtml: 'O GPS recebe sinais de satélites a 20.200 km de altitude para calcular seu ponto físico real com margem de 3 metros. A localização por IP consulta tabelas do provedor de internet para aproximar a cidade. Saiba mais em nossa <a href="/comparisons/gps-vs-ip-location/">Comparação GPS vs. IP</a>.'
      },
      {
        question: "Como converter coordenadas GPS em endereço com nome de rua?",
        answerHtml: 'Use as ferramentas gratuitas de <a href="/tools/reverse-geocoding/">Geocodificação Reversa</a> ou o <a href="/tools/address-finder/">Localizador de Endereço</a>. Digite sua latitude e longitude para consultar a base OpenStreetMap.'
      },
      {
        question: "Posso descobrir minha altitude em relação ao nível do mar?",
        answerHtml: 'Sim! Nosso <a href="/tools/elevation-finder/">Medidor de Altitude</a> calcula sua elevação exata em metros e pés usando modelos topográficos orbitais.'
      },
      {
        question: "Como compartilhar minha posição com outra pessoa com segurança?",
        answerHtml: 'Visite nossa ferramenta <a href="/share-location/">Compartilhar Localização</a>. Você pode gerar um link direto privativo ou um <a href="/tools/location-qr-code/">QR Code de Localização</a> para abrir no Google Maps, Apple Maps e OSM.'
      },
      {
        question: 'O que fazer se cliquei em "Bloquear" na permissão de localização?',
        answerHtml: 'Clique no ícone de cadeado junto à barra de endereços do seu navegador, encontre o item <strong>Localização</strong>, selecione <strong>Permitir</strong> e recarregue a página.'
      }
    ]
  },
  hi: {
    metaTitle: "लोकेशन और GPS FAQ — सभी उत्तर | MyLocationLab",
    metaDescription: "अपना स्थान खोजने, GPS सटीकता, ब्राउज़र गोपनीयता, गलत शहर दिखने और निर्देशांक रूपांतरण के सामान्य प्रश्नों के उत्तर यहां पाएं — विशेषज्ञों द्वारा लिखित।",
    breadcrumb: "अक्सर पूछे जाने वाले प्रश्न",
    titlePrefix: "अक्सर पूछे",
    titleHighlight: "जाने वाले प्रश्न (FAQ)",
    subtitle: "ब्राउज़र जियोलोकेशन, सैटेलाइट GPS सटीकता, निर्देशांक प्रणालियों और डेटा गोपनीयता के बारे में वह सब जो आपको जानना चाहिए।",
    stillQuestionsTitle: "अभी भी कोई प्रश्न है?",
    stillQuestionsDesc: "हमारे तकनीकी गाइड देखें या हमारी भू-स्थानिक इंजीनियरिंग टीम से सीधे संपर्क करें।",
    browseGuidesBtn: "📚 सभी गाइड देखें",
    glossaryBtn: "📖 जियोडेसी शब्दावली",
    contactBtn: "✉️ सहायता से संपर्क करें",
    faqs: [
      {
        question: "मेरी वर्तमान लोकेशन क्या है और मैं उसे कैसे पता करूं?",
        answerHtml: '<a href="/location/">मैं कहां हूं</a> होमपेज पर जाकर <strong>"मेरी लोकेशन प्राप्त करें"</strong> पर क्लिक करके आप तुरंत अपनी वर्तमान लोकेशन पा सकते हैं। आपका ब्राउज़र आपके डिवाइस के GPS या वाई-फाई पोज़िशनिंग हार्डवेयर तक पहुंचकर आपका सटीक अक्षांश, देशांतर, सड़क का पता, शहर, राज्य और देश दिखाएगा।'
      },
      {
        question: "मेरी स्थिति बताने में यह वेबसाइट कितनी सटीक है?",
        answerHtml: 'सटीकता आपके हार्डवेयर और वातावरण पर निर्भर करती है: GPS सक्षम स्मार्टफोन पर बाहर सटीकता आमतौर पर <strong>3 से 5 मीटर</strong> के भीतर होती है। वाई-फाई से जुड़े लैपटॉप या डेस्कटॉप पर आमतौर पर <strong>15 से 40 मीटर</strong> के भीतर। वायर्ड ईथरनेट कनेक्शन पर सटीकता क्षेत्रीय IP जियोलोकेशन (10 से 50 किलोमीटर) तक आ जाती है।'
      },
      {
        question: "क्या मेरा लोकेशन डेटा ट्रैक, रिकॉर्ड या आपके सर्वर पर स्टोर किया जाता है?",
        answerHtml: '<strong>नहीं। कभी नहीं।</strong> सभी जियोलोकेशन गणनाएं, निर्देशांक रूपांतरण और नक्शा रेंडरिंग मानक W3C Geolocation API का उपयोग करके 100% आपके ब्राउज़र क्लाइंट के भीतर स्थानीय रूप से निष्पादित होती हैं। हम आपके निर्देशांक स्टोर, लॉग, ट्रैक या बेच नहीं करते। हमारी पूरी <a href="/privacy/">गोपनीयता नीति</a> पढ़ें।'
      },
      {
        question: "मेरी लोकेशन गलत शहर या राज्य क्यों दिखाती है?",
        answerHtml: 'यदि आपकी लोकेशन 30–80 किलोमीटर तक गलत है, तो संभवतः आप डेस्कटॉप कंप्यूटर पर हैं जो GPS के बजाय आपके इंटरनेट सेवा प्रदाता का IP पता उपयोग कर रहा है। इसके अलावा, सक्रिय VPN या हाल में दूसरे पते से हटाया गया वाई-फाई राउटर भी आपके नेटवर्क राउटिंग टेबल को VPN या पुराने पते की ओर इशारा कर सकते हैं। हमारी विस्तृत <a href="/guides/wrong-location/">गलत लोकेशन ठीक करने की गाइड</a> पढ़ें।'
      },
      {
        question: "GPS निर्देशांक और IP लोकेशन में क्या अंतर है?",
        answerHtml: 'GPS पृथ्वी से 20,200 किलोमीटर ऊपर कक्षा में स्थित सैटेलाइट के रीयल-टाइम रेडियो सिग्नल से आपकी सटीक भौतिक स्थिति 3 मीटर तक गणना करता है। IP जियोलोकेशन वाणिज्यिक राउटिंग डेटाबेस में आपके सार्वजनिक इंटरनेट पते को देखकर अनुमान लगाती है कि आपका ISP किस शहर या क्षेत्र में है। हमारी <a href="/comparisons/gps-vs-ip-location/">GPS बनाम IP लोकेशन तुलना</a> में और जानें।'
      },
      {
        question: "मैं GPS निर्देशांकों को सड़क के पते में कैसे बदलूं?",
        answerHtml: 'आप हमारा मुफ़्त <a href="/tools/reverse-geocoding/">रिवर्स जियोकोडर</a> या <a href="/tools/address-finder/">पता खोजें</a> टूल उपयोग कर सकते हैं। अपना अक्षांश और देशांतर दर्ज करें, और हमारा सिस्टम OpenStreetMap के वैश्विक पता इंडेक्स से पूछकर निकटतम सड़क का नाम, मकान नंबर, पिन कोड और नगर पालिका बताता है।'
      },
      {
        question: "क्या मैं समुद्र तल से अपनी ऊंचाई और एलिवेशन जान सकता हूं?",
        answerHtml: 'हां! हमारा <a href="/tools/elevation-finder/">ऊंचाई फाइंडर</a> सैटेलाइट टोपोग्राफिक मॉडल और डिवाइस के बैरोमीट्रिक सेंसर का उपयोग करके आपकी औसत समुद्र तल से ऊंचाई मीटर और फीट में मापता है।'
      },
      {
        question: "मैं अपनी लोकेशन किसी और के साथ सुरक्षित रूप से कैसे साझा करूं?",
        answerHtml: 'हमारा <a href="/share-location/">लोकेशन साझा टूल</a> देखें। आप एक प्राइवेट, एक-क्लिक लिंक या स्कैन करने योग्य <a href="/tools/location-qr-code/">लोकेशन QR कोड</a> बना सकते हैं जो Google Maps, Apple Maps या OpenStreetMap में आपकी सटीक स्थिति खोलता है।'
      },
      {
        question: 'अगर मैंने लोकेशन प्रॉम्प्ट पर गलती से "ब्लॉक" दबा दिया तो क्या करूं?',
        answerHtml: 'अपने ब्राउज़र के URL एड्रेस बार में लॉक या सेटिंग्स आइकन पर क्लिक करें, <strong>लोकेशन</strong> खोजें, अनुमति को <strong>अनुमति दें</strong> में बदलें और वेबपेज रीलोड करें।'
      }
    ]
  },
  id: {
    metaTitle: "FAQ Lokasi & GPS — Semua Jawaban | MyLocationLab",
    metaDescription: "Jawaban atas pertanyaan umum tentang menemukan lokasi Anda, akurasi GPS, privasi peramban, perbaikan kota yang salah, dan konversi koordinat.",
    breadcrumb: "Pertanyaan yang Sering Diajukan",
    titlePrefix: "Pertanyaan",
    titleHighlight: "Sering Diajukan (FAQ)",
    subtitle: "Semua yang perlu Anda ketahui tentang geolokasi peramban, akurasi GPS satelit, sistem koordinat, dan privasi data.",
    stillQuestionsTitle: "Masih Ada Pertanyaan?",
    stillQuestionsDesc: "Jelajahi panduan teknis kami atau hubungi tim rekayasa geospasial kami secara langsung.",
    browseGuidesBtn: "📚 Lihat Semua Panduan",
    glossaryBtn: "📖 Glosarium Geodesi",
    contactBtn: "✉️ Hubungi Dukungan",
    faqs: [
      {
        question: "Apa lokasi saya saat ini dan bagaimana cara menemukannya?",
        answerHtml: 'Anda dapat menemukan lokasi Anda saat ini segera dengan mengunjungi beranda <a href="/location/">Di Mana Saya</a> dan mengeklik <strong>"Dapatkan Lokasi Saya"</strong>. Peramban Anda akan mengakses GPS atau perangkat keras posisi Wi-Fi perangkat Anda untuk menampilkan lintang, bujur, alamat jalan, kota, provinsi, dan negara Anda yang persis.'
      },
      {
        question: "Seberapa akurat situs web ini dalam menentukan posisi saya?",
        answerHtml: 'Akurasi bergantung pada perangkat keras dan lingkungan Anda: pada ponsel pintar dengan GPS aktif di luar ruangan, akurasinya biasanya dalam <strong>3 hingga 5 meter</strong>. Pada laptop atau desktop yang terhubung ke Wi-Fi, biasanya dalam <strong>15 hingga 40 meter</strong>. Pada koneksi ethernet berkabel, akurasi beralih ke geolokasi IP regional (rentang 10 hingga 50 kilometer).'
      },
      {
        question: "Apakah data lokasi saya dilacak, dicatat, atau disimpan di server Anda?",
        answerHtml: '<strong>Tidak. Tidak pernah.</strong> Semua perhitungan geolokasi, konversi koordinat, dan rendering peta dijalankan 100% secara lokal di dalam peramban Anda menggunakan W3C Geolocation API standar. Kami tidak menyimpan, mencatat, melacak, atau menjual koordinat Anda. Baca <a href="/privacy/">Kebijakan Privasi</a> kami selengkapnya.'
      },
      {
        question: "Mengapa lokasi saya menampilkan kota atau provinsi yang salah?",
        answerHtml: 'Jika lokasi Anda meleset 30–80 kilometer, kemungkinan Anda menggunakan komputer desktop yang memakai alamat IP penyedia layanan internet Anda, bukan GPS. Selain itu, VPN aktif atau router Wi-Fi yang baru dipindah dari alamat lain juga dapat membuat tabel routing jaringan Anda menampilkan lokasi VPN atau alamat lama. Baca <a href="/guides/wrong-location/">Panduan Memperbaiki Lokasi yang Salah</a> kami.'
      },
      {
        question: "Apa perbedaan antara koordinat GPS dan lokasi IP?",
        answerHtml: 'GPS menggunakan sinyal radio real-time dari satelit yang mengorbit 20.200 km di atas Bumi untuk menghitung posisi fisik Anda yang persis hingga 3 meter. Geolokasi IP mencari alamat internet publik Anda dalam basis data routing komersial untuk memperkirakan kota atau wilayah operasi ISP Anda. Pelajari lebih lanjut di <a href="/comparisons/gps-vs-ip-location/">Perbandingan GPS vs. Lokasi IP</a> kami.'
      },
      {
        question: "Bagaimana cara mengubah koordinat GPS menjadi alamat jalan?",
        answerHtml: 'Gunakan <a href="/tools/reverse-geocoding/">Reverse Geocoder</a> atau alat <a href="/tools/address-finder/">Pencari Alamat</a> gratis kami. Masukkan lintang dan bujur Anda, dan sistem kami akan menanyakan indeks alamat global OpenStreetMap untuk mengembalikan nama jalan, nomor rumah, kode pos, dan wilayah administratif terdekat.'
      },
      {
        question: "Bisakah saya mengetahui elevasi dan ketinggian saya di atas permukaan laut?",
        answerHtml: 'Ya! <a href="/tools/elevation-finder/">Pencari Elevasi</a> kami mengukur ketinggian Anda di atas permukaan laut rata-rata dalam meter dan kaki menggunakan model topografi satelit dan sensor barometrik perangkat.'
      },
      {
        question: "Bagaimana cara berbagi lokasi saya dengan orang lain secara aman?",
        answerHtml: 'Kunjungi <a href="/share-location/">Alat Bagikan Lokasi</a> kami. Anda dapat membuat tautan privat sekali klik atau <a href="/tools/location-qr-code/">Kode QR Lokasi</a> yang dapat dipindai, yang membuka posisi persis Anda di Google Maps, Apple Maps, atau OpenStreetMap.'
      },
      {
        question: 'Apa yang harus saya lakukan jika tidak sengaja mengeklik "Blokir" pada permintaan izin lokasi?',
        answerHtml: 'Klik ikon gembok atau pengaturan di bilah alamat peramban Anda, cari <strong>Lokasi</strong>, ubah izinnya menjadi <strong>Diizinkan</strong>, lalu muat ulang halaman web.'
      }
    ]
  }
};
