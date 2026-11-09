/* =========================================================
   أبو قورة كيدز — Abo Qora Kids corner
   Three tiny games starring جدو أبو قورة, plus a sticker album.
   Kid-safe by design: no prices, no order bar, no ads, no chat,
   no personal data (progress lives only on this device).
   Depends on the main page helpers: $, $$, tr, AR, PIGEON (optional).
   ========================================================= */
const KIDS_LS = 'aq_kids_v1';
const K = (() => { try { return JSON.parse(localStorage.getItem(KIDS_LS)) || {} } catch (e) { return {} } })();
K.best ??= {}; K.stickers ??= []; K.sound ??= true; K.plays ??= 0;
const saveK = () => { try { localStorage.setItem(KIDS_LS, JSON.stringify(K)) } catch (e) {} };

const STICKERS = [
  ['jiddo', '👴', 'جدو', 'Grandpa'], ['pigeon', '🕊️', 'حمامة', 'Pigeon'], ['fire', '🔥', 'الفحم', 'Coals'],
  ['shish', '🍢', 'شيش', 'Skewer'], ['tagine', '🥘', 'طاجن', 'Tagine'], ['chicken', '🐓', 'فرخة', 'Hen'],
  ['duck', '🦆', 'بطة', 'Duck'], ['wheat', '🌾', 'سنبلة', 'Wheat'], ['bread', '🫓', 'عيش بلدي', 'Bread'],
  ['tomato', '🍅', 'طماطم', 'Tomato'], ['loft', '🏠', 'الغية', 'Pigeon loft'], ['star', '⭐', 'نجمة', 'Star'],
];
const GAMES = {
  grill:   { em: '🍢', color: '#B0161F', ar: 'شوّاية جدو', en: "Grandpa's Grill", dar: 'اقلب الشيش لما يستوي — قبل ما يتحرق!', den: 'Serve the skewers when they turn golden — before they burn!', age: '6+' },
  pigeons: { em: '🕊️', color: '#2E8FA3', ar: 'رجّع الحمام الغية', en: 'Pigeons Home', dar: 'دوس على الحمام عشان يرجع الغية بتاعته', den: 'Tap the pigeons to send them back to the loft', age: '3+' },
  memory:  { em: '🃏', color: '#C98A2E', ar: 'افتكر الأكلة', en: 'Food Memory', dar: 'اقلب الكروت ولاقي كل أكلة وتوأمها', den: 'Flip the cards and match the dishes', age: '4+' },
};

/* ---------- tiny sounds (Web Audio, no files) ---------- */
let actx = null;
function beep(freq = 660, dur = 0.08, type = 'sine', vol = 0.08, when = 0) {
  if (!K.sound) return;
  try {
    actx ??= new (window.AudioContext || window.webkitAudioContext)();
    const o = actx.createOscillator(), g = actx.createGain(), t = actx.currentTime + when;
    o.type = type; o.frequency.setValueAtTime(freq, t);
    g.gain.setValueAtTime(vol, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(actx.destination); o.start(t); o.stop(t + dur + 0.02);
  } catch (e) {}
}
const sndGood = () => { beep(660, .07, 'triangle'); beep(990, .09, 'triangle', .07, .07) };
const sndBad = () => beep(180, .18, 'sawtooth', .05);
const sndTap = () => beep(520, .05, 'square', .04);
const sndWin = () => [523, 659, 784, 1046].forEach((f, i) => beep(f, .16, 'triangle', .08, i * .12));

/* ---------- the kids page ---------- */
function renderKids(arg) {
  const L2 = (a, e) => AR() ? a : e;
  const got = new Set(K.stickers);
  const hello = [
    L2('أهلاً يا بطل! 👋 تحب تلعب إيه النهارده؟', 'Hi champ! 👋 What shall we play today?'),
    L2('الأكل على الفحم.. ونلعب لحد ما يجهز! 🔥', 'Food is on the coals.. let’s play till it’s ready! 🔥'),
    L2('الحمام مستنيك في الغية 🕊️', 'The pigeons are waiting at the loft 🕊️'),
  ][K.plays % 3];
  $('#kids').innerHTML = `
  <div class="page-title"><a href="#/" class="icon-btn back">→</a><h1>${L2('أبو قورة كيدز 🎈', 'Abo Qora Kids 🎈')}</h1>
    <button class="icon-btn" id="kSound" aria-label="sound" style="margin-inline-start:auto">${K.sound ? '🔊' : '🔇'}</button></div>
  <div class="kids-hero"><img src="assets/logo_circle.jpg" alt=""><div class="bubble">${hello}</div></div>
  <div class="kgames">${Object.entries(GAMES).map(([id, g]) => `
    <button class="kgame" data-game="${id}" style="--c:${g.color}">
      <span class="em">${g.em}</span><h3>${L2(g.ar, g.en)}</h3><p>${L2(g.dar, g.den)}</p>
      <span class="meta"><span>👶 ${g.age}</span>${K.best[id] != null ? `<span>🏆 ${id === 'memory' ? L2(`أحسن: ${K.best[id]} حركة`, `Best: ${K.best[id]} moves`) : L2(`أحسن: ${K.best[id]}`, `Best: ${K.best[id]}`)}</span>` : ''}</span>
      <span class="play">${L2('العب ▶', 'Play ▶')}</span></button>`).join('')}</div>
  <div class="panel album-wrap"><h2>📒 ${L2('ألبوم الملصقات', 'Sticker album')} <span class="muted" style="font-size:16px">${got.size}/${STICKERS.length}</span></h2>
    <p class="muted" style="margin-top:0">${got.size === STICKERS.length ? L2('برافو! جمعت الألبوم كله 🏆', 'Bravo! You collected them all 🏆') : L2('كل لعبة تخلّصها تاخد ملصق جديد ✨', 'Finish any game to win a new sticker ✨')}</p>
    <div class="album">${STICKERS.map(([id, em, ar, en]) => `<div class="stk ${got.has(id) ? 'got' : 'lock'}" title="${got.has(id) ? L2(ar, en) : '?'}">${got.has(id) ? em : '❔'}<small>${got.has(id) ? L2(ar, en) : ''}</small></div>`).join('')}</div></div>
  <details class="panel parents"><summary>👨‍👩‍👧 ${L2('للأهل', 'For parents')}</summary>
    <p>${L2('ألعاب بسيطة وآمنة للأطفال: من غير إعلانات، من غير شات، من غير شراء، ومن غير ما نسجّل أي بيانات — التقدّم بيتحفظ على موبايلك بس. كل لعبة أقل من دقيقة.', 'Simple, safe games: no ads, no chat, no purchases and no data collected — progress stays on your phone. Each game takes under a minute.')}</p></details>`;
  $('#kSound').onclick = () => { K.sound = !K.sound; saveK(); $('#kSound').textContent = K.sound ? '🔊' : '🔇'; if (K.sound) sndTap() };
  $$('[data-game]').forEach(b => b.onclick = () => { sndTap(); location.hash = '#/kids/' + b.dataset.game });
  if (arg && GAMES[arg]) openGame(arg); else closeGame();
}

/* ---------- game stage (full screen) ---------- */
let game = null; // { stop() }
function stageHTML(id) {
  const g = GAMES[id];
  return `<div class="ks-top" style="background:${g.color}"><button class="ks-x" id="ksX" aria-label="close">✕</button>
    <b class="ks-title">${g.em} ${AR() ? g.ar : g.en}</b><span class="ks-hud" id="ksHud"></span></div>
    <div class="ks-area" id="ksArea"></div>`;
}
function openGame(id) {
  closeGame(true);
  const st = $('#kidStage'); st.className = 'on g-' + id; st.innerHTML = stageHTML(id);
  document.documentElement.style.overflow = 'hidden';
  $('#ksX').onclick = () => { location.hash = '#/kids' };
  game = ({ grill: gameGrill, pigeons: gamePigeons, memory: gameMemory })[id]($('#ksArea'), $('#ksHud'), res => endGame(id, res));
}
function closeGame(keep) {
  if (game) { game.stop(); game = null }
  const st = $('#kidStage'); if (st && !keep) { st.className = ''; st.innerHTML = '' }
  document.documentElement.style.overflow = '';
}
function endGame(id, { score, stars, best }) {
  K.plays++;
  const isBetter = id === 'memory' ? (K.best[id] == null || best < K.best[id]) : (K.best[id] == null || best > K.best[id]);
  if (isBetter) K.best[id] = best;
  const left = STICKERS.filter(s => !K.stickers.includes(s[0]));
  const prize = left.length ? left[Math.floor(Math.random() * left.length)] : null;
  if (prize) K.stickers.push(prize[0]);
  saveK(); sndWin();
  const praise = [tr('جدو فخور بيك! 👏', 'Grandpa is proud of you! 👏'), tr('إيه الحلاوة دي! 🤩', 'Amazing! 🤩'), tr('شاطر شاطر! 💪', 'Super star! 💪')][stars - 1] || tr('برافو! 👏', 'Bravo! 👏');
  const area = $('#ksArea'); if (!area) return;
  const end = document.createElement('div'); end.className = 'ks-end';
  end.innerHTML = `<div class="ks-card"><img src="assets/logo_circle.jpg" alt="" class="ks-jiddo">
    <div class="ks-stars">${[1, 2, 3].map(i => `<span class="${i <= stars ? 'on' : ''}" style="animation-delay:${i * .18}s">⭐</span>`).join('')}</div>
    <h2>${praise}</h2><p class="muted" style="margin:4px 0 10px;font-weight:800">${score}${isBetter && K.plays > 1 ? ' · ' + tr('رقم قياسي جديد! 🏆', 'New best! 🏆') : ''}</p>
    ${prize ? `<div class="ks-prize"><span class="stk got">${prize[1]}<small>${AR() ? prize[2] : prize[3]}</small></span><b>${tr('ملصق جديد في الألبوم!', 'New sticker for your album!')}</b></div>` : ''}
    <button class="btn btn-red" style="width:100%" id="ksAgain">${tr('العب تاني 🔁', 'Play again 🔁')}</button>
    <button class="btn btn-ghost" style="width:100%;margin-top:8px" id="ksBack">${tr('ألعاب تانية', 'More games')}</button></div>`;
  area.appendChild(end);
  $('#ksAgain').onclick = () => openGame(id);
  $('#ksBack').onclick = () => { location.hash = '#/kids' };
}
const floatText = (area, x, y, text, color = '#1d7a3a') => {
  const f = document.createElement('div'); f.className = 'ks-float'; f.textContent = text;
  f.style.cssText = `left:${x}px;top:${y}px;color:${color}`; area.appendChild(f); setTimeout(() => f.remove(), 900);
};
function countdown(hud, secs, render, onEnd) {
  let left = secs; render(left);
  const t = setInterval(() => { left--; render(left); if (left <= 0) { clearInterval(t); onEnd() } }, 1000);
  return () => clearInterval(t);
}

/* ---------- 1) Grandpa's grill: tap skewers when golden ---------- */
function gameGrill(area, hud, done) {
  const N = innerWidth < 380 ? 3 : 4, RAW = '#E9A7A0', GOLD = '#B8662D', BURNT = '#2B1A12';
  let served = 0, burnt = 0, running = true, raf;
  area.innerHTML = `<p class="ks-tip"><img src="assets/logo_circle.jpg" alt="">${tr('استنى لما الشيش يبقى دهبي ✨ ودوس عليه!', 'Wait till it turns golden ✨ then tap!')}</p>
    <div class="grillbox"><div class="coals"></div>${Array.from({ length: N }, (_, i) => `<button class="skw" data-i="${i}"><span class="stick"></span>${'<span class="chunk"></span>'.repeat(4)}<span class="lbl"></span></button>`).join('')}</div>`;
  const skws = $$('.skw', area).map(el => ({ el, p: 0, speed: 0, wait: 0 }));
  const reset = s => { s.p = 0; s.speed = 1 / (3200 + Math.random() * 2800); s.wait = 300 + Math.random() * 900; s.el.classList.remove('ready', 'burnt') };
  skws.forEach(reset);
  const mix = (a, b, t) => { const h = x => [1, 3, 5].map(i => parseInt(x.slice(i, i + 2), 16)); const A = h(a), B = h(b); return `rgb(${A.map((v, i) => Math.round(v + (B[i] - v) * t)).join(',')})` };
  const color = p => p < .62 ? mix(RAW, GOLD, p / .62) : p < .92 ? GOLD : mix(GOLD, BURNT, Math.min(1, (p - .92) / .18));
  let last = performance.now();
  const tick = now => {
    const dt = now - last; last = now;
    skws.forEach(s => {
      if (s.wait > 0) { s.wait -= dt; return }
      s.p += s.speed * dt;
      const c = color(s.p); $$('.chunk', s.el).forEach(ch => ch.style.background = c);
      const ready = s.p >= .62 && s.p < .92;
      s.el.classList.toggle('ready', ready);
      $('.lbl', s.el).textContent = s.p < .62 ? tr('نيّة', 'raw') : ready ? tr('جاهزة! 👆', 'ready! 👆') : tr('بتتحرق!', 'burning!');
      if (s.p >= 1.1) { burnt++; sndBad(); s.el.classList.add('burnt'); const r = s.el.getBoundingClientRect(), a = area.getBoundingClientRect(); floatText(area, r.left - a.left + 10, r.top - a.top + 30, '💨', '#555'); reset(s) }
    });
    if (running) raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);
  area.onclick = e => {
    const b = e.target.closest('.skw'); if (!b || !running) return;
    const s = skws[+b.dataset.i], r = b.getBoundingClientRect(), a = area.getBoundingClientRect(), x = r.left - a.left + r.width / 2 - 14, y = r.top - a.top;
    if (s.wait > 0) return;
    if (s.p >= .62 && s.p < .92) { served++; sndGood(); floatText(area, x, y, '+1 😋'); reset(s); renderHud() }
    else if (s.p < .62) { sndTap(); floatText(area, x, y, tr('لسه!', 'not yet!'), '#B0161F') }
  };
  let secs = 45;
  const renderHud = () => hud.innerHTML = `<span>🍢 ${served}</span><span>⏱️ ${secs}</span>`;
  const stopTimer = countdown(hud, 45, l => { secs = l; renderHud() }, () => {
    running = false; cancelAnimationFrame(raf);
    done({ score: tr(`قدّمت ${served} شيش`, `You served ${served} skewers`), stars: served >= 14 ? 3 : served >= 8 ? 2 : 1, best: served });
  });
  return { stop() { running = false; cancelAnimationFrame(raf); stopTimer() } };
}

/* ---------- 2) Pigeons home: tap flying pigeons ---------- */
function gamePigeons(area, hud, done) {
  let home = 0, running = true, raf, spawnT;
  area.innerHTML = `<p class="ks-tip"><img src="assets/logo_circle.jpg" alt="">${tr('دوس على الحمامة عشان ترجع الغية 🏠', 'Tap a pigeon to send it home 🏠')}</p>
    <div class="cloud c1"></div><div class="cloud c2"></div>
    <div class="loft" id="loft"><div class="roof"></div><div class="box"><span></span><span></span><span></span></div><div class="pole"></div><b id="loftN">0</b></div>`;
  const birds = new Set();
  const spawn = () => {
    if (!running) return;
    if (birds.size < 6) {
      const W = area.clientWidth, H = area.clientHeight, dir = Math.random() < .5 ? 1 : -1;
      const el = document.createElement('button'); el.className = 'bird'; el.textContent = '🕊️';
      const b = { el, x: dir > 0 ? -50 : W + 10, y: 60 + Math.random() * (H * .55), dir, v: (55 + Math.random() * 85) * (innerWidth < 500 ? .9 : 1.2), ph: Math.random() * 6, caught: false };
      el.style.transform = `translate(${b.x}px,${b.y}px) scaleX(${-dir})`;
      el.onpointerdown = e => {
        e.preventDefault(); if (b.caught || !running) return; b.caught = true; home++; sndGood();
        const L = $('#loft').getBoundingClientRect(), A = area.getBoundingClientRect();
        el.classList.add('going'); el.style.transform = `translate(${L.left - A.left + L.width / 2 - 20}px,${L.top - A.top + 20}px) scale(.5)`;
        floatText(area, b.x + 10, b.y, '+1 🏠');
        setTimeout(() => { el.remove(); birds.delete(b) }, 650);
        $('#loftN').textContent = home; renderHud();
      };
      area.appendChild(el); birds.add(b);
    }
    spawnT = setTimeout(spawn, 450 + Math.random() * 650);
  };
  let last = performance.now();
  const tick = now => {
    const dt = (now - last) / 1000; last = now;
    birds.forEach(b => {
      if (b.caught) return;
      b.x += b.dir * b.v * dt; b.ph += dt * 4;
      b.el.style.transform = `translate(${b.x}px,${b.y + Math.sin(b.ph) * 12}px) scaleX(${-b.dir})`;
      if (b.x < -80 || b.x > area.clientWidth + 80) { b.el.remove(); birds.delete(b) }
    });
    if (running) raf = requestAnimationFrame(tick);
  };
  spawn(); raf = requestAnimationFrame(tick);
  let secs = 30;
  const renderHud = () => hud.innerHTML = `<span>🕊️ ${home}</span><span>⏱️ ${secs}</span>`;
  const stopTimer = countdown(hud, 30, l => { secs = l; renderHud() }, () => {
    running = false; clearTimeout(spawnT); cancelAnimationFrame(raf);
    done({ score: tr(`رجّعت ${home} حمامة للغية`, `You brought ${home} pigeons home`), stars: home >= 22 ? 3 : home >= 12 ? 2 : 1, best: home });
  });
  return { stop() { running = false; clearTimeout(spawnT); cancelAnimationFrame(raf); stopTimer() } };
}

/* ---------- 3) Food memory: match 6 pairs ---------- */
function gameMemory(area, hud, done) {
  const faces = ['🍢', '🥘', '🍗', '🕊️', '🍚', '🥗'];
  const deck = [...faces, ...faces].map((f, i) => ({ f, i, k: Math.random() })).sort((a, b) => a.k - b.k);
  let open = [], moves = 0, matched = 0, lock = false, t0 = Date.now();
  area.innerHTML = `<p class="ks-tip"><img src="assets/logo_circle.jpg" alt="">${tr('لاقي كل أكلة وتوأمها 👀', 'Find each matching pair 👀')}</p>
    <div class="mem">${deck.map((c, n) => `<button class="mc" data-n="${n}"><span class="in"><span class="b"><img src="assets/logo_circle.jpg" alt=""></span><span class="f">${c.f}</span></span></button>`).join('')}</div>`;
  const renderHud = () => hud.innerHTML = `<span>👆 ${moves}</span><span>✅ ${matched}/6</span>`; renderHud();
  area.onclick = e => {
    const b = e.target.closest('.mc'); if (!b || lock || b.classList.contains('open')) return;
    sndTap(); b.classList.add('open'); open.push(b);
    if (open.length < 2) return;
    moves++; const [a, c] = open; open = [];
    if (deck[+a.dataset.n].f === deck[+c.dataset.n].f) {
      matched++; setTimeout(() => { a.classList.add('done'); c.classList.add('done'); sndGood() }, 250); renderHud();
      if (matched === 6) setTimeout(() => done({ score: tr(`خلّصتها في ${moves} حركة`, `Done in ${moves} moves`), stars: moves <= 9 ? 3 : moves <= 13 ? 2 : 1, best: moves }), 700);
    } else { lock = true; renderHud(); setTimeout(() => { a.classList.remove('open'); c.classList.remove('open'); lock = false }, 800) }
  };
  return { stop() {} };
}
