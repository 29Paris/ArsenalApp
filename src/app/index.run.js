(function() {
  'use strict';

  angular
    .module('arsenalApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope, TEAM, $state) {
    var routeChangeCallback = $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
      if (toState.name === 'team' && !toParams.teamHref) {
        var teamId = TEAM[toParams.team];
        if (!teamId) {
          event.preventDefault();
          $state.go('league');
        }
      }
    });
    $rootScope.$on('$destroy', routeChangeCallback);

  }

})();
