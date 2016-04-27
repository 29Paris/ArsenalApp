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
        abstract: true,
        url: '/fixtures',
        template : '<ui-view></ui-view>'
      })
      .state('fixtures.coming', {
        url: '/coming',
        templateUrl: 'app/pages/fixtures/comingFixtures/comingFixtures.html',
        resolve: {
          comingFixtures: function(arsenalService) {
            return arsenalService.getComingFixtures();
          }
        },
        controller: 'ComingFixturesController',
        controllerAs: 'comingFixtures'
      })
      .state('fixtures.result', {
        url: '/result',
        templateUrl: 'app/pages/fixtures/fixturesResult/fixturesResult.html',
        resolve: {
          fixtures: function(arsenalService) {
            return arsenalService.getFixtures();
          }
        },
        controller: 'FixturesResultController',
        controllerAs: 'fixturesResult'
      })
      .state('team', {
        url: '/teams/:team',
        templateUrl: 'app/pages/team/team.html',
        params: {
          teamId: null,
          teamHref: null
        },
        resolve: {
          team: function(arsenalService, $stateParams, TEAM) {
            if ($stateParams.teamHref) {
              var teamHref = $stateParams.teamHref;
              return arsenalService.getTeamByHref(teamHref);
            } else if ($stateParams.team && TEAM[$stateParams.team]) {
              var teamId = TEAM[$stateParams.team];
              return arsenalService.getTeam(teamId);
            } 
          }
        },
        controller: 'TeamController',
        controllerAs: 'team'
      })
      .state('league', {
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
