(function() {
  var BS, hasProp = {}.hasOwnProperty;
  window.BS = window.BS || {};
  BS = window.BS;

  BS.factory('Favorites', Favorites);

  function Favorites(client) {
    if (!(this instanceof Favorites)) {
      return new Favorites(client);
    }
    
    this.client = !client ? 'unknown' : client;
    this.namespace = "Favorites_" + this.client;
    this.repository = localStorage;
    this.events = {
      on: {},
      off: {}
    };
    console.log('fav this',this);
    this.load();
  }

  Favorites.prototype.getEventHandler = function(namespace, event) {
    if (!namespace[event]) {
      namespace[event] = [];
    }
    return namespace[event];
  };

  Favorites.prototype.load = function() {
    var e;
    this.itens = this.repository.getItem(this.namespace);
    try {
      this.itens = JSON.parse(this.itens) || [];
    } catch (_error) {
      e = _error;
      this.itens = [];
      console.log("Erro ao carregar favoritos " + e);
    }
    this.loaded = true;
    return this.dispatch('load', this.itens);
  };

  Favorites.prototype.on = function(event, fn) {
    var local;
    local = this.getEventHandler(this.events.on, event);
    return local.push(fn);
  };

  Favorites.prototype.dispatch = function(event, params) {
    var events, i, len;
    events = this.getEventHandler(this.events.on, event);
    for (i = 0, len = events.length; i < len; i++) {
      event = events[i];
      event.apply(this, params);
    }
  };

  Favorites.save = function(favorite) {
    var e;
    try {
      return this.repository.setItem(this.namespace, JSON.stringify(this.itens));
    } catch (_error) {
      e = _error;
      return console.log("Erro ao salvar favorito " + e);
    }
  };

  Favorites.exclude = function(favorite) {
    return this.repository.removeItem(this.namespace, JSON.parse(this.itens));
  };

  Favorites.getOpenHandler = function(item) {
    var fn;
    fn = Favorites.types[item.type];
    if (!fn) {
      return fn;
    }
    return console.log("Criar handler para abrir elementos " + item.type);
  };

  Favorites.prototype.add = function(item) {
    this.itens.push(item);
    Favorites.save.apply(this, [this.itens]);
    return this.dispatch('add', [item]);
  };

  Favorites.prototype.remove = function(item) {
    this.itens.splice(0, 1);
    Favorites.save.apply(this, [this.itens]);
    return this.dispatch('remove', item);
  };

  Favorites.prototype.open = function(entry) {
    var handler;
    handler = this.getOpenHandler(entry);
    // implementar
  };

  Favorites.types = {
    forum: function(item) {
      return console.log("Abrindo", item);
    },
    ticket: function(item) {
      return console.log("Abrindo", item);
    }
  };

})();