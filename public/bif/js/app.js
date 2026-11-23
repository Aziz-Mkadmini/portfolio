/* BIF — script commun à toutes les pages : en-tête, apparitions, panier */
(function () {
  var KEY = 'bif-cart';
  var body = document.body;
  requestAnimationFrame(function () { setTimeout(function () { body.classList.add('ready'); }, 60); });

  // ---------- utilitaires ----------
  function find(id) { return (window.BIF_CATALOG || []).filter(function (p) { return p.id === id; })[0]; }
  function money(v) { return v == null ? '[PRIX] DT' : v.toFixed(3).replace('.', ',') + ' DT'; }
  function wa(text) { return 'https://wa.me/' + (window.BIF_WHATSAPP || '') + '?text=' + encodeURIComponent(text); }
  window.BIF = { find: find, money: money, wa: wa };

  // ---------- panier (localStorage, avec repli en mémoire) ----------
  var mem = [];
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || []; } catch (e) { return mem; } }
  function save(c) { mem = c; try { localStorage.setItem(KEY, JSON.stringify(c)); } catch (e) {} paint(); }
  function count() { return load().reduce(function (s, i) { return s + i.qty; }, 0); }
  function add(id, variant, qty) {
    var c = load(), p = find(id) || (window.BIF_PACK && id === window.BIF_PACK.id ? window.BIF_PACK : null); if (!p) return;
    variant = variant || (p.variants ? p.variants[0].name : '');
    var it = c.filter(function (i) { return i.id === id && i.variant === variant; })[0];
    if (it) it.qty += qty || 1; else c.push({ id: id, variant: variant, qty: qty || 1 });
    save(c); toast(p.name + (variant ? ' · ' + variant : '') + ' ajouté au panier');
  }
  function setQty(idx, q) { var c = load(); if (q <= 0) c.splice(idx, 1); else c[idx].qty = q; save(c); }
  function lines() {
    return load().map(function (i) {
      var p = find(i.id) || (window.BIF_PACK && i.id === window.BIF_PACK.id ? window.BIF_PACK : {});
      var v = (p.variants || []).filter(function (x) { return x.name === i.variant; })[0] || {};
      return { id: i.id, name: p.name, variant: i.variant, qty: i.qty, price: p.price, img: v.img || '', color: v.bg || '#EFE1D2' };
    });
  }
  function total() {
    var ls = lines(), t = 0;
    for (var k = 0; k < ls.length; k++) { if (ls[k].price == null) return null; t += ls[k].price * ls[k].qty; }
    return t;
  }
  window.BIF.cart = { add: add, setQty: setQty, lines: lines, total: total, clear: function () { save([]); }, count: count };

  function paint() {
    document.querySelectorAll('[data-cart-count]').forEach(function (b) {
      b.textContent = count(); b.classList.add('bump'); setTimeout(function () { b.classList.remove('bump'); }, 300);
    });
    document.dispatchEvent(new CustomEvent('bif:cart'));
  }


  // ---------- carte produit commune (le tube s'ouvre au survol) ----------
  window.BIF.card = function (p, i) {
    var v = p.variants[0], d = i ? ' s' + Math.min(i % 4, 3) : '';
    var media = '<img class="t-closed" src="' + v.img + '" alt="' + p.name + '" loading="lazy">' + (v.open ? '<img class="t-open" src="' + v.open + '" alt="" aria-hidden="true" loading="lazy">' : '');
    return '<article class="pcard rv' + d + (p.dark ? ' dark' : '') + '">'
      + '<div class="pc-media"><a href="produit.html#' + p.id + '" class="pc-ph" style="background:' + v.bg + '" aria-label="' + p.name + '">'
      + (p.badge ? '<span class="badge">' + p.badge + '</span>' : '') + '<span class="pc-stage"><span class="pc-tube">' + media + '</span></span><span class="pc-shadow" aria-hidden="true"></span></a>'
      + '<button class="add" data-add="' + p.id + '" aria-label="Ajouter ' + p.name + ' au panier">+</button></div>'
      + '<div class="pc-info"><h3><a href="produit.html#' + p.id + '">' + p.name + '</a></h3><p>' + (p.role || p.short) + '</p><b>' + money(p.price) + '</b></div></article>';
  };
  // sur écran tactile, le tube s'ouvre quand la carte passe au centre
  var touch = matchMedia('(hover: none)').matches;
  window.BIF.watchCards = function (root) {
    if (!touch) return;
    var o = new IntersectionObserver(function (es) { es.forEach(function (e) { e.target.classList.toggle('opened', e.isIntersecting); }); }, { rootMargin: '-35% 0px -35% 0px' });
    (root || document).querySelectorAll('.pcard').forEach(function (c) { o.observe(c); });
  };

  // ---------- toast ----------
  var t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); t.setAttribute('aria-live', 'polite'); body.appendChild(t);
  var tt;
  function toast(msg) {
    t.innerHTML = '<span>' + msg + '</span><a href="panier.html">Voir le panier</a>';
    t.classList.add('show'); clearTimeout(tt); tt = setTimeout(function () { t.classList.remove('show'); }, 2800);
  }

  // ---------- boutons « ajouter » ----------
  document.addEventListener('click', function (e) {
    var b = e.target.closest('[data-add]'); if (!b) return;
    e.preventDefault(); add(b.getAttribute('data-add'), b.getAttribute('data-variant'), 1);
    if (b.classList.contains('add')) { b.textContent = '✓'; setTimeout(function () { b.textContent = '+'; }, 1200); }
  });

  // ---------- en-tête, menu mobile, barre mobile ----------
  var hdr = document.querySelector('.hdr'), mbar = document.getElementById('mbar');
  function onScroll() {
    if (hdr) hdr.classList.toggle('solid', scrollY > 30 || body.classList.contains('page'));
    if (mbar) mbar.classList.toggle('on', scrollY > innerHeight * .9 && (innerHeight + scrollY) < document.body.scrollHeight - 400);
  }
  addEventListener('scroll', onScroll, { passive: true }); onScroll();
  var burger = document.getElementById('burger');
  if (burger) burger.addEventListener('click', function () {
    var o = !body.classList.contains('nav-open'); body.classList.toggle('nav-open', o);
    burger.setAttribute('aria-expanded', o); body.style.overflow = o ? 'hidden' : '';
  });
  document.querySelectorAll('.mnav a').forEach(function (a) { a.addEventListener('click', function () { body.classList.remove('nav-open'); body.style.overflow = ''; }); });

  // ---------- apparitions ----------
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });
  window.BIF.observe = function (root) { (root || document).querySelectorAll('.rv:not(.in)').forEach(function (el) { io.observe(el); }); };
  window.BIF.observe();

  // ---------- liens WhatsApp génériques ----------
  document.querySelectorAll('[data-wa]').forEach(function (a) { a.href = wa(a.getAttribute('data-wa') || 'Bonjour BIF'); });
  paint();
})();
