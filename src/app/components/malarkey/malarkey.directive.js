(function() {
  'use strict';

  angular
    .module('arsenalApp')
    .directive('acmeMalarkey', acmeMalarkey);

  /** @ngInject */
  function acmeMalarkey(malarkey) {
    var directive = {
      restrict: 'E',
      scope: {
        extraValues: '='
      },
      template: '&nbsp;',
      link: linkFunc
    };

    return directive;

    function linkFunc(scope, el, attr, vm) {
      var typist = malarkey(el[0], {
        typeSpeed: 50,
        deleteSpeed: 50,
        pauseDelay: 2000,
        loop: true,
        postfix: ' '
      });

      el.addClass('acme-malarkey');

      angular.forEach(scope.extraValues, function(value) {
        typist.type(value).pause().delete();
      });

    }


  }

})();
