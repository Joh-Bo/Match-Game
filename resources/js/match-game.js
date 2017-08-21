var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/
$(document).ready(function(){
	MatchGame.renderCards('array_random', '#game');
	
	

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
	var $rc = '#game';
	//empty array representing the in-order card values
	var array_order = [];
	for (var i= 1; i < 9; i++){
		array_order.push(i);
		array_order.push(i);
	}
	//empty array
	var array_random = [];
	while(array_order.length !== 0){
		var random = Math.floor(Math.random() * array_order.length);
		array_random.push(array_order[random]); //array_random.push([random]);
		array_order.splice(random, 1); //array.splice(random);
	}

	return array_random;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
	var arrayColor = [
	'hsl(25, 85%, 65%)',
	'hsl(55, 85%, 65%)',
	'hsl(90, 85%, 65%)',
	'hsl(160, 85%, 65%)',
	'hsl(220, 85%, 65%)',
	'hsl(265, 85%, 65%)',
	'hsl(310, 85%, 65%)',
	'hsl(360, 85%, 65%)'
	];

	$('#game').empty();
	var cardValues = [];
	for (var v=1;v<cardValues;v++){
		var $newCard = '<div class="card col-xs-3"></div>';
		$newCard.data('row', 1);
		$newCard.data('flipped', false);
		$newCard.data(cardValues[arrayColor]-1);
		$game.append('newCard');
	}


};



/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};

});

