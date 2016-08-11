(function() {
  var Animal, Cat, Dog, a, b;

  Animal = (function() {
    function Animal(say) {
      this.say = say;
      this.alive = true;
    }

    Animal.prototype.talk = function() {
      if (this.alive) {
        return this.log(this.say);
      } else {
        return this.log("Dead animals doesn't talk");
      }
    };

    Animal.prototype.log = bsWorkshop.log;

    Animal.prototype.die = function() {
      this.alive = false;
      return this.alive;
    };

    return Animal;

  })();

  Cat = (function(superClass) {
    BS.utils.extend(Cat, superClass);

    function Cat(color) {
      this.color = color;
      Cat.__super__.constructor.call(this, 'Meow');
    }

    return Cat;

  })(Animal);

  Dog = (function(superClass) {
    BS.utils.extend(Dog, superClass);

    function Dog(color) {
      this.color = color;
      Dog.__super__.constructor.call(this, 'Woof');
    }

    return Dog;

  })(Animal);

  a = new Cat('Black');

  b = new Cat('White');

  a.talk();
  b.talk();

  a.die();
  a.talk();
  b.talk();

  bsWorkshop.log(a);
  bsWorkshop.log(b);
})();



