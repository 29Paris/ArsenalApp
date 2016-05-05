(function() {
	
  'ues strict'
  
  angular
  .module('arsenalApp')
  .service('imageCheckService', imageCheck);
  
  /** @ngInject */
  function imageCheck($q){
	
      var vm = this;
	
      vm.isImage = function(src) {
		
          var deferred = $q.defer();
          var image = new Image();
          image.onerror = function() {
			
              deferred.resolve(false);
          };
          image.onload = function() {
			
              deferred.resolve(true);
          };
          image.src = src;
		
          return deferred.promise;
      }
  }
})()