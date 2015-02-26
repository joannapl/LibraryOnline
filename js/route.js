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
        
        .when( '/favourite', {
            templateUrl: 'templates/favourite.html',
            controller: 'favouriteController'
        })
        
        .otherwise({
            redirectTo: '/home'
    });
});