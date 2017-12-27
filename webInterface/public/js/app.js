// Declares the initial angular module "meanMapApp". Module grabs other controllers and services.
var app = angular.module('innosoftApp', ['addCtrl', 'geolocation', 'gservice', 'ngRoute'])

    // Configures Angular routing -- showing the relevant view and controller when needed.
    .config(function($routeProvider){

        $routeProvider.when('/find', {
            controller: 'addCtrl',
            templateUrl: 'partials/addForm.html',

        }).otherwise({redirectTo:'/find'})
    });
