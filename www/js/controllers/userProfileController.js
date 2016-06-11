comeDineApp.controller('userProfileController', ['userProfileService', '$scope','$state','$auth','bookingsService',
function(userProfileService, $scope, $state, $auth, bookingsService){

  $scope.tableExists = false;
  $scope.currentUser = $auth.user;
  $scope.myPendingBookings = [];
  $scope.myConfirmedBookings = [];
  $scope.bookings = [];

  $scope.showTable = function(){
    userProfileService.profile()
    .then(function(response){
      $scope.table = response.data[0][0];
      if(response.data[1] !== 0){
        $scope.tableExists = true;
      };
    });
  };

  $scope.showMeals = function(){
    userProfileService.profile()
    .then(function(response){
      $scope.meals = response.data[1];
    });
  };

  $scope.handleSignOutBtnClick = function() {
    $auth.signOut()
    .then(function(resp) {
      $state.go('home');
    })
    .catch(function(resp) {
      console.log("noooo")
    });
  };

  $scope.showBookings = function(){
    bookingsService.all()
    .then(function(response) {
      $scope.bookings = response.data;
    })
    .then(function(){
      $scope.filterBookings();
    });
  };

  $scope.filterBookings = function(){
    console.log($scope.bookings);
    var bookingsArrayLength = $scope.bookings.length
    for (var i = 0; i < bookingsArrayLength; i++){
      if($scope.bookings[i].user_id === $scope.currentUser.id && $scope.bookings[i].status === "unconfirmed")
          {$scope.myPendingBookings.push($scope.bookings[i])}
          else if($scope.bookings[i].user_id === $scope.currentUser.id && $scope.bookings[i].status === "confirmed")
          {$scope.myConfirmedBookings.push($scope.bookings[i])};
          };
      };
      
  $scope.showBookings();
  $scope.showTable();
  $scope.showMeals();

}]);
