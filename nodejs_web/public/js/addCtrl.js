// Creates the addCtrl Module and Controller. Note that it depends on 'geolocation' and 'gservice' modules.
var addCtrl = angular.module('addCtrl', ['geolocation', 'gservice']);

addCtrl.controller('addCtrl', function($scope, $http, $rootScope, geolocation, gservice){

    // Initializes Variables
    // ----------------------------------------------------------------------------
    $scope.formData = {};
    var imageId;

    // Creates a new user based on the form fields
    $scope.addUser = function() {

      var vm =this;


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
          location: [$scope.formData.longitude, $scope.formData.latitude],
          image: $scope.formData.file
      };
      console.log("****User Data to be added",userData);
        // Saves the user data to the db
        $http.post('/users', userData)
            .success(function (data) {
            //  var jsonObj = JSON.parse(data);
              console.log('User Info Added',data[0].location);
                // Once complete, clear the form (except location)

                // Refresh the map with new data

              //  gservice.refresh($scope.formData.latitude, $scope.formData.longitude,data.location);
                  gservice.refresh('23.23','32.32',data[0].location);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };
});
