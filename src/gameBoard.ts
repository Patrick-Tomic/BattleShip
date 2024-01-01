
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
            if ( position % 10 === 9) {
                 
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
                if(bool === false){
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
                 
                if((position+height) % 10 === 0) {
                        bool = true
                   }  
                   
                if(bool === false) {
                    this.ships[this.ships.length-1].positions.push(position+height)
                    this.board[position+height] = 'O'
                }else if(bool === true) {
                    this.ships[this.ships.length-1].positions.push(position-sub)
                    this.board[position-sub] = 'O'
                    sub++
                }
                height++
             }
           }
        }
        else if(direction === 'vertical') {
            let width = 0
            let count = 0
            sub = 1
            bool = false
           
            if(position >=90 && position <=99) {
                while(count != length) {
                    if(this.board[position-width] != ''){
                 console.log('not valid')
                 return false
                }
                width+=10
                count++
            }
                width = 0
                count = 0
                while(count != length) {
                    this.ships[this.ships.length-1].positions.push(position-width)
                    this.board[position-width] = 'O'
                    width+=10
                    count++
                }
                return true
                
            } 
            else if ( position <=9){
                count = 0
            width = 0
                while(count != length) {
                    if(this.board[position+width] != ''){
                        console.log('not valid')
                        return false
                    }
                    width+=10
                    count++
                }
                width = 0
                count = 0
                while(count != length) {
                    this.ships[this.ships.length-1].positions.push(position+width)
                    this.board[position+width] = 'O'
                    width+=10
                    count++
                }
                return true
            }else if(position >= 10 && position <= 89) {
                sub = 10
                count = 0
                bool = false
                while(count != length) {
                    console.log(position+width)
                    if(position + width >= 100) {
                        bool = true
                    }
                        if(bool === false && this.board[position+width] != '') {
                            console.log('not valid')
                            return false
                        } else  if(bool === true) {
                        if(this.board[position-sub] != ''){
                            console.log('not valid')
                            return false
                        }
                        sub+=10
                    }
                    width+=10
                    count++
                }
                width = 0
                sub = 10
                count = 0
                bool = false
                while(count != length) {
                    if(position+width >= 100 ){
                        bool = true
                    }
                    if(bool === false){
                        this.ships[this.ships.length-1].positions.push(position+width)
                        this.board[position+width] = 'O'
                        
                    }else if(bool === true) {
                        this.ships[this.ships.length-1].positions.push(position-sub)
                        this.board[position-sub] = 'O'
                        sub+=10
                    }
                    width+=10
                    count++
                }
                
            
        
        return true
    }
}

}
    }
    recieveAttack(position:number) {
         
             
            if (this.board[position] == 'O') {
                this.board[position] = 'X'
              for(let i = 0; i < this.ships.length; i++) {
                 for(let j = 0; j< this.ships[i].positions.length-1; j++){
                    
                        if(this.ships[i].positions[j] === position) {
                            console.log('hit')
                            this.ships[i].hit()
                            this.ships[i].isSunk()
                            return
                        }
                    
                 }
              }
            }
            console.log('miss')
        this.missedShot[position] = 'miss'
        this.board[position] = 'X'
       
        return
    }
    shipsSunk() {
        let isSunk = true
        const boats = this.ships
        while( boats.length) {
            if (this.ships[0].Sunk == false) {
                isSunk = false    
                return isSunk
            }
            boats.shift()
        }
        return isSunk
    }
}


