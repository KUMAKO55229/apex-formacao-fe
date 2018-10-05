exports.config = {
    //url do servidor do selênium, responsável por executar os testes no browser
    seleniumAddress: "http://127.0.0.1:4444/wd/hub",
    seleniumPort: null,
    seleniumArgs: [],
    //framework utilizado para a execução dos testes
    framework: 'mocha',
    //arquivos de especificações de teste a serem executados
    specs: [
        'test/e2e/**/*.spec.js'
    ],
    capabilities: {
        //browser onde deve ser executado os testes
        'browserName': 'chrome'
    },
    //url da aplicação
    baseUrl: 'http://localhost:5500',
    //configurações para a ferramenta mochajs
    mochaOpts: {
        reporter: "spec",
        slow: 3000,
        timeout: 10000
    }
};