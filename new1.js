//Create a container object called the `stage`
var stage = new PIXI.Container();
var renderer = PIXI.autoDetectRenderer(1200, 550);
document.body.appendChild(renderer.view);


PIXI.loader
  .add("img/space_ship.png")
  .add("img/enemy.png")
  .load(setup);

// -------------------- TILING SPRITE ---------------------- \\
// -------------------- ------------- ---------------------- \\

var texture = PIXI.Texture.fromImage('img/sprite_background.png');

var tilingSprite = new PIXI.extras.TilingSprite(texture, renderer.width, renderer.height
);
stage.addChild(tilingSprite)

var count = 0;

animate();

function animate() {

    count += 0.005;

    tilingSprite.tilePosition.x -= 1;
    

    // render the root container
    renderer.render(stage);

    requestAnimationFrame(animate);
}

// ------ END TILING SPRITE -------- \\




// MonJeu
  // methode: truc à faire une fois
  // methode: donne_moi_tous_les_sprites
  // methode: check les bullets
  // methode: ajoute balle
  // property: ship
      // methode: tir
  // property: bullets
      // methode: touche_un_ennemi
      // methode: est_en_dehors_du_jeu
  // property: ennemis
      // methode: move





// // MON JEU \\ \\
var MonJeu = function() {
  this.ennemis = [];
  this.bullets = [];
}

// Je créé ma fonction d'initialisation.
MonJeu.prototype.truc_a_faire_une_fois = function() {
  
  this.ship = new Ship(0, 0);

  for (var i = 0; i < 10; i++) {
    var ennemi = new Ennemi(i, 0);
		this.ennemis.push(ennemi);
  }

}

// METHODE : Monjeu -> moveleship
MonJeu.prototype.move_le_ship = function(){
	this.ship.x += this.ship.vx;
	this.ship.y += this.ship.vy;
}

// METHODE : Monjeu -> ajoute balle
MonJeu.prototype.ajoute_balle = function(uneballe) {
  this.bullets.push(uneballe);
}

MonJeu.prototype.move_les_ennemis = function() {
  for (var i = 0; i < this.ennemis.length; i++) {
    var ennemi = this.ennemis[i];
    ennemi.move(1, 0);
  }
}

MonJeu.prototype.check_les_bullets = function() {
  for (var i = this.bullets.length; i > 0; i--) {
    var bullet = this.bullets[i];
		bullet.sprite.x += bullet.sprite.vx;
    
    // if (bullet.est_en_dehors_du_jeu()) {
    //   stage.removeChild(bullet.sprite);
    //   this.bullets = this.bullets.splice(i, 1);
    // }
    
    if (bullet.touche_un_ennemi()) {
      // Tue l'ennemi.
    }
  }
}

// METHODE : MonJeu -> donne moi les sprites
MonJeu.prototype.donne_moi_tous_les_sprites = function() {
  var sprites = [];

  for (var i = 0; i < this.ennemis.length; i++) {
    var ennemi = this.ennemis[i];
    sprites.push(ennemi.sprite);
    console.log(sprites[i])
  }
  
  sprites.push(this.ship.sprite);

  return sprites;
}

// -----------------------------------------------------------\\

// Ennemi object.

var Ennemi = function(x, y) {
  this.sprite = PIXI.Sprite(PIXI.loader.resources["img/ennemi.png"].texture);
  this.sprite.x = x;
  this.sprite.y = y;
}

// METHODE : Ennemi -> Move 
Ennemi.prototype.move = function(x, y) {
  this.sprite.x += x;
  this.sprite.y += y;
}

// -----------------------------------------------------------\\

// Vaisseau.

var Ship = function(x, y) {
  this.sprite = PIXI.Sprite(PIXI.loader.resources["img/space_ship.png"].texture);
  this.sprite.x = x;
  this.sprite.y = y;
}

// METHODE -> Ship -> tir
Ship.prototype.tir = function() {
  var uneballe = new Bullet(this.sprite.x, this.sprite.y);
  return uneballe;
}

// -----------------------------------------------------------\\


// Balle object.

var Bullet = function(x, y) {
  this.sprite = PIXI.Sprite(PIXI.loader.resources["img/bullet.png"].texture);
  this.sprite.x = x;
  this.sprite.y = y;
  this.sprite.vx = 10;		// Vitesse par défaut.
}








// Creer une instance du jeu.
var jeu = new MonJeu();

// Initialise tous les objets.
jeu.truc_a_faire_une_fois();

PIXI.loader
  .add("img/space_ship.png")
  .add("img/enemy.png")
  .load(setup);



// // // SETUP \\ \\ \\

function setup(event) {  

  // Va me chercher tous les sprites de tous les objets.
  var sprites = jeu.donne_moi_tous_les_sprites();
  
  // Rajoute tous les sprites au stage.
  for (var i = 0; i < sprites.length; i++) {
    stage.addChild(sprites[i]);
  }
	
	renderer.render(stage);

	gameLoop();
}



function gameLoop() {

  //Loop this function at 60 frames per second
  requestAnimationFrame(gameLoop);

  jeu.move_le_ship();
  
  // this.ship.x += this.ship.vx;
  // this.ship.y += this.ship.vy;

  // moveEnemy();
  
  // Avance chaque balle par sa vitesse.
  jeu.check_les_bullets();
  
  jeu.move_les_ennemis();  
  
  
  //Render the stage to see the animation
  renderer.render(stage);
}


