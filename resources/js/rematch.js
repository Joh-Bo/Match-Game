
var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/
$(document).ready(function(){

MatchGame.renderCards(MatchGame.generateCardValues(), $('#game'));

});



/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
	var array_1 = []; //  unplaced, in-order card values
	for(var i = 1;i < 9; i++){
		array_1.push(i); // add the current value to the array twice
		array_1.push(i);

	}
	var array_2 = []; //randomly ordered array
	while(array_1.length > 0){
		var random = Math.floor(Math.random() * array_1.length); //generate a random number from 0 to the length of the unplaced, in-order card value
		array_2.push(array_1[random]); //add the unplaced, in-order value at the end of the randomly place value array
		array_1.splice(random, 1); //remove the element at the random index from the in-ordered value array
	}
	return array_2;
};


/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

//function MatchGame.renderCards(cardValues, $game) {

MatchGame.renderCards = function(cardValues, $game) {

	$game.data('flippedCards', []);
	$game.data('gameflippedCards', []);
	
	var colorArray = ['hsl(25, 85%, 65%)','hsl(55, 85%, 65%)','hsl(90, 85%, 65%)','hsl(160, 85%, 65%)','hsl(220, 85%, 65%)','hsl(265, 85%, 65%)','hsl(310, 85%, 65%)','hsl(360, 85%, 65%)'];
	$('#game').empty(' ');
	for(var v = 0; v < cardValues.length; v++){
		var $card = $('<div class="card col-xs-3"></div>');
		$card.data('value', cardValues[v]); //question 38 à revoir
		$card.data('flipped', false);
		$card.data('color', colorArray[cardValues[v - 1]]); //41
		$game.append($card);

		$card.click(function(){
		MatchGame.flipCard($(this), $game);
		
		});
	}

};


 //document ready call

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {
	
		var $flippedCards = $game.data('flippedCards');

		if($card.data('flipped') === true){
			return;
		}else{
			$card.css('background-color', $card.data('color'));
			$card.append($card.data('value'));
			$card.data('flipped', true);
			$flippedCards.push($card);
		}
		if($flippedCards == 2){
			$card.data('background-color')

		}


};



