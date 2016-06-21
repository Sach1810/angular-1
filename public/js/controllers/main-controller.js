app.controller('MainCtrl', ['$scope', '$window', 'contact', function($scope, $window, contact) {

 $scope.section = 1;

$scope.whichSection = function(section, current) {
 $scope.section = section;
 console.log($scope.section);
 console.log(current);
}

}]);
