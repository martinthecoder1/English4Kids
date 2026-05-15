// ============================================================
//  HRA „NAJDI OBRÁZEK" – NASTAVENÍ
//
//  Tato hra sdílí slovíčka se souborem pexeso-data.js.
//  Přidávejte a upravujte slovíčka tam – zde nastavujete
//  jen obtížnost a délku herního kola.
// ============================================================

const CONFIG_FIND_WORD = {

  // ----------------------------------------------------------
  // OBTÍŽNOST – kolik obrázků se zobrazí jako možnosti
  // (jeden je správný, zbytek jsou náhodní „podvodníci")
  // ----------------------------------------------------------
  difficulties: {
    easy:   { choices: 2, label: '⭐ Lehká (2 obrázky)' },
    medium: { choices: 3, label: '⭐⭐ Střední (3 obrázky)' },
    hard:   { choices: 4, label: '⭐⭐⭐ Těžká (4 obrázky)' },
  },

  // ----------------------------------------------------------
  // Kolik otázek bude v jednom herním kole
  // (musí být ≤ počtu karet v pexeso-data.js)
  // ----------------------------------------------------------
  questionsPerRound: 10,

  // ----------------------------------------------------------
  // Čas (v ms) kdy se zobrazí výsledek správné/špatné odpovědi
  // před přechodem na další otázku (1000 = 1 sekunda)
  // ----------------------------------------------------------
  feedbackDuration: 1200,
};
