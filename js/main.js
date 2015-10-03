(function(globals){
// Don't worry if that seems a little funky...

  /**
   * Internal representation of the game board in its current state.
   *
   * @see game.board
   * @see game.tracer
   * @see initial
   * @var {Array} of {Array} of {String|null}
   */
  var board = initial(); // initialize the `board`
  var ctr = -1;
 // should be nine though...
  /**
   * List of moves for the "Catalan Opening: Closed Variation" suitable for use
   * as arguments to `applyMove` below.
   *
   * @see applyMove
   * @var {Array} of...?
   */
  var moves = [
    // {from: {rank: 4, file: 3}, to: {rank: 4, file: 3}}, // just a filler... no effect
    {from: {rank: 6, file: 3}, to: {rank: 4, file: 3}}, // first move from 6,3 to 4,3
    {from: {rank: 0, file: 6}, to: {rank: 2, file: 5}}, // second move
    {from: {rank: 6, file: 2}, to: {rank: 4, file: 2}}, // the rest of the move
    {from: {rank: 1, file: 4}, to: {rank: 2, file: 4}},
    {from: {rank: 6, file: 6}, to: {rank: 5, file: 6}},
    {from: {rank: 1, file: 3}, to: {rank: 3, file: 3}},
    {from: {rank: 7, file: 5}, to: {rank: 6, file: 6}},
    {from: {rank: 0, file: 5}, to: {rank: 1, file: 4}},
    {from: {rank: 7, file: 6}, to: {rank: 5, file: 5}},
  ];

    // [4,3,6,3],  // [destination, destination, to, to]
    // [2,5,0,6],  // [destination, destination, to, to]
    // [4,2,6,2],  // [destination, destination, to, to]
    // [2,4,1,4],  // [destination, destination, to, to]
    // [5,6,6,6],  // [destination, destination, to, to]
    // [3,3,1,3],  // [destination, destination, to, to]
    // [6,6,7,5],  // [destination, destination, to, to]
    // [1,4,0,5],  // [destination, destination, to, to]
    // [5,5,7,6]   // [destination, destination, to, to]
    // TODO: Fill me in!
 // END moves

  // var current; TODO: do we need this?

  // You don't need to understand `globals` yet...
  var game = globals.game = {
    /**
     * Provide a _copy_ of the game board in order to update the View from it
     *
     * @return {Array} of {Array} of {String|null}
     */
    board: function(){
      return board.map(function(row){
        return row.slice();
      });
    },
    /**
     * Reset the internal game board to it's initial state.
     *
     * @return {Object} the game object for Method Chaining
     */
    reset: function(){
      board = initial();
      ctr = -1;
      return this;
    },
    /**
     * Advance the internal game board to the next move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    next: function(){
      // Doesn't this seem to be missing something?
      console.log ("mainjs next!");
      if (ctr < moves.length) {
      ctr++;
      console.log (ctr);
      var curFromMove = moves[ctr].from;
      var curToMove = moves[ctr].to;
      console.log (curFromMove);
      console.log (curToMove);
      game.applyMove(curFromMove, curToMove);
      return board;
    }
      // return this;
    },
    /**
     * Advance the internal game board to the previous move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    prev: function(){
      if (ctr >= 0){
        var curFromMove = moves[ctr].to; //inversed `from and `to`
        var curToMove = moves[ctr].from; //inversed `from and `to`
        game.applyMove(curFromMove, curToMove);
        console.log('main back');
        ctr--;
        console.log (ctr);
        return board;
      }
    },
    /**
     * Advance the internal game board to the last move.
     *
     * @return {Object} the game object for Method Chaining
     * @todo Make this work!
     */
    end: function(){
      while (ctr < moves.length) {
      ctr += 1;
      console.log (ctr);
      var curFromMove = moves[ctr].from;
      var curToMove = moves[ctr].to;
      console.log (curFromMove);
      console.log (curToMove);
      game.applyMove(curFromMove, curToMove);
    }
    return board;
  },
    /**
     * Provide a printable representation of the game board for use as a tracer
     *
     * @return {String} representation of `board`
     * @todo Refactor to use Array methods?
     */
    tracer: function(){
      var bullet = '';

      for ( var rank = 0; rank < board.length; rank++ ){
        bullet += '|';
        for ( var file = 0; file < board[rank].length; file++ ){
          bullet += board[rank][file] || ' |';
        }
        bullet += '\n';
      }

      return bullet;
    },
    /**
     * Apply a move to the game board, given a `from` and `to` position that both
     * contain values for `rank` and `file`.
     *
     * @param {Object} from with `rank` and `file`
     * @param {Object} to with `rank` and `file`
     * @return undefined
     *
     * @todo Fill me in! ...and remove this comment.
     */
    applyMove: function(from,to){
        //board[x][y] = board [z][w];
        board[to.rank][to.file] = board[from.rank][from.file];
        board[from.rank][from.file]= ' ';
        console.log (board.join ('\n' + '|'));
        return board.join ('\n' + ' |');
    } // END applyMove
  }; // END game

  /**
   * Provide the initial state of the game board, useful for any game.
   *
   * @return {Array} of {Array} of {String|null}
   */
  function initial(){
    return [
      [ '|R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R' ],
      [ 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P' ],
      [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
      [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
      [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
      [ ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ' ],
      [ 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p' ],
      [ 'r', 'n', 'b', 'q', 'k', 'b', 'n', 'r' ],
    ];
  } // END initial



// You are not expected to understand anything below this line...
})(window || module && module.exports || this);
