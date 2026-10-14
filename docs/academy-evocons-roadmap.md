# Evocons Academy — Visione, architettura e roadmap

**Versione:** 0.1  
**Data:** 13 ottobre 2026  
**Stato:** documento di lavoro; le ipotesi sono indicate come tali.

## 1. Identità e posizionamento

**Evocons Academy** è l'iniziativa formativa B2C di Evocons, accessibile dal sottodominio **academy.evocons.it**. Si rivolge a persone che desiderano acquisire, aggiornare o approfondire competenze nell'intelligenza artificiale e nelle tecnologie digitali per applicarle concretamente al lavoro e alla crescita professionale.

Il sito corporate **www.evocons.it** continua a rivolgersi prevalentemente alle organizzazioni, con la propria offerta di consulenza e formazione B2B. Academy mantiene il marchio Evocons ma dispone di un'esperienza di navigazione, una comunicazione e un percorso commerciale distinti.

**Promessa di valore proposta:** competenze pratiche, esercitazioni e progetti applicabili, con percorsi accessibili a differenti livelli di preparazione.

## 2. Destinatari

- Professionisti, dipendenti e manager che intendono migliorare produttività e qualità del lavoro.
- Freelance e consulenti che vogliono aggiornare o ampliare i servizi offerti.
- Studenti, neolaureati e persone in riqualificazione professionale.
- Sviluppatori e profili tecnici che intendono specializzarsi nell'AI.
- Appassionati di tecnologia interessati a percorsi strutturati.

La segmentazione effettiva dipenderà dal singolo corso; non tutti i corsi sono adatti a tutti i pubblici.

## 3. Modalità di comunicazione e conversione

- **Linguaggio B2C:** diretto, accessibile, orientato ai risultati che il partecipante può ottenere; evitare il gergo tecnico non necessario.
- **Visual design:** continuità con il logo e il design system Evocons; palette più luminosa (blu, azzurro, bianco), fotografie di persone, infografiche semplici, gerarchia visiva forte.
- **Architettura:** homepage Academy, schede corso, informazioni sulla modalità didattica, CTA riconoscibili.
- **Percorso di conversione incrementale:** scoperta del corso → manifestazione d'interesse → orientamento/contatto → approfondimento tramite brochure → valutazione economica → iscrizione.
- **Principio di trasparenza:** non mostrare recensioni, risultati occupazionali, dati statistici, date, prezzi, attestazioni o partnership come fatti acquisiti se non verificati.

## 4. Modello didattico e modalità di erogazione

### Corsi brevi e specializzazioni

- **FAD sincrona / Live Online**, erogabile direttamente da Evocons, senza attendere il perfezionamento della partnership con Accademia Informatica (**AcIn**).
- **In presenza**, laddove siano disponibili aula, organizzazione e calendario; l'eventuale collaborazione con AcIn è da definire.
- Formula **part-time**, preferibilmente serale, per conciliare studio e lavoro.
- Lezioni dal vivo, laboratori, esercitazioni individuali, casi d'uso e project work.
- Registrazioni, tutoring, materiali e attestati: definire per ogni singolo percorso prima della pubblicazione di promesse commerciali.

### Master professionalizzanti

- Percorsi più lunghi e articolati, con possibile portfolio e supporto organizzativo.
- **Richiedono necessariamente il coinvolgimento di AcIn**: progettazione, calendario, organizzazione, ruoli, responsabilità, sostenibilità economica e disponibilità dell'erogazione in presenza devono essere concordati.
- Finché l'accordo non è formalizzato, presentare il master come **in progettazione / in definizione**, non come edizione già acquistabile.

## 5. Prime tre proposte formative

| Percorso | Pubblico | Formula ipotizzata | Stato |
|---|---|---|---|
| **AI per il lavoro — Dall'AI Literacy alla produttività reale** | Professionisti, dipendenti, freelance, studenti; non richiede programmazione | **6 settimane, 24 ore live**, ipotesi 2 sere/settimana da 2 ore; FAD sincrona, aula da organizzare | Prima proposta autonoma Evocons; contenuti e calendario da validare |
| **AI Automation Specialist** | Persone che vogliono progettare automazioni e workflow AI, con prerequisiti da precisare | Specializzazione part-time, **circa 40–50 ore**; FAD sincrona e possibile aula | Da progettare e validare |
| **AI Engineering** | Sviluppatori con basi di programmazione; target e prerequisiti da confermare | **Master 5–6 mesi**, part-time; modalità e calendario con AcIn | Subordinato al coinvolgimento di AcIn |

**Opportunità successiva da valutare:** corso breve *AI-Assisted Software Development* per programmatori, distinto dal master.

### Contenuti indicativi di «AI per il lavoro»

1. AI Literacy: opportunità, limiti, verifica, privacy e uso responsabile.
2. Prompting e utilizzo operativo di assistenti AI.
3. Applicazioni su documenti, comunicazione, presentazioni e ricerca.
4. Informazioni, dati e primi casi di analisi.
5. Introduzione a workflow, automazioni e agenti.
6. Project work applicato a un'attività reale.

Questa scaletta è provvisoria: il primo obiettivo è verificare l'esperienza visiva e la fattibilità tecnica del sito, non chiudere ora il syllabus.

## 6. Roadmap di rilascio

| Release | Ambito | Obiettivo |
|---|---|---|
| **R1 — Pubblicazione iniziale** | Landing Academy B2C, 2–3 percorsi con schede, analytics e misurazione delle conversioni/interazioni | Essere online e misurare l'interesse |
| **R2** | Form contatto e orientamento, FAQ | Acquisire e qualificare prospect |
| **R3** | Brochure scaricabili | Consentire l'approfondimento dei percorsi |
| **R4** | Prezzi e formule di pagamento | Supportare la decisione d'acquisto |
| **R5** | CRM e automazioni | Organizzare la gestione commerciale dei contatti |
| **R6** | Test di orientamento avanzato | Migliorare la qualificazione e l'indirizzamento |
| **R7** | Iscrizione e pagamento online | Digitalizzare l'acquisto |
| **R8** | LMS e area riservata | Gestire la fruizione e i materiali didattici |

**Nota R1:** prima dell'introduzione dei form, il tracciamento delle CTA misura l'interesse ma non equivale a una conversione commerciale verificata. Le CTA devono avere una destinazione reale e funzionante; evitare pulsanti fittizi.

## 7. Strategia tecnica

- **Dominio:** `academy.evocons.it`.
- **Frontend:** React + Vite, riutilizzando la struttura, i componenti, i CSS e i pattern responsive del sito Evocons v3, con personalizzazione visiva Academy.
- **Progetto:** applicazione separata derivata dal progetto corporate, almeno nella fase iniziale, per rilasci indipendenti e basso rischio di regressioni.
- **Infrastruttura:** riutilizzare i principi già collaudati su VPS Hetzner (Nginx, HTTPS, build e deploy), configurando sottodominio e virtual host dedicati.
- **Analytics:** valutare estensione dell'attuale configurazione Plausible al sottodominio; definire eventi di navigazione, CTA e successivamente invio form.
- **SEO:** URL leggibili, titoli e metadati univoci, struttura semantica, contenuti indicizzabili, canonical, Open Graph, sitemap, robots, dati strutturati appropriati e performance. Verificare la configurazione effettiva prima dell'implementazione.

## 8. Sprint operativo corrente — Homepage, solo menu e Hero

**Obiettivo:** mostrare rapidamente una pagina web reale e responsive, coerente con il mockup approvato.

**Incluso ora:**
- Identità/logo «Evocons | Academy».
- Menu essenziale (es. Corsi, Perché Academy, Docenti; voci non ancora implementate gestite senza link morti).
- Hero con titolo principale, breve descrizione, immagine protagonista e piccole infografiche/badge.
- CTA primaria e secondaria con comportamento reale, anche provvisorio.
- Adattamento desktop e mobile.

**Escluso per ora:** sezioni sottostanti, card dei corsi, testimonianze, statistiche, form, brochure, listini, LMS.

**Sequenza richiesta:**
1. Consolidare questo documento `.md`.
2. Implementare e vedere online **solo menu e Hero**.
3. Ottimizzare i file per la SEO, con verifica tecnica dell'effettiva implementazione.

## 9. Decisioni ancora aperte

- Palette definitiva e fotografie/asset utilizzabili commercialmente.
- Testi finali della Hero e struttura definitiva del menu.
- Titoli, prerequisiti, durate, calendari e prezzi dei singoli corsi.
- Disponibilità delle modalità in presenza e accordi con AcIn.
- Destinazione delle CTA prima del rilascio dei form.
- Modalità di gestione del repository, deploy e configurazione DNS/HTTPS del sottodominio.

---

*Documento progettuale: le ipotesi non costituiscono impegni commerciali o dichiarazioni di corsi già attivi.*
