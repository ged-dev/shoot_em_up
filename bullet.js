// Balle object.

var Bullet = function(x, y) {
  this.sprite = new PIXI.Sprite(PIXI.loader.resources["img/bullet.png"].texture);
  this.sprite.x = x;
  this.sprite.y = y;
  this.sprite.vx = 10;		// Vitesse par défaut.
}