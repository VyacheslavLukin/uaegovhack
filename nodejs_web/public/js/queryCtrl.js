// Creates the addCtrl Module and Controller. Note that it depends on 'geolocation' and 'gservice' modules.
var queryCtrl = angular.module('queryCtrl', ['geolocation', 'gservice']);
queryCtrl.controller('queryCtrl', function($scope, $http, $rootScope, geolocation, gservice){

    // Initializes Variables
    // ----------------------------------------------------------------------------
    $scope.formData = {};
    var coords = {};
    var lat = 0;
    var long = 0;
    gservice.refresh('0.0','0.0');

    // Creates a new user based on the form fields
    $scope.findUser = function() {

        // Grabs all of the text box fields
        var userData = {
            username: $scope.formData.username,
        };

        // Saves the user data to the db
        $http.post('/userInfo', userData)
            .success(function (data) {
            //  var jsonObj = JSON.parse(data);
              console.log('User Info Location',data[0].location);
                // Once complete, clear the form (except location)
                $scope.formData.username = "";
                // Refresh the map with new data

              //  gservice.refresh($scope.formData.latitude, $scope.formData.longitude,data.location);
                  gservice.refresh('23.23','32.32',data[0].location);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };
});
