import { serviceAreas } from "../serviceAreas";

export const servicesPage = {
  hero: {
    eyebrow: "SERVIZI",
    title: "Percorsi per governare l’evoluzione digitale",
    mobileTitle: "Governare il cambiamento digitale",
    subtitle:
      "Evocons integra consulenza, formazione e competenze tecnologiche per aiutare imprese e professionisti a comprendere, progettare e accompagnare il cambiamento.",
    image: "/images/hero/about-hero.jpg",
    height: "medium",
  },

  navigation: {
    parentLabel: "Home",
    parentPath: "/",
    currentLabel: "Servizi",
    items: [
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

  intro: {
    eyebrow: "Servizi",
    title: "Non vendiamo tecnologia. Costruiamo percorsi.",
    text:
      "Ogni intervento nasce dall’ascolto del contesto, dall’analisi dei processi e dalla comprensione delle competenze presenti. La tecnologia diventa valore solo quando è inserita in un percorso sostenibile, misurabile e realmente adottabile dalle persone.",
  },

  highlight: {
    eyebrow: "Metodo Evocons",
    title: "Dalla comprensione del problema alla costruzione della soluzione.",
    text:
      "Partiamo dalle domande giuste, identifichiamo le priorità, progettiamo percorsi concreti e affianchiamo le organizzazioni nella sperimentazione, nella formazione e nella misurazione dei risultati.",
    image: "/images/hero/about-hero.jpg",
    imageAlt: "Team Evocons in una sessione di lavoro",
    buttonLabel: "Scopri il metodo",
    buttonPath: "/chi-siamo#metodo",
  },

  areasSection: {
    eyebrow: "Aree di intervento",
    title: "Tre aree, un unico approccio",
    subtitle:
      "AI e Data Analytics, Cybersecurity e Academy non sono silos separati: sono leve complementari per aiutare le organizzazioni a crescere nel digitale con consapevolezza, controllo e metodo.",
  },

  areas: serviceAreas,

  cta: {
    eyebrow: "Servizi Evocons",
    title: "Vuoi capire da dove partire?",
    text:
      "Possiamo costruire insieme un primo assessment per leggere bisogni, priorità e opportunità della tua organizzazione.",
    buttonLabel: "Parla con un consulente",
    buttonPath: "/contatti",
  },

  flowSection:{

eyebrow:"Metodo",

title:"Come lavoriamo",

subtitle:
"Ogni progetto segue un percorso strutturato che mette al centro le persone, i processi e gli obiettivi.",

},

flow:[

{

title:"Ascolto",

text:"Comprendiamo il contesto, le persone e gli obiettivi."

},

{

title:"Analisi",

text:"Individuiamo criticità, opportunità e priorità."

},

{

title:"Progettazione",

text:"Costruiamo il percorso più adatto."

},

{

title:"Attivazione",

text:"Consulenza, workshop e affiancamento operativo."

},

{

title:"Evoluzione",

text:"Misuriamo i risultati e accompagniamo il miglioramento."

}

],
};