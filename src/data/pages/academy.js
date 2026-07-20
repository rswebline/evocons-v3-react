import { serviceAreas } from "../serviceAreas";

const academyArea = serviceAreas.find(
  (area) => area.slug === "academy"
);

export const academyPage = {
  seo: {
    title: "Academy | Evocons",
    description:
      "Workshop, formazione executive e percorsi esperienziali per sviluppare competenze digitali, organizzative e manageriali.",
    url: "https://www.evocons.it/formazione",
    image: "https://www.evocons.it/images/og/og-home.jpg",
  },

  hero: {
    eyebrow: academyArea.eyebrow,
    title:
      "Formazione che genera competenze, non semplici attestati.",
    mobileTitle: "Competenze per governare l’innovazione",
    subtitle:
      "Workshop, Academy e percorsi esperienziali per accompagnare persone e organizzazioni nello sviluppo delle competenze digitali.",
    image: academyArea.heroImage,
    height: "medium",
  },

  navigation: {
    currentLabel: "Academy",
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
    ],
  },

  intro: {
    eyebrow: "Academy",
    title: "Imparare significa cambiare il modo di lavorare.",
    text:
      "Ogni percorso formativo nasce da obiettivi concreti. " +
      "La tecnologia diventa utile quando modifica comportamenti, " +
      "sviluppa competenze e rende le persone più autonome nelle decisioni.",
  },

  highlight: {
    eyebrow: "Approccio",
    title:
      "Non progettiamo corsi.\n" +
      "Progettiamo esperienze di apprendimento.",
    text:
      "La formazione Evocons integra consulenza, casi reali, " +
      "laboratori e strumenti operativi. L’obiettivo non è trasferire " +
      "nozioni, ma costruire competenze utilizzabili nel lavoro quotidiano.",
    image: academyArea.heroImage,
    imageAlt: academyArea.imageAlt,
    buttonLabel: "Scopri il metodo",
    buttonPath: "/chi-siamo#metodo",
  },

  quote: {
    quote:
      "La conoscenza\n" +
      "non crea valore.\n\n" +
      "La competenza sì.",
    author: "EVOCONS VIEW",
  },

  featuresSection: {
    eyebrow: "Cosa facciamo",
    title: "Percorsi formativi progettati intorno alle persone",
    subtitle:
      "Costruiamo esperienze di apprendimento che integrano contenuti, " +
      "pratica, confronto e applicazione operativa.",
  },

  features: [
    {
      icon: "◉",
      title: "Workshop",
      text:
        "Sessioni brevi e operative per introdurre temi, strumenti " +
        "e nuovi modi di lavorare.",
    },
    {
      icon: "▦",
      title: "Academy",
      text:
        "Percorsi strutturati per sviluppare competenze nel tempo " +
        "e accompagnare gruppi di lavoro eterogenei.",
    },
    {
      icon: "↗",
      title: "Learning Experience",
      text:
        "Laboratori, casi reali e attività esperienziali per trasformare " +
        "la conoscenza in competenza applicata.",
    },
  ],

  flowSection: {
    eyebrow: "Percorso",
    title: "Come progettiamo la formazione",
    subtitle:
      "Ogni percorso nasce da un obiettivo e viene costruito " +
      "per produrre apprendimento trasferibile nel lavoro quotidiano.",
  },

  flow: [
    {
      title: "Ascolto",
      text:
        "Comprendiamo obiettivi, destinatari, contesto e bisogni formativi.",
    },
    {
      title: "Progettazione",
      text:
        "Costruiamo il percorso più adatto per contenuti, tempi e modalità.",
    },
    {
      title: "Esperienza",
      text:
        "Attiviamo workshop, laboratori e momenti di confronto guidato.",
    },
    {
      title: "Applicazione",
      text:
        "Colleghiamo l’apprendimento a casi, processi e attività reali.",
    },
    {
      title: "Consolidamento",
      text:
        "Favoriamo il trasferimento delle competenze e il miglioramento continuo.",
    },
  ],

  knowledgeHub: {
    header: {
      eyebrow: "Knowledge Hub",
      title: "Approfondimenti per progettare apprendimento",
      subtitle:
        "Insight, guide e percorsi per costruire formazione utile, " +
        "concreta e collegata ai cambiamenti dell’organizzazione.",
    },

    items: [
      {
        eyebrow: "Workshop",
        title:
          "Come progettare un workshop efficace: obiettivi, ritmo e applicazione pratica.",
        previewImage: "/images/academy/workshop.jpg",
        imageAlt:
          "Progettazione e conduzione di un workshop aziendale",
        path: "/insight",
      },
      {
        eyebrow: "Academy",
        title:
          "Perché un’Academy aziendale deve sviluppare comportamenti, non solo conoscenze.",
        previewImage: "/images/academy/academy.jpg",
        imageAlt:
          "Percorso Academy per lo sviluppo delle competenze",
        path: "/insight",
      },
      {
        eyebrow: "Metodo",
        title:
          "Dal contenuto all’esperienza: progettare percorsi formativi che restano.",
        previewImage: "/images/academy/method.jpg",
        imageAlt:
          "Esperienza di apprendimento e formazione aziendale",
        path: "/insight",
      },
    ],
  },

  cta: {
    eyebrow: "Academy",
    title: "Costruiamo insieme il tuo percorso formativo.",
    text:
      "Possiamo partire da un confronto per progettare workshop, " +
      "Academy o percorsi di sviluppo coerenti con i bisogni " +
      "della tua organizzazione.",
    buttonLabel: "Contattaci",
    buttonPath: "/contatti",
  },
};