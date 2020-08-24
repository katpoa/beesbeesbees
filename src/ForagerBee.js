var ForagerBee = function(color, food) {
  Bee.call(this, color);
  Bee.call(this, food);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Bee.prototype);

ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(treasure) {
  this.treasureChest.push(treasure);
};

ForagerBee.prototype.fly = function() {
  if (this.canFly) {
    return 'WHEEE! Bzz!';
  }
  return 'My wings seem to be broken :\'(';
};