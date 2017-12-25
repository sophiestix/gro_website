require('angular');
require('angular-ui-router');
require('angular-aria');
require('angular-animate');
require('angular-material');
require('normalize-css');
require('./components/home/home.js');

var app = angular.module('myApp', ['ui.router', 'ngMaterial', 'myApp.home']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
    .state('home', {
        url: "/",
        views: {
            templateUrl: "app/components/home/home.html"
        },
        // "header@home": {
        //     templateUrl: "app/shared/header/header.html"
        // }
    });
});
