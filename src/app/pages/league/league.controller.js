(function() {
  'use strict';

  angular
    .module('arsenalApp')
    .controller('LeagueController', LeagueController);

  /** @ngInject */
  function LeagueController(table) {
    var vm = this;
    vm.teams = table.data.standing;
    vm.teamColor = function(index) {
      if(index<=3){
        return 'success';
      } else if(index>3 && index<=6){
        return 'info';
      } else if(index>=17) {
        return 'danger';
      } else return '';
    };

  }
})();