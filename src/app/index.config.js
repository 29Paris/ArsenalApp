(function() {
  'use strict';

  angular
    .module('arsenalApp')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, ChartJsProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
ChartJsProvider.setOptions({
                responsive: true,
                maintainAspectRatio: false
            });
    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.progressBar = false;
  }

  
})();
