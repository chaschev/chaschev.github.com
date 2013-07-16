'use strict';

angular.module('ocramius.github.comApp')
    .controller('MainCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.repositories = [
            {name: "OcraServiceManager", stars: 1234, forks: 12},
            {name: "OcraDiCompiler", stars: 4567, forks: 34},
            {name: "ProxyManager", stars: 8900, forks: 56}
        ];
    });
