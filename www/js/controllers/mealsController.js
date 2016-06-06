comeDineApp.controller('mealsController', ['$http', 'mealsService','$scope','$cordovaGeolocation', '$ionicLoading', '$ionicPlatform',
            function($http, mealsService, $scope, $cordovaGeolocation, $ionicLoading, $ionicPlatform) {

  $scope.index = function(){
    mealsService.all().then(function(response) {
      $scope.meals = response.data;
    });
  };

  $ionicPlatform.ready(function() {

        var posOptions = {
            enableHighAccuracy: true,
            timeout: 20000,
            maximumAge: 0
        };

        $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
            var lat  = position.coords.latitude;
            var long = position.coords.longitude;

            var myLatlng = new google.maps.LatLng(lat, long);
            $scope.myLatlng = myLatlng

            var mapOptions = {
                center: myLatlng,
                zoom: 12,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };



            var map = new google.maps.Map(document.getElementById("map"), mapOptions);

            $scope.map = map;
            $ionicLoading.hide();

            var myPositionMarker = new google.maps.Marker({
              position: $scope.myLatlng,
              map: $scope.map,
              title: "You are here!"
            }, function(err) {
                $ionicLoading.hide();
                console.log(err);
            })

        }, function(err) {
            $ionicLoading.hide();
            console.log(err);
        });
    });


  $scope.index();

}]);
