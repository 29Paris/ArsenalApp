(function() {
  'use strict';

  angular
    .module('arsenalApp')
    .controller('FixturesResultController', FixturesResultController);

  /** @ngInject */
  function FixturesResultController($log) {
		$log.log('123');
  }
})();
