var HoneyMakerBee = function(color, food) {
  Bee.call(this, color);
  Bee.call(this, food);
  this.age = 10;
  this.job = 'make honey';
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);

HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot++;
};

HoneyMakerBee.prototype.giveHoney = function() {
  if (this.honeyPot > 0) {
    this.honeyPot--;
  }
};
