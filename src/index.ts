import Ship from "./ship";
import GameBoard from "./gameBoard";
import  './style.scss'
import User from "./user";
export const board = new GameBoard 
export const Dingy = new Ship(2, 'Dingy')
Dingy.hit()
const player = new User('Player')
player.createBoat(0,1,2, 'vertical')
player.createBoat(5,3,5,'horizontal')
player.createBoat(2,5,3,'vertical')
player.createBoat(7,1,4,'horizontal')
player.createBoat(8,8,3,'vertical')
const playerDiv = document.querySelector('.player')
for( let i:number = 0; i < player.gameBoard.board.length; i++) {
    for( let j:number = 0; j < 10; j ++ ) {
        const div = document.createElement('div')
        div.classList.add('cell')
        if ( player.boardCell(i ,j) != '') {
            div.style.background = 'blue'
        }else {
            div.innerHTML = player.boardCell(i, j)
        }
       
        playerDiv?.appendChild(div)
       
    }
}