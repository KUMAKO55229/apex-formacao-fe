angular.module('app')
.service('ExerciciosService', exerciciosService)

function exerciciosService(){
  this.exer1 =   function (num1, num2){
        let soma = num1 + num2;

       return soma > 100 && soma;
    };

    
 this.exer2 = function (vetor){
 
 
     return (vetor.sort((a,b) =>{

         return  a >b 
     }));
  
    }
 
   
}