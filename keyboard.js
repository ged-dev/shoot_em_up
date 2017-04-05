window.addEventListener("keydown", function(event){

	// Vers le BAS : + Y	
	if(event.key == "ArrowDown" || event.key == "s"){
		jeu.ship.vy = 5;
 	
  	// Vers la DROITE : - Y	
	} if(event.key == "ArrowUp" || event.key == "z"){
		jeu.ship.vy = -5;

	// Vers la GAUCHE : - X	
	} if(event.key == "ArrowLeft" || event.key == "q"){
		jeu.ship.vx = -5;

	// Vers la DROITE : + X		
	} if(event.key == "ArrowRight" || event.key == "d"){
		jeu.ship.vx =5;
	}
})

window.addEventListener("keyup", function(event){

	// Vers le BAS : + Y	
	if(event.key == "ArrowDown" || event.key == "s"){
		jeu.ship.vy = 0;
 
  	// Vers la DROITE : - Y	
	}
	 if(event.key == "ArrowUp" || event.key == "z"){
		jeu.ship.vy = 0;

	// Vers la GAUCHE : - X	
	} if(event.key == "ArrowLeft" || event.key == "q"){
		jeu.ship.vx = 0;

	// Vers la DROITE : + X		
	} if(event.key == "ArrowRight" || event.key == "d"){
		jeu.ship.vx = 0;
	

	}if (event.key == "Enter") {
	    var laballe = jeu.ship.tir();
	    stage.addChild(jeu.laballe.sprite);
	    jeu.ajoute_balle(laballe);
  	}
})
