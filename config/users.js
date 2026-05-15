// ============================================================
//  UŽIVATELÉ – ZDE PŘIDEJTE/UPRAVTE HRÁČE
//
//  Jak nahrát fotografii:
//    1) Vložte soubor do složky images/avatars/
//       (doporučený formát: JPG nebo PNG, min. 200×200 px)
//    2) Nastavte cestu v poli "avatar" níže
//    3) Pokud fotka neexistuje, zobrazí se záložní emoji
// ============================================================

const CONFIG_USERS = [
  {
    id:     'Anita',                          // Interní ID (neměňte)
    name:   'Anita',                          // Jméno zobrazované na obrazovce
    avatar: 'images/avatars/anita.jpg',       // ← Sem nahrajte fotku Anity
    emoji:  '👧',                             // Záloha, pokud fotka chybí
    color:  '#FF6B9D',                        // Barva karty tohoto uživatele
  },
  {
    id:     'ariana',
    name:   'Ariana',
    avatar: 'images/avatars/ariana.jpg',      // ← Sem nahrajte fotku Ariany
    emoji:  '👧🏻',
    color:  '#4ECDC4',
  },

  // ----------------------------------------------------------
  // Chcete přidat dalšího hráče? Zkopírujte blok výše
  // (od { po }) a upravte hodnoty. Příklad:
  // ----------------------------------------------------------
  // {
  //   id:     'petr',
  //   name:   'Petr',
  //   avatar: 'images/avatars/petr.jpg',
  //   emoji:  '👦',
  //   color:  '#A29BFE',
  // },
];
