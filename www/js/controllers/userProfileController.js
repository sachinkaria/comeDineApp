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
      $scope.filterPendingBookings();
    });
  };

  $scope.filterPendingBookings = function(){
    console.log($scope.bookings);
    var arrayLength = $scope.bookings.length
    for (var i = 0; i < arrayLength; i++){
      if($scope.bookings[i].user_id === $scope.currentUser.id)
          {$scope.myPendingBookings.push($scope.bookings[i])};
          console.log($scope.myPendingBookings);
      };
    };

  // $scope.filterPendingBookings();
  $scope.showBookings();
  $scope.showTable();
  $scope.showMeals();

}]);
