/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('arsenalApp')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('LEAGUE',{
		'Premier League': 398,
		'Ligue 1': 396,
		'1.Bundesliga': 394,
		'Serie A': 401,
		'Primera Division': 399
    });

})();
