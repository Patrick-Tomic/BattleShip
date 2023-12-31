
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
        const missedShot = this.missedShot
        for (let i = 0; i <100; i++) {
          
          board.push('')
          missedShot.push('')
        }
        this.board = board
        this.missedShot = missedShot
    }
    createBoat(position:number, length: number, direction: 'vertical' | 'horizontal' ): any {
        
       if (this.board[position] != '') {
        console.log('position taken')
        return false
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
                return false
        }
        let height = 0
        let sub = 1
        let bool = false
        if(direction === 'horizontal') {
            // y == 9
            if ( position % 9 === 0) {
                if(position === 0) {
                    console.log('next')
                }
                else{
                while(height != length) {
                    if(this.board[position-height] != ''){
                        console.log('not valid')
                        return false
                    }
                    height++
                }
                height = 0
                while(height != length) {
                        this.ships[this.ships.length-1].positions.push(position-height)
                        this.board[position-height] = 'O'
                        height++
                    
                }
                height = 0
           }
        }
           //if y == 0
           else if( position % 10 === 0 ) {
            while( height != length) {
                if (this.board[position+height] != '') {
                    console.log('not valid')
                    return false
                }
                height++
            }
            height = 0
            while (height != length) {
                this.ships[this.ships.length-1].positions.push(position+height)
                this.board[position+height] = 'O'
                height ++
            }
            height = 0
           }
           // for all other occasions but y cant hit 9 or not valid
           else{
            
             while(height != length) {
                if(position+height %10 ===0) {
                    bool = true
                }
                if(bool === false && position+height % 10 ===1){
                if(this.board[position+height] !='') {
                    console.log('not valid')
                    return false
                }
            }
                if (bool === true) {
                    if(this.board[position-sub] != '') {
                        console.log('not valid')
                        return false
                    }
                    sub++
                }
                height++
             }
             height = 0
             sub = 1
             bool = false
             while(height != length) {
                if(position+height % 10 === 0) {
                    bool = true
                }
                if(bool ===false && position+height % 10 === 1) {
                    this.ships[this.ships.length-1].positions.push(position+height)
                    this.board[position+height] = 'O'
                } if(bool === true) {
                    this.ships[this.ships.length-1].positions.push(position-sub)
                    this.board[position-sub] = 'O'
                    position++
                }
                height++
             }
           }
        }
        else if(direction === 'vertical') {
            let width = 0
            sub = 1
            bool = false
            if(x === 9) {
                while(width != length) {
                    if(this.board[x-width][y] != ''){
                        console.log('not valid')
                        return false
                    }
                    width++
                }
                width = 0
                while(width != length) {
                    const array: number[] = [x-width, y]
                    this.ships[this.ships.length-1].positions.push(array)
                    this.board[x-width][y] = 'O'
                    width++
                }
                return true
            } else if ( x === 0){
                while(width != length) {
                    if(this.board[x+width][y] != ''){
                        console.log('not valid')
                        return false
                    }
                    width++
                }
                width = 0
                while(width != length) {
                    const array: number[] = [x+width, y]
                    this.ships[this.ships.length-1].positions.push(array)
                    this.board[x+width][y] = 'O'
                    width++
                }
            }else {
                while(width != length) {
                    if(x+width <10) {
                        if(this.board[x+width][y] != '') {
                            console.log('not valid')
                            return false
                        }
                    }
                    if(x+width >=10) {
                        if(this.board[x-sub][y] != ''){
                            console.log('not valid')
                            return false
                        }
                        sub++
                    }
                    width++
                }
                width = 0
                sub = 1
                while(width != length) {
                    if(x+width>=10){
                        const array: number[] = [x-sub, y]
                        this.ships[this.ships.length-1].positions.push(array)
                        this.board[x-sub][y] = 'O'
                        sub++
                    } else {
                        const array: number[] = [x+width, y]
                        this.ships[this.ships.length-1].positions.push(array)
                        this.board[x+width][y] = 'O'
                    }
                    width++
                }
                
            }
        }
        }
        return true
    }

    recieveAttack(x: number, y: number) {
         
             
            if (this.board[x][y] == 'O') {
                this.board[x][y] = 'X'
              for(let i = 0; i < this.ships.length; i++) {
                 for(let j = 0; j< this.ships[i].positions.length-1; j++){
                    
                        if(this.ships[i].positions[j][0] === x && this.ships[i].positions[j][1] === y) {
                            console.log('hit')
                            this.ships[i].hit()
                            this.ships[i].isSunk()
                        }
                    
                 }
              }
              return 
            }
            console.log('miss')
        this.missedShot[x][y] = 'miss'
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


