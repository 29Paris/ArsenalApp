(function() {
  'use strict';

  angular
    .module('arsenalApp')
    .controller('TeamController', TeamController);

  /** @ngInject */
  function TeamController(team) {
    console.log(team);
  }
})();