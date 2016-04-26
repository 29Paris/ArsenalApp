(function() {
  'use strict';

  angular
    .module('arsenalApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('fixtures', {
        url: '/fixtures',
        templateUrl: 'app/pages/fixtures/fixtures.html',
        resolve: {
          fixtures: function(arsenalService){
            return arsenalService.getFixtures();
          }
        },
        controller: 'FixturesController',
        controllerAs: 'fixtures'
      })
      .state('team', {
        url: '/teams/:team',
        templateUrl: 'app/pages/team/team.html',
        params: { teamId: null,
                  teamHref: null },
        resolve: {
          team: function(arsenalService, $stateParams){
            var teamHref = $stateParams.teamHref;
            return arsenalService.getTeamByHref(teamHref);
          }
        },
        controller: 'TeamController',
        controllerAs: 'team'
      })
      .state('league',{
        url: '/league',
        templateUrl: 'app/pages/league/league.html',
        resolve: {
          table: function(arsenalService) {
            return arsenalService.getTable(398);
          }
        },
        controller: 'LeagueController',
        controllerAs: 'league'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
