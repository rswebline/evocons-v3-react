import { serviceAreas } from "../serviceAreas";

const cybersecurityArea = serviceAreas.find(
  (area) => area.slug === "cybersecurity"
);

export const cybersecurityPage = {
  seo: {
    title: "Cybersecurity | Evocons",
    description:
      "Strategie, consapevolezza e competenze per proteggere persone, dati, processi e continuità operativa.",
    url: "https://www.evocons.it/cybersecurity",
    image: "https://www.evocons.it/images/og/og-home.jpg",
  },

  hero: {
    eyebrow: cybersecurityArea.eyebrow,
    title:
      "Cybersecurity come cultura, processo e responsabilità.",
    mobileTitle: "Proteggere il business digitale",
    subtitle:
      "Consapevolezza, prevenzione e gestione del rischio cyber per proteggere persone, dati, processi e continuità operativa.",
    image: cybersecurityArea.heroImage,
    height: "medium",
  },

  navigation: {
    currentLabel: "Cybersecurity",
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
        label: "Academy",
        path: "/formazione",
      },
    ],
  },

  intro: {
    eyebrow: "Cybersecurity",
    title: "La sicurezza non è solo tecnologia.",
    text:
      "Ogni organizzazione è esposta a rischi digitali, operativi e umani. " +
      "Evocons aiuta imprese e professionisti a sviluppare consapevolezza, " +
      "leggere le vulnerabilità e costruire percorsi di prevenzione sostenibili.",
  },

  highlight: {
    eyebrow: "Approccio",
    title:
      "Proteggere significa comprendere\n" +
      "prima di intervenire.",
    text:
      "Partiamo dai comportamenti, dai processi e dalle aree di rischio. " +
      "La cybersecurity diventa così un percorso di consapevolezza, " +
      "prevenzione e miglioramento continuo, non una semplice lista di strumenti.",
    image: cybersecurityArea.heroImage,
    imageAlt: cybersecurityArea.imageAlt,
    buttonLabel: "Scopri il metodo",
    buttonPath: "/chi-siamo#metodo",
  },

  quote: {
    quote:
      "La sicurezza\n" +
      "non nasce dal controllo.\n\n" +
      "Nasce dalla consapevolezza.",
    author: "EVOCONS VIEW",
  },

  featuresSection: {
    eyebrow: "Cosa facciamo",
    title: "Dalla consapevolezza alla gestione del rischio",
    subtitle:
      "Interveniamo dove persone, processi e tecnologie devono lavorare " +
      "insieme per ridurre l’esposizione al rischio cyber.",
  },

  features: [
    {
      icon: "◎",
      title: "Security Awareness",
      text:
        "Percorsi formativi per riconoscere i rischi digitali " +
        "e adottare comportamenti più sicuri.",
    },
    {
      icon: "◇",
      title: "Risk Assessment",
      text:
        "Analisi delle vulnerabilità organizzative, dei processi critici " +
        "e delle priorità di intervento.",
    },
    {
      icon: "↗",
      title: "Prevenzione",
      text:
        "Azioni, procedure e competenze per ridurre l’esposizione " +
        "e migliorare la capacità di risposta.",
    },
  ],

  flowSection: {
    eyebrow: "Percorso",
    title: "Come affrontiamo il rischio cyber",
    subtitle:
      "Un percorso progressivo per trasformare la cybersecurity " +
      "da tema tecnico a competenza organizzativa.",
  },

  flow: [
    {
      title: "Ascolto",
      text:
        "Comprendiamo contesto, processi, abitudini e aree di esposizione.",
    },
    {
      title: "Analisi",
      text:
        "Individuiamo vulnerabilità, criticità e priorità di intervento.",
    },
    {
      title: "Consapevolezza",
      text:
        "Costruiamo percorsi formativi orientati ai comportamenti sicuri.",
    },
    {
      title: "Prevenzione",
      text:
        "Definiamo azioni e procedure per ridurre il rischio operativo.",
    },
    {
      title: "Miglioramento",
      text:
        "Accompagniamo il consolidamento e l’evoluzione delle pratiche di sicurezza.",
    },
  ],

  knowledgeHub: {
    header: {
      eyebrow: "Knowledge Hub",
      title: "Approfondimenti per governare il rischio",
      subtitle:
        "Insight, guide e percorsi per comprendere la cybersecurity " +
        "come responsabilità condivisa e non solo come tecnologia.",
    },

    items: [
      {
        eyebrow: "Awareness",
        title:
          "Perché il fattore umano resta il primo elemento della sicurezza digitale.",
        previewImage: "/images/cybersecurity/awareness.jpg",
        imageAlt:
          "Persone coinvolte in un percorso di sensibilizzazione sulla cybersecurity",
        path: "/insight",
      },
      {
        eyebrow: "Rischio",
        title:
          "Come leggere vulnerabilità, processi critici e priorità di intervento.",
        previewImage: "/images/cybersecurity/risk.jpg",
        imageAlt:
          "Analisi dei rischi e delle vulnerabilità informatiche",
        path: "/insight",
      },
      {
        eyebrow: "Metodo",
        title:
          "Dalla prevenzione alla risposta: costruire una cultura cyber sostenibile.",
        previewImage: "/images/cybersecurity/method.jpg",
        imageAlt:
          "Collaborazione e definizione di una strategia di sicurezza",
        path: "/insight",
      },
    ],
  },

  cta: {
    eyebrow: "Cybersecurity",
    title:
      "Vuoi rafforzare la consapevolezza cyber nella tua organizzazione?",
    text:
      "Possiamo partire da un confronto per individuare rischi, priorità " +
      "e primi interventi formativi o consulenziali.",
    buttonLabel: "Contattaci",
    buttonPath: "/contatti",
  },
};