import Ship from "./ship";
import GameBoard from "./gameBoard";
import { verify } from "node:crypto";
export const Dingy = new Ship(2, 'Dingy')
Dingy.hit()


export const board = new GameBoard
board.createBoat(5 ,2 , 3, "vertical")
board.createBoat(2,2,4,'horizontal')
board.createBoat(1,2,3,'horizontal')
console.log(board.ships)
 