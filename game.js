// // MON JEU \\ \\
var MonJeu = function() {
  this.ennemis = [];
  this.bullets = [];
}

// Je créé ma fonction d'initialisation.
MonJeu.prototype.truc_a_faire_une_fois = function() {
  
  // Nouvel objet SHIP avec coordonnées
  this.ship = new Ship(100, 100);

  for (var i = 0; i < 10; i++) {
    // cree une nouvelle instance de mon objet
    var ennemi = new Ennemi((Math.random()*1000)+1000, i * 50);
	  this.ennemis.push(ennemi);
  }
}

// METHODE : Monjeu -> moveleship
MonJeu.prototype.move_le_ship = function(){
	this.ship.sprite.x += this.ship.vx;
	this.ship.sprite.y += this.ship.vy;
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
/*
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
*/