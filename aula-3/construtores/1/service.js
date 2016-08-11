(function() {
  'use strict';
  BS.service('Service', Service);

  Service.args = ['Favorites'];

  function Service(favs) {
    return {
      favs: favs()
    };
  }
})();