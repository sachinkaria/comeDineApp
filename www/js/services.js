angular.module('starter.services', [])

.service('Chats', ['$http', function($http) {
  this.all = function(){
      return $http.get('http://localhost:3000/');
    };
}]);
