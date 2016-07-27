function normalize() {
  // o this, sempre se refere ao contexto no call a função está
  return this.name.charAt(0).toUpperCase() + (this.name.slice(1).toLowerCase());
}

function greet() {
  var greeting = 'Hi, my name is "' + normalize.call(this) + '"';
  bsWorkshop.log(greeting);
}

// o contexto neste caso é o objeto window, que existe em todos os browsers
bsWorkshop.log(normalize());

// o contexto neste caso é também é o objeto window
greet();


var me = {
  name: 'jOnAtas'
};

// aqui conseguimos trocar o contexto da função para usar o objeto me
greet.call(me);


var you = {
  name: 'Somebody',
  greet: greet
};

// funciona da mesma forma que o exemplo anterior, a função chamada é a que está no contexto do objeto `you`
you.greet();


function multiply(n) {
  return bsWorkshop.log(this * n);
}


// É possível passar qualquer tipo de variável para ser o this (contexto) de uma função,
// além do call e apply que executam a função imediatamente
// temos o bind que retorna uma nova função com o this configurado com o primeiro parâmetro passado
// no exemplo abaixo, o this da nova função (multiply) será 2
var multiplyByTwo = multiply.bind(2);

// e quando executar a nova função criada, ela terá o this definido anteriormente para multiplicar 
// pelo argumento sendo passado agora
multiplyByTwo(3);


// retorna NaN pq está tentando executar `window * 3` já que em nenhum momento foi definido outro this para a função multiply diretamente
multiply(10);

// retorna 20 ao ser executado
multiply.call(2, 10);

// retorna 40 ao ser executado
multiply.apply(2, [20]);

