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
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "previous move"...
  jQuery("#step_backward").on('click', function(){
    // TODO: Fire tracer bullet!
    console.log("TRACER BULLET");
    // TODO: Tell the Model -- `game` -- to advance to the previous move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "fast-forward"...
  jQuery("#fast_forward").on('click', function(){
    // TODO: Fire tracer bullet!
    console.log("TRACER BULLET");
    // TODO: Tell the Model -- `game` -- to advance to the last move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for anything else...
  jQuery("#rewind").on('click', function(){
    // TODO: Fire tracer bullet!
    console.log("TRACER BULLET");
    // TODO: Tell the Model -- `game` -- to do something it knows how to do...
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

      if (piece) $square.text(piece); // Not _exactly_ what we discussed in class...
        // TODO: Convert `square` to class name(s)
        // TODO: Add class name(s) to `td` instead
    });
  });

// Don't go breaking my IIFE...
})(window || module && module.exports || this)
