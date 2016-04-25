(function() {
  'use strict';

  angular
    .module('arsenalApp')
    .controller('FixturesController', FixturesController);

  /** @ngInject */
  function FixturesController(fixtures) {
    console.log(fixtures);

  }
})();