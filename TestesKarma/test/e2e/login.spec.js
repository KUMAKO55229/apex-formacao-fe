var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect = chai.expect;

describe('Login', function() {

    it('invalid login', ()=>{
        browser.get('/');
        browser.waitForAngular();
        
        element(by.id('login')).sendKeys('franckkumako@gmail.com');      
        browser.sleep('1000');
        element(by.id('password')).sendKeys('123');
        browser.sleep('1000');
        element(by.id('btn-login')).click();

        browser.sleep('1000');
        browser.waitForAngular();
       
       
        expect(element(by.id('message')).getText()).to.eventually.equal('invalid login/password');
        
    })
})