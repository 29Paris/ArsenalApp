(function() {
  'use strict';

  angular
    .module('arsenalApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, toastr, $log) {
    var vm = this;
    vm.showToastr = showToastr;

    function showToastr() {
      $log.log('click');
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    }

  }
})();
