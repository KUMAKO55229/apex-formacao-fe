angular.module('app')
.service('UserService', userService)



function userService(){
    this.names =['Jão', 'Pedro', 'Paulo', 'Maria','franck', 'ana']
}