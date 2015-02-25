
    var myApp = angular.module('myApp', ['ngRoute', 'firebase']);
myApp.controller('mainCtrl', function($scope, ItemsService, ItemsServiceToRead, ItemsServiceRead) {
    $scope.categories = [
        {"id": 0, "url": "#home", "name": "Home"},
        {"id": 1, "url": "#toread", "name": "To read - wishlist"},
        {"id": 1, "url": "#read", "name": "Read"}
    ];

    $scope.placeHolderTitle = "Enter book's title...";
    $scope.placeHolderUrl = "Enter book's author...";
    
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

myApp.controller('openTab', ['$scope', '$window',
    function($scope, $window) {
        $scope.openTab = function(id, bookmarkUrl){
            $window.open(bookmarkUrl);
        };
    }
]);
