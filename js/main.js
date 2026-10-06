/* ============================================================
   CLUB HOTEK TSS — MAIN.JS (shared across all pages)
============================================================ */

"use strict";

/* ---------- FORCE HIDE PRELOADER ---------- */
(function forceHidePreloader() {
    const MAX_WAIT = 2500;
    function hide() {
        const preloader = document.getElementById("preloader");
        if (preloader && !preloader.classList.contains("hidden")) {
            preloader.classList.add("hidden");
            setTimeout(() => { if (preloader) preloader.style.display = "none"; }, 600);
        }
    }
    if (document.readyState === "complete") hide();
    else window.addEventListener("load", hide);
    setTimeout(hide, MAX_WAIT);
    document.addEventListener("DOMContentLoaded", () => setTimeout(hide, 1200));
})();

/* ============================================================
   TRANSLATIONS (all 6 languages, includes new keys)
============================================================ */
const translations = {
    en: {
        loading: "Loading...",
        welcomeMarquee: "Welcome to CLUB HOTEK TSS, Admission is in progress in this upcoming Academic year 🎓🎓🎓",
        navHome: "Home", navAbout: "About", navTrades: "Trades", navPerformance: "Performance",
        navAdmissions: "Admissions", navGallery: "Gallery", navNews: "News & Events",
        navFaq: "FAQ", navContact: "Contact", navMenu: "Quick Menu",
        heroBadge: "Technical & Vocational Education and Training",
        heroWelcome: "Welcome to",
        heroSlogan: "Hitamo neza utegure ejo heza",
        heroSloganSub: "Choose well to prepare for a better tomorrow",
        heroDescription: "Building practical skills, creativity, professionalism and entrepreneurship for a better future.",
        heroBtnTrades: "Explore Our Trades",
        heroBtnApply: "Apply Now",
        aboutLabel: "ABOUT OUR SCHOOL",
        aboutWelcome: "Welcome to",
        aboutTagline: "A place where practical skills meet opportunity.",
        aboutExpCard: "Practical Education",
        aboutMiniTitle: "PRACTICAL SKILLS FOR BETTER LIFE",
        aboutHeading: "Empowering learners with practical, technical and professional skills.",
        aboutP1: "CLUB HOTEK TSS is a Technical and Vocational Education and Training institution committed to providing learners with practical knowledge and skills that prepare them for employment, entrepreneurship and further education.",
        aboutP2: "Our training focuses on hands-on learning, creativity, professionalism, discipline and innovation.",
        aboutF1: "Practical Skills", aboutF2: "Professional Training",
        aboutF3: "Entrepreneurship", aboutF4: "Innovation & Creativity",
        aboutBtn: "Discover Our Programs",
        vmbLabel: "OUR IDENTITY",
        vmbHeading1: "Vision, Mission &", vmbHeading2: "Background",
        vmbTagline: "Learn about the foundation that drives CLUB HOTEK TSS forward.",
        visionTitle: "Our Vision",
        visionText: "To become a leading TVET institution that produces competent, innovative and professional graduates who contribute to the socio-economic development of Rwanda and beyond.",
        missionTitle: "Our Mission",
        missionText: "To provide quality, practical and market-oriented training that equips learners with the skills, knowledge and attitudes needed for employment, self-employment and lifelong learning.",
        backgroundTitle: "Our Background",
        backgroundText: "CLUB HOTEK TSS was established to address the growing demand for practical skills among young people in Rwanda. Located in Gisozi Sector, Gasabo District, the school offers a variety of TVET programs designed to prepare learners for real-world careers and entrepreneurial opportunities.",
        stat1: "Main Programs", stat2: "Skills Focused",
        stat3: "Practical Learning", stat4: "Innovation",
        tradesLabel: "OUR PROGRAMS",
        tradesHeading1: "Explore Our", tradesHeading2: "TVET Trades",
        tradesTagline: "Choose a practical career path and develop skills for your future.",
        trade1Title: "Food & Beverage Operations",
        trade1Desc: "Practical training in food production, restaurant operations, hospitality and beverage services.",
        trade2Title: "Automobile Mechanics",
        trade2Desc: "Hands-on automotive repair, maintenance, diagnostics and mechanical skills.",
        trade3Title: "Culinary Arts",
        trade3Desc: "Develop professional cooking, food preparation, kitchen management and presentation skills.",
        trade4Title: "Tailoring",
        trade4Desc: "Learn garment design, cutting, sewing, fashion and clothing production.",
        trade5Title: "Hairdressing",
        trade5Desc: "Practical training in hair care, styling, beauty services and salon management.",
        trade6Title: "Multimedia",
        trade6Desc: "Learn photography, video production, graphic design, digital media and creative communication.",
        whyLabel: "WHY CLUB HOTEK TSS?",
        whyHeading1: "Building Skills.", whyHeading2: "Building Futures.",
        why1Title: "Hands-on Training",
        why1Desc: "Learners develop practical skills through real-world activities and workshop practice.",
        why2Title: "Professional Skills",
        why2Desc: "We prepare learners for professional workplaces and modern career opportunities.",
        why3Title: "Innovation",
        why3Desc: "Creativity, entrepreneurship and problem-solving are encouraged throughout training.",
        why4Title: "Community",
        why4Desc: "We encourage teamwork, discipline, respect and responsible citizenship.",
        admLabel: "ADMISSIONS",
        admHeading1: "Start Your", admHeading2: "Career Journey", admHeading3: "Today.",
        admDesc: "Choose a practical TVET program and prepare yourself for employment, entrepreneurship and a better future.",
        admP1: "Practical training", admP2: "Career-oriented programs",
        admP3: "Skills development", admP4: "Entrepreneurship opportunities",
        appLabel: "APPLICATION", appHeading: "Request Information",
        appDesc: "Contact the school to learn more about admissions.",
        formName: "Full Name", formPhone: "Telephone",
        formTrade: "Program / Trade", formTradeSelect: "Select a program",
        formMessage: "Message", formSend: "Send Request",
        formEmail: "Email", formSubject: "Subject",
        formMessage2: "Message", formSendMessage: "Send Message",
        galleryLabel: "OUR GALLERY",
        galleryHeading1: "Life at",
        galleryTagline: "Explore our school, learners, workshops and activities.",
        filterAll: "All", filterSchool: "School", filterStudents: "Students",
        filterWorkshop: "Workshops", filterEvents: "Events",
        gal1Title: "Our School", gal2Title: "Our Students",
        gal3Title: "Practical Training", gal4Title: "School Event",
        gal5Title: "Learning Together", gal6Title: "Skills Development",
        perfLabel: "STUDENT PERFORMANCE",
        perfHeading1: "Our Students'", perfHeading2: "Achievements",
        perfTagline: "A snapshot of our learners' success across trades and academic years.",
        perfKpi1: "National Exam Pass Rate (%)", perfKpi2: "Graduate Employment (%)",
        perfKpi3: "Skills Competition Awards", perfKpi4: "Student Satisfaction (%)",
        perfTrade1: "Food & Beverage Operations", perfTrade2: "Automobile Mechanics",
        perfTrade3: "Culinary Arts", perfTrade4: "Tailoring",
        perfTrade5: "Hairdressing", perfTrade6: "Multimedia",
        perfPassRate: "Pass Rate", perfEmployment: "Employment Rate",
        visitorLabel: "WEBSITE VISITORS",
        visitorHeading: "Thank you for visiting us!",
        visitorTotalLabel: "Total Visits", visitorTodayLabel: "Today",
        visitorUniqueLabel: "Your Visits", visitorStatusLabel: "Status",
        visitorNote: "Visitor statistics are updated in real time. No personal data is collected.",
        newsTitle: "Recent Posts", readMore: "Read More", backToNews: "Back to News",
        recentPosts: "RECENT POSTS", categories: "CATEGORIES", tags: "TAGS",
        catCommunity: "Community", catEvents: "Events", catAchievements: "Achievements",
        catCampus: "Campus", catCompetitions: "Competitions",
        post1Title: "CLUB HOTEK TSS Strengthens Community Support Through Skills Program",
        post1Excerpt: "On 11 May 2026, CLUB HOTEK TSS once again demonstrated its strong commitment to empowering young people through practical, community-focused skills training...",
        post2Title: "CLUB HOTEK TSS Celebrates a Colorful and Inspiring Cultural Day",
        post2Excerpt: "CLUB HOTEK TSS was filled with excitement, color, and joy on Friday, 24th February as students, staff and parents gathered for the annual Cultural Day celebration...",
        post3Title: "CLUB HOTEK TSS Awarded Top TVET School in Gasabo for 2024–2025",
        post3Excerpt: "CLUB HOTEK TSS is proud to announce that it has been officially recognized as one of the leading TVET institutions in Gasabo District for the 2024–2025 academic year...",
        post4Title: "New Multimedia Workshop Officially Opened",
        post4Excerpt: "CLUB HOTEK TSS has officially opened a brand-new Multimedia Workshop equipped with modern cameras, computers and design software to enhance creativity and hands-on learning...",
        post5Title: "Students Shine in National Skills Competition",
        post5Excerpt: "A team of CLUB HOTEK TSS students represented the school with pride at the National TVET Skills Competition, showcasing outstanding talent in culinary arts, tailoring and multimedia...",
        faqLabel: "FREQUENTLY ASKED QUESTIONS",
        faqHeading1: "Got Questions?", faqHeading2: "We Have Answers.",
        faqTagline: "Click on any question below to see the answer.",
        faqQ1: "How can I register at CLUB HOTEK TSS?",
        faqA1: "You can register by visiting the school in person at Gisozi Sector, Gasabo District, or by calling 0788301833 / 0788627310.",
        faqQ2: "Which programs do you offer?",
        faqA2: "CLUB HOTEK TSS offers six main TVET programs: Food & Beverage Operations, Automobile Mechanics, Culinary Arts, Tailoring, Hairdressing and Multimedia.",
        faqQ3: "What are the requirements for admission?",
        faqA3: "Requirements vary by program. Generally, applicants should have completed at least primary education (P6) or Ordinary Level (S3).",
        faqQ4: "How can I contact the school?",
        faqA4: "You can reach us by phone at 0788301833 or 0788627310, by email at clubhotek@gmail.com, or via WhatsApp at +250 788 301 833.",
        faqQ5: "Where is CLUB HOTEK TSS located?",
        faqA5: "CLUB HOTEK TSS is located in Gisozi Sector, Gasabo District, Kigali, Rwanda.",
        faqQ6: "Do you offer Software Development?",
        faqA6: "Software Development is not currently offered as a standalone program. However, our Multimedia program covers digital media, design and creative communication skills.",
        faqQ7: "Do you offer Multimedia?",
        faqA7: "Yes. Multimedia is one of our main TVET trades.",
        faqQ8: "When does registration start?",
        faqA8: "Registration at CLUB HOTEK TSS is currently in progress for the upcoming academic year.",
        faqQ9: "Is there accommodation for students?",
        faqA9: "The school does not currently provide on-campus accommodation. However, learners can find nearby hostels and rental options around Gisozi.",
        faqQ10: "How can I apply online?",
        faqA10: "To apply online, scroll to the Admissions section and fill in the Request Information form.",
        ctaLabel: "HITAMO NEZA UTEGURE EJO HEZA",
        ctaHeading: "Your Future Starts With a Skill.",
        ctaDesc: "Join CLUB HOTEK TSS and build practical skills for life.",
        ctaBtn: "Apply / Contact Us",
        contactLabel: "CONTACT US",
        contactHeading1: "Get in", contactHeading2: "Touch",
        contactTagline: "We are ready to provide more information about our programs.",
        contactLocTitle: "Our Location", contactPhoneTitle: "Telephone",
        contactEmailTitle: "Email", contactInfoTitle: "School Information",
        contactInfoDesc: "Practical Skills & Career Development",
        contactWhatsapp: "Chat with us on WhatsApp",
        contactFormHeading: "Send Us a Message",
        footerQuick: "Quick Links", footerAbout: "About Us", footerTrades: "Our Trades",
        footerOurTrades: "Our Trades", footerContact: "Contact",
        footerRights: "All Rights Reserved.",
        footerTagline: "Practical Skills for Better Life",
        toastSuccess: "Message sent successfully.",
        toastContact: "Thank you! Your message has been received.",
        toastApplication: "Application request submitted successfully.",
        toastNewsletter: "Thank you for subscribing!",
        newsletterTitle: "Stay Updated with CLUB HOTEK TSS",
        newsletterText: "Subscribe to receive admissions news, events and program updates directly in your inbox.",
        newsletterPlaceholder: "Your email address",
        newsletterBtn: "Subscribe"
    },
    fr: {
        loading: "Chargement...",
        welcomeMarquee: "Bienvenue à CLUB HOTEK TSS, les inscriptions sont en cours pour la prochaine année académique 🎓🎓🎓",
        navHome: "Accueil", navAbout: "À propos", navTrades: "Métiers", navPerformance: "Performance",
        navAdmissions: "Admissions", navGallery: "Galerie", navNews: "Actualités",
        navFaq: "FAQ", navContact: "Contact", navMenu: "Menu Rapide",
        heroBadge: "Enseignement Technique et Professionnel",
        heroWelcome: "Bienvenue à",
        heroSlogan: "Hitamo neza utegure ejo heza",
        heroSloganSub: "Choisissez bien pour préparer un meilleur avenir",
        heroDescription: "Développer des compétences pratiques, la créativité, le professionnalisme et l'entrepreneuriat pour un meilleur avenir.",
        heroBtnTrades: "Découvrir nos métiers",
        heroBtnApply: "S'inscrire maintenant",
        aboutLabel: "À PROPOS DE NOTRE ÉCOLE",
        aboutWelcome: "Bienvenue à",
        aboutTagline: "Un lieu où les compétences pratiques rencontrent l'opportunité.",
        aboutExpCard: "Éducation pratique",
        aboutMiniTitle: "COMPÉTENCES PRATIQUES POUR UNE VIE MEILLEURE",
        aboutHeading: "Former les apprenants avec des compétences pratiques, techniques et professionnelles.",
        aboutP1: "CLUB HOTEK TSS est une institution d'enseignement technique et professionnel engagée à fournir aux apprenants des connaissances et compétences pratiques qui les préparent à l'emploi, à l'entrepreneuriat et à la poursuite des études.",
        aboutP2: "Notre formation met l'accent sur l'apprentissage pratique, la créativité, le professionnalisme, la discipline et l'innovation.",
        aboutF1: "Compétences pratiques", aboutF2: "Formation professionnelle",
        aboutF3: "Entrepreneuriat", aboutF4: "Innovation et créativité",
        aboutBtn: "Découvrir nos programmes",
        vmbLabel: "NOTRE IDENTITÉ",
        vmbHeading1: "Vision, Mission &", vmbHeading2: "Contexte",
        vmbTagline: "Découvrez la fondation qui fait avancer CLUB HOTEK TSS.",
        visionTitle: "Notre Vision",
        visionText: "Devenir une institution TVET de premier plan qui produit des diplômés compétents, innovants et professionnels contribuant au développement socio-économique du Rwanda et au-delà.",
        missionTitle: "Notre Mission",
        missionText: "Fournir une formation de qualité, pratique et orientée vers le marché qui dote les apprenants des compétences, connaissances et attitudes nécessaires à l'emploi, à l'auto-emploi et à l'apprentissage tout au long de la vie.",
        backgroundTitle: "Notre Contexte",
        backgroundText: "CLUB HOTEK TSS a été créé pour répondre à la demande croissante de compétences pratiques chez les jeunes au Rwanda. Située dans le secteur de Gisozi, district de Gasabo, l'école offre une variété de programmes TVET.",
        stat1: "Programmes principaux", stat2: "Axé sur les compétences",
        stat3: "Apprentissage pratique", stat4: "Innovation",
        tradesLabel: "NOS PROGRAMMES",
        tradesHeading1: "Explorez nos", tradesHeading2: "Métiers TVET",
        tradesTagline: "Choisissez un parcours professionnel pratique et développez des compétences pour votre avenir.",
        trade1Title: "Opérations de restauration",
        trade1Desc: "Formation pratique en production alimentaire, opérations de restaurant, hôtellerie et services de boissons.",
        trade2Title: "Mécanique automobile",
        trade2Desc: "Réparation automobile pratique, entretien, diagnostic et compétences mécaniques.",
        trade3Title: "Arts culinaires",
        trade3Desc: "Développer la cuisine professionnelle, la préparation des aliments et la gestion de cuisine.",
        trade4Title: "Couture",
        trade4Desc: "Apprendre la conception de vêtements, la coupe, la couture, la mode et la production de vêtements.",
        trade5Title: "Coiffure",
        trade5Desc: "Formation pratique en soins capillaires, coiffure, services de beauté et gestion de salon.",
        trade6Title: "Multimedia",
        trade6Desc: "Apprendre la photographie, la production vidéo, le design graphique, les médias numériques.",
        whyLabel: "POURQUOI CLUB HOTEK TSS ?",
        whyHeading1: "Construire des compétences.", whyHeading2: "Construire l'avenir.",
        why1Title: "Formation pratique",
        why1Desc: "Les apprenants développent des compétences pratiques par des activités réelles et la pratique en atelier.",
        why2Title: "Compétences professionnelles",
        why2Desc: "Nous préparons les apprenants aux environnements professionnels et aux opportunités de carrière modernes.",
        why3Title: "Innovation",
        why3Desc: "La créativité, l'entrepreneuriat et la résolution de problèmes sont encouragés tout au long de la formation.",
        why4Title: "Communauté",
        why4Desc: "Nous encourageons le travail d'équipe, la discipline, le respect et la citoyenneté responsable.",
        admLabel: "ADMISSIONS",
        admHeading1: "Commencez votre", admHeading2: "parcours professionnel", admHeading3: "aujourd'hui.",
        admDesc: "Choisissez un programme TVET pratique et préparez-vous à l'emploi, à l'entrepreneuriat et à un meilleur avenir.",
        admP1: "Formation pratique", admP2: "Programmes axés sur la carrière",
        admP3: "Développement des compétences", admP4: "Opportunités d'entrepreneuriat",
        appLabel: "CANDIDATURE", appHeading: "Demander des informations",
        appDesc: "Contactez l'école pour en savoir plus sur les admissions.",
        formName: "Nom complet", formPhone: "Téléphone",
        formTrade: "Programme / Métier", formTradeSelect: "Sélectionnez un programme",
        formMessage: "Message", formSend: "Envoyer la demande",
        formEmail: "Email", formSubject: "Sujet",
        formMessage2: "Message", formSendMessage: "Envoyer le message",
        galleryLabel: "NOTRE GALERIE",
        galleryHeading1: "La vie à",
        galleryTagline: "Explorez notre école, nos apprenants, nos ateliers et nos activités.",
        filterAll: "Tout", filterSchool: "École", filterStudents: "Étudiants",
        filterWorkshop: "Ateliers", filterEvents: "Événements",
        gal1Title: "Notre école", gal2Title: "Nos étudiants",
        gal3Title: "Formation pratique", gal4Title: "Événement scolaire",
        gal5Title: "Apprendre ensemble", gal6Title: "Développement des compétences",
        perfLabel: "PERFORMANCE DES ÉTUDIANTS",
        perfHeading1: "Les réalisations", perfHeading2: "de nos étudiants",
        perfTagline: "Un aperçu du succès de nos apprenants à travers les métiers et les années académiques.",
        perfKpi1: "Taux de réussite à l'examen national (%)", perfKpi2: "Emploi des diplômés (%)",
        perfKpi3: "Prix de compétitions de compétences", perfKpi4: "Satisfaction des étudiants (%)",
        perfTrade1: "Opérations de restauration", perfTrade2: "Mécanique automobile",
        perfTrade3: "Arts culinaires", perfTrade4: "Couture",
        perfTrade5: "Coiffure", perfTrade6: "Multimedia",
        perfPassRate: "Taux de réussite", perfEmployment: "Taux d'emploi",
        visitorLabel: "VISITEURS DU SITE",
        visitorHeading: "Merci de votre visite !",
        visitorTotalLabel: "Visites Totales", visitorTodayLabel: "Aujourd'hui",
        visitorUniqueLabel: "Vos Visites", visitorStatusLabel: "Statut",
        visitorNote: "Les statistiques des visiteurs sont mises à jour en temps réel. Aucune donnée personnelle n'est collectée.",
        newsTitle: "Articles Récents", readMore: "Lire la suite", backToNews: "Retour aux actualités",
        recentPosts: "ARTICLES RÉCENTS", categories: "CATÉGORIES", tags: "MOTS-CLÉS",
        catCommunity: "Communauté", catEvents: "Événements", catAchievements: "Réalisations",
        catCampus: "Campus", catCompetitions: "Compétitions",
        post1Title: "CLUB HOTEK TSS renforce le soutien communautaire par un programme de compétences",
        post1Excerpt: "Le 11 mai 2026, CLUB HOTEK TSS a une fois de plus démontré son fort engagement à autonomiser les jeunes grâce à une formation pratique axée sur la communauté...",
        post2Title: "CLUB HOTEK TSS célèbre une journée culturelle colorée et inspirante",
        post2Excerpt: "CLUB HOTEK TSS était rempli d'excitation, de couleurs et de joie le vendredi 24 février...",
        post3Title: "CLUB HOTEK TSS élu meilleure école TVET de Gasabo pour 2024–2025",
        post3Excerpt: "CLUB HOTEK TSS est fier d'annoncer qu'il a été officiellement reconnu comme l'une des principales institutions TVET du district de Gasabo...",
        post4Title: "Nouvel atelier multimédia officiellement ouvert",
        post4Excerpt: "CLUB HOTEK TSS a officiellement ouvert un tout nouvel atelier multimédia équipé de caméras modernes...",
        post5Title: "Les étudiants brillent au Concours National des Compétences",
        post5Excerpt: "Une équipe d'étudiants de CLUB HOTEK TSS a représenté l'école avec fierté au Concours National des Compétences TVET...",
        faqLabel: "QUESTIONS FRÉQUEMMENT POSÉES",
        faqHeading1: "Des questions ?", faqHeading2: "Nous avons les réponses.",
        faqTagline: "Cliquez sur une question ci-dessous pour voir la réponse.",
        faqQ1: "Comment puis-je m'inscrire à CLUB HOTEK TSS ?",
        faqA1: "Vous pouvez vous inscrire en visitant l'école en personne au secteur de Gisozi, district de Gasabo, ou en appelant le 0788301833 / 0788627310.",
        faqQ2: "Quels programmes proposez-vous ?",
        faqA2: "CLUB HOTEK TSS propose six programmes TVET principaux : Opérations de restauration, Mécanique automobile, Arts culinaires, Couture, Coiffure et Multimedia.",
        faqQ3: "Quelles sont les conditions d'admission ?",
        faqA3: "Les conditions varient selon le programme. En général, les candidats doivent avoir terminé au moins l'enseignement primaire (P6) ou le niveau ordinaire (S3).",
        faqQ4: "Comment puis-je contacter l'école ?",
        faqA4: "Vous pouvez nous joindre par téléphone au 0788301833 ou 0788627310, par email à clubhotek@gmail.com.",
        faqQ5: "Où se trouve CLUB HOTEK TSS ?",
        faqA5: "CLUB HOTEK TSS est situé dans le secteur de Gisozi, district de Gasabo, Kigali, Rwanda.",
        faqQ6: "Proposez-vous le développement de logiciels ?",
        faqA6: "Le développement de logiciels n'est actuellement pas proposé comme programme autonome.",
        faqQ7: "Proposez-vous le Multimedia ?",
        faqA7: "Oui. Multimedia est l'un de nos principaux métiers TVET.",
        faqQ8: "Quand commence l'inscription ?",
        faqA8: "L'inscription à CLUB HOTEK TSS est actuellement en cours pour la prochaine année académique.",
        faqQ9: "Y a-t-il un hébergement pour les étudiants ?",
        faqA9: "L'école ne fournit actuellement pas d'hébergement sur le campus.",
        faqQ10: "Comment puis-je postuler en ligne ?",
        faqA10: "Pour postuler en ligne, accédez à la section Admissions et remplissez le formulaire Demander des informations.",
        ctaLabel: "HITAMO NEZA UTEGURE EJO HEZA",
        ctaHeading: "Votre avenir commence par une compétence.",
        ctaDesc: "Rejoignez CLUB HOTEK TSS et développez des compétences pratiques pour la vie.",
        ctaBtn: "Postuler / Nous contacter",
        contactLabel: "CONTACTEZ-NOUS",
        contactHeading1: "Entrer en", contactHeading2: "contact",
        contactTagline: "Nous sommes prêts à fournir plus d'informations sur nos programmes.",
        contactLocTitle: "Notre emplacement", contactPhoneTitle: "Téléphone",
        contactEmailTitle: "Email", contactInfoTitle: "Informations scolaires",
        contactInfoDesc: "Compétences pratiques et développement de carrière",
        contactWhatsapp: "Discutez avec nous sur WhatsApp",
        contactFormHeading: "Envoyez-nous un message",
        footerQuick: "Liens rapides", footerAbout: "À propos", footerTrades: "Nos métiers",
        footerOurTrades: "Nos métiers", footerContact: "Contact",
        footerRights: "Tous droits réservés.",
        footerTagline: "Compétences pratiques pour une vie meilleure",
        toastSuccess: "Message envoyé avec succès.",
        toastContact: "Merci ! Votre message a été reçu.",
        toastApplication: "Demande de candidature soumise avec succès.",
        toastNewsletter: "Merci pour votre abonnement !",
        newsletterTitle: "Restez informé avec CLUB HOTEK TSS",
        newsletterText: "Abonnez-vous pour recevoir les actualités des admissions, événements et programmes.",
        newsletterPlaceholder: "Votre adresse email",
        newsletterBtn: "S'abonner"
    },
    sw: {
        loading: "Inapakia...",
        welcomeMarquee: "Karibu CLUB HOTEK TSS, udahili unaendelea katika mwaka huu wa masomo 🎓🎓🎓",
        navHome: "Nyumbani", navAbout: "Kuhusu", navTrades: "Ufundi", navPerformance: "Utendaji",
        navAdmissions: "Udahili", navGallery: "Matunzio", navNews: "Habari na Matukio",
        navFaq: "Maswali", navContact: "Wasiliana", navMenu: "Menyu ya Haraka",
        heroBadge: "Elimu ya Ufundi na Mafunzo ya Kitaaluma",
        heroWelcome: "Karibu",
        heroSlogan: "Hitamo neza utegure ejo heza",
        heroSloganSub: "Chagua vyema kujiandaa kwa kesho bora",
        heroDescription: "Kujenga ujuzi wa vitendo, ubunifu, taaluma na ujasiriamali kwa maisha bora ya baadaye.",
        heroBtnTrades: "Chunguza Ufundi Wetu",
        heroBtnApply: "Omba Sasa",
        aboutLabel: "KUHUSU SHULE YETU",
        aboutWelcome: "Karibu",
        aboutTagline: "Mahali ambapo ujuzi wa vitendo unakutana na fursa.",
        aboutExpCard: "Elimu ya Vitendo",
        aboutMiniTitle: "UJUZI WA VITENDO KWA MAISHA BORA",
        aboutHeading: "Kuwapa wanafunzi ujuzi wa vitendo, kiufundi na kitaaluma.",
        aboutP1: "CLUB HOTEK TSS ni taasisi ya Elimu ya Ufundi na Mafunzo ya Kitaaluma.",
        aboutP2: "Mafunzo yetu yanazingatia kujifunza kwa vitendo, ubunifu, taaluma, nidhamu na uvumbuzi.",
        aboutF1: "Ujuzi wa Vitendo", aboutF2: "Mafunzo ya Kitaaluma",
        aboutF3: "Ujasiriamali", aboutF4: "Ubunifu na Uvumbuzi",
        aboutBtn: "Gundua Programu Zetu",
        vmbLabel: "UTAMBULISHO WETU",
        vmbHeading1: "Maono, Dhamira na", vmbHeading2: "Historia",
        vmbTagline: "Jifunze kuhusu msingi unaosukuma CLUB HOTEK TSS mbele.",
        visionTitle: "Maono Yetu",
        visionText: "Kuwa taasisi inayoongoza ya TVET inayozalisha wahitimu wenye uwezo, ubunifu na kitaaluma.",
        missionTitle: "Dhamira Yetu",
        missionText: "Kutoa mafunzo ya ubora, ya vitendo na yenye mwelekeo wa soko.",
        backgroundTitle: "Historia Yetu",
        backgroundText: "CLUB HOTEK TSS ilianzishwa kushughulikia mahitaji yanayokua ya ujuzi wa vitendo kwa vijana nchini Rwanda.",
        stat1: "Programu Kuu", stat2: "Kuzingatia Ujuzi",
        stat3: "Kujifunza kwa Vitendo", stat4: "Uvumbuzi",
        tradesLabel: "PROGRAMU ZETU",
        tradesHeading1: "Chunguza", tradesHeading2: "Ufundi wa TVET",
        tradesTagline: "Chagua njia ya kitaaluma ya vitendo na kuendeleza ujuzi kwa maisha yako ya baadaye.",
        trade1Title: "Shughuli za Chakula na Vinywaji",
        trade1Desc: "Mafunzo ya vitendo katika uzalishaji wa chakula, shughuli za mgahawa, ukarimu na huduma za vinywaji.",
        trade2Title: "Ufundi wa Magari",
        trade2Desc: "Ukarabati wa magari kwa vitendo, matengenezo, uchunguzi na ujuzi wa kiufundi.",
        trade3Title: "Sanaa ya Upishi",
        trade3Desc: "Kukuza upishi wa kitaaluma, utayarishaji wa chakula, usimamizi wa jikoni.",
        trade4Title: "Ushonaji",
        trade4Desc: "Jifunze kubuni nguo, kukata, kushona, mitindo na uzalishaji wa nguo.",
        trade5Title: "Unachani",
        trade5Desc: "Mafunzo ya vitendo katika utunzaji wa nywele, mitindo, huduma za urembo.",
        trade6Title: "Multimedia",
        trade6Desc: "Jifunze upigaji picha, utengenezaji wa video, ubunifu wa michoro.",
        whyLabel: "KWA NINI CLUB HOTEK TSS?",
        whyHeading1: "Kujenga Ujuzi.", whyHeading2: "Kujenga Mustakabali.",
        why1Title: "Mafunzo ya Vitendo",
        why1Desc: "Wanafunzi hukuza ujuzi wa vitendo kupitia shughuli za ulimwengu wa kweli.",
        why2Title: "Ujuzi wa Kitaaluma",
        why2Desc: "Tunawaandaa wanafunzi kwa mazingira ya kitaaluma na fursa za kazi za kisasa.",
        why3Title: "Uvumbuzi",
        why3Desc: "Ubunifu, ujasiriamali na utatuzi wa matatizo huhimizwa katika mafunzo yote.",
        why4Title: "Jumuiya",
        why4Desc: "Tunahimiza kufanya kazi kwa pamoja, nidhamu, heshima na uraia wa kuwajibika.",
        admLabel: "UDAHILI",
        admHeading1: "Anza", admHeading2: "Safari yako ya Kazi", admHeading3: "Leo.",
        admDesc: "Chagua programu ya TVET ya vitendo na ujiandae kwa ajira, ujasiriamali na mustakabali bora.",
        admP1: "Mafunzo ya vitendo", admP2: "Programu zinazolenga kazi",
        admP3: "Kuendeleza ujuzi", admP4: "Fursa za ujasiriamali",
        appLabel: "MAOMBI", appHeading: "Omba Taarifa",
        appDesc: "Wasiliana na shule ili kujifunza zaidi kuhusu udahili.",
        formName: "Jina Kamili", formPhone: "Simu",
        formTrade: "Programu / Ufundi", formTradeSelect: "Chagua programu",
        formMessage: "Ujumbe", formSend: "Tuma Ombi",
        formEmail: "Barua pepe", formSubject: "Mada",
        formMessage2: "Ujumbe", formSendMessage: "Tuma Ujumbe",
        galleryLabel: "MATUNZIO YETU",
        galleryHeading1: "Maisha katika",
        galleryTagline: "Chunguza shule yetu, wanafunzi, warsha na shughuli.",
        filterAll: "Zote", filterSchool: "Shule", filterStudents: "Wanafunzi",
        filterWorkshop: "Warsha", filterEvents: "Matukio",
        gal1Title: "Shule Yetu", gal2Title: "Wanafunzi Wetu",
        gal3Title: "Mafunzo ya Vitendo", gal4Title: "Tukio la Shule",
        gal5Title: "Kujifunza Pamoja", gal6Title: "Kuendeleza Ujuzi",
        perfLabel: "UTENDAJI WA WANAFUNZI",
        perfHeading1: "Mafanikio ya", perfHeading2: "Wanafunzi Wetu",
        perfTagline: "Muhtasari wa mafanikio ya wanafunzi wetu katika fani na miaka ya masomo.",
        perfKpi1: "Kiwango cha Kufaulu Mtihani wa Kitaifa (%)", perfKpi2: "Ajira ya Wahitimu (%)",
        perfKpi3: "Tuzo za Mashindano ya Ujuzi", perfKpi4: "Kuridhika kwa Wanafunzi (%)",
        perfTrade1: "Shughuli za Chakula na Vinywaji", perfTrade2: "Ufundi wa Magari",
        perfTrade3: "Sanaa ya Upishi", perfTrade4: "Ushonaji",
        perfTrade5: "Unachani", perfTrade6: "Multimedia",
        perfPassRate: "Kiwango cha Kufaulu", perfEmployment: "Kiwango cha Ajira",
        visitorLabel: "WATEMBELEAJI WA TOVUTI",
        visitorHeading: "Asante kwa kututembelea!",
        visitorTotalLabel: "Jumla ya Ziara", visitorTodayLabel: "Leo",
        visitorUniqueLabel: "Ziara Zako", visitorStatusLabel: "Hali",
        visitorNote: "Takwimu za wageni zinasasishwa kwa wakati halisi. Hakuna data ya kibinafsi inayokusanywa.",
        newsTitle: "Machapisho ya Hivi Karibuni", readMore: "Soma Zaidi", backToNews: "Rudi kwa Habari",
        recentPosts: "MACHAPISHO YA HIVI KARIBUNI", categories: "KATEGORIA", tags: "LEBO",
        catCommunity: "Jumuiya", catEvents: "Matukio", catAchievements: "Mafanikio",
        catCampus: "Chuo", catCompetitions: "Mashindano",
        post1Title: "CLUB HOTEK TSS Inaimarisha Msaada wa Jamii Kupitia Programu ya Ujuzi",
        post1Excerpt: "Tarehe 11 Mei 2026, CLUB HOTEK TSS ilionyesha tena kujitolea kwake kwa nguvu katika kuwawezesha vijana...",
        post2Title: "CLUB HOTEK TSS Inasherehekea Siku ya Utamaduni ya Rangi na Kuvutia",
        post2Excerpt: "CLUB HOTEK TSS ilijaa msisimko, rangi, na furaha siku ya Ijumaa, 24 Februari...",
        post3Title: "CLUB HOTEK TSS Inatunukiwa Shule Bora ya TVET huko Gasabo kwa 2024–2025",
        post3Excerpt: "CLUB HOTEK TSS inajivunia kutangaza kwamba imetambuliwa rasmi kama mojawapo ya taasisi zinazoongoza za TVET...",
        post4Title: "Warsha Mpya ya Multimedia Yafunguliwa Rasmi",
        post4Excerpt: "CLUB HOTEK TSS imefungua rasmi Warsha mpya kabisa ya Multimedia...",
        post5Title: "Wanafunzi Wang'aa katika Mashindano ya Kitaifa ya Ujuzi",
        post5Excerpt: "Timu ya wanafunzi wa CLUB HOTEK TSS iliwakilisha shule kwa fahari katika Mashindano ya Kitaifa ya Ujuzi wa TVET...",
        faqLabel: "MASWALI YANAYOULIZWA MARA KWA MARA",
        faqHeading1: "Una Maswali?", faqHeading2: "Tuna Majibu.",
        faqTagline: "Bofya swali lolote hapa chini kuona jibu.",
        faqQ1: "Ninawezaje kujiandikisha katika CLUB HOTEK TSS?",
        faqA1: "Unaweza kujiandikisha kwa kutembelea shule ana kwa ana katika Sekta ya Gisozi, Wilaya ya Gasabo, au kwa kupiga simu 0788301833 / 0788627310.",
        faqQ2: "Ni programu gani mnatoa?",
        faqA2: "CLUB HOTEK TSS inatoa programu sita kuu za TVET.",
        faqQ3: "Ni mahitaji gani ya udahili?",
        faqA3: "Mahitaji hutofautiana kwa kila programu. Kwa ujumla, waombaji wanapaswa kuwa wamemaliza angalau elimu ya msingi (P6) au Kidato cha Kawaida (S3).",
        faqQ4: "Ninawezaje kuwasiliana na shule?",
        faqA4: "Unaweza kutufikia kwa simu 0788301833 au 0788627310, kwa barua pepe clubhotek@gmail.com.",
        faqQ5: "CLUB HOTEK TSS iko wapi?",
        faqA5: "CLUB HOTEK TSS iko katika Sekta ya Gisozi, Wilaya ya Gasabo, Kigali, Rwanda.",
        faqQ6: "Mnatoa Maendeleo ya Programu?",
        faqA6: "Maendeleo ya Programu kwa sasa hayatolewa kama programu huru.",
        faqQ7: "Mnatoa Multimedia?",
        faqA7: "Ndiyo. Multimedia ni mojawapo ya ufundi wetu kuu wa TVET.",
        faqQ8: "Usajili unaanza lini?",
        faqA8: "Usajili katika CLUB HOTEK TSS unaendelea kwa mwaka ujao wa masomo.",
        faqQ9: "Kuna malazi kwa wanafunzi?",
        faqA9: "Shule kwa sasa haitoi malazi ya ndani ya shule.",
        faqQ10: "Ninawezaje kuomba mtandaoni?",
        faqA10: "Ili kuomba mtandaoni, nenda kwenye sehemu ya Udahili na jaza fomu ya Omba Taarifa.",
        ctaLabel: "HITAMO NEZA UTEGURE EJO HEZA",
        ctaHeading: "Mustakabali Wako Unaanza na Ujuzi.",
        ctaDesc: "Jiunge na CLUB HOTEK TSS na ujenge ujuzi wa vitendo kwa maisha.",
        ctaBtn: "Omba / Wasiliana Nasi",
        contactLabel: "WASILIANA NASI",
        contactHeading1: "Wasiliana", contactHeading2: "Nasi",
        contactTagline: "Tuko tayari kutoa taarifa zaidi kuhusu programu zetu.",
        contactLocTitle: "Mahali Petu", contactPhoneTitle: "Simu",
        contactEmailTitle: "Barua pepe", contactInfoTitle: "Taarifa za Shule",
        contactInfoDesc: "Ujuzi wa Vitendo na Maendeleo ya Kazi",
        contactWhatsapp: "Ongea nasi kwenye WhatsApp",
        contactFormHeading: "Tutumie Ujumbe",
        footerQuick: "Viungo vya Haraka", footerAbout: "Kuhusu Sisi", footerTrades: "Ufundi Wetu",
        footerOurTrades: "Ufundi Wetu", footerContact: "Wasiliana",
        footerRights: "Haki Zote Zimehifadhiwa.",
        footerTagline: "Ujuzi wa Vitendo kwa Maisha Bora",
        toastSuccess: "Ujumbe umetumwa kwa mafanikio.",
        toastContact: "Asante! Ujumbe wako umepokelewa.",
        toastApplication: "Ombi la maombi limewasilishwa kwa mafanikio.",
        toastNewsletter: "Asante kwa kujiandikisha!",
        newsletterTitle: "Endelea Kupata Habari na CLUB HOTEK TSS",
        newsletterText: "Jiandikishe ili kupokea habari za udahili, matukio na programu.",
        newsletterPlaceholder: "Barua pepe yako",
        newsletterBtn: "Jiandikishe"
    },
    rw: {
        loading: "Biratunganya...",
        welcomeMarquee: "Murakaza neza kuri CLUB HOTEK TSS, kwiyandikisha biratangira mu mwaka w'amashuri utaha 🎓🎓🎓",
        navHome: "Ahabanza", navAbout: "Ibitwerekeye", navTrades: "Ubumenyi", navPerformance: "Imikorere",
        navAdmissions: "Kwiyandikisha", navGallery: "Amafoto", navNews: "Amakuru n'Ibikorwa",
        navFaq: "Ibibazo", navContact: "Twandikire", navMenu: "Menyu Yihuse",
        heroBadge: "Uburezi bw'Ubumenyi n'Ubuhanga",
        heroWelcome: "Murakaza neza kuri",
        heroSlogan: "Hitamo neza utegure ejo heza",
        heroSloganSub: "Hitamo neza witegure ejo heza",
        heroDescription: "Kubaka ubumenyi bufatika, ubuhanzi, ubunyangamugayo n'ubucuruzi ku ejo heza.",
        heroBtnTrades: "Reba Ubumenyi Bwacu",
        heroBtnApply: "Saba Ubu",
        aboutLabel: "IBYEREKEYE ISHURI RYACU",
        aboutWelcome: "Murakaza neza kuri",
        aboutTagline: "Ahantu ubumenyi bufatika buhura n'amahirwe.",
        aboutExpCard: "Uburezi Bufatika",
        aboutMiniTitle: "UBUMENYI BUFATIKA KU BUZIMA BWIZA",
        aboutHeading: "Guha abanyeshuri ubumenyi bufatika, bw'ikoranabuhanga n'ubw'umwuga.",
        aboutP1: "CLUB HOTEK TSS ni ikigo cy'Uburezi bw'Ubumenyi n'Ubuhanga.",
        aboutP2: "Amahugurwa yacu yibanda ku kwiga gufatika, ubuhanzi, ubunyangamugayo, indero n'udushya.",
        aboutF1: "Ubumenyi Bufatika", aboutF2: "Amahugurwa y'Umwuga",
        aboutF3: "Ubucuruzi", aboutF4: "Udushya n'Ubuhanzi",
        aboutBtn: "Menya Gahunda Zacu",
        vmbLabel: "UMWIRONDORO WACU",
        vmbHeading1: "Icyerekezo, Intego na", vmbHeading2: "Amateka",
        vmbTagline: "Menya urufatiro rukomeza CLUB HOTEK TSS imbere.",
        visionTitle: "Icyerekezo Cyacu",
        visionText: "Kuba ikigo cya TVET kiyoboye kibyara abanyeshuri bafite ubumenyi, udushya n'umwuga.",
        missionTitle: "Intego Yacu",
        missionText: "Gutanga amahugurwa meza, afatika kandi yerekeye isoko.",
        backgroundTitle: "Amateka Yacu",
        backgroundText: "CLUB HOTEK TSS yashyizweho gukemura ikibazo cy'ubumenyi bufatika bukura mu rubyiruko mu Rwanda.",
        stat1: "Gahunda Nyamukuru", stat2: "Kwibanda ku Bumenyi",
        stat3: "Kwiga gufatika", stat4: "Udushya",
        tradesLabel: "GAHUNDA ZACU",
        tradesHeading1: "Reba", tradesHeading2: "Ubumenyi bwa TVET",
        tradesTagline: "Hitamo inzira y'umwuga ifatika kandi utere imbere ubumenyi ku ejo hawe.",
        trade1Title: "Ibikorwa by'Ibiryo n'Ibinyobwa",
        trade1Desc: "Amahugurwa afatika mu gukora ibiryo, ibikorwa bya resitora, ubwakiranyi n'ibinyobwa.",
        trade2Title: "Ubukanishi bw'Imodoka",
        trade2Desc: "Gusana imodoka gufatika, kubungabunga, gupima n'ubumenyi bw'ubukanishi.",
        trade3Title: "Ubuhanzi bw'Guteka",
        trade3Desc: "Kwagura guteka kwa umwuga, gutegura ibiryo, gucunga igikoni.",
        trade4Title: "Gudoda",
        trade4Desc: "Kwiga gushushanya imyenda, gukata, kudoda, imideli no gukora imyenda.",
        trade5Title: "Gusuka no Koza Umusatsi",
        trade5Desc: "Amahugurwa afatika mu kwita ku musatsi, gusuka, serivisi z'ubwiza.",
        trade6Title: "Multimedia",
        trade6Desc: "Kwiga gufata amafoto, gukora videwo, gushushanya, itangazamakuru rya digitale.",
        whyLabel: "KUKI CLUB HOTEK TSS?",
        whyHeading1: "Kubaka Ubumenyi.", whyHeading2: "Kubaka Ejo Hazaza.",
        why1Title: "Amahugurwa Afatika",
        why1Desc: "Abanyeshuri bagura ubumenyi bufatika binyuze mu bikorwa nyakuri n'imyitozo yo mu kigo.",
        why2Title: "Ubumenyi bw'Umwuga",
        why2Desc: "Twitegura abanyeshuri ku kazi k'umwuga n'amahirwe y'akazi agezweho.",
        why3Title: "Udushya",
        why3Desc: "Ubuhanzi, ubucuruzi no gukemura ibibazo biterwa inkunga mu mahugurwa yose.",
        why4Title: "Umuryango",
        why4Desc: "Duhimiza gukorera hamwe, indero, icyubahiro n'ubwenegihugu bushoboka.",
        admLabel: "KWANDIKISHA",
        admHeading1: "Tangira", admHeading2: "Urugendo rwawe rw'Umwuga", admHeading3: "Uyu Munsi.",
        admDesc: "Hitamo gahunda ya TVET ifatika kandi witegure akazi, ubucuruzi n'ejo heza.",
        admP1: "Amahugurwa afatika", admP2: "Gahunda zerekeye umwuga",
        admP3: "Guteza imbere ubumenyi", admP4: "Amahirwe y'ubucuruzi",
        appLabel: "GUSABA", appHeading: "Saba Amakuru",
        appDesc: "Twandikire ku ishuri kumenya byinshi ku kwandikisha.",
        formName: "Amazina Yombi", formPhone: "Telefone",
        formTrade: "Gahunda / Ubumenyi", formTradeSelect: "Hitamo gahunda",
        formMessage: "Ubutumwa", formSend: "Ohereza Ubusabe",
        formEmail: "Imeyili", formSubject: "Ingingo",
        formMessage2: "Ubutumwa", formSendMessage: "Ohereza Ubutumwa",
        galleryLabel: "AMAFOTO YACU",
        galleryHeading1: "Ubuzima kuri",
        galleryTagline: "Reba ishuri ryacu, abanyeshuri, amahugurwa n'ibikorwa.",
        filterAll: "Byose", filterSchool: "Ishuri", filterStudents: "Abanyeshuri",
        filterWorkshop: "Amahugurwa", filterEvents: "Ibikorwa",
        gal1Title: "Ishuri Ryacu", gal2Title: "Abanyeshuri Bacu",
        gal3Title: "Amahugurwa Afatika", gal4Title: "Igikorwa cy'Ishuri",
        gal5Title: "Kwiga Hamwe", gal6Title: "Guteza Imbere Ubumenyi",
        perfLabel: "IMIKORERE Y'ABANYESHURI",
        perfHeading1: "Intsinzi y'", perfHeading2: "Abanyeshuri Bacu",
        perfTagline: "Incamake y'intsinzi z'abanyeshuri bacu mu bumenyi n'imyaka y'amashuri.",
        perfKpi1: "Igipimo cyo gutsinda Ikizamini cy'Igihugu (%)", perfKpi2: "Akazi k'Abahitanye (%)",
        perfKpi3: "Ibihembo by'Amarushanwa y'Ubumenyi", perfKpi4: "Kunyurwa n'Abanyeshuri (%)",
        perfTrade1: "Ibikorwa by'Ibiryo n'Ibinyobwa", perfTrade2: "Ubukanishi bw'Imodoka",
        perfTrade3: "Ubuhanzi bw'Guteka", perfTrade4: "Gudoda",
        perfTrade5: "Gusuka no Koza Umusatsi", perfTrade6: "Multimedia",
        perfPassRate: "Igipimo cyo gutsinda", perfEmployment: "Igipimo cy'akazi",
        visitorLabel: "ABASURA URUBUGA",
        visitorHeading: "Murakoze kutugenderera!",
        visitorTotalLabel: "Insura Byose", visitorTodayLabel: "Uyu Munsi",
        visitorUniqueLabel: "Insura Zawe", visitorStatusLabel: "Imiterere",
        visitorNote: "Imibare y'abasura ivugururwa ako kanya. Nta makuru bwite akusanywa.",
        newsTitle: "Inkuru za Vuba", readMore: "Soma Byinshi", backToNews: "Subira ku Makuru",
        recentPosts: "INKURU ZA VUBA", categories: "IBYICIRO", tags: "IBIMENYETSO",
        catCommunity: "Umuryango", catEvents: "Ibikorwa", catAchievements: "Intsinzi",
        catCampus: "Ikigo", catCompetitions: "Amarushanwa",
        post1Title: "CLUB HOTEK TSS Yimakaza Inkunga y'Umuryango binyuze mu Gahunda y'Ubumenyi",
        post1Excerpt: "Ku wa 11 Gicurasi 2026, CLUB HOTEK TSS yongeye kwerekana icyemezo cyayo gikomeye...",
        post2Title: "CLUB HOTEK TSS Yizihiza Umunsi w'Umuco Uri Mu Mabara",
        post2Excerpt: "CLUB HOTEK TSS yari yuzuye ibyishimo, amabara, n'umunezero ku wa Gatanu, 24 Gashyantare...",
        post3Title: "CLUB HOTEK TSS Yaheshejwe Igihembo cy'Ishuri Rya Mbere rya TVET muri Gasabo",
        post3Excerpt: "CLUB HOTEK TSS yishimira gutangaza ko yemewe nk'ikigo kimwe mu bigo bya mbere bya TVET...",
        post4Title: "Workshop Nshya ya Multimedia Yafunguwe Ku Muhora",
        post4Excerpt: "CLUB HOTEK TSS yafunguye ku muhora Workshop nshya ya Multimedia...",
        post5Title: "Abanyeshuri Baragenda Neza mu Marushanwa y'Igihugu y'Ubumenyi",
        post5Excerpt: "Itsinda ry'abanyeshuri ba CLUB HOTEK TSS ryahagarariye ishuri n'ishema mu Marushanwa y'Igihugu...",
        faqLabel: "IBIBAZO BIKUNZWE KUBAZWA",
        faqHeading1: "Ufite Ibibazo?", faqHeading2: "Dufite Ibisubizo.",
        faqTagline: "Kanda ikibazo icyo ari cyo cyose hepfo urebe igisubizo.",
        faqQ1: "Nashobora kwiyandikisha gute kuri CLUB HOTEK TSS?",
        faqA1: "Ushobora kwiyandikisha usura ishuri mu Murenge wa Gisozi, Akarere ka Gasabo, cyangwa uhamagare 0788301833 / 0788627310.",
        faqQ2: "Ni gahunda izihe mutanga?",
        faqA2: "CLUB HOTEK TSS itanga gahunda eshanu nyamukuru za TVET.",
        faqQ3: "Ni ibihe bisabwa mu kwiyandikisha?",
        faqA3: "Ibisabwa bitandukana bitewe na gahunda. Muri rusange, abasaba bagomba kuba barangije nibura amashuri abanza (P6) cyangwa Ordinary Level (S3).",
        faqQ4: "Nashobora gutumanaho n'ishuri gute?",
        faqA4: "Ushobora kutugeraho kuri telefone 0788301833 cyangwa 0788627310, kuri imeyili clubhotek@gmail.com.",
        faqQ5: "CLUB HOTEK TSS iherereye he?",
        faqA5: "CLUB HOTEK TSS iherereye mu Murenge wa Gisozi, Akarere ka Gasabo, Kigali, u Rwanda.",
        faqQ6: "Mutanga Software Development?",
        faqA6: "Software Development ntabwo itangwa nk'igahunda yigenga ubu.",
        faqQ7: "Mutanga Multimedia?",
        faqA7: "Yego. Multimedia ni imwe mu bumenyi bwacu nyamukuru bwa TVET.",
        faqQ8: "Kwiyandikisha bitangira ryari?",
        faqA8: "Kwiyandikisha kuri CLUB HOTEK TSS biratangira ubu mu mwaka utaha w'amashuri.",
        faqQ9: "Hari aho abanyeshuri baba?",
        faqA9: "Ishuri ntabwo ritanga aho kuba mu kigo ubu.",
        faqQ10: "Nashobora gusaba kuri interineti gute?",
        faqA10: "Kugira ngo usabe kuri interineti, jya mu gice cya Kwiyandikisha hanyuma wuzuze ifishi ya Saba Amakuru.",
        ctaLabel: "HITAMO NEZA UTEGURE EJO HEZA",
        ctaHeading: "Ejo Hazaza Hawe Hatangira n'Ubumenyi.",
        ctaDesc: "Injira muri CLUB HOTEK TSS kandi wubake ubumenyi bufatika ku buzima.",
        ctaBtn: "Saba / Twandikire",
        contactLabel: "TWANDIKIRE",
        contactHeading1: "Duhamagare", contactHeading2: "Twandikire",
        contactTagline: "Twiteguye gutanga amakuru menshi ku gahunda zacu.",
        contactLocTitle: "Aho Turi", contactPhoneTitle: "Telefone",
        contactEmailTitle: "Imeyili", contactInfoTitle: "Amakuru y'Ishuri",
        contactInfoDesc: "Ubumenyi Bufatika n'Iterambere ry'Umwuga",
        contactWhatsapp: "Vugana natwe kuri WhatsApp",
        contactFormHeading: "Tutumaho Ubutumwa",
        footerQuick: "Ihuza byihuse", footerAbout: "Ibitwerekeye", footerTrades: "Ubumenyi Bwacu",
        footerOurTrades: "Ubumenyi Bwacu", footerContact: "Twandikire",
        footerRights: "Uburenganzira bwose burafitwe.",
        footerTagline: "Ubumenyi Bufatika ku Buzima Bwiza",
        toastSuccess: "Ubutumwa bwoherejwe neza.",
        toastContact: "Murakoze! Ubutumwa bwanyu bwakiriwe.",
        toastApplication: "Ubusabe bw'kwiyandikisha bwoherejwe neza.",
        toastNewsletter: "Murakoze kwiyandikisha!",
        newsletterTitle: "Komeza Umakuru na CLUB HOTEK TSS",
        newsletterText: "Iyandikishe kugira ngo ubone amakuru y'kwiyandikisha, ibikorwa na gahunda.",
        newsletterPlaceholder: "Imeyili yawe",
        newsletterBtn: "Iyandikishe"
    },
    es: {
        loading: "Cargando...",
        welcomeMarquee: "Bienvenido a CLUB HOTEK TSS, las admisiones están en curso para el próximo año académico 🎓🎓🎓",
        navHome: "Inicio", navAbout: "Acerca de", navTrades: "Oficios", navPerformance: "Rendimiento",
        navAdmissions: "Admisiones", navGallery: "Galería", navNews: "Noticias y Eventos",
        navFaq: "FAQ", navContact: "Contacto", navMenu: "Menú Rápido",
        heroBadge: "Educación Técnica y Vocacional",
        heroWelcome: "Bienvenido a",
        heroSlogan: "Hitamo neza utegure ejo heza",
        heroSloganSub: "Elige bien para preparar un mañana mejor",
        heroDescription: "Desarrollando habilidades prácticas, creatividad, profesionalismo y emprendimiento para un futuro mejor.",
        heroBtnTrades: "Explora Nuestros Oficios",
        heroBtnApply: "Solicita Ahora",
        aboutLabel: "SOBRE NUESTRA ESCUELA",
        aboutWelcome: "Bienvenido a",
        aboutTagline: "Un lugar donde las habilidades prácticas se encuentran con la oportunidad.",
        aboutExpCard: "Educación Práctica",
        aboutMiniTitle: "HABILIDADES PRÁCTICAS PARA UNA VIDA MEJOR",
        aboutHeading: "Empoderando a los estudiantes con habilidades prácticas, técnicas y profesionales.",
        aboutP1: "CLUB HOTEK TSS es una institución de Educación Técnica y Vocacional.",
        aboutP2: "Nuestra formación se centra en el aprendizaje práctico, la creatividad, el profesionalismo, la disciplina y la innovación.",
        aboutF1: "Habilidades Prácticas", aboutF2: "Formación Profesional",
        aboutF3: "Emprendimiento", aboutF4: "Innovación y Creatividad",
        aboutBtn: "Descubre Nuestros Programas",
        vmbLabel: "NUESTRA IDENTIDAD",
        vmbHeading1: "Visión, Misión y", vmbHeading2: "Antecedentes",
        vmbTagline: "Conoce la base que impulsa a CLUB HOTEK TSS hacia adelante.",
        visionTitle: "Nuestra Visión",
        visionText: "Convertirnos en una institución TVET líder que produce graduados competentes, innovadores y profesionales.",
        missionTitle: "Nuestra Misión",
        missionText: "Proporcionar formación de calidad, práctica y orientada al mercado.",
        backgroundTitle: "Nuestros Antecedentes",
        backgroundText: "CLUB HOTEK TSS fue establecido para abordar la creciente demanda de habilidades prácticas entre los jóvenes en Ruanda.",
        stat1: "Programas Principales", stat2: "Enfoque en Habilidades",
        stat3: "Aprendizaje Práctico", stat4: "Innovación",
        tradesLabel: "NUESTROS PROGRAMAS",
        tradesHeading1: "Explora Nuestros", tradesHeading2: "Oficios TVET",
        tradesTagline: "Elige una carrera práctica y desarrolla habilidades para tu futuro.",
        trade1Title: "Operaciones de Alimentos y Bebidas",
        trade1Desc: "Formación práctica en producción de alimentos, operaciones de restaurante, hospitalidad y servicios de bebidas.",
        trade2Title: "Mecánica Automotriz",
        trade2Desc: "Reparación automotriz práctica, mantenimiento, diagnóstico y habilidades mecánicas.",
        trade3Title: "Artes Culinarias",
        trade3Desc: "Desarrolla cocina profesional, preparación de alimentos, gestión de cocina.",
        trade4Title: "Sastrería",
        trade4Desc: "Aprende diseño de prendas, corte, costura, moda y producción de ropa.",
        trade5Title: "Peluquería",
        trade5Desc: "Formación práctica en cuidado del cabello, estilismo, servicios de belleza.",
        trade6Title: "Multimedia",
        trade6Desc: "Aprende fotografía, producción de video, diseño gráfico, medios digitales.",
        whyLabel: "¿POR QUÉ CLUB HOTEK TSS?",
        whyHeading1: "Construyendo Habilidades.", whyHeading2: "Construyendo Futuros.",
        why1Title: "Formación Práctica",
        why1Desc: "Los estudiantes desarrollan habilidades prácticas a través de actividades del mundo real.",
        why2Title: "Habilidades Profesionales",
        why2Desc: "Preparamos a los estudiantes para entornos laborales profesionales y oportunidades de carrera modernas.",
        why3Title: "Innovación",
        why3Desc: "Se fomenta la creatividad, el emprendimiento y la resolución de problemas.",
        why4Title: "Comunidad",
        why4Desc: "Fomentamos el trabajo en equipo, la disciplina, el respeto y la ciudadanía responsable.",
        admLabel: "ADMISIONES",
        admHeading1: "Comienza Tu", admHeading2: "Viaje Profesional", admHeading3: "Hoy.",
        admDesc: "Elige un programa TVET práctico y prepárate para el empleo, el emprendimiento y un futuro mejor.",
        admP1: "Formación práctica", admP2: "Programas orientados a la carrera",
        admP3: "Desarrollo de habilidades", admP4: "Oportunidades de emprendimiento",
        appLabel: "SOLICITUD", appHeading: "Solicitar Información",
        appDesc: "Contacta a la escuela para obtener más información sobre las admisiones.",
        formName: "Nombre Completo", formPhone: "Teléfono",
        formTrade: "Programa / Oficio", formTradeSelect: "Selecciona un programa",
        formMessage: "Mensaje", formSend: "Enviar Solicitud",
        formEmail: "Correo", formSubject: "Asunto",
        formMessage2: "Mensaje", formSendMessage: "Enviar Mensaje",
        galleryLabel: "NUESTRA GALERÍA",
        galleryHeading1: "Vida en",
        galleryTagline: "Explora nuestra escuela, estudiantes, talleres y actividades.",
        filterAll: "Todo", filterSchool: "Escuela", filterStudents: "Estudiantes",
        filterWorkshop: "Talleres", filterEvents: "Eventos",
        gal1Title: "Nuestra Escuela", gal2Title: "Nuestros Estudiantes",
        gal3Title: "Formación Práctica", gal4Title: "Evento Escolar",
        gal5Title: "Aprendiendo Juntos", gal6Title: "Desarrollo de Habilidades",
        perfLabel: "RENDIMIENTO ESTUDIANTIL",
        perfHeading1: "Logros de", perfHeading2: "Nuestros Estudiantes",
        perfTagline: "Una instantánea del éxito de nuestros estudiantes.",
        perfKpi1: "Tasa de Aprobación del Examen Nacional (%)", perfKpi2: "Empleo de Graduados (%)",
        perfKpi3: "Premios de Competencias de Habilidades", perfKpi4: "Satisfacción Estudiantil (%)",
        perfTrade1: "Operaciones de Alimentos y Bebidas", perfTrade2: "Mecánica Automotriz",
        perfTrade3: "Artes Culinarias", perfTrade4: "Sastrería",
        perfTrade5: "Peluquería", perfTrade6: "Multimedia",
        perfPassRate: "Tasa de Aprobación", perfEmployment: "Tasa de Empleo",
        visitorLabel: "VISITANTES DEL SITIO",
        visitorHeading: "¡Gracias por visitarnos!",
        visitorTotalLabel: "Visitas Totales", visitorTodayLabel: "Hoy",
        visitorUniqueLabel: "Tus Visitas", visitorStatusLabel: "Estado",
        visitorNote: "Las estadísticas de visitantes se actualizan en tiempo real. No se recopilan datos personales.",
        newsTitle: "Publicaciones Recientes", readMore: "Leer Más", backToNews: "Volver a Noticias",
        recentPosts: "PUBLICACIONES RECIENTES", categories: "CATEGORÍAS", tags: "ETIQUETAS",
        catCommunity: "Comunidad", catEvents: "Eventos", catAchievements: "Logros",
        catCampus: "Campus", catCompetitions: "Competiciones",
        post1Title: "CLUB HOTEK TSS Fortalece el Apoyo Comunitario a Través del Programa de Habilidades",
        post1Excerpt: "El 11 de mayo de 2026, CLUB HOTEK TSS demostró una vez más su fuerte compromiso...",
        post2Title: "CLUB HOTEK TSS Celebra un Día Cultural Colorido e Inspirador",
        post2Excerpt: "CLUB HOTEK TSS se llenó de emoción, color y alegría el viernes 24 de febrero...",
        post3Title: "CLUB HOTEK TSS Galardonada como Mejor Escuela TVET en Gasabo",
        post3Excerpt: "CLUB HOTEK TSS se enorgullece en anunciar que ha sido oficialmente reconocida...",
        post4Title: "Nuevo Taller de Multimedia Oficialmente Inaugurado",
        post4Excerpt: "CLUB HOTEK TSS ha inaugurado oficialmente un nuevo Taller de Multimedia...",
        post5Title: "Estudiantes Brillan en la Competencia Nacional de Habilidades",
        post5Excerpt: "Un equipo de estudiantes de CLUB HOTEK TSS representó a la escuela con orgullo...",
        faqLabel: "PREGUNTAS FRECUENTES",
        faqHeading1: "¿Tienes Preguntas?", faqHeading2: "Tenemos Respuestas.",
        faqTagline: "Haz clic en cualquier pregunta a continuación para ver la respuesta.",
        faqQ1: "¿Cómo puedo registrarme en CLUB HOTEK TSS?",
        faqA1: "Puedes registrarte visitando la escuela en persona en el Sector de Gisozi, Distrito de Gasabo, o llamando al 0788301833 / 0788627310.",
        faqQ2: "¿Qué programas ofrecen?",
        faqA2: "CLUB HOTEK TSS ofrece seis programas principales de TVET.",
        faqQ3: "¿Cuáles son los requisitos de admisión?",
        faqA3: "Los requisitos varían según el programa. En general, los solicitantes deben haber completado al menos la educación primaria (P6) o el Nivel Ordinario (S3).",
        faqQ4: "¿Cómo puedo contactar a la escuela?",
        faqA4: "Puedes contactarnos por teléfono al 0788301833 o 0788627310, por correo electrónico a clubhotek@gmail.com.",
        faqQ5: "¿Dónde está ubicado CLUB HOTEK TSS?",
        faqA5: "CLUB HOTEK TSS está ubicado en el Sector de Gisozi, Distrito de Gasabo, Kigali, Ruanda.",
        faqQ6: "¿Ofrecen Desarrollo de Software?",
        faqA6: "El Desarrollo de Software actualmente no se ofrece como programa independiente.",
        faqQ7: "¿Ofrecen Multimedia?",
        faqA7: "Sí. Multimedia es uno de nuestros principales oficios TVET.",
        faqQ8: "¿Cuándo comienza el registro?",
        faqA8: "El registro en CLUB HOTEK TSS está actualmente en curso para el próximo año académico.",
        faqQ9: "¿Hay alojamiento para estudiantes?",
        faqA9: "La escuela actualmente no proporciona alojamiento en el campus.",
        faqQ10: "¿Cómo puedo aplicar en línea?",
        faqA10: "Para aplicar en línea, ve a la sección de Admisiones y completa el formulario Solicitar Información.",
        ctaLabel: "HITAMO NEZA UTEGURE EJO HEZA",
        ctaHeading: "Tu Futuro Comienza con una Habilidad.",
        ctaDesc: "Únete a CLUB HOTEK TSS y construye habilidades prácticas para la vida.",
        ctaBtn: "Solicitar / Contáctanos",
        contactLabel: "CONTÁCTANOS",
        contactHeading1: "Ponte en", contactHeading2: "Contacto",
        contactTagline: "Estamos listos para proporcionar más información sobre nuestros programas.",
        contactLocTitle: "Nuestra Ubicación", contactPhoneTitle: "Teléfono",
        contactEmailTitle: "Correo", contactInfoTitle: "Información Escolar",
        contactInfoDesc: "Habilidades Prácticas y Desarrollo Profesional",
        contactWhatsapp: "Chatea con nosotros en WhatsApp",
        contactFormHeading: "Envíanos un Mensaje",
        footerQuick: "Enlaces Rápidos", footerAbout: "Sobre Nosotros", footerTrades: "Nuestros Oficios",
        footerOurTrades: "Nuestros Oficios", footerContact: "Contacto",
        footerRights: "Todos los Derechos Reservados.",
        footerTagline: "Habilidades Prácticas para una Vida Mejor",
        toastSuccess: "Mensaje enviado con éxito.",
        toastContact: "¡Gracias! Tu mensaje ha sido recibido.",
        toastApplication: "Solicitud enviada con éxito.",
        toastNewsletter: "¡Gracias por suscribirte!",
        newsletterTitle: "Mantente Actualizado con CLUB HOTEK TSS",
        newsletterText: "Suscríbete para recibir noticias de admisiones, eventos y actualizaciones de programas.",
        newsletterPlaceholder: "Tu correo electrónico",
        newsletterBtn: "Suscribirse"
    },
    it: {
        loading: "Caricamento...",
        welcomeMarquee: "Benvenuto a CLUB HOTEK TSS, le iscrizioni sono in corso per il prossimo anno accademico 🎓🎓🎓",
        navHome: "Home", navAbout: "Chi siamo", navTrades: "Mestieri", navPerformance: "Prestazioni",
        navAdmissions: "Ammissioni", navGallery: "Galleria", navNews: "Notizie ed Eventi",
        navFaq: "FAQ", navContact: "Contatti", navMenu: "Menu Rapido",
        heroBadge: "Istruzione Tecnica e Professionale",
        heroWelcome: "Benvenuto a",
        heroSlogan: "Hitamo neza utegure ejo heza",
        heroSloganSub: "Scegli bene per preparare un domani migliore",
        heroDescription: "Sviluppare competenze pratiche, creatività, professionalità e imprenditorialità per un futuro migliore.",
        heroBtnTrades: "Esplora i Nostri Mestieri",
        heroBtnApply: "Iscriviti Ora",
        aboutLabel: "CHI SIAMO",
        aboutWelcome: "Benvenuto a",
        aboutTagline: "Un luogo dove le competenze pratiche incontrano l'opportunità.",
        aboutExpCard: "Educazione Pratica",
        aboutMiniTitle: "COMPETENZE PRATICHE PER UNA VITA MIGLIORE",
        aboutHeading: "Formare gli studenti con competenze pratiche, tecniche e professionali.",
        aboutP1: "CLUB HOTEK TSS è un'istituzione di Istruzione Tecnica e Professionale.",
        aboutP2: "La nostra formazione si concentra sull'apprendimento pratico, la creatività, la professionalità, la disciplina e l'innovazione.",
        aboutF1: "Competenze Pratiche", aboutF2: "Formazione Professionale",
        aboutF3: "Imprenditorialità", aboutF4: "Innovazione e Creatività",
        aboutBtn: "Scopri i Nostri Programmi",
        vmbLabel: "LA NOSTRA IDENTITÀ",
        vmbHeading1: "Visione, Missione e", vmbHeading2: "Background",
        vmbTagline: "Scopri le fondamenta che spingono CLUB HOTEK TSS in avanti.",
        visionTitle: "La Nostra Visione",
        visionText: "Diventare un'istituzione TVET leader che produce diplomati competenti, innovativi e professionali.",
        missionTitle: "La Nostra Missione",
        missionText: "Fornire una formazione di qualità, pratica e orientata al mercato.",
        backgroundTitle: "Il Nostro Background",
        backgroundText: "CLUB HOTEK TSS è stato fondato per rispondere alla crescente domanda di competenze pratiche tra i giovani in Ruanda.",
        stat1: "Programmi Principali", stat2: "Focus sulle Competenze",
        stat3: "Apprendimento Pratico", stat4: "Innovazione",
        tradesLabel: "I NOSTRI PROGRAMMI",
        tradesHeading1: "Esplora i Nostri", tradesHeading2: "Mestieri TVET",
        tradesTagline: "Scegli un percorso professionale pratico e sviluppa competenze per il tuo futuro.",
        trade1Title: "Operazioni di Cibo e Bevande",
        trade1Desc: "Formazione pratica nella produzione alimentare, operazioni di ristorante, ospitalità e servizi di bevande.",
        trade2Title: "Meccanica Automobilistica",
        trade2Desc: "Riparazione automobilistica pratica, manutenzione, diagnostica e competenze meccaniche.",
        trade3Title: "Arti Culinarie",
        trade3Desc: "Sviluppa cucina professionale, preparazione del cibo, gestione della cucina.",
        trade4Title: "Sartoria",
        trade4Desc: "Impara il design dell'abbigliamento, taglio, cucito, moda e produzione di abbigliamento.",
        trade5Title: "Parrucchiere",
        trade5Desc: "Formazione pratica nella cura dei capelli, styling, servizi di bellezza.",
        trade6Title: "Multimedia",
        trade6Desc: "Impara fotografia, produzione video, graphic design, media digitali.",
        whyLabel: "PERCHÉ CLUB HOTEK TSS?",
        whyHeading1: "Costruire Competenze.", whyHeading2: "Costruire Futuri.",
        why1Title: "Formazione Pratica",
        why1Desc: "Gli studenti sviluppano competenze pratiche attraverso attività del mondo reale.",
        why2Title: "Competenze Professionali",
        why2Desc: "Prepariamo gli studenti ad ambienti di lavoro professionali e moderne opportunità di carriera.",
        why3Title: "Innovazione",
        why3Desc: "Creatività, imprenditorialità e risoluzione dei problemi sono incoraggiati.",
        why4Title: "Comunità",
        why4Desc: "Incoraggiamo il lavoro di squadra, la disciplina, il rispetto e la cittadinanza responsabile.",
        admLabel: "AMMISSIONI",
        admHeading1: "Inizia il Tuo", admHeading2: "Percorso Professionale", admHeading3: "Oggi.",
        admDesc: "Scegli un programma TVET pratico e preparati al lavoro, all'imprenditorialità e a un futuro migliore.",
        admP1: "Formazione pratica", admP2: "Programmi orientati alla carriera",
        admP3: "Sviluppo delle competenze", admP4: "Opportunità imprenditoriali",
        appLabel: "DOMANDA", appHeading: "Richiedi Informazioni",
        appDesc: "Contatta la scuola per saperne di più sulle ammissioni.",
        formName: "Nome Completo", formPhone: "Telefono",
        formTrade: "Programma / Mestiere", formTradeSelect: "Seleziona un programma",
        formMessage: "Messaggio", formSend: "Invia Richiesta",
        formEmail: "Email", formSubject: "Oggetto",
        formMessage2: "Messaggio", formSendMessage: "Invia Messaggio",
        galleryLabel: "LA NOSTRA GALLERIA",
        galleryHeading1: "Vita a",
        galleryTagline: "Esplora la nostra scuola, studenti, laboratori e attività.",
        filterAll: "Tutto", filterSchool: "Scuola", filterStudents: "Studenti",
        filterWorkshop: "Laboratori", filterEvents: "Eventi",
        gal1Title: "La Nostra Scuola", gal2Title: "I Nostri Studenti",
        gal3Title: "Formazione Pratica", gal4Title: "Evento Scolastico",
        gal5Title: "Imparare Insieme", gal6Title: "Sviluppo delle Competenze",
        perfLabel: "RENDIMENTO DEGLI STUDENTI",
        perfHeading1: "I Risultati dei", perfHeading2: "Nostri Studenti",
        perfTagline: "Un'istantanea del successo dei nostri studenti.",
        perfKpi1: "Tasso di Superamento Esame Nazionale (%)", perfKpi2: "Occupazione dei Diplomati (%)",
        perfKpi3: "Premi di Competizioni di Competenze", perfKpi4: "Soddisfazione degli Studenti (%)",
        perfTrade1: "Operazioni di Cibo e Bevande", perfTrade2: "Meccanica Automobilistica",
        perfTrade3: "Arti Culinarie", perfTrade4: "Sartoria",
        perfTrade5: "Parrucchiere", perfTrade6: "Multimedia",
        perfPassRate: "Tasso di Superamento", perfEmployment: "Tasso di Occupazione",
        visitorLabel: "VISITATORI DEL SITO",
        visitorHeading: "Grazie per averci visitato!",
        visitorTotalLabel: "Visite Totali", visitorTodayLabel: "Oggi",
        visitorUniqueLabel: "Le Tue Visite", visitorStatusLabel: "Stato",
        visitorNote: "Le statistiche dei visitatori vengono aggiornate in tempo reale. Nessun dato personale viene raccolto.",
        newsTitle: "Post Recenti", readMore: "Leggi di Più", backToNews: "Torna alle Notizie",
        recentPosts: "POST RECENTI", categories: "CATEGORIE", tags: "TAG",
        catCommunity: "Comunità", catEvents: "Eventi", catAchievements: "Risultati",
        catCampus: "Campus", catCompetitions: "Competizioni",
        post1Title: "CLUB HOTEK TSS Rafforza il Supporto alla Comunità Attraverso il Programma di Competenze",
        post1Excerpt: "L'11 maggio 2026, CLUB HOTEK TSS ha ancora una volta dimostrato il suo forte impegno...",
        post2Title: "CLUB HOTEK TSS Celebra una Giornata Culturale Colorata e Ispiratrice",
        post2Excerpt: "CLUB HOTEK TSS era pieno di eccitazione, colore e gioia venerdì 24 febbraio...",
        post3Title: "CLUB HOTEK TSS Premiata Migliore Scuola TVET a Gasabo",
        post3Excerpt: "CLUB HOTEK TSS è orgogliosa di annunciare di essere stata ufficialmente riconosciuta...",
        post4Title: "Nuovo Laboratorio Multimediale Ufficialmente Inaugurato",
        post4Excerpt: "CLUB HOTEK TSS ha ufficialmente inaugurato un nuovissimo Laboratorio Multimediale...",
        post5Title: "Gli Studenti Brillano nella Competizione Nazionale delle Competenze",
        post5Excerpt: "Una squadra di studenti di CLUB HOTEK TSS ha rappresentato la scuola con orgoglio...",
        faqLabel: "DOMANDE FREQUENTI",
        faqHeading1: "Hai Domande?", faqHeading2: "Abbiamo le Risposte.",
        faqTagline: "Clicca su qualsiasi domanda qui sotto per vedere la risposta.",
        faqQ1: "Come posso registrarmi a CLUB HOTEK TSS?",
        faqA1: "Puoi registrarti visitando la scuola di persona nel Settore di Gisozi, Distretto di Gasabo, o chiamando 0788301833 / 0788627310.",
        faqQ2: "Quali programmi offrite?",
        faqA2: "CLUB HOTEK TSS offre sei programmi TVET principali.",
        faqQ3: "Quali sono i requisiti per l'ammissione?",
        faqA3: "I requisiti variano in base al programma. In generale, i candidati devono aver completato almeno l'istruzione primaria (P6) o il Livello Ordinario (S3).",
        faqQ4: "Come posso contattare la scuola?",
        faqA4: "Puoi contattarci per telefono al 0788301833 o 0788627310, via email a clubhotek@gmail.com.",
        faqQ5: "Dove si trova CLUB HOTEK TSS?",
        faqA5: "CLUB HOTEK TSS si trova nel Settore di Gisozi, Distretto di Gasabo, Kigali, Ruanda.",
        faqQ6: "Offrite Sviluppo Software?",
        faqA6: "Lo Sviluppo Software attualmente non è offerto come programma autonomo.",
        faqQ7: "Offrite Multimedia?",
        faqA7: "Sì. Multimedia è uno dei nostri principali mestieri TVET.",
        faqQ8: "Quando inizia la registrazione?",
        faqA8: "La registrazione a CLUB HOTEK TSS è attualmente in corso per il prossimo anno accademico.",
        faqQ9: "C'è alloggio per gli studenti?",
        faqA9: "La scuola attualmente non fornisce alloggio nel campus.",
        faqQ10: "Come posso candidarmi online?",
        faqA10: "Per candidarti online, vai alla sezione Ammissioni e compila il modulo Richiedi Informazioni.",
        ctaLabel: "HITAMO NEZA UTEGURE EJO HEZA",
        ctaHeading: "Il Tuo Futuro Inizia con una Competenza.",
        ctaDesc: "Unisciti a CLUB HOTEK TSS e costruisci competenze pratiche per la vita.",
        ctaBtn: "Candidati / Contattaci",
        contactLabel: "CONTATTACI",
        contactHeading1: "Mettiti in", contactHeading2: "Contatto",
        contactTagline: "Siamo pronti a fornire maggiori informazioni sui nostri programmi.",
        contactLocTitle: "La Nostra Posizione", contactPhoneTitle: "Telefono",
        contactEmailTitle: "Email", contactInfoTitle: "Informazioni Scolastiche",
        contactInfoDesc: "Competenze Pratiche e Sviluppo Professionale",
        contactWhatsapp: "Chatta con noi su WhatsApp",
        contactFormHeading: "Inviaci un Messaggio",
        footerQuick: "Link Rapidi", footerAbout: "Chi Siamo", footerTrades: "I Nostri Mestieri",
        footerOurTrades: "I Nostri Mestieri", footerContact: "Contatti",
        footerRights: "Tutti i Diritti Riservati.",
        footerTagline: "Competenze Pratiche per una Vita Migliore",
        toastSuccess: "Messaggio inviato con successo.",
        toastContact: "Grazie! Il tuo messaggio è stato ricevuto.",
        toastApplication: "Richiesta inviata con successo.",
        toastNewsletter: "Grazie per esserti iscritto!",
        newsletterTitle: "Rimani Aggiornato con CLUB HOTEK TSS",
        newsletterText: "Iscriviti per ricevere notizie sulle ammissioni, eventi e aggiornamenti sui programmi.",
        newsletterPlaceholder: "La tua email",
        newsletterBtn: "Iscriviti"
    }
};

/* ============================================================
   INIT ON DOM READY
============================================================ */
document.addEventListener("DOMContentLoaded", function () {
    try {

        /* ---- PRELOADER ---- */
        const preloader = document.getElementById("preloader");
        function hidePreloader() {
            if (preloader && !preloader.classList.contains("hidden")) {
                preloader.classList.add("hidden");
                setTimeout(() => { if (preloader) preloader.style.display = "none"; }, 600);
            }
        }
        window.addEventListener("load", hidePreloader);
        setTimeout(hidePreloader, 2500);

        /* ---- MOBILE NAV ---- */
        const mobileMenuBtn = document.getElementById("mobileMenuBtn");
        const navbar = document.getElementById("navbar");
        const navOverlay = document.getElementById("navOverlay");

        function setMenuIcon(isOpen) {
            if (!mobileMenuBtn) return;
            const icon = mobileMenuBtn.querySelector("i");
            if (!icon) return;
            icon.className = isOpen ? "fas fa-xmark" : "fas fa-bars";
        }
        function openNav() {
            if (navbar) navbar.classList.add("active");
            if (navOverlay) navOverlay.classList.add("active");
            document.body.style.overflow = "hidden";
            setMenuIcon(true);
        }
        function closeNav() {
            if (navbar) navbar.classList.remove("active");
            if (navOverlay) navOverlay.classList.remove("active");
            document.body.style.overflow = "";
            setMenuIcon(false);
        }
        if (mobileMenuBtn && navbar) {
            mobileMenuBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                navbar.classList.contains("active") ? closeNav() : openNav();
            });
        }
        if (navOverlay) navOverlay.addEventListener("click", closeNav);

        /* ---- STICKY HEADER ---- */
        const header = document.getElementById("header");
        window.addEventListener("scroll", () => {
            if (!header) return;
            header.classList.toggle("scrolled", window.scrollY > 40);
        });

        /* ---- THEME TOGGLE ---- */
        const themeToggle = document.getElementById("themeToggle");
        if (themeToggle) {
            let savedTheme = null;
            try { savedTheme = localStorage.getItem("clubHotekTheme"); } catch (e) {}
            if (savedTheme === "dark") {
                document.body.classList.add("dark-mode");
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            }
            themeToggle.addEventListener("click", () => {
                document.body.classList.toggle("dark-mode");
                const isDark = document.body.classList.contains("dark-mode");
                try { localStorage.setItem("clubHotekTheme", isDark ? "dark" : "light"); } catch (e) {}
                themeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
            });
        }

        /* ---- LANGUAGE SWITCHER ---- */
        const LANG_KEY = "hotek_lang";
        const names = { en: "English", fr: "Français", sw: "Kiswahili", rw: "Kinyarwanda", es: "Español", it: "Italiano" };

        function applyLanguage(lang) {
            if (!translations[lang]) lang = "en";
            document.documentElement.setAttribute("lang", lang);

            document.querySelectorAll("[data-i18n]").forEach(el => {
                const key = el.getAttribute("data-i18n");
                if (translations[lang][key] !== undefined) el.textContent = translations[lang][key];
            });
            document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
                const key = el.getAttribute("data-i18n-placeholder");
                if (translations[lang][key] !== undefined) el.setAttribute("placeholder", translations[lang][key]);
            });
            document.querySelectorAll("[data-current-lang]").forEach(el => {
                el.textContent = names[lang] || "English";
            });
            document.querySelectorAll(".lang-option").forEach(opt => {
                opt.classList.toggle("active", opt.getAttribute("data-lang") === lang);
            });
            try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
        }

        function initLangSwitcher(id) {
            const switcher = document.getElementById(id);
            if (!switcher) return;
            const btn = switcher.querySelector(".lang-btn");
            const options = switcher.querySelectorAll(".lang-option");
            if (btn) {
                btn.addEventListener("click", (e) => {
                    e.stopPropagation();
                    document.querySelectorAll(".lang-switcher.open").forEach(s => {
                        if (s !== switcher) s.classList.remove("open");
                    });
                    switcher.classList.toggle("open");
                });
            }
            options.forEach(opt => {
                opt.addEventListener("click", (e) => {
                    e.stopPropagation();
                    applyLanguage(opt.getAttribute("data-lang"));
                    switcher.classList.remove("open");
                });
            });
        }
        document.addEventListener("click", () => {
            document.querySelectorAll(".lang-switcher.open").forEach(s => s.classList.remove("open"));
        });
        initLangSwitcher("langSwitcher");
        initLangSwitcher("langSwitcherMobile");

        let savedLang = "en";
        try { savedLang = localStorage.getItem(LANG_KEY) || "en"; } catch (e) {}
        applyLanguage(savedLang);

        /* ---- FAQ ACCORDION ---- */
        document.querySelectorAll(".faq-item").forEach(item => {
            const q = item.querySelector(".faq-question");
            if (!q) return;
            q.addEventListener("click", () => {
                const isOpen = item.classList.contains("open");
                document.querySelectorAll(".faq-item").forEach(o => o.classList.remove("open"));
                if (!isOpen) item.classList.add("open");
            });
        });

        /* ---- GALLERY FILTER ---- */
        const filterBtns = document.querySelectorAll(".filter-btn");
        const galleryItems = document.querySelectorAll(".gallery-item");
        filterBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                const f = btn.getAttribute("data-filter");
                filterBtns.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                galleryItems.forEach(item => {
                    if (f === "all" || item.classList.contains(f)) {
                        item.style.display = "block";
                        setTimeout(() => { item.style.opacity = "1"; }, 10);
                    } else {
                        item.style.display = "none";
                    }
                });
            });
        });

        /* ---- GALLERY MODAL ---- */
        const galleryModal = document.getElementById("galleryModal");
        const modalImage = document.getElementById("modalImage");
        const modalTitle = document.getElementById("modalTitle");
        const galleryModalClose = document.getElementById("galleryModalClose");
        document.querySelectorAll(".gallery-view").forEach(btn => {
            btn.addEventListener("click", (e) => {
                e.stopPropagation();
                if (modalImage) modalImage.src = btn.getAttribute("data-image");
                if (modalTitle) modalTitle.textContent = btn.getAttribute("data-title");
                if (galleryModal) {
                    galleryModal.classList.add("show");
                    document.body.style.overflow = "hidden";
                }
            });
        });
        if (galleryModalClose) galleryModalClose.addEventListener("click", () => closeModal(galleryModal));

        /* ---- GENERIC MODAL CLOSE ---- */
        document.querySelectorAll(".modal").forEach(modal => {
            modal.addEventListener("click", (e) => {
                if (e.target === modal) closeModal(modal);
            });
        });
        document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") document.querySelectorAll(".modal").forEach(closeModal);
        });
        function closeModal(modal) {
            if (!modal) return;
            modal.classList.remove("show");
            document.body.style.overflow = "";
        }

        /* ---- FORMS ---- */
        const contactForm = document.getElementById("contactForm");
        if (contactForm) {
            contactForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const lang = document.documentElement.getAttribute("lang") || "en";
                showToast(translations[lang].toastContact);
                contactForm.reset();
            });
        }
        const applicationForm = document.getElementById("applicationForm");
        if (applicationForm) {
            applicationForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const lang = document.documentElement.getAttribute("lang") || "en";
                showToast(translations[lang].toastApplication);
                applicationForm.reset();
            });
        }
        const newsletterForm = document.getElementById("newsletterForm");
        if (newsletterForm) {
            newsletterForm.addEventListener("submit", (e) => {
                e.preventDefault();
                const lang = document.documentElement.getAttribute("lang") || "en";
                showToast(translations[lang].toastNewsletter);
                newsletterForm.reset();
            });
        }

        /* ---- TOAST ---- */
        const toast = document.getElementById("toast");
        const toastMessage = document.getElementById("toastMessage");
        function showToast(msg) {
            if (!toast || !toastMessage) return;
            toastMessage.textContent = msg;
            toast.classList.add("show");
            setTimeout(() => toast.classList.remove("show"), 4000);
        }

        /* ---- SCROLL TOP ---- */
        const scrollTop = document.getElementById("scrollTop");
        window.addEventListener("scroll", () => {
            if (!scrollTop) return;
            scrollTop.classList.toggle("show", window.scrollY > 500);
        });
        if (scrollTop) scrollTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

        /* ---- ANIMATED STATISTICS ---- */
        let countersStarted = false;
        function animateCounters() {
            if (countersStarted) return;
            const statsSection = document.querySelector(".stats-section");
            if (!statsSection) return;
            const pos = statsSection.getBoundingClientRect().top;
            if (pos < window.innerHeight - 100) {
                countersStarted = true;
                document.querySelectorAll(".stats-section [data-count]").forEach(counter => {
                    const target = parseInt(counter.getAttribute("data-count"), 10) || 0;
                    let current = 0;
                    const inc = Math.max(1, Math.ceil(target / 50));
                    const timer = setInterval(() => {
                        current += inc;
                        if (current >= target) { current = target; clearInterval(timer); }
                        counter.textContent = current + "+";
                    }, 30);
                });
            }
        }
        window.addEventListener("scroll", animateCounters);
        animateCounters();

        /* ---- NAV SELECT DROPDOWN (page jump) ---- */
        document.querySelectorAll(".nav-select").forEach(sel => {
            sel.addEventListener("change", (e) => {
                const val = e.target.value;
                if (val && val !== "") window.location.href = val;
            });
        });

        /* ---- HERO SLIDER (only on home) ---- */
        (function initHeroSlider() {
            const slides = document.querySelectorAll(".hero-slide");
            const dots = document.querySelectorAll(".hero-dots button");
            if (!slides.length) return;
            let idx = 0, timer = null;
            const INTERVAL = 6000;
            function go(i) {
                slides.forEach((s, k) => s.classList.toggle("active", k === i));
                dots.forEach((d, k) => d.classList.toggle("active", k === i));
                idx = i;
            }
            function next() { go((idx + 1) % slides.length); }
            function start() { stop(); timer = setInterval(next, INTERVAL); }
            function stop() { if (timer) { clearInterval(timer); timer = null; } }
            dots.forEach(d => d.addEventListener("click", () => {
                go(parseInt(d.getAttribute("data-slide"), 10) || 0);
                start();
            }));
            document.addEventListener("visibilitychange", () => {
                document.hidden ? stop() : start();
            });
            go(0); start();
        })();

    } catch (err) {
        console.error("Init error:", err);
        const preloader = document.getElementById("preloader");
        if (preloader) {
            preloader.classList.add("hidden");
            setTimeout(() => { preloader.style.display = "none"; }, 600);
        }
    }
});

/* ============================================================
   VISITOR COUNTER
============================================================ */
(function initVisitorCounter() {
    "use strict";
    const NAMESPACE = "clubhotektss-rwanda";
    const TOTAL_KEY = "site-visits-total";
    const TODAY_KEY = "site-visits-" + new Date().toISOString().slice(0, 10);
    const LOCAL_KEY = "clubHotekMyVisits";

    const totalEl = document.getElementById("visitorTotal");
    const todayEl = document.getElementById("visitorToday");
    const uniqueEl = document.getElementById("visitorUnique");
    if (!totalEl) return;

    function animateNumber(el, target) {
        let current = 0;
        const inc = Math.max(1, Math.ceil(target / 40));
        const timer = setInterval(() => {
            current += inc;
            if (current >= target) { current = target; clearInterval(timer); }
            el.textContent = current.toLocaleString();
        }, 28);
    }

    let myVisits = 0;
    try {
        myVisits = parseInt(localStorage.getItem(LOCAL_KEY) || "0", 10) || 0;
        myVisits += 1;
        localStorage.setItem(LOCAL_KEY, String(myVisits));
    } catch (e) { myVisits = 1; }
    if (uniqueEl) animateNumber(uniqueEl, myVisits);

    const base = "https://api.counterapi.dev/v1";
    fetch(base + "/" + NAMESPACE + "/" + TOTAL_KEY + "/up")
        .then(r => r.json())
        .then(d => {
            const v = d && d.count !== undefined ? d.count : null;
            if (typeof v === "number") animateNumber(totalEl, v);
            else totalEl.textContent = "—";
        })
        .catch(() => { totalEl.textContent = "—"; });

    fetch(base + "/" + NAMESPACE + "/" + TODAY_KEY + "/up")
        .then(r => r.json())
        .then(d => {
            const v = d && d.count !== undefined ? d.count : null;
            if (typeof v === "number") animateNumber(todayEl, v);
            else todayEl.textContent = "—";
        })
        .catch(() => { todayEl.textContent = "—"; });
})();