import GameBoard from "./gameBoard";
export default class User {
    gameBoard : GameBoard = new GameBoard
    name: string
    constructor(name: 'Player' | 'Computer'){
        this.name = name
    }
    getCoordinates(x: number, y: number) {
        this.gameBoard.recieveAttack(x, y)
    }
    randomAttack(){
        const x = Math.floor((Math.random() * 8)+1)
        const y = Math.floor((Math.random() * 8)+1)
        
    }
}

 