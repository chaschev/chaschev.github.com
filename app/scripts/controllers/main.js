'use strict';

angular.module('ocramius.github.comApp')
    .controller('MainCtrl', function ($scope, githubService) {
        $scope.awesomeThings = githubService.awesomeThings;
        $scope.repositories = githubService.repositories;
    });
