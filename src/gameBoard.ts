import { dir } from "console"
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
        this.ships.push(new Ship(length))
        this.board[x][y] = true
        let count = 1
        let precaution = 1
        if ( direction === 'horizontal'){
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
}
