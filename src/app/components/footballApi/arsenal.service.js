(function() {
  'use strict';

  angular
    .module('arsenalApp')
    .service('arsenalService', arsenal);

  /** @ngInject */
  function arsenal($http, $q) {

    this.getComingFixtures = function(timeFrame, leagueId) {
      var baseFixturesAPI;
      if (leagueId) {
        baseFixturesAPI = 'http://api.football-data.org/v1/soccerseasons/' + leagueId + '/fixtures';
      } else {
        baseFixturesAPI = 'http://api.football-data.org/v1/fixtures';
      }

      if (timeFrame) {
        baseFixturesAPI += '?timeFrame=n' + timeFrame;
      }
      var deferred = $q.defer();
      $http({
        headers: {
          'X-Auth-Token': 'e0d15924ce51452db3db2aff8b08ba26'
        },
        url: baseFixturesAPI,
        method: 'GET'
      }).then(function success(data) {
        deferred.resolve(data);
      }, function error(err) {
        deferred.reject(err);
      });
      return deferred.promise;
    };

    this.getFixturesResult = function(timeFrame, leagueId) {
      var baseFixturesAPI;
      var time = timeFrame||7;
      if (leagueId) {
        baseFixturesAPI = 'http://api.football-data.org/v1/soccerseasons/' + leagueId + '/fixtures?timeFrame=p' + time;
      } else {
        baseFixturesAPI = 'http://api.football-data.org/v1/fixtures?timeFrame=p' + time;
      }

      var deferred = $q.defer();
      $http({
        headers: {
          'X-Auth-Token': 'e0d15924ce51452db3db2aff8b08ba26'
        },
        url: baseFixturesAPI,
        method: 'GET'
      }).then(function success(data) {
        deferred.resolve(data);
      }, function error(err) {
        deferred.reject(err);
      });
      return deferred.promise;
    };

    this.getFixtureByHref = function(fixtureHref) {
      var deferred = $q.defer();
      $http({
        headers: {
          'X-Auth-Token': 'e0d15924ce51452db3db2aff8b08ba26'
        },
        url: fixtureHref,
        method: 'GET'
      }).then(function success(data) {
        deferred.resolve(data);
      }, function error(err) {
        deferred.reject(err);
      });
      return deferred.promise;
    }

    this.getTeam = function(teamId) {
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

    this.getTeamByHref = function(href) {
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

    this.getTeams = function(leagueId) {
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

    this.getTable = function(leagueId) {
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
	
	this.getPlayerByHref = function(playerHref) {
		
		var deferred = $q.defer();
		$http({
		headers: {
			'X-Auth-Token': 'e0d15924ce51452db3db2aff8b08ba26'
		}, 
		url:playerHref, 
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
