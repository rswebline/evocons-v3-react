# Sprint 005

**Data:** 02/07/2026

**Ora inizio:** 17:32

**Durata prevista:** 2h

---

# Obiettivo dello sprint

Completare l'ossatura delle pagine di servizio della V1.

Non sono previste attività di rifinitura del Design System.

---

# Attività pianificate

| Attività                      |  Stima | Stato |
| ----------------------------- | -----: | :---: |
| Pagina Cybersecurity          | 35 min |  ⬜   |
| Pagina Academy                | 35 min |  ⬜   |
| Uniformazione Hero e immagini | 15 min |  ⬜   |
| Routing e navigazione         | 10 min |  ⬜   |
| Aggiornamento Playbook        | 10 min |  ⬜   |
| Buffer                        | 25 min |  ⬜   |

---

# Deliverable previsti

- Cybersecurity pronta.
- Academy pronta.
- Navigazione completa.
- Tutte le pagine principali collegate.

---

# Decisioni prese

- Framework stabile prima delle ottimizzazioni.
- Nessuna modifica ai componenti del Design System durante questo sprint.
- Eventuali migliorie saranno annotate nel Playbook e nel Backlog.

---

# Consuntivo

**Ora fine:** **\_\_\_**

**Tempo effettivo:** **\_\_\_**

---

## Attività completate

- ***

## Attività rimandate

- ***

## Nuove idee emerse

- ***

## Note

-

# Sprint 005 - Academy & Cybersecurity

**Data:** 02/07/2026

## Obiettivo

Completare le pagine Academy e Cybersecurity utilizzando esclusivamente il Design System esistente.

## Attività completate

- ✅ Creazione `academy.js`
- ✅ Creazione `Academy.jsx`
- ✅ Creazione `cybersecurity.js`
- ✅ Creazione `Cybersecurity.jsx`
- ✅ Hero dedicati
- ✅ QuotePanel
- ✅ KnowledgeHub
- ✅ CTA
- ✅ Test funzionali
- ✅ Verifica responsive base
- ✅ Verifica console

## Tempo previsto

70 minuti

## Tempo reale

≈ 60 minuti

## Considerazioni

Il Design System ha dimostrato di essere sufficientemente maturo.
La creazione di una nuova pagina consiste ormai prevalentemente nella definizione dei contenuti e dei dati.

Le criticità emerse riguardano esclusivamente:

- Header responsive
- Hamburger menu
- Ottimizzazioni grafiche secondarie

Nessuna modifica strutturale è stata necessaria.

## TODO

- Ricreare marchio Evocons in SVG vettoriale
- Rigenerare favicon e icone da master SVG
- Creare immagine Open Graph definitiva

---

# Sprint 5.5 – SEO tecnica

**Stato:** ✅ Completato  
**Data conclusione:** 2026-07-16

## Attività completate

- ✅ Componente `SEO.jsx`
- ✅ Configurazione `site.js`
- ✅ Metadati specifici per ogni pagina
- ✅ Canonical dinamici
- ✅ Open Graph
- ✅ Twitter Card
- ✅ Schema.org
- ✅ `robots.txt`
- ✅ `sitemap.xml`
- ✅ Favicon e manifest
- ✅ Google Search Console
- ✅ Invio sitemap
- ✅ Richiesta di indicizzazione delle pagine principali
- ✅ Lighthouse SEO: 100
- ✅ Lighthouse Best Practices: 100

## Decisioni

- Plausible resta il sistema analytics principale.
- GA4 non viene introdotto in questa fase.
- Il file HTML di verifica Search Console deve restare in `public/`.

---

# Sprint 5.6 – Accessibilità

**Stato:** ✅ Completato  
**Data conclusione:** 2026-07-16

## Attività completate

- ✅ Audit Lighthouse
- ✅ Correzione contrasto dei pulsanti
- ✅ Correzione eyebrow su sfondo chiaro
- ✅ Correzione eyebrow su sfondo scuro
- ✅ Correzione numerazioni ServiceFlow
- ✅ Correzione ImageText immersive
- ✅ Correzione ImageCard
- ✅ Correzione CTA
- ✅ Lighthouse Accessibility: 100

## Regola Design System emersa

- `--color-accent` viene utilizzato sugli sfondi chiari.
- `--color-brand` viene utilizzato sugli sfondi scuri.
- `--color-action` viene utilizzato per pulsanti e azioni principali.

## Performance

Il test Lighthouse in produzione rileva:

- Performance: circa 72
- FCP: circa 3,0 s
- LCP: circa 6,4 s
- TBT: circa 80 ms
- CLS: 0

L'elemento LCP è la Hero della Home.

Il preload della Hero non ha prodotto benefici misurabili ed è stato rimosso.

La Performance viene rimandata a uno sprint dedicato perché richiede possibili interventi architetturali.

---

# Sprint 5.7 – Micro UX

**Stato:** ⬜ Da iniziare

## Obiettivi

- Animazioni leggere.
- Hover uniformi.
- Transizioni coerenti.
- Feedback dei pulsanti.
- Scroll behavior.
- Gestione di `prefers-reduced-motion`.
