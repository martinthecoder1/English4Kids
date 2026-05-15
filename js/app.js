// ============================================================
//  APP.JS – Sdílená logika (stav, navigace, pomocné funkce)
//  Tento soubor je nahrán na každé stránce.
// ============================================================

// --- Aplikace config stylů na CSS proměnné ---
function applyStyles() {
  if (typeof CONFIG_STYLES === 'undefined') return;
  const r = document.documentElement;
  const c = CONFIG_STYLES.colors;
  const f = CONFIG_STYLES.fonts;
  r.style.setProperty('--color-primary',    c.primary);
  r.style.setProperty('--color-secondary',  c.secondary);
  r.style.setProperty('--color-accent',     c.accent);
  r.style.setProperty('--color-bg',         c.background);
  r.style.setProperty('--color-card-back',  c.cardBack);
  r.style.setProperty('--color-success',    c.success);
  r.style.setProperty('--color-error',      c.error);
  r.style.setProperty('--color-text',       c.text);
  r.style.setProperty('--color-text-light', c.textLight);
  r.style.setProperty('--font-heading', `'${f.heading}', ${f.headingFallback}`);
  r.style.setProperty('--font-body',    `'${f.body}', ${f.bodyFallback}`);
}

// --- Stav (sessionStorage) ---
const App = {
  getUser() {
    try { return JSON.parse(sessionStorage.getItem('ef_user')); } catch { return null; }
  },
  setUser(user) {
    sessionStorage.setItem('ef_user', JSON.stringify(user));
  },
  getGame() {
    return sessionStorage.getItem('ef_game') || null;
  },
  setGame(game) {
    sessionStorage.setItem('ef_game', game);
  },
  getDifficulty() {
    return sessionStorage.getItem('ef_difficulty') || 'easy';
  },
  setDifficulty(diff) {
    sessionStorage.setItem('ef_difficulty', diff);
  },
  navigate(page) {
    window.location.href = page;
  },
};

// --- Vyrenderuje user badge (avatar + jméno) do elementu s id="user-badge" ---
function renderUserBadge() {
  const el = document.getElementById('user-badge');
  if (!el) return;
  const user = App.getUser();
  if (!user) return;

  const avatarHtml = `
    <span class="user-badge-avatar" style="color:${user.color}">
      <img src="${user.avatar}" alt="${user.name}"
           onerror="this.parentElement.textContent='${user.emoji}'" />
    </span>`;

  el.innerHTML = `${avatarHtml}<span class="user-badge-name">${user.name}</span>`;
  el.style.display = 'flex';
}

// --- Přesměruje na index pokud není přihlášen uživatel ---
function requireUser() {
  if (!App.getUser()) {
    window.location.href = 'index.html';
  }
}

// --- Zamíchá pole (Fisher-Yates) ---
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// --- Konfety animace ---
function launchConfetti() {
  const colors = ['#FF6B9D','#4ECDC4','#FFE66D','#6BCB77','#A29BFE','#FF7675'];
  for (let i = 0; i < 80; i++) {
    setTimeout(() => {
      const el = document.createElement('div');
      el.className = 'confetti-piece';
      el.style.left = Math.random() * 100 + 'vw';
      el.style.background = colors[Math.floor(Math.random() * colors.length)];
      el.style.animationDuration = (Math.random() * 2 + 1.5) + 's';
      el.style.animationDelay = '0s';
      el.style.width  = (Math.random() * 8 + 6) + 'px';
      el.style.height = (Math.random() * 8 + 6) + 'px';
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 4000);
    }, i * 40);
  }
}

// --- Formátování času (sekundy → mm:ss) ---
function formatTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, '0');
  const s = (sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

// Spustit při každém načtení stránky
document.addEventListener('DOMContentLoaded', () => {
  applyStyles();
  renderUserBadge();
});
