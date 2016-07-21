bsWorkshop.divider('Exemplo 1');

var a = 1;

function foo() {
  bsWorkshop.log(a);
  var a = 2;
  bsWorkshop.log(a);
}

foo();

bsWorkshop.log(a);

bsWorkshop.divider('Exemplo 2');

var b = 1;

function bar() {
  bsWorkshop.log(b);
  b = 2;
  bsWorkshop.log(b);
}

bar();

bsWorkshop.log(b);
