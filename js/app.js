
    var myApp = angular.module('myApp', ['ngRoute', 'firebase']);
myApp.controller('mainCtrl', function($scope, ItemsService, ItemsServiceToRead, ItemsServiceRead, ItemsServiceFavourite) {
    $scope.categories = [
        {"id": 0, "url": "#home", "name": "Home"},
        {"id": 1, "url": "#toread", "name": "To read - wishlist"},
        {"id": 2, "url": "#read", "name": "Read"},
        {"id": 3, "url": "#favourite", "name": "Favourite book"}
    ];

    $scope.placeHolderTitle = "Enter title...";
    $scope.placeHolderUrl = "Enter author...";
    
    $scope.isUpdated = false;
    $scope.itemId = null;
    
    
    $scope.hideEdit = true;
    $scope.hideCreate = true;
    
    $scope.showEditing = function() {
        $scope.hideEdit = false;
        $scope.hideCreate = true;
    };
    
    $scope.showCreating = function() {
        $scope.hideEdit = true;
        $scope.hideCreate = false;
    };
    
    $scope.cancelEditing = function() {
        $scope.hideEdit = true;
        $scope.hideCreate = true;
    };
    
    $scope.cancelCreating = function() {
        $scope.hideEdit = true;
        $scope.hideCreate = true;
    };
});

