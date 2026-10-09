# 🏍️ Free Your Garage (FYG) — Swap American Bike Parts

> **Piattaforma P2P verticale dedicata a ricambi e accessori originali Harley-Davidson.**  
> Progetto e prototipo esecutivo sviluppato da **Nicola Valigi (Houdinick)** sulla base dell'analisi strategica del documento di Federico Ponso (*APP - Free Your Garage*, Ottobre 2026).

---

## 🎯 Visione & Vantaggio Competitivo ("Non la gratuità, ma l'ordine")

I marketplace generalisti (Facebook Marketplace, Subito, Wallapop, eBay) offrono annunci disordinati, privi di filtri tecnici per famiglia/anno di moto, invasi da truffe e ricambi contraffatti.  
**Free Your Garage** risolve questo problema strutturalmente:

1. **Massimo 3 Tocchi**: chi cerca imposta la propria moto una sola volta nel **Garage Virtuale** e vede unicamente ricambi compatibili.
2. **Doppio Asse di Catalogo Rigoroso**:
   - **Famiglia & Generazione**: Softail (Pre-2017 e 2018+ con nuovo telaio), Dyna (1991–2017), Touring (Pre-2008, 2009–2016, 2017+ M8), Sportster (Ironhead, Evolution 1986–2022, Revolution Max 2021+), V-Rod, Trike, CVO.
   - **10 Categorie Tecniche**: Motore, Scarichi, Carrozzeria, Selle, Ciclistica, Impianto elettrico, Manubri, Borse, Accessori, Abbigliamento.
   - **Sezione d'Élite "Old School"**: Categoria dedicata per moto di oltre 40 anni (Flathead, Knucklehead 1936–1947, Panhead 1948–1965, Shovelhead 1966–1984).
3. **Regole d'Oro per gli Annunci (Modello Vinted)**:
   - **Ispezione Guidata a 4 Foto Obbligatorie**: Vista d'insieme, Lato A e B, Primo piano codice/marcatura OEM, Dettaglio eventuali difetti.
   - **Scarto Automatico AI**: Verifica nitidezza, sfondi e rilevamento del pezzo meccanico.
   - **Descrizione Assistita AI**: Generazione automatica di titoli standardizzati (`[Componente] – [Famiglia Anno] – cod. [OEM]`) e scheda tecnica.
4. **Tutela Legale & Compliance di Marchio**:
   - Nessun uso illegittimo di loghi o denominazioni ingannevoli.
   - Marchi utilizzati esclusivamente come indicazione tecnica di compatibilità (Codice della Proprietà Industriale & EUIPO).
   - Disclaimer legale e punto di contatto DSA contro le contraffazioni.

---

## 📱 Struttura delle 5 Schermate Implementate nel Prototipo

1. **Home**:
   - Selettore rapido "La Mia Moto" attiva nel Garage virtuale (con ricalcolo istantaneo delle compatibilità).
   - Banner manifesto: *"Non la gratuità, ma l'ordine"*.
   - Riquadro in evidenza *Old School Collection*.
   - Griglia delle 10 categorie tecniche con contatore pezzi compatibili.
   - Feed annunci 1-click filtrato per la moto attiva con badge verde *100% Compatibile*.
2. **Ricerca**:
   - Omnibox unificata: ricerca per parole chiave e ricerca diretta per **Codice Ricambio OEM** (es. `25700941`, `64900552`).
   - Quick chips: *"Solo per la mia moto"* e *"Solo OEM Marcati"*.
   - Dropdown combinati Famiglia e Categoria.
3. **Dettaglio Annuncio**:
   - Griglia di ispezione a 4 scatti (D'insieme, Lati, Marcatura/Codice, Difetti).
   - Box dinamico di compatibilità con la moto attiva del visitatore (Verde = compatibile, Giallo = non compatibile per modello differente).
   - Tabella specifiche tecniche e codice OEM.
   - Profilo venditore (*Fondatore*, *Venditore Verificato*, rating).
   - Tasto *Contatta il venditore* con chat diretta integrata.
4. **Pubblica Annuncio (Wizard 5 Step)**:
   - *Step 1*: Selezione Famiglia & Fascia d'anni.
   - *Step 2*: Scelta Categoria tecnica e Sezione Speciale.
   - *Step 3*: Upload 4 foto guidate con sagome e validatore AI simulato.
   - *Step 4*: Dati tecnici (Codice OEM, Condizioni, Prezzo, Città).
   - *Step 5*: Assistente AI che genera titolo normalizzato e descrizione tecnica, con pubblicazione immediata nel catalogo live.
5. **Garage & Profilo**:
   - Gestione delle proprie moto (switch moto attiva tra quelle registrate).
   - Politiche anti-contraffazione e linee guida di conformità DSA.

---

## 🚀 Avvio del Prototipo Locale

Il prototipo è una Single-Page Application (SPA) pura, ad altissima fedeltà visiva, con supporto per vista Smartphone (iPhone canvas) e vista Desktop/Vetrina.

### Avvio con Python nativo o uv:

```bash
cd /Users/houdinick/free-your-garage
uv run python server.py
```

Oppure aprendo direttamente il file nel browser:
`file:///Users/houdinick/free-your-garage/index.html`

- **Porta locale di default:** `http://localhost:8505`
- **Tavolozza colori:** Fondo crema vintage (`#F5EFE6`), accenti arancio ruggine (`#D35400`), verde salvia d'officina (`#2D4739`), denim scuro (`#2C3E50`).

---

## 📅 Roadmap di Business (Fasi 1-9)

| Periodo | Obiettivo di Fase | Criterio di Successo |
| :--- | :--- | :--- |
| **Mesi 1–2** | Validazione e landing page di prova | 300–500 pre-iscrizioni e 20 venditori disponibili |
| **Mesi 2–3** | Ricerca di anteriorità marchio EUIPO/UIBM | Nome registrato e canali social blindati |
| **Mesi 3–4** | Prova prototipo interattivo con 10 appassionati | Flusso a 3 tocchi convalidato |
| **Mesi 4–7** | Sviluppo MVP (React Native / Expo / Supabase) | App stabile in beta chiusa |
| **Mesi 7–8** | Onboarding venditori fondatori | Almeno 500 annunci reali prima del lancio |
| **Mesi 8–10** | Lancio Fase 1 Gratuita (scambio a mano / privato) | Volume transazioni e crescita organica |
| **Mese 12+** | Fase 2 Monetizzazione: Spedizione integrata e Pagamento Escrow | Commissione 5-8% acquirente (modello Vinted) |

---
*Copyright © 2026 Nicola Valigi (Houdinick). Tutti i diritti riservati.*
