import Ship from "./ship";
import GameBoard from "./gameBoard";
import { verify } from "node:crypto";
export const Dingy = new Ship(2, 'Dingy')
Dingy.hit()


export const board = new GameBoard
console.log(board.board)
