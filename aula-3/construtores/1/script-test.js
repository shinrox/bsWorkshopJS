window.onload = function() {
  return (function(angular) {
    var bsFavoritesProvider;
    if (!angular) {
      return;
    }
    bsFavoritesProvider = function() {
      var fav, settings;
      fav = null;
      settings = {
        name: 'unknown'
      };
      this.set = function(config) {
        return angular.extend(settings, config);
      };
      this.$get = [
        '$rootScope', function($rootScope) {
          var broadcast;
          broadcast = function(event, params) {
            return $rootScope.$broadcast(event, params);
          };
          if (!fav) {
            fav = new Favorites(settings.name);
            fav.on('add', function(itens) {
              return broadcast('bsFavorites.add', itens);
            });
            fav.on('remove', function(itens) {
              return broadcast('bsFavorites.remove', itens);
            });
          }
          return fav;
        }
      ];
    };

    angular.module('bs.favorites', []).provider('bsFavorites', bsFavoritesProvider);
  })(angular);
};
