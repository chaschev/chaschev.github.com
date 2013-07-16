'use strict';

angular.module('ocramius.github.comApp', [])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller:  'MainCtrl'
            })
            .when('/repositories', {
                templateUrl: 'views/repositories.html',
                controller:  'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
