(function() {
  'use strict';

  angular
    .module('arsenalApp')
    .controller('ListController', ListController);

  /** @ngInject */
  function ListController($scope, $interval, playerService) {
    var vm = this;
    var list = ['Arsenal', 'RealMadrid', 'Bayern', 'Barcelona'];
    vm.listCurrent = 0;
    vm.list = list[vm.listCurrent];
    vm.pause = false;
    vm.changeList = function(index) {
      vm.listCurrent = index;
      vm.list = list[index];
      vm.loadPlayers(vm.list);
    };
    vm.active = function(list) {
      return list === vm.list;
    }
    vm.intervalPromise = $interval(function() {
      if (!vm.pause) {
        if (vm.listCurrent >= list.length) {
          vm.changeList(0);
          vm.listCurrent++;
        } else {
          vm.changeList(vm.listCurrent);
          vm.listCurrent++;
        }
      }
    }, 3000)

    $scope.$on('$destroy', function() {
      if (vm.intervalPromise) {
        $interval.cancel(vm.intervalPromise);
      }
    });

    var teams = {
      'Arsenal': ['Mesut Özil', 'Petr Cech', 'Mathieu Debuchy', 'Per Mertesacker', 'Laurent Koscielny', 'Natxo Monreal', 'Jack Wilshere', 'Aaron Ramsey', 'Santi Cazorla', 'Alexis Sánchez', 'Olivier Giroud'],
      'RealMadrid': ['Cristiano Ronaldo', 'Casillas', 'Sergio Ramos', 'Pepe', 'Marcelo', 'Gareth Bale', 'Karim Benzema', 'Luka Modric', 'James Rodríguez', 'Isco', 'Toni Kroos'],
      'Bayern': ['Philipp Lahm', 'Manuel Neuer', 'Jérôme Boateng', 'David Alaba', 'Xabi Alonso', 'Thomas Müller', 'Mario Götze', 'Arturo Vidal', 'Franck Ribéry', 'Arjen Robben', 'Robert Lewandowski'],
      'Barcelona': ['Lionel Messi', 'Piqué', 'Jordi Alba', 'Claudio Bravo', 'Dani Alves', 'Javier Mascherano', 'Thomas Vermaelen', 'Iniesta', 'Arda Turan', 'Luis Suárez', 'Neymar']
    };
    var busyLoad = false;

    vm.teamsSquad = {
      'Arsenal': {
        loading: true,
        squad: []
      },
      'RealMadrid': {
        loading: true,
        squad: []
      },
      'Bayern': {
        loading: true,
        squad: []
      },
      'Barcelona': {
        loading: true,
        squad: []
      }
    };

    vm.loadPlayers = function(team) {
      if (vm.teamsSquad[team].loading === true && !busyLoad) {
        busyLoad = true;
        playerService.getPlayerData(teams[team]).then(function success(res){
          busyLoad = false;
          vm.teamsSquad[team].squad = res;
          vm.teamsSquad[team].loading = false;
        }, function err(){
          busyLoad = false;
        });
      }
    };

    vm.loadPlayers('Arsenal');

  }
})();
