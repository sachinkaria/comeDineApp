comeDineApp.controller('mealController', ['mealService','$scope', '$stateParams','tableService','newBookingService',
function(mealService, $scope, $stateParams, tableService, newBookingService) {

$scope.booking = {};
$scope.bookingSubmitted = false;

  $scope.showmeal = function(table_id,id){
    mealService.find(table_id,id).then(function(response) {
      $scope.meal = response.data;
    });
  };

  $scope.showtable = function(table_id){
    tableService.find(table_id).then(function(response) {
      $scope.table = response.data;
    });
  };

  $scope.createBooking = function(booking){
    $scope.booking.meal_id = $scope.meal.id;
    newBookingService.create($scope.booking).then(function(){
      $scope.bookingSubmitted = true;
    });
  };

  $scope.showmeal($stateParams.table_id,$stateParams.id);
  $scope.showtable($stateParams.table_id);

}]);
