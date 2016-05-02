(function() {
  'use strict';

  angular
    .module('arsenalApp')
    .controller('TeamController', TeamController);
	
  angular
    .module('arsenalApp')
    .controller('ModalController', ModalController);
	
  angular
    .module('arsenalApp')
    .filter('dateToAge', dateToAge);
	
  angular
    .module('arsenalApp')
    .filter('toEuro', toEuro);
	
  angular
    .module('arsenalApp')
    .directive('errSrc', errSrc); 

  /** @ngInject */

  function TeamController(team, arsenalService, $uibModal, $http, $log) {
 
	var vm = this;
	var fixtures;
	var players;
	var promiseFixtures = arsenalService.getFixtureByHref(team.data._links.fixtures.href);
	var promisePlayers = arsenalService.getPlayerByHref(team.data._links.players.href);
	
	promiseFixtures.then(function(re) {
		
		fixtures = re;
		$log.log(fixtures);
		vm.fixtures = fixtures.data.fixtures;
	}); 
	/*
	$http.get(team.data._links.fixtures.href,{
        headers: {
          'X-Auth-Token': 'e0d15924ce51452db3db2aff8b08ba26'
	}}).success(function(re) {
		
          fixtures = re;
		  $log.log(fixtures);
		  vm.fixtures = fixtures.fixtures;
      });*/
	
	promisePlayers.then(function(re) {
		
		players = re;
		//var date = new Date;
		$log.log(players);
		/*
		$log.log(date.getTime() - Date.parse(players.data.players[0].dateOfBirth));
		for(var i = 0; i < players.data.players.length; i++) {
			
			players.data.players[i].age = date.getTime() - Date.parse(players.data.players[i].dateOfBirth);
		}
		$log.log(players);*/
		players.data.players.forEach(function(player){
			player.value = parseInt((player.marketValue || '0').replace(" €",''));
		});
		vm.players = players.data.players;
	});
	/*
	$http.get(team.data._links.players.href,{
        headers: {
          'X-Auth-Token': 'e0d15924ce51452db3db2aff8b08ba26'
	}}).success(function(re) {
		
          players = re;
		  $log.log(players);
      });*/
	$log.log(team.data._links.players.href);
	$log.log(fixtures);
		
	$log.log(team);
	vm.name = team.data.name;
	vm.sName = team.data.shortName;
	vm.marketValue = team.data.squadMarketValue;
	vm.url = team.data.crestUrl;
	vm.order = 'name';
		
	vm.openn = function(nm) {
		
		var modalInstance = $uibModal.open({
			
			animation: true,
			templateUrl: 'modalContent.html',
			controller: 'ModalController',
			size: "lg",
			resolve: {
				
				name: function() {
					
					return nm;
				}
			}
		});
	}
	
	vm.sort = function(num) {
		
		if(num == 0) {
			
			vm.order = vm.order == 'name'? '-name' : 'name';
		}
		
		else if(num == 1) {
			
			vm.order = vm.order == 'jerseyNumber'? '-jerseyNumber' : 'jerseyNumber';
		}
		else if(num == 2) {
			
			vm.order = vm.order == 'dateOfBirth'? '-dateOfBirth' : 'dateOfBirth';
		}
		else if(num == 3) {
			
			vm.order = vm.order == 'nationality'? '-nationality' : 'nationality';
		}
		else if(num == 4){
			vm.order = vm.order == 'value'? '-value' : 'value';
		}
		else {
			
			vm.order = vm.order == 'position'? '-position' : 'position';
		}
	}
  
  }
  
  function ModalController($scope, $uibModalInstance, $http, name) {

	console.log(name);
	if(name.indexOf('Ö')){
		
		name = name.replace(/Ö/g, 'O');
		console.log(name);
	}
	var lastNm = name.split(" ").length == 2? name.split(" ")[1] : name.split(" ")[0];
	console.log(lastNm);
	//var url = 'http://bit.ly/29Paris' + lastNm;
	$scope.url = 'http://bit.ly/29Paris' + lastNm;
	$scope.ok = function () {
    $uibModalInstance.close($scope.url);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
  }
  
  function dateToAge() {
	
	return function(input) {
		
      var date = new Date;
      return Math.floor((date.getTime() - Date.parse(input)) / 1000 / 3600 / 24 / 365);
	}
    
  }
  
  function toEuro() {
	
      return function(input) {
          console.log(input);
          return input == null ? '' : parseInt(input.replace(/,/g, ''));
      }
  }
  
  function errSrc() {
	
    return {
      link: function(scope, element, attrs) {
        element.bind('error', function() {
          if (attrs.src != attrs.errSrc) {
            attrs.$set('src', attrs.errSrc);
          }
        });
      }
    }  
  }
  
})();