import Ship from "./ship";
import GameBoard from "./gameBoard";
import { verify } from "node:crypto";
export const Dingy = new Ship(2)
Dingy.hit()


export const board = new GameBoard
board.createBoat(2, 9, 4, "horizontal")
console.log(board.board)