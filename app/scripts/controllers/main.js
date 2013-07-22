'use strict';

angular.module('ocramius.github.comApp')
    .controller('MainCtrl', function ($scope, githubService) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.github = githubService;
        console.log(githubService);

        var repo = githubService.getRepo('Ocramius', 'ProxyManager');
        var user = githubService.getUser('Ocramius');

        var orgs = user.orgs(function (err, orgs) {
            console.log({orgs: orgs});
        });

        console.log(repo);
    });
