comeDineApp.controller('tablesController', ['$http', 'tablesService','$scope','$cordovaGeolocation', '$ionicLoading', '$ionicPlatform',
function($http, tablesService, $scope, $cordovaGeolocation, $ionicLoading, $ionicPlatform) {

  $scope.tableAddresses = [];
  $scope.index = function(){
    tablesService.all().then(function(response) {
      $scope.tables = response.data;
      $scope._indexAddresses();
    });
  };

  $scope._indexAddresses = function() {
    $scope.tables.forEach(function(table){
      $scope.tableAddresses.push(table.house_number + ", " + table.street + ", " + table.city + ", " + table.postcode);
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
        zoom: 11,
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };



      var map = new google.maps.Map(document.getElementById("map"), mapOptions);

      $scope.map = map;
      $ionicLoading.hide();

      var pinColor = "00C466";
      var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
      new google.maps.Size(21, 34),
      new google.maps.Point(0,0),
      new google.maps.Point(10, 34));

      var myPositionMarker = new google.maps.Marker({
        position: $scope.myLatlng,
        map: $scope.map,
        title: "You are here!",
        icon: pinImage
      }, function(err) {
        $ionicLoading.hide();
        console.log(err);
      });


      var geocoder = new google.maps.Geocoder();
      for (var x = 0; x < $scope.tableAddresses.length; x++) {
        geocoder.geocode({address:$scope.tableAddresses[x]}, function (results,status) {
          if (status == google.maps.GeocoderStatus.OK) {
            var location = results[0].geometry.location;
            var latlng = new google.maps.LatLng(location.lat(), location.lng());
            new google.maps.Marker({
              position: latlng,
              map: $scope.map
            });
          };
        });
      };

    }, function(err) {
      $ionicLoading.hide();
      console.log(err);
    });
  });

  $scope.index();

}]);
