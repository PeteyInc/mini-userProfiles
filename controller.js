angular.module('userProfiles').controller('MainController', function($scope, mainService){

    $scope.thisAppIsBroken = "This angular app is working";
    $scope.getUsers = mainService.getUsers;

})
