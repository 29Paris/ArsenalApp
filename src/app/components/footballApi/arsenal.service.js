(function () {
  'use strict';

  angular
    .module('arsenalApp')
    .service('arsenalService', arsenal);

  /** @ngInject */
  function arsenal($http, $q) {

    this.getFixtures = function () {
      var deferred = $q.defer();
      $http({
        headers: {
          'X-Auth-Token': 'e0d15924ce51452db3db2aff8b08ba26'
        },
        url: 'http://api.football-data.org/v1/soccerseasons/398/fixtures?timeFrame=n14',
        method: 'GET'
      }).then(function success(data) {
        deferred.resolve(data);
      }, function error(err) {
        deferred.reject(err);
      });
      return deferred.promise;
    };

    this.getTeam = function (teamId) {
      var deferred = $q.defer();
      $http({
        headers: {
          'X-Auth-Token': 'e0d15924ce51452db3db2aff8b08ba26'
        },
        url: 'http://api.football-data.org/v1/teams/' + teamId,
        method: 'GET'
      }).then(function success(data) {
        deferred.resolve(data);
      }, function error(err) {
        deferred.reject(err);
      });
      return deferred.promise;
    };

    this.getTeamByHref = function (href) {
      var deferred = $q.defer();
      $http({
        headers: {
          'X-Auth-Token': 'e0d15924ce51452db3db2aff8b08ba26'
        },
        url: href,
        method: 'GET'
      }).then(function success(data) {
        deferred.resolve(data);
      }, function error(err) {
        deferred.reject(err);
      });
      return deferred.promise;
    };

    this.getTeams = function (leagueId) {
      var deferred = $q.defer();
      $http({
        headers: {
          'X-Auth-Token': 'e0d15924ce51452db3db2aff8b08ba26'
        },
        url: 'http://api.football-data.org/v1/soccerseasons/' + leagueId + '/teams',
        method: 'GET'
      }).then(function success(data) {
        deferred.resolve(data);
      }, function error(err) {
        deferred.reject(err);
      });
      return deferred.promise;
    };

    this.getTable = function (leagueId) {
      var deferred = $q.defer();
      $http({
        headers: {
          'X-Auth-Token': 'e0d15924ce51452db3db2aff8b08ba26'
        },
        url: 'http://api.football-data.org/v1/soccerseasons/' + leagueId + '/leagueTable',
        method: 'GET'
      }).then(function success(data) {
        deferred.resolve(data);
      }, function error(err) {
        deferred.reject(err);
      });
      return deferred.promise;
    };
  }




})();
