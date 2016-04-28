(function() {
  'use strict';

  angular
    .module('arsenalApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, toastr) {
    var vm = this;
    vm.showToastr = showToastr;
    vm.slideInterval = 3000;
    vm.activeSlide = 0;
    vm.slides = [{
      id: 0,
      image: 'assets/images/Wenger-Henry.jpg',
      title: 'Wenger signs Henry'
    }, {
      id: 1,
      image: 'assets/images/emiratesStadium.jpeg',
      title: 'Emirates Stadium'
    }, {
      id: 2,
      image: 'assets/images/Highbury.jpg',
      title: 'Highbury'
    }, {
      id: 3,
      image: 'assets/images/arsenal03-04.jpg',
      title: 'Arsenal 03-04'
    }];

    function showToastr() {
      toastr.info('<a href="http://www.arsenal.com" target="_blank"><b>Champion Arsenal</b></a>');
    }

  }
})();
