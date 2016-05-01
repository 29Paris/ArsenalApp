(function () {
  'use strict';

  angular
    .module('arsenalApp')
    .controller('PlayerFIFAController', PlayerFIFAController);

  /** @ngInject */
  function PlayerFIFAController(playerService, player1, toastr) {

    var vm = this;
    var availableLabels = [
      ['Defending', 'Pace', 'Dribbling', 'Shooting', 'Passing', 'Heading'],
      ['Diving', 'Handling', 'Kicking', 'Positioning', 'Reflexesing', 'Speed']
    ];
    var position = {
      'A': 'Attacker',
      'GK': 'GK',
      'D': 'Defender',
      'M': 'Midfielder'
    };

    vm.labels = availableLabels[0];
    vm.players = [];
    vm.player2 = false;
    vm.player2Name = '';
    vm.player1Name = '';
    vm.radarDatasets = [];
    vm.arsenalPlayers = ['Petr Cech', 'Per Mertesacker', 'Jack Wilshere', 'Santi Cazorla', 'Alexis Sanchez', 'Mesut Ozil'];

    var initPlayer = function (player) {
      if (player.length && player.length === 1) {
        var playerStat = player[0];
        var playerInfo = {
          name: playerStat.name,
          height: playerStat.height,
          rating: playerStat.rating,
          foot: playerStat.foot,
          position: position[playerStat.position],
          rare: playerStat.rare ? true : false
        }
        if (playerStat.position === 'GK') {
          vm.labels = availableLabels[1];
          playerInfo.radarStat = [playerStat.diving, playerStat.handling, playerStat.kicking, playerStat.positioning, playerStat.reflexes, playerStat.speed];
        } else {
          vm.labels = availableLabels[0];
          playerInfo.radarStat = [playerStat.defending, playerStat.pace, playerStat.dribbling, playerStat.shooting, playerStat.passing, playerStat.heading];
        }

        vm.players.push(playerInfo);
        if (vm.players.length === 1) {
          vm.radarDatasets.push({
            fillColor: "rgba(151,187,205,0.2)",
            strokeColor: "rgba(151,187,205,1)",
            data: playerInfo.radarStat
          });
        } else {
          vm.radarDatasets.push({
            fillColor: "rgba(161,212,83,0.2)",
            strokeColor: "rgba(161,212,83,1)",
            data: playerInfo.radarStat
          });
        }
      }
    };
    var drawChart = function () {
      var ctx = document.getElementById("myChart").getContext("2d");
      var data = {
        labels: vm.labels,
        datasets: vm.radarDatasets
      };
      var myChart = new Chart(ctx).Radar(data, {
        scaleOverride: true,
        scaleSteps: 10,
        scaleStepWidth: 10,
        scaleStartValue: 0
      });
    }

    initPlayer(player1);
    drawChart();

    vm.getPlayerData = function (type) {
      var playerName = type === 'change' ? vm.player1Name : vm.player2Name;
      playerService.getPlayerData(playerName).then(function success(player) {
        if (type === 'change') {
          vm.player2 = false;
          vm.player1Name = '';
          vm.player2Name = '';
          vm.players = [];
          vm.radarDatasets = [];
          initPlayer(player);
          drawChart();
        } else if (position[player[0].position] !== vm.players[0].position && (position[player[0].position] === 'GK' || vm.players[0].position === 'GK')){
          toastr.info('<b>Cannot compare GK to other positions players</b>');          
        } else {
          vm.player2 = true;
          initPlayer(player);
          drawChart();
        }
      }, function err(err) {
        toastr.info(err);
      });
    };

    vm.setPlayer1 = function (player1) {
      vm.player1Name = player1;
      vm.getPlayerData('change');
    };

  }
})();
