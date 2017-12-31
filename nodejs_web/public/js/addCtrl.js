// Creates the addCtrl Module and Controller. Note that it depends on 'geolocation' and 'gservice' modules.
var addCtrl = angular.module('addCtrl', ['geolocation', 'gservice']);

addCtrl.controller('addCtrl', function($scope, $http, $rootScope, geolocation, gservice,$base64){

    // Initializes Variables
    // ----------------------------------------------------------------------------
    $scope.formData = {};
    $scope.showAnalyse = false;

    $scope.openPopup = function(Value) {
            if(Value=='Text'){
                $scope.modalInstance = $modal.open({
                    templateUrl: 'partials/analysis.html',
                    scope: $scope
                });
            }
       }


    $scope.uploadFile = function (files) {
      console.log("*** That",files);
        $scope.formData.file = files[0];
        var userData = {
            file: $scope.formData.file,
        };
         //$scope.formData.file = $base64.encode(files[0]);
         console.log("***********Call Get Face ID  API from CV**********");
         $http.post('http://localhost:5001/get_face_id', userData,
         {
                 headers: { 'Content-Type': 'multipart/form-data'}
         }).success(function (data) {
             //  var jsonObj = JSON.parse(data);
               console.log('User Info Face ID',data);
               $scope.formData.faceId = data.faceId;
             })
             .error(function (data) {
                 console.log('FaceID: 1');
                 $scope.formData.faceId = 'A38cfgdjdABPHmqa';
             });
      };

      // Function for refreshing the HTML5 verified location (used by refresh button)
    $scope.refreshHash = function(passportHashVal){
            console.log("Hash  Val",passportHashVal);
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
      //TODO Remove hardcoding
      passportHash = '0xlbx02acp4ufxoxu0qtvaoo2oxoofvx61c46l86m8';
      $scope.refreshHash(passportHash);

      var formData = {
          passportHash: $scope.formData.passportHash
      };
//      console.log("****User Data to be added",userData);
      console.log("***********Call Blcokchain User API**********");

        // Saves the user data to the db
        $http.post('/users', formData)
            .success(function (data) {
              console.log("Data Retrieved",data);
              gservice.refresh('0.0','0.0',data);
              $scope.showAnalyse = true;
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };
    // Creates a new user based on the form fields
    $scope.analyseUser = function() {
      $scope.formData.analysisText = "";
      var userData = {
          user: $scope.formData.passportHash
      };
      console.log("***********Call Analyse User API**********");
        // Saves the user data to the db
        $http.post('/analyseUser', userData)
            .success(function (data) {
              var response1 = JSON.parse(data);
              console.log("*********** Data Analysed ********* ");
              $scope.formData.analysisText = "Attention! The user's Probability of being wrong is: "+response1.probability;
            })
            .error(function (data) {
                console.log('Data Analysis Error: ' + data);
            });
    };
});
