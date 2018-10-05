angular.module('firstModule')
    .config(['$stateProvider','$urlRouterProvider',configuration]);

function configuration($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/sweetHome')

    $stateProvider
        .state( {
            name: 'home',
            abstract: false,
        
            url: '/sweetHome',
            templateUrl: './app/views/home.view.html',
            controller: 'HomeController'
        })
        .state( {
            name: 'home.profile',
            resolve : ()=>{
                console.log('resolveu a rota')
            },

            url: '/profile',
            templateUrl: './app/views/profile.view.html',
            controller: 'ProfileController'
        })
        .state({
            name:'home.teste',
            url:'/teste',
            template:'<h1>Teste olá</h1>'

        })
        .state({
            name:'login',
            url:'/login',
            templateUrl : './app/views/login.view.html',
            controller: 'LoginController',

        });
       

};