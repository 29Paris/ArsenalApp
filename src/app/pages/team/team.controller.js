(function() {
  'use strict';

  angular
    .module('arsenalApp')
    .controller('TeamController', TeamController);

  /** @ngInject */

  function TeamController(team) {
    //console.log(team);
	var vm = this;
	vm.ini = function() {
		
		vm.name = team.data.name;
		vm.sName = team.data.shortName;
		vm.marketValue = team.data.squadMarketValue;
		vm.url = team.data.crestUrl;
	}
  }
})();