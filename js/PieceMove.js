/**
*	Piece move object takes care of changing movestrings to logical moves
*	Also used for initiating moves
*/
var PieceMove = function (moveString) { this.init(moveString); }

/**
*	Constructor, initializes the object
*	@param moveString the move string to make a move based off
*/
PieceMove.prototype.init = function(moveString)
{
	this.moveString = moveString.toUpperCase();
	this.piece = true;
	var a = this.moveString[1];
	var b = this.moveString[2];
	var c = this.moveString[3];
	var d = this.moveString[4];
	this.promote = false;
	this.promoteType = "";
	this.castle = false;
	this.queenCastle = false;
	this.pawnCap = false;

	if(this.moveString.length >= 6 && this.moveString[0] == 'P'){
		this.promote = true;
		this.promoteType = this.moveString[5];
	}
	this.x = this.decideX(a);
	this.y = this.decideY(b);
	this.x2 = this.decideX(c);
	this.y2 = this.decideY(d);
	if(this.moveString[0] == 'P'){
		if(this.x2 != this.x){
			this.pawnCap = true;
		}
	}
	if(moveString[0] == 'K'){
		if(Math.abs(this.x2 - this.x) > 1){
			this.castle = true;
			if((this.x2 - this.x) < 0){
				this.queenCastle = true;
			}
		}
	}
}

/**
*	decides the X location base on str
*	@param str the letter location
*/
PieceMove.prototype.decideX = function(str)
{
	var x = -1;
	if(str == 'A'){
		x = 0;
	}else if(str == 'B'){
		x = 1;
	}else if(str == 'C'){
		x = 2;
	}else if(str == 'D'){
		x = 3;
	}else if(str == 'E'){
		x = 4;
	}else if(str == 'F'){
		x = 5;
	}else if(str == 'G'){
		x = 6;
	}else if(str == 'H'){
		x = 7;
	}
	return x;
}

/**
*	decides the Y location base on str
*	@param str the character number location
*/
PieceMove.prototype.decideY = function(str)
{
	var y = parseInt(str);
	y = 8 - y;
	return y;
}

/**
* 	Tells if this object is for a piece
*	@return true this is always for a piece
*/
PieceMove.prototype.isPiece = function()
{
	return this.piece;
}