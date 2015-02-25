myApp.config(function($routeProvider) {
    $routeProvider
        .when( '/home', {
            templateUrl: 'templates/home.html',
            controller: 'homeController'
        })
        .when( '/toread', {
            templateUrl: 'templates/toread.html',
            controller: 'toReadController'
        })
        
        .when( '/read', {
            templateUrl: 'templates/read.html',
            controller: 'readController'
        })
        
        .otherwise({
            redirectTo: '/home'
    });
});