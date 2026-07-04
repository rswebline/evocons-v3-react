import { serviceAreas } from "../serviceAreas";
const aiArea = serviceAreas.find((area) => area.slug === "ai-data-analytics");

export const aiPage = {
  hero: {
  eyebrow: aiArea.eyebrow,
  title: "Dati e intelligenza artificiale per decidere meglio",
  subtitle:
    "Soluzioni, formazione e consulenza per usare dati e AI nei processi aziendali con metodo, consapevolezza e controllo.",
  image: aiArea.heroImage,
  height: "medium",
  className: "page-hero--ai",
},

  navigation: {
    currentLabel: "AI e Data Analytics",
    items: [
      { label: "Servizi", path: "/servizi" },
      { label: "Cybersecurity", path: "/cybersecurity" },
      { label: "Academy", path: "/formazione" },
    ],
  },

  intro: {
    eyebrow: "AI e Data Analytics",
    title: "L’intelligenza artificiale è utile solo quando genera valore.",
    text:
      "Evocons aiuta imprese e professionisti a comprendere dove l’AI può essere realmente utile, quali dati servono, quali processi possono essere migliorati e quali competenze devono essere sviluppate.",
  },

  highlight: {
    eyebrow: "Approccio",
    title: "Prima il problema. Poi la tecnologia.",
    text:
      "Partiamo dagli obiettivi aziendali, analizziamo processi e dati disponibili, individuiamo casi d’uso concreti e accompagniamo le persone nell’adozione consapevole degli strumenti.",
    image: "/images/hero/about-hero.jpg",
    imageAlt: "AI e Data Analytics",
    buttonLabel: "Parliamone",
    buttonPath: "/contatti",
  },

  featuresSection: {
    eyebrow: "Cosa facciamo",
    title: "Dall’analisi dei dati alla formazione sull’AI",
    subtitle:
      "Interveniamo dove dati, processi e competenze devono dialogare per produrre decisioni migliori.",
  },

  features: [
    {
      icon: "📊",
      title: "Data Analytics",
      text:
        "Analisi, lettura e interpretazione dei dati per supportare decisioni operative e strategiche.",
    },
    {
      icon: "🤖",
      title: "AI nei processi",
      text:
        "Individuazione di casi d’uso concreti in cui l’AI può migliorare attività, tempi e qualità del lavoro.",
    },
    {
      icon: "🎓",
      title: "Formazione AI",
      text:
        "Workshop e percorsi formativi per sviluppare consapevolezza, competenze e capacità di utilizzo.",
    },
  ],

  flowSection: {
    eyebrow: "Percorso",
    title: "Come introduciamo l’AI",
    subtitle:
      "Un percorso progressivo per evitare sperimentazioni isolate e costruire valore reale.",
  },

  flow: [
    {
      title: "Comprensione",
      text: "Analizziamo obiettivi, processi e bisogni reali.",
    },
    {
      title: "Dati",
      text: "Verifichiamo dati disponibili, qualità e possibilità di utilizzo.",
    },
    {
      title: "Casi d’uso",
      text: "Individuiamo applicazioni concrete e sostenibili.",
    },
    {
      title: "Sperimentazione",
      text: "Testiamo soluzioni semplici, misurabili e governabili.",
    },
    {
      title: "Adozione",
      text: "Formiamo le persone e accompagniamo l’integrazione nei processi.",
    },
  ],

  cta: {
    eyebrow: "AI e Data Analytics",
    title: "Vuoi capire come usare l’AI nella tua organizzazione?",
    text:
      "Possiamo partire da un confronto per individuare opportunità, priorità e primi casi d’uso concreti.",
    buttonLabel: "Contattaci",
    buttonPath: "/contatti",
  },

  quote: {
  quote:
    "L'intelligenza artificiale\nnon sostituisce la competenza.\n\nLa rende scalabile.",
  author: "EVOCONS VIEW",
},

knowledgeHub: {
  header: {
    eyebrow: "Knowledge Hub",
    title: "Approfondimenti per capire prima di scegliere",
    subtitle:
      "Insight, guide e percorsi per orientarsi nell’adozione dell’intelligenza artificiale e trasformare la curiosità in decisioni consapevoli.",
  },

  items: [
    {
      eyebrow: "Insight",
      title:
        "Perché l’AI non parte dagli strumenti, ma dalle domande giuste.",
      previewImage: "/images/hero/ai-hero.jpg",
      imageAlt: "AI e strategia",
      path: "/ai-data-analytics",
    },
    {
      eyebrow: "Guida",
      title:
        "Come individuare un primo caso d’uso AI sostenibile e misurabile.",
      previewImage: "/images/hero/ai-hero.jpg",
      imageAlt: "AI e casi d’uso",
      path: "/ai-data-analytics",
    },
    {
      eyebrow: "Percorso",
      title:
        "Dall’assessment alla formazione: costruire competenze AI in azienda.",
      previewImage: "/images/hero/ai-hero.jpg",
      imageAlt: "AI e formazione",
      path: "/ai-data-analytics",
    },
  ],
},
};