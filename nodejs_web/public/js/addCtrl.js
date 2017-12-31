// Creates the addCtrl Module and Controller. Note that it depends on 'geolocation' and 'gservice' modules.
var addCtrl = angular.module('addCtrl', ['geolocation', 'gservice']);

addCtrl.controller('addCtrl', function($scope, $http, $rootScope, geolocation, gservice,$base64){

    // Initializes Variables
    // ----------------------------------------------------------------------------
    $scope.formData = {};

    var from_data = new FormData();


    $scope.uploadFile = function (files) {
      console.log("*** That",files);
        $scope.formData.file = files[0];
         //$scope.formData.file = $base64.encode(files[0]);
        console.log("*** File encoded",$scope.formData.file);
      };

      // Function for refreshing the HTML5 verified location (used by refresh button)
    $scope.refreshHash = function(faceIdVal, passportHashVal){
            console.log("Faace id Val",passportHashVal);
            $scope.formData.faceId = faceIdVal;
            $scope.formData.passportHash = passportHashVal;
        };
    // Creates a new user based on the form fields
    $scope.addUser = function() {



      var userData = {
          gender: $scope.formData.gender,
          lastname: $scope.formData.lastname,
          firstname: $scope.formData.firstname,
          birthdate: $scope.formData.birthdate,
          country: $scope.formData.country,
          issuedate: $scope.formData.issuedate,
          expirydate: $scope.formData.expirydate,
          placeofissue: $scope.formData.placeofissue,
          image: $scope.formData.file,
          location: [$scope.formData.longitude, $scope.formData.latitude],
      };
      var passportHash = $base64.encode(userData);
      var faceId = 1;
      $scope.refreshHash(1,passportHash);
      console.log("****User Data to be added",userData);

        // Saves the user data to the db
        $http.post('/users', userData)
            .success(function (data) {
              console.log("Data Retrieved",data);
              gservice.refresh('0.0','0.0',data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };
});
