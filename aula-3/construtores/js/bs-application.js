(function() {
  'use strict';

  var BS, hasProp = {}.hasOwnProperty;
  window.BS = window.BS || {};
  BS = window.BS;
  BS.instances = BS.instances || {};

  BS.factory = function(name, fn) {
    BS.register(name, fn);
  };

  BS.service = function(name, fn) {
    BS.register(name, function() {
      return fn.apply(fn, BS.injector(fn));
    });
  };

})();