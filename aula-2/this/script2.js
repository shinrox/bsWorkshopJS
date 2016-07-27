var foo, bar, baz, qux, fooLog, who;

function logger(greeting) {
  bsWorkshop.log((greeting || '') + ' ' + (this.who || ''), this);
}

// ==========================================
bsWorkshop.divider('call() ou apply()');
foo = {
  who: 'Fooo',
  log: function fooLog() {
    // call ou apply executa a função na hora, alterando o this com o primeiro parâmetro recebido
    logger.call(this);
  }
};

foo.log();

// ==========================================
bsWorkshop.divider('bind()');
// também podemos usar o bind para altera o contexto de uma função, normalmente usamos para atribuir a uma variável (fora ou dentro de outro contexto)
// a diferença é que o bind, não executa a função ao ser chamado apenas cria uma referencia da mesma alterando o this com o objeto passado
fooLog = logger.bind(foo);
fooLog();


// ==========================================
bsWorkshop.divider('bind() errado');
baz = {
  who: 'Bazzz',
  // usar o bind dessa forma não funciona, pois no momento que for executado, o obeto baz ainda não foi criado
  // assim o bind receberá undefined como primeiro parâmetro
  // isso fará com que o this, seja o objeto window
  log: logger.bind(baz) // funcionaria se fosse outro objeto e não o próprio contexto onde a função está sendo inserida
};


baz.log('Howdy');


// ==========================================
bsWorkshop.divider('Referência direta inserida em novo contexto');
bar = {
  who: 'Barrr',
  // Para o caso do bind acima, basta referenciar a funçao inserindo ela no novo contexto
  log: logger
};

bar.log();


// ==========================================
bsWorkshop.divider('Exemplos');

// Usar apply e call permite alterar o this para qualquer outro contexto
// independente do momento que a função é chamada
bsWorkshop.divider('bar.log.apply(foo)');
bar.log.apply(foo);
bsWorkshop.divider('foo.log.apply(bar)');
foo.log.apply(bar);

// a diferença entre os dois, é o modo de passar os parâmetros para a função sendo chamada
bsWorkshop.divider('logger.call(foo, "Hello")');
// call é passado como argumentos separados
// logger.call(this, arg1, arg2, arg3);
logger.call(foo, 'Hello');

bsWorkshop.divider('logger.apply(foo, ["Hello"])');
// apply é passado como um array com todos os argumentos desejados
// logger.call(this, [arg1, arg2, arg3]);
logger.apply(bar, ['Hi']);


bsWorkshop.divider('Escopo global');
// variáveis globais são jogadas para o objeto window
// logo, this.who (em qualquer context indefindo, usará a variável jogado para window)
who = 'window';
logger('Howdy');

bsWorkshop.divider('Escopo isolado');
(function() {
  // variáveis declaradas no escopo de uma função não são jogados para o objeto window
  var who = 'iife';

  // por mais que pareça estranho, o this neste caso, continua sendo o objeto window
  // ainda será usado o contexto de fora desta função
  logger.call(this, 'Howdy');
})();

