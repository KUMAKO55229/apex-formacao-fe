angular.module('firstModule')
.controller('LoginController', loginController);

function loginController($scope, $state){
    $scope.goProfile = function(){
        localStorage.setItem("name", $scope.name);
        localStorage.setItem("senha",$scope.senha);

        $state.go('home.profile',{name:0 , senha:0});
    }
}
