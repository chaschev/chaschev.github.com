'use strict';
angular.module('ocramius.github.comApp')
    .factory('githubService', function(){
        //return require('github');

        return {
           awesomeThings : [
               'HTML5 Boilerplate',
               'AngularJS',
               'Karma'
           ],

            repositories : [
                {name: "OcraServiceManager", stars: 1234, forks: 12},
                {name: "OcraDiCompiler", stars: 4567, forks: 34},
                {name: "ProxyManager", stars: 8900, forks: 56}
            ]
        };
    });