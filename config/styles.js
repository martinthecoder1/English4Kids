// ============================================================
//  STYLOVÝ SOUBOR – ZDE NASTAVÍTE CELÝ VIZUÁLNÍ VZHLED WEBU
//  Upravujte jen hodnoty za dvojtečkou (uvnitř uvozovek).
// ============================================================

const CONFIG_STYLES = {

  // ----------------------------------------------------------
  // BARVY
  // ----------------------------------------------------------
  colors: {
    primary:    '#FF6B9D',   // Hlavní barva (tlačítka, nadpisy)
    secondary:  '#4ECDC4',   // Vedlejší barva (akcenty)
    accent:     '#FFE66D',   // Zvýrazňovací barva (hvězdičky, okraje)
    background: '#FFF0F8',   // Barva pozadí celé stránky
    cardBack:   '#B5EAD7',   // Barva zadní strany karet v pexesu
    success:    '#6BCB77',   // Správná odpověď (zelená)
    error:      '#FF6B6B',   // Špatná odpověď (červená)
    text:       '#3D3D3D',   // Barva textu
    textLight:  '#FFFFFF',   // Světlý text (na barevném pozadí)
  },

  // ----------------------------------------------------------
  // PÍSMA
  // Doporučená Google Fonts: https://fonts.google.com
  // Stačí napsat název fontu, zbytek se nastaví automaticky.
  // ----------------------------------------------------------
  fonts: {
    heading: 'Fredoka One',           // Nadpisy a názvy her
    body:    'Nunito',                // Běžný text, popisky
    // Záložní systémová písma (použijí se pokud Google Fonts nefunguje):
    headingFallback: 'Comic Sans MS, cursive',
    bodyFallback:    'Arial Rounded MT Bold, sans-serif',
  },

  // ----------------------------------------------------------
  // TEXTY APLIKACE
  // Upravte překlady nebo znění textů dle libosti.
  // ----------------------------------------------------------
  texts: {
    appTitle:        '🌟 English Fun!',
    selectUserTitle: 'Kdo dnes bude hrát?',
    selectGameTitle: 'Vyber si hru! 🎮',
    backButton:      '← Zpět',

    games: {
      pexeso: {
        name:        'Pexeso',
        description: 'Najdi dvojice obrázků a slovíček!',
      },
      findWord: {
        name:        'Najdi obrázek',
        description: 'Klikni na správný obrázek podle slovíčka!',
      },
    },

    difficulty: {
      label:  'Vyber obtížnost:',
      easy:   { label: '⭐ Lehká',      description: 'Méně karet / možností' },
      medium: { label: '⭐⭐ Střední',   description: 'Více karet / možností' },
      hard:   { label: '⭐⭐⭐ Těžká',   description: 'Nejvíce karet / možností' },
    },

    game: {
      score:      'Skóre',
      moves:      'Tahy',
      time:       'Čas',
      question:   'Otázka',
      of:         'z',
      congrats:   '🎉 Skvělá práce!',
      playAgain:  '🔄 Hrát znovu',
      backToMenu: '🏠 Menu',
      correct:    '✅ Správně!',
      wrong:      '❌ Zkus znovu!',
      matchFound: '🎊 Pár nalezen!',
    },
  },
};
