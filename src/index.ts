import Ship from "./ship";
import GameBoard from "./gameBoard";
import User from "./user";
export const board = new GameBoard 
export const Dingy = new Ship(2, 'Dingy')
Dingy.hit()
const player = new User('Player')
player.gameBoard.createBoat(0,1,2, 'vertical')
player.gameBoard.createBoat(5,3,5,'horizontal')
player.gameBoard.createBoat(2,5,3,'vertical')
player.gameBoard.createBoat(7,1,4,'horizontal')
player.gameBoard.createBoat(8,8,3,'vertical')
console.log(player.gameBoard.ships)