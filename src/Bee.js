var Bee = function() {
  var bee = new Grub();
  this.age = 5;
  this.color = 'yellow';
  this.food = bee.food;
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
var Bee.prototype.constructor = Bee;