(function() {
  'use strict';

  angular
    .module('arsenalApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
