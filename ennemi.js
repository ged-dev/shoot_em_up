// -----------------------------------------------------------\\

// Ennemi object.

var Ennemi = function(x, y) {
  this.sprite = new PIXI.Sprite(PIXI.loader.resources["img/enemy.png"].texture);
  this.sprite.x = x;
  this.sprite.y = y;
  this.vx = -3;
}

// METHODE : Ennemi -> Move 
Ennemi.prototype.move = function() {
  this.sprite.x += this.vx;
  if(this.sprite.x < 0){
  	this.sprite.x = (Math.random()*1000)+1000;
  }
}