export interface ContactPageContent {
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  titlePrefix: string;
  titleHighlight: string;
  subtitle: string;
  h2Inquiries: string;
  techSupportLabel: string;
  editorialLabel: string;
  privacyLabel: string;
  responseTime: string;
  h2SendMessage: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  topicLabel: string;
  optBug: string;
  optTool: string;
  optPrivacy: string;
  optEditorial: string;
  optOther: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitBtn: string;
  submitDisclaimer: string;
  successTitle: string;
  successDesc: string;
  reopenBtn: string;
}

export const contactPageTranslations: Record<string, ContactPageContent> = {
  en: {
    metaTitle: "Contact Us — Support & Feedback | MyLocationLab",
    metaDescription: "Have a question, feedback, or a coordinate bug report? Contact the MyLocationLab engineering and editorial team.",
    breadcrumb: "Contact Support",
    titlePrefix: "Contact",
    titleHighlight: "Our Team",
    subtitle: "We welcome bug reports from developers, feedback on coordinate accuracy, and suggestions for new geospatial tools.",
    h2Inquiries: "Direct Inquiries",
    techSupportLabel: "Technical Support & Bugs",
    editorialLabel: "Editorial & Geodesy Research",
    privacyLabel: "Data Privacy Officer",
    responseTime: "⏰ Response Time: Inquiries are reviewed by our engineering and editorial team within 24–48 business hours.",
    h2SendMessage: "Send a Message",
    nameLabel: "Your Name",
    namePlaceholder: "e.g. Alex Morgan",
    emailLabel: "Email Address",
    topicLabel: "Topic",
    optBug: "Report a Coordinate / Geocoding Bug",
    optTool: "Suggest a New Location Tool",
    optPrivacy: "Privacy or Data Query",
    optEditorial: "Editorial / Content Correction",
    optOther: "General Feedback",
    messageLabel: "Your Message",
    messagePlaceholder: "Describe the issue, include coordinate details or browser information...",
    submitBtn: "✉️ Submit Message",
    submitDisclaimer: "Submitting opens your email app with the message pre-filled to support@mylocationlab.com — nothing is sent or stored by this website.",
    successTitle: "Your Email App Should Be Opening",
    successDesc: "We've pre-filled your message to support@mylocationlab.com — just press send. If nothing opened, you can email us directly at that address.",
    reopenBtn: "← Edit My Message"
  },
  es: {
    metaTitle: "Contacto — Soporte y Comentarios | MyLocationLab",
    metaDescription: "¿Tiene dudas, sugerencias o un informe de error de coordenadas? Contacte con el equipo de ingeniería de MyLocationLab.",
    breadcrumb: "Soporte y Contacto",
    titlePrefix: "Contactar con",
    titleHighlight: "Nuestro Equipo",
    subtitle: "Agradecemos informes de errores de desarrolladores, comentarios sobre precisión de coordenadas y sugerencias de nuevas herramientas.",
    h2Inquiries: "Consultas Directas",
    techSupportLabel: "Soporte Técnico y Errores",
    editorialLabel: "Investigación Editorial y Geodesia",
    privacyLabel: "Delegado de Protección de Datos",
    responseTime: "⏰ Tiempo de Respuesta: Las consultas se revisan por nuestro equipo en un plazo de 24 a 48 horas laborables.",
    h2SendMessage: "Enviar un Mensaje",
    nameLabel: "Su Nombre",
    namePlaceholder: "ej. Alejandro Gómez",
    emailLabel: "Correo Electrónico",
    topicLabel: "Asunto",
    optBug: "Reportar un fallo de coordenadas o geocodificación",
    optTool: "Sugerir una nueva herramienta de ubicación",
    optPrivacy: "Consulta sobre privacidad o datos",
    optEditorial: "Corrección editorial de contenidos",
    optOther: "Comentario general",
    messageLabel: "Su Mensaje",
    messagePlaceholder: "Describa el problema, incluya coordenadas o navegador utilizado...",
    submitBtn: "✉️ Enviar Mensaje",
    submitDisclaimer: "Al enviar, se abrirá su aplicación de correo con el mensaje dirigido a support@mylocationlab.com. Este sitio web no almacena sus datos.",
    successTitle: "Su aplicación de correo se está abriendo",
    successDesc: "Hemos preparado el mensaje para support@mylocationlab.com. Si no se abrió, puede escribirnos directamente a esa dirección.",
    reopenBtn: "← Editar Mi Mensaje"
  },
  fr: {
    metaTitle: "Contactez-Nous — Support & Retours | MyLocationLab",
    metaDescription: "Une question, une suggestion ou un rapport d'anomalie de coordonnées ? Contactez les ingénieurs de MyLocationLab.",
    breadcrumb: "Support & Contact",
    titlePrefix: "Contacter",
    titleHighlight: "Notre Équipe",
    subtitle: "Vos signalements de bugs, retours sur la précision des calculs et propositions de nouveaux outils sont précieux.",
    h2Inquiries: "Contacts Directs",
    techSupportLabel: "Support Technique & Bugs",
    editorialLabel: "Recherche & Rédaction Géodésique",
    privacyLabel: "Délégué à la Protection des Données",
    responseTime: "⏰ Délai de Traitement : Nos équipes examinent chaque message sous 24 à 48 heures ouvrées.",
    h2SendMessage: "Envoyer un Message",
    nameLabel: "Votre Nom",
    namePlaceholder: "ex. Camille Laurent",
    emailLabel: "Adresse E-mail",
    topicLabel: "Objet",
    optBug: "Signaler un bug de coordonnées ou de géocodage",
    optTool: "Suggérer un nouvel outil cartographique",
    optPrivacy: "Question relative à la vie privée",
    optEditorial: "Correction d'un article ou guide",
    optOther: "Remarque générale",
    messageLabel: "Votre Message",
    messagePlaceholder: "Décrivez la situation, indiquez vos coordonnées ou votre navigateur...",
    submitBtn: "✉️ Préparer l'E-mail",
    submitDisclaimer: "L'envoi ouvre votre messagerie par défaut avec un brouillon pré-rempli pour support@mylocationlab.com — aucun enregistrement sur le site.",
    successTitle: "Ouverture de votre messagerie",
    successDesc: "Votre message est prêt à l'envoi pour support@mylocationlab.com. Vous pouvez également nous écrire directement à cette adresse.",
    reopenBtn: "← Modifier Mon Message"
  },
  de: {
    metaTitle: "Kontakt — Support & Feedback | MyLocationLab",
    metaDescription: "Haben Sie Fragen, Feedback oder einen Fehler in Koordinaten entdeckt? Kontaktieren Sie das MyLocationLab-Entwicklerteam.",
    breadcrumb: "Kontakt & Support",
    titlePrefix: "Kontaktieren Sie",
    titleHighlight: "Unser Team",
    subtitle: "Wir freuen uns über Fehlerberichte von Entwicklern, Rückmeldungen zur Positionsgenauigkeit und Anregungen zu neuen Geotools.",
    h2Inquiries: "Direkte Ansprechpartner",
    techSupportLabel: "Technischer Support & Bug-Reports",
    editorialLabel: "Redaktion & Geodäsie-Forschung",
    privacyLabel: "Datenschutzbeauftragter",
    responseTime: "⏰ Antwortzeit: Anfragen werden werktags innerhalb von 24–48 Stunden von unserem Team bearbeitet.",
    h2SendMessage: "Nachricht Senden",
    nameLabel: "Ihr Name",
    namePlaceholder: "z. B. Max Mustermann",
    emailLabel: "E-Mail-Adresse",
    topicLabel: "Thema",
    optBug: "Fehler bei Koordinaten oder Geokodierung melden",
    optTool: "Neues Standort-Tool vorschlagen",
    optPrivacy: "Frage zum Datenschutz",
    optEditorial: "Inhaltliche Korrektur eines Ratgebers",
    optOther: "Allgemeines Feedback",
    messageLabel: "Ihre Nachricht",
    messagePlaceholder: "Beschreiben Sie das Anliegen, gerne mit Koordinatenangaben oder Browserversion...",
    submitBtn: "✉️ Nachricht Absenden",
    submitDisclaimer: "Öffnet Ihr Standard-E-Mail-Programm mit vorbereiteter Nachricht an support@mylocationlab.com — diese Website speichert keine Eingaben.",
    successTitle: "Ihr E-Mail-Programm wird geöffnet",
    successDesc: "Die E-Mail an support@mylocationlab.com ist vorbereitet. Sollte sich kein Fenster öffnen, schreiben Sie direkt an diese Adresse.",
    reopenBtn: "← Nachricht Bearbeiten"
  },
  pt: {
    metaTitle: "Fale Conosco — Suporte e Feedback | MyLocationLab",
    metaDescription: "Tem dúvidas, sugestões ou encontrou um erro em coordenadas? Entre em contato com a equipe de engenharia do MyLocationLab.",
    breadcrumb: "Suporte e Contato",
    titlePrefix: "Fale com",
    titleHighlight: "Nossa Equipe",
    subtitle: "Agradecemos relatórios de erros, sugestões de precisão cartográfica e propostas para novas ferramentas espaciais.",
    h2Inquiries: "Canais Diretos",
    techSupportLabel: "Suporte Técnico e Erros",
    editorialLabel: "Pesquisa Editorial e Geodésia",
    privacyLabel: "Encarregado de Privacidade (DPO)",
    responseTime: "⏰ Prazo de Resposta: As solicitações são avaliadas por nossa equipe em até 24–48 horas úteis.",
    h2SendMessage: "Enviar Mensagem",
    nameLabel: "Seu Nome",
    namePlaceholder: "ex.: Lucas Silva",
    emailLabel: "E-mail de Contato",
    topicLabel: "Assunto",
    optBug: "Reportar erro em coordenadas ou geocodificação",
    optTool: "Sugerir uma nova ferramenta de localização",
    optPrivacy: "Dúvida sobre privacidade de dados",
    optEditorial: "Correção de conteúdo ou cálculo",
    optOther: "Comentário geral",
    messageLabel: "Sua Mensagem",
    messagePlaceholder: "Descreva a ocorrência, detalhes de coordenadas ou aparelho utilizado...",
    submitBtn: "✉️ Enviar Mensagem",
    submitDisclaimer: "O envio abrirá seu aplicativo de e-mail padrão pré-configurado para support@mylocationlab.com — nada é gravado neste site.",
    successTitle: "Seu aplicativo de e-mail está abrindo",
    successDesc: "Preparamos sua mensagem para support@mylocationlab.com. Caso o aplicativo não abra, envie diretamente para esse endereço.",
    reopenBtn: "← Editar Mensagem"
  },
  hi: {
    metaTitle: "संपर्क करें — सहायता और प्रतिक्रिया | MyLocationLab",
    metaDescription: "कोई सवाल, सुझाव या निर्देशांक संबंधी बग रिपोर्ट है? MyLocationLab की इंजीनियरिंग और संपादकीय टीम से संपर्क करें। हम 24–48 कार्य-घंटों में उत्तर देते हैं।",
    breadcrumb: "संपर्क सहायता",
    titlePrefix: "संपर्क करें",
    titleHighlight: "हमारी टीम",
    subtitle: "हम डेवलपर्स की बग रिपोर्ट, निर्देशांकों की सटीकता पर प्रतिक्रिया और नए भू-स्थानिक टूल्स के सुझाव स्वीकार करते हैं।",
    h2Inquiries: "सीधे संपर्क करें",
    techSupportLabel: "तकनीकी सहायता और बग",
    editorialLabel: "संपादकीय और जियोडेसी शोध",
    privacyLabel: "डेटा गोपनीयता अधिकारी",
    responseTime: "⏰ उत्तर का समय: हमारी इंजीनियरिंग और संपादकीय टीम 24–48 कार्य-घंटों के भीतर प्रत्येक पूछताछ की समीक्षा करती है।",
    h2SendMessage: "संदेश भेजें",
    nameLabel: "आपका नाम",
    namePlaceholder: "जैसे अर्जुन शर्मा",
    emailLabel: "ईमेल पता",
    topicLabel: "विषय",
    optBug: "निर्देशांक / जियोकोडिंग की बग रिपोर्ट करें",
    optTool: "नया लोकेशन टूल सुझाएं",
    optPrivacy: "गोपनीयता या डेटा संबंधी पूछताछ",
    optEditorial: "संपादकीय / सामग्री सुधार",
    optOther: "सामान्य प्रतिक्रिया",
    messageLabel: "आपका संदेश",
    messagePlaceholder: "समस्या का वर्णन करें, निर्देशांक या ब्राउज़र की जानकारी शामिल करें...",
    submitBtn: "✉️ संदेश भेजें",
    submitDisclaimer: "भेजने पर आपका ईमेल ऐप support@mylocationlab.com पर पहले से लिखे संदेश के साथ खुलेगा — इस वेबसाइट द्वारा कुछ भी भेजा या संग्रहीत नहीं किया जाता।",
    successTitle: "आपका ईमेल ऐप खुल रहा है",
    successDesc: "हमने आपका संदेश support@mylocationlab.com के लिए पहले से तैयार कर दिया है — बस सेंड दबाएं। अगर कुछ नहीं खुला, तो आप सीधे उसी पते पर ईमेल कर सकते हैं।",
    reopenBtn: "← मेरा संदेश संपादित करें"
  },
  id: {
    metaTitle: "Hubungi Kami — Dukungan & Masukan | MyLocationLab",
    metaDescription: "Punya pertanyaan, masukan, atau laporan bug koordinat? Hubungi tim rekayasa dan editorial MyLocationLab. Kami menanggapi dalam 24–48 jam kerja.",
    breadcrumb: "Dukungan & Kontak",
    titlePrefix: "Hubungi",
    titleHighlight: "Tim Kami",
    subtitle: "Kami menerima laporan bug dari pengembang, masukan tentang akurasi koordinat, serta usulan alat geospasial baru untuk situs ini.",
    h2Inquiries: "Kontak Langsung",
    techSupportLabel: "Dukungan Teknis & Bug",
    editorialLabel: "Riset Editorial & Geodesi",
    privacyLabel: "Petugas Perlindungan Data",
    responseTime: "⏰ Waktu Tanggapan: Setiap pertanyaan ditinjau oleh tim rekayasa dan editorial kami dalam 24–48 jam kerja.",
    h2SendMessage: "Kirim Pesan",
    nameLabel: "Nama Anda",
    namePlaceholder: "cth. Budi Santoso",
    emailLabel: "Alamat Email",
    topicLabel: "Topik",
    optBug: "Laporkan bug koordinat / geocoding",
    optTool: "Usulkan alat lokasi baru",
    optPrivacy: "Pertanyaan privasi atau data",
    optEditorial: "Koreksi editorial / konten",
    optOther: "Masukan umum",
    messageLabel: "Pesan Anda",
    messagePlaceholder: "Jelaskan masalahnya, sertakan detail koordinat atau informasi peramban...",
    submitBtn: "✉️ Kirim Pesan",
    submitDisclaimer: "Pengiriman akan membuka aplikasi email Anda dengan pesan yang sudah terisi ke support@mylocationlab.com — situs ini tidak mengirim atau menyimpan apa pun.",
    successTitle: "Aplikasi Email Anda Akan Terbuka",
    successDesc: "Kami sudah menyiapkan pesan Anda ke support@mylocationlab.com — tinggal tekan kirim. Jika tidak ada yang terbuka, Anda bisa mengirim email langsung ke alamat tersebut.",
    reopenBtn: "← Edit Pesan Saya"
  }
};
