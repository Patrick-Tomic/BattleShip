import { dir, error } from "console"
import Ship from "./ship"
export default class GameBoard {
    board: any[]
    ships: Ship[]
    missedShot : any[] = []
    constructor() {
        this.board = []
        this.initialize()
        this.ships = []
    }
    initialize() {
        const board = this.board
        const missed = this.missedShot
        for (let i = 0; i <10; i++) {
            let arr: any[] = []
            let missed = []
            for(let j = 0; j < 10; j++) {
                let element: any[] = []
                arr.push(element)
                missed.push(null)
            }
            board.push(arr)
            missed.push(missed)
        }
        this.board = board
        this.missedShot = missed
    }
    createBoat(x: number, y: number, length: number, direction: 'vertical' | 'horizontal' ): any {
        if (this.board[x][y] === true) {
            throw Error
        }
        switch(length) {
            case 2: 
                 this.ships.push(new Ship(length, 'Destroyer'))
                 break
            case 3:
                if(this.ships.length) {
               for(let i = 0; i <= this.ships.length; i++) {
                    const ship = this.ships[i]
                    if( ship.name ==='Submarine') {
                        this.ships.push(new Ship(length, 'Cruiser'))
                        break
                    }
                }
                break
            }
                 this.ships.push(new Ship(length, 'Submarine'))
                 break
            case 4:
                 this.ships.push(new Ship(length, 'Battleship'))
                 break
            case 5: 
                 this.ships.push(new Ship(length, 'Carrier'))
                break
            default:
                console.log('length value not allowed')
                return

        }
        this.board[x][y] = true
        let count = 1
        let precaution = 1
        if ( direction === 'horizontal'){
            while (count != length) {
                if (y === 9) {
                    if( this.board[x][y-count-1] === true){
                        throw Error
                    }
                } else {
                if ( this.board[x][y+ count+1]  === true) {
                    throw Error
                }
            }
                count++
            } 
            count = 0
            if (y === 9) {
                while(count != length) {
                    this.board[x][y-count] = true
                    count++
                }
            } else if (y === 0) {
                while (count != length) {
                    this.board[x][y+count] = true
                    count++
                }
            } else {
                while (count != length) {
                    if (y + count === 10) {
                        this.board[x][y-precaution] = true
                        precaution++
                    }
                   else {
                    this.board[x][y+count] = true
                   }
                    count++
                }
            }
        } else if (direction === 'vertical') {
             while (count != length) {
                if ( x === 9) {
                    if ( this.board[x -count-1][y] === true) {
                        throw Error
                    }
                } else {
                if ( this.board[x+ count+1][y] ===true) {
                    throw Error
                }
            }
                count++
            } 
            count = 0
            if (x === 9) {
                while(count != length) {
                    this.board[x-count][y] = true
                    count++
                }
            } else if (x === 0) {
                while (count != length) {
                    this.board[x+count][y] = true
                    count++
                }
            } else {
                while (count != length) {
                    if (x + count === 10) {
                        this.board[x-precaution][y] = true
                        precaution++
                    }
                   else {
                    this.board[x+count][y] = true
                   }
                    count++
                }
        }
    }
}
    recieveAttack(x: number, y: number) {
        if(this.board[x][y] === true) {
            console.log('hit')

        }
    }
}
