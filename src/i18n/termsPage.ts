export interface TermsPageContent {
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  titlePrefix: string;
  titleHighlight: string;
  effectiveDate: string;
  h2Acceptance: string;
  pAcceptance: string;
  h2Emergency: string;
  pEmergencyAlert: string;
  h2Informational: string;
  pInformational: string;
  h2Acceptable: string;
  pAcceptable: string;
  a1: string;
  a2: string;
  a3: string;
  h2Attribution: string;
  pAttribution: string;
  h2Liability: string;
  pLiability: string;
  h2Law: string;
  pLaw: string;
}

export const termsPageTranslations: Record<string, TermsPageContent> = {
  en: {
    metaTitle: "Terms of Use & Disclaimers | MyLocationLab",
    metaDescription: "Review the terms and conditions for using MyLocationLab geospatial tools, calculators, coordinate converters, and educational guides.",
    breadcrumb: "Terms of Use",
    titlePrefix: "Terms of",
    titleHighlight: "Use",
    effectiveDate: "Effective Date: September 15, 2026. Please review these terms carefully before utilizing our tools.",
    h2Acceptance: "1. Acceptance of Terms",
    pAcceptance: "By accessing and utilizing MyLocationLab, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this website.",
    h2Emergency: "2. Emergency Services Disclaimer (Crucial Notice)",
    pEmergencyAlert: "NOT FOR EMERGENCY OR SAFETY-OF-LIFE USE: MyLocationLab is an informational web utility. It is not an authorized emergency dispatch system, maritime navigation aid, or certified aviation instrument. In any life-threatening emergency, call emergency services (911 / 112 / 999) directly using a telephone carrier.",
    h2Informational: "3. Informational & Utility Use Only",
    pInformational: "All calculations, coordinate transformations, distance measurements, elevation lookups, and reverse geocoding results are provided for general informational, educational, and personal utility purposes. While we strive for extreme mathematical precision using WGS 84 models and reputable GIS datasets, we make no guarantees regarding uninterrupted availability or 100% real-world accuracy.",
    h2Acceptable: "4. Acceptable Use Policy",
    pAcceptable: "You agree not to:",
    a1: "Deploy automated scrapers, bots, or crawling scripts that abuse or degrade server performance.",
    a2: "Attempt to reverse-engineer, decompile, or tamper with the underlying client scripts.",
    a3: "Use our tools for stalking, unauthorized surveillance, or harassment of any individual.",
    h2Attribution: "5. Open Source Data & Attribution",
    pAttribution: "Map data and reverse geocoding data are provided by OpenStreetMap contributors under the Open Database License (ODbL). Cartographic styling, UI component code, and original editorial guides are copyright © 2026 MyLocationLab.",
    h2Liability: "6. Limitation of Liability",
    pLiability: "Under no circumstances shall MyLocationLab, its operators, or technical contributors be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this service, or from reliance on any coordinate data obtained through our tools.",
    h2Law: "7. Governing Law",
    pLaw: "These terms and conditions are governed by and construed in accordance with applicable internet regulatory frameworks, without regard to conflict of law principles."
  },
  es: {
    metaTitle: "Términos de Uso y Descargos de Responsabilidad | MyLocationLab",
    metaDescription: "Consulte los términos de uso de las herramientas geoespaciales, conversores de coordenadas y guías técnicas de MyLocationLab.",
    breadcrumb: "Términos de Uso",
    titlePrefix: "Términos de",
    titleHighlight: "Uso",
    effectiveDate: "Fecha de vigencia: 15 de septiembre de 2026. Revise atentamente estos términos antes de utilizar nuestras herramientas.",
    h2Acceptance: "1. Aceptación de los Términos",
    pAcceptance: "Al acceder y hacer uso de MyLocationLab, acepta someterse a estos Términos de Uso y a todas las leyes y regulaciones aplicables. Si no está de acuerdo con alguno de ellos, debe abstenerse de utilizar el sitio.",
    h2Emergency: "2. Aviso Crucial: No Apto para Situaciones de Emergencia",
    pEmergencyAlert: "NO APTO PARA EMERGENCIAS O SEGURIDAD DE LA VIDA: MyLocationLab es una utilidad web de carácter puramente informativo. No constituye un sistema de despacho de emergencias, ayuda de navegación marítima ni instrumento aeronáutico. Ante cualquier riesgo vital, contacte con el 112 (Europa) o 911 (América) por teléfono celular.",
    h2Informational: "3. Uso Informativo y Personal",
    pInformational: "Todas las transformaciones de coordenadas, mediciones métricas, consultas de altitud y geocodificaciones se ofrecen con fines didácticos y de uso personal. Aunque aplicamos modelos WGS 84 de alta fidelidad, no garantizamos disponibilidad ininterrumpida ni precisión absoluta sobre el terreno.",
    h2Acceptable: "4. Política de Uso Aceptable",
    pAcceptable: "El usuario se compromete a no:",
    a1: "Lanzar scrapers, rastreadores masivos o scripts automatizados que perjudiquen el rendimiento de los servidores.",
    a2: "Intentar descompilar, manipular o realizar ingeniería inversa sobre los scripts cliente de la aplicación.",
    a3: "Utilizar las herramientas con fines de vigilancia no autorizada, acoso o rastreo ilícito de terceros.",
    h2Attribution: "5. Fuentes Abiertas y Propiedad Intelectual",
    pAttribution: "Los datos de mapas y geocodificación son aportados por la comunidad de OpenStreetMap bajo licencia ODbL. El diseño visual, código fuente y guías editoriales son copyright © 2026 MyLocationLab.",
    h2Liability: "6. Limitación de Responsabilidad",
    pLiability: "En ningún caso MyLocationLab o sus administradores serán responsables por daños directos, indirectos o consecuentes derivados del uso o imposibilidad de uso de esta plataforma.",
    h2Law: "7. Ley Aplicable",
    pLaw: "Estos términos se rigen e interpretan de conformidad con el marco regulatorio digital aplicable, sin consideración a conflictos normativos."
  },
  fr: {
    metaTitle: "Conditions d'Utilisation & Mentions Légales | MyLocationLab",
    metaDescription: "Consultez les conditions d'utilisation des outils cartographiques, convertisseurs de coordonnées et tutoriels de MyLocationLab.",
    breadcrumb: "Conditions d'Utilisation",
    titlePrefix: "Conditions",
    titleHighlight: "d'Utilisation",
    effectiveDate: "Date d'application : 15 septembre 2026. Veuillez lire attentivement ces conditions avant utilisation.",
    h2Acceptance: "1. Acceptation des Conditions",
    pAcceptance: "L'accès et l'utilisation de MyLocationLab impliquent l'acceptation sans réserve des présentes conditions générales ainsi que des lois applicables. En cas de désaccord, vous devez renoncer à utiliser le service.",
    h2Emergency: "2. Avertissement Majeur : Exclusion d'Usage d'Urgence",
    pEmergencyAlert: "NON DESTINÉ AUX SERVICES DE SECOURS OU DE SAUVEGARDE : MyLocationLab est un outil web purement informatif. Il ne remplace en aucun cas un dispositif d'appel d'urgence, de navigation maritime certifiée ou d'instrumentation aéronautique. En cas de péril vital, contactez directement le 112 ou vos services de secours téléphoniques.",
    h2Informational: "3. Usage Informatif & Pratique Uniquement",
    pInformational: "Toutes les conversions de coordonnées, mesures de distances et recherches d'adresses sont fournies à titre indicatif et personnel. Malgré l'application rigoureuse du standard WGS 84, aucune garantie d'infaillibilité sur le terrain n'est consentie.",
    h2Acceptable: "4. Règles d'Usage Acceptable",
    pAcceptable: "Il est strictement interdit de :",
    a1: "Déployer des robots ou scripts d'aspiration automatisée dégradant les performances de l'infrastructure.",
    a2: "Tenter d'altérer, de décompiler ou de contourner les scripts applicatifs clients.",
    a3: "Employer les utilitaires à des fins de surveillance illégale, de traque ou de harcèlement de tiers.",
    h2Attribution: "5. Données Cartographiques Ouvertes & Crédits",
    pAttribution: "Les données de cartographie et de géocodage sont issues du projet collaboratif OpenStreetMap sous licence Open Database License (ODbL). L'interface utilisateur et les guides originaux sont copyright © 2026 MyLocationLab.",
    h2Liability: "6. Limitation de Responsabilité",
    pLiability: "MyLocationLab et son équipe technique ne sauraient être tenus responsables d'aucun préjudice direct ou indirect résultant de l'utilisation ou de l'interprétation des données de coordonnées obtenues.",
    h2Law: "7. Droit Applicable",
    pLaw: "Les présentes conditions sont soumises et régies conformément aux réglementations applicables aux services de communication en ligne."
  },
  de: {
    metaTitle: "Nutzungsbedingungen & Haftungsausschluss | MyLocationLab",
    metaDescription: "Rechtliche Bedingungen für die Nutzung der Geotools, Koordinatenumrechner und Fachartikel von MyLocationLab.",
    breadcrumb: "Nutzungsbedingungen",
    titlePrefix: "Nutzungs",
    titleHighlight: "Bedingungen",
    effectiveDate: "Gültig ab: 15. September 2026. Bitte lesen Sie diese Bedingungen vor der Nutzung sorgfältig durch.",
    h2Acceptance: "1. Geltung der Nutzungsbedingungen",
    pAcceptance: "Durch den Zugriff auf MyLocationLab erklären Sie sich mit diesen Bedingungen sowie den geltenden Gesetzen einverstanden. Wenn Sie nicht einverstanden sind, ist die Nutzung dieser Plattform untersagt.",
    h2Emergency: "2. Wichtiger Hinweis: Kein Notrufsystem",
    pEmergencyAlert: "NICHT ZUR LEBENSRETTUNG ODER FÜR NOTFÄLLE BESTIMMT: MyLocationLab ist ein informatives Webtool. Es handelt sich um keine zertifizierte Navigationshilfe für Luft- oder Seefahrt. Bei Notfällen kontaktieren Sie bitte immer die 112 (Europa) oder 911 (USA) per Telefon.",
    h2Informational: "3. Rein informative Nutzung",
    pInformational: "Alle Berechnungen, Umrechnungen, Höhenabfragen und Adressauflösungen dienen ausschließlich privaten und Bildungszwecken. Trotz Anwendung genauer WGS-84-Modelle kann keine Gewähr für ununterbrochene Verfügbarkeit oder absolute Fehlerfreiheit übernommen werden.",
    h2Acceptable: "4. Zulässige Nutzung",
    pAcceptable: "Es ist untersagt:",
    a1: "Automatisierte Scraper oder Bots einzusetzen, die die Serverinfrastruktur überlasten.",
    a2: "Die clientseitigen Skripte zu manipulieren oder zu dekompilieren.",
    a3: "Die Werkzeuge für Stalking oder unberechtigtes Personen-Tracking zu missbrauchen.",
    h2Attribution: "5. Open-Source-Quellen & Urheberrecht",
    pAttribution: "Kartendaten und Geokodierungsdienste stammen von OpenStreetMap unter ODbL-Lizenz. Das UI-Design und die redaktionellen Inhalte unterliegen dem Copyright © 2026 MyLocationLab.",
    h2Liability: "6. Haftungsbeschränkung",
    pLiability: "MyLocationLab schließt jegliche Haftung für unmittelbare oder mittelbare Schäden aus, die aus der Nutzung der Plattform oder dem Vertrauen auf angezeigte Geodaten entstehen.",
    h2Law: "7. Anwendbares Recht",
    pLaw: "Es gilt das maßgebliche Recht für Telemediendienste unter Ausschluss von Kollisionsnormen."
  },
  pt: {
    metaTitle: "Termos de Uso e Isenção de Responsabilidade | MyLocationLab",
    metaDescription: "Conheça os termos de uso das ferramentas cartográficas, calculadoras geodésicas e conteúdos informativos do MyLocationLab.",
    breadcrumb: "Termos de Uso",
    titlePrefix: "Termos de",
    titleHighlight: "Uso",
    effectiveDate: "Vigência: 15 de setembro de 2026. Leia atentamente antes de utilizar nossas ferramentas.",
    h2Acceptance: "1. Aceitação dos Termos",
    pAcceptance: "Ao navegar e utilizar o MyLocationLab, você concorda em cumprir estes Termos de Uso e as leis aplicáveis. Se discordar de qualquer condição, não utilize esta página.",
    h2Emergency: "2. Aviso Crítico: Não Adequado para Emergências",
    pEmergencyAlert: "NÃO DESTINADO A SITUAÇÕES DE EMERGÊNCIA OU SALVAMENTO: O MyLocationLab é um recurso puramente informativo. Não atua como central de socorro, balizamento marítimo ou instrumento aeronáutico. Em casos de urgência com risco à vida, ligue para 190 / 192 / 193 (Brasil) ou 112 (Europa) diretamente via telefone celular.",
    h2Informational: "3. Finalidade Informativa e Pessoal",
    pInformational: "Todos os cálculos espaciais, medições e transformações de coordenadas destinam-se ao uso educativo e prático pessoal. Embora utilizemos modelos WGS 84 de referência, não garantimos precisão absoluta e contínua em campo.",
    h2Acceptable: "4. Política de Uso Adequado",
    pAcceptable: "É proibido:",
    a1: "Disparar robôs, scrapers ou rotinas massivas que prejudiquem a estabilidade dos servidores.",
    a2: "Descompilar, adulterar ou tentar violar os scripts da plataforma.",
    a3: "Utilizar qualquer ferramenta para rastrear, vigiar ou perseguir pessoas sem consentimento legal.",
    h2Attribution: "5. Dados Abertos e Direitos Autorais",
    pAttribution: "Os mapas e consultas de endereços são fornecidos pela comunidade OpenStreetMap sob licença ODbL. O código de interface e os guias técnicos são copyright © 2026 MyLocationLab.",
    h2Liability: "6. Limitação de Responsabilidade",
    pLiability: "Em nenhuma circunstância o MyLocationLab será responsabilizado por danos diretos ou indiretos resultantes do uso ou da impossibilidade de uso das informações geradas.",
    h2Law: "7. Legislação Aplicável",
    pLaw: "Estes termos são interpretados segundo as normas vigentes aplicáveis a serviços online."
  },
  hi: {
    metaTitle: "उपयोग की शर्तें और अस्वीकरण | MyLocationLab",
    metaDescription: "MyLocationLab के भू-स्थानिक टूल्स, कैलकुलेटर, निर्देशांक कनवर्टर और शैक्षिक गाइडों के उपयोग की शर्तें और नियम यहां पढ़ें। उपयोग से पहले कृपया इन्हें ध्यान से देखें।",
    breadcrumb: "उपयोग की शर्तें",
    titlePrefix: "उपयोग की",
    titleHighlight: "शर्तें",
    effectiveDate: "प्रभावी तिथि: 15 सितंबर 2026। हमारे टूल्स का उपयोग करने से पहले कृपया इन शर्तों को ध्यान से पढ़ें।",
    h2Acceptance: "1. शर्तों की स्वीकृति",
    pAcceptance: "MyLocationLab तक पहुंचकर और इसका उपयोग करके, आप इन उपयोग की शर्तों तथा सभी लागू कानूनों और नियमों का पालन करने के लिए सहमत होते हैं। यदि आप इनमें से किसी भी शर्त से असहमत हैं, तो इस वेबसाइट का उपयोग करना आपके लिए वर्जित है।",
    h2Emergency: "2. आपातकालीन सेवा अस्वीकरण (महत्वपूर्ण सूचना)",
    pEmergencyAlert: "आपातकाल या जीवन-रक्षा के उपयोग के लिए नहीं: MyLocationLab एक सूचनात्मक वेब यूटिलिटी है। यह कोई अधिकृत आपातकालीन डिस्पैच सिस्टम, समुद्री नेविगेशन सहायक या प्रमाणित एविएशन उपकरण नहीं है। किसी भी जानलेवा आपात स्थिति में टेलीफोन कैरियर से सीधे आपातकालीन सेवाओं (112 / 911 / 108) को कॉल करें।",
    h2Informational: "3. केवल सूचनात्मक और उपयोगिता उद्देश्य",
    pInformational: "सभी गणनाएं, निर्देशांक रूपांतरण, दूरी माप, ऊँचाई जानकारी और रिवर्स जियोकोडिंग परिणाम सामान्य सूचना, शिक्षा और व्यक्तिगत उपयोगिता के उद्देश्यों के लिए दिए गए हैं। हम WGS 84 मॉडल और विश्वसनीय GIS डेटासेट के साथ अधिकतम गणितीय सटीकता का प्रयास करते हैं, फिर भी निर्बाध उपलब्धता या 100% वास्तविक सटीकता की कोई गारंटी नहीं देते।",
    h2Acceptable: "4. स्वीकार्य उपयोग नीति",
    pAcceptable: "आप सहमत होते हैं कि आप यह नहीं करेंगे:",
    a1: "सर्वर के प्रदर्शन को नुकसान पहुंचाने या खराब करने वाले स्वचालित स्क्रैपर, बॉट या क्रॉलिंग स्क्रिप्ट तैनात करना।",
    a2: "अंतर्निहित क्लाइंट स्क्रिप्ट को रिवर्स-इंजीनियर, डिकंपाइल या छेड़छाड़ करने का प्रयास करना।",
    a3: "किसी व्यक्ति का पीछा करने, अनधिकृत निगरानी या उत्पीड़न के लिए हमारे टूल्स का उपयोग करना।",
    h2Attribution: "5. ओपन सोर्स डेटा और एट्रिब्यूशन",
    pAttribution: "नक्शा डेटा और रिवर्स जियोकोडिंग डेटा OpenStreetMap योगदानकर्ताओं द्वारा Open Database License (ODbL) के अंतर्गत उपलब्ध कराया गया है। कार्टोग्राफिक स्टाइलिंग, UI कंपोनेंट कोड और मौलिक संपादकीय गाइड © 2026 MyLocationLab के कॉपीराइट हैं।",
    h2Liability: "6. दायित्व की सीमा",
    pLiability: "किसी भी परिस्थिति में MyLocationLab, इसके संचालक या तकनीकी योगदानकर्ता इस सेवा के उपयोग या उपयोग में असमर्थता से, या हमारे टूल्स से प्राप्त किसी निर्देशांक डेटा पर निर्भर होने से उत्पन्न किसी प्रत्यक्ष, अप्रत्यक्ष, आकस्मिक या परिणामी क्षति के लिए उत्तरदायी नहीं होंगे।",
    h2Law: "7. लागू कानून",
    pLaw: "ये शर्तें और नियम कानून के टकराव के सिद्धांतों की परवाह किए बिना, लागू इंटरनेट नियामक ढांचे के अनुसार शासित और व्याख्यायित होंगे।"
  },
  id: {
    metaTitle: "Ketentuan Penggunaan & Penafian | MyLocationLab",
    metaDescription: "Tinjau syarat dan ketentuan penggunaan alat geospasial, kalkulator, konverter koordinat, serta panduan edukatif dari MyLocationLab sebelum mulai menggunakannya.",
    breadcrumb: "Ketentuan Penggunaan",
    titlePrefix: "Ketentuan",
    titleHighlight: "Penggunaan",
    effectiveDate: "Tanggal Berlaku: 15 September 2026. Mohon baca ketentuan ini dengan saksama sebelum menggunakan alat kami.",
    h2Acceptance: "1. Penerimaan Ketentuan",
    pAcceptance: "Dengan mengakses dan memanfaatkan MyLocationLab, Anda setuju untuk terikat oleh Ketentuan Penggunaan ini serta semua hukum dan peraturan yang berlaku. Jika Anda tidak menyetujui salah satu ketentuan ini, Anda dilarang menggunakan situs web ini.",
    h2Emergency: "2. Penafian Layanan Darurat (Pemberitahuan Penting)",
    pEmergencyAlert: "TIDAK UNTUK KEADAAN DARURAT ATAU KESELAMATAN JIWA: MyLocationLab adalah utilitas web yang bersifat informatif. Ini bukan sistem panggilan darurat resmi, alat bantu navigasi maritim, maupun instrumen penerbangan tersertifikasi. Dalam keadaan darurat yang mengancam nyawa, hubungi layanan darurat (112 / 911 / 110) langsung melalui operator telepon.",
    h2Informational: "3. Hanya untuk Tujuan Informasi dan Utilitas",
    pInformational: "Semua perhitungan, transformasi koordinat, pengukuran jarak, pencarian elevasi, dan hasil reverse geocoding disediakan untuk tujuan informasi umum, pendidikan, dan utilitas pribadi. Meskipun kami mengupayakan presisi matematis tinggi dengan model WGS 84 dan kumpulan data GIS terpercaya, kami tidak menjamin ketersediaan tanpa gangguan atau akurasi 100% di lapangan.",
    h2Acceptable: "4. Kebijakan Penggunaan yang Dapat Diterima",
    pAcceptable: "Anda setuju untuk tidak:",
    a1: "Menyebarkan scraper otomatis, bot, atau skrip perayapan yang menyalahgunakan atau menurunkan kinerja server.",
    a2: "Mencoba membongkar, mendekompilasi, atau mengutak-atik skrip klien yang mendasarinya.",
    a3: "Menggunakan alat kami untuk menguntit, pengawasan tanpa izin, atau pelecehan terhadap individu mana pun.",
    h2Attribution: "5. Data Sumber Terbuka & Atribusi",
    pAttribution: "Data peta dan data reverse geocoding disediakan oleh kontributor OpenStreetMap di bawah Open Database License (ODbL). Gaya kartografi, kode komponen UI, dan panduan editorial orisinal adalah hak cipta © 2026 MyLocationLab.",
    h2Liability: "6. Pembatasan Tanggung Jawab",
    pLiability: "Dalam keadaan apa pun MyLocationLab, operatornya, maupun kontributor teknisnya tidak bertanggung jawab atas kerusakan langsung, tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan atau ketidakmampuan menggunakan layanan ini, atau dari kepercayaan pada data koordinat yang diperoleh melalui alat kami.",
    h2Law: "7. Hukum yang Berlaku",
    pLaw: "Syarat dan ketentuan ini diatur dan ditafsirkan sesuai kerangka regulasi internet yang berlaku, tanpa memperhatikan prinsip pertentangan hukum."
  }
};
