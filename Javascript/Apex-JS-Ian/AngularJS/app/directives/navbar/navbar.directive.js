angular.module('app.components')
    .directive('appNav', [appNav])

function appNav() {

    return {
        restrict: 'E', // E-> Element A-> Atributo C-> Class  M-> Comment // Eh possivel mesclar elas
        "scope": { 
            title:'@', // @ texto + Pega texto da variavel
            meuNome: '=', // '=' =>conteudo da variavel 
            meuSobrenome: '=',
            meuArrayx: '=' // 
        },
        templateUrl: './app/directives/navbar/navbar.directive.html',
        link: link,
    }

    function link(scope, element, attrs) {
        console.log(scope);
        console.log(element);
        console.log(attrs);

    }
}


