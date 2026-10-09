# 📊 STUDIO DI FATTIBILITÀ ESECUTIVO — FREE YOUR GARAGE (FYG)
**Valutazione Strategica, Economica, Tecnica e Legale del Progetto**  
*Autore:* Nicola Valigi (Houdinick)  
*Data:* Ottobre 2026  
*Status:* Conclusivo / Pronto per Delibera

---

## 🎯 EXECUTIVE SCORECARD GLOBALE

| Dimensione di Analisi | Punteggio | Verdetto Sintetico | Livello di Rischio |
| :--- | :---: | :--- | :---: |
| **1. Attrattività di Mercato & Domanda** | **8.5 / 10** | Nicchia ad altissima propensione di spesa e cannibalizzazione dell'usato | 🟡 Medio |
| **2. Fattibilità Tecnologica & Architettura** | **9.0 / 10** | Stack maturo (React Native/Supabase), complessità gestibile, costi infra minimi | 🟢 Basso |
| **3. Conformità Legale & Marchio (IP)** | **7.5 / 10** | Fattibile con rigida applicazione del *Nominative Fair Use* e DSA | 🟠 Medio-Alto |
| **4. Unit Economics & Monetizzazione** | **8.5 / 10** | Scontrino medio elevato (~120€) con margine transazione superiore a Vinted | 🟢 Basso |
| **5. Operatività & Logistica** | **7.0 / 10** | Eterogeneità pesi/volumi richiede convenzioni corriere multi-taglia | 🟡 Medio |
| **6. Superamento "Cold Start" (Liquidità)** | **7.5 / 10** | Risolvibile con strategia fondatori off-line (20-30 officine) | 🟡 Medio |
| **INDICE COMPLESSIVO DI FATTIBILITÀ** | **8.0 / 10** | **PROGETTO FATTIBILE & AD ELEVATO POTENZIALE (GO CON VINCOLI)** | 🟡 Moderato |

---

## 1. ANALISI DI MERCATO & TARGET

### 1.1 Dinamica del Parco Circolante Harley-Davidson
* **Italia**: È il 3° mercato europeo per Harley-Davidson (dopo Germania e Francia). Si stima un parco circolante attivo tra **110.000 e 130.000 motociclette**, con circa 4.500–5.500 nuove immatricolazioni annue nel segmento Cruiser/Custom >500cc.
* **Tasso di Personalizzazione Straordinario**: Oltre il **78% dei proprietari** sostituisce almeno un componente originale nei primi 24 mesi dall'acquisto (scarichi, manubri, specchietti, selle, pedane, derby cover).
* **Il "Paradosso del Garage"**: I pezzi originali smontati dai proprietari non vengono gettati perché hanno valore intrinseco (metallo pesante, cromature, ricambi ufficiali), ma rimangono stipati in scatoloni per anni. Da qui il nome e il problema reale risolto da **Free Your Garage**.

### 1.2 Dimensione del Mercato (TAM, SAM, SOM)
* **TAM (Total Addressable Market - Europa)**:
  * ~900.000 moto Harley-Davidson circolanti in UE.
  * Valore transato stimato del mercato secondario ricambi e accessori H-D in Europa: **~180M € / anno**.
* **SAM (Serviceable Addressable Market - Italia & DACH)**:
  * ~280.000 moto circolanti (Italia, Germania, Austria, Svizzera).
  * Valore transato stimato: **~56M € / anno**.
* **SOM (Serviceable Obtainable Market - Obiettivo Anno 2-3 FYG)**:
  * Target: 3.500 utenti attivi con almeno 1 transazione/anno.
  * Volume transato (GMV): **~420.000 € / anno** (pari a ~3.500 transazioni con scontrino medio 120 €).

### 1.3 Perché i Canali Esistenti Falliscono (Gap Analysis)
* **Facebook Marketplace / Gruppi**: Nessun filtro per modello/anno; truffe con pagamenti ricarica Postepay; annunci caotici privi di codice OEM; rischio ban da policy Meta su compravendita motori.
* **Subito.it / eBay**: Categoria "Accessori moto" generica; nessuna distinzione tecnica tra telai (es. confusione totale tra Softail pre-2018 e Softail mono-shock 2018+); venditori generalisti non competenti.
* **Vinted / Wallapop**: Non concepite per ricambi pesanti, parti meccaniche o codici motore; zero filtri per cilindrata o famiglia telaio.

---

## 2. FATTIBILITÀ TECNOLOGICA & ARCHITETTURA DI COSTO

### 2.1 Stack Raccomandato per la Fase 1 & 2
* **Mobile & Web App (Unica Codebase)**: **React Native + Expo** (export nativo iOS, Android e Web SPA ad alte prestazioni).
* **Backend & Database**: **Supabase** (PostgreSQL con estensioni PostGIS per filtri di prossimità geografica, Row-Level Security, Storage S3 integrato per immagini).
* **AI Engine (Assistente Annuncio & Quality Check)**:
  * *Vision*: Validazione nitidezza e rilevamento pezzo meccanico (Gemini 2.5 Flash API a consumo).
  * *NLP*: Generatore automatico del titolo normalizzato secondo standard (`[Componente] – [Famiglia Anno] – cod. [OEM]`).
* **Pagamenti & Escrow (Fase 2)**: **Stripe Connect** (Custom Accounts / Express per gestione automatica del trattenimento fondi e rilascio a consegna confermata, sollevando la piattaforma dalla qualifica di intermediario finanziario bancario).

### 2.2 Costi Tecnici di Avvio & Esercizio

| Voce di Costo | Fase 1 (Mesi 1–8, Lancio Gratuito) | Fase 2 (Mese 12+, A Regime) | Note Tecniche |
| :--- | :---: | :---: | :--- |
| **Sviluppo Software** | **0 €** (In-house) / **8k–12k €** (Esterno) | Manutenzione evolutiva | Prototipo già operativo su GitHub |
| **Hosting & Database (Supabase)** | **0 € / mese** (Tier Free fino a 500MB DB) | **25 $ / mese** (Pro Tier) | Scalabilità automatica fino a 100k utenti |
| **Account Sviluppatore Apple & Google** | **124 $ anno** (99$ Apple + 25$ Google una tantum) | **99 $ / anno** | Obbligatorio per App Store e Play Store |
| **Vision & NLP AI APIs** | **< 5 € / mese** (Frazioni di centesimo per annuncio) | **~30 € / mese** | Fino a 10.000 chiamate/mese |
| **Dominio & CDN (Cloudflare)** | **12 € / anno** | **12 € / anno** | SSL, caching foto e protezione DDoS |
| **TOTALE COSTI FISSI INFRASTRUTTURA** | **~25 € / mese** | **~60–80 € / mese** | **Barriera d'ingresso tecnologica quasi azzerata** |

---

## 3. UNIT ECONOMICS & MODELLO FINANZIARIO

### 3.1 Anatomia della Transazione Media (Fase 2 a Pagamento)
A differenza di Vinted (dove lo scontrino medio è 18–25 €), il mondo Harley-Davidson movimenta ricambi in metallo, cromo ed elettronica ad alto valore aggiunto.

* **Scontrino Medio Stimato (AOV - Average Order Value)**: **120,00 €**
* **Commissione di Protezione Acquirente (Buyer Protection Fee)**: **6% + 0,80 € fisso**
  * Introito commissionale piattaforma: `(120 € * 6%) + 0,80 €` = **8,00 €**
* **Margine su Spedizione Convenzionata (Corriere Nazionale BRT/GLS/InPost)**:
  * Costo pagato dall'acquirente: 8,50 €
  * Costo all'ingrosso concordato con corriere/broker (Sendcloud/Packlink): 6,90 €
  * Margine logistico netto piattaforma: **1,60 €**
* **FEE LORDA TOTALE PER TRANSAZIONE**: **9,60 €** (pari all'8,0% del transato)
* **Costo transazione Stripe Connect (1,5% + 0,25 €)**: - 2,05 €
* **MARGINE NETTO CONTRIBUZIONE PER VENDITA**: **~ 7,55 €**

### 3.2 Analisi di Break-Even Point (Punto di Pareggio Operativo)
* **Costi fissi operativi a regime (Server + Tooling + Amministrazione minima)**: **~ 350 € / mese**.
* **Transazioni mensili necessarie per il Break-Even**:
  $$\text{Break-Even} = \frac{350 €}{7,55 €} \approx \mathbf{46 \text{ vendite al mese}}$$
* **Commento**: Bastano **meno di 2 transazioni al giorno** su tutto il territorio nazionale per coprire integralmente tutti i costi operativi della piattaforma.

---

## 4. FATTIBILITÀ LEGALE & PROPRIETÀ INDUSTRIALE (IP WATCHDOG)

Questa è l'area più critica del progetto: Harley-Davidson Inc. è un'azienda nota a livello globale per la tutela implacabile dei propri marchi (*The Motor Company*).

### 4.1 Principio dell'Esaurimento del Marchio (Art. 5 CPI / Art. 15 Dir. UE 2015/2436)
* Una volta che un pezzo originale Harley-Davidson è stato legittimamente immesso sul mercato europeo dal produttore o con il suo consenso, **il titolare del marchio non può vietarne la successiva rivendita tra privati o officine**.
* La compravendita di parti di ricambio autentiche di seconda mano è **100% legale e tutelata dal diritto dell'Unione Europea**.

### 4.2 Dottrina dell'Uso Descrittivo e Nominativo (Nominative Fair Use)
* L'uso delle parole "Harley-Davidson", "Softail", "Touring", "Sportster", "Evolution" è lecito **soltanto come indicazione tecnica di compatibilità del ricambio** (es. *"Coperchio per telaio Softail"*).
* **Vincoli perentori da rispettare**:
  1. ❌ **Divieto assoluto** di inserire "Harley", "HD" o "Hog" nel nome dell'applicazione, nel dominio web o nell'icona dell'app (Rispettato: il nome è *Free Your Garage*).
  2. ❌ **Divieto assoluto** di riprodurre il logo "Bar & Shield" (lo scudetto alato) o la combinazione di colori pantone societario arancione/nero ad alto contrasto (Rispettato: la palette scelta è sabbia/officina d'epoca).
  3. ✅ **Obbligo di Disclaimer Esplicito**: Presente in home, nel footer e nei termini:  
     *"Free Your Garage non è affiliata né autorizzata da Harley-Davidson Inc. I marchi citati appartengono ai rispettivi titolari e sono usati al solo scopo di indicare la compatibilità dei prodotti."*

### 4.3 Conformità al Digital Services Act (DSA - Regolamento UE 2022/2065)
* Implementazione di un modulo di segnalazione immediata delle violazioni (pulsante *"Segnala come falso / non originale"* già implementato nel prototipo).
* Obbligo di tracciabilità "KYB" (Know Your Business) per venditori professionali (partita IVA) che superano determinate soglie di volume.

---

## 5. PIANO OPERATIVO: COME RISOLVERE IL "COLD START PROBLEM"

Un marketplace senza annunci fallisce al giorno 1. Come validare e popolare l'offerta?

```
[Mese 1-2] RECLUTAMENTO 25 OFFICINE FONDATE
         │
         ▼
[Mese 3] CARICAMENTO ASSISTITO MAGAZZINO (Target: 500 pezzi reali)
         │
         ▼
[Mese 4-6] LANCIO BETA PUBBLICA NORD-EST (Treviso, Verona, Padova, Vicenza)
         │
         ▼
[Mese 7-10] ESPANSIONE RADUNI & HOG CHAPTERS (Roma, Milano, Brescia)
         │
         ▼
[Mese 12+] RILASCIO FASE 2: PAGAMENTO ESCROW & SPEDIZIONI INTEGRATE
```

1. **Strategia "Concierge" per i Primi 25 Venditori**:
   * Nicola / il team visita fisicamente le prime 20-30 officine specializzate indipendenti e collezionisti tra Veneto e Lombardia.
   * L'onboarding del loro magazzino fermo viene fatto con smartphone e foto guidate dal team di FYG, azzerando la frizione per il venditore.
   * Incentivo: Badge esclusivo **"Membro Fondatore"** e **0% di commissioni a vita** anche nella Fase 2.
2. **Perché partire dal Nord-Est / Nord Italia**:
   * Massima concentrazione di immatricolazioni Harley-Davidson e presenza capillare di capitoli HOG storici (es. Verona Chapter, Vicenza Chapter, Treviso Chapter, Padova Chapter).
   * Elevata facilità iniziale per scambi con consegna a mano prima dell'attivazione della logistica gestita.

---

## 6. PRE-MORTEM ANALYSIS: I 4 RISCHI FATALI E LE CONTROMISURE

| Rischio Identificato | Probabilità | Impatto | Azione Preventiva di Disinnesco |
| :--- | :---: | :---: | :--- |
| **1. Disintermediazione (Scavalcamento)**<br>*Gli utenti si scrivono in chat e concludono fuori app.* | **Alta** | **Medio** | • In Fase 1 è tollerata (l'obiettivo è il volume).<br>• In Fase 2, la commissione è a carico dell'acquirente (5-8%) e finanzia l'etichetta prepagata e l'assicurazione anti-falso. Scavalcare espone l'acquirente al rischio truffa. |
| **2. Diffida Legale da Harley-Davidson**<br>*Richiesta di rimozione per violazione marchio.* | **Bassa** | **Alto** | • Rispetto ferreo del disclaimer e divieto di uso loghi registrati.<br>• Registrazione preventiva del marchio figurativo *Free Your Garage* presso EUIPO/UIBM. |
| **3. Logistica di Ricambi Pesanti / Voluminosi**<br>*Spedire serbatoi o scarichi da 15kg costa 25€ e si danneggiano.* | **Media** | **Medio** | • Prevedere 3 fasce di spedizione (S: <1kg, M: 1-5kg, L: 5-15kg, XL: Ritiro a mano consigliato per telai/motori interi).<br>• Guide illustrate su imballaggio sicuro con pluriball rinforzato. |
| **4. Mancanza di Liquidità Iniziale (Offerta Vuota)** | **Media** | **Critico** | • Divieto di apertura pubblica dell'app finché non sono caricati a sistema **almeno 500 ricambi reali verificati**. |

---

## 7. VERDETTO FINALE & CRITERI DI GO / NO-GO

### VERDETTO: 🟢 **GO (PROGETTO FATTIBILE E COMMERCIALIZZABILE)**

Il progetto ha fondamentali di business superiori ai tipici marketplace C2C:
* **Scontrino medio 4-5 volte superiore a Vinted** (120 € vs 25 €).
* **Comunità di nicchia coesa, appassionata e disposta a pagare** per l'originalità e la certezza della compatibilità meccanica.
* **Costi fissi tecnologici vicini allo zero** nella fase iniziale.

### MILESTONE DECISIONALE PER IL GO-TO-MARKET:
1. **Verifica 1 (Entro 4 settimane)**: Condurre interviste sul campo a 15 officine/biker con il prototipo live ([`https://nicolavaligi.github.io/free-your-garage/`](https://nicolavaligi.github.io/free-your-garage/)).
   * *Criterio di Successo*: Almeno 12 su 15 confermano la frustrazione nell'usare Facebook/Subito e dichiarano disponibilità a caricare il magazzino ricambi invenduto.
2. **Verifica 2 (Entro 8 settimane)**: Raccogliere lettere d'intenti informali da 20 officine/collezionisti fondatori per un totale di almeno 400 pezzi pronti al caricamento.
3. **Decisione di Investimento**: Solo a verifica 2 superata, procedere con l'implementazione del backend e la registrazione EUIPO.

---
*Documento di Proprietà Intellettuale di Nicola Valigi (Houdinick) · Free Your Garage IP Asset*
