// route-config.js
angular
  .module('myApp')
  .config(config);

config.$inject = ['$routeProvider'];

function config($routeProvider) {
  $routeProvider       
    .otherwise({
      templateUrl : 'partials/error/404.partial.html',
      controller: 'mainController',
      controllerAs: 'vm'
    });

  }