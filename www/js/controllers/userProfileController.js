comeDineApp.controller('userProfileController', ['userProfileService', '$scope','$state',
function(userProfileService, $scope, $state){

  $scope.showTable = function(){
    userProfileService.profile()
      .then(function(response){
        $scope.table = response.data[0][0];
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

    $scope.showTable();
    $scope.showMeals();


}]);
