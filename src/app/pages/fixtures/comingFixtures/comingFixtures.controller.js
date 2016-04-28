(function() {
  'use strict';

  angular
    .module('arsenalApp')
    .controller('ComingFixturesController', ComingFixturesController);

  /** @ngInject */
  function ComingFixturesController(comingFixtures, arsenalService, LEAGUE) {
    var vm = this;
    vm.league = 'Europe';
    vm.timeFrame = '7';

    vm.init = function(data) {
      vm.allMatches = data.data.fixtures;
      vm.matches = vm.allMatches.slice(0, 12);
      vm.stopLoad = false;
    };

    vm.loadMore = function() {
      vm.stopLoad = true;
      var last = vm.matches.length;
      if (last < vm.allMatches.length) {
        vm.stopLoad = false;
        vm.matches = vm.allMatches.slice(0, last + 6);
      }
    };

    vm.changeLeague = function() {
      var leagueId = LEAGUE[vm.league] || '';
      arsenalService.getComingFixtures(vm.timeFrame, leagueId).then(function success(data) {
        vm.init(data);
      });
    };

    vm.toggleMatchDetail = function(match) {
      if (!match.records) {
        var matchHref = match._links.self.href;
        arsenalService.getFixtureByHref(matchHref).then(function success(data) {
          match.records = data.data.head2head.fixtures;
          match.showMore = !match.showMore;
        });
      } else {
        match.showMore = !match.showMore;
      }
    };

    vm.init(comingFixtures);
  }
})();
