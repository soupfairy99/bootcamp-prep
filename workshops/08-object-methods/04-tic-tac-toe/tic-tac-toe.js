// YOUR CODE BELOW
let ticTacToe = {
//initialize board
    board: [[null,null,null],[null,null,null],[null,null,null]],
//place 'x' or 'o' if space not taken
    move: function(char, rowNum, colNum)  {
        
        if (this.board[rowNum][colNum] === null){
            this.board[rowNum][colNum] = char; 
        }
        console.log(this.board);
        return this.board; 
    },
//re=initialize board
    clear: function(){
        for (let x = 0; x < this.board.length; x++){
            this.board[x] = [null,null,null];
        }
        console.log(this.board);
        return this.board;
    }
}