(function() {
  'use strict';
  var BS, hasProp = {}.hasOwnProperty;
  window.BS = window.BS || {};
  BS = window.BS;

  BS.getArg = function(argName) {
    var instance = BS.instances[argName];
    if (typeof instance === 'undefined') {
      throw new Error(argName + ': Not found!');
    }

    return instance;
  };

  BS.injector = function(fn) {
    var args = [], i = 0, len, argument;
    fn.args = fn.args || [];
    len = fn.args.length;

    for (i; i < len; i++) {
      argument = fn.args[i];
      args.push(BS.getArg(argument));
    }

    return args;
  };

  BS.register = function(name, fn) {
    BS.instances[name] = fn;
  };

})();