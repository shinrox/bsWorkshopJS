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

you.greet();