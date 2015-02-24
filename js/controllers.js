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

myApp.controller('homeController', function($scope, ItemsService){

});