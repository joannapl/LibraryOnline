myApp.controller('toReadController', function($scope, ItemsServiceBS){
    $scope.category = "toread";
    $scope.bookmarks = ItemsServiceBS.getItems();
    
    $scope.cancelEditing();
    $scope.cancelCreating();
  
    $scope.addItem = function(title, url, id) {
        ItemsServiceBS.addItem({
            title: title,
            url: url,
            category: $scope.category
        }, "toread");
    };
    
    $scope.removeItem = function (id) {
        ItemsServiceBS.removeItem(id);
    };
    
    $scope.updateItem = function() {
        $scope.bookmarks[$scope.itemId].title = $scope.bookmarkTitleEdit;
        $scope.bookmarks[$scope.itemId].url = $scope.bookmarkUrlEdit;
        ItemsServiceBS.upadeItem($scope.itemId);
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