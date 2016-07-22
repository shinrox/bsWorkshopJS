bsWorkshop.divider('Exemplo 1');
var a = 1;
bsWorkshop.log(a);

// Blocos condicionais e de iteração NÃO criam escopos próprios como as funções fazem,
// o código abaixo irá afetar a variável `a` criada inicialmente
if (true) {
  var a = 2;
  bsWorkshop.log(a); // irá logar 2
}

bsWorkshop.log(a); // irá logar 2 pois a variável foi declarada novamente dentro do `if`

