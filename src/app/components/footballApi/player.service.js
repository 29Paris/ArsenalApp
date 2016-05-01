(function() {
  'use strict';

  angular
    .module('arsenalApp')
    .service('playerService', player);

  /** @ngInject */
  function player($http, $q) {
    var vm = this;
    vm.playersData = {};

    vm.getPlayerByName = function(playerName, deferred) {
      var fullname = playerName.replace(/ /g,'').split(/(?=[A-Z])/);
      var name = fullname.join(" ");
      var searchResult = [];
      vm.playersData.forEach(function(player) {
        if (player.name === name) {
          searchResult.push(player);
        }
      });
      if (searchResult.length > 0) {
        deferred.resolve(searchResult);
      } else {
        deferred.reject("No player found!");
      }
    };

    vm.getPlayerData = function(playerName) {
      var deferred = $q.defer();
      if (!Object.keys(vm.playersData).length) {
        $http.get('app/pages/players/FIFA12/player.json').then(function(response) {
          vm.playersData = response.data;
          vm.getPlayerByName(playerName, deferred);
        });
      } else {
        vm.getPlayerByName(playerName, deferred);
      }
      return deferred.promise;
    };


  }

})();
