// Free Your Garage (FYG) - Interactive App Prototype
// Designed & Built for Nicola Valigi (Houdinick)

const H_D_FAMILIES = [
  { id: 'softail_new', name: 'Softail (2018+)', family: 'Softail', years: 'dal 2018', note: 'Nuovo telaio monoammortizzatore, include ex Dyna' },
  { id: 'softail_old', name: 'Softail (fino al 2017)', family: 'Softail', years: 'fino al 2017', note: 'Telaio tradizionale con doppi ammortizzatori sotto il cambio' },
  { id: 'dyna', name: 'Dyna (1991–2017)', family: 'Dyna', years: '1991–2017', note: 'Doppio ammortizzatore posteriore a vista, attacco motore elastico' },
  { id: 'touring_m8', name: 'Touring (dal 2017)', family: 'Touring', years: 'dal 2017', note: 'Motore Milwaukee-Eight, telaio FLH aggiornato' },
  { id: 'touring_tc', name: 'Touring (2009–2016)', family: 'Touring', years: '2009–2016', note: 'Telaio rinforzato 2009+, Twin Cam' },
  { id: 'touring_old', name: 'Touring (fino al 2008)', family: 'Touring', years: 'fino al 2008', note: 'Telaio touring classico pre-2009' },
  { id: 'sportster_evo', name: 'Sportster Evolution (1986–2022)', family: 'Sportster', years: '1986–2022', note: 'Blocco Evolution 883 / 1200, a carburatore o iniezione' },
  { id: 'sportster_rev', name: 'Sportster Revolution Max (dal 2021)', family: 'Sportster', years: 'dal 2021', note: 'Nuovo motore a liquido Sportster S / Nightster' },
  { id: 'vrod', name: 'V-Rod / VRSC (2002–2017)', family: 'V-Rod', years: '2002–2017', note: 'Motore Revolution raffreddato a liquido 1130/1250' },
  { id: 'oldschool_shovel', name: 'Old School: Shovelhead (1966–1984)', family: 'Old School', years: '1966–1984', note: 'Testa a pala, moto d\'epoca oltre 40 anni' },
  { id: 'oldschool_pan', name: 'Old School: Panhead (1948–1965)', family: 'Old School', years: '1948–1965', note: 'Testa a padella, pezzo da collezione' },
  { id: 'oldschool_knuck', name: 'Old School: Knucklehead (1936–1947)', family: 'Old School', years: '1936–1947', note: 'Testa a nocche, pre-guerra e immediato dopoguerra' }
];

const CATEGORIES = [
  { id: 'motore', name: 'Motore e trasmissione', icon: '⚙️', count: 48 },
  { id: 'scarichi', name: 'Scarichi e aspirazione', icon: '💨', count: 35 },
  { id: 'carrozzeria', name: 'Carrozzeria e serbatoi', icon: '🛢️', count: 29 },
  { id: 'selle', name: 'Selle e schienali', icon: '🪑', count: 22 },
  { id: 'ciclistica', name: 'Ciclistica: forcelle, cerchi, freni', icon: '🛑', count: 41 },
  { id: 'elettrico', name: 'Impianto elettrico e strumenti', icon: '⚡', count: 19 },
  { id: 'manubri', name: 'Manubri e comandi', icon: '🏍️', count: 33 },
  { id: 'borse', name: 'Borse e bauletti', icon: '🎒', count: 18 },
  { id: 'accessori', name: 'Accessori e cromature', icon: '✨', count: 26 },
  { id: 'abbigliamento', name: 'Abbigliamento e oggettistica', icon: '🧥', count: 15 }
];

// Initial realistic database of listings strictly following PDF guidelines
let LISTINGS_DB = [
  {
    id: 'fyg-001',
    title: 'Coperchio Frizione Derby Cover – Softail 2018+ – cod. 25700941',
    familyId: 'softail_new',
    familyName: 'Softail',
    years: '2018+',
    category: 'motore',
    categoryName: 'Motore e trasmissione',
    oemCode: '25700941',
    isOem: true,
    condition: 'Pari al nuovo',
    price: 95,
    location: 'Verona (VR)',
    seller: { name: 'Marco B.', badge: 'Fondatore #014', rating: '5.0 (28 vendite)', verified: true },
    description: 'Coperchio frizione originale Derby Cover finitura Gloss Black. Smontato da Softail Street Bob 107 con 800 km per passaggio a collezione personalizzata. Marcatura OEM 25700941 visibile e intatta. Guarnizione O-ring inclusa.',
    photos: {
      overall: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
      sideA: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=400&q=80',
      oemMark: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=400&q=80',
      defects: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=400&q=80'
    },
    specialSection: null,
    createdAt: 'Oggi'
  },
  {
    id: 'fyg-002',
    title: 'Sella Biposto Badlander Originale – Sportster 2004-2020 – cod. 51747-07',
    familyId: 'sportster_evo',
    familyName: 'Sportster',
    years: '1986–2022',
    category: 'selle',
    categoryName: 'Selle e schienali',
    oemCode: '51747-07',
    isOem: true,
    condition: 'Ottimo stato',
    price: 180,
    location: 'Treviso (TV)',
    seller: { name: 'Garage Old Iron', badge: 'Officina Specializzata', rating: '4.9 (42 vendite)', verified: true },
    description: 'Sella originale profilo basso Badlander in pelle vinilica nera con ricamo Harley-Davidson discreto. Monta direttamente su serbatoi da 3.3 e 4.5 galloni 2004-2020. Nessun taglio o scucitura.',
    photos: {
      overall: 'https://images.unsplash.com/photo-1558980394-0a06c4631733?auto=format&fit=crop&w=800&q=80',
      sideA: 'https://images.unsplash.com/photo-1558980394-0a06c4631733?auto=format&fit=crop&w=400&q=80',
      oemMark: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=400&q=80',
      defects: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=400&q=80'
    },
    specialSection: null,
    createdAt: 'Ieri'
  },
  {
    id: 'fyg-003',
    title: 'Carburatore Linkert M74B Originale – Panhead 1948–1965 – cod. 27152-48',
    familyId: 'oldschool_pan',
    familyName: 'Old School',
    years: '1948–1965',
    category: 'motore',
    categoryName: 'Motore e trasmissione',
    oemCode: '27152-48',
    isOem: true,
    condition: 'Da restaurare / Revisionato',
    price: 680,
    location: 'Bologna (BO)',
    seller: { name: 'Vito "Knuck" R.', badge: 'Collezionista Fondatore', rating: '5.0 (15 vendite)', verified: true },
    description: 'Rarissimo pezzo autentico per motori Panhead 74ci. Fusione in bronzo integra, farfalla libera senza giochi anomali, getti originali. Marcatura M-74B nitida in rilievo sul corpo. Ideale per restauro omologato ASI/FMI.',
    photos: {
      overall: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=800&q=80',
      sideA: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=400&q=80',
      oemMark: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=400&q=80',
      defects: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=400&q=80'
    },
    specialSection: 'Old School (Panhead)',
    createdAt: '3 gg fa'
  },
  {
    id: 'fyg-004',
    title: 'Coppia Terminali Street Cannon Cromati – Touring 2017+ – cod. 64900552',
    familyId: 'touring_m8',
    familyName: 'Touring',
    years: 'dal 2017',
    category: 'scarichi',
    categoryName: 'Scarichi e aspirazione',
    oemCode: '64900552',
    isOem: true,
    condition: 'Pari al nuovo',
    price: 490,
    location: 'Milano (MI)',
    seller: { name: 'Andrea Motos', badge: 'Venditore Verificato', rating: '4.8 (19 vendite)', verified: true },
    description: 'Silenziatori Screamin\' Eagle Street Cannon 4.5" con omologazione ECE incisa sul fodero. Finitura cromo a specchio, nessun segno di pietrisco o bruciature. Fondelli Slash Cut inclusi. Monta su Road King, Street Glide, Road Glide M8.',
    photos: {
      overall: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=800&q=80',
      sideA: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=400&q=80',
      oemMark: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=400&q=80',
      defects: 'https://images.unsplash.com/photo-1558980394-0a06c4631733?auto=format&fit=crop&w=400&q=80'
    },
    specialSection: null,
    createdAt: 'Oggi'
  },
  {
    id: 'fyg-005',
    title: 'Manubrio Hollywood Bar 1" Nero Lucido – Softail 2018+ – cod. 55800579',
    familyId: 'softail_new',
    familyName: 'Softail',
    years: '2018+',
    category: 'manubri',
    categoryName: 'Manubri e comandi',
    oemCode: '55800579',
    isOem: true,
    condition: 'Nuovo (fondo magazzino)',
    price: 135,
    location: 'Padova (PD)',
    seller: { name: 'Lorenzo Custom', badge: 'Fondatore #008', rating: '5.0 (31 vendite)', verified: true },
    description: 'Classico manubrio vintage con traversino centrale cromato stile bobber anni \'40. Predisposto per cablaggio interno e comando gas elettronico TBW. Ancora nella scatola protettiva originale con etichetta Bar & Shield.',
    photos: {
      overall: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
      sideA: 'https://images.unsplash.com/photo-1558980394-0a06c4631733?auto=format&fit=crop&w=400&q=80',
      oemMark: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=400&q=80',
      defects: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=400&q=80'
    },
    specialSection: null,
    createdAt: '3 gg fa'
  }
];

// App State
let APP_STATE = {
  viewMode: 'mobile', // 'mobile' or 'desktop'
  activeScreen: 'home',
  selectedListing: null,
  currentBike: {
    id: 'bike-01',
    name: 'Softail Street Bob 107',
    familyId: 'softail_new',
    familyName: 'Softail',
    years: '2018+',
    engine: 'Milwaukee-Eight 107'
  },
  userGarage: [
    {
      id: 'bike-01',
      name: 'Softail Street Bob 107',
      familyId: 'softail_new',
      familyName: 'Softail',
      years: '2018+',
      engine: 'Milwaukee-Eight 107',
      active: true
    },
    {
      id: 'bike-02',
      name: 'Sportster Iron 883 (2016)',
      familyId: 'sportster_evo',
      familyName: 'Sportster',
      years: '1986–2022',
      engine: 'Evolution 883',
      active: false
    }
  ],
  searchFilters: {
    query: '',
    familyId: 'all',
    category: 'all',
    onlyOem: false,
    onlyCompatible: true
  },
  wizard: {
    step: 1,
    familyId: 'softail_new',
    category: 'motore',
    specialSection: 'none',
    photosUploaded: {
      overall: false,
      sideA: false,
      oemMark: false,
      defects: false
    },
    oemCode: '',
    condition: 'Pari al nuovo',
    price: '',
    city: 'Vicenza (VI)',
    aiTitle: '',
    aiDesc: ''
  },
  chatMessages: [
    { sender: 'seller', text: 'Ciao! Il pezzo è disponibile e pronto per essere spedito o ritirato a mano.' },
    { sender: 'seller', text: 'È assolutamente originale OEM con scatola, come mostrato nella foto della marcatura.' }
  ]
};

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderActiveBikeHeader();
  renderCategoriesGrid();
  renderHomeCompatibleFeed();
  setupEventListeners();
  populateDropdowns();
});

// Switch screens
function navigateTo(screenId, listingId = null) {
  APP_STATE.activeScreen = screenId;
  
  // Hide all screens
  document.querySelectorAll('.screen-view').forEach(el => el.classList.remove('active'));
  
  // Update bottom nav
  document.querySelectorAll('.nav-item').forEach(el => {
    el.classList.toggle('active', el.dataset.screen === screenId);
  });

  const targetScreen = document.getElementById(`screen-${screenId}`);
  if (targetScreen) targetScreen.classList.add('active');

  if (screenId === 'home') {
    renderHomeCompatibleFeed();
  } else if (screenId === 'search') {
    renderSearchResults();
  } else if (screenId === 'detail' && listingId) {
    const item = LISTINGS_DB.find(l => l.id === listingId);
    if (item) {
      APP_STATE.selectedListing = item;
      renderDetailScreen(item);
    }
  } else if (screenId === 'garage') {
    renderGarageScreen();
  } else if (screenId === 'post') {
    resetOrUpdateWizard();
  }

  // Scroll app to top
  const container = document.querySelector('.master-viewport');
  if (container) container.scrollTop = 0;
}

// Render Active Bike in Top Banner
function renderActiveBikeHeader() {
  const pillTitle = document.getElementById('header-bike-name');
  if (pillTitle && APP_STATE.currentBike) {
    pillTitle.textContent = `${APP_STATE.currentBike.name} (${APP_STATE.currentBike.years})`;
  }
}

// Render Categories Grid on Home
function renderCategoriesGrid() {
  const grid = document.getElementById('categories-grid');
  if (!grid) return;
  grid.innerHTML = '';

  CATEGORIES.forEach(cat => {
    // Count pieces compatible with current bike
    const compCount = LISTINGS_DB.filter(l => 
      l.category === cat.id && (l.familyId === APP_STATE.currentBike.familyId || l.familyId === 'all')
    ).length;

    const div = document.createElement('div');
    div.className = 'cat-tile';
    div.innerHTML = `
      <div class="cat-icon">${cat.icon}</div>
      <div class="cat-info">
        <h4>${cat.name}</h4>
        <span>${compCount} pezzi compatibili</span>
      </div>
    `;
    div.addEventListener('click', () => {
      APP_STATE.searchFilters.category = cat.id;
      APP_STATE.searchFilters.onlyCompatible = true;
      navigateTo('search');
    });
    grid.appendChild(div);
  });
}

// Render Home Compatible Listings Feed
function renderHomeCompatibleFeed() {
  const feed = document.getElementById('home-compatible-feed');
  const countLabel = document.getElementById('home-compat-count');
  if (!feed) return;

  // Filter listings by current bike
  const compatibleListings = LISTINGS_DB.filter(l => 
    l.familyId === APP_STATE.currentBike.familyId
  );

  if (countLabel) {
    countLabel.textContent = `${compatibleListings.length} annunci per ${APP_STATE.currentBike.name}`;
  }

  feed.innerHTML = '';
  if (compatibleListings.length === 0) {
    feed.innerHTML = `
      <div style="background:#fff; padding:20px; text-align:center; border-radius:10px; border:1px dashed #ccc;">
        <p style="font-size:13px; color:#666;">Nessun ricambio specifico caricato oggi per questa famiglia.</p>
        <button class="chip-btn" style="margin-top:10px;" onclick="APP_STATE.searchFilters.familyId='all'; navigateTo('search');">
          Esplora tutti i ricambi catalogo
        </button>
      </div>
    `;
    return;
  }

  compatibleListings.forEach(item => {
    feed.appendChild(createListingCardElement(item, true));
  });
}

// Create a Card Element for Listings
function createListingCardElement(item, isMatchedWithActiveBike = false) {
  const card = document.createElement('div');
  card.className = 'listing-card';
  card.innerHTML = `
    <div class="listing-card-img" style="background-image: url('${item.photos.overall}');">
      <div class="photo-count">📸 4 foto</div>
    </div>
    <div class="listing-card-body">
      <div>
        <div class="card-compat-row">
          ${isMatchedWithActiveBike 
            ? `<span class="badge-tag compatible">✅ Compatibile</span>` 
            : `<span class="badge-tag" style="background:#eee; color:#555;">${item.familyName}</span>`
          }
          ${item.isOem ? `<span class="badge-tag oem-genuine">OEM Originale</span>` : ''}
          ${item.specialSection ? `<span class="badge-tag old-school">${item.specialSection}</span>` : ''}
        </div>
        <div class="listing-card-title">${item.title}</div>
        <div class="listing-card-oem">Codice: <strong>${item.oemCode || 'Non marcato'}</strong> · ${item.condition}</div>
      </div>
      <div class="listing-card-footer">
        <span class="listing-card-price">${item.price} €</span>
        <span class="listing-card-meta">📍 ${item.location} · ${item.createdAt}</span>
      </div>
    </div>
  `;

  card.addEventListener('click', () => {
    navigateTo('detail', item.id);
  });

  return card;
}

// Render Search Results with dynamic filtering
function renderSearchResults() {
  const container = document.getElementById('search-results-list');
  const countLabel = document.getElementById('search-results-count');
  if (!container) return;

  const q = APP_STATE.searchFilters.query.toLowerCase().trim();
  const fam = APP_STATE.searchFilters.familyId;
  const cat = APP_STATE.searchFilters.category;
  const onlyOem = APP_STATE.searchFilters.onlyOem;
  const onlyComp = APP_STATE.searchFilters.onlyCompatible;

  const filtered = LISTINGS_DB.filter(l => {
    // Text search in title, OEM code, description, location
    const matchText = !q || 
      l.title.toLowerCase().includes(q) || 
      l.oemCode.toLowerCase().includes(q) || 
      l.description.toLowerCase().includes(q) ||
      l.location.toLowerCase().includes(q);

    // Family filter
    const matchFam = (fam === 'all') || (l.familyId === fam);

    // Category filter
    const matchCat = (cat === 'all') || (l.category === cat);

    // OEM filter
    const matchOem = !onlyOem || l.isOem;

    // Bike Compatibility toggle
    const matchComp = !onlyComp || (l.familyId === APP_STATE.currentBike.familyId);

    return matchText && matchFam && matchCat && matchOem && matchComp;
  });

  if (countLabel) {
    countLabel.textContent = `${filtered.length} ricambi trovati`;
  }

  container.innerHTML = '';
  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="background:#fff; padding:30px 20px; text-align:center; border-radius:10px; border:1px dashed #ccc;">
        <div style="font-size:28px; margin-bottom:8px;">🔍</div>
        <h4 style="font-size:14px; margin-bottom:4px;">Nessun ricambio corrisponde ai filtri</h4>
        <p style="font-size:12px; color:#666; margin-bottom:12px;">Prova a disattivare il filtro moto compatibile o cerca con un codice OEM parziale.</p>
        <button class="chip-btn active" onclick="resetSearchFilters()">Reimposta tutti i filtri</button>
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const isComp = (item.familyId === APP_STATE.currentBike.familyId);
    container.appendChild(createListingCardElement(item, isComp));
  });
}

function resetSearchFilters() {
  APP_STATE.searchFilters.query = '';
  APP_STATE.searchFilters.familyId = 'all';
  APP_STATE.searchFilters.category = 'all';
  APP_STATE.searchFilters.onlyOem = false;
  APP_STATE.searchFilters.onlyCompatible = false;
  
  const searchInput = document.getElementById('search-omnibox');
  if (searchInput) searchInput.value = '';
  
  const selectFam = document.getElementById('search-select-family');
  if (selectFam) selectFam.value = 'all';

  const selectCat = document.getElementById('search-select-cat');
  if (selectCat) selectCat.value = 'all';

  updateSearchChipStyles();
  renderSearchResults();
}

// Render Detail Screen
function renderDetailScreen(item) {
  // Check compatibility with user's current bike
  const isMatch = (item.familyId === APP_STATE.currentBike.familyId);

  // Set Title & Breadcrumbs
  document.getElementById('detail-title').textContent = item.title;
  document.getElementById('detail-price').textContent = `${item.price} €`;
  document.getElementById('detail-description').textContent = item.description;

  // Set Photos in 4-Slot Inspection Gallery
  const slotMain = document.getElementById('slot-photo-main');
  const slotSideA = document.getElementById('slot-photo-sideA');
  const slotOem = document.getElementById('slot-photo-oem');
  const slotDefects = document.getElementById('slot-photo-defects');

  if (slotMain) slotMain.style.backgroundImage = `url('${item.photos.overall}')`;
  if (slotSideA) slotSideA.style.backgroundImage = `url('${item.photos.sideA}')`;
  if (slotOem) slotOem.style.backgroundImage = `url('${item.photos.oemMark}')`;
  if (slotDefects) slotDefects.style.backgroundImage = `url('${item.photos.defects}')`;

  // Compatibility Box
  const compatBox = document.getElementById('detail-compat-box');
  if (compatBox) {
    if (isMatch) {
      compatBox.className = 'compatibility-box match';
      compatBox.innerHTML = `
        <div class="compat-icon">✅</div>
        <div class="compat-text">
          <h4>100% Compatibile con il tuo Garage</h4>
          <p>Monta direttamente sulla tua <strong>${APP_STATE.currentBike.name}</strong> (${APP_STATE.currentBike.years}) senza alcuna modifica di telaio o forature.</p>
        </div>
      `;
    } else {
      compatBox.className = 'compatibility-box mismatch';
      compatBox.innerHTML = `
        <div class="compat-icon">⚠️</div>
        <div class="compat-text mismatch-text">
          <h4>Attenzione: Non è per la tua moto attuale</h4>
          <p>Questo ricambio è per <strong>${item.familyName} (${item.years})</strong>. La tua moto attiva è <em>${APP_STATE.currentBike.name}</em>.</p>
        </div>
      `;
    }
  }

  // Specs Table
  document.getElementById('spec-family').textContent = `${item.familyName} (${item.years})`;
  document.getElementById('spec-category').textContent = item.categoryName;
  document.getElementById('spec-oem').textContent = item.oemCode || 'N/D';
  document.getElementById('spec-condition').textContent = item.condition;
  document.getElementById('spec-location').textContent = item.location;

  // Seller card
  document.getElementById('detail-seller-name').textContent = item.seller.name;
  document.getElementById('detail-seller-badge').textContent = item.seller.badge;
  document.getElementById('detail-seller-rating').textContent = `⭐ ${item.seller.rating}`;
}

// Render Garage Screen
function renderGarageScreen() {
  const container = document.getElementById('garage-bikes-list');
  if (!container) return;
  container.innerHTML = '';

  APP_STATE.userGarage.forEach(bike => {
    const isCurrent = (bike.id === APP_STATE.currentBike.id);
    const div = document.createElement('div');
    div.className = `bike-card ${isCurrent ? 'current-active' : ''}`;
    div.innerHTML = `
      <div style="display:flex; align-items:center; gap:12px;">
        <div class="bike-icon-circle" style="background:${isCurrent ? 'var(--rust-orange)' : '#666'};">🏍️</div>
        <div class="bike-card-info">
          <h4>${bike.name}</h4>
          <p>${bike.familyId.toUpperCase()} · ${bike.years} · ${bike.engine}</p>
        </div>
      </div>
      <div>
        ${isCurrent 
          ? `<span class="badge-active-tag">Attiva Ora</span>` 
          : `<button class="chip-btn" style="font-size:11px;" onclick="activateBike('${bike.id}')">Attiva</button>`
        }
      </div>
    `;
    container.appendChild(div);
  });
}

function activateBike(bikeId) {
  const b = APP_STATE.userGarage.find(x => x.id === bikeId);
  if (b) {
    APP_STATE.currentBike = b;
    APP_STATE.userGarage.forEach(x => x.active = (x.id === bikeId));
    renderActiveBikeHeader();
    renderCategoriesGrid();
    renderHomeCompatibleFeed();
    renderGarageScreen();
    closeAllModals();
  }
}

// Wizard for Posting New Listing (5 Steps as per Phase 5)
function resetOrUpdateWizard() {
  renderWizardStep();
}

function renderWizardStep() {
  const step = APP_STATE.wizard.step;

  // Update indicators
  for (let i = 1; i <= 5; i++) {
    const el = document.getElementById(`wizard-step-ind-${i}`);
    if (el) {
      el.classList.remove('active', 'completed');
      if (i === step) el.classList.add('active');
      else if (i < step) el.classList.add('completed');
    }

    const pane = document.getElementById(`wizard-pane-${i}`);
    if (pane) {
      pane.classList.toggle('active', i === step);
    }
  }

  // Button labels
  const btnPrev = document.getElementById('btn-wizard-prev');
  const btnNext = document.getElementById('btn-wizard-next');

  if (btnPrev) btnPrev.style.display = (step === 1) ? 'none' : 'block';
  if (btnNext) {
    if (step === 5) {
      btnNext.textContent = '🚀 Pubblica Annuncio Gratuitamente';
      btnNext.style.background = 'var(--forest-sage)';
    } else {
      btnNext.textContent = 'Continua ➔';
      btnNext.style.background = 'var(--rust-orange)';
    }
  }
}

function wizardNext() {
  if (APP_STATE.wizard.step < 5) {
    // If transitioning from step 4 to 5, auto generate AI description if blank
    if (APP_STATE.wizard.step === 4) {
      generateAiListingMetadata();
    }
    APP_STATE.wizard.step++;
    renderWizardStep();
  } else {
    // Final publish
    publishListingFromWizard();
  }
}

function wizardPrev() {
  if (APP_STATE.wizard.step > 1) {
    APP_STATE.wizard.step--;
    renderWizardStep();
  }
}

// Simulate Photo Upload with AI Quality Check
function simulatePhotoUpload(type) {
  APP_STATE.wizard.photosUploaded[type] = true;
  const box = document.getElementById(`photo-slot-${type}`);
  if (box) {
    box.classList.add('uploaded');
    box.querySelector('.icon').textContent = '✅';
    box.querySelector('h5').textContent = 'Foto Verificata';
    box.querySelector('span').textContent = 'Risoluzione 100%, Nitidezza OK';
  }

  // Check if all 4 uploaded
  const all4 = Object.values(APP_STATE.wizard.photosUploaded).every(v => v === true);
  const badge = document.getElementById('ai-photo-check-badge');
  if (badge) {
    badge.style.display = all4 ? 'flex' : 'none';
  }
}

// AI Assistant generates title and formatted description (Phase 5 rule)
function generateAiListingMetadata() {
  const famObj = H_D_FAMILIES.find(f => f.id === APP_STATE.wizard.familyId) || H_D_FAMILIES[0];
  const catObj = CATEGORIES.find(c => c.id === APP_STATE.wizard.category) || CATEGORIES[0];
  const oem = APP_STATE.wizard.oemCode || 'cod. 65989-97';
  const cond = APP_STATE.wizard.condition;

  const autoTitle = `${catObj.name.split(':')[0]} – ${famObj.family} ${famObj.years} – ${oem}`;
  const autoDesc = `• Ricambio originale Harley-Davidson per ${famObj.name}.\n• Codice OEM timbrato: ${oem}.\n• Condizioni del pezzo: ${cond}.\n• Testato e verificato: conformità garantita, smontato da moto funzionante.\n• Consegna a mano o spedizione celere con imballo rinforzato.`;

  APP_STATE.wizard.aiTitle = autoTitle;
  APP_STATE.wizard.aiDesc = autoDesc;

  const titleInput = document.getElementById('post-title-ai');
  const descInput = document.getElementById('post-desc-ai');
  if (titleInput) titleInput.value = autoTitle;
  if (descInput) descInput.value = autoDesc;
}

// Publish from Wizard to Local Store
function publishListingFromWizard() {
  const title = document.getElementById('post-title-ai').value || APP_STATE.wizard.aiTitle;
  const desc = document.getElementById('post-desc-ai').value || APP_STATE.wizard.aiDesc;
  const famObj = H_D_FAMILIES.find(f => f.id === APP_STATE.wizard.familyId) || H_D_FAMILIES[0];
  const catObj = CATEGORIES.find(c => c.id === APP_STATE.wizard.category) || CATEGORIES[0];

  const newId = `fyg-${Date.now().toString().slice(-4)}`;
  const newListing = {
    id: newId,
    title: title,
    familyId: famObj.id,
    familyName: famObj.family,
    years: famObj.years,
    category: catObj.id,
    categoryName: catObj.name,
    oemCode: APP_STATE.wizard.oemCode || '65989-97',
    isOem: true,
    condition: APP_STATE.wizard.condition,
    price: parseFloat(APP_STATE.wizard.price) || 120,
    location: APP_STATE.wizard.city || 'Verona (VR)',
    seller: { name: 'Tu (Houdinick)', badge: 'Fondatore #001', rating: '5.0 (Nuovo)', verified: true },
    description: desc,
    photos: {
      overall: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=80',
      sideA: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=400&q=80',
      oemMark: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=400&q=80',
      defects: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=400&q=80'
    },
    specialSection: APP_STATE.wizard.specialSection !== 'none' ? APP_STATE.wizard.specialSection : null,
    createdAt: 'Proprio ora'
  };

  LISTINGS_DB.unshift(newListing);

  // Reset wizard
  APP_STATE.wizard.step = 1;
  APP_STATE.wizard.photosUploaded = { overall: false, sideA: false, oemMark: false, defects: false };

  alert(`🎉 Annuncio pubblicato con successo!\n\n"${title}" è ora visibile per tutti i possessori di ${famObj.family}.`);
  navigateTo('detail', newId);
}

// Populate UI Dropdowns
function populateDropdowns() {
  const postFam = document.getElementById('post-select-family');
  const searchFam = document.getElementById('search-select-family');
  if (postFam) {
    postFam.innerHTML = '';
    H_D_FAMILIES.forEach(f => {
      postFam.innerHTML += `<option value="${f.id}">${f.name}</option>`;
    });
  }
  if (searchFam) {
    searchFam.innerHTML = '<option value="all">Tutte le Famiglie e Anni</option>';
    H_D_FAMILIES.forEach(f => {
      searchFam.innerHTML += `<option value="${f.id}">${f.name}</option>`;
    });
  }

  const postCat = document.getElementById('post-select-cat');
  const searchCat = document.getElementById('search-select-cat');
  if (postCat) {
    postCat.innerHTML = '';
    CATEGORIES.forEach(c => {
      postCat.innerHTML += `<option value="${c.id}">${c.name}</option>`;
    });
  }
  if (searchCat) {
    searchCat.innerHTML = '<option value="all">Tutte le 10 Categorie</option>';
    CATEGORIES.forEach(c => {
      searchCat.innerHTML += `<option value="${c.id}">${c.name}</option>`;
    });
  }
}

// Event Listeners Setup
function setupEventListeners() {
  // Mobile / Desktop View Mode Switcher
  const btnMob = document.getElementById('btn-mode-mobile');
  const btnDesk = document.getElementById('btn-mode-desktop');
  const viewport = document.getElementById('master-viewport');

  if (btnMob && btnDesk && viewport) {
    btnMob.addEventListener('click', () => {
      btnMob.classList.add('active');
      btnDesk.classList.remove('active');
      viewport.className = 'master-viewport mode-mobile';
      APP_STATE.viewMode = 'mobile';
    });

    btnDesk.addEventListener('click', () => {
      btnDesk.classList.add('active');
      btnMob.classList.remove('active');
      viewport.className = 'master-viewport mode-desktop';
      APP_STATE.viewMode = 'desktop';
    });
  }

  // Navigation Items
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.addEventListener('click', () => {
      const screen = btn.dataset.screen;
      if (screen) navigateTo(screen);
    });
  });

  // Top bike banner click -> opens garage modal
  const headerPill = document.getElementById('my-garage-header-pill');
  if (headerPill) {
    headerPill.addEventListener('click', () => {
      navigateTo('garage');
    });
  }

  // Back button in Detail view
  const btnBack = document.getElementById('btn-back-detail');
  if (btnBack) {
    btnBack.addEventListener('click', () => {
      navigateTo('home');
    });
  }

  // Search omnibox input
  const searchBox = document.getElementById('search-omnibox');
  if (searchBox) {
    searchBox.addEventListener('input', (e) => {
      APP_STATE.searchFilters.query = e.target.value;
      renderSearchResults();
    });
  }

  // Dropdown search filters
  const searchFam = document.getElementById('search-select-family');
  if (searchFam) {
    searchFam.addEventListener('change', (e) => {
      APP_STATE.searchFilters.familyId = e.target.value;
      renderSearchResults();
    });
  }

  const searchCat = document.getElementById('search-select-cat');
  if (searchCat) {
    searchCat.addEventListener('change', (e) => {
      APP_STATE.searchFilters.category = e.target.value;
      renderSearchResults();
    });
  }

  // Quick chips in search
  const chipCompat = document.getElementById('chip-filter-compat');
  if (chipCompat) {
    chipCompat.addEventListener('click', () => {
      APP_STATE.searchFilters.onlyCompatible = !APP_STATE.searchFilters.onlyCompatible;
      chipCompat.classList.toggle('active', APP_STATE.searchFilters.onlyCompatible);
      renderSearchResults();
    });
  }

  const chipOem = document.getElementById('chip-filter-oem');
  if (chipOem) {
    chipOem.addEventListener('click', () => {
      APP_STATE.searchFilters.onlyOem = !APP_STATE.searchFilters.onlyOem;
      chipOem.classList.toggle('active', APP_STATE.searchFilters.onlyOem);
      renderSearchResults();
    });
  }

  // Wizard nav buttons
  const btnWizPrev = document.getElementById('btn-wizard-prev');
  const btnWizNext = document.getElementById('btn-wizard-next');
  if (btnWizPrev) btnWizPrev.addEventListener('click', wizardPrev);
  if (btnWizNext) btnWizNext.addEventListener('click', wizardNext);

  // Wizard inputs change
  const postFam = document.getElementById('post-select-family');
  if (postFam) postFam.addEventListener('change', e => APP_STATE.wizard.familyId = e.target.value);

  const postCat = document.getElementById('post-select-cat');
  if (postCat) postCat.addEventListener('change', e => APP_STATE.wizard.category = e.target.value);

  const postOem = document.getElementById('post-input-oem');
  if (postOem) postOem.addEventListener('input', e => APP_STATE.wizard.oemCode = e.target.value);

  const postCond = document.getElementById('post-select-cond');
  if (postCond) postCond.addEventListener('change', e => APP_STATE.wizard.condition = e.target.value);

  const postPrice = document.getElementById('post-input-price');
  if (postPrice) postPrice.addEventListener('input', e => APP_STATE.wizard.price = e.target.value);

  const postCity = document.getElementById('post-input-city');
  if (postCity) postCity.addEventListener('input', e => APP_STATE.wizard.city = e.target.value);

  // Chat modal
  const btnOpenChat = document.getElementById('btn-contact-seller');
  if (btnOpenChat) {
    btnOpenChat.addEventListener('click', openChatModal);
  }

  const btnCloseChat = document.getElementById('btn-close-chat-modal');
  if (btnCloseChat) {
    btnCloseChat.addEventListener('click', () => {
      document.getElementById('modal-chat').classList.remove('active');
    });
  }

  const btnSendChat = document.getElementById('btn-send-chat');
  const inputChat = document.getElementById('input-chat-message');
  if (btnSendChat && inputChat) {
    btnSendChat.addEventListener('click', () => {
      const msg = inputChat.value.trim();
      if (!msg) return;
      APP_STATE.chatMessages.push({ sender: 'buyer', text: msg });
      inputChat.value = '';
      renderChatMessages();
    });
  }
}

function updateSearchChipStyles() {
  const chipCompat = document.getElementById('chip-filter-compat');
  const chipOem = document.getElementById('chip-filter-oem');
  if (chipCompat) chipCompat.classList.toggle('active', APP_STATE.searchFilters.onlyCompatible);
  if (chipOem) chipOem.classList.toggle('active', APP_STATE.searchFilters.onlyOem);
}

function openChatModal() {
  const modal = document.getElementById('modal-chat');
  if (modal && APP_STATE.selectedListing) {
    document.getElementById('chat-modal-title').textContent = `Chat con ${APP_STATE.selectedListing.seller.name}`;
    renderChatMessages();
    modal.classList.add('active');
  }
}

function renderChatMessages() {
  const container = document.getElementById('chat-messages-body');
  if (!container) return;
  container.innerHTML = '';
  APP_STATE.chatMessages.forEach(m => {
    const div = document.createElement('div');
    div.className = `chat-bubble ${m.sender}`;
    div.textContent = m.text;
    container.appendChild(div);
  });
  container.scrollTop = container.scrollHeight;
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
}

// Quick trigger for Old School filter from banner
function filterByOldSchool() {
  APP_STATE.searchFilters.familyId = 'oldschool_pan';
  APP_STATE.searchFilters.onlyCompatible = false;
  navigateTo('search');
}
