
// Creer une instance du jeu.
var jeu;
//Create a container object called the `stage`
var stage = new PIXI.Container();
var renderer = PIXI.autoDetectRenderer(1200, 550);
document.body.appendChild(renderer.view);




// -------------------- TILING SPRITE ---------------------- \\
// -------------------- ------------- ---------------------- \\

var texture = PIXI.Texture.fromImage('img/sprite_background.png');

var tilingSprite = new PIXI.extras.TilingSprite(texture, renderer.width, renderer.height
);


var count = 0;

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


// -----------------------------------------------------------\\

// // // SETUP \\ \\ \\

function setup(event) {  

  jeu = new MonJeu();
  jeu.truc_a_faire_une_fois();

  // Va me chercher tous les sprites de tous les objets.

  


 /* var sprites = jeu.donne_moi_tous_les_sprites();

  
  
  // Rajoute tous les sprites au stage.
  for (var i = 0; i < sprites.length; i++) {
    stage.addChild(sprites[i]);
   
  }
  */

  //var ennemiTest = new Ennemi(10, 10);
  //stage.addChild(ennemiTest.sprite);
  //console.log(ennemiTest);


    stage.addChild(tilingSprite);
    for(let i =0; i<jeu.ennemis.length; i++){
      stage.addChild(jeu.ennemis[i].sprite);
    }

    stage.addChild(jeu.ship.sprite);
    renderer.render(stage);

    // ------- LOOP ------- \\
    gameLoop();
}


function gameLoop(event) {

    //Loop this function at 60 frames per second
    requestAnimationFrame(gameLoop);

    count += 0.005;

    tilingSprite.tilePosition.x -= 1;

    for(let i =0; i<jeu.ennemis.length; i++){
       jeu.ennemis[i].move();
    }

    jeu.move_le_ship();

    //jeu.move_les_ennemis(1,0);
  


    // Avance chaque balle par sa vitesse.
    //jeu.check_les_bullets();
  
    // jeu.move_les_ennemis();  
  
  
    //Render the stage to see the animation
    renderer.render(stage);
}


PIXI.loader
  .add("img/space_ship.png")
  .add("img/enemy.png")
  .load(setup);


