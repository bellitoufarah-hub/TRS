const STORAGE_KEYS = {
  users: "sofrenor_users",
  session: "sofrenor_session",
  entries: "sofrenor_entries",
  config: "sofrenor_config"
};

const defaultConfig = {
  shifts: ["7h-15h", "15h-23h", "23h-7h", "Autre"],
  sections: {
    "Mecanique": {
      "Decoupage": ["Presse decoupe SMG", "Outil decoupe flans 03kg", "Outil decoupe flans 06kg", "Outil decoupe flans 12kg", "Outil decoupe pieds 03kg", "Outil decoupe pieds 12kg", "Outil decoupe cols"],
      "Marquage": ["Presse de marquage OMERA"],
      "Numerotage": ["Presse de numerotage"],
      "Emboutissage": ["Presse emboutissage 06/12/35kg", "Presse emboutissage 03kg", "Presse Repkon"],
      "Rognage et soyage": ["Rogneuse-soyeuse 06/12/35kg", "Rogneuse-soyeuse 03kg", "Rogneuse Repkon", "Rogneuse 03kg"],
      "Cintrage": ["Cintreuse pieds et cols", "Cintreuse viroles"],
      "Soudage pied": ["Soudeuse"],
      "Formage": ["Presse de formage", "Presse formage trou 03kg", "Outil formage cols", "Outil formage pieds 03kg", "Outil formage pieds 12kg"]
    },
    "Soudage": {
      "Degraissage": ["Tunnel de degraissage"],
      "Soudage longitudinal des viroles": ["Soudeuse longitudinale", "Soudeuse corps n1", "Soudeuse corps n2", "Soudeuse corps n3", "Soudeuse corps n4", "Soudeuse corps n5", "Soudeuse corps n6"],
      "Soudure collerette": ["Soudeuse collerette tete n1", "Soudeuse collerette tete n2", "Soudeuse collerette tete n3", "Soudeuse collerette tete n4"],
      "Soudure bague": ["Soudeuse bague"],
      "Soudure pied/collier": ["Soudeuse pieds et cols n1", "Soudeuse pieds et cols n2", "Soudeuse pieds et cols n3", "Soudeuse pieds et cols n4"],
      "Soudure circulaire": ["Soudeuse corps"]
    },
    "Finition": {
      "Traitement thermique": ["Four de cuisson", "Four de normalisation"],
      "Epreuve hydraulique": ["Rampe d'epreuve n1", "Rampe d'epreuve n2", "Rampe d'epreuve n3", "Rampe d'epreuve n4", "Rampe d'epreuve 35kg"],
      "Grenaillage": ["Grenailleuse"],
      "Metallisation": ["Poste de metallisation"],
      "Peinture": ["Cabine de peinture"],
      "Nettoyage du taraudage": ["Poste nettoyage du taraudage"],
      "Tarage (poids)": ["Poste de tarage"],
      "Montage des accessoires": ["Robinetuse n1", "Poste de vidange"],
      "Poinconnage": ["Poste de poinconnage"],
      "Air test": ["Station d'air test"]
    }
  },
  cadences: {
    "Presse de marquage OMERA": 257,
    "Presse de numerotage": 212,
    "Presse decoupe SMG": 180,
    "Outil decoupe flans 03kg": 180,
    "Outil decoupe flans 06kg": 180,
    "Outil decoupe flans 12kg": 180,
    "Outil decoupe pieds 03kg": 180,
    "Outil decoupe pieds 12kg": 180,
    "Outil decoupe cols": 180,
    "Rogneuse-soyeuse 06/12/35kg": 133,
    "Rogneuse-soyeuse 03kg": 212,
    "Rogneuse Repkon": 180,
    "Rogneuse 03kg": 212,
    "Cintreuse pieds et cols": 240,
    "Cintreuse viroles": 277,
    "Soudeuse": 257,
    "Presse de formage": 129,
    "Presse formage trou 03kg": 129,
    "Outil formage cols": 42,
    "Outil formage pieds 03kg": 129,
    "Outil formage pieds 12kg": 129,
    "Presse Repkon": 180,
    "Tunnel de degraissage": 0,
    "Soudeuse longitudinale": 12.8,
    "Soudeuse corps n1": 86,
    "Soudeuse corps n2": 86,
    "Soudeuse corps n3": 67,
    "Soudeuse corps n4": 78,
    "Soudeuse corps n5": 86,
    "Soudeuse corps n6": 86,
    "Soudeuse collerette tete n1": 77,
    "Soudeuse collerette tete n2": 82,
    "Soudeuse collerette tete n3": 60,
    "Soudeuse collerette tete n4": 77,
    "Soudeuse bague": 82,
    "Soudeuse pieds et cols n1": 97,
    "Soudeuse pieds et cols n2": 97,
    "Soudeuse pieds et cols n3": 97,
    "Soudeuse pieds et cols n4": 97,
    "Soudeuse corps": 86,
    "Four de cuisson": 157,
    "Four de normalisation": 157,
    "Rampe d'epreuve n1": 12,
    "Rampe d'epreuve n2": 11,
    "Rampe d'epreuve n3": 11,
    "Rampe d'epreuve n4": 9,
    "Rampe d'epreuve 35kg": 9,
    "Grenailleuse": 360,
    "Poste de metallisation": 360,
    "Cabine de peinture": 251,
    "Poste de tarage": 360,
    "Robinetuse n1": 900,
    "Poste de vidange": 900,
    "Station d'air test": 120,
    "Poste nettoyage du taraudage": 360,
    "Poste de poinconnage": 360
  },
  stopCauses: {
    "Matiere": ["Usure prematuree couteau / contre-couteau", "Bavures sur matrice", "Degradation poincon", "Coincement emboutis dans bague", "Autre"],
    "Milieu": ["Degradation joints hydrauliques", "Fissuration conduite hydraulique sous pression", "Filtre hydraulique non change", "Manque d'huile hydraulique", "Autre"],
    "Methode": ["Coincement tole en decoupage", "Cisaillement par depassement de la charge nominale", "Parametres de reglage non figes par gamme ecrite", "Autre"],
    "Main d'oeuvre": ["Absence de procedure standardisee de changement serie", "Serrage insuffisant des vis de fixation contre-molette", "Fixation outil non conforme apres intervention", "Autre"],
    "Machine": ["Deterioration cables par vibrations et echauffement", "Desserrage contacts et connecteurs sous vibrations", "Derive capteur fin de course", "Surchauffe moteur", "Autre"]
  }
};

let config = loadConfig();
let session = getJSON(STORAGE_KEYS.session, null);
let lastCalculated = emptyMetrics();

const el = (id) => document.getElementById(id);

document.addEventListener("DOMContentLoaded", () => {
  ensureDemoUsers();
  bindAuth();
  bindNavigation();
  bindProductionForm();
  bindSettings();
  updateClock();
  setInterval(updateClock, 60000);
  renderAuthState();
});

function getJSON(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function setJSON(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadConfig() {
  return getJSON(STORAGE_KEYS.config, clone(defaultConfig));
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function makeId() {
  if (window.crypto?.randomUUID) {
    return window.crypto.randomUUID();
  }
  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function saveConfig() {
  setJSON(STORAGE_KEYS.config, config);
}

function ensureDemoUsers() {
  const users = getJSON(STORAGE_KEYS.users, []);

  const seed = [
    { username: "operateur@sofrenor.ma", password: "1234", role: "operator" },
    { username: "production@sofrenor.ma", password: "1234", role: "production" },
    { username: "maintenance@sofrenor.ma", password: "1234", role: "maintenance" }
  ];

  seed.forEach((demo) => {
    if (!users.some((u) => u.username === demo.username)) {
      users.push(demo);
    }
  });

  setJSON(STORAGE_KEYS.users, users);
}

function isSofrenorEmail(value) {
  return /^[^\s@]+@sofrenor\.ma$/i.test(value);
}

function startSession(user) {
  session = {
    username: user.username,
    role: user.role
  };

  setJSON(STORAGE_KEYS.session, session);
  renderAuthState();
}

function bindAuth() {
  const loginForm = el("loginForm");
  const registerForm = el("registerForm");
  const tabButtons = document.querySelectorAll("[data-auth-tab]");

  // Onglets Connexion/Créer un compte
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tab = button.dataset.authTab;
      
      tabButtons.forEach((btn) => {
        btn.classList.toggle("active", btn === button);
      });

      if (loginForm) loginForm.classList.toggle("hidden", tab !== "login");
      if (registerForm) registerForm.classList.toggle("hidden", tab !== "register");
      
      const msg = el("authMessage");
      if (msg) msg.textContent = "";
    });
  });

  // Formulaire Connexion
  if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const email = el("loginEmail")?.value.trim().toLowerCase() || "";
      const password = el("loginPassword")?.value || "";
      const users = getJSON(STORAGE_KEYS.users, []);

      if (!isSofrenorEmail(email)) {
        el("authMessage").textContent = "⚠️ Utilise un email @sofrenor.ma";
        return;
      }

      const user = users.find((u) => u.username === email && u.password === password);

      if (!user) {
        el("authMessage").textContent = "❌ Identifiants incorrects";
        return;
      }

      el("authMessage").textContent = "✅ Connexion réussie...";
      setTimeout(() => {
        startSession(user);
      }, 500);
    });
  }

  // Formulaire Inscription
  if (registerForm) {
    registerForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const email = el("registerEmail")?.value.trim().toLowerCase() || "";
      const password = el("registerPassword")?.value || "";
      const name = el("registerName")?.value.trim() || "";
      const users = getJSON(STORAGE_KEYS.users, []);

      if (!name) {
        el("authMessage").textContent = "⚠️ Remplir le nom complet";
        return;
      }

      if (!isSofrenorEmail(email)) {
        el("authMessage").textContent = "⚠️ Utilise un email @sofrenor.ma";
        return;
      }

      if (password.length < 6) {
        el("authMessage").textContent = "⚠️ Minimum 6 caractères";
        return;
      }

      if (users.some((u) => u.username === email)) {
        el("authMessage").textContent = "⚠️ Cet email existe déjà";
        return;
      }

      const newUser = {
        username: email,
        password,
        role: "operator"
      };

      users.push(newUser);
      setJSON(STORAGE_KEYS.users, users);

      el("authMessage").textContent = "✅ Compte créé! Connexion...";
      setTimeout(() => {
        startSession(newUser);
      }, 500);
    });
  }

  // Bouton Déconnexion
  const logoutBtn = el("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      session = null;
      localStorage.removeItem(STORAGE_KEYS.session);
      renderAuthState();
    });
  }
}

function renderAuthState() {
  if (session && !isSofrenorEmail(session.username)) {
    session = null;
    localStorage.removeItem(STORAGE_KEYS.session);
  }

  const isLoggedIn = Boolean(session);
  const authView = el("authView");
  const appView = el("appView");

  if (authView) authView.classList.toggle("hidden", isLoggedIn);
  if (appView) appView.classList.toggle("hidden", !isLoggedIn);

  const logoutBtn = el("logoutBtn");
  if (logoutBtn) logoutBtn.classList.toggle("hidden", !isLoggedIn);

  const badge = el("sessionBadge");
  if (badge) {
    if (isLoggedIn) {
      const roleLabel = {
        operator: "Opérateur",
        production: "Responsable Production",
        maintenance: "Responsable Maintenance"
      }[session.role] || "Utilisateur";
      badge.innerHTML = `<span>${session.username} - ${roleLabel}</span>`;
      badge.classList.remove("hidden");
    } else {
      badge.classList.add("hidden");
    }
  }

  if (!isLoggedIn) return;

  const isOperator = session.role === "operator";
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    const isAdminOnly = btn.classList.contains("admin-only");
    btn.classList.toggle("hidden", isOperator && isAdminOnly);
  });

  showView("entry");
  populateFormOptions();
  renderAll();
}

function bindNavigation() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      showView(button.dataset.view);
    });
  });

  const resetBtn = el("resetDashboardBtn");
  if (resetBtn) resetBtn.addEventListener("click", clearEntries);

  const exportBtn = el("exportCsvBtn");
  if (exportBtn) exportBtn.addEventListener("click", exportCsv);

  const clearBtn = el("clearHistoryFilters");
  if (clearBtn) clearBtn.addEventListener("click", () => {
    const search = el("historySearch");
    if (search) search.value = "";
    renderHistory();
  });
}

function showView(viewId) {
  document.querySelectorAll(".page-view").forEach((view) => {
    const shouldShow = view.id === (viewId + "View");
    view.classList.toggle("hidden", !shouldShow);
    if (shouldShow) view.classList.add("active");
  });

  document.querySelectorAll("[data-view]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.view === viewId);
  });

  if (viewId === "dashboard") renderDashboard();
  if (viewId === "history") renderHistory();
}

function bindProductionForm() {
  const form = el("entryForm");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const metrics = calculateMetrics();
    const entry = collectEntry(metrics);
    const entries = getJSON(STORAGE_KEYS.entries, []);
    entries.push(entry);
    setJSON(STORAGE_KEYS.entries, entries);

    lastCalculated = metrics;
    renderKpis(el("scoreGrid"), metrics);
    renderAll();

    const msg = el("entryMessage");
    if (msg) {
      msg.textContent = "✅ Données enregistrées!";
      setTimeout(() => msg.textContent = "", 3000);
    }

    form.reset();
    handleFormChange();
  });

  const fieldsToWatch = [
    "shiftSelect", "sectionSelect", "postSelect", "machineSelect",
    "producedInput", "durationInput", "stopCategorySelect"
  ];

  fieldsToWatch.forEach((id) => {
    const elem = el(id);
    if (elem) {
      elem.addEventListener("change", handleFormChange);
      elem.addEventListener("input", handleFormChange);
    }
  });

  // Radio buttons
  document.querySelectorAll("input[name='hasRebuts'], input[name='hasStop']").forEach((radio) => {
    radio.addEventListener("change", handleFormChange);
  });
}

function populateFormOptions() {
  fillSelect(el("shiftSelect"), config.shifts);
  fillSelect(el("sectionSelect"), Object.keys(config.sections));
  populatePosts();
  populateStopFamilies();
  handleFormChange();
}

function populatePosts() {
  const sectionSelect = el("sectionSelect");
  const section = sectionSelect?.value || Object.keys(config.sections)[0];
  fillSelect(el("postSelect"), Object.keys(config.sections[section] || {}));
  populateMachines();
}

function populateMachines() {
  const sectionSelect = el("sectionSelect");
  const postSelect = el("postSelect");
  const section = sectionSelect?.value;
  const post = postSelect?.value;
  fillSelect(el("machineSelect"), (config.sections[section] || {})[post] || []);
  updateNominalCadence();
}

function populateStopFamilies() {
  fillSelect(el("stopCategorySelect"), Object.keys(config.stopCauses));
  populateStopCauses();
}

function populateStopCauses() {
  const family = el("stopCategorySelect")?.value;
  fillSelect(el("stopCauseSelect"), config.stopCauses[family] || []);
}

function fillSelect(select, options) {
  if (!select) return;
  const current = select.value;
  select.innerHTML = "";
  options.forEach((option) => {
    const item = document.createElement("option");
    item.value = option;
    item.textContent = option;
    select.appendChild(item);
  });
  if (options.includes(current)) select.value = current;
}

function handleFormChange() {
  // Afficher/cacher champ personnalisé pour horaire
  const shiftSelect = el("shiftSelect");
  const customShiftWrapper = el("customShiftWrapper");
  if (customShiftWrapper && shiftSelect) {
    const showCustom = shiftSelect.value === "Autre";
    customShiftWrapper.classList.toggle("hidden", !showCustom);
  }

  // Gestion des rebuts
  const hasRebutsYes = Array.from(document.querySelectorAll('input[name="hasRebuts"]'))
    .find(r => r.checked)?.value === "oui";
  const rebutsDetails = el("rebutsDetails");
  if (rebutsDetails) {
    rebutsDetails.classList.toggle("hidden", !hasRebutsYes);
  }

  // Gestion des arrêts
  const hasStopYes = Array.from(document.querySelectorAll('input[name="hasStop"]'))
    .find(r => r.checked)?.value === "oui";
  const stopDetails = el("stopDetails");
  if (stopDetails) {
    stopDetails.classList.toggle("hidden", !hasStopYes);
  }

  const stopOtherWrapper = el("stopOtherWrapper");
  if (stopOtherWrapper) {
    const showOther = hasStopYes && el("stopCauseSelect")?.value === "Autre";
    stopOtherWrapper.classList.toggle("hidden", !showOther);
  }

  // Calcul et affichage
  const metrics = calculateMetrics();
  lastCalculated = metrics;
  renderKpis(el("scoreGrid"), metrics);

  const realCadenceInput = el("realCadenceInput");
  if (realCadenceInput) {
    realCadenceInput.value = formatNumber(metrics.realCadence);
  }
}

function updateNominalCadence() {
  const machine = el("machineSelect")?.value;
  const cadence = Number(config.cadences[machine] || 0);
  const input = el("theoreticalCadenceInput");
  if (input) {
    input.value = cadence ? formatNumber(cadence) : "Non définie";
  }
}

function calculateMetrics() {
  const produced = Number(el("producedInput")?.value || 0);
  const hasRebutsYes = Array.from(document.querySelectorAll('input[name="hasRebuts"]'))
    .find(r => r.checked)?.value === "oui";
  const rejects = hasRebutsYes ? Number(el("rebutsCountInput")?.value || 0) : 0;
  const openTime = Math.max(Number(el("durationInput")?.value || 0), 0);

  const hasStopYes = Array.from(document.querySelectorAll('input[name="hasStop"]'))
    .find(r => r.checked)?.value === "oui";
  const stopDurationMinutes = hasStopYes ? Number(el("stopMinutesInput")?.value || 0) : 0;
  
  const machine = el("machineSelect")?.value;
  const nominalCadence = Number(config.cadences[machine] || 0);
  const operatingTime = Math.max(openTime - stopDurationMinutes, 0);
  const realCadence = openTime > 0 ? (produced / openTime) * 60 : 0;
  const availability = openTime > 0 ? operatingTime / openTime : 0;
  const quality = produced > 0 ? Math.max(produced - rejects, 0) / produced : 0;
  const performance = nominalCadence > 0 ? realCadence / nominalCadence : 0;
  const trs = availability * quality * performance;

  return { produced, rejects, openTime, stopDuration: stopDurationMinutes, operatingTime, realCadence, nominalCadence, availability, quality, performance, trs };
}

function collectEntry(metrics) {
  const hasStopYes = Array.from(document.querySelectorAll('input[name="hasStop"]'))
    .find(r => r.checked)?.value === "oui";
  const stopCause = hasStopYes
    ? (el("stopCauseSelect")?.value === "Autre" ? el("stopOtherInput")?.value.trim() || "Autre" : el("stopCauseSelect")?.value)
    : "Aucun arrêt";

  const customShift = el("shiftSelect")?.value === "Autre" ? el("customShiftInput")?.value.trim() || "Autre" : el("shiftSelect")?.value;

  return {
    id: makeId(),
    timestamp: new Date().toISOString(),
    user: session.username,
    shift: customShift,
    section: el("sectionSelect")?.value,
    post: el("postSelect")?.value,
    machine: el("machineSelect")?.value,
    stopCause,
    ...metrics
  };
}

function emptyMetrics() {
  return { trs: 0, availability: 0, quality: 0, performance: 0, realCadence: 0, nominalCadence: 0 };
}

function renderAll() {
  renderKpis(el("scoreGrid"), lastCalculated);
  renderDashboard();
  renderHistory();
}

function renderKpis(container, metrics) {
  if (!container) return;

  const items = [
    ["TRS", metrics.trs],
    ["Disponibilité", metrics.availability],
    ["Performance", metrics.performance],
    ["Qualité", metrics.quality]
  ];

  container.innerHTML = items.map(([label, value]) => {
    const percent = Math.max(0, value * 100);
    const level = levelClass(percent);
    return `<article class="kpi ${level}"><span>${label}</span><strong>${formatNumber(percent)}%</strong></article>`;
  }).join("");
}

function levelClass(percent) {
  if (percent < 60) return "critical";
  if (percent < 80) return "medium";
  return "good";
}

function formatNumber(value) {
  if (!Number.isFinite(value)) return "0";
  return Number(value).toLocaleString("fr-FR", { maximumFractionDigits: 1 });
}

function getEntries() {
  return getJSON(STORAGE_KEYS.entries, []);
}

function clearEntries() {
  const confirmed = confirm("Supprimer toutes les données et recommencer à zéro ?");
  if (!confirmed) return;
  setJSON(STORAGE_KEYS.entries, []);
  lastCalculated = emptyMetrics();
  renderAll();
}

function renderDashboard() {
  const entries = getEntries();
  const latest = entries.at(-1) || lastCalculated;
  renderKpis(el("dashboardScores"), latest);
  renderMachineRanking(entries);
}

function renderMachineRanking(entries) {
  const container = el("machineRanking");
  if (!container) return;

  const byMachine = {};
  entries.forEach((entry) => {
    byMachine[entry.machine] ||= [];
    byMachine[entry.machine].push(entry.trs * 100);
  });

  const rows = Object.entries(byMachine)
    .map(([machine, values]) => ({ machine, trs: values.reduce((sum, v) => sum + v, 0) / values.length }))
    .sort((a, b) => b.trs - a.trs);

  container.innerHTML = rows.length ? rows.map((row) => {
    const level = levelClass(row.trs);
    return `<div class="machine-row"><strong>${row.machine}</strong><span class="badge ${level}">${formatNumber(row.trs)}%</span></div>`;
  }).join("") : `<p class="muted">Aucune donnée enregistrée.</p>`;
}

function renderHistory() {
  const tbody = el("historyTableBody");
  if (!tbody) return;

  const entries = getEntries().slice().reverse();
  tbody.innerHTML = entries.length ? entries.map((entry) => `
    <tr>
      <td>${new Date(entry.timestamp).toLocaleString("fr-FR")}</td>
      <td>${entry.user}</td>
      <td>${entry.section}</td>
      <td>${entry.post}</td>
      <td>${entry.machine}</td>
      <td>${entry.produced}</td>
      <td>${entry.rejects}</td>
      <td>${entry.stopCause}</td>
      <td><span class="badge ${levelClass(entry.trs * 100)}">${formatNumber(entry.trs * 100)}%</span></td>
    </tr>
  `).join("") : `<tr><td colspan="9">Aucune donnée enregistrée.</td></tr>`;
}

function bindSettings() {
  const saveConfigBtn = el("saveConfigBtn");
  if (saveConfigBtn) {
    saveConfigBtn.addEventListener("click", () => {
      try {
        const editor = el("configEditor");
        if (editor) {
          config = JSON.parse(editor.value);
          saveConfig();
          populateFormOptions();
          const msg = el("settingsMessage");
          if (msg) {
            msg.textContent = "✅ Configuration enregistrée.";
            setTimeout(() => msg.textContent = "", 3000);
          }
        }
      } catch (error) {
        const msg = el("settingsMessage");
        if (msg) msg.textContent = "❌ Format JSON invalide.";
      }
    });
  }

  const resetDemoBtn = el("resetDemoBtn");
  if (resetDemoBtn) {
    resetDemoBtn.addEventListener("click", () => {
      config = clone(defaultConfig);
      saveConfig();
      renderSettings();
      populateFormOptions();
      const msg = el("demoMessage");
      if (msg) {
        msg.textContent = "✅ Données réinitialisées.";
        setTimeout(() => msg.textContent = "", 3000);
      }
    });
  }

  const loadDemoBtn = el("loadDemoBtn");
  if (loadDemoBtn) {
    loadDemoBtn.addEventListener("click", () => {
      const demoEntries = [
        {
          id: makeId(),
          timestamp: new Date(Date.now() - 86400000).toISOString(),
          user: "operateur@sofrenor.ma",
          shift: "7h-15h",
          section: "Mecanique",
          post: "Decoupage",
          machine: "Presse decoupe SMG",
          produced: 150,
          rejects: 5,
          openTime: 240,
          stopDuration: 30,
          operatingTime: 210,
          realCadence: 37.5,
          nominalCadence: 180,
          availability: 0.875,
          quality: 0.967,
          performance: 0.208,
          trs: 0.165,
          stopCause: "Machine"
        }
      ];
      setJSON(STORAGE_KEYS.entries, demoEntries);
      renderAll();
      const msg = el("demoMessage");
      if (msg) {
        msg.textContent = "✅ Données démo chargées.";
        setTimeout(() => msg.textContent = "", 3000);
      }
    });
  }

  renderSettings();
}

function renderSettings() {
  const editor = el("configEditor");
  if (editor) {
    editor.value = JSON.stringify(config, null, 2);
  }
}

function exportCsv() {
  const entries = getEntries();
  const headers = ["Date", "Opérateur", "Section", "Poste", "Machine", "Pièces", "Rebuts", "Cause", "TRS"];
  const rows = entries.map((entry) => [
    new Date(entry.timestamp).toLocaleString("fr-FR"),
    entry.user,
    entry.section,
    entry.post,
    entry.machine,
    entry.produced,
    entry.rejects,
    entry.stopCause,
    `${formatNumber(entry.trs * 100)}%`
  ]);
  const csv = [headers, ...rows].map((row) => row.map(csvCell).join(";")).join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "historique_trs_sofrenor.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function csvCell(value) {
  return `"${String(value).replaceAll('"', '""')}"`;
}

function updateClock() {
  const todayLabel = el("todayLabel");
  if (todayLabel) {
    const date = new Date();
    todayLabel.textContent = date.toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
}
