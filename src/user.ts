import GameBoard from "./gameBoard";
export default class User {
    gameBoard : GameBoard = new GameBoard
    name: string
    constructor(name: 'Player' | 'Computer'){
        this.name = name
    }
    getCoordinates(position:number) {
        this.gameBoard.recieveAttack(position)
    }
    randomCreateBoats(lengthVals: number[] = [2,3,3,4,5] ) {
        if(lengthVals.length < 1) {
          
            return
        }
        const values = lengthVals
        const position = Math.floor(Math.random()*99+1)
         const choice = Math.floor((Math.random()*2)+1)
         let bool: false | true = false
         if (choice === 1) {
             bool = this.createBoat(position,values[0],'horizontal')}
        else if(choice === 2) {
             bool = this.createBoat(position,values[0],'vertical')
        }
        if(bool === false) {
            this.randomCreateBoats(values)
        } else if(bool === true){
         
            values.shift()
            this.randomCreateBoats(values)
        }   
    }
    recieveAttack(position:number) {
        return this.gameBoard.recieveAttack(position)
    }
    randomAttack(){
       const position = Math.floor((Math.random()*99)+1)
        
    }
    createBoat(position:number, length: number, direction: 'vertical' | 'horizontal' ): any {
    return this.gameBoard.createBoat(position, length, direction)
    }
    boardCell(position:number):any {
        return this.gameBoard.board[position]
    }
    board() {
        return this.gameBoard.board
    }
    missedShots() {
        return this.gameBoard.missedShot
    }
    ships() {
        return this.gameBoard.ships
    }
    shipsSunk() {
        return this.gameBoard.shipsSunk()
    }
}
const computer = new User('Computer')
 


 