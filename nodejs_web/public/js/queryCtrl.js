// Creates the addCtrl Module and Controller. Note that it depends on 'geolocation' and 'gservice' modules.
var queryCtrl = angular.module('queryCtrl', ['geolocation', 'gservice']);
queryCtrl.controller('queryCtrl', function($scope, $http, $rootScope, geolocation, gservice,$base64){

    // Initializes Variables
    // ----------------------------------------------------------------------------
    $scope.formData = {};
    var coords = {};
    var lat = 0;
    var long = 0;
    gservice.refresh('0.0','0.0');

    $scope.uploadFile = function (files) {
      console.log("*** That",files);
        $scope.formData.file = files[0];
        // $scope.formData.file = $base64.encode(files[0]);
        console.log("*** File encoded",$scope.formData.file);
      };
    // Creates a new user based on the form fields
    $scope.findUser = function() {

        // Grabs all of the text box fields
        var userData = {
            file: $scope.formData.file,
        };

        Gets the user data to the db
        $http.post('http://localhost:5001/get_face_id', userData,
        {
                headers: { 'Content-Type': 'multipart/form-data'}
        }).success(function (data) {
            //  var jsonObj = JSON.parse(data);
              console.log('User Info Location',data);

                  //gservice.refresh('23.23','32.32',data[0].location);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };
});
