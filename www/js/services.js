angular.module('starter.services', [])

.service('mealsService', ['$http', function($http) {
  this.all = function(){
      return $http.get('http://localhost:3000/');
    };
}])

.service('mealService', ['$http', function($http) {
  this.find = function(table_id,id){
      return $http.get('http://localhost:3000/tables/' + table_id + '/meals/' + id);
    };
}]);
