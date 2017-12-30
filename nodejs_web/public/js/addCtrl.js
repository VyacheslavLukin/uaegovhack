// Creates the addCtrl Module and Controller. Note that it depends on 'geolocation' and 'gservice' modules.
var addCtrl = angular.module('addCtrl', ['geolocation', 'gservice']);

addCtrl.controller('addCtrl', function($scope, $http, $rootScope, geolocation, gservice,$base64){

    // Initializes Variables
    // ----------------------------------------------------------------------------
    $scope.formData = {};

    var from_data = new FormData();


    $scope.uploadFile = function (files) {
      console.log("*** That",files);
        $scope.formData.file = $base64.encode(files[0]);
        console.log("*** File encoded",$scope.formData.file);
      };

    // Creates a new user based on the form fields
    $scope.addUser = function() {



  //  var newImg = fs.readFileSync($scope.formData.image);
      // encode the file as a base64 string.
  //  var encImg = newImg.toString('base64');
      // Grabs all of the text box fields
      var userData = {
          username: $scope.formData.username,
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
      console.log("****User Data to be added",userData);

        // Saves the user data to the db
        $http.post('/users', userData)
            .success(function (data) {
              gservice.refresh('23.23','32.32',data.location);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };
});
