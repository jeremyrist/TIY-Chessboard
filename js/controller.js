(function(globals){ // What is this even? Do I need it?
  /**
   * Your pattern for Controller code:
   *
   * 1. What `TYPE` of interaction am I interested in?
            // Click interaction
   * 2. What `SELECTOR` will get the element involved in the interaction?
            // The <td> in a specific <tr>, a letter and a number
   * 3. What `CALLBACK` should be run when the interaction happens?
            // The chess piece image will move to a new space and leave a blank space behind
   * 4. What should my `CALLBACK` do with it's `EVENT`...?
            // The event fires the callback, so by clicking on a button new chess moves are made

            SELECTOR = the button
            EVENT = 'click'
            CALLBACK = the move that happens from the click
   */
  // document.querySelector(play_pause)
  //   .addEventListener('click', applyMove);
  // // AKA
  // $(play_pause).on('click', applyMove);
  // // Where CALLBACK is...
  // function applyMove (EVENT){
  //   // Do something with Models and Views...
  //   // Maybe do something with EVENT...?
  //
  // }


  // Controller for "next move"...
  jQuery("#step_forward").on('click', function(){

    // TODO: Fire tracer bullet!
    console.log("TRACER BULLET");
    // TODO: Tell the Model -- `game` -- to advance to the next move...
    game.next();
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "previous move"...
  jQuery("#step_backward").on('click', function(){
    // TODO: Fire tracer bullet!
    console.log("step backward");
    // TODO: Tell the Model -- `game` -- to advance to the previous move...
    game.reset();
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "fast-forward"...
  jQuery("#fast_forward").on('click', function(){
    // TODO: Fire tracer bullet!
    console.log("TRACER BULLET");
    // TODO: Tell the Model -- `game` -- to advance to the last move...
    game.end();
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for anything else...
  jQuery("#rewind").on('click', function(){
    // TODO: Fire tracer bullet!
    console.log("rewind");
    // TODO: Tell the Model -- `game` -- to do something it knows how to do...
    game.prev();
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

//BOUT TO PASTE THE VIEW-HELPERS.JS BELOW....

  // TODO: Should probably live in `js/view-helpers.js` one day...

// Your code BELOW here...

  // Because the game board only corresponds to the `tbody` element...
  var $chessboard = jQuery('.chessboard tbody');
  // I always start variable names with `$` when they reference `jQuery.Collection` values

  // This looks strangely familiar... is that COPY-PASTA!?
  // TODO: Don't use COPY-PASTA!
  var gameboard = [
    [ 'R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R' ],
    [ 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P' ],
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    [ 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p' ],
    [ 'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r' ],
  ];

  // You could also use nested `for` loops, but this is better...
  jQuery(gameboard).each(function(rank, row){
    jQuery(row).each(function(file, piece){
      // http://stackoverflow.com/questions/1442925/how-to-get-nth-jquery-element
      var $square = $chessboard
        .find('tr').eq(rank) // Get the `tr` inside the `chessboard` for the `rank`
        .find('td').eq(file) // Get the `td` inside the `tr` for the `file`

      console.log($square.get(), rank, file, piece);
      // Use the log, Luke!
        // if (gameboard[4][3] === 'p') {
        //   return "white-pawn"
        // }
 if (piece) $square.text(piece); // Not _exactly_ what we discussed in class...
        // if (game.next()) {
        //   $square.text(piece);
        // }
        // TODO: Convert `square` to class name(s)
    //     $square.addClass("white-pawn");

         $("button").click(function(){
         $("td").addClass("white-pawn")
       })
       return $square;
        // var $square = ((0, 0, 'black-rook'), (0, 7, 'black-rook'));
        // var $square = ((0, 1 , 'black-knight'), (0, 6, 'black-knight'));
        // var $square = ((0, 2, 'black-bishop'), (0, 5, 'black-bishop'));
        // var $square = (0, 3, 'black-queen');
        // var $square = (0, 4, 'black-king');
        // var $square = ((1, 0, 'black-pawn'), (1, 1, 'black-pawn'), (1, 2, 'black-pawn'), (1, 3, 'black-pawn'), (1, 4, 'black-pawn'), (1, 5, 'black-pawn'), (1, 6, 'black-pawn'), (1, 7, 'black-pawn'));
        //     // 'black-rook', 'black-knight', 'black-bishop', 'black-queen', 'black-king', 'black-pawn'
        // var $square = ((7, 0, 'white-rook'), (7, 7, 'white-rook'));
        // var $square = ((7, 1 , 'white-knight'), (7, 6, 'white-knight'));
        // var $square = ((7, 2, 'white-bishop'), (7, 5, 'white-bishop'));
        // var $square = (7, 3, 'white-queen');
        // var $square = (7, 4, 'white-king');
        // var $square = ((6, 0, 'white-pawn'), (6, 1, 'white-pawn'), (6, 2, 'white-pawn'), (6, 3, 'white-pawn'), (6, 4, 'white-pawn'), (6, 5, 'white-pawn'), (6, 6, 'white-pawn'), (6, 7, 'white-pawn'));
            // 'white-rook', 'white-knight', 'white-bishop', 'white-queen', 'white-king', 'white-pawn'
        // TODO: Add class name(s) to `td` instead

    //    return $square;
    });
  });

// Don't go breaking my IIFE...
})(window || module && module.exports || this)
