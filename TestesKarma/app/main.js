angular.module('app',[])
.controller('MainController', mainCtroller)


function mainCtroller($scope, UserService){
    $scope.names = UserService.names;
    $scope.login;
    $scope.password;
    $scope.entrar = function(){
         if($scope.login == 'franckkumako@gmail.com'&& $scope.password =='123'){
             $scope.message ='sucess';

         }
         else {
             $scope.message = 'invalid login/password';
         }
    }
}