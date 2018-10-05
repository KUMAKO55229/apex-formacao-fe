angular.module('firstModule',['ui.router', 'app.components', 'ngAnimate'])
/*run(function($rootScope){
    $rootScope.$on('$stateChangeStart', function(e,toState,toParams)
    {  M.AutoInit();
         console.log('start change route');
         
         //e.preventDefault()
        });
    
});

*/
.run(function($transitions,$state){
    
    $transitions.onStart({to:'home.**'},function(evt){
    let name = localStorage.getItem('name');
    let senha = localStorage.getItem('senha');
    if(name!=='franck' && senha !=='123456'){
        $state.go('login');
        M.toast({html:'<h1>Login/senha Invalido </h1>',class: 'rounded darken-1'});
    }
    console.log('Entrou na home');
    });
    M.AutoInit();
         console.log('started app');
});



