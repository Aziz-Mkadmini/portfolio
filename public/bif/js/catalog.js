/* Catalogue BIF — à compléter avec les vrais prix (en DT, nombre) et textes.
   price: null affiche [PRIX] et le total ne se calcule pas encore. */
window.BIF_WHATSAPP = ''; // ex. '21612345678' (sans + ni espaces)
window.BIF_CATALOG = [
  {
    id: 'concealer', name: 'BIF Concealer', cat: 'teint', badge: 'Incontournable', price: null,
    short: 'Couvre et unifie le teint.', role: 'Couvrir et unifier',
    desc: "Une texture crémeuse et une couvrance forte pour effacer les cernes et unifier le teint. Son embout mousse dépose la juste dose, à estomper du bout du doigt.",
    how: ["Dépose 2 à 3 points sous l'œil, en triangle.", "Estompe en tapotant du bout du doigt ou avec une éponge humide.", "Fixe avec une poudre libre si tu le souhaites."],
    compo: '[COMPOSITION À COMPLÉTER PAR BIF]',
    variants: [{ name: 'Beige', color: '#E7C7A6', bg: '#EFE1D2', img: 'img/p/beige.webp', open: 'img/p/beige-open.webp' }],
    gallery: ['img/hero.webp', 'img/beige.webp']
  },
  {
    id: 'correcteur-rose', name: 'BIF Correcteur Rosé', cat: 'teint', badge: '', price: null,
    short: 'Pour les cernes bleutés des peaux claires.', role: 'Cernes bleutés',
    desc: "Un correcteur rosé qui neutralise les cernes bleutés sur les peaux claires, avant ou à la place du concealer. Texture crémeuse, fini naturel.",
    how: ["Applique une fine couche uniquement sur la zone bleutée.", "Estompe en tapotant.", "Termine avec le concealer si besoin."],
    compo: '[COMPOSITION À COMPLÉTER PAR BIF]',
    variants: [{ name: 'Rosé', color: '#F2C9C4', bg: '#F4DAD6', img: 'img/p/rose.webp', open: 'img/p/rose-open.webp' }],
    gallery: ['img/rose.webp']
  },
  {
    id: 'correcteur-orange', name: 'BIF Correcteur Orange', cat: 'teint', badge: '', price: null,
    short: 'Pour les cernes foncés des peaux mates.', role: 'Cernes foncés',
    desc: "Un correcteur orangé qui neutralise les cernes foncés et bleu-violet, idéal sur les peaux mates à foncées. Texture crémeuse, couvrance forte.",
    how: ["Applique une fine couche sur la zone la plus foncée.", "Estompe en tapotant.", "Unifie ensuite avec le concealer."],
    compo: '[COMPOSITION À COMPLÉTER PAR BIF]',
    variants: [{ name: 'Orange', color: '#F3A877', bg: '#F9CFAE', img: 'img/p/orange.webp', open: 'img/p/orange-open.webp' }],
    gallery: ['img/orange.webp']
  },
  {
    id: 'blush', name: 'BIF Blush', cat: 'joues', badge: '', price: null,
    short: 'Une touche, un teint qui respire.', role: 'Bonne mine',
    desc: "Un blush liquide qui se fond dans la peau pour un effet bonne mine naturel. Commence par une petite touche, puis ajoute selon l'intensité voulue.",
    how: ["Dépose une petite touche sur la pommette.", "Estompe vers les tempes du bout des doigts.", "Ajoute une deuxième touche pour plus d'intensité."],
    compo: '[COMPOSITION À COMPLÉTER PAR BIF]',
    variants: [{ name: 'Framboise', color: '#B5276E', bg: '#F0D3E0', img: 'img/p/blush.webp', open: 'img/p/blush-open.webp' }],
    gallery: ['img/blush.webp']
  },
  {
    id: 'fixateur', name: 'BIF Fixateur sourcils', cat: 'yeux', badge: '', price: null,
    short: 'Des sourcils disciplinés en un geste.', role: 'Sourcils nets',
    desc: "Un gel transparent qui discipline et fixe les poils des sourcils, pour un regard net et soigné.",
    how: ["Brosse les sourcils vers le haut.", "Redessine la forme en lissant vers l'extérieur.", "Laisse sécher quelques secondes."],
    compo: '[COMPOSITION À COMPLÉTER PAR BIF]',
    variants: [{ name: 'Transparent', color: '#FFFFFF', bg: '#E9ECEF', img: 'img/p/fixateur.webp', open: 'img/p/fixateur-open.webp' }],
    gallery: ['img/fixateur.webp']
  },
  {
    id: 'deep', name: 'DEEP for men', cat: 'parfums', badge: 'Édition limitée', price: null,
    short: 'Notes qui restent, présence qui marque.', role: 'Parfum homme',
    desc: "Un parfum de niche pour homme, frais et boisé, en édition limitée. 50 ml.",
    notes: { 'Tête': 'Citron de Sicile, bergamote, poivre noir', 'Cœur': 'Lavande, muguet, noix de muscade', 'Fond': 'Musc blanc, santal, ambre, vanille' },
    how: ["Vaporise sur le cou et les poignets, sur peau propre.", "Ne frotte pas : laisse les notes se poser."],
    compo: '[COMPOSITION À COMPLÉTER PAR BIF]',
    variants: [{ name: '50 ml', color: '#2A2520', bg: '#1A1714', img: 'img/p/deep.webp' }],
    gallery: ['img/deep.webp'], dark: true
  },
  {
    id: 'vega-star', name: 'Vega Star', cat: 'parfums', badge: 'Parfum de niche', price: null,
    short: 'Parfum de niche pour elle.', role: 'Parfum femme',
    desc: "Un parfum de niche pour femme. 50 ml. [DESCRIPTION ET NOTES À COMPLÉTER PAR BIF]",
    how: ["Vaporise sur le cou et les poignets, sur peau propre."],
    compo: '[COMPOSITION À COMPLÉTER PAR BIF]',
    variants: [{ name: '50 ml', color: '#E7C98F', bg: '#F3E7D2', img: 'img/p/vega.webp' }],
    gallery: []
  }
];
window.BIF_PACK = { id: 'pack-essentiel', name: 'Routine essentielle', price: null, items: 'Correcteur au choix + Fixateur sourcils + Blush' };
