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
            let miss = []
            for(let j = 0; j < 10; j++) {
                let element: any[] = []
                arr.push(element)
                miss.push(null)
            }
            board.push(arr)
            missed.push(miss)
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
               for(let i = 0; i < this.ships.length -1; i++) {
                    if( this.ships[i].name ==='Submarine') {
                        this.ships.push(new Ship(length, 'Cruiser'))
                        break
                    }
                }
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
                
                return 'length value not allowed'

        }
        this.board[x][y] = this.ships[this.ships.length-1].name
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
                    this.board[x][y-count] = this.ships[this.ships.length-1].name
                    count++
                }
            } else if (y === 0) {
                while (count != length) {
                    this.board[x][y+count] = this.ships[this.ships.length-1].name
                    count++
                }
            } else {
                while (count != length) {
                    if (y + count === 10) {
                        this.board[x][y-precaution] = this.ships[this.ships.length-1].name
                        precaution++
                    }
                   else {
                    this.board[x][y+count] = this.ships[this.ships.length-1].name
                   }
                    count++
                }
            }
        } else if (direction === 'vertical') {
             while (count != length) {
                if ( x === 8) {
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
                    this.board[x-count][y] = this.ships[this.ships.length-1].name
                    count++
                }
            } else if (x === 0) {
                while (count != length) {
                    this.board[x+count][y] = this.ships[this.ships.length-1].name
                    count++
                }
            } else {
                while (count != length) {
                    if (x + count === 10) {
                        this.board[x-precaution][y] = this.ships[this.ships.length-1].name
                        precaution++
                    }
                   else {
                    this.board[x+count][y] = this.ships[this.ships.length-1].name
                   }
                    count++
                }
        }
    }
}
    recieveAttack(x: number, y: number) {
        for( let i = 0; i <= this.ships.length-1; i++) {
            const ship = this.ships[i].name
            if (this.board[x][y] == ship) {
                this.board[x][y] = 'Hit'
                this.ships[i].hit()
                this.ships[i].isSunk()
                return
            }
        }
        this.missedShot[x][y] = 'Missed'
        this.board[x][y] = 'X'
       
        return
    }
    shipsSunk() {
        let isSunk = true
        while( this.ships.length) {
            if (this.ships[0].Sunk == false) {
                isSunk = false    
                return isSunk
            }
            this.ships.shift()
        }
        return isSunk
    }
}
