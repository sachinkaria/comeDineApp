angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('mealsController', ['$http', 'mealsService','$scope', function($http, mealsService, $scope) {
  $scope.index = function(){
    mealsService.all().then(function(response) {
      $scope.meals = response.data;
    });
  };
  $scope.index();
}])

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
