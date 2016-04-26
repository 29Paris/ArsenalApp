(function() {
  'use strict';

  angular
    .module('arsenalApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, toastr, $log) {
    var vm = this;
    vm.showToastr = showToastr;
    vm.slideInterval = 3000;
    vm.activeSlide = 0;
    vm.slides = [{id: 0,
      image: 'assets/images/Wenger-Henry.jpg',
      title: 'Wenger signs Henry'},
      {id: 1,
      image: 'assets/images/emiratesStadium.jpeg',
      title: 'Emirates Stadium'},
      {id: 2,
      image: 'assets/images/Highbury.jpg',
      title: 'Highbury'},
      {id: 3,
      image: 'assets/images/arsenal03-04.jpg',
      title: 'Arsenal 03-04'}];

    function showToastr() {
      $log.log('click');
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    }

  }
})();
