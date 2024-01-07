import GameBoard from "./gameBoard";
import Ship from "./ship";
export default class User {
    gameBoard : GameBoard = new GameBoard
    name: string
    flag: boolean = true
    area:any = null
    chances : string[] = ['left', 'up', 'right', 'down']
    vertical: boolean = false
    horizontal: boolean = false
    opposite:boolean = false
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
        const title:any = document.querySelector('.title')
        if(player.shipsSunk() === false) {

            title.innerHTML = computer.name +' wins'
           
            return 
        } 
         if( computer.shipsSunk() === false) {
            title.innerHTML = player.name +' wins'
         
           return
        }
        let position = 0
        if(this.opposite === false){
             if(this.horizontal === true){
            if(this.chances[0] === 'left'){
                if(this.area %10 ===0){
                    position = this.area+1
                }else{
                position = this.area-1
                }
            } else if(this.chances[0] ==='right'){
                if(this.area %10 === 9){
                    position = this.area-1
                } else{
                position = this.area +1}
            }
        }else if(this.vertical === true){
            if(this.chances[0] === 'up'){
                if(this.area >= 0 && this.area <= 9){
                    position = this.area +10
                }else{
                position = this.area-10}
            } else if(this.chances[0] === 'down'){
                if(this.area >= 90 && this.area <= 99){
                    position = this.area -10
                }else{
                position = this.area +10}
            }
        }else if(this.area != null) {
            if(this.chances[0] === 'left'){
                if(this.area %10 ===0){
                    position = this.area+1
                }else{
                position = this.area-1
                }
            }else if(this.chances[0] === 'up'){
                if(this.area >= 0 && this.area <= 9){
                    position = this.area +10
                }else{
                position = this.area-10}
            }else if(this.chances[0] === 'right'){
                if(this.area %10 === 9){
                    position = this.area-1
                } else{
                position = this.area +1}
            } else if(this.chances[0] ==='down'){
                if(this.area >= 90 && this.area <= 99){
                    position = this.area -10
                }else{
                position = this.area +10}
            }
        }
     else{
        position = Math.floor((Math.random() * 99) + 1)    
        this.marker = position
   } }else if(this.opposite === true){
    if(this.horizontal === true){
        if(this.chances[0] === 'left'){
            position = this.marker + 1
        }else if(this.chances[0] === 'right'){
            position = this.marker -1
        }
    } else if(this.vertical === true){
        if(this.chances[0] === 'up'){
            position = this.marker - 10
        } else if(this.chances[0] === 'down'){
            position = this.marker + 10
        }
    }
     } 
    
         const playerCells = document.querySelectorAll('.playerCell')
       
        const cell = playerCells[position]
       let count = 0
       if(player.board()[position] === 'M' || player.board()[position] === 'H') {
        if(this.horizontal || this.vertical === true){
            this.chances.shift()
            return this.randomAttack(player,computer)
        }
        return this.randomAttack(player, computer)
       } else {
        while(player.ships().length != count) {
            const ship = player.ships()[count]
            const length = ship.positions.length
            for(let i = 0; i < length; i++){
                if(ship.positions[i] === position) {
                    console.log('hit!')
                    
                    cell.setAttribute('style', 'background-color:#800020;')
                    ship.hit()
                    ship.isSunk(computer)
                    if(ship.isSunk(computer) === true){
                        this.area = null
                        this.vertical = false
                        this.horizontal = false
                        this.opposite = false
                        this.chances = ['left', 'up', 'right', 'down']
                        return
                    }
                    player.board()[position] = 'H'
                    
                }
            }
          
            if(player.board()[position] === 'H') {
                console.log('registers hit')
                if(this.vertical || this.horizontal != true) {
                    if(this.area != null) {
                        if(this.chances[0] === 'left' || this.chances[0] === 'right'){
                            this.horizontal = true
                            this.chances = ['left','right']
                        } else if(this.chances[0] === 'up' || this.chances[0] === 'down'){
                            this.vertical = true
                            this.chances = ['up', 'down']
                        }
                        this.area = position
                        console.log('area input: '+ this.area+' hit to the '+ this.chances[0])
                        console.log('horizontal is ' + this.horizontal)
                        console.log('vertical is '+ this.vertical)
                        return
                    }  
                }
                
                    this.area = position
                    console.log('area inputted with '+this.area)
                    return
                
        }
        count++
        
   
    }
    if(player.board()[position] != 'H'){
         
        player.board()[position] = 'M'
        cell.setAttribute('style', 'background-color:#B69460;')
        if(this.area === null){
            console.log('next try')
            return
        }else{
        if(this.horizontal || this.vertical != true){
            console.log('not to the '+ this.chances[0])
            this.chances.shift()
            return
        } else if(this.horizontal || this.vertical === true){
            this.opposite = true
            return
        }
    }
}
  
     if(player.shipsSunk() === false) {
        console.log(computer.name +' wins')
       
        return 
    } 
     if( computer.shipsSunk() === false) {
        console.log(player.name +' wins')
     
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
                if (this.ships()[0].Sunk == false) {
                       
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
 