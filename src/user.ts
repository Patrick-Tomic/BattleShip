import GameBoard from "./gameBoard";
import Ship from "./ship";
export default class User {
    gameBoard : GameBoard = new GameBoard
    name: string
    flag: boolean = true
    area:any = null
    chances : string[] = ['left', 'right', 'up', 'down']
    vertical: boolean = false
    horizontal: boolean = false
    opposite:boolean = false
    direction:any = null
    marker:number = 0
    constructor(name: 'Player' | 'Computer'){
        this.name = name
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
    recieveAttack(position:number, cell:any, computer:User, player:User) {
        const reset:any= document.getElementById('reset')
        const title:any = document.querySelector('.title')
        if(computer.board()[position] === 'M' ||computer.board()[position] === 'H'){
            return
          }else{
              if(this.flag === false){
                  return
              }
              let count = 0
              let bool = false
                 while(computer.ships().length != count) {
                    const ship: Ship = computer.ships()[count]
                    const length: number = ship.positions.length
                        for(let i = 0; i < length; i++) {
                             if(position === ship.positions[i]) {                            
                              cell.setAttribute('style', 'background-color:#800020;')
                                  ship.hit()
                                  ship.isSunk(player)
                                  computer.board()[position] = 'H'
                                  bool = true
                                }
                            }
                            if(bool === true) {
                              
                                computer.randomAttack(player,computer)
                                 return 
                            }
                            count++
                        }
                        if(bool === false){
                            
                             computer.board()[position] = 'M'
                             cell.setAttribute('style', 'background-color:#B69460;')     
                            } 
                            
                            computer.randomAttack(player,computer)
        }
    }
    randomAttack(player:User, computer:User):any{
        const reset:any= document.getElementById('reset')
        const title:any = document.querySelector('.title')
        if(player.shipsSunk() === false) {

            title.innerHTML = computer.name +' wins'
            reset.setAttribute('style', 'display:block')
            return 
        } 
         if( computer.shipsSunk() === false) {
            title.innerHTML = player.name +' wins'
            reset.setAttribute('style', 'display:block')
           return
        }
        console.log(this.chances)
        if(!this.chances.length){
            this.area = null
                        this.vertical = false
                        this.horizontal = false
                        this.opposite = false
                        this.direction = null
                        this.chances = ['left', 'right','up', 'down']
                        this.marker = 0
        }
        let position = 0
        if(this.opposite === false){
             if(this.horizontal === true){
            if(this.direction === 'left'){
                 
                if(this.area %10 ===0){
                    position = this.area+1
                }else{
                position = this.area-1
                }
            } else if(this.direction ==='right'){
              
                if(this.area %10 === 9){
                    position = this.area-1
                } else{
                position = this.area +1}
            }
            if(player.board()[position] === 'M' || player.board()[position] === 'H'){
                this.direction = null
                this.opposite = false
                this.horizontal = false
                this.area = this.marker
            }
        }else if(this.vertical === true){
            if(this.direction === 'up'){
               
                if(this.area >= 0 && this.area <= 9){
                    position = this.area +10
                }else{
                position = this.area-10}
            } else if(this.direction === 'down'){
               
                if(this.area >= 90 && this.area <= 99){
                    position = this.area -10
                }else{
                position = this.area +10}
            }
            if(player.board()[position] === 'M' || player.board()[position] === 'H'){
                this.direction = null
                this.opposite = false
                this.vertical = false
                this.area = this.marker
            }
        }else if(this.area != null) {
            if(this.chances[0] === 'left'){
                if(this.area %10 ===0){
                   this.chances.shift()
                   return this.randomAttack(player,computer)
                }else{
                position = this.area-1
                }
            }else if(this.chances[0] === 'up'){
                if(this.area >= 0 && this.area <= 9){
                    this.chances.shift()
                   return this.randomAttack(player,computer)
                }else{
                position = this.area-10}
            }else if(this.chances[0] === 'right'){
                if(this.area %10 === 9){
                this.chances.shift()
                return this.randomAttack(player,computer)
                }
                position = this.area +1
            } else if(this.chances[0] ==='down'){
                 if(this.area >= 90 && this.area <= 99){
                    this.chances.shift()
                    return this.randomAttack(player,computer)
                } else{
                position = this.area +10
            }
        }
        if(player.board()[position] === 'M' || player.board()[position] === 'H'){
            this.chances.shift()
            return this.randomAttack(player,computer)
        }
        }
     else{
        position = Math.floor((Math.random() * 100))    
     
   } }else if(this.opposite === true){
    if(this.horizontal === true){
        if(this.direction === 'left'){
            position = this.marker + 1
        }else if(this.direction === 'right'){
            position = this.marker -1
        }
    } else if(this.vertical === true){
        if(this.direction === 'up'){
            position = this.marker + 10
        } else if(this.direction === 'down'){
            position = this.marker - 10
        }
    }
     } 
    
         const playerCells = document.querySelectorAll('.playerCell')
       
        const cell = playerCells[position]
       let count = 0
       if(player.board()[position] === 'M' || player.board()[position] === 'H') {
        if((this.horizontal === true || this.vertical === true) && this.opposite != true ){
            this.opposite = true
            return this.randomAttack(player,computer)
        } else if(this.horizontal === false || this.vertical === false){
            
            return this.randomAttack(player, computer)
        }
      return this.randomAttack(player,computer)
       } else {
        console.log(position)
        while(player.ships().length != count) {
            const ship = player.ships()[count]
            const length = ship.positions.length
            for(let i = 0; i < length; i++){
                if(ship.positions[i] === position) {
                    console.log('hit!')
                    player.board()[position] = 'H'  
                    cell.setAttribute('style', 'background-color:#800020;')
                    ship.hit()
                    ship.isSunk(computer)
                    if(ship.isSunk(computer) === true){
                        this.area = null
                        this.vertical = false
                        this.horizontal = false
                        this.opposite = false
                        this.direction = null
                        this.chances = ['left', 'right','up', 'down']
                        this.marker = 0
                       
                        return
                    }
                  
                }
            }
            if(player.board()[position] === 'H') {
                if(this.opposite === true){
                    this.marker = position
                    return
                }
                if(this.vertical != true || this.horizontal != true) {
                    if(this.area != null) {
                        if(this.chances[0] === 'left' || this.chances[0] === 'right'){
                            this.horizontal = true
                            this.direction = this.chances[0]
                        } else if(this.chances[0] === 'up' || this.chances[0] === 'down'){
                            this.vertical = true
                            this.direction = this.chances[0]
                        }
                        this.area = position         
                        return
                    }  
                }
                if(this.area === null) {
                    this.marker = position
                }
                    this.area = position      
                    return        
        }
        count++
    }
    if(player.board()[position] != 'H'){         
        player.board()[position] = 'M'
        cell.setAttribute('style', 'background-color:#B69460;')
        if(this.area === null){       
            return
        }else{
        if(this.horizontal != true || this.vertical != true){
            this.chances.shift()
            return
        } else if(this.horizontal === true || this.vertical === true){
            this.opposite = true    
            return
        }
    }
}
  
     if(player.shipsSunk() === false) {
        console.log(computer.name +' wins')
        reset.setAttribute('style', 'display:block')
        return 
    } 
     if( computer.shipsSunk() === false) {
        console.log(player.name +' wins')
        reset.setAttribute('style', 'display:block')
       return  
    } 
        
    }
    console.log('here') 
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
    ships() {
        return this.gameBoard.ships
    }
     
        shipsSunk() {
        
            const boats = this.ships()
            while( boats.length) {
                if (boats[0].Sunk == false) {
                       
                    return 
                }
                boats.shift()
            }
            console.log('Game Over')
            this.flag = false
            return this.flag
        }
    }
    

const computer = new User('Computer')
