(function() {
  'use strict';
  var BS, hasProp = {}.hasOwnProperty;
  window.BS = window.BS || {};
  BS = window.BS;

  BS.utils = BS.utils || {};

  BS.utils.extend = function(child, parent) {
    for (var key in parent) { 
        if (hasProp.call(parent, key)) {
          child[key] = parent[key];
        }
    }

    function setConstructor() { 
        this.constructor = child; 
    } 

    setConstructor.prototype = parent.prototype; child.prototype = new setConstructor(); 
    child.__super__ = parent.prototype;
    return child;

  };

  BS.utils.getObjKey = function(obj, label){
    if (typeof labels === 'string') {
      label = label.replace(/\[(\w+)\]/g, '.$1'); // converte index [0] para prop .0
      label = label.replace(/^\./, ''); // remove qualquer . no final da string
      return BS.utils.getObjKey(obj, label.split('.'));
    } else if (label.length > 0) {
      return BS.utils.getObjKey(obj[label[0]], label.slice(1));
    }
  };

})();