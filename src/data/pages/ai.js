import { serviceAreas } from "../serviceAreas";

const aiArea = serviceAreas.find((area) => area.slug === "ai-data-analytics");

export const aiPage = {
  hero: {
    eyebrow: aiArea.eyebrow,
    title:
      "L'Intelligenza Artificiale sta cambiando il mercato. Ogni organizzazione esplora il proprio modo di evolvere.",
    subtitle:
      "Alcune sperimentano. Altre osservano. Altre hanno già trasformato le prime esperienze in un percorso. Non esiste una posizione migliore delle altre. Esiste la consapevolezza della posizione in cui si trova oggi la tua organizzazione. È da lì che nasce un percorso solido verso la direzione più adatta ai tuoi obiettivi.",
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
    eyebrow: "Riconoscimento",
    title:
      "L'Intelligenza Artificiale sta cambiando il mercato. Ogni organizzazione esplora il proprio modo di evolvere.",
    text:
      "Alcune sperimentano. Altre osservano. Altre hanno già trasformato le prime esperienze in un percorso.\n\nNon esiste una posizione migliore delle altre. Esiste la consapevolezza della posizione in cui si trova oggi la tua organizzazione. È da lì che nasce un percorso solido verso la direzione più adatta ai tuoi obiettivi.",
  },

  highlight: {
    eyebrow: "Orizzonte",
    title:
      "Immagina un'organizzazione in cui l'AI diventa una competenza, non una dipendenza.",
    text:
      "Dove molti vedono una scelta tra persone e Intelligenza Artificiale, noi vediamo una squadra che crea valore insieme.",
    image: "/images/hero/about-hero.jpg",
    imageAlt: "Persone e Intelligenza Artificiale",
    buttonLabel: "Scopri il metodo",
    buttonPath: "/chi-siamo",
  },

  featuresSection: {
    eyebrow: "Percorso",
    title: "Il metodo Evocons",
    subtitle:
      "Ogni trasformazione nasce dalla comprensione del contesto e cresce attraverso competenze, sperimentazione e autonomia.",
  },

  features: [
    {
      icon: "🎯",
      title: "Comprendere",
      text:
        "Ascoltare prima di proporre. Ogni progetto parte dalla comprensione dell'organizzazione, delle persone e degli obiettivi.",
    },
    {
      icon: "🧭",
      title: "Individuare",
      text:
        "Identificare obiettivi, persone, processi e opportunità in cui l'Intelligenza Artificiale può generare valore concreto.",
    },
    {
      icon: "🧪",
      title: "Sperimentare",
      text:
        "Validare idee attraverso Ally, workshop e casi d'uso reali, riducendo il rischio e aumentando la consapevolezza.",
    },
    {
      icon: "🚀",
      title: "Consolidare",
      text:
        "Trasferire competenze e rendere l'organizzazione autonoma nell'utilizzo dell'AI e nell'evoluzione dei propri processi.",
    },
  ],

  flowSection: {
    eyebrow: "Il percorso",
    title: "Dalla comprensione all'autonomia",
    subtitle:
      "Un percorso progressivo che accompagna l'organizzazione nell'adozione consapevole dell'Intelligenza Artificiale.",
  },

  flow: [
    {
      title: "Comprendere",
      text: "Ascoltare prima di proporre.",
    },
    {
      title: "Individuare",
      text: "Obiettivi, persone, processi e opportunità.",
    },
    {
      title: "Sperimentare",
      text: "Con Ally, workshop e casi d'uso.",
    },
    {
      title: "Consolidare",
      text: "Trasferire competenze e rendere autonoma l'organizzazione.",
    },
  ],

  quote: {
    quote:
      "L'Intelligenza Artificiale\nnon sostituisce le persone.\n\nAmplifica il valore delle organizzazioni che imparano ad evolvere.",
    author: "EVOCONS VIEW",
  },

  knowledgeHub: {
    header: {
      eyebrow: "Storia",
      title: "Ogni trasformazione nasce da una storia.",
      subtitle:
        "Presto racconteremo come organizzazioni diverse hanno trasformato l'AI in un'opportunità concreta di crescita.",
    },

    items: [
      {
        eyebrow: "Coming Soon",
        title:
          "Case history, workshop e percorsi di trasformazione saranno presto disponibili.",
        previewImage: "/images/hero/ai-hero.jpg",
        imageAlt: "Trasformazione AI",
        path: "/ai-data-analytics",
      },
    ],
  },

  cta: {
    eyebrow: "Iniziamo",
    title:
      "Scopri dove l'AI può creare valore nella tua organizzazione.",
    text:
      "Ogni percorso inizia comprendendo il punto di partenza. Insieme possiamo individuare le opportunità più adatte alla tua realtà.",
    buttonLabel: "Parla con un consulente",
    buttonPath: "/contatti",
  },
};