import Ship from "./ship";
import GameBoard from "./gameBoard";
export const Dingy = new Ship(2)
Dingy.hit()


const board = new GameBoard
console.log(board.board) 
console.log(board.missedShot)