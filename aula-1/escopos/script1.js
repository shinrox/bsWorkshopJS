bsWorkshop.divider('Exemplo 1');

var a = 1;

function foo() {
  bsWorkshop.log(a);
  var a = 2;
  bsWorkshop.log(a);
}

// Hoisting
// Chamar a função acima irá logar primeiro undefined, e depois 2;
// por que no final, é como se a função tivesse sido escrita da seguinte forma

function foo2() {
  var a;

  bsWorkshop.log(a); // neste momente a está indefinido pois ela foi declarada novamente (sobrescrevendo a variável global do escopo destes arquivo)
  a = 2; // atribuido o valor 2
  bsWorkshop.log(a);
}

foo();
foo2();
bsWorkshop.log(a); // irá logar 1, pois a função `foo` e `foo2` usou `var` internamente, então não afeta a variável com mesmo nome de fora do escopo dela;

bsWorkshop.divider('Exemplo 2');

var b = 1;

// Neste exemplo, por não usar var dentro da função, o valor da variável `b` que está fora do escopo dela é alterado;
function bar() {
  bsWorkshop.log(b); // log 1
  b = 2;
  bsWorkshop.log(b); // log 2
}

bar();

bsWorkshop.log(b); // log 2 pois a função `bar` alterou o valor
