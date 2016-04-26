(function() {
  'use strict';

  angular
    .module('arsenalApp')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 10000;
    toastrConfig.positionClass = 'toast-bottom-left';
    toastrConfig.progressBar = true;
  }

})();