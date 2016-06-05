comeDineApp.controller('userProfileController', ['userProfileService', '$scope','$state',
function(userProfileService, $scope, $state){

  $scope.show = function(){
    userProfileService.profile()
      .then(function(response){
        $scope.table = response.data[0];
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

    $scope.show();

}]);
