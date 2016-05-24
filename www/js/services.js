angular.module('starter.services', [])

.service('mealsService', ['$http', function($http) {
  this.all = function(){
      return $http.get('http://localhost:3000/');
    };
}]);
