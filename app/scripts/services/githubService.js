'use strict';
angular.module('ocramius.github.comApp')
    .factory('githubService', function(){
        //return require('github');

        return new Github({
            auth: 'none'
        });
    });