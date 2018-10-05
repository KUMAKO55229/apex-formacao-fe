const app = require('./primeiroTest.js');
const expec = require('chai').expect;  

var user = {name:'Franck'}
xdescribe('Calculo de soma', () => {
    it('testando 2+2 for igual a 4', () => {
        expec(2 + 2).to.equal(4);

    })
    it ('testando 2+3 for igual a 5',()=>{
        expec(2+3).to.equal(5);
    
    })
    it ('testando string',()=>{
        expec(user).to.equal(user);
    
    })


    it ('testando string',()=>{
        expec('teste').to.equal('teste');
    
    })

    it ('Object',()=>{
        expec({name:'getulio'}).to.eql({name:'getulio'});
    
    })

   
    it ('Is undefined',()=>{
        expec().to.be.undefined;

    })
    it ('Null',()=>{
        expec(null).to.be.null;
    
    })


})


describe('Primeiro Test',()=>{
    it(' 2 + 2 = 4'),()=>{
        expec(app.soma(2+2)).equal(4);
    }

   

})


describe('Eemplo a postila',()=>{
    
    it(' is String'),()=>{
        expect('teste').to.be.a('string');
    }

       
    it(' Object include'),()=>{
        expect({name:'teste', email : 'ola'}).to.be.nclude({name:'teste'});
    }

})

