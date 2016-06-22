app.controller('MainCtrl', ['$scope', '$window', 'contact', function($scope, $window, contact) {


 $scope.section = 1;

$scope.whichSection = function(section, current) {
}

$scope.sendEmail = function (){
    $scope.contactMessage = {
        name: $scope.name,
        email: $scope.email,
        number: $scope.number,
        subject: $scope.subject,
        message: $scope.message
    };

    contact.sendInfo ($scope.contactMessage);

    $scope.name ="";
    $scope.email="";
    $scope.number="";
    $scope.subject="";
    $scope.message="";

    console.log($scope.contactMessage);
}

}]);
