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
    randomCreateBoats(lengthVals: number[] = [2,3,3,4,5] ) {
        if(lengthVals.length < 1) {
            console.log(this.ships())
            return
        }
        const values = lengthVals
         const x = Math.floor((Math.random()*8)+1)
         const y = Math.floor((Math.random()*8)+1)
         const choice = Math.floor((Math.random()*2)+1)
         let bool: false | undefined
         if (choice === 1) {
             bool = this.createBoat(x,y,values[0],'horizontal')}
        else if(choice === 2) {
             bool = this.createBoat(x,y,values[0],'vertical')
        }
        if(bool === false) {
            console.log('false')
            this.randomCreateBoats(values)
        } else {
            values.shift()
            this.randomCreateBoats(values)
        }
         
            
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
const computer = new User('Computer')
computer.randomCreateBoats()
console.log(computer.board())

 