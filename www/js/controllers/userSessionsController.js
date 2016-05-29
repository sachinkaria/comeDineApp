comeDineApp.controller('userSessionsController', ['$scope','$auth', function ($scope, $auth){
  $scope.handleLoginBtnClick = function() {
   $auth.submitLogin($scope.loginForm)
     .then(function(resp) {
       console.log('yays');
     })
     .catch(function(resp) {
      console.log('nope.');
     });
  };
}]);
