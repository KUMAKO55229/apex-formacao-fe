describe('Teste Service',()=>{
    beforeEach(module('app'));
    let service = null;
    let exercicio1 = null;

    beforeEach(inject((UserService,ExerciciosService )=>{
        service = UserService;
        exercicios=  ExerciciosService;
    }))

 



it ('Get Users', ()=>{
     expect(service.names).to.have.lengthOf(6);
});


it('soma a num1 e num2', ()=>{
    expect(exercicios.exer1(15, 90)).to.equal(105);
});
    
it('sort no vetor',()=>{
    
        expect(exercicios.exer2([20,2,4,5,2,1,7,8,3,9])).to.ordered.members([ 1, 2, 2, 3, 4, 5, 7, 8, 9, 20 ]);
  

});



});