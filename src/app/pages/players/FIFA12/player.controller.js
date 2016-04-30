(function() {
  'use strict';

  angular
    .module('arsenalApp')
    .controller('PlayerFIFAController', PlayerFIFAController);

  /** @ngInject */
  function PlayerFIFAController(playerService, player) {

    var vm = this;
    var availableLabels = [
      ['Defending', 'Pace', 'Dribbling', 'Shooting', 'Passing', 'Heading'],
      ['Diving', 'Handling', 'Kicking', 'Positioning', 'Reflexesing', 'Speed']
    ];
    vm.data = [
      [100, 100, 100, 100, 100, 100]
    ];
    vm.labels = availableLabels[0];
    vm.colors = [{
      fillColor: 'rgba(0,0,0,0)',
      strokeColor: 'rgba(0,0,0,0)',
      highlightFill: '#fff',
      highlightStroke: '#fff'
    }, {
      fillColor: 'rgba(220,220,220,0.2)',
      strokeColor: 'rgba(220,220,220,1)',
      highlightFill: 'rgba(220,220,220,0.2)',
      highlightStroke: 'rgba(220,220,220,0.2)'
    }];
    var position = {
      'A': 'Attacker',
      'G': 'Goalkeeper',
      'D': 'Defender',
      'M': 'Midfielder'
    };

    if (player.length && player.length === 1) {

      var playerStat = player[0];

      vm.name = playerStat.name;
      vm.height = playerStat.height;
      vm.rating = playerStat.rating;
      vm.position = position[playerStat.position];
      vm.foot = playerStat.foot;
      vm.rare = vm.rare ? true : false;

      if (playerStat.position === 'G') {
        vm.labels = availableLabels[1];
        var radarStat = [playerStat.diving, playerStat.handling, playerStat.kicking, playerStat.positioning, playerStat.reflexesing, playerStat.speed];
        vm.data.push(radarStat);
      } else {
        var radarStat = [playerStat.defending, playerStat.pace, playerStat.dribbling, playerStat.shooting, playerStat.passing, playerStat.heading];
        vm.data.push(radarStat);
        console.log(vm.data)
      }

    }



    // vm.getPlayerData = function() {
    //   playerService.getPlayerData('TheoWalott').then(function success(data) {
    //     console.log(data);
    //   }, function err(err) {
    //     console.log(err);
    //   });
    // }



  }
})();
