angular.module('firstModule')
.filter('mydate',mydate)


function mydate(){

    moment.locale('pt-BR');
    return function(value,attr){
  
     //return moment(value).format('L LTS');
     return moment(value).format(attr);
    
    }
}