(function() {
    angular.module('app', ['bs.favorites']).config([
      'bsFavoritesProvider', function(bsFavoritesProvider) {
        bsFavoritesProvider.set({
          name: 'cliente'
        });
      }
    ]).controller('home', [
      'bsFavorites', '$scope', function(bsFavorites, $scope) {
        var vm;
        vm = this;
        vm.bsFavorites = bsFavorites;
        $scope.$on('bsFavorites.add', function(event, data) {
          return console.log(event, data);
        });
        vm.add = function() {
          return bsFavorites.add({
            id: new Date().getTime()
          });
        };
        
        return this;
      }
    ]);

    return angular.bootstrap(document, ['app']);
})();