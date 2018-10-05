module.exports = function (config) {
  config.set({
    // caminho base do projeto.
    basePath: '',
    // frameworks a serem utilizados nos testes
    // frameworks disponíveis: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['chai', 'mocha'],
    // lista de arquivos / padrão de arquivos a ser carregado no browser
    files: [
      'node_modules/angular/angular.js',
      'node_modules/angular-mocks/angular-mocks.js',

     

      /*aqui são colocadas os arquivos do projeto de acordo com
      suas dependências*/
     // 'app/js/main.js',

     // 'app/js/**/*.js',
     'app/main.js',
     'app/users.service.js',
     'app/exercicios.services.js',
     
      'test/unit-test/**/*.spec.js'
    ],
    // lista de arquivos a ser excluida
    exclude: [
    ],
    // préprocessadores a serem utilizados
    // pre processadores disponíveis: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },
    // Tipo de relatório a ser utilizado
    // valores possíveis: 'dots', 'progress'
    //relatórios disponíveis: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],
    // porta do servidor web utilizado pelo Karma
    port: 9876,
    // habilita / desabilita texto colorido na saida dos relatórios e logs
    colors: true,
    // níveis de log
    // valores possíveis: config.LOG_DISABLE || config.LOG_ERROR ||
    //config.LOG_WARN ||config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    // habilita / desabilita watching para a alteração dos arquivos e execução de testes
    autoWatch: false,
    // indicação de qual browser deve ser utilizado
    // https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],
    ///se true então roda os testes uma vez e finaliza
    singleRun: true,
    //indica se pode rodar em vários browsers ao mesmo tempo
    concurrency: Infinity
    })
  }



  /* 
               
  
  */