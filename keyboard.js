window.addEventListener("keydown", function(event){

	// Vers le BAS : + Y	
	if(event.key == "ArrowDown" || event.key == "s"){
		ship.vy =5;
 	
  	// Vers la DROITE : - Y	
	} if(event.key == "ArrowUp" || event.key == "z"){
		ship.vy = -5;

	// Vers la GAUCHE : - X	
	} if(event.key == "ArrowLeft" || event.key == "q"){
		ship.vx = -5;

	// Vers la DROITE : + X		
	} if(event.key == "ArrowRight" || event.key == "d"){
		ship.vx =5;
	}
})

window.addEventListener("keyup", function(event){

	// Vers le BAS : + Y	
	if(event.key == "ArrowDown" || event.key == "s"){
		ship.vy = 0;
 
  	// Vers la DROITE : - Y	
	}
	 if(event.key == "ArrowUp" || event.key == "z"){
		ship.vy = 0;

	// Vers la GAUCHE : - X	
	} if(event.key == "ArrowLeft" || event.key == "q"){
		ship.vx = 0;

	// Vers la DROITE : + X		
	} if(event.key == "ArrowRight" || event.key == "d"){
		ship.vx = 0;
	

	}if (event.key == "Enter") {
	    var laballe = jeu.ship.tir();
	    stage.addChild(laballe.sprite);
	    jeu.ajoute_balle(laballe);
  	}
})
