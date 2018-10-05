angular.module('firstModule')
.controller('MainController',mainController);

function mainController($scope , UserServices){
    $scope.users = UserServices.getUsers();
    $scope.nome ='Franck kumako';
    $scope.title = 'Meu primeiro app Angular';

 $scope.onChange = onChange;

 function onChange(value){
     console.log(value);
 }
}

