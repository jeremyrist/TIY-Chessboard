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
  document.querySelector(play_pause)
    .addEventListener('click', applyMove);
  // AKA
  $(play_pause).on('click', applyMove);
  // Where CALLBACK is...
  function applyMove (EVENT){
    // Do something with Models and Views...
    // Maybe do something with EVENT...?

  }


  // Controller for "next move"...
  jQuery(step_forward).on('click', function(event){
    // TODO: Fire tracer bullet!
    console.log("TRACER BULLET");
    // TODO: Tell the Model -- `game` -- to advance to the next move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "previous move"...
  jQuery(step_backward).on('click', function(event){
    // TODO: Fire tracer bullet!
    console.log("TRACER BULLET");
    // TODO: Tell the Model -- `game` -- to advance to the previous move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for "fast-forward"...
  jQuery(fast_forward).on('click', function(event){
    // TODO: Fire tracer bullet!
    console.log("TRACER BULLET");
    // TODO: Tell the Model -- `game` -- to advance to the last move...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

  // Controller for anything else...
  jQuery(rewind).on('click', function(event){
    // TODO: Fire tracer bullet!
    console.log("TRACER BULLET");
    // TODO: Tell the Model -- `game` -- to do something it knows how to do...
    // TODO: Tell the View -- `.chessboard` -- to update the position of the pieces based on `game.board()`
  });

// Am I supposed to recognize this?
})(window || module && module.exports || this)
