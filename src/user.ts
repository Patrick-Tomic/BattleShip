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
    createBoat(x: number, y: number, length: number, direction: 'vertical' | 'horizontal' ): any {
    return this.gameBoard.createBoat(x, y, length, direction)
    }
    boardCell(x:number, y: number):any {
        return this.gameBoard.board[x][y]
    }
    board() {
        return this.gameBoard.board
    }
    ships() {
        return this.gameBoard.ships
    }
    shipsSunk() {
        return this.gameBoard.shipsSunk()
    }
}

 