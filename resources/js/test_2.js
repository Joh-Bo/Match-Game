var MatchGame = {};

$(document).ready(function () {
  /*
    Sets up a new game after HTML document has loaded.
    Renders a 4x4 board of cards.
  */

  /*
    Generates and returns an array of matching card values.
   */

  MatchGame.generateCardValues = function () {
    var array1 = [];
    for (var i = 1; i < 9; i++) {
      array1.push(i);
      array1.push(i);
    }
    var array2 = [];
    while (array1.length !== 0) {
      var random = Math.floor(Math.random() * array1.length);
      array2.push(array1[random]);
      array1.splice(random, 1);
    }
    return array2;
  };

  /*
    Converts card values to jQuery card objects and adds them to the supplied game
    object.
  */
  MatchGame.renderCards = function (cardValues, $game) {
    $game.data('flippedCards', []);
    var colorArr = ['hsl(25, 85%, 65%)', 'hsl(55, 85%, 65%)', 'hsl(90, 85%, 65%)', 'hsl(169, 85%, 65%)', 'hsl(220, 85%, 65%)', 'hsl(265, 85%, 65%)', 'hsl(310, 85%, 65%)', 'hsl(360, 85%, 65%)'];
    $game.empty();
    for (i = 0; i < cardValues.length; i++) {
      var $card = $('<div class="card col-xs-3"></div>');
      $card.data('value', cardValues[i]);
      $card.data('flipped', false);
      $card.data('color', colorArr[cardValues[i] - 1]);
      $game.append($card);
    }
  };

  MatchGame.renderCards(MatchGame.generateCardValues(), $('#game'));

  /*
    Flips over a given card and checks to see if two cards are flipped over.
    Updates styles on flipped cards depending whether they are a match or not.
   */



  MatchGame.flipCard = function ($card, $game) {
    if ($card.data('flipped')) {
      return;
    } else {
      $card.text($card.data('value'));
      $card.css("background-color", $card.data('color'));
      $card.data('flipped', true);
      $game.data('flippedCards').push($card);
      if ($game.data('flippedCards').length === 2) {
        if ($game.data('flippedCards')[0].data('value') === $game.data('flippedCards')[1].data('value')) {
          $game.data('flippedCards')[0].css("color", "rgb(204, 204, 204)");
          $game.data('flippedCards')[0].css("background-color", "rgb(153, 153, 153)");
          $game.data('flippedCards')[1].css("color", "rgb(204, 204, 204)");
          $game.data('flippedCards')[1].css("background-color", "rgb(153, 153, 153)");
          $game.data('flippedCards', []);
        } else {
          window.setTimeout(function () {
            $game.data('flippedCards')[0].text('');
            $game.data('flippedCards')[0].css("background-color", "rgb(32, 64, 86)");
            $game.data('flippedCards')[0].data('flipped', false);
            $game.data('flippedCards')[1].text('');
            $game.data('flippedCards')[1].css("background-color", "rgb(32, 64, 86)");
            $game.data('flippedCards')[1].data('flipped', false);
            $game.data('flippedCards', []);
          }, 300);
        }
      }
    }
  };


  $('.card').click(function () {
    MatchGame.flipCard($(this), $('#game'));
  });



});