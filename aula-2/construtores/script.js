var Animal, Cat, Dog, a, b,
  extend = function(child, parent) { 
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

}, hasProp = {}.hasOwnProperty;

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
    return this.alive = false;
  };

  return Animal;

})();

Cat = (function(superClass) {
  extend(Cat, superClass);

  function Cat(color) {
    this.color = color;
    Cat.__super__.constructor.call(this, 'Meow');
  }

  return Cat;

})(Animal);

Dog = (function(superClass) {
  extend(Dog, superClass);

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

