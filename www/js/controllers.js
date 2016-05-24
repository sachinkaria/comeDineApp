angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', ['$http', 'Chats','$scope', function($http, Chats, $scope) {
  $scope.index = function(){
    Chats.all().then(function(response) {
      $scope.chats = response.data;
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
