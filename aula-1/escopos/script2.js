bsWorkshop.divider('Exemplo 1');
// o Hoisting também afeta declaração de funções, antes de executar este código
// o javascript pegará todas as funções declaradas, e sempre utilizará a última encontrada
function foo() {
  function bar() {
    return 3;
  }

  return bar(); 

  function bar() {
    return 8;
  }
}

bsWorkshop.log(foo()); // irá logar 8 e não 3 como é esperado

// Neste exemplo, o que acontece, é que a função é atribuida a uma variável, ou seja
// primeiro temos a declaração da variável bar
// depois ela será entendida como uma função (a primeira definição)
// depois o return será dado, e a atribuição da nova função a variável bar nunca será chamada
function foo2() {
  function bar() {
    return 3;
  }

  return bar();

  var bar = function bar() {
    return 8;
  }
}

bsWorkshop.log(foo2()); // irá logar 3 e não 8 como no exemplo anterior


// É como se o código tivesse sido escrito da seguinte forma
function foo3() {
  var bar;
  function bar() {
    return 3;
  }

  return bar();

  // este pedaço do código não será executado devido ao return, então a nova função 
  // não será atribuida a variável, mantendo a primeira declaração dela
  bar = function bar() {
    return 8;
  }
}

bsWorkshop.log(foo3());