(function() {
  'use strict';

  angular
    .module('arsenalApp')
    .controller('FixturesResultController', FixturesResultController);

  /** @ngInject */
  function FixturesResultController(fixturesResult, arsenalService, LEAGUE, $log) {
    $log.log(fixturesResult);

    var vm = this;
    vm.league = 'Europe';
    vm.timeFrame = '7';

    vm.init = function(data) {
      vm.allResults = data.data.fixtures;
      var nMatches = data.data.count;
      if (nMatches < 12) {
        vm.matches = vm.allResults;
        vm.stopLoad = true;
      } else {
        vm.matches = vm.allResults.slice(0, 12);
        vm.stopLoad = false;
      }
    };

    vm.loadMore = function() {
      vm.stopLoad = true;
      var last = vm.matches.length;
      if (last < vm.allResults.length) {
        vm.stopLoad = false;
        vm.matches = vm.allResults.slice(0, last + 6);
      }
    };

    vm.changeLeague = function() {
      var leagueId = LEAGUE[vm.league] || '';
      arsenalService.getFixturesResult(vm.timeFrame, leagueId).then(function success(data) {
        $log.log(data);
        vm.init(data);
      });
    };

    vm.init(fixturesResult);


  }
})();
