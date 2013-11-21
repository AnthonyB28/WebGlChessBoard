/**
*	Queen Class
* 	This class holds all queen logic
*	The class also holds onto the queen information
*   and the 3D model object
*/

var Queen = function (scene, color, spot, board) { this.init(scene, color, spot, board); }

/**
*	Constructor - creates a queen object
*	also loads the model associated with it
*	@param scene - the queen needs to have a reference to the scene graph 
*		so it can add the model into the scene
*	@param color color of the Queen (white or black)
*	@param spot - the position the Queen is in
*	@param board - a reference to the board that holds it, so the piece can
*	callback to the board to chain properly
*/
Queen.prototype.init = function(scene, color, spot, board)
{
	// initializes all class instances
	this.board = board;
	this.scene = scene;
	this.color = color;
	this.xLoc = spot[0];
	this.yLoc = spot[1];
	this.x = LEFT + (this.xLoc * 20)
	this.y = TOP + (this.yLoc * 20)
	this.moving = false;
	this.ttl = 0;
	this.x2 = 0;
	this.y2 = 0;
	this.dx = 0;
	this.dy = 0;
	// create object for scene graph
	this.piece = new THREE.Object3D();
	// instantiate a loader
	this.loader = new THREE.OBJMTLLoader();
	
	//local variables to the init method to help loading the model
	var xPos = this.xLoc;
	var yPos = this.yLoc;
	
	// This loadPiece function takes the Queen object itself, or the loader function will
	// the reference to the Queen object, it also takes the loader to load with, and a callback for when it completes
	function loadPiece(queen, loader, callback) {
		// loads the model
		loader.load('Models/Queen/queen.obj', 'Models/Queen/queen.mtl', function ( object ) {
		// scales and positions the model;
		object.position.z = TOP + (yPos * 20);
		object.position.x = LEFT + (xPos * 20);
		object.position.y = 4.5;

    	object.scale.x = object.scale.y = object.scale.z = 5;

		// sets the model to the queen object and adds it to the scene
		queen.piece = object;
		queen.scene.add(queen.piece);
		// calls the callback
		callback();
		});
		
	}
	
	// calls the loadPiece function, gives it this a reference to the queen object, 
	// the loader, and the callback function which calls back to the board
	loadPiece(this, this.loader, function() {
		// calls back to the board
		start++;
		console.log(start);
	});
	
}



// TODO a move method, should add the queen to a move Queue that will animate one move at a time
// Should handle callback to board for promotion
Queen.prototype.move = function(x, y){
	var spaces = 1;
	if(this.xLoc != x){
		spaces = Math.abs(this.xLoc - x);
	}else{
		spaces = Math.abs(this.yLoc - y);
	}
	this.xLoc = x;
	this.yLoc = y;
	this.x2 = LEFT + (x * 20);
	this.y2 = TOP + (y * 20);
	console.log(spaces);
	
	this.moving = true;
	this.ttl = TIME_TO_MOVE * spaces;
	this.dx = (this.x2 - this.x) / this.ttl;
	this.dy = (this.y2 - this.y) / this.ttl;
	
}

Queen.prototype.update = function(){
	this.piece.position.z += this.dy;
	this.piece.position.x += this.dx;
	this.ttl--;
	if(this.ttl == 0){
		this.moving = false;
		this.x = this.x2;
		this.y = this.y2;
		
	}
}

Queen.prototype.isMoving = function(){
	return this.moving;
}