comeDineApp.service('newBookingService',['$http', function($http){
  var self = this;

  self.create = function(booking) {
    return $http.post('http://localhost:3000/bookings.json', booking).success(function(data){
    });
  };

}]);
