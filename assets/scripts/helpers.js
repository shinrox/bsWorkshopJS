(function() {
  window.bsWorkshop = {
    log: logger,
    divider: divider,
    useLogDivider: false
  };

  window.onload = function() {
    var h2 = document.createElement('h2');
    h2.innerText = document.title;
    document.body.insertBefore(h2, document.body.firstChild);
  };

  function divider(title) {
    var p = document.createElement('p');
    p.innerHTML = '====================' + (title ? ' ' + title + ' ' : '') + '====================';

    appendToBody(p);
  }

  function logger() {
    if(bsWorkshop.useLogDivider) {
      divider('Log');
    }

    var caller = getCaller(arguments);
    appendHeader('Chamado por ' + caller); 
    appendToBody(createElements(Array.prototype.slice.call(arguments, 0)));

  }

  function getCaller(args) {
    var name = args.callee.caller ? args.callee.caller.name : 'Função anônima';

    if (args.callee.caller) {
      name += ' > ' + getCaller(args.callee.caller.arguments);
    }

    return name;
  }

  function appendToBody(el) {
    document.body.appendChild(el);
  }

  function appendHeader(text) {
    var header = document.createElement('p');
    header.innerHTML = text;
    appendToBody(header);
  }

  function createElements(list) {
    var i = 0, len = list.length, li, ul = document.createElement('ul'), item;

    for (i; i < len; i++) {
      item = list[i];
      li = document.createElement('li');
      li.appendChild(createElement(list[i]));
      ul.appendChild(li);
    }

    return ul;
  }

  function createElement(item) {
    var p = document.createElement('p');
    p.innerHTML = ['Tipo', getType(item), 'valor', getValor(item)].join(' - ');

    return p;
  }

  function getType(item) {
    return (item instanceof Array) ? 'array' : (item instanceof RegExp)  ? 'RegExp' : (item instanceof Error)  ? 'Error' : typeof item;
  }

  function getValor(item) {
    var getters = {
      _simple: getSimpleValue,
      _object: getObjectValue,
      _array: getArraytValue,
      _function: getFunctionValue
    }, type = getType(item), getter;

    getter = getters['_' + type] || getters._simple;

    return getter(item);
  }

  function getObjectValue(item) {
    return JSON.stringify(item);
  }

  function getArraytValue(item) {
    return [JSON.stringify(item), 'Tamanho:', item.length].join(' ');
  }

  function getSimpleValue(item) {
    return item;
  }

  function getFunctionValue(item) {
    return [item.toString(), (item.name ? 'Função nomeada como ' + item.name : 'Função anônima')].join(' - ');
  }

})();