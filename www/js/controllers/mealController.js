comeDineApp.controller('mealController', ['mealService','$scope', '$stateParams','tableService','newBookingService',
function(mealService, $scope, $stateParams, tableService, newBookingService) {

$scope.booking = {};
$scope.bookingSubmitted = false;

  $scope.showMeal = function(table_id,id){
    mealService.find(table_id,id).then(function(response) {
      $scope.meal = response.data;
    });
  };

  $scope.showTable = function(table_id){
    tableService.find(table_id).then(function(response) {
      $scope.table = response.data;
    });
  };

  $scope.showTableReviews = function(table_id){
    tableService.findReviews(table_id).then(function(response){
      $scope.reviews = response.data;
      $scope.foodRating.rate =$scope.reviews[0].rating_food;
      $scope.hygieneRating.rate =$scope.reviews[0].rating_hygiene;
      $scope.atmosphereRating.rate =$scope.reviews[0].rating_atmosphere;

    });
  };

  $scope.createBooking = function(booking){
    $scope.booking.meal_id = $scope.meal.id;
    newBookingService.create($scope.booking).then(function(){
      $scope.bookingSubmitted = true;
    });
  };

  $scope.foodRating = {};
  $scope.foodRating.max = 5;
  $scope.foodRating.rate = 0;

  $scope.hygieneRating = {};
  $scope.hygieneRating.max = 5;
  $scope.hygieneRating.rate = 0;


  $scope.atmosphereRating = {};
  $scope.atmosphereRating.max = 5;
  $scope.atmosphereRating.rate = 0;



  $scope.showTable($stateParams.table_id);
  $scope.showTableReviews($stateParams.table_id);
  $scope.showMeal($stateParams.table_id,$stateParams.id);

}]);
