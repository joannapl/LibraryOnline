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
        
        .otherwise({
            redirectTo: '/home'
    });
});