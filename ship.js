// Vaisseau.

var Ship = function(x, y) {
  this.sprite = new PIXI.Sprite(PIXI.loader.resources["img/space_ship.png"].texture);
  this.sprite.x = x;
  this.sprite.y = y;
  this.vy = 0;
  this.vx = 0;
}

// METHODE -> Ship -> tir
Ship.prototype.tir = function() {
  var uneballe = new Bullet(this.sprite.x, this.sprite.y);
  return uneballe;
}
