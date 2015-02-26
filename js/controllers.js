myApp.controller('homeController', function($scope, ItemsService){

});

myApp.controller('toReadController', function($scope, ItemsServiceToRead){
    $scope.category = "toread";
    $scope.bookmarks = ItemsServiceToRead.getItems();
    
    $scope.cancelEditing();
    $scope.cancelCreating();
  
    $scope.addItem = function(title, url, id) {
       ItemsServiceToRead.addItem({
            title: title,
            url: url,
            category: $scope.category
        }, "toread");
    };
    
    $scope.removeItem = function (id) {
        ItemsServiceToRead.removeItem(id);
    };
    
    $scope.updateItem = function() {
        $scope.bookmarks[$scope.itemId].title = $scope.bookmarkTitleEdit;
        $scope.bookmarks[$scope.itemId].url = $scope.bookmarkUrlEdit;
        ItemsServiceToRead.upadeItem($scope.itemId);
    };
    

    $scope.resetForm = function () {
        $scope.bookmarkTitleAdd = "";
        $scope.bookmarkUrlAdd = "";
    };
    
    $scope.editForm = function (id, ti, ul) {
        $scope.itemId = id;
        $scope.bookmarkTitleEdit = ti;
        $scope.bookmarkUrlEdit = ul; 
    };
});

myApp.controller('readController', function($scope, ItemsServiceRead){
    $scope.category = "read";
    $scope.bookmarks = ItemsServiceRead.getItems();
    
    $scope.cancelEditing();
    $scope.cancelCreating();
  
    $scope.addItem = function(title, url, id) {
       ItemsServiceRead.addItem({
            title: title,
            url: url,
            category: $scope.category
        }, "read");
    };
    
    $scope.removeItem = function (id) {
        ItemsServiceRead.removeItem(id);
    };
    
    $scope.updateItem = function() {
        $scope.bookmarks[$scope.itemId].title = $scope.bookmarkTitleEdit;
        $scope.bookmarks[$scope.itemId].url = $scope.bookmarkUrlEdit;
        ItemsServiceRead.upadeItem($scope.itemId);
    };
    

    $scope.resetForm = function () {
        $scope.bookmarkTitleAdd = "";
        $scope.bookmarkUrlAdd = "";
    };
    
    $scope.editForm = function (id, ti, ul) {
        $scope.itemId = id;
        $scope.bookmarkTitleEdit = ti;
        $scope.bookmarkUrlEdit = ul; 
    };
});


myApp.controller('favouriteController', function($scope, ItemsServiceFavourite){
    $scope.category = "favourite";
    $scope.bookmarks = ItemsServiceFavourite.getItems();
    
    $scope.cancelEditing();
    $scope.cancelCreating();
  
    $scope.addItem = function(title, url, id) {
       ItemsServiceFavourite.addItem({
            title: title,
            url: url,
            category: $scope.category
        }, "favourite");
    };
    
    $scope.removeItem = function (id) {
       ItemsServiceFavourite.removeItem(id);
    };
    
    $scope.updateItem = function() {
        $scope.bookmarks[$scope.itemId].title = $scope.bookmarkTitleEdit;
        $scope.bookmarks[$scope.itemId].url = $scope.bookmarkUrlEdit;
        ItemsServiceFavourite.upadeItem($scope.itemId);
    };
    

    $scope.resetForm = function () {
        $scope.bookmarkTitleAdd = "";
        $scope.bookmarkUrlAdd = "";
    };
    
    $scope.editForm = function (id, ti, ul) {
        $scope.itemId = id;
        $scope.bookmarkTitleEdit = ti;
        $scope.bookmarkUrlEdit = ul; 
    };
});