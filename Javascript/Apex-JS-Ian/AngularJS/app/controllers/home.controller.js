angular.module('firstModule')
    .controller('HomeController',['$scope', homeController]);

function homeController($scope){
    $scope.nome = 'Ian';
    $scope.sobrenome = 'Santos';
    $scope.arrayx = [1,2,3,4,5,6]
    $scope.onChange = onChange;
    
    function onChange(value) {
        console.log(value);
    }

};

