var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.service('nameService', function() {
    
    var self = this;
    this.name = 'John Doe';
    
    this.namelength = function() {
      
        return self.name.length; 
        
    };
    
})

myApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope, $log, 'nameService') {
    
    $scope.name = 'Main';
    
    $log.log(nameService.name);
    $log.long(nameService.namelength());
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    $scope.num = $routeParams.num || 1;
    
}]);
