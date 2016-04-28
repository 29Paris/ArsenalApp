(function() {
  'use strict';

  angular
    .module('arsenalApp')
    .controller('TeamController', TeamController);

  /** @ngInject */

  function TeamController(team, arsenalService, $http, $log) {
    //console.log(team);
	var vm = this;
	var fixtures;
	arsenalService.getFixtureByHref(team.data._links.fixtures.href);
	$http.get(team.data._links.fixtures.href,{
        headers: {
          'X-Auth-Token': 'e0d15924ce51452db3db2aff8b08ba26'
	}}).success(function(re) {
		
          fixtures = re;
		  $log.log(fixtures);
		  vm.fixtures = fixtures.fixtures;
      });
	  
	var players;
	$http.get(team.data._links.players.href,{
        headers: {
          'X-Auth-Token': 'e0d15924ce51452db3db2aff8b08ba26'
	}}).success(function(re) {
		
          players = re;
		  $log.log(players);
      });
	$log.log(team.data._links.players.href);
	$log.log(fixtures);
	//vm.ini = function() {
		
		$log.log(team);
		vm.name = team.data.name;
		vm.sName = team.data.shortName;
		vm.marketValue = team.data.squadMarketValue;
		vm.url = team.data.crestUrl;
		//$log.log(fixtures.$$state);
		//vm.fixtures = fixtures['$$status'].value.data.fixtures;
	//}
  }
})();