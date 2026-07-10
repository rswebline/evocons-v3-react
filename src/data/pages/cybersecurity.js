import { serviceAreas } from "../serviceAreas";

const cybersecurityArea = serviceAreas.find(
  (area) => area.slug === "cybersecurity"
);

export const cybersecurityPage = {
  seo: {
    title: "Cybersecurity | Evocons",
    description:
      "Strategie, consapevolezza e competenze per proteggere il patrimonio digitale.",
    url: "https://www.evocons.it/cybersecurity",
    image: "https://www.evocons.it/images/og/og-home.jpg",
  },

  hero: {
    eyebrow: cybersecurityArea.eyebrow,
    title: "Cybersecurity come cultura, processo e responsabilità.",
    mobileTitle: "Proteggere il business digitale",
    subtitle:
      "Consapevolezza, prevenzione e gestione del rischio cyber per proteggere persone, dati, processi e continuità operativa.",
    image: cybersecurityArea.heroImage,
    height: "medium",
  },

  navigation: {
    currentLabel: "Cybersecurity",
    items: [
      { label: "Servizi", path: "/servizi" },
      { label: "AI e Data Analytics", path: "/ai-data-analytics" },
      { label: "Academy", path: "/formazione" },
    ],
  },

  intro: {
    eyebrow: "Cybersecurity",
    title: "La sicurezza non è solo tecnologia.",
    text:
      "Ogni organizzazione è esposta a rischi digitali, operativi e umani. Evocons aiuta imprese e professionisti a sviluppare consapevolezza, leggere le vulnerabilità e costruire percorsi di prevenzione sostenibili.",
  },

  highlight: {
    eyebrow: "Approccio",
    title: "Proteggere significa comprendere prima di intervenire.",
    text:
      "Partiamo dai comportamenti, dai processi e dalle aree di rischio. La cybersecurity diventa così un percorso di consapevolezza, prevenzione e miglioramento continuo, non una semplice lista di strumenti.",
    image: cybersecurityArea.heroImage,
    imageAlt: cybersecurityArea.imageAlt,
    buttonLabel: "Scopri il metodo",
    buttonPath: "/chi-siamo#metodo",
  },

  quote: {
    quote: "La sicurezza\nnon nasce dal controllo.\n\nNasce dalla consapevolezza.",
    author: "EVOCONS VIEW",
  },

  featuresSection: {
    eyebrow: "Cosa facciamo",
    title: "Dalla consapevolezza alla gestione del rischio",
    subtitle:
      "Interveniamo dove persone, processi e tecnologie devono lavorare insieme per ridurre l’esposizione al rischio cyber.",
  },

  features: [
    {
      icon: "🛡️",
      title: "Security Awareness",
      text:
        "Percorsi per sviluppare consapevolezza sui rischi digitali e sui comportamenti sicuri.",
    },
    {
      icon: "🔍",
      title: "Risk Assessment",
      text:
        "Analisi delle aree critiche, delle vulnerabilità organizzative e delle priorità di intervento.",
    },
    {
      icon: "🚨",
      title: "Prevenzione",
      text:
        "Azioni, procedure e formazione per ridurre il rischio e migliorare la capacità di risposta.",
    },
  ],

  flowSection: {
    eyebrow: "Percorso",
    title: "Come affrontiamo il rischio cyber",
    subtitle:
      "Un percorso progressivo per trasformare la cybersecurity da tema tecnico a competenza organizzativa.",
  },

  flow: [
    {
      title: "Ascolto",
      text: "Comprendiamo contesto, processi, abitudini e aree di esposizione.",
    },
    {
      title: "Analisi",
      text: "Individuiamo vulnerabilità, criticità e priorità di intervento.",
    },
    {
      title: "Consapevolezza",
      text: "Costruiamo percorsi formativi orientati ai comportamenti sicuri.",
    },
    {
      title: "Prevenzione",
      text: "Definiamo azioni e procedure per ridurre il rischio operativo.",
    },
    {
      title: "Miglioramento",
      text: "Accompagniamo il consolidamento e l’evoluzione delle pratiche di sicurezza.",
    },
  ],

  knowledgeHub: {
    header: {
      eyebrow: "Knowledge Hub",
      title: "Approfondimenti per governare il rischio",
      subtitle:
        "Insight, guide e percorsi per comprendere la cybersecurity come responsabilità condivisa e non solo come tecnologia.",
    },
    items: [
      {
        eyebrow: "Awareness",
        title:
          "Perché il fattore umano resta il primo elemento della sicurezza digitale.",
        previewImage: cybersecurityArea.previewImage,
        imageAlt: cybersecurityArea.imageAlt,
        path: "/cybersecurity",
      },
      {
        eyebrow: "Rischio",
        title:
          "Come leggere vulnerabilità, processi critici e priorità di intervento.",
        previewImage: cybersecurityArea.previewImage,
        imageAlt: cybersecurityArea.imageAlt,
        path: "/cybersecurity",
      },
      {
        eyebrow: "Metodo",
        title:
          "Dalla prevenzione alla risposta: costruire una cultura cyber sostenibile.",
        previewImage: cybersecurityArea.previewImage,
        imageAlt: cybersecurityArea.imageAlt,
        path: "/cybersecurity",
      },
    ],
  },

  cta: {
    eyebrow: "Cybersecurity",
    title: "Vuoi rafforzare la consapevolezza cyber nella tua organizzazione?",
    text:
      "Possiamo partire da un confronto per individuare rischi, priorità e primi interventi formativi o consulenziali.",
    buttonLabel: "Contattaci",
    buttonPath: "/contatti",
  },
};