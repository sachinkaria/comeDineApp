comeDineApp.service('bookingsService', ['$http', function($http) {
  this.all = function(){
      return $http.get('http://localhost:3000/bookings');
    };
}]);
