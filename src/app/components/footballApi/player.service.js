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
      var fullname = playerName.replace(/ /g, '').split(/(?=[A-Z])/);
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

    vm.getPlayerData = function(query) {
      var deferred = $q.defer();
      if (!Object.keys(vm.playersData).length) {
        $http({
          headers: {
            "Accept": "application/json;charset=utf-8"
          },
          type: 'GET',
          url: 'app/pages/players/FIFA12/player.json'
        }).then(function(response) {
          vm.playersData = response.data;
          if (angular.isString(query)) {
            vm.getPlayerByName(query, deferred);
          } else {
            vm.getSquards(query, deferred)
          }
        });
      } else {
        if (angular.isString(query)) {
          vm.getPlayerByName(query, deferred);
        } else {
          vm.getSquards(query, deferred)
        }
      }
      return deferred.promise;
    };

    vm.getSquards = function(squards, deferred) {
      var squardsResult = [];
      vm.playersData.forEach(function(player) {
        if (squards.indexOf(player.name) > -1) {
          squardsResult.push(player);
        }
      });
      if (squardsResult.length > 0) {
        deferred.resolve(squardsResult);
      } else {
        deferred.reject("No player found!");
      }
    };

  }
})();
