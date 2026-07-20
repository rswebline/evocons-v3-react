export const insightPage = {
  seo: {
    title: "Insight | Evocons",
    description:
      "Approfondimenti, casi reali e strumenti operativi su intelligenza artificiale, cybersecurity, competenze e trasformazione organizzativa.",
    url: "https://www.evocons.it/insight",
    image: "https://www.evocons.it/images/og/og-home.jpg",
  },

  hero: {
    eyebrow: "INSIGHT",
    title: "Conoscenza che diventa valore.",
    mobileTitle: "Conoscenza che genera valore.",
    subtitle:
      "Approfondimenti, casi reali e strumenti operativi per orientarsi e agire nel cambiamento.",
    image: "/images/hero/insight-hero.jpg",
    height: "medium",
  },

  navigation: {
    currentLabel: "Insight",
    items: [
      {
        label: "Servizi",
        path: "/servizi",
      },
      {
        label: "AI e Data Analytics",
        path: "/ai-data-analytics",
      },
      {
        label: "Cybersecurity",
        path: "/cybersecurity",
      },
      {
        label: "Academy",
        path: "/formazione",
      },
    ],
  },

  introduction: {
    eyebrow: "EVOCONS VIEW",
    title: "Leggere il cambiamento. Trasformarlo in azione.",
    text:
      "Analizziamo tecnologie, scenari ed esperienze concrete per trasformarli in conoscenza utile alle persone e alle organizzazioni.",
    linkLabel: "Scopri il nostro approccio",
    linkPath: "/chi-siamo#metodo",
  },

  areas: [
    {
      id: "ai-data-analytics",
      icon: "ai",
      title: "AI & Data Analytics",
      text:
        "Intelligenza artificiale, dati e analisi per decisioni più consapevoli.",
      meta: "Insight e strumenti",
    },
    {
      id: "cybersecurity",
      icon: "cyber",
      title: "Cybersecurity",
      text:
        "Sicurezza, gestione dei rischi e protezione delle informazioni.",
      meta: "Scenari e buone pratiche",
    },
    {
      id: "academy",
      icon: "academy",
      title: "Academy",
      text:
        "Formazione e competenze per crescere nel cambiamento.",
      meta: "Percorsi e workshop",
    },
    {
      id: "business-transformation",
      icon: "transformation",
      title: "Business Transformation",
      text:
        "Strategie, processi e modelli per guidare l'evoluzione organizzativa.",
      meta: "Metodi ed esperienze",
    },
  ],

  sections: [
    {
      id: "in-evidenza",
      eyebrow: "ULTIME PUBBLICAZIONI",
      title: "In evidenza",
      items: [
        {
          id: "ai-generativa",
          typeLabel: "INSIGHT",
          title:
            "AI generativa: opportunità reali, non aspettative irreali.",
          text:
            "Dove porta davvero l'AI generativa e come iniziare a crearne valore.",
          image: "/images/insight/ai-generativa.jpg",
          imageAlt:
            "Rappresentazione digitale dell'intelligenza artificiale",
          linkLabel: "5 minuti di lettura",
          path: "#",
        },
        {
          id: "dati-unificati",
          typeLabel: "CASE HISTORY",
          title: "Dati unificati, decisioni più rapide.",
          text:
            "Un'esperienza di evoluzione nella governance e nell'utilizzo dei dati.",
          image: "/images/insight/dati-unificati.jpg",
          imageAlt:
            "Architettura contemporanea che rappresenta sistemi integrati",
          linkLabel: "Leggi il caso studio",
          path: "#",
        },
      ],
    },

    {
      id: "risorse",
      eyebrow: "STRUMENTI",
      title: "Risorse per trasformare le idee in azione",
      items: [
        {
          id: "white-paper-ai",
          typeLabel: "WHITE PAPER",
          title:
            "Dall'AI all'impatto di business. Un framework operativo.",
          text:
            "Una guida per valutare, progettare e misurare iniziative di intelligenza artificiale.",
          image: "/images/insight/white-paper-ai.jpg",
          imageAlt:
            "Rete digitale astratta su sfondo blu",
          linkLabel: "Scarica il White Paper",
          path: "#",
          download: true,
        },
        {
          id: "ai-readiness-canvas",
          typeLabel: "TOOLKIT",
          title: "AI Readiness Canvas",
          text:
            "Uno strumento per valutare la maturità organizzativa e individuare le priorità.",
          image: "/images/insight/ai-readiness-canvas.jpg",
          imageAlt:
            "Checklist utilizzata per una valutazione organizzativa",
          linkLabel: "Scopri il Canvas",
          path: "#",
          download: true,
        },
        {
          id: "ai-strategy-workshop",
          typeLabel: "WORKSHOP",
          title: "AI Strategy Workshop",
          text:
            "Un format operativo per costruire una strategia AI condivisa e sostenibile.",
          image: "/images/insight/ai-strategy-workshop.jpg",
          imageAlt:
            "Workshop aziendale dedicato alla strategia",
          linkLabel: "Scopri il Workshop",
          path: "/formazione",
        },
      ],
    },
  ],

  cta: {
    eyebrow: "PARLIAMONE",
    title: "Ogni trasformazione inizia da una domanda.",
    text:
      "Raccontaci la sfida che stai affrontando. Scopriamo insieme da dove partire per generare valore.",
    buttonLabel: "Parla con un consulente",
    buttonPath: "/contatti",
  },
};