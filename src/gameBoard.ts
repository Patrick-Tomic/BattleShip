
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
            let miss: any = []
            for(let j = 0; j < 10; j++) {
                let element = ''
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
        
       if (this.board[x][y] != '') {
        console.log('position taken')
        return
       }
       else {
        switch( length ) {
            case 2: 
            this.ships.push(new Ship(length, 'Destroyer'))
            break
            case 3: 
            if(this.ships.length){
            this.ships.forEach((boat) => {
                if(boat.name === 'Submarine') {
                    this.ships.push(new Ship(length, 'Cruiser'))
                }
            })
        
            if(this.ships[this.ships.length-1].name === 'Cruiser') break
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
                console.log('not valid length')
                return
        }
        let height = 0
        let sub = 1
        if(direction === 'horizontal') {
            // y == 9
            if ( y === 9) {
                while(height != length) {
                    if(this.board[x][y-height] != ''){
                        console.log('not valid')
                        return
                    }
                    height++
                }
                height = 0
                while(height != length) {
                    
                        this.board[x][y-height] = 'O'
                        height++
                    
                }
                height = 0
                return
           }
           //if y == 0
           else if( y === 0 ) {
            while( height != length) {
                if (this.board[x][y+height] != '') {
                    console.log('not valid')
                    return
                }
                height++
            }
            height = 0
            while (height != length) {
                this.board[x][y+height] = 'O'
                height ++
            }
            height = 0
            return
           }
           // for all other occasions but y cant hit 9 or not valid
           if ( y > 0 && y < 9){
             while(height != length) {
                if(y+height < 10){
                if(this.board[x][y+height] !='') {
                    console.log('not valid')
                    return
                }
            }
                if (y + height >= 10) {
                    if(this.board[x][y-sub] != '') {
                        console.log('not valid')
                        return
                    }
                    sub++
                }
                height++
             }
             height = 0
             sub = 1
             while(height != length) {
                if(y + height >= 10) {
                    this.board[x][y-sub] = 'O'
                    sub++
                } else {
                    this.board[x][y+height] = 'O'
                }
                height++
             }
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


