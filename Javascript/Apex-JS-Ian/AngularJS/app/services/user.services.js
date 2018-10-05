angular.module('firstModule')
.service('UserService',userService);

//$q pour prendre soin des requisition asynchrones 
function userService($http,$q){
    //4623860c6aa3d29f03208f95f89c67a0c077071a
    return {
        getUserData :getUserData
       
    }


    function getUserData(name){
        var defer = $q.defer();
        var request = {
            url:'https://api.github.com/users/'+name,
            method:'GET',
            headers : {
                'Authorization': "token 4623860c6aa3d29f03208f95f89c67a0c077071a"
            },
        }

/*.get('https://api.github.com/users/'+name)*/
        $http(request).then(
            function(response){
                M.toast({html: 'Usuario carregado com sucesso!',classes : 'rounded'});
                defer.resolve(response.data)
            },
            function(error){
                defer.reject(error);
                console.log(error);
                
                 M.toast({html: 'Usuario não encontrado!'+error.data, classes: 'rounded  red darken-4'});
            
                console.log('opps! encontramos um erro');
               
            }
        );
          

        return defer.promise;
    }
    
}