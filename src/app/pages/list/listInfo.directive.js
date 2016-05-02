(function() {
  'use strict';

  angular
    .module('arsenalApp')
    .directive('listInfo', listInfo);

  /** @ngInject */
  function listInfo() {
    var directive = {
      restrict: 'E',
      scope: {
        infos: '=',
        loading: '='
      },
      templateUrl: 'app/pages/list/listInfo.html',
      link: linkFunc
    };

    return directive;

    function linkFunc() {
      

    }


  }

})();
