/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('arsenalApp')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('LEAGUE', {
      'Premier League': 398,
      'Ligue 1': 396,
      '1.Bundesliga': 394,
      'Serie A': 401,
      'Primera Division': 399
    })
    .constant('TEAM', {
      'LeicesterCityFC': 338,
      'TottenhamHotspurFC': 73,
      'ManchesterCityFC': 65,
      'ArsenalFC': 57,
      'ManchesterUnitedFC': 66,
      'WestHamUnitedFC': 363,
      'LiverpoolFC': 64,
      'SouthamptonFC': 340,
      'ChelseaFC': 61,
      'StokeCityFC': 70,
      'EvertonFC': 62,
      'WatfordFC': 346,
      'WestBromwichAlbionFC': 74,
      'AFCBournemouth': 1044,
      'SwanseaCityFC': 72,
      'CrystalPalaceFC': 354,
      'SunderlandAFC': 71,
      'NorwichCityFC': 68,
      'NewcastleUnitedFC': 67,
      'AstonVillaFC': 58,
      'ParisSaint-Germain': 524,
      'OlympiqueLyonnais': 523,
      'ASMonacoFC': 548,
      'OGCNice': 522,
      'ASSaint-Étienne': 527,
      'OSCLille': 521,
      'StadeRennaisFC': 529,
      'AngersSCO': 532,
      'SMCaen': 514,
      'FCNantes': 543,
      'MontpellierHéraultSC': 518,
      'EAGuingamp': 538,
      'FCLorient': 525,
      'SCBastia': 536,
      'FCGirondinsdeBordeaux': 526,
      'OlympiquedeMarseille': 516,
      'Gazélec Ajaccio': 555,
      'StadedeReims': 547,
      'ToulouseFC': 511,
      'ESTroyesAC': 531,
      'FCBayernMünchen': 5,
      'BorussiaDortmund': 4,
      'BayerLeverkusen': 3
    })

})();
