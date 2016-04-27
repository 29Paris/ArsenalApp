(function() {
  'use strict';

  angular
    .module('arsenalApp')
    .controller('LeagueController', LeagueController);

  /** @ngInject */
  function LeagueController(table, LEAGUE, arsenalService, $state) {
    var vm = this;
    vm.teams = table.data.standing;
    vm.league = 'Premier League';
    vm.pictureReady = true;
    vm.changeLeague = function() {
      vm.pictureReady = false;
      var leagueCode = LEAGUE[vm.league];
      arsenalService.getTable(leagueCode).then(function success(data) {
        vm.pictureReady = true;
        vm.teams = data.data.standing;
      })

    }
    vm.teamColor = function(index) {
      if (index <= 3) {
        return 'success';
      } else if (index > 3 && index <= 6) {
        return 'info';
      } else if (index >= 17) {
        return 'danger';
      } else return '';
    };
    vm.goTeamPage = function(team) {
      var teamHref = team._links.team.href;
      var teamName = team.teamName.replace(/ /g, "");
      $state.go('team', { teamHref: teamHref, team: teamName });
    };

  }
})();
